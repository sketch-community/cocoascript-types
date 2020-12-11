declare namespace cocoascript {
  /**
   * The background appearance for a popover.
   * doc://com.apple.documentation/documentation/uikit/uipopoverbackgroundview
   */
  interface UIPopoverBackgroundView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uipopoverbackgroundview/1619347-arrowoffset
    arrowOffset(): cocoascript.CGFloat;
    setArrowOffset(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverbackgroundview/1619355-arrowdirection
    arrowDirection(): cocoascript.UIPopoverArrowDirection;
    setArrowDirection(): void;
    // doc://com.apple.documentation/documentation/uikit/uipopoverbackgroundview/1619357-wantsdefaultcontentappearance
    wantsDefaultContentAppearance(): cocoascript.BOOL;
    setWantsDefaultContentAppearance(): void;
    //
    alloc():cocoascript.UIPopoverBackgroundView;
    //
    init():cocoascript.UIPopoverBackgroundView;
  }
}

declare const UIPopoverBackgroundView: cocoascript.UIPopoverBackgroundView;
