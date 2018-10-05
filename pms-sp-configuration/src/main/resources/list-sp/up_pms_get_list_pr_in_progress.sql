DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_pr_in_progress//
CREATE PROCEDURE `up_pms_get_list_pr_in_progress`()
BEGIN
	SELECT  t1.pr_id,
			
			t1.pr_code,
            t1.level_processing,
			
			t1.purchase_type,
			t1.purpose,
			t1.required_by,
			t1.within_budget,
			t1.location_used,
			t1.single_tender,
			t1.vendor_suggest_id,
			t1.priority,
			t1.project_id,
			t1.cost_center_id,
			t1.gl_id,
			t1.billing_id,
			t1.shipping_id,
			t1.document_id,
			t1.additional_comment,
			t1.sub_total,
			t1.total_tax,
			t1.total_price,
			t1.status,
			t1.created_by,
			t1.created_date,
			t1.updated_by,
			t1.updated_date,
            t2.data,
            t2.file_name,
			t3.vendor_name,
            t4.gl_name,
            t5bill.contact_name,
            t6ship.company_name,
            t7cost.cc_name
	FROM pms_purchase_request t1
    left JOIN pms_document t2 ON t1.document_id = t2.document_id
    left JOIN pms_gl_account t4 on t1.gl_id = t4.gl_id
	left JOIN pms_vendor t3 on t1.vendor_suggest_id = t3.vendor_id
    left JOIN pms_billing_address t5bill on t1.billing_id = t5bill.billing_id
    left JOIN pms_shipping_address t6ship on t1.shipping_id = t6ship.shipping_address_id
    left JOIN pms_cost_center t7cost on t1.cost_center_id = t7cost.cc_id
    where t1.status = 'Purchase_Request_In_Progress'
    ORDER BY t1.updated_date DESC
	;
    
    
END//