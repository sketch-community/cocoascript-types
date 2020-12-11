declare namespace cocoascript {
  /**
   * A convenient interface to the garbage collection system.
   * doc://com.apple.documentation/documentation/foundation/nsgarbagecollector
   */
  interface NSGarbageCollector extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431016-disable
    disable():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431020-enable
    enable():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431014-isenabled
    isEnabled():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431018-iscollecting
    isCollecting():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431022-collectexhaustively
    collectExhaustively():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431015-collectifneeded
    collectIfNeeded():void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431013-disablecollectorforpointer
    disableCollectorForPointer(ptr: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431017-enablecollectorforpointer
    enableCollectorForPointer(ptr: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsgarbagecollector/1431011-zone
    zone():cocoascript.NSZone;
    //
    alloc():cocoascript.NSGarbageCollector;
    //
    init():cocoascript.NSGarbageCollector;
  }
}

declare const NSGarbageCollector: cocoascript.NSGarbageCollector;
