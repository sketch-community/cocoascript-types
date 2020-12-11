declare namespace cocoascript {
  /**
   * An object that represents a graphics context.
   * doc://com.apple.documentation/documentation/appkit/nsgraphicscontext
   */
  interface NSGraphicsContext extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1535352-currentcontext
    currentContext(): cocoascript.NSGraphicsContext;
    setCurrentContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1524878-cgcontext
    CGContext(): cocoascript.CGContextRef;
    setCGContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1524914-graphicsport
    graphicsPort(): void;
    setGraphicsPort(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1525118-restoregraphicsstate
    restoreGraphicsState():void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1533887-savegraphicsstate
    saveGraphicsState():void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1524673-drawingtoscreen
    drawingToScreen(): cocoascript.BOOL;
    setDrawingToScreen(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1528254-attributes
    attributes(): cocoascript.id;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1531568-flipped
    flipped(): cocoascript.BOOL;
    setFlipped(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1527919-flushgraphics
    flushGraphics():void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1564181-focusstack
    focusStack():cocoascript.NSGraphicsContext;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1564182-setfocusstack
    setFocusStack(stack: cocoascript.NSGraphicsContext):void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1525984-compositingoperation
    compositingOperation(): cocoascript.NSCompositingOperation;
    setCompositingOperation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1529711-imageinterpolation
    imageInterpolation(): cocoascript.NSImageInterpolation;
    setImageInterpolation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1529486-shouldantialias
    shouldAntialias(): cocoascript.BOOL;
    setShouldAntialias(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1527510-patternphase
    patternPhase(): cocoascript.NSPoint;
    setPatternPhase(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1534326-cicontext
    CIContext(): cocoascript.CIContext;
    setCIContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgraphicscontext/1533527-colorrenderingintent
    colorRenderingIntent(): cocoascript.NSColorRenderingIntent;
    setColorRenderingIntent(): void;
    //
    alloc():cocoascript.NSGraphicsContext;
    //
    init():cocoascript.NSGraphicsContext;
  }
}

declare const NSGraphicsContext: cocoascript.NSGraphicsContext;
