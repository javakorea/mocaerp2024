package com.teammoca.moca3;

import javax.servlet.Servlet;
import javax.servlet.ServletContext;
import javax.servlet.ServletRegistration;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EnableTransactionManagement
public class Config {

	@Autowired
	ApplicationContext applicationContext;
    @Bean
    public  SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
          final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
           sessionFactory.setDataSource(dataSource);
    
          PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
          sessionFactory.setMapperLocations(resolver.getResources("classpath:M/*.xml"));
          //sessionFactory.setConfigLocation(applicationContext.getResource("classpath:Mapper/mybatis-config.xml"));
          sessionFactory.getObject().getConfiguration().setMapUnderscoreToCamelCase(true);
          return sessionFactory.getObject();
      }
}
