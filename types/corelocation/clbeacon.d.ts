declare namespace cocoascript {
  /**
   * Information about an observed iBeacon device and its relative distance to the user’s device.
   * doc://com.apple.documentation/documentation/corelocation/clbeacon
   */
  interface CLBeacon extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/3183017-uuid
    UUID(): cocoascript.NSUUID;
    setUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621418-major
    major(): cocoascript.NSNumber;
    setMajor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621558-minor
    minor(): cocoascript.NSNumber;
    setMinor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621508-proximityuuid
    proximityUUID(): cocoascript.NSUUID;
    setProximityUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621554-proximity
    proximity(): cocoascript.CLProximity;
    setProximity(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621551-accuracy
    accuracy(): cocoascript.CLLocationAccuracy;
    setAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621557-rssi
    rssi(): cocoascript.NSInteger;
    setRssi(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/3183021-timestamp
    timestamp(): cocoascript.NSDate;
    setTimestamp(): void;
    //
    alloc():cocoascript.CLBeacon;
    //
    init():cocoascript.CLBeacon;
  }
}

declare const CLBeacon: cocoascript.CLBeacon;
