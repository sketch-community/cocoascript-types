declare namespace cocoascript {
  /**
   * A symbol on a ruler view, indicating a location for the graphics element it represents in the client of the ruler view.
   * doc://com.apple.documentation/documentation/appkit/nsrulermarker
   */
  interface NSRulerMarker extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496240-initwithrulerview
    initWithRulerView_markerLocation_image_imageOrigin(ruler: cocoascript.NSRulerView, location: cocoascript.CGFloat, image: cocoascript.NSImage, imageOrigin: cocoascript.NSPoint):cocoascript.NSRulerMarker;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496239-ruler
    ruler(): cocoascript.NSRulerView;
    setRuler(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496251-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496236-imageorigin
    imageOrigin(): cocoascript.NSPoint;
    setImageOrigin(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496249-imagerectinruler
    imageRectInRuler(): cocoascript.NSRect;
    setImageRectInRuler(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496245-thicknessrequiredinruler
    thicknessRequiredInRuler(): cocoascript.CGFloat;
    setThicknessRequiredInRuler(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496247-movable
    movable(): cocoascript.BOOL;
    setMovable(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496238-removable
    removable(): cocoascript.BOOL;
    setRemovable(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496255-markerlocation
    markerLocation(): cocoascript.CGFloat;
    setMarkerLocation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496244-representedobject
    representedObject(): cocoascript.NSCopying;
    setRepresentedObject(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496234-drawrect
    drawRect(rect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496253-dragging
    dragging(): cocoascript.BOOL;
    setDragging(): void;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1496248-trackmouse
    trackMouse_adding(mouseDownEvent: cocoascript.NSEvent, isAdding: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsrulermarker/1642136-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSRulerMarker;
    //
    alloc():cocoascript.NSRulerMarker;
    //
    init():cocoascript.NSRulerMarker;
  }
}

declare const NSRulerMarker: cocoascript.NSRulerMarker;
