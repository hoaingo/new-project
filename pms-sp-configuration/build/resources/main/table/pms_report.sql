CREATE TABLE `pms_report` (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_name` varchar(45) NOT NULL,
  `report_content` text NOT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
