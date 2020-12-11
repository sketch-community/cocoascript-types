declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsinputserver
   */
  interface NSInputServer extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsinputserver/1538553-initwithdelegate
    initWithDelegate_name(delegate: cocoascript.NSInputServer, name: cocoascript.NSString):cocoascript.NSInputServer;
    //
    alloc():cocoascript.NSInputServer;
    //
    init():cocoascript.NSInputServer;
  }
}

declare const NSInputServer: cocoascript.NSInputServer;
