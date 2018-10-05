DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_get_list_notification//
CREATE PROCEDURE `up_pms_get_detail_notification`(pPr_ID INT(11))
BEGIN
	SELECT 
		t1.pr_id
        ,t1.pr_code
        ,t1.total_price
        ,t1.total_tax
        ,t1.priority
        ,t1.status
        ,t1.required_by
        ,t1.product_type
        ,t1.product_sub_type
        ,t1.purpose
        ,t1.level_processing
        ,t1.created_date
        ,t1.created_by
    FROM pms_notification t2
    INNER JOIN pms_purchase_request t1 ON t2.pr_id = t1.pr_id 
    WHERE t2.pr_id = pPr_ID ;

END//