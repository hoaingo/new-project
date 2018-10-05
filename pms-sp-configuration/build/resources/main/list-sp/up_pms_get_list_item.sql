DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_item//
CREATE PROCEDURE `up_pms_get_list_item`()
BEGIN
	SELECT t1.`id`,
		t1.`name`,
        t1.`description`,
		t1.`type`,
        t1.`sub_type`,
        t1.`unit_measurement`,
		t1.`created_by`,
        t1.`created_date`,
		t1.`updated_by`,
        t1.`updated_date`,
        t2.product_type_name ,
        t3.sub_type_name
	FROM `pms_item` t1
    INNER JOIN pms_product_type t2 ON t2.product_type_id = t1.type
    INNER JOIN pms_sub_type t3 ON t3.sub_type_id = t1.sub_type;

END//
