-- CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_get_pr_approve`()
-- BEGIN
-- 	SELECT 
-- 		t1.pr_id
--         ,t1.level_approve
--         ,t1.purchase_type
--         ,t1.user_approver_id
--         ,t1.status
--         ,t1.update_date
--         ,t1.update_by
--         ,t2.total_price
--         ,t2.pr_code
--       
--         
--     FROM pms_purchase_process_approve t1
--     Left JOIN pms_purchase_request t2 on t1.pr_id = t2.pr_id
--     WHERE t2.status = "Purchase_Request_Approved"
--     ;
--    
-- END