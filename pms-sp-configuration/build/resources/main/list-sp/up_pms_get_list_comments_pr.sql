CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_list_comments_pr`()
BEGIN
	SELECT  pr_id ,
			pr_code,
            additional_comment,
            created_by,
            created_date,
            updated_by,
            updated_date
			
	FROM pms_purchase_request 
    ORDER BY updated_date DESC LIMIT 10
	;
    
    
END