CREATE TABLE `pms_document` (
  `document_id` int(11) NOT NULL AUTO_INCREMENT,
  `data` longblob,
  `file_name` varchar(45) DEFAULT NULL,
  `file_type` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`document_id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8;
