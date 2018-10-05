DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_shipping//
CREATE PROCEDURE `up_pms_insert_shipping`(pCountry Varchar(200), pCompany_name Varchar(200),pAddress_1 Varchar(500),pAddress_2 Varchar(500),pAddress_3 Varchar(500), pPostal_code int(11),pCity Varchar(100),pState Varchar(200),pOffice_location Varchar(200),pContact_name Varchar(100),pContact_phone Varchar(100),pContact_email Varchar(100),pAdditional_information Varchar(500),pCreated_by VARCHAR(45))
BEGIN
	INSERT INTO pms_shipping_address (country, company_name, address_1,address_2,address_3,postal_code,city , state ,office_location ,contact_name, contact_phone , contact_email,additional_information,created_date,created_by)
    VALUES  (pCountry, pCompany_name, pAddress_1, pAddress_2, pAddress_3, pPostal_code,pCity,pState,pOffice_location,pContact_name,pContact_phone,pContact_email,pAdditional_information, NOW(), pCreated_by);
END//
