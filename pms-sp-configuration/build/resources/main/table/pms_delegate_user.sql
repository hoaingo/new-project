CREATE TABLE `pms_delegate_user` (
  `user_id` int(11) NOT NULL,
  `delegated_user_id` int(11) NOT NULL,
  `delegate_from_date` datetime NOT NULL,
  `delegate_expired_date` datetime NOT NULL,
  `is_running` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
