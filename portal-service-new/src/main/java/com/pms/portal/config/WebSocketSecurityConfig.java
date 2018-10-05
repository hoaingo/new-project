package com.pms.portal.config;

import com.pms.portal.*;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.security.config.annotation.web.messaging.MessageSecurityMetadataSourceRegistry;
import org.springframework.security.config.annotation.web.socket.AbstractSecurityWebSocketMessageBrokerConfigurer;

/**
 *
 * @author john.intern
 */
@Configuration
public class WebSocketSecurityConfig extends AbstractSecurityWebSocketMessageBrokerConfigurer {

    @Override
    protected void configureInbound(MessageSecurityMetadataSourceRegistry messages) {
        messages
                .nullDestMatcher().authenticated()
                .simpSubscribeDestMatchers("/user/topic/sendMessengerToOneUser/**").authenticated()
                .simpSubscribeDestMatchers("/topic/sendMessengerToAllUser/**").authenticated()
                .simpTypeMatchers(SimpMessageType.CONNECT).authenticated()
                .simpTypeMatchers(SimpMessageType.SUBSCRIBE).authenticated()
                .anyMessage().authenticated();

    }

    @Override
    protected boolean sameOriginDisabled() {
        return true;
    }
}
