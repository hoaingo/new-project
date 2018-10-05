CREATE TABLE `pms_purchase_process_approve` (
  `pr_id` int(11) NOT NULL,
  `level_approve` tinyint(4) NOT NULL,
  `purchase_type` enum('PR','PO') NOT NULL,
  `user_approver_id` int(11) NOT NULL,
  `status` enum('Purchase_Request_Submitted','Purchase_Request_Approved','Purchase_Request_Pending','Purchase_Request_In_Progress','Purchase_Request_Rejected','Purchase_Request_Voided') NOT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`pr_id`,`level_approve`,`purchase_type`,`user_approver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
