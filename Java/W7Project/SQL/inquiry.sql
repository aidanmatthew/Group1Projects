--------------------------------------------------------
--  File created - Friday-July-29-2016   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table INQUIRY
--------------------------------------------------------

  CREATE TABLE "GROUP1"."INQUIRY" 
   (	"ID" NUMBER(15,0), 
	"USER_ID" NUMBER(15,0), 
	"MESSAGE" VARCHAR2(100 BYTE), 
	"DATE_CREATED" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "WEEK5_PROJECT" ;
--------------------------------------------------------
--  DDL for Index INQUIRY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "GROUP1"."INQUIRY_PK" ON "GROUP1"."INQUIRY" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "WEEK5_PROJECT" ;
--------------------------------------------------------
--  Constraints for Table INQUIRY
--------------------------------------------------------

  ALTER TABLE "GROUP1"."INQUIRY" ADD CONSTRAINT "INQUIRY_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "WEEK5_PROJECT"  ENABLE;
  ALTER TABLE "GROUP1"."INQUIRY" MODIFY ("DATE_CREATED" NOT NULL ENABLE);
  ALTER TABLE "GROUP1"."INQUIRY" MODIFY ("MESSAGE" NOT NULL ENABLE);
  ALTER TABLE "GROUP1"."INQUIRY" MODIFY ("USER_ID" NOT NULL ENABLE);
  ALTER TABLE "GROUP1"."INQUIRY" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Ref Constraints for Table INQUIRY
--------------------------------------------------------

  ALTER TABLE "GROUP1"."INQUIRY" ADD CONSTRAINT "FK_USER_ID_INQUIRY" FOREIGN KEY ("USER_ID")
	  REFERENCES "GROUP1"."USERS" ("ID") ENABLE;
--------------------------------------------------------
--  DDL for Trigger INQUIRY_TRG
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "GROUP1"."INQUIRY_TRG" 
BEFORE INSERT ON INQUIRY 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.ID IS NULL THEN
      SELECT INQUIRY_SEQ.NEXTVAL INTO :NEW.ID FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "GROUP1"."INQUIRY_TRG" ENABLE;
--------------------------------------------------------
--  DDL for Trigger INQUIRY_DATE
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "GROUP1"."INQUIRY_DATE" 
BEFORE INSERT ON INQUIRY 
FOR EACH ROW
DECLARE
  nowDate DATE;
BEGIN

  SELECT CURRENT_DATE INTO nowDate
  FROM dual;

  IF :NEW.DATE_CREATED IS NULL THEN
    :NEW.DATE_CREATED := nowDate;
  END IF;
END;
/
ALTER TRIGGER "GROUP1"."INQUIRY_DATE" ENABLE;
