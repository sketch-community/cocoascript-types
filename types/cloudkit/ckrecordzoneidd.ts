declare namespace cocoascript {
/**
 * An object that uniquely identifies a record zone in a database.
 * doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid
 */
interface CKRecordZoneID extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508089-initwithzonename
  initWithZoneName_ownerName(zoneName: cocoascript.NSString, ownerName: cocoascript.NSString):cocoascript.CKRecordZoneID;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508094-zonename
  zoneName(): cocoascript.NSString;
  setZoneName(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508096-ownername
  ownerName(): cocoascript.NSString;
  setOwnerName(): void;
  // 
  alloc():cocoascript.CKRecordZoneID;
  // 
  init():cocoascript.CKRecordZoneID;
}
}
declare const CKRecordZoneID: cocoascript.CKRecordZoneID;

