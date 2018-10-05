CREATE TABLE `pms_request_for_bidding` (
  `rfb_id` int(11) NOT NULL AUTO_INCREMENT,
  `price` decimal(17,4) NOT NULL,
  `receive_price_date` datetime DEFAULT NULL,
  `item_id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `estimate_time` varchar(45) DEFAULT NULL,
  `status` enum('Open','Pending','Done') NOT NULL,
  `created_date` datetime NOT NULL,
  `created_by` varchar(45) NOT NULL,
  PRIMARY KEY (`rfb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
