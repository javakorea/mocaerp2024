package com.inswave.wrm.util;

import java.awt.AlphaComposite;
import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.DirectColorModel;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class ImageWaterMark {
	public int[] RGB_MASKS = {0xFF0000, 0xFF00, 0xFF};
	public ColorModel RGB_OPAQUE = new DirectColorModel(32, RGB_MASKS[0], RGB_MASKS[1], RGB_MASKS[2]);
	ImageWaterMark(){}
	public void MakeWaterMark(File src,File dest,String strText,int pos,Font fnt){
	  try{
		   BufferedImage srcImage;
		   srcImage = ImageIO.read(src);
		   Graphics2D gp = srcImage.createGraphics();
		   AlphaComposite alphaComposite;
		   alphaComposite = AlphaComposite.getInstance(AlphaComposite.SRC_OVER, (float)0.05); //alpha값
		   int nWidth  = srcImage.getWidth();
		   int nHeight = srcImage.getHeight();
		   gp.setFont(new Font("Bauhaus 93",Font.BOLD,nHeight/2));
		   FontMetrics fm = gp.getFontMetrics();
		   int width = fm.stringWidth(strText);
		   int height = fm.getHeight();
		   gp.setComposite(alphaComposite);
		   gp.setColor(new Color(0,0,0));
		   int x = nWidth/2 - width/2 ;
		   int h = nHeight/2+height/4;
		   gp.drawString(strText,x,h);
		   ImageIO.write(srcImage, "jpg", dest);
	  } catch(IOException e){
		   e.printStackTrace();
	  }
	  finally{
	  }
	 }
	 
	public boolean makeWaterMarkImage(File src,File dest,File waterMark,int pos,Font fnt){
			boolean result = false;
		  try{
			   BufferedImage srcImage;
			   srcImage = ImageIO.read(src);
			   Graphics2D gp = srcImage.createGraphics();
			   AlphaComposite alphaComposite;
			   alphaComposite = AlphaComposite.getInstance(AlphaComposite.SRC_OVER, (float)0.2); //alpha값
			   int nWidth  = srcImage.getWidth();
			   int nHeight = srcImage.getHeight();
			   
			   BufferedImage waterImage;
			   waterImage = ImageIO.read(waterMark);		   
			   int wWidth  = waterImage.getWidth();
			   int wHeight = waterImage.getHeight();
			   
			   gp.setComposite(alphaComposite);
			   gp.setColor(new Color(0,0,0));

			   float reWidth = (float)((float)nWidth*(float)(0.5));
			   float rate = ((float)nHeight*((float)reWidth/(float)nWidth));

			   wWidth = (int)reWidth;
			   wHeight = (int)rate;
			   
			   int x = nWidth/2 - wWidth/2 ;
			   int h = nHeight/2-wHeight/2;
			   
			   gp.drawImage(waterImage, x, h, wWidth, wHeight, null);
			   result = ImageIO.write(srcImage, "jpg", dest);
		  } catch(IOException e){
			   e.printStackTrace();
		  }
		  finally{
		  }
		  return result;
	}
}
