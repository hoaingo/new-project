CREATE PROCEDURE `up_pms_get_po_by_code`(pPurchaseOrderCode VARCHAR(20))
BEGIN
    SELECT 	t1.po_id,
			t1.po_code,
            t2.pr_code,
            t1.sub_total,
            t1.tax,
            t1.total_tax,
            t1.total_price,
            t2.purchase_type, 
			t2.purpose,
			t2.required_by,
			t2.within_budget,
			t2.location_used,
			t2.single_tender, 
			t2.priority, 
			t2.project_id,
            t2.vendor_suggest_id as vendor_id,
            t8.vendor_name,
            t1.shipping_id,
            t3.company_name as shipping_company,
            t1.billing_id,
            t4.company_name as billing_company,
            t1.gl_id,
            t5.gl_name,
            t1.petty_id,
            t6.petty_name,
            t1.cc_id,
            t7.cc_name,
            t1.status,
            t1.comment,
            t2.document_id,
            t1.updated_date,
            t1.updated_by
    FROM pms_purchase_order t1 
    INNER JOIN pms_purchase_request t2 ON t2.pr_id = t1.pr_id
    INNER JOIN pms_shipping_address t3 ON t3.shipping_address_id = t1.shipping_id
    INNER JOIN pms_billing_address t4 ON t4.billing_id = t1.billing_id
    INNER JOIN pms_gl_account t5 ON t5.gl_id = t1.gl_id
    INNER JOIN pms_petty_cash_account t6 ON t6.petty_id = t1.petty_id 
    INNER JOIN pms_cost_center t7 ON t7.cc_id = t1.cc_id
	INNER JOIN pms_vendor t8 ON t8.vendor_id = t2.vendor_suggest_id
    
    WHERE t1.po_code = pPurchaseOrderCode;
END//
