DELIMITER //
DROP PROCEDURE IF EXISTS up_scm_get_account_shift//
CREATE PROCEDURE `up_scm_get_account_shift`(pUser_id INT(11))
BEGIN
	DECLARE n INT DEFAULT 0;
	DECLARE i INT DEFAULT 0;
	DECLARE n1 INT DEFAULT 0;
	DECLARE i1 INT DEFAULT 0;
    
	create table schudel SELECT `user_id`,
			t1.`date`,
			t2.`class_name`,
            t3.`course_level_name`,
            t4.`start_time`,
            t4.`end_time`,
            t5.`room_name`,
            t5.`floor`,
            t4.`day`,
            t3.`duration`,
            t2.`start_date`,
            t2.`end_date`
	FROM scm_shift t1
	LEFT JOIN scm_class t2 ON  t2.class_id = t1.class_id
    LEFT JOIN scm_course_level t3 ON  t3.course_level_id = t2.course_level_id
    LEFT JOIN scm_schedule t4 ON  t4.course_level_id = t3.course_level_id
    LEFT JOIN scm_room t5 ON  t5.room_id = t4.room_id
    where user_id = pUser_id;
    
    SET n = (SELECT COUNT(*) FROM schudel);
	SET i=0;
    
    create temporary table result_shift SELECT * FROM schudel LIMIT 0;
    
    create temporary table range_date as select * from 
		(select adddate('1970-01-01',t4.i*10000 + t3.i*1000 + t2.i*100 + t1.i*10 + t0.i) selected_date from
		 (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t0,
		 (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t1,
		 (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t2,
		 (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t3,
		 (select 0 i union select 1 union select 2 union select 3 union select 4 union select 5 union select 6 union select 7 union select 8 union select 9) t4) v
		where selected_date between (SELECT start_date FROM schudel LIMIT 1) and (SELECT end_date FROM schudel LIMIT 1);
        
        SELECT COUNT(*) 
        FROM range_date 
		INTO n1;
        
    WHILE i < n DO
		SET i1=0;
		SET @day = (SELECT day FROM schudel LIMIT i,1);
        SET @start_time = TIME((SELECT start_time FROM schudel LIMIT i,1));
        SET @end_time = TIME((SELECT end_time FROM schudel LIMIT i,1));
        
		WHILE i1 < n1 DO
			SET @date = (SELECT selected_date FROM range_date LIMIT i1,1);
            SET @dayFromRangeDate = dayname(@date);
            
			IF @day = @dayFromRangeDate THEN 
				INSERT INTO result_shift (user_id, date, class_name, course_level_name, start_time, end_time, room_name, floor) 
                SELECT user_id, date, class_name, course_level_name, CONCAT(@date, " ", @start_time), CONCAT(@date, " ", @end_time), room_name, floor 
                FROM schudel LIMIT i,1;
			END IF;
            
			SET i1 = i1 + 1;
		END WHILE;
            
		SET i = i + 1;
	END WHILE;
	
    SELECT user_id, date, class_name, course_level_name, start_time, end_time, room_name, floor FROM result_shift;
    
    drop temporary table if exists result_shift;
    drop temporary table if exists range_date;
    drop table if exists schudel; 
END//
