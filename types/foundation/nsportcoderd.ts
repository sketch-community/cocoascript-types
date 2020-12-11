declare namespace cocoascript {
  /**
   * A coder used to transmit object proxies (and sometimes objects themselves) between connections.
   * doc://com.apple.documentation/documentation/foundation/nsportcoder
   */
  interface NSPortCoder extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580075-initwithreceiveport
    initWithReceivePort_sendPort_components(rcvPort: cocoascript.NSPort, sndPort: cocoascript.NSPort, comps: cocoascript.NSArray):cocoascript.NSPortCoder;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580077-connection
    connection():cocoascript.NSConnection;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580073-encodeportobject
    encodePortObject(aport: cocoascript.NSPort):void;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580069-decodeportobject
    decodePortObject():cocoascript.NSPort;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580072-isbycopy
    isBycopy():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580071-isbyref
    isByref():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsportcoder/1580070-dispatch
    dispatch():void;
    //
    alloc():cocoascript.NSPortCoder;
    //
    init():cocoascript.NSPortCoder;
  }
}

declare const NSPortCoder: cocoascript.NSPortCoder;
