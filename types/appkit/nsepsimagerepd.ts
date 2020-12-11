declare namespace cocoascript {
  /**
   * An object that can render an image from encapsulated PostScript (EPS) code.
   * doc://com.apple.documentation/documentation/appkit/nsepsimagerep
   */
  interface NSEPSImageRep extends NSImageRep {
    // doc://com.apple.documentation/documentation/appkit/nsepsimagerep/1528187-initwithdata
    initWithData(epsData: cocoascript.NSData):cocoascript.NSEPSImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsepsimagerep/1528455-boundingbox
    boundingBox(): cocoascript.NSRect;
    setBoundingBox(): void;
    // doc://com.apple.documentation/documentation/appkit/nsepsimagerep/1534453-epsrepresentation
    EPSRepresentation(): cocoascript.NSData;
    setEPSRepresentation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsepsimagerep/1526292-preparegstate
    prepareGState():void;
    //
    alloc():cocoascript.NSEPSImageRep;
    //
    init():cocoascript.NSEPSImageRep;
  }
}

declare const NSEPSImageRep: cocoascript.NSEPSImageRep;
