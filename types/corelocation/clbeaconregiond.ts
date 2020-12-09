declare namespace cocoascript {
/**
 * A region used to detect the presence of iBeacon devices.
 * doc://com.apple.documentation/documentation/corelocation/clbeaconregion
 */
interface CLBeaconRegion extends CLRegion {
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3240605-initwithbeaconidentityconstraint
  initWithBeaconIdentityConstraint_identifier(beaconIdentityConstraint: cocoascript.CLBeaconIdentityConstraint, identifier: cocoascript.NSString):cocoascript.CLBeaconRegion;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183025-initwithuuid
  initWithUUID_identifier(uuid: cocoascript.NSUUID, identifier: cocoascript.NSString):cocoascript.CLBeaconRegion;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183026-initwithuuid
  initWithUUID_major_identifier(uuid: cocoascript.NSUUID, major: cocoascript.CLBeaconMajorValue, identifier: cocoascript.NSString):cocoascript.CLBeaconRegion;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183027-initwithuuid
  initWithUUID_major_minor_identifier(uuid: cocoascript.NSUUID, major: cocoascript.CLBeaconMajorValue, minor: cocoascript.CLBeaconMinorValue, identifier: cocoascript.NSString):cocoascript.CLBeaconRegion;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621534-initwithproximityuuid
  initWithProximityUUID_identifier(proximityUUID: cocoascript.NSUUID, identifier: cocoascript.NSString):cocoascript.CLBeaconRegion;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621475-initwithproximityuuid
  initWithProximityUUID_major_identifier(proximityUUID: cocoascript.NSUUID, major: cocoascript.CLBeaconMajorValue, identifier: cocoascript.NSString):cocoascript.CLBeaconRegion;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621392-initwithproximityuuid
  initWithProximityUUID_major_minor_identifier(proximityUUID: cocoascript.NSUUID, major: cocoascript.CLBeaconMajorValue, minor: cocoascript.CLBeaconMinorValue, identifier: cocoascript.NSString):cocoascript.CLBeaconRegion;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183022-uuid
  UUID(): cocoascript.NSUUID;
  setUUID(): void;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621536-major
  major(): cocoascript.NSNumber;
  setMajor(): void;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621414-minor
  minor(): cocoascript.NSNumber;
  setMinor(): void;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3240604-beaconidentityconstraint
  beaconIdentityConstraint(): cocoascript.CLBeaconIdentityConstraint;
  setBeaconIdentityConstraint(): void;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621556-proximityuuid
  proximityUUID(): cocoascript.NSUUID;
  setProximityUUID(): void;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621552-notifyentrystateondisplay
  notifyEntryStateOnDisplay(): cocoascript.BOOL;
  setNotifyEntryStateOnDisplay(): void;
  // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621494-peripheraldatawithmeasuredpower
  peripheralDataWithMeasuredPower(measuredPower: cocoascript.NSNumber):cocoascript.CLBeaconRegion;
  // 
  alloc():cocoascript.CLBeaconRegion;
  // 
  init():cocoascript.CLBeaconRegion;
}
}
declare const CLBeaconRegion: cocoascript.CLBeaconRegion;

