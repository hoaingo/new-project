DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_billing_address//
CREATE PROCEDURE `up_pms_insert_billing_address` (pcountry VARCHAR(200),pcompany_name varchar(200),paddress_1 VARCHAR(500),paddress_2 VARCHAR(500),paddress_3 VARCHAR(500),pcontact_name VARCHAR(100),pcontact_email VARCHAR(100),pcontact_phone VARCHAR(100), ppostcode int(11),padditional_information VARCHAR(500),pcity VARCHAR(100),pstate VARCHAR(200), pcreate_by varchar(45),poffice_location varchar(200),pstatus VARCHAR(45))
BEGIN
	INSERT INTO `pms_billing_address`
			(
			`country`,
			`company_name`,
			`address_1`,
			`contact_name`,
			`contact_email`,
			`postal_code`,
			`city`,
			`state`,
			`updated_date`,
			`updated_by`,
			`created_date`,
			`created_by`,
			`contact_phone`,
			`address_2`,
			`address_3`,
                        `office_location`,
			`additional_information`,
                        `status`)
	VALUES
			(
			pcountry,
			pcompany_name,
			paddress_1,
			pcontact_name,
			pcontact_email,
                        ppostcode,
			pcity,
			pstate,
			null,
			'',
			NOW(),
			pcreate_by,
			pcontact_phone,
			paddress_2,
			paddress_3,
                        poffice_location,
			padditional_information,
                        pstatus );
END//