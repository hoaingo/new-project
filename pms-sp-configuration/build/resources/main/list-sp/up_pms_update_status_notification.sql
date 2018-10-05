DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_shipping//
CREATE PROCEDURE `up_pms_update_shipping`(pId int(11) ,pNotificationStatus boolean)
BEGIN
	UPDATE `pms_notification`
		SET
		`notification_status` = pNotificationStatus
		
        
		WHERE `id` = pId;

END//