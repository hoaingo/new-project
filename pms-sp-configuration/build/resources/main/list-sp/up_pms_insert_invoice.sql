DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_invoice//
CREATE PROCEDURE  `up_pms_insert_invoice`(pstatus ENUM('Due','Pending_Payment','Partial_payment','Paid_In_Full'),pcreated_by VARCHAR(45), pinvoice_number INT(11),pinvoice_received_date datetime, pinvoice_due_date datetime, ppayment_terms datetime, pinvoice_amount int(11), pinvoice_currency VARCHAR(45))
BEGIN
    INSERT INTO `pms_invoice`
        (
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
        `invoice_currency`)
        VALUES
        (
        pstatus,
        now(),
        pcreated_by,
        null,
        "",
        pinvoice_number,
        pinvoice_received_date,
        pinvoice_due_date,
        ppayment_terms,
        pinvoice_amount,
        pinvoice_currency);

END//
