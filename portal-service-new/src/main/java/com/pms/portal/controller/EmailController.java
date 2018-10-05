package com.pms.portal.controller;

import com.pms.model.EmailDTO;
import com.pms.portal.feign.EmailClient;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    EmailClient emailClient;

    @RequestMapping("/pms/email/get-list-email")
    public List<EmailDTO> getlistEmailTemplate() {
        return emailClient.getlistEmailTemplate();

    }

    @RequestMapping("/pms/email/get-list-variable")
    public List getListVariable() {
        return emailClient.getListVariable();
    }

    @RequestMapping("pms/email/add-email")
    public void addEmail(@RequestBody EmailDTO email) {
        emailClient.addEmail(email);
    }

    @RequestMapping("/pms/email/get-email-by-id")
    public EmailDTO getEmailById(@RequestParam("email_template_id") int emailTemplateId) {
        return emailClient.getEmailById(emailTemplateId);
    }

    @RequestMapping("/pms/email/update-email")
    public void updateEmail(@RequestBody EmailDTO email) {
        emailClient.updateEmail(email);

    }

    @RequestMapping("/pms/email/delete-email")
    public void deleteEmail(@RequestBody EmailDTO email) {
        emailClient.deleteEmail(email);
    }

    @RequestMapping(value = "/pms/email/send-email")
    public void sendEmail(@RequestBody EmailDTO email) {
        emailClient.sendEmail(email);
    }
}
