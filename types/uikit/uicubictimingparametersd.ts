declare namespace cocoascript {
  /**
   * The timing information for animations in the form of a cubic Bézier curve.
   * doc://com.apple.documentation/documentation/uikit/uicubictimingparameters
   */
  interface UICubicTimingParameters extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicubictimingparameters/1649799-init
    init():cocoascript.UICubicTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uicubictimingparameters/1649749-initwithanimationcurve
    initWithAnimationCurve(curve: cocoascript.UIViewAnimationCurve):cocoascript.UICubicTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uicubictimingparameters/1649854-initwithcontrolpoint1
    initWithControlPoint1_controlPoint2(point1: cocoascript.CGPoint, point2: cocoascript.CGPoint):cocoascript.UICubicTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uicubictimingparameters/1649910-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICubicTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uicubictimingparameters/1649841-animationcurve
    animationCurve(): cocoascript.UIViewAnimationCurve;
    setAnimationCurve(): void;
    // doc://com.apple.documentation/documentation/uikit/uicubictimingparameters/1649914-controlpoint1
    controlPoint1(): cocoascript.CGPoint;
    setControlPoint1(): void;
    // doc://com.apple.documentation/documentation/uikit/uicubictimingparameters/1649907-controlpoint2
    controlPoint2(): cocoascript.CGPoint;
    setControlPoint2(): void;
    //
    alloc():cocoascript.UICubicTimingParameters;
    //
    init():cocoascript.UICubicTimingParameters;
  }
}

declare const UICubicTimingParameters: cocoascript.UICubicTimingParameters;
