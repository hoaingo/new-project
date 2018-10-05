DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_delete_billing_address//
CREATE PROCEDURE `up_pms_delete_billing_address`(pbillingid int(11))
BEGIN
	DELETE FROM `pms_billing_address`
WHERE `billing_id` = pbillingid;

END//