declare namespace cocoascript {
  /**
   * A port that can be used as an endpoint for distributed object connections (or raw messaging).
   * doc://com.apple.documentation/documentation/foundation/nsmessageport
   */
  interface NSMessagePort extends NSPort {
    //
    alloc():cocoascript.NSMessagePort;
    //
    init():cocoascript.NSMessagePort;
  }
}

declare const NSMessagePort: cocoascript.NSMessagePort;
