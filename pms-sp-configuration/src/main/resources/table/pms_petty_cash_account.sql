CREATE TABLE `pms_petty_cash_account` (
  `petty_id` int(11) NOT NULL AUTO_INCREMENT,
  `petty_name` varchar(80) NOT NULL,
  `amount` decimal(17,2) NOT NULL,
  `status` enum('Open','Pending','Approved','Rejected') NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`petty_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
