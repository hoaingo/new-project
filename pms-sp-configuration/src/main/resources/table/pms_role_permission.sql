CREATE TABLE `pms_role_permission` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `FK_role_id_idx` (`role_id`),
  KEY `FK_permission_id_idx` (`permission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
