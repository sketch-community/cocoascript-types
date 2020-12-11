declare namespace cocoascript {
  /**
   * Represents a generic overlay that draws its contents using a
   * doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview
   */
  interface MKOverlayPathView extends MKOverlayView {
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617215-fillcolor
    fillColor(): cocoascript.UIColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617209-strokecolor
    strokeColor(): cocoascript.UIColor;
    setStrokeColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617218-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617206-linejoin
    lineJoin(): cocoascript.CGLineJoin;
    setLineJoin(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617212-linecap
    lineCap(): cocoascript.CGLineCap;
    setLineCap(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617219-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617211-linedashphase
    lineDashPhase(): cocoascript.CGFloat;
    setLineDashPhase(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617210-linedashpattern
    lineDashPattern(): cocoascript.NSArray;
    setLineDashPattern(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617208-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617216-createpath
    createPath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617217-invalidatepath
    invalidatePath():void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617205-applystrokepropertiestocontext
    applyStrokePropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617207-applyfillpropertiestocontext
    applyFillPropertiesToContext_atZoomScale(context: cocoascript.CGContextRef, zoomScale: cocoascript.MKZoomScale):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617214-strokepath
    strokePath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/mapkit/mkoverlaypathview/1617213-fillpath
    fillPath_inContext(path: cocoascript.CGPathRef, context: cocoascript.CGContextRef):void;
    //
    alloc():cocoascript.MKOverlayPathView;
    //
    init():cocoascript.MKOverlayPathView;
  }
}

declare const MKOverlayPathView: cocoascript.MKOverlayPathView;
