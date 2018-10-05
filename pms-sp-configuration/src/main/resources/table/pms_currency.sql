CREATE TABLE `pms_currency` (
  `currency_code` char(3) NOT NULL,
  `currency_name` varchar(60) DEFAULT NULL,
  `rate` decimal(25,7) unsigned NOT NULL DEFAULT '0.0000000',
  `pending_rate` decimal(25,7) NOT NULL DEFAULT '0.0000000',
  `is_enabled` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `is_base` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `unit` int(11) NOT NULL DEFAULT '1',
  `batch_id` int(10) unsigned NOT NULL,
  `last_update_by` varchar(20) DEFAULT NULL,
  `last_update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`currency_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
