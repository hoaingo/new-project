DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_update_billing_address//
CREATE PROCEDURE `up_pms_update_billing_address` (pbilling_id int(11),pCountry VARCHAR(200),pcompany_name varchar(200),paddress_1 VARCHAR(500),paddress_2 VARCHAR(500),paddress_3 VARCHAR(500),pcontact_name VARCHAR(100),pcontact_email VARCHAR(100),pcontact_phone VARCHAR(100), ppostcode int(11),pcity VARCHAR(100),pstate VARCHAR(200), pupdate_by varchar(45),padditional_information varchar(500), poffice_location varchar(200) )
BEGIN
	UPDATE `pms_billing_address`
        SET
                `office_location` = poffice_location,
		`country` = pCountry,
		`company_name` =  pcompany_name,
		`address_1` = paddress_1,
		`contact_name` = pcontact_name,
		`contact_email` = pcontact_email,
		`postal_code` = ppostcode,
		`city` = pcity,
		`state` = pstate,
		`updated_date` = now(),
		`updated_by` = pupdate_by,
		`contact_phone` = pcontact_phone,
		`address_2` = paddress_2,
		`address_3` = paddress_3,
		`additional_information` = padditional_information,
		`status` = pstatus
                WHERE `billing_id` = pbilling_id;

END//