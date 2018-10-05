CREATE TABLE `pms_sub_type` (
  `sub_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_type_name` varchar(200) CHARACTER SET utf8mb4 NOT NULL,
  `sub_type_description` varchar(200) CHARACTER SET utf8mb4 DEFAULT NULL,
  `created_by` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `updated_by` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  PRIMARY KEY (`sub_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
