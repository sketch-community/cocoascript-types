declare namespace cocoascript {
  /**
   * A set of optional methods implemented by the delegate of an
   * doc://com.apple.documentation/documentation/appkit/nstextdelegate
   */
  interface NSTextDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstextdelegate/1526982-textdidchange
    textDidChange(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstextdelegate/1533298-textshouldbeginediting
    textShouldBeginEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextdelegate/1535575-textdidbeginediting
    textDidBeginEditing(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nstextdelegate/1525992-textshouldendediting
    textShouldEndEditing(textObject: cocoascript.NSText):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextdelegate/1529016-textdidendediting
    textDidEndEditing(notification: cocoascript.NSNotification):void;
  }
}
