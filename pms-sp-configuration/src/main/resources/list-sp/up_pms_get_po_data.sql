CREATE PROCEDURE `up_pms_get_po_data`()
BEGIN


	CREATE TEMPORARY TABLE IF NOT EXISTS 
	  pms_temp_po_data ( `id` varchar(11) DEFAULT NULL,
	  `name` varchar(200) DEFAULT NULL,
      `data` varchar(200) DEFAULT NULL,
	  `type` varchar(45) DEFAULT NULL
	) ENGINE=InnoDB DEFAULT CHARSET=utf8;


	INSERT INTO pms_temp_po_data 
	SELECT `user_id`, `user_name`, null, 'account' FROM pms_user_account;
    
    INSERT INTO pms_temp_po_data
    SELECT `vendor_id`, `vendor_name`, null, 'vendor' FROM pms_vendor;
    
    INSERT INTO pms_temp_po_data 
	SELECT shipping_address_id, company_name, null, 'shipping' FROM pms_shipping_address;
    
    INSERT INTO pms_temp_po_data 
	SELECT billing_id, company_name, null, 'billing' FROM pms_billing_address;
    
	INSERT INTO pms_temp_po_data 
	SELECT gl_id, gl_name, null, 'generalLedger' FROM pms_gl_account;
    
	INSERT INTO pms_temp_po_data 
	SELECT cc_id, cc_name, null, 'costCenter' FROM pms_cost_center;	

    INSERT INTO pms_temp_po_data 
	SELECT petty_id, petty_name, null, 'pettyAccount' FROM pms_petty_cash_account;	
    
	INSERT INTO pms_temp_po_data 
	SELECT id, name, null, 'item' FROM pms_item;	
    
    INSERT INTO pms_temp_po_data 
	SELECT currency_code, currency_name, null, 'currency' FROM pms_currency;
    
    INSERT INTO pms_temp_po_data 
	SELECT document_id, file_name, data, 'document' FROM pms_document;	


	SELECT id, name, data, type FROM pms_temp_po_data;
	DROP TABLE pms_temp_po_data;
		
END//