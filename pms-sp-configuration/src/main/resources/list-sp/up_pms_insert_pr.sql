/**
 * Author:  KATY
 * Created: Apr 2, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_pr//
CREATE PROCEDURE `up_pms_insert_pr`(
						pPr_type INT(11), 				pPr_porpuse VARCHAR(200), 		pPr_required_by DATE, 			pPr_within_budget INT(45),
						pPr_location_used VARCHAR(45), 	pPr_single_tender INT(11), 		pPr_vendor_suggest_id INT(11), 	pPr_priority VARCHAR(45),
                        pPr_project_id INT(11), 		pPr_cost_center_id VARCHAR(45),	pPr_gl_id INT(11), 				pPr_billing_id INT(11),
                        pPr_shipping_id INT(11), 		pPr_document_id INT(11),		pPr_additional_comment VARCHAR(200),pPr_created_by VARCHAR(45) 
					)
BEGIN

	DECLARE v_pr_id INT(11);
    DECLARE v_pr_code VARCHAR(20);
    DECLARE v_level_processing tinyint(4);
    
    DECLARE v_user_id_approve INT(11);
    
    SET v_level_processing = 1; -- TODO: only temp
    SET v_user_id_approve = 1; -- TODO: only temp

	INSERT INTO pms_purchase_request(
					purchase_type,		purpose,			required_by,			within_budget,
                    location_used,		single_tender,		vendor_suggest_id,		priority,
                    project_id,			cost_center_id, 	gl_id,					billing_id,
                    shipping_id, 		document_id,		additional_comment,
                    
                    created_by,			created_date, 		updated_by,				updated_date,
                    level_processing
				)
                      
                 
        VALUES(		
					pPr_type, 			pPr_porpuse,		pPr_required_by,		pPr_within_budget,
                    pPr_location_used,	pPr_single_tender,	pPr_vendor_suggest_id,	pPr_priority,
                    pPr_project_id,		pPr_cost_center_id,	pPr_gl_id,				pPr_billing_id,
                    pPr_shipping_id,	pPr_document_id,	pPr_additional_comment,
                    
                    pPr_created_by,		now(),				pPr_created_by,			now(),
                    v_level_processing
				);
         
        SET v_pr_id =  LAST_INSERT_ID();
        SET v_pr_code = CONCAT('PR-',v_pr_id);
        UPDATE pms_purchase_request SET pr_code = v_pr_code WHERE pr_id = v_pr_id;
        
        INSERT INTO `pms_purchase_approver`
			(`pr_id`,
			`level_approve`,
			`purchase_type`,
			`user_approver_id`,
			`update_date`,
			`update_by`)
			VALUES
			(v_pr_id,
			v_level_processing,
			'PR',
			v_user_id_approve,
			NOW(),
			pPr_created_by);

		
		SELECT v_pr_id;
END//
