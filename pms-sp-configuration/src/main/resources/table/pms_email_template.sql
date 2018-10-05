CREATE TABLE `pms_email_template` (
  `email_template_id` int(11) NOT NULL AUTO_INCREMENT,
  `email_template_name` varchar(100) NOT NULL,
  `subject` text,
  `message` text,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`email_template_id`)
) ENGINE=InnoDB AUTO_INCREMENT=310 DEFAULT CHARSET=utf8;
