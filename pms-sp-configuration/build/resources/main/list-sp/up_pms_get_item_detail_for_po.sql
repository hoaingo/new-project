CREATE PROCEDURE `up_pms_get_item_detail_for_po`(pPurchaseOrderCode VARCHAR(20))
BEGIN
	SELECT 	t1.po_code,
			t3.item_id,
			t4.name as item_name,
            t4.description as item_description,
            t4.type as product_type,
            t4.sub_type as product_sub_type,
            t3.vendor_id,
            t5.vendor_name,
            t3.unit_price,
            t3.quantity,
            t3.currency_code
    FROM pms_purchase_order t1 
    INNER JOIN pms_purchase_request t2 ON t2.pr_id = t1.pr_id
	INNER JOIN pms_purchase_request_detail t3 ON t3.pr_id = t2.pr_id
    INNER JOIN pms_item t4 ON t4.id = t3.item_id
    INNER JOIN pms_vendor t5 ON t5.vendor_id = t3.vendor_id 
    WHERE t1.po_code = pPurchaseOrderCode;
END