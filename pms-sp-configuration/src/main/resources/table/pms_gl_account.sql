CREATE TABLE `pms_gl_account` (
  `gl_id` int(11) NOT NULL AUTO_INCREMENT,
  `gl_code` varchar(45) NOT NULL,
  `gl_name` varchar(45) NOT NULL,
  `gl_description` varchar(45) NOT NULL,
  `gl_budget` decimal(17,2) NOT NULL,
  `gl_owner` varchar(45) NOT NULL,
  `expense_type` enum('CAPEX','OPEX') NOT NULL,
  `additional_budget` decimal(17,2) DEFAULT NULL,
  `relocate_budget` decimal(17,2) DEFAULT NULL,
  `year` float NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`gl_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1014 DEFAULT CHARSET=utf8;
