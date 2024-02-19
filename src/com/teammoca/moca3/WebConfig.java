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
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableTransactionManagement
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(final CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET","HEAD","POST","PUT","DELETE","TRACE","OPTIONS","PATCH")
                .allowedHeaders("*")
        		//.allowCredentials(true)
                .maxAge(3000);
    }
    
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
		 //아래설정은 사용하지마시고 로컬사용자는 VM arguments에 다음옵션을 추가해야합니다. -DSERVER_GUBUN=L -DWEBSQUARE_HOME=C:\A_teammoca_repository\git\mocaerp2024\websquare_home
		 //reg.addInitParameter("WEBSQUARE_HOME","C:\\A_teammoca_repository\\eclipse_20231025\\mocaerp2024\\websquare_home");
		  return reg;
	}    
}