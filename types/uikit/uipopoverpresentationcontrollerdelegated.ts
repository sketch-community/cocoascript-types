declare namespace cocoascript {
  /**
   * The methods of the
   * doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontrollerdelegate
   */
  interface UIPopoverPresentationControllerDelegate extends UIAdaptivePresentationControllerDelegate {
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontrollerdelegate/1622317-prepareforpopoverpresentation
    prepareForPopoverPresentation(popoverPresentationController: cocoascript.UIPopoverPresentationController):void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontrollerdelegate/1622321-popoverpresentationcontrollersho
    popoverPresentationControllerShouldDismissPopover(popoverPresentationController: cocoascript.UIPopoverPresentationController):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontrollerdelegate/1622322-popoverpresentationcontrollerdid
    popoverPresentationControllerDidDismissPopover(popoverPresentationController: cocoascript.UIPopoverPresentationController):void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontrollerdelegate/1622326-popoverpresentationcontroller
    popoverPresentationController_willRepositionPopoverToRect_inView(popoverPresentationController: cocoascript.UIPopoverPresentationController, rect: cocoascript.CGRect, view: cocoascript._Nonnull):void;
  }
}
