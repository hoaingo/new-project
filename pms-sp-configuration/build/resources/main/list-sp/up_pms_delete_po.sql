DELIMITER// 
DROP PROCEDURE IF EXISTS up_pms_delete_po//
CREATE PROCEDURE `up_pms_delete_po` (pPurchaseOrderID VARCHAR(20))
BEGIN
	DELETE FROM `pms_purchase_order`
        WHERE `po_id` = pPurchaseOrderID;
END//
