DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_vendor//
CREATE PROCEDURE `up_pms_insert_vendor`()
BEGIN
	INSERT INTO pms_vendor (vendor_name, vendor_score,
 product_type, vendor_address,
 vendor_contact, created_date, created_by,
                     currency, description, city, state, country, 
postal_code, email, phone, fax, web_url)
        VALUES  (pVendor_name, pVendor_score, pProduct_type, pVendor_address, pVendor_contact,pCreated_date,pCreated_by,pCurrency,
			pDescription, pCity,pState, pCountry ,  pPostal_code, pEmail ,  pPhone, pFax, pWeb_url );
END//
