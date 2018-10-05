CREATE TABLE `pms_purchase_approver` (
  `pr_id` int(11) NOT NULL,
  `level_approve` tinyint(4) NOT NULL,
  `purchase_type` enum('PR','PO') NOT NULL,
  `user_approver_id` int(11) NOT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pr_id`,`level_approve`,`purchase_type`,`user_approver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
