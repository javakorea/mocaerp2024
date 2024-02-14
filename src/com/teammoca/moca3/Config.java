package com.teammoca.moca3;

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
          sessionFactory.getObject().getConfiguration().setMapUnderscoreToCamelCase(true);
          return sessionFactory.getObject();
      }
    
	@Bean
	public ServletRegistrationBean<javax.servlet.Servlet> websquareDispatcher() {
		  ServletRegistrationBean<javax.servlet.Servlet> reg = new ServletRegistrationBean<javax.servlet.Servlet>();
		  reg.setServlet(new websquare.http.DefaultRequestDispatcher());
		 reg.addUrlMappings("*.wq"); 
		 //reg.addInitParameter("WEBSQUARE_HOME","C:\\A_teammoca_repository\\eclipse_20231025\\mocaerp2024\\websquare_home");
		  return reg;
	}
}
