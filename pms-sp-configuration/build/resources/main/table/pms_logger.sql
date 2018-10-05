CREATE TABLE `pms_logger` (
  `logger_id` int(11) NOT NULL AUTO_INCREMENT,
  `logger_status` varchar(500) DEFAULT NULL,
  `logger_function` varchar(400) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `by_user` varchar(100) DEFAULT NULL,
  `logger_param` varchar(500) DEFAULT NULL,
  `logger_result` varchar(500) DEFAULT NULL,
  `logger_exception` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`logger_id`)
) ENGINE=InnoDB AUTO_INCREMENT=355 DEFAULT CHARSET=utf8;
