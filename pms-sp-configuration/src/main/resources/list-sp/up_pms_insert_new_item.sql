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
DROP PROCEDURE IF EXISTS up_pms_insert_item//
CREATE PROCEDURE `up_pms_insert_item`(pItemName varchar(100), pItemType varchar(60), pUpdateBy varchar(60))
BEGIN
	INSERT INTO `pms_item`(item_name, item_type, created_date, created_by)
            VALUES(pItemName,pItemType, now(), pUpdateBy);
    SELECT * FROM `pms_item` ORDER BY item_id DESC LIMIT 1;

END//