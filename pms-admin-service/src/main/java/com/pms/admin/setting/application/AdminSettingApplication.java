package com.pms.admin.setting.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@EnableDiscoveryClient
@Configuration
@ComponentScan(basePackages = { "com.pms" })
public class AdminSettingApplication {

    public static void main(String[] args) {
        SpringApplication.run(AdminSettingApplication.class, args);
    }
}
