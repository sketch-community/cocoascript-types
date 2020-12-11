declare namespace cocoascript {
  /**
   * The definition of a custom area for organizing related records in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordzone
   */
  interface CKRecordZone extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515102-initwithzonename
    initWithZoneName(zoneName: cocoascript.NSString):cocoascript.CKRecordZone;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515207-initwithzoneid
    initWithZoneID(zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecordZone;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonedefaultname
    CKRecordZoneDefaultName(): cocoascript.const;
    setCKRecordZoneDefaultName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1514917-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515194-capabilities
    capabilities(): cocoascript.CKRecordZoneCapabilities;
    setCapabilities(): void;
    //
    alloc():cocoascript.CKRecordZone;
    //
    init():cocoascript.CKRecordZone;
  }
}

declare const CKRecordZone: cocoascript.CKRecordZone;
