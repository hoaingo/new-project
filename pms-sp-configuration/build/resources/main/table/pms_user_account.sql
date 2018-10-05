CREATE TABLE `pms_user_account` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `user_password` varchar(150) NOT NULL,
  `department` varchar(45) NOT NULL,
  `roles` varchar(45) NOT NULL,
  `maximum_approve_pr` int(11) NOT NULL,
  `maximum_approve_po` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `created_by` varchar(45) NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
