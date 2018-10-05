DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_item//
CREATE PROCEDURE `up_pms_insert_item`(pItem_name VARCHAR(45), pItem_description VARCHAR(200), pItem_type INT(11), pItem_sub_type INT(11), pItem_unit_measurement INT(11), pCreated_by VARCHAR(45))
BEGIN
	
	INSERT INTO pms_item(name, description, type, sub_type, unit_measurement, created_by, created_date, updated_by, updated_date)
        VALUE     (pItem_name, pItem_description, pItem_type, pItem_sub_type, pItem_unit_measurement, pCreated_by, now(), pCreated_by, now());

	CALL up_pms_get_item_by_id(LAST_INSERT_ID());

END//
