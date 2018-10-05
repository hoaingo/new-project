DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_invoice//
CREATE  PROCEDURE `up_pms_delete_invoice`(pinvoice_id int(11) )
BEGIN
DELETE FROM `pms_invoice`
WHERE  `invoice_id`=pinvoice_id;
END//