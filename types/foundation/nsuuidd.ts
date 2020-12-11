declare namespace cocoascript {
  /**
   * A universally unique value that can be used to identify types, interfaces, and other items.
   * doc://com.apple.documentation/documentation/foundation/nsuuid
   */
  interface NSUUID extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1415797-init
    init():cocoascript.NSUUID;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1411662-initwithuuidstring
    initWithUUIDString(string: cocoascript.NSString):cocoascript.NSUUID;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1417039-initwithuuidbytes
    initWithUUIDBytes(bytes: cocoascript.char):cocoascript.NSUUID;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1411420-getuuidbytes
    getUUIDBytes(uuid: cocoascript.char):void;
    // doc://com.apple.documentation/documentation/foundation/nsuuid/1416585-uuidstring
    UUIDString(): cocoascript.NSString;
    setUUIDString(): void;
    //
    alloc():cocoascript.NSUUID;
    //
    init():cocoascript.NSUUID;
  }
}

declare const NSUUID: cocoascript.NSUUID;
