CREATE TABLE `pms_shipping_address` (
  `shipping_address_id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(200) DEFAULT NULL,
  `company_name` varchar(200) DEFAULT NULL,
  `address_1` varchar(500) DEFAULT NULL,
  `address_2` varchar(500) DEFAULT NULL,
  `address_3` varchar(500) DEFAULT NULL,
  `postal_code` int(11) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(200) DEFAULT NULL,
  `office_location` varchar(200) DEFAULT NULL,
  `contact_name` varchar(100) DEFAULT NULL,
  `contact_phone` varchar(100) DEFAULT NULL,
  `contact_email` varchar(100) DEFAULT NULL,
  `additional_information` varchar(500) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`shipping_address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8;
