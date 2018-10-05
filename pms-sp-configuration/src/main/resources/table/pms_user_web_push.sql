CREATE TABLE `pms_user_web_push` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `endpoint` varchar(400) DEFAULT NULL,
  `p256dh` varchar(300) DEFAULT NULL,
  `auth` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
