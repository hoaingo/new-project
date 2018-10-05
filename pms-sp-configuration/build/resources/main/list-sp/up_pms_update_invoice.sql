/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  john.intern
 * Created: May 16, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_invoice//
CREATE  PROCEDURE `up_pms_update_invoice`(pinvoice_id int,pstatus ENUM('Due','Pending_Payment','Partial_payment','Paid_In_Full'),pupdated_by VARCHAR(45), pinvoice_number INT(11),pinvoice_received_date datetime, pinvoice_due_date datetime, ppayment_terms datetime, pinvoice_amount int(11), pinvoice_currency VARCHAR(45))
BEGIN
	UPDATE `pms_invoice`
	SET
			`status` = pstatus,
			`updated_date` = NOW(),
			`updated_by` = pupdated_by,
			`invoice_number` = pinvoice_number,
			`invoice_received_date` = pinvoice_received_date,
			`invoice_due_date` = pinvoice_due_date,
			`payment_terms` = ppayment_terms,
			`invoice_amount` = pinvoice_amount,
			`invoice_currency` = pinvoice_currency
	WHERE 	`invoice_id` = pinvoice_id;

END