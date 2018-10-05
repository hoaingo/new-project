CREATE TABLE `pms_invoice` (
  `invoice_id` int(11) NOT NULL AUTO_INCREMENT,
  `status` enum('Due','Pending_Payment','Partial_payment','Paid_In_Full') NOT NULL,
  `created_date` datetime NOT NULL,
  `created_by` varchar(45) NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `invoice_number` int(11) DEFAULT NULL,
  `invoice_received_date` datetime DEFAULT NULL,
  `invoice_due_date` datetime DEFAULT NULL,
  `payment_terms` datetime DEFAULT NULL,
  `invoice_amount` int(11) DEFAULT NULL,
  `invoice_currency` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`invoice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=232363 DEFAULT CHARSET=utf8;
