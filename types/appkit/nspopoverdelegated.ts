declare namespace cocoascript {
/**
 * A set of optional methods that a popover delegate can implement to provide additional or custom functionality.
 * doc://com.apple.documentation/documentation/appkit/nspopoverdelegate
 */
interface NSPopoverDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1534822-detachablewindowforpopover
  detachableWindowForPopover(popover: cocoascript.NSPopover):cocoascript.NSWindow;
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1532593-popovershouldclose
  popoverShouldClose(popover: cocoascript.NSPopover):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1532556-popoverwillshow
  popoverWillShow(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1533573-popoverdidshow
  popoverDidShow(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1535119-popoverwillclose
  popoverWillClose(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1526581-popoverdidclose
  popoverDidClose(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1524674-popoverdiddetach
  popoverDidDetach(popover: cocoascript.NSPopover):void;
  // doc://com.apple.documentation/documentation/appkit/nspopoverdelegate/1529911-popovershoulddetach
  popoverShouldDetach(popover: cocoascript.NSPopover):cocoascript.BOOL;
}
}

