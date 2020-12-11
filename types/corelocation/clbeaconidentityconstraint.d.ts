declare namespace cocoascript {
  /**
   * Identity characteristics that can match one or more beacons.
   * doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint
   */
  interface CLBeaconIdentityConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240599-initwithuuid
    initWithUUID(uuid: cocoascript.NSUUID):cocoascript.CLBeaconIdentityConstraint;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240600-initwithuuid
    initWithUUID_major(uuid: cocoascript.NSUUID, major: cocoascript.CLBeaconMajorValue):cocoascript.CLBeaconIdentityConstraint;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240601-initwithuuid
    initWithUUID_major_minor(uuid: cocoascript.NSUUID, major: cocoascript.CLBeaconMajorValue, minor: cocoascript.CLBeaconMinorValue):cocoascript.CLBeaconIdentityConstraint;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240598-uuid
    UUID(): cocoascript.NSUUID;
    setUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240602-major
    major(): cocoascript.NSNumber;
    setMajor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240603-minor
    minor(): cocoascript.NSNumber;
    setMinor(): void;
    //
    alloc():cocoascript.CLBeaconIdentityConstraint;
    //
    init():cocoascript.CLBeaconIdentityConstraint;
  }
}

declare const CLBeaconIdentityConstraint: cocoascript.CLBeaconIdentityConstraint;
