package com.pms.portal.config;

import com.google.common.cache.CacheBuilder;
import java.util.concurrent.TimeUnit;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.guava.GuavaCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author Conan
 */
@Configuration
@EnableCaching
public class CachingConfig extends CachingConfigurerSupport {

    @Override
    @Bean
    public CacheManager cacheManager() {
//        return new ConcurrentMapCacheManager("account");
        GuavaCacheManager cacheManager = new GuavaCacheManager();
        return cacheManager;
    }

    @Bean
    public CacheManager timeoutCacheManager() {
        GuavaCacheManager cacheManager = new GuavaCacheManager();
        CacheBuilder<Object, Object> cacheBuilder = CacheBuilder.newBuilder()
                .maximumSize(100)
                .expireAfterWrite(50, TimeUnit.SECONDS);
        cacheManager.setCacheBuilder(cacheBuilder);
        return cacheManager;
    }

}
