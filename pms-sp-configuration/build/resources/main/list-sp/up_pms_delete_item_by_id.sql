/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  mark.intern
 * Created: Apr 24, 2018
 */

DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_item_by_id//
CREATE PROCEDURE `up_pms_delete_item_by_id`(pItemID INT(11))
BEGIN
	DELETE FROM `pms_item`
		WHERE item_id = pItemID;

END//