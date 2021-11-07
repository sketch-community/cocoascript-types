declare namespace cocoascript {
  interface CGColorRef {}
}
declare namespace cocoascript {
  interface CGSize {
    width: number;
    height: number;
  }
}
declare namespace cocoascript {
  interface CGColorSpaceRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgfloat
  type CGFloat = number;
}
declare namespace cocoascript {
  interface CGPoint {
    x: number;
    y: number;
  }
}
declare namespace cocoascript {
  interface CGRect {
    origin: CGPoint;
    size: CGSize;
  }
}
declare namespace cocoascript {
  interface CGImageRef {}
}
declare namespace cocoascript {
  interface CGColorConversionInfoRef {}
}
declare namespace cocoascript {
  interface CGFontRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwindowlevelkey
  type CGWindowLevelKey = number;
}
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamycbcrmatrix
declare const kCGDisplayStreamYCbCrMatrix: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/1455530-cgdisplaystreamupdategetrects
declare const CGDisplayStreamUpdateGetRects: any;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplayreconfigurationcallback
  type CGDisplayReconfigurationCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgscreenrefreshcallback
  type CGScreenRefreshCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgscreenupdatemovecallback
  type CGScreenUpdateMoveCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdirectdisplayid
  type CGDirectDisplayID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplayblendfraction
  type CGDisplayBlendFraction = number;
}
declare namespace cocoascript {
  interface CGDisplayConfigRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplaycount
  type CGDisplayCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplayerr
  type CGDisplayErr = cocoascript.CGError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplayfadeinterval
  type CGDisplayFadeInterval = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplayfadereservationtoken
  type CGDisplayFadeReservationToken = number;
}
declare namespace cocoascript {
  interface CGDisplayModeRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplayreservationinterval
  type CGDisplayReservationInterval = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cggammavalue
  type CGGammaValue = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgopengldisplaymask
  type CGOpenGLDisplayMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgrectcount
  type CGRectCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgrefreshrate
  type CGRefreshRate = number;
}
declare namespace cocoascript {
  interface CGScreenUpdateMoveDelta {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwindowlevel
  type CGWindowLevel = number;
}
declare namespace cocoascript {
  interface CGDisplayStreamRef {}
}
declare namespace cocoascript {
  interface CGDisplayStreamUpdateRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplaystreamframeavailablehandler
  type CGDisplayStreamFrameAvailableHandler = cocoascript.CGDisplayStreamUpdateRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgcaptureoptions
  type CGCaptureOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplaychangesummaryflags
  type CGDisplayChangeSummaryFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgconfigureoption
  type CGConfigureOption = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgscreenupdateoperation
  type CGScreenUpdateOperation = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplaystreamupdaterecttype
  type CGDisplayStreamUpdateRectType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdisplaystreamframestatus
  type CGDisplayStreamFrameStatus = number;
}
declare namespace cocoascript {
  interface CGEventRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgcolorrenderingintent
  type CGColorRenderingIntent = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgbitmapinfo
  type CGBitmapInfo = number;
}
declare namespace cocoascript {
  interface CGDataProviderRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgimagealphainfo
  type CGImageAlphaInfo = number;
}
declare namespace cocoascript {
  interface CGContextRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgglyph
  type CGGlyph = cocoascript.CGFontIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpathref
  type CGPathRef = cocoascript.CGPath;
}
declare namespace cocoascript {
  interface CGVector {}
}
declare namespace cocoascript {
  interface CGAffineTransform {}
}
// https://developer.apple.com/documentation/coregraphics/cgsizezero
declare const CGSizeZero: cocoascript.CGSize;
// https://developer.apple.com/documentation/coregraphics/cgrectzero
declare const CGRectZero: cocoascript.CGRect;
// https://developer.apple.com/documentation/coregraphics/kcgfontindexinvalid
declare const kCGFontIndexInvalid: cocoascript.CGFontIndex;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextmediabox
declare const kCGPDFContextMediaBox: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgblendmode
  type CGBlendMode = number;
}
// https://developer.apple.com/documentation/coregraphics/cgpointzero
declare const CGPointZero: cocoascript.CGPoint;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceextendedgray
declare const kCGColorSpaceExtendedGray: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceextendedsrgb
declare const kCGColorSpaceExtendedSRGB: cocoascript.CFStringRef;
declare namespace cocoascript {
  interface CGMutablePathRef {}
}
declare namespace cocoascript {
  interface CGLayerRef {}
}
// https://developer.apple.com/documentation/coregraphics/1455930-cgcolorgetcomponents
declare const CGColorGetComponents: cocoascript.CGColorRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgerror
  type CGError = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwindowid
  type CGWindowID = number;
}
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamsourcerect
declare const kCGDisplayStreamSourceRect: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamdestinationrect
declare const kCGDisplayStreamDestinationRect: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreampreserveaspectratio
declare const kCGDisplayStreamPreserveAspectRatio: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamcolorspace
declare const kCGDisplayStreamColorSpace: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamminimumframetime
declare const kCGDisplayStreamMinimumFrameTime: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamshowcursor
declare const kCGDisplayStreamShowCursor: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamqueuedepth
declare const kCGDisplayStreamQueueDepth: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamycbcrmatrix_itu_r_709_2
declare const kCGDisplayStreamYCbCrMatrix_ITU_R_709_2: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamycbcrmatrix_itu_r_601_4
declare const kCGDisplayStreamYCbCrMatrix_ITU_R_601_4: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgdisplaystreamycbcrmatrix_smpte_240m_1995
declare const kCGDisplayStreamYCbCrMatrix_SMPTE_240M_1995: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventtapcallback
  type CGEventTapCallBack = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgbuttoncount
  type CGButtonCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgcharcode
  type CGCharCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventmask
  type CGEventMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventsourcekeyboardtype
  type CGEventSourceKeyboardType = number;
}
declare namespace cocoascript {
  interface CGEventSourceRef {}
}
declare namespace cocoascript {
  interface CGEventTapInformation {}
}
declare namespace cocoascript {
  interface CGEventTapProxy {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventtimestamp
  type CGEventTimestamp = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgkeycode
  type CGKeyCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwheelcount
  type CGWheelCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventfield
  type CGEventField = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventfiltermask
  type CGEventFilterMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventflags
  type CGEventFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventsourcestateid
  type CGEventSourceStateID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventsuppressionstate
  type CGEventSuppressionState = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventtaplocation
  type CGEventTapLocation = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventtapoptions
  type CGEventTapOptions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventtapplacement
  type CGEventTapPlacement = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventtype
  type CGEventType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgmousebutton
  type CGMouseButton = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventmousesubtype
  type CGEventMouseSubtype = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgscrolleventunit
  type CGScrollEventUnit = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwindowlistoption
  type CGWindowListOption = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwindowimageoption
  type CGWindowImageOption = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwindowsharingtype
  type CGWindowSharingType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgwindowbackingtype
  type CGWindowBackingType = number;
}
// https://developer.apple.com/documentation/coregraphics/1454575-cgimagegetdecode
declare const CGImageGetDecode: cocoascript.CGImageRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgfontindex
  type CGFontIndex = number;
}
// https://developer.apple.com/documentation/coregraphics/kcgglyphmax
declare const kCGGlyphMax: cocoascript.CGFontIndex;
// https://developer.apple.com/documentation/coregraphics/kcgfontindexmax
declare const kCGFontIndexMax: cocoascript.CGFontIndex;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgrectedge
  type CGRectEdge = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgcolorspacemodel
  type CGColorSpaceModel = number;
}
// https://developer.apple.com/documentation/coregraphics/cgrectnull
declare const CGRectNull: cocoascript.CGRect;
declare namespace cocoascript {
  interface CGDataConsumerRef {}
}
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextcropbox
declare const kCGPDFContextCropBox: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextbleedbox
declare const kCGPDFContextBleedBox: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontexttrimbox
declare const kCGPDFContextTrimBox: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextartbox
declare const kCGPDFContextArtBox: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cglinecap
  type CGLineCap = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cglinejoin
  type CGLineJoin = number;
}
declare namespace cocoascript {
  interface CGPDFPageRef {}
}
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericgraygamma2_2
declare const kCGColorSpaceGenericGrayGamma2_2: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacesrgb
declare const kCGColorSpaceSRGB: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericrgb
declare const kCGColorSpaceGenericRGB: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/cgaffinetransformidentity
declare const CGAffineTransformIdentity: cocoascript.CGAffineTransform;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgbitmapcontextreleasedatacallback
  type CGBitmapContextReleaseDataCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgcolorconversioninfotransformtype
  type CGColorConversionInfoTransformType = number;
}
// https://developer.apple.com/documentation/coregraphics/kcgcolorconversionblackpointcompensation
declare const kCGColorConversionBlackPointCompensation: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cginterpolationquality
  type CGInterpolationQuality = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgtextdrawingmode
  type CGTextDrawingMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgtextencoding
  type CGTextEncoding = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataconsumerputbytescallback
  type CGDataConsumerPutBytesCallback = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataconsumerreleaseinfocallback
  type CGDataConsumerReleaseInfoCallback = void;
}
declare namespace cocoascript {
  interface CGDataConsumerCallbacks {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataprovidergetbytepointercallback
  type CGDataProviderGetBytePointerCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataprovidergetbytescallback
  type CGDataProviderGetBytesCallback = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataproviderreleaseinfocallback
  type CGDataProviderReleaseInfoCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataproviderrewindcallback
  type CGDataProviderRewindCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataproviderskipforwardcallback
  type CGDataProviderSkipForwardCallback = cocoascript.off_t;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataproviderreleasebytepointercallback
  type CGDataProviderReleaseBytePointerCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataproviderreleasedatacallback
  type CGDataProviderReleaseDataCallback = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgdataprovidergetbytesatpositioncallback
  type CGDataProviderGetBytesAtPositionCallback = any;
}
declare namespace cocoascript {
  interface CGDataProviderDirectCallbacks {}
}
declare namespace cocoascript {
  interface CGDataProviderSequentialCallbacks {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgfontpostscriptformat
  type CGFontPostScriptFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgfunctionevaluatecallback
  type CGFunctionEvaluateCallback = cocoascript.CGFloat;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgfunctionreleaseinfocallback
  type CGFunctionReleaseInfoCallback = void;
}
declare namespace cocoascript {
  interface CGFunctionRef {}
}
declare namespace cocoascript {
  interface CGFunctionCallbacks {}
}
declare namespace cocoascript {
  interface CGGradientRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cggradientdrawingoptions
  type CGGradientDrawingOptions = number;
}
declare namespace cocoascript {
  interface CGShadingRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpathapplierfunction
  type CGPathApplierFunction = cocoascript.CGPathElement;
}
declare namespace cocoascript {
  interface CGPathElement {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpathdrawingmode
  type CGPathDrawingMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpathelementtype
  type CGPathElementType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpatterndrawpatterncallback
  type CGPatternDrawPatternCallback = cocoascript.CGContextRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpatternreleaseinfocallback
  type CGPatternReleaseInfoCallback = void;
}
declare namespace cocoascript {
  interface CGPatternRef {}
}
declare namespace cocoascript {
  interface CGPatternCallbacks {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpatterntiling
  type CGPatternTiling = number;
}
declare namespace cocoascript {
  interface CGPDFDocumentRef {}
}
declare namespace cocoascript {
  interface CGPDFArrayRef {}
}
declare namespace cocoascript {
  interface CGPDFContentStreamRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfdictionaryapplierfunction
  type CGPDFDictionaryApplierFunction = void;
}
declare namespace cocoascript {
  interface CGPDFDictionaryRef {}
}
declare namespace cocoascript {
  interface CGPDFObjectRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfboolean
  type CGPDFBoolean = string;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfinteger
  type CGPDFInteger = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfreal
  type CGPDFReal = cocoascript.CGFloat;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfobjecttype
  type CGPDFObjectType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfoperatorcallback
  type CGPDFOperatorCallback = void;
}
declare namespace cocoascript {
  interface CGPDFOperatorTableRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfbox
  type CGPDFBox = number;
}
declare namespace cocoascript {
  interface CGPDFScannerRef {}
}
declare namespace cocoascript {
  interface CGPDFStreamRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfdataformat
  type CGPDFDataFormat = number;
}
// https://developer.apple.com/documentation/coregraphics/1455978-cgpdfstringgetbyteptr
declare const CGPDFStringGetBytePtr: cocoascript.CGPDFStringRef;
declare namespace cocoascript {
  interface CGPDFStringRef {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpsconverterbegindocumentcallback
  type CGPSConverterBeginDocumentCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpsconverterenddocumentcallback
  type CGPSConverterEndDocumentCallback = boolean;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpsconverterbeginpagecallback
  type CGPSConverterBeginPageCallback = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpsconverterendpagecallback
  type CGPSConverterEndPageCallback = cocoascript.CFDictionaryRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpsconverterprogresscallback
  type CGPSConverterProgressCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpsconvertermessagecallback
  type CGPSConverterMessageCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpsconverterreleaseinfocallback
  type CGPSConverterReleaseInfoCallback = void;
}
declare namespace cocoascript {
  interface CGPSConverterRef {}
}
declare namespace cocoascript {
  interface CGPSConverterCallbacks {}
}
declare namespace cocoascript {
  interface CGDeviceColor {}
}
declare namespace cocoascript {
  interface CGColorDataFormat {}
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cggesturephase
  type CGGesturePhase = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgglyphdeprecatedenum
  type CGGlyphDeprecatedEnum = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgimagebyteorderinfo
  type CGImageByteOrderInfo = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgmomentumscrollphase
  type CGMomentumScrollPhase = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgscrollphase
  type CGScrollPhase = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgimagepixelformatinfo
  type CGImagePixelFormatInfo = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfaccesspermissions
  type CGPDFAccessPermissions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdftagtype
  type CGPDFTagType = number;
}
// https://developer.apple.com/documentation/coregraphics/kcgdisplayshowduplicatelowresolutionmodes
declare const kCGDisplayShowDuplicateLowResolutionModes: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowalpha
declare const kCGWindowAlpha: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowbackinglocationvideomemory
declare const kCGWindowBackingLocationVideoMemory: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowbounds
declare const kCGWindowBounds: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowisonscreen
declare const kCGWindowIsOnscreen: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowlayer
declare const kCGWindowLayer: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowmemoryusage
declare const kCGWindowMemoryUsage: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowname
declare const kCGWindowName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindownumber
declare const kCGWindowNumber: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowownername
declare const kCGWindowOwnerName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowownerpid
declare const kCGWindowOwnerPID: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowsharingstate
declare const kCGWindowSharingState: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowstoretype
declare const kCGWindowStoreType: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgwindowworkspace
declare const kCGWindowWorkspace: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceextendedrange
declare const kCGColorSpaceExtendedRange: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextaccesspermissions
declare const kCGPDFContextAccessPermissions: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextcreatelinearizedpdf
declare const kCGPDFContextCreateLinearizedPDF: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextcreatepdfa
declare const kCGPDFContextCreatePDFA: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfoutlinechildren
declare const kCGPDFOutlineChildren: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfoutlinedestination
declare const kCGPDFOutlineDestination: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfoutlinedestinationrect
declare const kCGPDFOutlineDestinationRect: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfoutlinetitle
declare const kCGPDFOutlineTitle: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/3042409-cgpdftagtypegetname
declare const CGPDFTagTypeGetName: cocoascript.CGPDFTagType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgeventerr
  type CGEventErr = cocoascript.CGError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgerrorcallback
  type CGErrorCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfarrayapplierblock
  type CGPDFArrayApplierBlock = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdfdictionaryapplierblock
  type CGPDFDictionaryApplierBlock = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpdftagproperty
  type CGPDFTagProperty = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coregraphics/cgpathapplyblock
  type CGPathApplyBlock = cocoascript.CGPathElement;
}
// https://developer.apple.com/documentation/coregraphics/kcgcolorwhite
declare const kCGColorWhite: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorblack
declare const kCGColorBlack: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorclear
declare const kCGColorClear: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/cgrectinfinite
declare const CGRectInfinite: cocoascript.CGRect;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacedisplayp3
declare const kCGColorSpaceDisplayP3: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacedisplayp3_hlg
declare const kCGColorSpaceDisplayP3_HLG: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacedisplayp3_pq_eotf
declare const kCGColorSpaceDisplayP3_PQ_EOTF: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceextendedlineardisplayp3
declare const kCGColorSpaceExtendedLinearDisplayP3: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacelinearsrgb
declare const kCGColorSpaceLinearSRGB: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceextendedlinearsrgb
declare const kCGColorSpaceExtendedLinearSRGB: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacelineargray
declare const kCGColorSpaceLinearGray: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceextendedlineargray
declare const kCGColorSpaceExtendedLinearGray: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericrgblinear
declare const kCGColorSpaceGenericRGBLinear: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericcmyk
declare const kCGColorSpaceGenericCMYK: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericxyz
declare const kCGColorSpaceGenericXYZ: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericlab
declare const kCGColorSpaceGenericLab: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceacescglinear
declare const kCGColorSpaceACESCGLinear: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceadobergb1998
declare const kCGColorSpaceAdobeRGB1998: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacedcip3
declare const kCGColorSpaceDCIP3: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceitur_709
declare const kCGColorSpaceITUR_709: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacerommrgb
declare const kCGColorSpaceROMMRGB: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceitur_2020
declare const kCGColorSpaceITUR_2020: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceitur_2020_hlg
declare const kCGColorSpaceITUR_2020_HLG: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceitur_2020_pq_eotf
declare const kCGColorSpaceITUR_2020_PQ_EOTF: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspaceextendedlinearitur_2020
declare const kCGColorSpaceExtendedLinearITUR_2020: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgcolorspacegenericgray
declare const kCGColorSpaceGenericGray: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextauthor
declare const kCGPDFContextAuthor: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextcreator
declare const kCGPDFContextCreator: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontexttitle
declare const kCGPDFContextTitle: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextownerpassword
declare const kCGPDFContextOwnerPassword: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextuserpassword
declare const kCGPDFContextUserPassword: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextallowsprinting
declare const kCGPDFContextAllowsPrinting: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextallowscopying
declare const kCGPDFContextAllowsCopying: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextoutputintent
declare const kCGPDFContextOutputIntent: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextoutputintents
declare const kCGPDFContextOutputIntents: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextsubject
declare const kCGPDFContextSubject: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextkeywords
declare const kCGPDFContextKeywords: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfcontextencryptionkeylength
declare const kCGPDFContextEncryptionKeyLength: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfxoutputintentsubtype
declare const kCGPDFXOutputIntentSubtype: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfxoutputconditionidentifier
declare const kCGPDFXOutputConditionIdentifier: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfxoutputcondition
declare const kCGPDFXOutputCondition: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfxregistryname
declare const kCGPDFXRegistryName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfxinfo
declare const kCGPDFXInfo: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgpdfxdestinationoutputprofile
declare const kCGPDFXDestinationOutputProfile: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgfontvariationaxisname
declare const kCGFontVariationAxisName: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgfontvariationaxisminvalue
declare const kCGFontVariationAxisMinValue: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgfontvariationaxismaxvalue
declare const kCGFontVariationAxisMaxValue: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/coregraphics/kcgfontvariationaxisdefaultvalue
declare const kCGFontVariationAxisDefaultValue: cocoascript.CFStringRef;
