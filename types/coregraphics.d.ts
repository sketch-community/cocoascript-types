declare namespace cocoascript {
  /**
   * A structure that contains width and height values.
   * doc://com.apple.documentation/documentation/coregraphics/cgsize
   */
  interface CGSize {
    // doc://com.apple.documentation/documentation/coregraphics/1455274-cgsizecreatedictionaryrepresenta
    CGSizeCreateDictionaryRepresentation(): cocoascript.CGSize;
    setCGSizeCreateDictionaryRepresentation(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgsize/1455076-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgsize/1454308-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * A set of components that define a color, with a color space specifying how to interpret them.
   * doc://com.apple.documentation/documentation/coregraphics/cgcolorref
   */
  interface CGColorRef {
  }
}
declare namespace cocoascript {
  /**
   * A profile that specifies how to interpret a color value for display.
   * doc://com.apple.documentation/documentation/coregraphics/cgcolorspaceref
   */
  interface CGColorSpaceRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgfloat
  type CGFloat = number;
}
declare namespace cocoascript {
  /**
   * A structure that contains the location and dimensions of a rectangle.
   * doc://com.apple.documentation/documentation/coregraphics/cgrect
   */
  interface CGRect {
    // doc://com.apple.documentation/documentation/coregraphics/cgrect/1454354-origin
    origin(): cocoascript.CGPoint;
    setOrigin(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgrect/1455155-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/coregraphics/1455760-cgrectcreatedictionaryrepresenta
    CGRectCreateDictionaryRepresentation(): cocoascript.CGRect;
    setCGRectCreateDictionaryRepresentation(): void;
  }
}
declare const kCGColorSpaceExtendedGray: cocoascript.CFStringRef;
declare const kCGColorSpaceExtendedSRGB: cocoascript.CFStringRef;
declare namespace cocoascript {
  /**
   * A bitmap image or image mask.
   * doc://com.apple.documentation/documentation/coregraphics/cgimageref
   */
  interface CGImageRef {
  }
}
declare namespace cocoascript {
  /**
   * A structure that contains a point in a two-dimensional coordinate system.
   * doc://com.apple.documentation/documentation/coregraphics/cgpoint
   */
  interface CGPoint {
    // doc://com.apple.documentation/documentation/coregraphics/cgpoint/1456040-x
    x(): cocoascript.CGFloat;
    setX(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpoint/1454718-y
    y(): cocoascript.CGFloat;
    setY(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowlevelkey
  type CGWindowLevelKey = number;
}
declare const kCGDisplayStreamYCbCrMatrix: cocoascript.CFStringRef;
declare const CGDisplayStreamUpdateGetRects: cocoascript.size_t;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplayreconfigurationcallback
  type CGDisplayReconfigurationCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgscreenrefreshcallback
  type CGScreenRefreshCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgscreenupdatemovecallback
  type CGScreenUpdateMoveCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdirectdisplayid
  type CGDirectDisplayID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplayblendfraction
  type CGDisplayBlendFraction = number;
}
declare namespace cocoascript {
  /**
   * A reference to a display configuration transaction.
   * doc://com.apple.documentation/documentation/coregraphics/cgdisplayconfigref
   */
  interface CGDisplayConfigRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplaycount
  type CGDisplayCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplayerr
  type CGDisplayErr = cocoascript.CGError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplayfadeinterval
  type CGDisplayFadeInterval = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplayfadereservationtoken
  type CGDisplayFadeReservationToken = number;
}
declare namespace cocoascript {
  /**
   * A reference to a display mode object.
   * doc://com.apple.documentation/documentation/coregraphics/cgdisplaymoderef
   */
  interface CGDisplayModeRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplayreservationinterval
  type CGDisplayReservationInterval = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cggammavalue
  type CGGammaValue = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgopengldisplaymask
  type CGOpenGLDisplayMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgrectcount
  type CGRectCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgrefreshrate
  type CGRefreshRate = number;
}
declare namespace cocoascript {
  /**
   * The distance, in pixel units, that an onscreen region moves.
   * doc://com.apple.documentation/documentation/coregraphics/cgscreenupdatemovedelta
   */
  interface CGScreenUpdateMoveDelta {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowlevel
  type CGWindowLevel = number;
}
declare namespace cocoascript {
  /**
   * A reference to a display stream object.
   * doc://com.apple.documentation/documentation/coregraphics/cgdisplaystreamref
   */
  interface CGDisplayStreamRef {
  }
}
declare namespace cocoascript {
  /**
   * A reference to frame update’s metadata.
   * doc://com.apple.documentation/documentation/coregraphics/cgdisplaystreamupdateref
   */
  interface CGDisplayStreamUpdateRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplaystreamframeavailablehandler
  type CGDisplayStreamFrameAvailableHandler = cocoascript.CGDisplayStreamUpdateRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgcaptureoptions
  type CGCaptureOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplaychangesummaryflags
  type CGDisplayChangeSummaryFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgconfigureoption
  type CGConfigureOption = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgscreenupdateoperation
  type CGScreenUpdateOperation = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplaystreamupdaterecttype
  type CGDisplayStreamUpdateRectType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdisplaystreamframestatus
  type CGDisplayStreamFrameStatus = number;
}
declare namespace cocoascript {
  /**
   * Defines an opaque type that represents a low-level hardware event.
   * doc://com.apple.documentation/documentation/coregraphics/cgeventref
   */
  interface CGEventRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgcolorrenderingintent
  type CGColorRenderingIntent = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgbitmapinfo
  type CGBitmapInfo = number;
}
declare namespace cocoascript {
  /**
   * An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
   * doc://com.apple.documentation/documentation/coregraphics/cgdataproviderref
   */
  interface CGDataProviderRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgimagealphainfo
  type CGImageAlphaInfo = number;
}
declare namespace cocoascript {
  /**
   * A Quartz 2D drawing environment.
   * doc://com.apple.documentation/documentation/coregraphics/cgcontextref
   */
  interface CGContextRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgglyph
  type CGGlyph = cocoascript.CGFontIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpathref
  type CGPathRef = cocoascript.CGPath;
}
declare namespace cocoascript {
  /**
   * A structure that contains a two-dimensional vector.
   * doc://com.apple.documentation/documentation/coregraphics/cgvector
   */
  interface CGVector {
    // doc://com.apple.documentation/documentation/coregraphics/cgvector/1454722-dx
    dx(): cocoascript.CGFloat;
    setDx(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgvector/1455006-dy
    dy(): cocoascript.CGFloat;
    setDy(): void;
  }
}
declare namespace cocoascript {
  /**
   * An affine transformation matrix for use in drawing 2D graphics.
   * doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform
   */
  interface CGAffineTransform {
    // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456003-a
    a(): cocoascript.CGFloat;
    setA(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1454545-b
    b(): cocoascript.CGFloat;
    setB(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456339-c
    c(): cocoascript.CGFloat;
    setC(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1455693-d
    d(): cocoascript.CGFloat;
    setD(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456540-tx
    tx(): cocoascript.CGFloat;
    setTx(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456442-ty
    ty(): cocoascript.CGFloat;
    setTy(): void;
  }
}
declare namespace cocoascript {
  /**
   * An object that describes how to convert between color spaces for use by other system services.
   * doc://com.apple.documentation/documentation/coregraphics/cgcolorconversioninforef
   */
  interface CGColorConversionInfoRef {
  }
}
declare namespace cocoascript {
  /**
   * A set of character glyphs and layout information for drawing text.
   * doc://com.apple.documentation/documentation/coregraphics/cgfontref
   */
  interface CGFontRef {
  }
}
declare const kCGFontIndexInvalid: cocoascript.CGFontIndex;
declare const CGSizeZero: cocoascript.CGSize;
declare const CGRectZero: cocoascript.CGRect;
declare const kCGPDFContextMediaBox: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgblendmode
  type CGBlendMode = number;
}
declare const CGPointZero: cocoascript.CGPoint;
declare const kCGColorSpaceGenericGrayGamma2_2: cocoascript.CFStringRef;
declare const kCGColorSpaceSRGB: cocoascript.CFStringRef;
declare namespace cocoascript {
  /**
   * A mutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
   * doc://com.apple.documentation/documentation/coregraphics/cgmutablepathref
   */
  interface CGMutablePathRef {
  }
}
declare namespace cocoascript {
  /**
   * An offscreen context for reusing content drawn with Core Graphics.
   * doc://com.apple.documentation/documentation/coregraphics/cglayerref
   */
  interface CGLayerRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgerror
  type CGError = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowid
  type CGWindowID = number;
}
declare const kCGDisplayStreamSourceRect: cocoascript.CFStringRef;
declare const kCGDisplayStreamDestinationRect: cocoascript.CFStringRef;
declare const kCGDisplayStreamPreserveAspectRatio: cocoascript.CFStringRef;
declare const kCGDisplayStreamColorSpace: cocoascript.CFStringRef;
declare const kCGDisplayStreamMinimumFrameTime: cocoascript.CFStringRef;
declare const kCGDisplayStreamShowCursor: cocoascript.CFStringRef;
declare const kCGDisplayStreamQueueDepth: cocoascript.CFStringRef;
declare const kCGDisplayStreamYCbCrMatrix_ITU_R_709_2: cocoascript.CFStringRef;
declare const kCGDisplayStreamYCbCrMatrix_ITU_R_601_4: cocoascript.CFStringRef;
declare const kCGDisplayStreamYCbCrMatrix_SMPTE_240M_1995: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventtapcallback
  type CGEventTapCallBack = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgbuttoncount
  type CGButtonCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgcharcode
  type CGCharCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventmask
  type CGEventMask = cocoascript.uint64_t;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventsourcekeyboardtype
  type CGEventSourceKeyboardType = number;
}
declare namespace cocoascript {
  /**
   * Defines an opaque type that represents the source of a Quartz event.
   * doc://com.apple.documentation/documentation/coregraphics/cgeventsourceref
   */
  interface CGEventSourceRef {
  }
}
declare namespace cocoascript {
  /**
   * Defines the structure used to report information about event taps.
   * doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation
   */
  interface CGEventTapInformation {
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545758-eventsofinterest
    eventsOfInterest(): cocoascript.CGEventMask;
    setEventsOfInterest(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545768-options
    options(): cocoascript.CGEventTapOptions;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545744-processbeingtapped
    processBeingTapped(): any;
    setProcessBeingTapped(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545759-tappoint
    tapPoint(): cocoascript.CGEventTapLocation;
    setTapPoint(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545766-tappingprocess
    tappingProcess(): any;
    setTappingProcess(): void;
  }
}
declare namespace cocoascript {
  /**
   * Defines an opaque type that represents state within the client application that’s associated with an event tap.
   * doc://com.apple.documentation/documentation/coregraphics/cgeventtapproxy
   */
  interface CGEventTapProxy {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventtimestamp
  type CGEventTimestamp = cocoascript.uint64_t;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgkeycode
  type CGKeyCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwheelcount
  type CGWheelCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventfield
  type CGEventField = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventfiltermask
  type CGEventFilterMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventflags
  type CGEventFlags = cocoascript.uint64_t;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventsourcestateid
  type CGEventSourceStateID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventsuppressionstate
  type CGEventSuppressionState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventtaplocation
  type CGEventTapLocation = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventtapoptions
  type CGEventTapOptions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventtapplacement
  type CGEventTapPlacement = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventtype
  type CGEventType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgmousebutton
  type CGMouseButton = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventmousesubtype
  type CGEventMouseSubtype = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgscrolleventunit
  type CGScrollEventUnit = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowlistoption
  type CGWindowListOption = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowimageoption
  type CGWindowImageOption = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowsharingtype
  type CGWindowSharingType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowbackingtype
  type CGWindowBackingType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgrectedge
  type CGRectEdge = number;
}
declare const CGImageGetDecode: cocoascript.CGImageRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgfontindex
  type CGFontIndex = cocoascript.short;
}
declare const kCGGlyphMax: cocoascript.CGFontIndex;
declare const kCGFontIndexMax: cocoascript.CGFontIndex;
declare const CGColorGetComponents: cocoascript.CGColorRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgcolorspacemodel
  type CGColorSpaceModel = number;
}
declare const CGRectNull: cocoascript.CGRect;
declare namespace cocoascript {
  /**
   * An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
   * doc://com.apple.documentation/documentation/coregraphics/cgdataconsumerref
   */
  interface CGDataConsumerRef {
  }
}
declare const kCGPDFContextCropBox: cocoascript.CFStringRef;
declare const kCGPDFContextBleedBox: cocoascript.CFStringRef;
declare const kCGPDFContextTrimBox: cocoascript.CFStringRef;
declare const kCGPDFContextArtBox: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cglinecap
  type CGLineCap = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cglinejoin
  type CGLineJoin = number;
}
declare namespace cocoascript {
  /**
   * A type that represents a page in a PDF document.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfpageref
   */
  interface CGPDFPageRef {
  }
}
declare const kCGColorSpaceDisplayP3: cocoascript.CFStringRef;
declare const kCGColorSpaceDisplayP3_HLG: cocoascript.CFStringRef;
declare const kCGColorSpaceDisplayP3_PQ_EOTF: cocoascript.CFStringRef;
declare const kCGColorSpaceExtendedLinearDisplayP3: cocoascript.CFStringRef;
declare const kCGColorSpaceLinearSRGB: cocoascript.CFStringRef;
declare const kCGColorSpaceExtendedLinearSRGB: cocoascript.CFStringRef;
declare const kCGColorSpaceLinearGray: cocoascript.CFStringRef;
declare const kCGColorSpaceExtendedLinearGray: cocoascript.CFStringRef;
declare const kCGColorSpaceGenericRGBLinear: cocoascript.CFStringRef;
declare const kCGColorSpaceGenericCMYK: cocoascript.CFStringRef;
declare const kCGColorSpaceGenericXYZ: cocoascript.CFStringRef;
declare const kCGColorSpaceGenericLab: cocoascript.CFStringRef;
declare const kCGColorSpaceACESCGLinear: cocoascript.CFStringRef;
declare const kCGColorSpaceAdobeRGB1998: cocoascript.CFStringRef;
declare const kCGColorSpaceDCIP3: cocoascript.CFStringRef;
declare const kCGColorSpaceITUR_709: cocoascript.CFStringRef;
declare const kCGColorSpaceROMMRGB: cocoascript.CFStringRef;
declare const kCGColorSpaceITUR_2020: cocoascript.CFStringRef;
declare const kCGColorSpaceITUR_2020_HLG: cocoascript.CFStringRef;
declare const kCGColorSpaceITUR_2020_PQ_EOTF: cocoascript.CFStringRef;
declare const kCGColorSpaceExtendedLinearITUR_2020: cocoascript.CFStringRef;
declare const kCGColorSpaceGenericRGB: cocoascript.CFStringRef;
declare const kCGColorSpaceGenericGray: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgcolorconversioninfotransformtype
  type CGColorConversionInfoTransformType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cggesturephase
  type CGGesturePhase = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgglyphdeprecatedenum
  type CGGlyphDeprecatedEnum = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgimagebyteorderinfo
  type CGImageByteOrderInfo = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgmomentumscrollphase
  type CGMomentumScrollPhase = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgscrollphase
  type CGScrollPhase = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgimagepixelformatinfo
  type CGImagePixelFormatInfo = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfaccesspermissions
  type CGPDFAccessPermissions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdftagtype
  type CGPDFTagType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgbitmapcontextreleasedatacallback
  type CGBitmapContextReleaseDataCallback = void;
}
declare const kCGColorConversionBlackPointCompensation: cocoascript.CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cginterpolationquality
  type CGInterpolationQuality = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgtextdrawingmode
  type CGTextDrawingMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgtextencoding
  type CGTextEncoding = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataconsumerputbytescallback
  type CGDataConsumerPutBytesCallback = cocoascript.size_t;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataconsumerreleaseinfocallback
  type CGDataConsumerReleaseInfoCallback = void;
}
declare namespace cocoascript {
  /**
   * A structure that contains pointers to callback functions that manage the copying of data for a data consumer.
   * doc://com.apple.documentation/documentation/coregraphics/cgdataconsumercallbacks
   */
  interface CGDataConsumerCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgdataconsumercallbacks/1455040-putbytes
    putBytes(): cocoascript.CGDataConsumerPutBytesCallback;
    setPutBytes(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataconsumercallbacks/1454472-releaseconsumer
    releaseConsumer(): cocoascript.CGDataConsumerReleaseInfoCallback;
    setReleaseConsumer(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidergetbytepointercallback
  type CGDataProviderGetBytePointerCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidergetbytescallback
  type CGDataProviderGetBytesCallback = cocoascript.size_t;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderreleaseinfocallback
  type CGDataProviderReleaseInfoCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderrewindcallback
  type CGDataProviderRewindCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderskipforwardcallback
  type CGDataProviderSkipForwardCallback = cocoascript.off_t;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderreleasebytepointercallback
  type CGDataProviderReleaseBytePointerCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderreleasedatacallback
  type CGDataProviderReleaseDataCallback = cocoascript.size_t;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidergetbytesatpositioncallback
  type CGDataProviderGetBytesAtPositionCallback = cocoascript.size_t;
}
declare namespace cocoascript {
  /**
   * Defines pointers to client-defined callback functions that manage the sending of data for a direct-access data provider.
   * doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks
   */
  interface CGDataProviderDirectCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408292-getbytepointer
    getBytePointer(): cocoascript.CGDataProviderGetBytePointerCallback;
    setGetBytePointer(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408298-getbytesatposition
    getBytesAtPosition(): cocoascript.CGDataProviderGetBytesAtPositionCallback;
    setGetBytesAtPosition(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408302-releasebytepointer
    releaseBytePointer(): cocoascript.CGDataProviderReleaseBytePointerCallback;
    setReleaseBytePointer(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataproviderdirectcallbacks/1408286-releaseinfo
    releaseInfo(): cocoascript.CGDataProviderReleaseInfoCallback;
    setReleaseInfo(): void;
  }
}
declare namespace cocoascript {
  /**
   * Defines a structure containing pointers to client-defined callback functions that manage the sending of data for a sequential-access data provider.
   * doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks
   */
  interface CGDataProviderSequentialCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408274-getbytes
    getBytes(): cocoascript.CGDataProviderGetBytesCallback;
    setGetBytes(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408306-releaseinfo
    releaseInfo(): cocoascript.CGDataProviderReleaseInfoCallback;
    setReleaseInfo(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408300-rewind
    rewind(): cocoascript.CGDataProviderRewindCallback;
    setRewind(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidersequentialcallbacks/1408272-skipforward
    skipForward(): cocoascript.CGDataProviderSkipForwardCallback;
    setSkipForward(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgfontpostscriptformat
  type CGFontPostScriptFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgfunctionevaluatecallback
  type CGFunctionEvaluateCallback = cocoascript.CGFloat;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgfunctionreleaseinfocallback
  type CGFunctionReleaseInfoCallback = void;
}
declare namespace cocoascript {
  /**
   * A general facility for defining and using callback functions.
   * doc://com.apple.documentation/documentation/coregraphics/cgfunctionref
   */
  interface CGFunctionRef {
  }
}
declare namespace cocoascript {
  /**
   * A structure that contains callbacks needed by a
   * doc://com.apple.documentation/documentation/coregraphics/cgfunctioncallbacks
   */
  interface CGFunctionCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgfunctioncallbacks/1390866-evaluate
    evaluate(): cocoascript.CGFunctionEvaluateCallback;
    setEvaluate(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgfunctioncallbacks/1390868-releaseinfo
    releaseInfo(): cocoascript.CGFunctionReleaseInfoCallback;
    setReleaseInfo(): void;
  }
}
declare namespace cocoascript {
  /**
   * A definition for a smooth transition between colors for drawing radial and axial gradient fills.
   * doc://com.apple.documentation/documentation/coregraphics/cggradientref
   */
  interface CGGradientRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cggradientdrawingoptions
  type CGGradientDrawingOptions = number;
}
declare namespace cocoascript {
  /**
   * A definition for a smooth transition between colors, controlled by a custom function you provide, for drawing radial and axial gradient fills.
   * doc://com.apple.documentation/documentation/coregraphics/cgshadingref
   */
  interface CGShadingRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpathapplierfunction
  type CGPathApplierFunction = cocoascript.CGPathElement;
}
declare namespace cocoascript {
  /**
   * A data structure that provides information about a path element.
   * doc://com.apple.documentation/documentation/coregraphics/cgpathelement
   */
  interface CGPathElement {
    // doc://com.apple.documentation/documentation/coregraphics/cgpathelement/1411198-points
    points(): cocoascript.CGPoint;
    setPoints(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpathelement/1411186-type
    type(): cocoascript.CGPathElementType;
    setType(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpathdrawingmode
  type CGPathDrawingMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpathelementtype
  type CGPathElementType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpatterndrawpatterncallback
  type CGPatternDrawPatternCallback = cocoascript.CGContextRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpatternreleaseinfocallback
  type CGPatternReleaseInfoCallback = void;
}
declare namespace cocoascript {
  /**
   * A 2D pattern to be used for drawing graphics paths.
   * doc://com.apple.documentation/documentation/coregraphics/cgpatternref
   */
  interface CGPatternRef {
  }
}
declare namespace cocoascript {
  /**
   * A structure that holds a version and two callback functions for drawing a custom pattern.
   * doc://com.apple.documentation/documentation/coregraphics/cgpatterncallbacks
   */
  interface CGPatternCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgpatterncallbacks/1454736-drawpattern
    drawPattern(): cocoascript.CGPatternDrawPatternCallback;
    setDrawPattern(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpatterncallbacks/1455379-releaseinfo
    releaseInfo(): cocoascript.CGPatternReleaseInfoCallback;
    setReleaseInfo(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpatterntiling
  type CGPatternTiling = number;
}
declare namespace cocoascript {
  /**
   * A document that contains PDF (Portable Document Format) drawing information.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfdocumentref
   */
  interface CGPDFDocumentRef {
  }
}
declare namespace cocoascript {
  /**
   * An opaque type that encapsulates a PDF array.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfarrayref
   */
  interface CGPDFArrayRef {
  }
}
declare namespace cocoascript {
  /**
   * An opaque type that provides access to the data that describes the appearance of a PDF page.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfcontentstreamref
   */
  interface CGPDFContentStreamRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfdictionaryapplierfunction
  type CGPDFDictionaryApplierFunction = void;
}
declare namespace cocoascript {
  /**
   * A type that encapsulates a PDF dictionary.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfdictionaryref
   */
  interface CGPDFDictionaryRef {
  }
}
declare namespace cocoascript {
  /**
   * A type that contains information about a PDF object.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfobjectref
   */
  interface CGPDFObjectRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfboolean
  type CGPDFBoolean = string;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfinteger
  type CGPDFInteger = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfreal
  type CGPDFReal = cocoascript.CGFloat;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfobjecttype
  type CGPDFObjectType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfoperatorcallback
  type CGPDFOperatorCallback = void;
}
declare namespace cocoascript {
  /**
   * A type that stores callback functions for PDF operators.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfoperatortableref
   */
  interface CGPDFOperatorTableRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfbox
  type CGPDFBox = number;
}
declare namespace cocoascript {
  /**
   * A type used to parse a PDF content stream.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfscannerref
   */
  interface CGPDFScannerRef {
  }
}
declare namespace cocoascript {
  /**
   * A type that represents a PDF stream.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfstreamref
   */
  interface CGPDFStreamRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfdataformat
  type CGPDFDataFormat = number;
}
declare const CGPDFStringGetBytePtr: cocoascript.CGPDFStringRef;
declare namespace cocoascript {
  /**
   * A data type that represents a string in a PDF document.
   * doc://com.apple.documentation/documentation/coregraphics/cgpdfstringref
   */
  interface CGPDFStringRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpsconverterbegindocumentcallback
  type CGPSConverterBeginDocumentCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpsconverterenddocumentcallback
  type CGPSConverterEndDocumentCallback = boolean;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpsconverterbeginpagecallback
  type CGPSConverterBeginPageCallback = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpsconverterendpagecallback
  type CGPSConverterEndPageCallback = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpsconverterprogresscallback
  type CGPSConverterProgressCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertermessagecallback
  type CGPSConverterMessageCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpsconverterreleaseinfocallback
  type CGPSConverterReleaseInfoCallback = void;
}
declare namespace cocoascript {
  /**
   * An opaque data type used to convert PostScript data to PDF data.
   * doc://com.apple.documentation/documentation/coregraphics/cgpsconverterref
   */
  interface CGPSConverterRef {
  }
}
declare namespace cocoascript {
  /**
   * A structure for holding the callbacks provided when you create a PostScript converter object.
   * doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks
   */
  interface CGPSConverterCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1456036-begindocument
    beginDocument(): cocoascript.CGPSConverterBeginDocumentCallback;
    setBeginDocument(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1454345-beginpage
    beginPage(): cocoascript.CGPSConverterBeginPageCallback;
    setBeginPage(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1454481-enddocument
    endDocument(): cocoascript.CGPSConverterEndDocumentCallback;
    setEndDocument(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1454830-endpage
    endPage(): cocoascript.CGPSConverterEndPageCallback;
    setEndPage(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1455859-notemessage
    noteMessage(): cocoascript.CGPSConverterMessageCallback;
    setNoteMessage(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1455344-noteprogress
    noteProgress(): cocoascript.CGPSConverterProgressCallback;
    setNoteProgress(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpsconvertercallbacks/1455599-releaseinfo
    releaseInfo(): cocoascript.CGPSConverterReleaseInfoCallback;
    setReleaseInfo(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coregraphics/cgdevicecolor
   */
  interface CGDeviceColor {
  }
}
declare const kCGDisplayShowDuplicateLowResolutionModes: cocoascript.CFStringRef;
declare const kCGWindowAlpha: cocoascript.CFStringRef;
declare const kCGWindowBackingLocationVideoMemory: cocoascript.CFStringRef;
declare const kCGWindowBounds: cocoascript.CFStringRef;
declare const kCGWindowIsOnscreen: cocoascript.CFStringRef;
declare const kCGWindowLayer: cocoascript.CFStringRef;
declare const kCGWindowMemoryUsage: cocoascript.CFStringRef;
declare const kCGWindowName: cocoascript.CFStringRef;
declare const kCGWindowNumber: cocoascript.CFStringRef;
declare const kCGWindowOwnerName: cocoascript.CFStringRef;
declare const kCGWindowOwnerPID: cocoascript.CFStringRef;
declare const kCGWindowSharingState: cocoascript.CFStringRef;
declare const kCGWindowStoreType: cocoascript.CFStringRef;
declare const kCGWindowWorkspace: cocoascript.CFStringRef;
declare const kCGColorSpaceITUR_2100_HLG: cocoascript.CFStringRef;
declare const kCGColorSpaceITUR_2100_PQ: cocoascript.CFStringRef;
declare const kCGPDFContextAccessPermissions: cocoascript.CFStringRef;
declare const kCGPDFContextCreateLinearizedPDF: cocoascript.CFStringRef;
declare const kCGPDFContextCreatePDFA: cocoascript.CFStringRef;
declare const kCGPDFOutlineChildren: cocoascript.CFStringRef;
declare const kCGPDFOutlineDestination: cocoascript.CFStringRef;
declare const kCGPDFOutlineDestinationRect: cocoascript.CFStringRef;
declare const kCGPDFOutlineTitle: cocoascript.CFStringRef;
declare const CGPDFTagTypeGetName: cocoascript.CGPDFTagType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventerr
  type CGEventErr = cocoascript.CGError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfarrayapplierblock
  type CGPDFArrayApplierBlock = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfdictionaryapplierblock
  type CGPDFDictionaryApplierBlock = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdftagproperty
  type CGPDFTagProperty = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpathapplyblock
  type CGPathApplyBlock = cocoascript.CGPathElement;
}
declare const CGRectInfinite: cocoascript.CGRect;
declare const kCGColorWhite: cocoascript.CFStringRef;
declare const kCGColorBlack: cocoascript.CFStringRef;
declare const kCGColorClear: cocoascript.CFStringRef;
declare const kCGPDFContextAuthor: cocoascript.CFStringRef;
declare const kCGPDFContextCreator: cocoascript.CFStringRef;
declare const kCGPDFContextTitle: cocoascript.CFStringRef;
declare const kCGPDFContextOwnerPassword: cocoascript.CFStringRef;
declare const kCGPDFContextUserPassword: cocoascript.CFStringRef;
declare const kCGPDFContextAllowsPrinting: cocoascript.CFStringRef;
declare const kCGPDFContextAllowsCopying: cocoascript.CFStringRef;
declare const kCGPDFContextOutputIntent: cocoascript.CFStringRef;
declare const kCGPDFContextOutputIntents: cocoascript.CFStringRef;
declare const kCGPDFContextSubject: cocoascript.CFStringRef;
declare const kCGPDFContextKeywords: cocoascript.CFStringRef;
declare const kCGPDFContextEncryptionKeyLength: cocoascript.CFStringRef;
declare const kCGPDFXOutputIntentSubtype: cocoascript.CFStringRef;
declare const kCGPDFXOutputConditionIdentifier: cocoascript.CFStringRef;
declare const kCGPDFXOutputCondition: cocoascript.CFStringRef;
declare const kCGPDFXRegistryName: cocoascript.CFStringRef;
declare const kCGPDFXInfo: cocoascript.CFStringRef;
declare const kCGPDFXDestinationOutputProfile: cocoascript.CFStringRef;
declare const CGAffineTransformIdentity: cocoascript.CGAffineTransform;
declare const kCGFontVariationAxisName: cocoascript.CFStringRef;
declare const kCGFontVariationAxisMinValue: cocoascript.CFStringRef;
declare const kCGFontVariationAxisMaxValue: cocoascript.CFStringRef;
declare const kCGFontVariationAxisDefaultValue: cocoascript.CFStringRef;
