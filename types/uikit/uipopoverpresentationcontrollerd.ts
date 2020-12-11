declare namespace cocoascript {
  /**
   * An object that manages the display of content in a popover.
   * doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller
   */
  interface UIPopoverPresentationController extends UIPresentationController {
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622320-delegate
    delegate(): cocoascript.UIPopoverPresentationControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622323-popoverlayoutmargins
    popoverLayoutMargins(): cocoascript.UIEdgeInsets;
    setPopoverLayoutMargins(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622316-backgroundcolor
    backgroundColor(): cocoascript.UIColor;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622312-passthroughviews
    passthroughViews(): cocoascript.UIView;
    setPassthroughViews(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622318-popoverbackgroundviewclass
    popoverBackgroundViewClass(): cocoascript.UIPopoverBackgroundViewMethods;
    setPopoverBackgroundViewClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622325-canoverlapsourceviewrect
    canOverlapSourceViewRect(): cocoascript.BOOL;
    setCanOverlapSourceViewRect(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622314-barbuttonitem
    barButtonItem(): cocoascript.UIBarButtonItem;
    setBarButtonItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622313-sourceview
    sourceView(): cocoascript.UIView;
    setSourceView(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622324-sourcerect
    sourceRect(): cocoascript.CGRect;
    setSourceRect(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622319-permittedarrowdirections
    permittedArrowDirections(): cocoascript.UIPopoverArrowDirection;
    setPermittedArrowDirections(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverpresentationcontroller/1622315-arrowdirection
    arrowDirection(): cocoascript.UIPopoverArrowDirection;
    setArrowDirection(): void;
    //
    alloc():cocoascript.UIPopoverPresentationController;
    //
    init():cocoascript.UIPopoverPresentationController;
  }
}

declare const UIPopoverPresentationController: cocoascript.UIPopoverPresentationController;
