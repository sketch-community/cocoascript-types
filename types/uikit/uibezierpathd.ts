declare namespace cocoascript {
  /**
   * A path that consists of straight and curved line segments that you can render in your custom views.
   * doc://com.apple.documentation/documentation/uikit/uibezierpath
   */
  interface UIBezierPath extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624348-bezierpathbyreversingpath
    bezierPathByReversingPath():cocoascript.UIBezierPath;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624381-init
    init():cocoascript.UIBezierPath;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624346-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIBezierPath;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624343-movetopoint
    moveToPoint(point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624354-addlinetopoint
    addLineToPoint(point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624367-addarcwithcenter
    addArcWithCenter_radius_startAngle_endAngle_clockwise(center: cocoascript.CGPoint, radius: cocoascript.CGFloat, startAngle: cocoascript.CGFloat, endAngle: cocoascript.CGFloat, clockwise: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624357-addcurvetopoint
    addCurveToPoint_controlPoint1_controlPoint2(endPoint: cocoascript.CGPoint, controlPoint1: cocoascript.CGPoint, controlPoint2: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624351-addquadcurvetopoint
    addQuadCurveToPoint_controlPoint(endPoint: cocoascript.CGPoint, controlPoint: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624338-closepath
    closePath():void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624363-removeallpoints
    removeAllPoints():void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624377-appendpath
    appendPath(bezierPath: cocoascript.UIBezierPath):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624342-cgpath
    CGPath(): cocoascript.CGPathRef;
    setCGPath(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624376-cgpath
    CGPath():cocoascript.CGPathRef;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624352-currentpoint
    currentPoint(): cocoascript.CGPoint;
    setCurrentPoint(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624349-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624347-linecapstyle
    lineCapStyle(): cocoascript.CGLineCap;
    setLineCapStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624378-linejoinstyle
    lineJoinStyle(): cocoascript.CGLineJoin;
    setLineJoinStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624370-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624344-flatness
    flatness(): cocoascript.CGFloat;
    setFlatness(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624360-usesevenoddfillrule
    usesEvenOddFillRule(): cocoascript.BOOL;
    setUsesEvenOddFillRule(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624373-setlinedash
    setLineDash_count_phase(pattern: cocoascript.CGFloat, count: cocoascript.NSInteger, phase: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624374-getlinedash
    getLineDash_count_phase(pattern: cocoascript.CGFloat, count: cocoascript.NSInteger, phase: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624371-fill
    fill():void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624366-fillwithblendmode
    fillWithBlendMode_alpha(blendMode: cocoascript.CGBlendMode, alpha: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624365-stroke
    stroke():void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624380-strokewithblendmode
    strokeWithBlendMode_alpha(blendMode: cocoascript.CGBlendMode, alpha: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624341-addclip
    addClip():void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624345-containspoint
    containsPoint(point: cocoascript.CGPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624382-empty
    empty(): cocoascript.BOOL;
    setEmpty(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624350-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/uikit/uibezierpath/1624340-applytransform
    applyTransform(transform: cocoascript.CGAffineTransform):void;
    //
    alloc():cocoascript.UIBezierPath;
    //
    init():cocoascript.UIBezierPath;
  }
}

declare const UIBezierPath: cocoascript.UIBezierPath;
