CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_list_pr_last_month`(pPerMonth int(2))
BEGIN
	SELECT month(updated_date)  month, sum(total_price) total_price 
        FROM internship.pms_purchase_request 
        WHERE month(updated_date) + (year(updated_date) - year(CURRENT_TIMESTAMP))*12  >= (MONTH(CURRENT_TIMESTAMP)-pPerMonth+1)
	GROUP BY month ;
    
    
END