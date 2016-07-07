--------------------------------------------------------
--  File created - Wednesday-July-06-2016   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table USERINFO
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."USERINFO" 
   (	"USERID" NUMBER, 
	"FNAME" VARCHAR2(45 BYTE), 
	"LNAME" VARCHAR2(45 BYTE), 
	"EMAIL" VARCHAR2(45 BYTE), 
	"PASSWORD" VARCHAR2(45 BYTE), 
	"USERNAME" VARCHAR2(45 BYTE), 
	"GENDER" VARCHAR2(10 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index USERINFO_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."USERINFO_PK" ON "SYSTEM"."USERINFO" ("USERID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table USERINFO
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."USERINFO" ADD CONSTRAINT "USERINFO_PK" PRIMARY KEY ("USERID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
  ALTER TABLE "SYSTEM"."USERINFO" MODIFY ("USERID" NOT NULL ENABLE);
--------------------------------------------------------
--  DDL for Trigger USERINFO_TRG
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "SYSTEM"."USERINFO_TRG" 
BEFORE INSERT ON USERINFO 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    NULL;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "SYSTEM"."USERINFO_TRG" ENABLE;
--------------------------------------------------------
--  DDL for Trigger USERINFO_TRG1
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "SYSTEM"."USERINFO_TRG1" 
BEFORE INSERT ON USERINFO 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    NULL;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "SYSTEM"."USERINFO_TRG1" ENABLE;
--------------------------------------------------------
--  DDL for Trigger USERINFO_TRG2
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "SYSTEM"."USERINFO_TRG2" 
BEFORE INSERT ON USERINFO 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    NULL;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "SYSTEM"."USERINFO_TRG2" ENABLE;
--------------------------------------------------------
--  DDL for Trigger USERINFO_TRG3
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "SYSTEM"."USERINFO_TRG3" 
BEFORE INSERT ON USERINFO 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.USERID IS NULL THEN
      SELECT USERINFO_SEQ3.NEXTVAL INTO :NEW.USERID FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "SYSTEM"."USERINFO_TRG3" ENABLE;