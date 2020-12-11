declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsinputmanager
   */
  interface NSInputManager extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412828-handlemouseevent
    handleMouseEvent(mouseEvent: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412849-image
    image():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412829-initwithname
    initWithName_host(inputServerName: cocoascript.NSString, hostName: cocoascript.NSString):cocoascript.NSInputManager;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412835-language
    language():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412819-localizedinputmanagername
    localizedInputManagerName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412817-markedtextabandoned
    markedTextAbandoned(cli: cocoascript.NSInputManager):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412846-markedtextselectionchanged
    markedTextSelectionChanged_client(newSel: cocoascript.NSRange, cli: cocoascript.NSInputManager):void;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412844-server
    server():cocoascript.NSInputServer;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412818-wantstodelaytextchangenotificati
    wantsToDelayTextChangeNotifications():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412815-wantstohandlemouseevents
    wantsToHandleMouseEvents():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsinputmanager/1412833-wantstointerpretallkeystrokes
    wantsToInterpretAllKeystrokes():cocoascript.BOOL;
    //
    alloc():cocoascript.NSInputManager;
    //
    init():cocoascript.NSInputManager;
  }
}

declare const NSInputManager: cocoascript.NSInputManager;
