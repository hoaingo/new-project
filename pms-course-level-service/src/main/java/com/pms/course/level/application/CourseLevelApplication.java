package com.pms.course.level.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@EnableDiscoveryClient
@Configuration
@ComponentScan(basePackages = { "com.pms" })
public class CourseLevelApplication {

    public static void main(String[] args) {
        SpringApplication.run(CourseLevelApplication.class, args);
    }
}
