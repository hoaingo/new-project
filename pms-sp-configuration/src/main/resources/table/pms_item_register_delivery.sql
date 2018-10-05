CREATE TABLE `pms_item_register_delivery` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `description` text,
  `status` enum('Received','Defect','Returned') DEFAULT NULL,
  `awb` int(11) DEFAULT NULL,
  `packing_slip_info` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
