CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_list_recently_pr`()
BEGIN
	SELECT  pr_id ,
			pr_code,
            created_by,
            created_date,
            updated_by,
            updated_date
			
	FROM pms_purchase_request 
    ORDER BY pr_id DESC LIMIT 10
	;
    
    
END