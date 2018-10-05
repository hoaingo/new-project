package com.pms.portal.config;

import com.pms.portal.auth.LdapAuthoritiesPopulatorImpl;
import java.util.Collections;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.encoding.LdapShaPasswordEncoder;
import org.springframework.security.authentication.encoding.MessageDigestPasswordEncoder;
import org.springframework.security.authentication.encoding.PasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.ldap.DefaultSpringSecurityContextSource;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    static final Logger LOG = LoggerFactory.getLogger(WebSecurityConfig.class);

    @Autowired
    private LdapAuthoritiesPopulatorImpl ldapAuthoritiesPopulatorImpl;
    @Value("${ldap.user.dn.pattern}")
    private String userDnPattern;

    @Value("${ldap.password.attribute}")
    private String passwordAttribute;

    @Value("${ldap.context.url}")
    private String url;

    @Value("${ldap.context.root}")
    private String root;

    @Value("${ldap.user.dn.pattern.apache}")
    private String userDnPatternApache;

    @Value("${ldap.password.attribute.apache}")
    private String passwordAttributeApache;

    @Value("${ldap.context.url.apache}")
    private String urlApache;

    @Value("${ldap.context.root.apache}")
    private String rootApache;

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Value("${ldap.password.encoder}")
    private String encoder;

    private PasswordEncoder passwordEndcoder;

    @Autowired
    public void getPasswordEnoder() {
        switch (encoder) {
            case "sha":
                passwordEndcoder = new LdapShaPasswordEncoder();
                break;
            case "sha-256":
                passwordEndcoder = new MessageDigestPasswordEncoder("SHA-256");
                break;

        }
//        Map<String, PasswordEncoder> encoders = new HashMap<>();
//        String encodingId = "bcrypt";
//        encoders.put(encodingId, new BCryptPasswordEncoder());
//        encoders.put("ldap", new LdapShaPasswordEncoder());
//        encoders.put("MD4", new Md4PasswordEncoder());
//        encoders.put("MD5", new MessageDigestPasswordEncoder("MD5"));
//        encoders.put("noop", NoOpPasswordEncoder.getInstance());
//        encoders.put("pbkdf2", new Pbkdf2PasswordEncoder());
//        encoders.put("scrypt", new SCryptPasswordEncoder());
//        encoders.put("SHA-1", new MessageDigestPasswordEncoder("SHA-1"));
//        encoders.put("SHA-256", new MessageDigestPasswordEncoder("SHA-256"));
//        encoders.put("sha256", new StandardPasswordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/resources/**", "/locales/**", "/send-noti/**", "/send-noti-postman", "/unSubscribe").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin().loginPage("/login")
                .defaultSuccessUrl("/")
                .failureUrl("/login?error=true")
                .usernameParameter("username")
                .passwordParameter("password")
                .permitAll()
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .and().exceptionHandling().and().csrf().disable();

    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                .ignoring()
                .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/img/**", "/locales/**");

    }

//    @Autowired
//    public void configureLDAP(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//                .ldapAuthentication()
//                .userDnPatterns(userDnPattern)
//                .contextSource(contextSource())
//                .passwordCompare()
//                .passwordEncoder(new LdapShaPasswordEncoder())
//                .passwordAttribute(passwordAttribute)
//                .and()
//                .ldapAuthoritiesPopulator(ldapAuthoritiesPopulatorImpl);
//
//    }

//
//    @Autowired
//    public void configureLDAPApache(AuthenticationManagerBuilder auth) throws Exception {
//        LOG.info("config-apache");
//        auth
//                .ldapAuthentication()
//                .userDnPatterns(userDnPatternApache)
//                .contextSource(contextSourceApache()).ldapAuthoritiesPopulator(ldapAuthoritiesPopulatorImpl);
//    }
//
//    @Bean
//    public DefaultSpringSecurityContextSource contextSource() {
//        return new DefaultSpringSecurityContextSource(
//                Collections.singletonList(url), root);
//    }
//
//    @Bean
//    public DefaultSpringSecurityContextSource contextSourceApache() {
//        return new DefaultSpringSecurityContextSource(
//                Collections.singletonList(urlApache), rootApache);
//    }
//    @Bean
//    public ServletListenerRegistrationBean<HttpSessionEventPublisher> httpSessionEventPublisher() {
//        return new ServletListenerRegistrationBean<HttpSessionEventPublisher>(new HttpSessionEventPublisher());
//    }
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        LOG.info("config-db");
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }
}
