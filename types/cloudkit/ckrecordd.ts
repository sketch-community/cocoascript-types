declare namespace cocoascript {
/**
 * A dictionary of key-value pairs for persisting your app’s data.
 * doc://com.apple.documentation/documentation/cloudkit/ckrecord
 */
interface CKRecord extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462225-initwithrecordtype
  initWithRecordType(recordType: cocoascript.CKRecordType):cocoascript.CKRecord;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462202-initwithrecordtype
  initWithRecordType_zoneID(recordType: cocoascript.CKRecordType, zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecord;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462204-initwithrecordtype
  initWithRecordType_recordID(recordType: cocoascript.CKRecordType, recordID: cocoascript.CKRecordID):cocoascript.CKRecord;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462216-objectforkey
  objectForKey(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462210-objectforkeyedsubscript
  objectForKeyedSubscript(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462231-setobject
  setObject_forKey(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462221-setobject
  setObject_forKeyedSubscript(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462220-allkeys
  allKeys():cocoascript.CKRecordFieldKey;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462197-changedkeys
  changedKeys():cocoascript.CKRecordFieldKey;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462229-recordid
  recordID(): cocoascript.CKRecordID;
  setRecordID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462206-recordtype
  recordType(): cocoascript.CKRecordType;
  setRecordType(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462223-creationdate
  creationDate(): cocoascript.NSDate;
  setCreationDate(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462208-creatoruserrecordid
  creatorUserRecordID(): cocoascript.CKRecordID;
  setCreatorUserRecordID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462227-modificationdate
  modificationDate(): cocoascript.NSDate;
  setModificationDate(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462212-lastmodifieduserrecordid
  lastModifiedUserRecordID(): cocoascript.CKRecordID;
  setLastModifiedUserRecordID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462195-recordchangetag
  recordChangeTag(): cocoascript.NSString;
  setRecordChangeTag(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462199-alltokens
  allTokens():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462200-encodesystemfieldswithcoder
  encodeSystemFieldsWithCoder(coder: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1640527-parent
  parent(): cocoascript.CKReference;
  setParent(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1640378-share
  share(): cocoascript.CKReference;
  setShare(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1690507-setparentreferencefromrecord
  setParentReferenceFromRecord(parentRecord: cocoascript.CKRecord):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1690508-setparentreferencefromrecordid
  setParentReferenceFromRecordID(parentRecordID: cocoascript.CKRecordID):void;
  // 
  alloc():cocoascript.CKRecord;
  // 
  init():cocoascript.CKRecord;
}
}
declare const CKRecord: cocoascript.CKRecord;

