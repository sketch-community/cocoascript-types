declare namespace cocoascript {
/**
 * A set of methods used by the delegate to respond, with a preview view controller and a commit view controller, to the user pressing a view object on the screen of a device that supports 3D Touch.
 * doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewingdelegate
 */
interface UIViewControllerPreviewingDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewingdelegate/1621464-previewingcontext
  previewingContext_viewControllerForLocation(previewingContext: cocoascript.UIViewControllerPreviewing, location: cocoascript.CGPoint):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uiviewcontrollerpreviewingdelegate/1621366-previewingcontext
  previewingContext_commitViewController(previewingContext: cocoascript.UIViewControllerPreviewing, viewControllerToCommit: cocoascript.UIViewController):void;
}
}

