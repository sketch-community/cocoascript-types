declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uipopovercontroller
 */
interface UIPopoverController extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624669-initwithcontentviewcontroller
  initWithContentViewController(viewController: cocoascript.UIViewController):cocoascript.UIPopoverController;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624660-presentpopoverfromrect
  presentPopoverFromRect_inView_permittedArrowDirections_animated(rect: cocoascript.CGRect, view: cocoascript.UIView, arrowDirections: cocoascript.UIPopoverArrowDirection, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624668-presentpopoverfrombarbuttonitem
  presentPopoverFromBarButtonItem_permittedArrowDirections_animated(item: cocoascript.UIBarButtonItem, arrowDirections: cocoascript.UIPopoverArrowDirection, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624662-dismisspopoveranimated
  dismissPopoverAnimated(animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624672-contentviewcontroller
  contentViewController(): cocoascript.UIViewController;
  setContentViewController(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624655-setcontentviewcontroller
  setContentViewController_animated(viewController: cocoascript.UIViewController, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624667-popovercontentsize
  popoverContentSize(): cocoascript.CGSize;
  setPopoverContentSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624670-setpopovercontentsize
  setPopoverContentSize_animated(size: cocoascript.CGSize, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624654-passthroughviews
  passthroughViews(): cocoascript.UIView;
  setPassthroughViews(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624656-popovervisible
  popoverVisible(): cocoascript.BOOL;
  setPopoverVisible(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624665-popoverarrowdirection
  popoverArrowDirection(): cocoascript.UIPopoverArrowDirection;
  setPopoverArrowDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624666-delegate
  delegate(): cocoascript.UIPopoverControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624657-popoverlayoutmargins
  popoverLayoutMargins(): cocoascript.UIEdgeInsets;
  setPopoverLayoutMargins(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624659-popoverbackgroundviewclass
  popoverBackgroundViewClass(): cocoascript.Class;
  setPopoverBackgroundViewClass(): void;
  // doc://com.apple.documentation/documentation/uikit/uipopovercontroller/1624673-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // 
  alloc():cocoascript.UIPopoverController;
  // 
  init():cocoascript.UIPopoverController;
}
}
declare const UIPopoverController: cocoascript.UIPopoverController;

