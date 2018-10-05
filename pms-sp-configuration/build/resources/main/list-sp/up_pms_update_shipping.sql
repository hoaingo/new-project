DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_shipping//
CREATE PROCEDURE `up_pms_update_shipping`(pShipping_address_id int(11), pCountry Varchar(200), pCompany_name Varchar(200),pAddress_1 Varchar(500),pAddress_2 Varchar(500),pAddress_3 Varchar(500), pPostal_code int(11),pCity Varchar(100),pState Varchar(200),pOffice_location Varchar(200),pContact_name Varchar(100),pContact_phone Varchar(100),pContact_email Varchar(100),pAdditional_information Varchar(500),  pUpdate_by VARCHAR(45))
BEGIN
	UPDATE `pms_shipping_address`
		SET
		`country` = pCountry,
		`company_name` =  pCompany_name,
		`address_1` = pAddress_1,
                `address_2` = pAddress_2,
		`address_3` = pAddress_3,
		`contact_name` = pContact_name,
		`contact_email` = pContact_email,
                `contact_phone` = pContact_phone,
		`postal_code` = pPostal_code,
                `office_location` = pOffice_location,
		`city` = pCity,
		`state` = pState,
                `additional_information` = pAdditional_information,
		`updated_date` = NOW(),
		`updated_by` = pUpdate_by
		
        
		WHERE `shipping_address_id` = pShipping_address_id;

END//