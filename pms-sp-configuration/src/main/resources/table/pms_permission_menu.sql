CREATE TABLE `pms_permission_menu` (
  `permission_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  PRIMARY KEY (`permission_id`,`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

