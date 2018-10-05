package com.pms.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

/**
 *
 * @author Conan.Huynh
 */
@Configuration
@PropertySource("classpath:sp-list.properties")
public class PropertiesSPConfig {
 
   @Bean
   public static PropertySourcesPlaceholderConfigurer
     propertySourcesPlaceholderConfigurer() {
      return new PropertySourcesPlaceholderConfigurer();
   }
}
