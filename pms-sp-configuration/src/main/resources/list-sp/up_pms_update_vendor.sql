DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_vendor//
CREATE PROCEDURE `up_pms_update_vendor`
(pVendor_id VARCHAR(45), pVendor_name VARCHAR(150),
 pVendor_score VARCHAR(45), pRoles VARCHAR(45),
 pMaxApprovePR INT(11), pMaxApprovePO INT(11),
pCreated_date datetime, pUpdateBy VARCHAR(45),
pCurrency varchar(45), pDescription varchar(45),
 pCity varchar(45),pState varchar(45), pCountry varchar(45), 
 pPostal_code varchar(15), pEmail varchar(45), 
 pPhone varchar(15), pFax varchar(15), pWeb_url varchar(100))
BEGIN
	UPDATE `up_pms_update_vendor`
		SET
		`Vendor_name` = pVendor_name,
		`Vendor_score` = pVendor_score,
		`Product_type` = pProduct_type,
                `Vendor_address` = pVendor_address ,
		`Vendor_contact` = pVendor_contact,
		`created_date` = NOW(),
                `created_by` =  pCreated_by
                `currency`= pCurrency,
		`description`= pDescription,
		
		`city`= pCity,
		`state`= pState,
		`country`= pCountry,
		`postal_code` = pPostal_code,
		`email` = pEmail,
		`phone`= pPhone,
		`fax`= pFax,
		`web_url` = pWeb_url
		WHERE `vendor_id` = pVendor_id;

END//