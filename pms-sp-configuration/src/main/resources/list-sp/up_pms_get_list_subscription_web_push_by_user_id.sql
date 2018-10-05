/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  gohan.intern
 * Created: Apr 2, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_subscription_web_push_by_user_id//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_list_subscription_web_push_by_user_id`(pUserId int)
BEGIN
		select id, endpoint , p256dh, auth from pms_user_web_push where user_id=pUserId;

END