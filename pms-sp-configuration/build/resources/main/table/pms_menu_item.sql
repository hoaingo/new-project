CREATE TABLE `pms_menu_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `menu_title` varchar(100) NOT NULL,
  `menu_class` varchar(45) DEFAULT NULL,
  `menu_path` varchar(200) DEFAULT '/',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
