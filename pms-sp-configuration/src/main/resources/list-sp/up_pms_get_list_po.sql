DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_po//
CREATE PROCEDURE `up_pms_get_list_po`()
BEGIN
	SELECT `po_id`,
                `pr_id`,
                `shipping_id`,
                `billing_id`,
                `gl_id`,
                `petty_id`,
                `invoice_id`,
                `status`,
                `comment`,
                `level_processing`,
                `created_date`,
                `created_by`,
                `updated_date`,
                `updated_by`
	FROM pms_purchase_order ;   
END//

