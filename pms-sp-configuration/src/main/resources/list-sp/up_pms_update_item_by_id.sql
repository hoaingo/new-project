DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_item_by_id//
CREATE PROCEDURE `up_pms_update_item_by_id`(pItemID INT(11), pItemName varchar(100), pItemType varchar(60), pUpdateBy varchar(60))
BEGIN
	UPDATE `pms_item`
		SET
        name = pItemName,
        description = pItemDescription,
        type = pItemType,
        sub_type = pItemSubType,
        unit_measurement = pUnitMeasurement,
        updated_by = pUpdatedby,
        updated_date = now()
        
        WHERE id = pItemID;
	
    
END//
