CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_po_by_id`(pPurchaseOrderID VARCHAR(20))
BEGIN
    SELECT t1.po_id,
            t1.status,
            t2.pr_code,
            t3.company_name,
            t4.company_name,
            t5.gl_code,
            t6.petty_name
    FROM pms_purchase_order t1 
    INNER JOIN pms_purchase_request t2 ON t2.pr_id = t1.pr_id
    INNER JOIN pms_shipping_address t3 ON t3.shipping_address_id = t1.shipping_id
    INNER JOIN pms_billing_address t4 ON t4.billing_id = t1.billing_id
    INNER JOIN pms_gl_account t5 ON t5.gl_id = t1.gl_id
    INNER JOIN pms_petty_cash_account t6 ON t6.petty_id = t1.petty_id 
    WHERE t1.po_id = pPurchaseOrderID;

END