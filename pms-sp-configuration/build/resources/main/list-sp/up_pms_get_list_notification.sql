DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_notification//
CREATE PROCEDURE `up_pms_get_list_notification`(pUserID INT(11), pNotificationStatus boolean)
BEGIN
	SELECT `id`,
		`notification_name`,
                `notification_content`,
                `notification_status`,
                `notification_type`,
                `pr_id`,
                `user_id`,
                `url`   
				
	FROM `pms_notification`
   
    WHERE `user_id` = pUserID and `notification_status` = pNotificationStatus ;

END//