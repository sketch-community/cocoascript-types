declare namespace cocoascript {
  /**
   * An object that manages metrics for drawing attributed strings.
   * doc://com.apple.documentation/documentation/uikit/nsstringdrawingcontext
   */
  interface NSStringDrawingContext extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nsstringdrawingcontext/1534020-minimumscalefactor
    minimumScaleFactor(): cocoascript.CGFloat;
    setMinimumScaleFactor(): void;
    // doc://com.apple.documentation/documentation/uikit/nsstringdrawingcontext/1531498-actualscalefactor
    actualScaleFactor(): cocoascript.CGFloat;
    setActualScaleFactor(): void;
    // doc://com.apple.documentation/documentation/uikit/nsstringdrawingcontext/1530525-totalbounds
    totalBounds(): cocoascript.CGRect;
    setTotalBounds(): void;
    // doc://com.apple.documentation/documentation/uikit/nsstringdrawingcontext/1624043-minimumtrackingadjustment
    minimumTrackingAdjustment(): cocoascript.CGFloat;
    setMinimumTrackingAdjustment(): void;
    // doc://com.apple.documentation/documentation/uikit/nsstringdrawingcontext/1624042-actualtrackingadjustment
    actualTrackingAdjustment(): cocoascript.CGFloat;
    setActualTrackingAdjustment(): void;
    //
    alloc():cocoascript.NSStringDrawingContext;
    //
    init():cocoascript.NSStringDrawingContext;
  }
}

declare const NSStringDrawingContext: cocoascript.NSStringDrawingContext;
