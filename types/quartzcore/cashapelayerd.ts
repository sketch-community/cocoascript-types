declare namespace cocoascript {
  /**
   * A layer that draws a cubic Bezier spline in its coordinate space.
   * doc://com.apple.documentation/documentation/quartzcore/cashapelayer
   */
  interface CAShapeLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521904-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522248-fillcolor
    fillColor(): cocoascript.CGColorRef;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522146-fillrule
    fillRule(): cocoascript.CAShapeLayerFillRule;
    setFillRule(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521905-linecap
    lineCap(): cocoascript.CAShapeLayerLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521921-linedashpattern
    lineDashPattern(): cocoascript.NSNumber;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521856-linedashphase
    lineDashPhase(): cocoascript.CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522147-linejoin
    lineJoin(): cocoascript.CAShapeLayerLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521890-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521870-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521897-strokecolor
    strokeColor(): cocoascript.CGColorRef;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1521929-strokestart
    strokeStart(): cocoascript.CGFloat;
    setStrokeStart(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cashapelayer/1522252-strokeend
    strokeEnd(): cocoascript.CGFloat;
    setStrokeEnd(): void;
    //
    alloc():cocoascript.CAShapeLayer;
    //
    init():cocoascript.CAShapeLayer;
  }
}

declare const CAShapeLayer: cocoascript.CAShapeLayer;
