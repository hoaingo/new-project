DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_shipping//
CREATE PROCEDURE `up_pms_update_shipping`(pId int(11) ,pNotificationType  varchar(100))
BEGIN
	UPDATE `pms_notification`
		SET
		`notification_type` = pNotificationType
		
        
		WHERE `id` = pId;

END//