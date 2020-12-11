declare namespace cocoascript {
  /**
   * A graphics coordinate transformation.
   * doc://com.apple.documentation/documentation/foundation/nsaffinetransform
   */
  interface NSAffineTransform extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411498-init
    init():cocoascript.NSAffineTransform;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1413399-initwithtransform
    initWithTransform(transform: cocoascript.NSAffineTransform):cocoascript.NSAffineTransform;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1407401-rotatebydegrees
    rotateByDegrees(angle: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411353-rotatebyradians
    rotateByRadians(angle: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1413649-scaleby
    scaleBy(scale: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411806-scalexby
    scaleXBy_yBy(scaleX: cocoascript.CGFloat, scaleY: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1417196-translatexby
    translateXBy_yBy(deltaX: cocoascript.CGFloat, deltaY: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1408404-appendtransform
    appendTransform(transform: cocoascript.NSAffineTransform):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1409793-prependtransform
    prependTransform(transform: cocoascript.NSAffineTransform):void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1412434-invert
    invert():void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1411619-transformpoint
    transformPoint(aPoint: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1416692-transformsize
    transformSize(aSize: cocoascript.NSSize):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1462131-transformbezierpath
    transformBezierPath(path: cocoascript.NSBezierPath):cocoascript.NSBezierPath;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1414485-transformstruct
    transformStruct(): cocoascript.NSAffineTransformStruct;
    setTransformStruct(): void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1462133-set
    set():void;
    // doc://com.apple.documentation/documentation/foundation/nsaffinetransform/1462135-concat
    concat():void;
    //
    alloc():cocoascript.NSAffineTransform;
    //
    init():cocoascript.NSAffineTransform;
  }
}

declare const NSAffineTransform: cocoascript.NSAffineTransform;
