--------------------------------------------------------
--  File created - Friday-July-29-2016   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table FEEDBACK
--------------------------------------------------------

  CREATE TABLE "GROUP1"."FEEDBACK" 
   (	"ID" NUMBER(15,0), 
	"USER_ID" NUMBER(15,0), 
	"MEAL_ID" NUMBER(15,0), 
	"FEEDBACK" VARCHAR2(100 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "WEEK5_PROJECT" ;
--------------------------------------------------------
--  DDL for Index FEEDBACK_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "GROUP1"."FEEDBACK_PK" ON "GROUP1"."FEEDBACK" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "WEEK5_PROJECT" ;
--------------------------------------------------------
--  Constraints for Table FEEDBACK
--------------------------------------------------------

  ALTER TABLE "GROUP1"."FEEDBACK" ADD CONSTRAINT "FEEDBACK_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "WEEK5_PROJECT"  ENABLE;
  ALTER TABLE "GROUP1"."FEEDBACK" MODIFY ("FEEDBACK" NOT NULL ENABLE);
  ALTER TABLE "GROUP1"."FEEDBACK" MODIFY ("MEAL_ID" NOT NULL ENABLE);
  ALTER TABLE "GROUP1"."FEEDBACK" MODIFY ("USER_ID" NOT NULL ENABLE);
  ALTER TABLE "GROUP1"."FEEDBACK" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Ref Constraints for Table FEEDBACK
--------------------------------------------------------

  ALTER TABLE "GROUP1"."FEEDBACK" ADD CONSTRAINT "FK_MEAL_ID_FEEDBACK" FOREIGN KEY ("MEAL_ID")
	  REFERENCES "GROUP1"."MEAL" ("ID") ENABLE;
  ALTER TABLE "GROUP1"."FEEDBACK" ADD CONSTRAINT "FK_USER_ID_FEEDBACK" FOREIGN KEY ("USER_ID")
	  REFERENCES "GROUP1"."USERS" ("ID") ENABLE;
--------------------------------------------------------
--  DDL for Trigger FEEDBACK_TRG
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "GROUP1"."FEEDBACK_TRG" 
BEFORE INSERT ON FEEDBACK 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.ID IS NULL THEN
      SELECT FEEDBACK_SEQ.NEXTVAL INTO :NEW.ID FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "GROUP1"."FEEDBACK_TRG" ENABLE;
