/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  john.intern
 * Created: May 17, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_notification//
CREATE PROCEDURE `up_pms_insert_notification`(ppr_id int(11),pnotification_name varchar(200),pnotification_content VARCHAR(200),pnotification_status boolean,pnotification_type VARCHAR(100),puser_id VARCHAR(100),purl VARCHAR(200))
BEGIN
    INSERT INTO `pms_notification`
    (
        `pr_id`,
        `notification_name`,
        `notification_content`,
        `notification_status`,
        `notification_type`,
        `user_id`,
        `url` 
    )
    VALUES
    (
        ppr_id,
        pnotification_name,
        pnotification_content,
        pnotification_status,
        pnotification_type,
        puser_id,
        purl
    );
END