declare namespace cocoascript {
  interface CGSize {
  }
}
declare namespace cocoascript {
  interface CGColorRef {
  }
}
declare namespace cocoascript {
  interface CGColorSpaceRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgfloat
  type CGFloat = number;
}
declare namespace cocoascript {
  interface CGRect {
  }
}
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceextendedgray
declare const kCGColorSpaceExtendedGray: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceextendedsrgb
declare const kCGColorSpaceExtendedSRGB: CFStringRef;
declare namespace cocoascript {
  interface CGImageRef {
  }
}
declare namespace cocoascript {
  interface CGPoint {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowlevelkey
  type CGWindowLevelKey = number;
}
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamycbcrmatrix
declare const kCGDisplayStreamYCbCrMatrix: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/1455530-cgdisplaystreamupdategetrects
declare const CGDisplayStreamUpdateGetRects: any;
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
  interface CGScreenUpdateMoveDelta {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgwindowlevel
  type CGWindowLevel = number;
}
declare namespace cocoascript {
  interface CGDisplayStreamRef {
  }
}
declare namespace cocoascript {
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
  interface CGDataProviderRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgimagealphainfo
  type CGImageAlphaInfo = number;
}
declare namespace cocoascript {
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
  interface CGVector {
  }
}
declare namespace cocoascript {
  interface CGAffineTransform {
  }
}
declare namespace cocoascript {
  interface CGColorConversionInfoRef {
  }
}
declare namespace cocoascript {
  interface CGFontRef {
  }
}
// doc://com.apple.documentation/documentation/coregraphics/kcgfontindexinvalid
declare const kCGFontIndexInvalid: CGFontIndex;
// doc://com.apple.documentation/documentation/coregraphics/cgsizezero
declare const CGSizeZero: CGSize;
// doc://com.apple.documentation/documentation/coregraphics/cgrectzero
declare const CGRectZero: CGRect;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextmediabox
declare const kCGPDFContextMediaBox: CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgblendmode
  type CGBlendMode = number;
}
// doc://com.apple.documentation/documentation/coregraphics/cgpointzero
declare const CGPointZero: CGPoint;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacegenericgraygamma2_2
declare const kCGColorSpaceGenericGrayGamma2_2: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacesrgb
declare const kCGColorSpaceSRGB: CFStringRef;
declare namespace cocoascript {
  interface CGMutablePathRef {
  }
}
declare namespace cocoascript {
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
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamsourcerect
declare const kCGDisplayStreamSourceRect: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamdestinationrect
declare const kCGDisplayStreamDestinationRect: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreampreserveaspectratio
declare const kCGDisplayStreamPreserveAspectRatio: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamcolorspace
declare const kCGDisplayStreamColorSpace: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamminimumframetime
declare const kCGDisplayStreamMinimumFrameTime: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamshowcursor
declare const kCGDisplayStreamShowCursor: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamqueuedepth
declare const kCGDisplayStreamQueueDepth: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamycbcrmatrix_itu_r_709_2
declare const kCGDisplayStreamYCbCrMatrix_ITU_R_709_2: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamycbcrmatrix_itu_r_601_4
declare const kCGDisplayStreamYCbCrMatrix_ITU_R_601_4: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplaystreamycbcrmatrix_smpte_240m_1995
declare const kCGDisplayStreamYCbCrMatrix_SMPTE_240M_1995: CFStringRef;
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
  type CGEventMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventsourcekeyboardtype
  type CGEventSourceKeyboardType = number;
}
declare namespace cocoascript {
  interface CGEventSourceRef {
  }
}
declare namespace cocoascript {
  interface CGEventTapInformation {
  }
}
declare namespace cocoascript {
  interface CGEventTapProxy {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgeventtimestamp
  type CGEventTimestamp = number;
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
  type CGEventFlags = number;
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
// doc://com.apple.documentation/documentation/coregraphics/1454575-cgimagegetdecode
declare const CGImageGetDecode: CGImageRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgfontindex
  type CGFontIndex = number;
}
// doc://com.apple.documentation/documentation/coregraphics/kcgglyphmax
declare const kCGGlyphMax: CGFontIndex;
// doc://com.apple.documentation/documentation/coregraphics/kcgfontindexmax
declare const kCGFontIndexMax: CGFontIndex;
// doc://com.apple.documentation/documentation/coregraphics/1455930-cgcolorgetcomponents
declare const CGColorGetComponents: CGColorRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgcolorspacemodel
  type CGColorSpaceModel = number;
}
// doc://com.apple.documentation/documentation/coregraphics/cgrectnull
declare const CGRectNull: CGRect;
declare namespace cocoascript {
  interface CGDataConsumerRef {
  }
}
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextcropbox
declare const kCGPDFContextCropBox: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextbleedbox
declare const kCGPDFContextBleedBox: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontexttrimbox
declare const kCGPDFContextTrimBox: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextartbox
declare const kCGPDFContextArtBox: CFStringRef;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cglinecap
  type CGLineCap = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cglinejoin
  type CGLineJoin = number;
}
declare namespace cocoascript {
  interface CGPDFPageRef {
  }
}
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacedisplayp3
declare const kCGColorSpaceDisplayP3: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacedisplayp3_hlg
declare const kCGColorSpaceDisplayP3_HLG: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacedisplayp3_pq_eotf
declare const kCGColorSpaceDisplayP3_PQ_EOTF: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceextendedlineardisplayp3
declare const kCGColorSpaceExtendedLinearDisplayP3: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacelinearsrgb
declare const kCGColorSpaceLinearSRGB: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceextendedlinearsrgb
declare const kCGColorSpaceExtendedLinearSRGB: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacelineargray
declare const kCGColorSpaceLinearGray: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceextendedlineargray
declare const kCGColorSpaceExtendedLinearGray: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacegenericrgblinear
declare const kCGColorSpaceGenericRGBLinear: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacegenericcmyk
declare const kCGColorSpaceGenericCMYK: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacegenericxyz
declare const kCGColorSpaceGenericXYZ: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacegenericlab
declare const kCGColorSpaceGenericLab: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceacescglinear
declare const kCGColorSpaceACESCGLinear: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceadobergb1998
declare const kCGColorSpaceAdobeRGB1998: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacedcip3
declare const kCGColorSpaceDCIP3: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceitur_709
declare const kCGColorSpaceITUR_709: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacerommrgb
declare const kCGColorSpaceROMMRGB: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceitur_2020
declare const kCGColorSpaceITUR_2020: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceitur_2020_hlg
declare const kCGColorSpaceITUR_2020_HLG: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceitur_2020_pq_eotf
declare const kCGColorSpaceITUR_2020_PQ_EOTF: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceextendedlinearitur_2020
declare const kCGColorSpaceExtendedLinearITUR_2020: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacegenericrgb
declare const kCGColorSpaceGenericRGB: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspacegenericgray
declare const kCGColorSpaceGenericGray: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/cgaffinetransformidentity
declare const CGAffineTransformIdentity: CGAffineTransform;
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
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorconversionblackpointcompensation
declare const kCGColorConversionBlackPointCompensation: CFStringRef;
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
  type CGDataConsumerPutBytesCallback = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataconsumerreleaseinfocallback
  type CGDataConsumerReleaseInfoCallback = void;
}
declare namespace cocoascript {
  interface CGDataConsumerCallbacks {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidergetbytepointercallback
  type CGDataProviderGetBytePointerCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidergetbytescallback
  type CGDataProviderGetBytesCallback = any;
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
  type CGDataProviderReleaseDataCallback = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgdataprovidergetbytesatpositioncallback
  type CGDataProviderGetBytesAtPositionCallback = any;
}
declare namespace cocoascript {
  interface CGDataProviderDirectCallbacks {
  }
}
declare namespace cocoascript {
  interface CGDataProviderSequentialCallbacks {
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
  interface CGFunctionRef {
  }
}
declare namespace cocoascript {
  interface CGFunctionCallbacks {
  }
}
declare namespace cocoascript {
  interface CGGradientRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cggradientdrawingoptions
  type CGGradientDrawingOptions = number;
}
declare namespace cocoascript {
  interface CGShadingRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpathapplierfunction
  type CGPathApplierFunction = cocoascript.CGPathElement;
}
declare namespace cocoascript {
  interface CGPathElement {
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
  interface CGPatternRef {
  }
}
declare namespace cocoascript {
  interface CGPatternCallbacks {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpatterntiling
  type CGPatternTiling = number;
}
declare namespace cocoascript {
  interface CGPDFDocumentRef {
  }
}
declare namespace cocoascript {
  interface CGPDFArrayRef {
  }
}
declare namespace cocoascript {
  interface CGPDFContentStreamRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfdictionaryapplierfunction
  type CGPDFDictionaryApplierFunction = void;
}
declare namespace cocoascript {
  interface CGPDFDictionaryRef {
  }
}
declare namespace cocoascript {
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
  interface CGPDFOperatorTableRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfbox
  type CGPDFBox = number;
}
declare namespace cocoascript {
  interface CGPDFScannerRef {
  }
}
declare namespace cocoascript {
  interface CGPDFStreamRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coregraphics/cgpdfdataformat
  type CGPDFDataFormat = number;
}
// doc://com.apple.documentation/documentation/coregraphics/1455978-cgpdfstringgetbyteptr
declare const CGPDFStringGetBytePtr: CGPDFStringRef;
declare namespace cocoascript {
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
  interface CGPSConverterRef {
  }
}
declare namespace cocoascript {
  interface CGPSConverterCallbacks {
  }
}
declare namespace cocoascript {
  interface CGDeviceColor {
  }
}
// doc://com.apple.documentation/documentation/coregraphics/kcgdisplayshowduplicatelowresolutionmodes
declare const kCGDisplayShowDuplicateLowResolutionModes: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowalpha
declare const kCGWindowAlpha: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowbackinglocationvideomemory
declare const kCGWindowBackingLocationVideoMemory: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowbounds
declare const kCGWindowBounds: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowisonscreen
declare const kCGWindowIsOnscreen: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowlayer
declare const kCGWindowLayer: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowmemoryusage
declare const kCGWindowMemoryUsage: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowname
declare const kCGWindowName: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindownumber
declare const kCGWindowNumber: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowownername
declare const kCGWindowOwnerName: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowownerpid
declare const kCGWindowOwnerPID: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowsharingstate
declare const kCGWindowSharingState: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowstoretype
declare const kCGWindowStoreType: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgwindowworkspace
declare const kCGWindowWorkspace: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceitur_2100_hlg
declare const kCGColorSpaceITUR_2100_HLG: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorspaceitur_2100_pq
declare const kCGColorSpaceITUR_2100_PQ: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextaccesspermissions
declare const kCGPDFContextAccessPermissions: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextcreatelinearizedpdf
declare const kCGPDFContextCreateLinearizedPDF: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextcreatepdfa
declare const kCGPDFContextCreatePDFA: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfoutlinechildren
declare const kCGPDFOutlineChildren: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfoutlinedestination
declare const kCGPDFOutlineDestination: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfoutlinedestinationrect
declare const kCGPDFOutlineDestinationRect: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfoutlinetitle
declare const kCGPDFOutlineTitle: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/3042409-cgpdftagtypegetname
declare const CGPDFTagTypeGetName: CGPDFTagType;
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
// doc://com.apple.documentation/documentation/coregraphics/cgrectinfinite
declare const CGRectInfinite: CGRect;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorwhite
declare const kCGColorWhite: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorblack
declare const kCGColorBlack: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgcolorclear
declare const kCGColorClear: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextauthor
declare const kCGPDFContextAuthor: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextcreator
declare const kCGPDFContextCreator: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontexttitle
declare const kCGPDFContextTitle: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextownerpassword
declare const kCGPDFContextOwnerPassword: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextuserpassword
declare const kCGPDFContextUserPassword: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextallowsprinting
declare const kCGPDFContextAllowsPrinting: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextallowscopying
declare const kCGPDFContextAllowsCopying: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextoutputintent
declare const kCGPDFContextOutputIntent: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextoutputintents
declare const kCGPDFContextOutputIntents: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextsubject
declare const kCGPDFContextSubject: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextkeywords
declare const kCGPDFContextKeywords: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfcontextencryptionkeylength
declare const kCGPDFContextEncryptionKeyLength: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfxoutputintentsubtype
declare const kCGPDFXOutputIntentSubtype: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfxoutputconditionidentifier
declare const kCGPDFXOutputConditionIdentifier: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfxoutputcondition
declare const kCGPDFXOutputCondition: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfxregistryname
declare const kCGPDFXRegistryName: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfxinfo
declare const kCGPDFXInfo: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgpdfxdestinationoutputprofile
declare const kCGPDFXDestinationOutputProfile: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgfontvariationaxisname
declare const kCGFontVariationAxisName: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgfontvariationaxisminvalue
declare const kCGFontVariationAxisMinValue: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgfontvariationaxismaxvalue
declare const kCGFontVariationAxisMaxValue: CFStringRef;
// doc://com.apple.documentation/documentation/coregraphics/kcgfontvariationaxisdefaultvalue
declare const kCGFontVariationAxisDefaultValue: CFStringRef;
