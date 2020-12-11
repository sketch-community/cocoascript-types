declare namespace cocoascript {
  /**
   * A type used to identify and manage memory zones.
   * doc://com.apple.documentation/documentation/foundation/nszone
   */
  interface NSZone {
    // doc://com.apple.documentation/documentation/foundation/1539804-nscreatezone
    NSCreateZone(): cocoascript.BOOL;
    setNSCreateZone(): void;
    // doc://com.apple.documentation/documentation/foundation/1539805-nszonefrompointer
    NSZoneFromPointer(): void;
    setNSZoneFromPointer(): void;
    // doc://com.apple.documentation/documentation/foundation/1539799-nszonename
    NSZoneName(): cocoascript.NSZone;
    setNSZoneName(): void;
    // doc://com.apple.documentation/documentation/foundation/1539819-nsdefaultmalloczone
    NSDefaultMallocZone(): void;
    setNSDefaultMallocZone(): void;
  }
}
