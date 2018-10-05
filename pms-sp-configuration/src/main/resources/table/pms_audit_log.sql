CREATE TABLE `pms_audit_log` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` enum('PR','PO','Billing','Shipping') NOT NULL,
  `message` text NOT NULL,
  `log_date` datetime NOT NULL,
  `log_by` varchar(45) NOT NULL,
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
