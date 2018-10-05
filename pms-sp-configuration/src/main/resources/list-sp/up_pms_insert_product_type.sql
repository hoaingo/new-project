/**
 * Author:  john.intern
 * Created: Apr 13, 2018
 */
DELIMITER //
DROP PROCEDURE IF EXISTS up_pms_insert_product_type//
CREATE PROCEDURE `up_pms_insert_product_type`(ptype_name VARCHAR(45),ptype_description varchar(45))
CREATE DEFINER=`intern`@`%` PROCEDURE `up_pms_insert_product_type`(ptype_name VARCHAR(45),ptype_description varchar(45), pUpdateBy VARCHAR(45) )
BEGIN
	INSERT INTO `pms_product_type`
(
				`product_type_name`,
				`product_type_description`,
                `update_date`,
				`update_by`
)
	VALUES
(
				ptype_name,
				ptype_description,
                NOW(),
                pUpdateBy
);



END//
