declare namespace cocoascript {
  /**
   * A representation of an image to be processed or produced by Core Image filters.
   * doc://com.apple.documentation/documentation/coreimage/ciimage
   */
  interface CIImage extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437947-initwithcolor
    initWithColor(color: cocoascript.CIColor):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437857-initwithbitmapdata
    initWithBitmapData_bytesPerRow_size_format_colorSpace(data: cocoascript.NSData, bytesPerRow: cocoascript.size_t, size: cocoascript.CGSize, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437986-initwithcgimage
    initWithCGImage(image: cocoascript.CGImageRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437764-initwithcgimage
    initWithCGImage_options(image: cocoascript.CGImageRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1535335-initwithbitmapimagerep
    initWithBitmapImageRep(bitmapImageRep: cocoascript.NSBitmapImageRep):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1624119-initwithimage
    initWithImage(image: cocoascript.UIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1624098-initwithimage
    initWithImage_options(image: cocoascript.UIImage, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438065-initwithcglayer
    initWithCGLayer(layer: cocoascript.CGLayerRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437687-initwithcglayer
    initWithCGLayer_options(layer: cocoascript.CGLayerRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437908-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437867-initwithcontentsofurl
    initWithContentsOfURL_options(url: cocoascript.NSURL, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438012-initwithcvimagebuffer
    initWithCVImageBuffer(imageBuffer: cocoascript.CVImageBufferRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437617-initwithcvimagebuffer
    initWithCVImageBuffer_options(imageBuffer: cocoascript.CVImageBufferRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438072-initwithcvpixelbuffer
    initWithCVPixelBuffer(pixelBuffer: cocoascript.CVPixelBufferRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438209-initwithcvpixelbuffer
    initWithCVPixelBuffer_options(pixelBuffer: cocoascript.CVPixelBufferRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437925-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438032-initwithdata
    initWithData_options(data: cocoascript.NSData, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437868-initwithimageprovider
    initWithImageProvider_size__format_colorSpace_options(p: cocoascript.CIImage, width: cocoascript.size_t, height: cocoascript.size_t, f: cocoascript.CIFormat, cs: cocoascript.CGColorSpaceRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438015-initwithtexture
    initWithTexture_size_flipped_colorSpace(name: number, size: cocoascript.CGSize, flipped: cocoascript.BOOL, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437880-initwithtexture
    initWithTexture_size_flipped_options(name: number, size: cocoascript.CGSize, flipped: cocoascript.BOOL, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437890-initwithmtltexture
    initWithMTLTexture_options(texture: cocoascript.MTLTexture, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438030-initwithiosurface
    initWithIOSurface(surface: cocoascript.IOSurfaceRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438181-initwithiosurface
    initWithIOSurface_options(surface: cocoascript.IOSurfaceRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437670-initwithiosurface
    initWithIOSurface_plane_format_options(surface: cocoascript.IOSurfaceRef, plane: cocoascript.size_t, format: cocoascript.CIFormat, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437589-imagebyapplyingfilter
    imageByApplyingFilter_withInputParameters(filterName: cocoascript.NSString, params: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2915368-imagebyapplyingfilter
    imageByApplyingFilter(filterName: cocoascript.NSString):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438203-imagebyapplyingtransform
    imageByApplyingTransform(matrix: cocoascript.CGAffineTransform):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437833-imagebycroppingtorect
    imageByCroppingToRect(rect: cocoascript.CGRect):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438223-imagebyapplyingorientation
    imageByApplyingOrientation(orientation: number):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437628-imagebyclampingtoextent
    imageByClampingToExtent():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645893-imagebyclampingtorect
    imageByClampingToRect(rect: cocoascript.CGRect):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437837-imagebycompositingoverimage
    imageByCompositingOverImage(dest: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645896-imagebycolormatchingcolorspaceto
    imageByColorMatchingColorSpaceToWorkingSpace(colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645898-imagebycolormatchingworkingspace
    imageByColorMatchingWorkingSpaceToColorSpace(colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645894-imagebypremultiplyingalpha
    imageByPremultiplyingAlpha():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645892-imagebyunpremultiplyingalpha
    imageByUnpremultiplyingAlpha():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645891-imagebysettingalphaoneinextent
    imageBySettingAlphaOneInExtent(extent: cocoascript.CGRect):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645897-imagebyapplyinggaussianblurwiths
    imageByApplyingGaussianBlurWithSigma(sigma: number):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645895-imagebysettingproperties
    imageBySettingProperties(properties: cocoascript.NSDictionary):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2966521-imagebyinsertingintermediate
    imageByInsertingIntermediate():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2966522-imagebyinsertingintermediate
    imageByInsertingIntermediate(cache: cocoascript.BOOL):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437804-definition
    definition(): cocoascript.CIFilterShape;
    setDefinition(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437996-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437733-properties
    properties(): cocoascript.id;
    setProperties(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438195-url
    url(): cocoascript.NSURL;
    setUrl(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437750-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437930-imagetransformfororientation
    imageTransformForOrientation(orientation: number):cocoascript.CGAffineTransform;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1534432-drawatpoint
    drawAtPoint_fromRect_operation_fraction(point: cocoascript.NSPoint, fromRect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation, delta: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1534407-drawinrect
    drawInRect_fromRect_operation_fraction(rect: cocoascript.NSRect, fromRect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation, delta: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1645889-autoadjustmentfilters
    autoAdjustmentFilters():cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437792-autoadjustmentfilterswithoptions
    autoAdjustmentFiltersWithOptions(options: cocoascript.CIImage):cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437994-regionofinterestforimage
    regionOfInterestForImage_inRect(image: cocoascript.CIImage, rect: cocoascript.CGRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2919727-imagebyapplyingcgorientation
    imageByApplyingCGOrientation(orientation: cocoascript.CGImagePropertyOrientation):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2919726-imagetransformforcgorientation
    imageTransformForCGOrientation(orientation: cocoascript.CGImagePropertyOrientation):cocoascript.CGAffineTransform;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2867429-imagebysamplingnearest
    imageBySamplingNearest():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2867346-imagebysamplinglinear
    imageBySamplingLinear():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1687603-cgimage
    CGImage(): cocoascript.CGImageRef;
    setCGImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1687604-pixelbuffer
    pixelBuffer(): cocoascript.CVPixelBufferRef;
    setPixelBuffer(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2902251-depthdata
    depthData(): cocoascript.AVDepthData;
    setDepthData(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2976440-portraiteffectsmatte
    portraitEffectsMatte(): cocoascript.AVPortraitEffectsMatte;
    setPortraitEffectsMatte(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3152399-initwithcgimagesource
    initWithCGImageSource_index_options(source: cocoascript.CGImageSourceRef, index: cocoascript.size_t, dict: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2998421-initwithdepthdata
    initWithDepthData(data: cocoascript.AVDepthData):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2998422-initwithdepthdata
    initWithDepthData_options(data: cocoascript.AVDepthData, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2998423-initwithportaiteffectsmatte
    initWithPortaitEffectsMatte(matte: cocoascript.AVPortraitEffectsMatte):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/2998424-initwithportaiteffectsmatte
    initWithPortaitEffectsMatte_options(matte: cocoascript.AVPortraitEffectsMatte, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3242779-initwithsemanticsegmentationmatt
    initWithSemanticSegmentationMatte(matte: cocoascript.AVSemanticSegmentationMatte):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3242780-initwithsemanticsegmentationmatt
    initWithSemanticSegmentationMatte_options(matte: cocoascript.AVSemanticSegmentationMatte, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3242781-semanticsegmentationmatte
    semanticSegmentationMatte(): cocoascript.AVSemanticSegmentationMatte;
    setSemanticSegmentationMatte(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074421-blackimage
    blackImage(): cocoascript.CIImage;
    setBlackImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074422-blueimage
    blueImage(): cocoascript.CIImage;
    setBlueImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074423-clearimage
    clearImage(): cocoascript.CIImage;
    setClearImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074424-cyanimage
    cyanImage(): cocoascript.CIImage;
    setCyanImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074425-grayimage
    grayImage(): cocoascript.CIImage;
    setGrayImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074426-greenimage
    greenImage(): cocoascript.CIImage;
    setGreenImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074427-magentaimage
    magentaImage(): cocoascript.CIImage;
    setMagentaImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074428-redimage
    redImage(): cocoascript.CIImage;
    setRedImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074429-whiteimage
    whiteImage(): cocoascript.CIImage;
    setWhiteImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3074430-yellowimage
    yellowImage(): cocoascript.CIImage;
    setYellowImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/3334939-imagebyapplyingtransform
    imageByApplyingTransform_highQualityDownsample(matrix: cocoascript.CGAffineTransform, highQualityDownsample: cocoascript.BOOL):cocoascript.CIImage;
    //
    alloc():cocoascript.CIImage;
    //
    init():cocoascript.CIImage;
  }
}

declare const CIImage: cocoascript.CIImage;
