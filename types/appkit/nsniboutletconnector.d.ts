declare namespace cocoascript {
  /**
   * An outlet connection between Interface Builder objects.
   * doc://com.apple.documentation/documentation/appkit/nsniboutletconnector
   */
  interface NSNibOutletConnector extends NSNibConnector {
    // doc://com.apple.documentation/documentation/appkit/nsniboutletconnector/1539256-establishconnection
    establishConnection():void;
    //
    alloc():cocoascript.NSNibOutletConnector;
    //
    init():cocoascript.NSNibOutletConnector;
  }
}

declare const NSNibOutletConnector: cocoascript.NSNibOutletConnector;
