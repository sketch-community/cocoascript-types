declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/uikit/uipopovercontrollerdelegate
   */
  interface UIPopoverControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipopovercontrollerdelegate/1624664-popovercontroller
    popoverController_willRepositionPopoverToRect_inView(popoverController: cocoascript.UIPopoverController, rect: cocoascript.CGRect, view: cocoascript._Nonnull):void;
    // doc://com.apple.documentation/documentation/uikit/uipopovercontrollerdelegate/1624661-popovercontrollershoulddismisspo
    popoverControllerShouldDismissPopover(popoverController: cocoascript.UIPopoverController):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uipopovercontrollerdelegate/1624671-popovercontrollerdiddismisspopov
    popoverControllerDidDismissPopover(popoverController: cocoascript.UIPopoverController):void;
  }
}
