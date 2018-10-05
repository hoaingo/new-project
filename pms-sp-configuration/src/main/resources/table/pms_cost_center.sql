CREATE TABLE `pms_cost_center` (
  `cc_id` varchar(45) NOT NULL,
  `gl_code` varchar(45) NOT NULL,
  `cc_name` varchar(45) NOT NULL,
  `cc_description` varchar(45) NOT NULL,
  `user_responsible` varchar(45) NOT NULL,
  `department` varchar(45) NOT NULL,
  `created_date` datetime NOT NULL,
  `created_by` varchar(45) NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cc_id`),
  KEY `FK_cc_item_id_idx` (`cc_name`),
  KEY `FK_cc_vendor_id_idx` (`user_responsible`),
  KEY `gl_code_idx` (`gl_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
