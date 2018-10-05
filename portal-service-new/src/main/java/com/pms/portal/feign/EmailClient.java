package com.pms.portal.feign;

import com.pms.model.EmailDTO;
import com.pms.model.VariableDTO;
import java.util.List;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;


@Configuration
@EnableFeignClients

@FeignClient("pms-email-service")
public interface EmailClient {

    @RequestMapping(value = "/pms/email/get-list-email", method = GET)
    List<EmailDTO> getlistEmailTemplate();
   
    
    @RequestMapping(value = "/pms/email/get-list-variable", method = GET)
    List<VariableDTO> getListVariable();

    @RequestMapping(value = "/pms/email/get-email-by-id", method = GET)
    EmailDTO getEmailById(@RequestParam("email_template_id") int emailTemplateId);

    @RequestMapping(value = "/pms/email/add-email", method = POST)
    boolean addEmail(EmailDTO email);

    @RequestMapping(value = "/pms/email/delete-email", method = POST)
    boolean deleteEmail(@RequestBody EmailDTO email);

    @RequestMapping(value = "/pms/email/update-email", method = POST)
    boolean updateEmail(EmailDTO email) ;
    
    @RequestMapping(value = "/pms/email/send-email", method = POST)
    void sendEmail(EmailDTO email) ;
}
