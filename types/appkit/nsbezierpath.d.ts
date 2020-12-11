declare namespace cocoascript {
  /**
   * An object that can create paths using PostScript-style commands.
   * doc://com.apple.documentation/documentation/appkit/nsbezierpath
   */
  interface NSBezierPath extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520733-bezierpathbyflatteningpath
    bezierPathByFlatteningPath(): cocoascript.NSBezierPath;
    setBezierPathByFlatteningPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520656-bezierpathbyreversingpath
    bezierPathByReversingPath(): cocoascript.NSBezierPath;
    setBezierPathByReversingPath(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520684-movetopoint
    moveToPoint(point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520742-linetopoint
    lineToPoint(point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520628-curvetopoint
    curveToPoint_controlPoint1_controlPoint2(endPoint: cocoascript.NSPoint, controlPoint1: cocoascript.NSPoint, controlPoint2: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520640-closepath
    closePath():void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520724-relativemovetopoint
    relativeMoveToPoint(point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520709-relativelinetopoint
    relativeLineToPoint(point: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520714-relativecurvetopoint
    relativeCurveToPoint_controlPoint1_controlPoint2(endPoint: cocoascript.NSPoint, controlPoint1: cocoascript.NSPoint, controlPoint2: cocoascript.NSPoint):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520688-appendbezierpath
    appendBezierPath(path: cocoascript.NSBezierPath):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520749-appendbezierpathwithpoints
    appendBezierPathWithPoints_count(points: cocoascript.NSPointArray, count: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520718-appendbezierpathwithovalinrect
    appendBezierPathWithOvalInRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520737-appendbezierpathwitharcfrompoint
    appendBezierPathWithArcFromPoint_toPoint_radius(point1: cocoascript.NSPoint, point2: cocoascript.NSPoint, radius: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520680-appendbezierpathwitharcwithcente
    appendBezierPathWithArcWithCenter_radius_startAngle_endAngle(center: cocoascript.NSPoint, radius: cocoascript.CGFloat, startAngle: cocoascript.CGFloat, endAngle: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520659-appendbezierpathwitharcwithcente
    appendBezierPathWithArcWithCenter_radius_startAngle_endAngle_clockwise(center: cocoascript.NSPoint, radius: cocoascript.CGFloat, startAngle: cocoascript.CGFloat, endAngle: cocoascript.CGFloat, clockwise: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520670-appendbezierpathwithrect
    appendBezierPathWithRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520705-appendbezierpathwithroundedrect
    appendBezierPathWithRoundedRect_xRadius_yRadius(rect: cocoascript.NSRect, xRadius: cocoascript.CGFloat, yRadius: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/2887184-appendbezierpathwithcgglyph
    appendBezierPathWithCGGlyph_inFont(glyph: cocoascript.CGGlyph, font: cocoascript.NSFont):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/2887165-appendbezierpathwithcgglyphs
    appendBezierPathWithCGGlyphs_count_inFont(glyphs: cocoascript.CGGlyph, count: cocoascript.NSInteger, font: cocoascript.NSFont):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520661-appendbezierpathwithglyph
    appendBezierPathWithGlyph_inFont(glyph: cocoascript.NSGlyph, font: cocoascript.NSFont):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520750-appendbezierpathwithglyphs
    appendBezierPathWithGlyphs_count_inFont(glyphs: cocoascript.NSGlyph, count: cocoascript.NSInteger, font: cocoascript.NSFont):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520682-appendbezierpathwithpackedglyphs
    appendBezierPathWithPackedGlyphs(packedGlyphs: cocoascript.char):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520657-windingrule
    windingRule(): cocoascript.NSWindingRule;
    setWindingRule(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520667-linecapstyle
    lineCapStyle(): cocoascript.NSLineCapStyle;
    setLineCapStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520726-linejoinstyle
    lineJoinStyle(): cocoascript.NSLineJoinStyle;
    setLineJoinStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520655-linewidth
    lineWidth(): cocoascript.CGFloat;
    setLineWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520740-miterlimit
    miterLimit(): cocoascript.CGFloat;
    setMiterLimit(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520676-flatness
    flatness(): cocoascript.CGFloat;
    setFlatness(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520636-getlinedash
    getLineDash_count_phase(pattern: cocoascript.CGFloat, count: cocoascript.NSInteger, phase: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520730-setlinedash
    setLineDash_count_phase(pattern: cocoascript.CGFloat, count: cocoascript.NSInteger, phase: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520632-defaultwindingrule
    defaultWindingRule(): cocoascript.NSWindingRule;
    setDefaultWindingRule(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520678-defaultlinecapstyle
    defaultLineCapStyle(): cocoascript.NSLineCapStyle;
    setDefaultLineCapStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520648-defaultlinejoinstyle
    defaultLineJoinStyle(): cocoascript.NSLineJoinStyle;
    setDefaultLineJoinStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520644-defaultlinewidth
    defaultLineWidth(): cocoascript.CGFloat;
    setDefaultLineWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520728-defaultmiterlimit
    defaultMiterLimit(): cocoascript.CGFloat;
    setDefaultMiterLimit(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520720-defaultflatness
    defaultFlatness(): cocoascript.CGFloat;
    setDefaultFlatness(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520739-stroke
    stroke():void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520700-fill
    fill():void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520634-addclip
    addClip():void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520704-setclip
    setClip():void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520716-containspoint
    containsPoint(point: cocoascript.NSPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520722-bounds
    bounds(): cocoascript.NSRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520654-controlpointbounds
    controlPointBounds(): cocoascript.NSRect;
    setControlPointBounds(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520698-currentpoint
    currentPoint(): cocoascript.NSPoint;
    setCurrentPoint(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520712-empty
    empty(): cocoascript.BOOL;
    setEmpty(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520635-transformusingaffinetransform
    transformUsingAffineTransform(transform: cocoascript.NSAffineTransform):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520645-elementcount
    elementCount(): cocoascript.NSInteger;
    setElementCount(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520751-elementatindex
    elementAtIndex(index: cocoascript.NSInteger):cocoascript.NSBezierPathElement;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520674-elementatindex
    elementAtIndex_associatedPoints(index: cocoascript.NSInteger, points: cocoascript.NSPointArray):cocoascript.NSBezierPathElement;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520668-removeallpoints
    removeAllPoints():void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520671-setassociatedpoints
    setAssociatedPoints_atIndex(points: cocoascript.NSPointArray, index: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520706-cachesbezierpath
    cachesBezierPath():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbezierpath/1520702-setcachesbezierpath
    setCachesBezierPath(flag: cocoascript.BOOL):void;
    //
    alloc():cocoascript.NSBezierPath;
    //
    init():cocoascript.NSBezierPath;
  }
}

declare const NSBezierPath: cocoascript.NSBezierPath;
