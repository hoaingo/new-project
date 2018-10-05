DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_invoice//
CREATE PROCEDURE `up_pms_get_list_invoice`()
BEGIN

    SELECT 
            `invoice_id`,
            `status`,
            `created_date`,
            `created_by`,
            `updated_date`,
            `updated_by`,
            `invoice_number`,
            `invoice_received_date`,
            `invoice_due_date`,
            `payment_terms`,
            `invoice_amount`,
            `invoice_currency`
    FROM    `pms_invoice`;


END//
