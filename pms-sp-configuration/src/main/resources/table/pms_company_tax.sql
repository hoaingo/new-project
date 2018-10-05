CREATE TABLE `pms_company_tax` (
  `id_company_tax` int(11) NOT NULL,
  `tax_code` varchar(45) DEFAULT NULL,
  `vat` int(50) DEFAULT NULL,
  PRIMARY KEY (`id_company_tax`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
