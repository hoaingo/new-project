CREATE TABLE `pms_notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pr_id` int(11) DEFAULT NULL,
  `notification_name` varchar(45) DEFAULT NULL,
  `notification_content` text,
  `notification_status` tinyint(4) DEFAULT NULL,
  `notification_type` varchar(45) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=198 DEFAULT CHARSET=utf8;
