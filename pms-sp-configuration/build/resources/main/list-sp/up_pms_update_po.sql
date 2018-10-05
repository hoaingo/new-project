DELIMITER//
DROP PROCEDURE IF EXISTS up_pms_update_po//
CREATE PROCEDURE `up_pms_update_po`(pPurchaseOrderID VARCHAR(20), pShippingID INT(11), pBillingID INT(11), pGlID INT(11),
                                    pPettyID INT(11), pInvoiceID INT(11), pComment TEXT,  pUpdatedBy VARCHAR(45))
BEGIN
	UPDATE `pms_purchase_order`
            SET
                `shipping_id` = pShippingID,
                `billing_id` = pBillingID,
                `gl_id` = pGlID,
                `petty_id` = pPettyID,
                `invoice_id` = pInvoiceID,
                `comment` = pComment,
                `updated_date` = NOW(),
                `updated_by` = pUpdatedBy
            WHERE `po_id` = pPurchaseOrderID;
END//