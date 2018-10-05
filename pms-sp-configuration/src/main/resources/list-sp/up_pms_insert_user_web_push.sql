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
DROP PROCEDURE IF EXISTS up_pms_insert_user_web_push//
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_insert_user_web_push`(pUserId int , pEndpoint varchar(400), pP256dh varchar(300), pAuth varchar(100))
BEGIN
		INSERT INTO `pms_user_web_push`
				(`user_id`,
				`endpoint`,
				`p256dh`,
				`auth`)
				VALUES
				(pUserId,
				pEndpoint,
				pP256dh,
				pAuth);

END
