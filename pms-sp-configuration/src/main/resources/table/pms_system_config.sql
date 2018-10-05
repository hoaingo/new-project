CREATE TABLE `pms_system_config` (
  `system_config_id` int(11) NOT NULL AUTO_INCREMENT,
  `config_key` varchar(45) NOT NULL,
  `config_value` varchar(45) NOT NULL,
  `description` text,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`system_config_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
