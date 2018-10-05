CREATE TABLE `pms_purchase_request_detail` (
  `prd_id` int(11) NOT NULL AUTO_INCREMENT,
  `pr_id` int(11) NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `vendor_id` int(11) DEFAULT NULL,
  `gl_id` int(11) DEFAULT NULL,
  `currency_code` char(3) DEFAULT NULL,
  `unit_price` float DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `shipping_id` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`prd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=309 DEFAULT CHARSET=utf8;
