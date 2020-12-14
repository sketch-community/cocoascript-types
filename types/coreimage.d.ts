declare namespace cocoascript {
  /**
   * The component values defining a color in a specific color space.
   * doc://com.apple.documentation/documentation/coreimage/cicolor
   */
  interface CIColor extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1437821-initwithcgcolor
    initWithCGColor(c: cocoascript.CGColorRef):cocoascript.CIColor;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1528762-initwithcolor
    initWithColor(color: cocoascript.UIColor):cocoascript.CIColor;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1502102-initwithred
    initWithRed_green_blue(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat):cocoascript.CIColor;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1438084-initwithred
    initWithRed_green_blue_alpha(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat, a: cocoascript.CGFloat):cocoascript.CIColor;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643576-initwithred
    initWithRed_green_blue_colorSpace(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIColor;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643572-initwithred
    initWithRed_green_blue_alpha_colorSpace(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat, a: cocoascript.CGFloat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIColor;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1437917-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1437862-components
    components(): cocoascript.CGFloat;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1438151-numberofcomponents
    numberOfComponents(): any;
    setNumberOfComponents(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1437969-red
    red(): cocoascript.CGFloat;
    setRed(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1437607-green
    green(): cocoascript.CGFloat;
    setGreen(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1438033-blue
    blue(): cocoascript.CGFloat;
    setBlue(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1437981-alpha
    alpha(): cocoascript.CGFloat;
    setAlpha(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1437910-stringrepresentation
    stringRepresentation(): cocoascript.NSString;
    setStringRepresentation(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643578-blackcolor
    blackColor(): cocoascript.CIColor;
    setBlackColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643569-bluecolor
    blueColor(): cocoascript.CIColor;
    setBlueColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643577-clearcolor
    clearColor(): cocoascript.CIColor;
    setClearColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643581-cyancolor
    cyanColor(): cocoascript.CIColor;
    setCyanColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643573-graycolor
    grayColor(): cocoascript.CIColor;
    setGrayColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643580-greencolor
    greenColor(): cocoascript.CIColor;
    setGreenColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643574-magentacolor
    magentaColor(): cocoascript.CIColor;
    setMagentaColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643570-redcolor
    redColor(): cocoascript.CIColor;
    setRedColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643571-whitecolor
    whiteColor(): cocoascript.CIColor;
    setWhiteColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolor/1643582-yellowcolor
    yellowColor(): cocoascript.CIColor;
    setYellowColor(): void;
    //
    alloc():cocoascript.CIColor;
    //
    init():cocoascript.CIColor;
  }
}

declare const CIColor: cocoascript.CIColor;
declare namespace cocoascript {
  /**
   * A representation of an image to be processed or produced by Core Image filters.
   * doc://com.apple.documentation/documentation/coreimage/ciimage
   */
  interface CIImage extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437947-initwithcolor
    initWithColor(color: cocoascript.CIColor):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437857-initwithbitmapdata
    initWithBitmapData_bytesPerRow_size_format_colorSpace(data: cocoascript.NSData, bytesPerRow: any, size: cocoascript.CGSize, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
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
    initWithImageProvider_size__format_colorSpace_options(p: cocoascript.CIImage, width: any, height: any, f: cocoascript.CIFormat, cs: cocoascript.CGColorSpaceRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438015-initwithtexture
    initWithTexture_size_flipped_colorSpace(name: number, size: cocoascript.CGSize, flipped: cocoascript.BOOL, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437880-initwithtexture
    initWithTexture_size_flipped_options(name: number, size: cocoascript.CGSize, flipped: cocoascript.BOOL, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437890-initwithmtltexture
    initWithMTLTexture_options(texture: any, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438030-initwithiosurface
    initWithIOSurface(surface: cocoascript.IOSurfaceRef):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1438181-initwithiosurface
    initWithIOSurface_options(surface: cocoascript.IOSurfaceRef, options: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimage/1437670-initwithiosurface
    initWithIOSurface_plane_format_options(surface: cocoascript.IOSurfaceRef, plane: any, format: cocoascript.CIFormat, options: cocoascript.CIImage):cocoascript.CIImage;
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
    initWithCGImageSource_index_options(source: cocoascript.CGImageSourceRef, index: any, dict: cocoascript.CIImage):cocoascript.CIImage;
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
declare namespace cocoascript {
  /**
   * An object that retrieves pixel samples for processing by a filter kernel.
   * doc://com.apple.documentation/documentation/coreimage/cisampler
   */
  interface CISampler extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1438117-initwithimage
    initWithImage(im: cocoascript.CIImage):cocoascript.CISampler;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1555077-initwithimage
    initWithImage_keysAndValues(im: cocoascript.CIImage, key0: cocoascript.CISampler):cocoascript.CISampler;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1437963-initwithimage
    initWithImage_options(im: cocoascript.CIImage, dict: cocoascript.NSDictionary):cocoascript.CISampler;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1437877-definition
    definition(): cocoascript.CIFilterShape;
    setDefinition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1437872-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    //
    alloc():cocoascript.CISampler;
    //
    init():cocoascript.CISampler;
  }
}

declare const CISampler: cocoascript.CISampler;
declare namespace cocoascript {
  /**
   * An image processor that produces an image by manipulating one or more input images or by generating new image data.
   * doc://com.apple.documentation/documentation/coreimage/cifilter
   */
  interface CIFilter extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1437997-setname
    name():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438276-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1437661-attributes
    attributes(): cocoascript.id;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438013-inputkeys
    inputKeys(): cocoascript.NSString;
    setInputKeys(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438122-outputkeys
    outputKeys(): cocoascript.NSString;
    setOutputKeys(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438169-outputimage
    outputImage(): cocoascript.CIImage;
    setOutputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1437902-setdefaults
    setDefaults():void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438077-apply
    apply_arguments_options(k: cocoascript.CIKernel, args: cocoascript.NSArray, dict: cocoascript.CIFilter):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1562058-apply
    apply(k: cocoascript.CIKernel):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1427521-viewforuiconfiguration
    viewForUIConfiguration_excludedKeys(inUIConfiguration: cocoascript.NSDictionary, inKeys: cocoascript.NSArray):cocoascript.IKFilterUIView;
    //
    alloc():cocoascript.CIFilter;
    //
    init():cocoascript.CIFilter;
  }
}

declare const CIFilter: cocoascript.CIFilter;
declare namespace cocoascript {
  /**
   * A description of the bounding shape of a filter and the domain of definition for a filter operation.
   * doc://com.apple.documentation/documentation/coreimage/cifiltershape
   */
  interface CIFilterShape extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437921-initwithrect
    initWithRect(r: cocoascript.CGRect):cocoascript.CIFilterShape;
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1438022-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437987-insetbyx
    insetByX_Y(dx: number, dy: number):cocoascript.CIFilterShape;
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437881-intersectwith
    intersectWith(s2: cocoascript.CIFilterShape):cocoascript.CIFilterShape;
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437806-intersectwithrect
    intersectWithRect(r: cocoascript.CGRect):cocoascript.CIFilterShape;
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437808-transformby
    transformBy_interior(m: cocoascript.CGAffineTransform, flag: cocoascript.BOOL):cocoascript.CIFilterShape;
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1438227-unionwith
    unionWith(s2: cocoascript.CIFilterShape):cocoascript.CIFilterShape;
    // doc://com.apple.documentation/documentation/coreimage/cifiltershape/1437601-unionwithrect
    unionWithRect(r: cocoascript.CGRect):cocoascript.CIFilterShape;
    //
    alloc():cocoascript.CIFilterShape;
    //
    init():cocoascript.CIFilterShape;
  }
}

declare const CIFilterShape: cocoascript.CIFilterShape;
declare namespace cocoascript {
  /**
   * A container for coordinate values, direction vectors, matrices, and other non-scalar values, typically used in Core Image for filter parameters.
   * doc://com.apple.documentation/documentation/coreimage/civector
   */
  interface CIVector extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/civector/1437849-initwithvalues
    initWithValues_count(values: cocoascript.CGFloat, count: any):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437657-initwithx
    initWithX(x: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437865-initwithx
    initWithX_Y(x: cocoascript.CGFloat, y: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438056-initwithx
    initWithX_Y_Z(x: cocoascript.CGFloat, y: cocoascript.CGFloat, z: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438088-initwithx
    initWithX_Y_Z_W(x: cocoascript.CGFloat, y: cocoascript.CGFloat, z: cocoascript.CGFloat, w: cocoascript.CGFloat):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437938-initwithstring
    initWithString(representation: cocoascript.NSString):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438102-initwithcgaffinetransform
    initWithCGAffineTransform(r: cocoascript.CGAffineTransform):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438133-initwithcgpoint
    initWithCGPoint(p: cocoascript.CGPoint):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437644-initwithcgrect
    initWithCGRect(r: cocoascript.CGRect):cocoascript.CIVector;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438207-valueatindex
    valueAtIndex(index: any):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438197-count
    count(): any;
    setCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437738-x
    X(): cocoascript.CGFloat;
    setX(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437843-y
    Y(): cocoascript.CGFloat;
    setY(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437627-z
    Z(): cocoascript.CGFloat;
    setZ(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438058-w
    W(): cocoascript.CGFloat;
    setW(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437752-stringrepresentation
    stringRepresentation(): cocoascript.NSString;
    setStringRepresentation(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438249-cgaffinetransformvalue
    CGAffineTransformValue(): cocoascript.CGAffineTransform;
    setCGAffineTransformValue(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1437672-cgpointvalue
    CGPointValue(): cocoascript.CGPoint;
    setCGPointValue(): void;
    // doc://com.apple.documentation/documentation/coreimage/civector/1438108-cgrectvalue
    CGRectValue(): cocoascript.CGRect;
    setCGRectValue(): void;
    //
    alloc():cocoascript.CIVector;
    //
    init():cocoascript.CIVector;
  }
}

declare const CIVector: cocoascript.CIVector;
declare namespace cocoascript {
  /**
   * Information about a Quick Response code (a kind of 2D barcode) detected in a still or video image.
   * doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature
   */
  interface CIQRCodeFeature extends CIFeature {
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1438153-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1438035-messagestring
    messageString(): cocoascript.NSString;
    setMessageString(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/2875553-symboldescriptor
    symbolDescriptor(): cocoascript.CIQRCodeDescriptor;
    setSymbolDescriptor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1437985-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1438245-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1437780-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodefeature/1437896-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
    //
    alloc():cocoascript.CIQRCodeFeature;
    //
    init():cocoascript.CIQRCodeFeature;
  }
}

declare const CIQRCodeFeature: cocoascript.CIQRCodeFeature;
declare namespace cocoascript {
  /**
   * An abstract base class that represents a machine readable code's attributes.
   * doc://com.apple.documentation/documentation/coreimage/cibarcodedescriptor
   */
  interface CIBarcodeDescriptor extends NSObject {
    //
    alloc():cocoascript.CIBarcodeDescriptor;
    //
    init():cocoascript.CIBarcodeDescriptor;
  }
}

declare const CIBarcodeDescriptor: cocoascript.CIBarcodeDescriptor;
declare namespace cocoascript {
  /**
   * An object that creates and configures chains of individual image filters.
   * doc://com.apple.documentation/documentation/coreimage/cifiltergenerator
   */
  interface CIFilterGenerator extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437742-initwithcontentsofurl
    initWithContentsOfURL(aURL: cocoascript.NSURL):cocoascript.CIFilterGenerator;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438159-connectobject
    connectObject_withKey_toObject_withKey(sourceObject: cocoascript.CIFilterGenerator, sourceKey: cocoascript.NSString, targetObject: cocoascript.CIFilterGenerator, targetKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438075-disconnectobject
    disconnectObject_withKey_toObject_withKey(sourceObject: cocoascript.CIFilterGenerator, sourceKey: cocoascript.NSString, targetObject: cocoascript.CIFilterGenerator, targetKey: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437955-exportedkeys
    exportedKeys(): cocoascript.NSDictionary;
    setExportedKeys(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438155-exportkey
    exportKey_fromObject_withName(key: cocoascript.NSString, targetObject: cocoascript.CIFilterGenerator, exportedKeyName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438191-removeexportedkey
    removeExportedKey(exportedKeyName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438069-setattributes
    setAttributes_forExportedKey(attributes: cocoascript.NSDictionary, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437855-classattributes
    classAttributes(): cocoascript.NSDictionary;
    setClassAttributes(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438179-writetourl
    writeToURL_atomically(aURL: cocoascript.NSURL, flag: cocoascript.BOOL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1437891-registerfiltername
    registerFilterName(name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coreimage/cifiltergenerator/1438044-filter
    filter():cocoascript.CIFilter;
    //
    alloc():cocoascript.CIFilterGenerator;
    //
    init():cocoascript.CIFilterGenerator;
  }
}

declare const CIFilterGenerator: cocoascript.CIFilterGenerator;
declare namespace cocoascript {
  /**
   * An evaluation context for rendering image processing results and performing image analysis.
   * doc://com.apple.documentation/documentation/coreimage/cicontext
   */
  interface CIContext extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1642212-init
    init():cocoascript.CIContext;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437784-createcgimage
    createCGImage_fromRect(image: cocoascript.CIImage, fromRect: cocoascript.CGRect):cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437978-createcgimage
    createCGImage_fromRect_format_colorSpace(image: cocoascript.CIImage, fromRect: cocoascript.CGRect, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1642211-createcgimage
    createCGImage_fromRect_format_colorSpace_deferred(image: cocoascript.CIImage, fromRect: cocoascript.CGRect, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, deferred: cocoascript.BOOL):cocoascript.CGImageRef;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1438267-createcglayerwithsize
    createCGLayerWithSize_info(size: cocoascript.CGSize, info: cocoascript.CFDictionaryRef):cocoascript.CGLayerRef;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437897-render
    render_toBitmap_rowBytes_bounds_format_colorSpace(image: cocoascript.CIImage, data: void, rowBytes: cocoascript.ptrdiff_t, bounds: cocoascript.CGRect, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef):void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437853-render
    render_toCVPixelBuffer(image: cocoascript.CIImage, buffer: cocoascript.CVPixelBufferRef):void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437835-render
    render_toCVPixelBuffer_bounds_colorSpace(image: cocoascript.CIImage, buffer: cocoascript.CVPixelBufferRef, bounds: cocoascript.CGRect, colorSpace: cocoascript.CGColorSpaceRef):void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437778-render
    render_toIOSurface_bounds_colorSpace(image: cocoascript.CIImage, surface: cocoascript.IOSurfaceRef, bounds: cocoascript.CGRect, colorSpace: cocoascript.CGColorSpaceRef):void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1438026-render
    render_toMTLTexture_commandBuffer_bounds_colorSpace(image: cocoascript.CIImage, texture: any, commandBuffer: any, bounds: cocoascript.CGRect, colorSpace: cocoascript.CGColorSpaceRef):void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1473521-drawimage
    drawImage_atPoint_fromRect(image: cocoascript.CIImage, atPoint: cocoascript.CGPoint, fromRect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437786-drawimage
    drawImage_inRect_fromRect(image: cocoascript.CIImage, inRect: cocoascript.CGRect, fromRect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1620425-inputimagemaximumsize
    inputImageMaximumSize():cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1620335-outputimagemaximumsize
    outputImageMaximumSize():cocoascript.CGSize;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437790-clearcaches
    clearCaches():void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1437967-reclaimresources
    reclaimResources():void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1438061-workingcolorspace
    workingColorSpace(): cocoascript.CGColorSpaceRef;
    setWorkingColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1642215-workingformat
    workingFormat(): cocoascript.CIFormat;
    setWorkingFormat(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1642220-tiffrepresentationofimage
    TIFFRepresentationOfImage_format_colorSpace_options(image: cocoascript.CIImage, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1642214-jpegrepresentationofimage
    JPEGRepresentationOfImage_colorSpace_options(image: cocoascript.CIImage, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2866196-pngrepresentationofimage
    PNGRepresentationOfImage_format_colorSpace_options(image: cocoascript.CIImage, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2902269-heifrepresentationofimage
    HEIFRepresentationOfImage_format_colorSpace_options(image: cocoascript.CIImage, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1642213-writetiffrepresentationofimage
    writeTIFFRepresentationOfImage_toURL_format_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/1642218-writejpegrepresentationofimage
    writeJPEGRepresentationOfImage_toURL_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2866197-writepngrepresentationofimage
    writePNGRepresentationOfImage_toURL_format_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2902266-writeheifrepresentationofimage
    writeHEIFRepresentationOfImage_toURL_format_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2875428-preparerender
    prepareRender_fromRect_toDestination_atPoint_error(image: cocoascript.CIImage, fromRect: cocoascript.CGRect, destination: cocoascript.CIRenderDestination, atPoint: cocoascript.CGPoint, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2875450-starttasktoclear
    startTaskToClear_error(destination: cocoascript.CIRenderDestination, error: cocoascript.NSError):cocoascript.CIRenderTask;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2875448-starttasktorender
    startTaskToRender_fromRect_toDestination_atPoint_error(image: cocoascript.CIImage, fromRect: cocoascript.CGRect, destination: cocoascript.CIRenderDestination, atPoint: cocoascript.CGPoint, error: cocoascript.NSError):cocoascript.CIRenderTask;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/2875429-starttasktorender
    startTaskToRender_toDestination_error(image: cocoascript.CIImage, destination: cocoascript.CIRenderDestination, error: cocoascript.NSError):cocoascript.CIRenderTask;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/3600105-depthblureffectfilterforimage
    depthBlurEffectFilterForImage_disparityImage_portraitEffectsMatte_hairSemanticSegmentation_glassesMatte_gainMap_orientation_options(image: cocoascript.CIImage, disparityImage: cocoascript.CIImage, portraitEffectsMatte: cocoascript.CIImage, hairSemanticSegmentation: cocoascript.CIImage, glassesMatte: cocoascript.CIImage, gainMap: cocoascript.CIImage, orientation: cocoascript.CGImagePropertyOrientation, options: cocoascript.NSDictionary):cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/3228045-depthblureffectfilterforimage
    depthBlurEffectFilterForImage_disparityImage_portraitEffectsMatte_hairSemanticSegmentation_orientation_options(image: cocoascript.CIImage, disparityImage: cocoascript.CIImage, portraitEffectsMatte: cocoascript.CIImage, hairSemanticSegmentation: cocoascript.CIImage, orientation: cocoascript.CGImagePropertyOrientation, options: cocoascript.NSDictionary):cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/3019315-depthblureffectfilterforimage
    depthBlurEffectFilterForImage_disparityImage_portraitEffectsMatte_orientation_options(image: cocoascript.CIImage, disparityImage: cocoascript.CIImage, portraitEffectsMatte: cocoascript.CIImage, orientation: cocoascript.CGImagePropertyOrientation, options: cocoascript.NSDictionary):cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/3020629-depthblureffectfilterforimagedat
    depthBlurEffectFilterForImageData_options(data: cocoascript.NSData, options: cocoascript.NSDictionary):cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/coreimage/cicontext/3019316-depthblureffectfilterforimageurl
    depthBlurEffectFilterForImageURL_options(url: cocoascript.NSURL, options: cocoascript.NSDictionary):cocoascript.CIFilter;
    //
    alloc():cocoascript.CIContext;
    //
    init():cocoascript.CIContext;
  }
}

declare const CIContext: cocoascript.CIContext;
// doc://com.apple.documentation/documentation/coreimage/kciimageprovidertilesize
declare const kCIImageProviderTileSize: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageprovideruserinfo
declare const kCIImageProviderUserInfo: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagecolorspace
declare const kCIImageColorSpace: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageproperties
declare const kCIImageProperties: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageapplyorientationproperty
declare const kCIImageApplyOrientationProperty: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagetexturetarget
declare const kCIImageTextureTarget: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagetextureformat
declare const kCIImageTextureFormat: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagenearestsampling
declare const kCIImageNearestSampling: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliarydepth
declare const kCIImageAuxiliaryDepth: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliarydisparity
declare const kCIImageAuxiliaryDisparity: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliaryportraiteffectsmatte
declare const kCIImageAuxiliaryPortraitEffectsMatte: cocoascript.CIImageOption;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine used to create custom Core Image filters.
   * doc://com.apple.documentation/documentation/coreimage/cikernel
   */
  interface CIKernel extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cikernel/1438067-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikernel/1437691-setroiselector
    setROISelector(method: cocoascript.SEL):void;
    // doc://com.apple.documentation/documentation/coreimage/cikernel/1438243-applywithextent
    applyWithExtent_roiCallback_arguments(extent: cocoascript.CGRect, callback: cocoascript.CIKernelROICallback, args: cocoascript.CIKernel):cocoascript.CIImage;
    //
    alloc():cocoascript.CIKernel;
    //
    init():cocoascript.CIKernel;
  }
}

declare const CIKernel: cocoascript.CIKernel;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that processes only the color information in images, used to create custom Core Image filters.
   * doc://com.apple.documentation/documentation/coreimage/cicolorkernel
   */
  interface CIColorKernel extends CIKernel {
    // doc://com.apple.documentation/documentation/coreimage/cicolorkernel/1438110-applywithextent
    applyWithExtent_arguments(extent: cocoascript.CGRect, args: cocoascript.CIColorKernel):cocoascript.CIImage;
    //
    alloc():cocoascript.CIColorKernel;
    //
    init():cocoascript.CIColorKernel;
  }
}

declare const CIColorKernel: cocoascript.CIColorKernel;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
   * doc://com.apple.documentation/documentation/coreimage/ciwarpkernel
   */
  interface CIWarpKernel extends CIKernel {
    // doc://com.apple.documentation/documentation/coreimage/ciwarpkernel/1437798-applywithextent
    applyWithExtent_roiCallback_inputImage_arguments(extent: cocoascript.CGRect, callback: cocoascript.CIKernelROICallback, image: cocoascript.CIImage, args: cocoascript.CIWarpKernel):cocoascript.CIImage;
    //
    alloc():cocoascript.CIWarpKernel;
    //
    init():cocoascript.CIWarpKernel;
  }
}

declare const CIWarpKernel: cocoascript.CIWarpKernel;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that is optimized for blending two images.
   * doc://com.apple.documentation/documentation/coreimage/ciblendkernel
   */
  interface CIBlendKernel extends CIColorKernel {
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2919728-applywithforeground
    applyWithForeground_background(foreground: cocoascript.CIImage, background: cocoascript.CIImage):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867388-clear
    clear(): cocoascript.CIBlendKernel;
    setClear(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867350-color
    color(): cocoascript.CIBlendKernel;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867391-colorburn
    colorBurn(): cocoascript.CIBlendKernel;
    setColorBurn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867417-colordodge
    colorDodge(): cocoascript.CIBlendKernel;
    setColorDodge(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867384-componentadd
    componentAdd(): cocoascript.CIBlendKernel;
    setComponentAdd(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867433-componentmax
    componentMax(): cocoascript.CIBlendKernel;
    setComponentMax(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867425-componentmin
    componentMin(): cocoascript.CIBlendKernel;
    setComponentMin(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867406-componentmultiply
    componentMultiply(): cocoascript.CIBlendKernel;
    setComponentMultiply(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867348-darken
    darken(): cocoascript.CIBlendKernel;
    setDarken(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867351-darkercolor
    darkerColor(): cocoascript.CIBlendKernel;
    setDarkerColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867422-destination
    destination(): cocoascript.CIBlendKernel;
    setDestination(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867385-destinationatop
    destinationAtop(): cocoascript.CIBlendKernel;
    setDestinationAtop(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867352-destinationin
    destinationIn(): cocoascript.CIBlendKernel;
    setDestinationIn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867368-destinationout
    destinationOut(): cocoascript.CIBlendKernel;
    setDestinationOut(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867432-destinationover
    destinationOver(): cocoascript.CIBlendKernel;
    setDestinationOver(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867416-difference
    difference(): cocoascript.CIBlendKernel;
    setDifference(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867410-divide
    divide(): cocoascript.CIBlendKernel;
    setDivide(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867343-exclusion
    exclusion(): cocoascript.CIBlendKernel;
    setExclusion(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867421-exclusiveor
    exclusiveOr(): cocoascript.CIBlendKernel;
    setExclusiveOr(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867418-hardlight
    hardLight(): cocoascript.CIBlendKernel;
    setHardLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867347-hardmix
    hardMix(): cocoascript.CIBlendKernel;
    setHardMix(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867408-hue
    hue(): cocoascript.CIBlendKernel;
    setHue(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867424-lighten
    lighten(): cocoascript.CIBlendKernel;
    setLighten(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867427-lightercolor
    lighterColor(): cocoascript.CIBlendKernel;
    setLighterColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867409-linearburn
    linearBurn(): cocoascript.CIBlendKernel;
    setLinearBurn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867354-lineardodge
    linearDodge(): cocoascript.CIBlendKernel;
    setLinearDodge(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867435-linearlight
    linearLight(): cocoascript.CIBlendKernel;
    setLinearLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867423-luminosity
    luminosity(): cocoascript.CIBlendKernel;
    setLuminosity(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867419-multiply
    multiply(): cocoascript.CIBlendKernel;
    setMultiply(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867411-overlay
    overlay(): cocoascript.CIBlendKernel;
    setOverlay(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867420-pinlight
    pinLight(): cocoascript.CIBlendKernel;
    setPinLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867431-saturation
    saturation(): cocoascript.CIBlendKernel;
    setSaturation(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867356-screen
    screen(): cocoascript.CIBlendKernel;
    setScreen(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867434-softlight
    softLight(): cocoascript.CIBlendKernel;
    setSoftLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867407-source
    source(): cocoascript.CIBlendKernel;
    setSource(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867357-sourceatop
    sourceAtop(): cocoascript.CIBlendKernel;
    setSourceAtop(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867428-sourcein
    sourceIn(): cocoascript.CIBlendKernel;
    setSourceIn(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867415-sourceout
    sourceOut(): cocoascript.CIBlendKernel;
    setSourceOut(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867413-sourceover
    sourceOver(): cocoascript.CIBlendKernel;
    setSourceOver(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867370-subtract
    subtract(): cocoascript.CIBlendKernel;
    setSubtract(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/2867358-vividlight
    vividLight(): cocoascript.CIBlendKernel;
    setVividLight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendkernel/3152403-applywithforeground
    applyWithForeground_background_colorSpace(foreground: cocoascript.CIImage, background: cocoascript.CIImage, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImage;
    //
    alloc():cocoascript.CIBlendKernel;
    //
    init():cocoascript.CIBlendKernel;
  }
}

declare const CIBlendKernel: cocoascript.CIBlendKernel;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/ciformat
  type CIFormat = number;
}
declare namespace cocoascript {
  /**
   * An image processor that identifies notable features (such as faces and barcodes) in a still image or video.
   * doc://com.apple.documentation/documentation/coreimage/cidetector
   */
  interface CIDetector extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cidetector/1438049-featuresinimage
    featuresInImage(image: cocoascript.CIImage):cocoascript.CIFeature;
    // doc://com.apple.documentation/documentation/coreimage/cidetector/1438189-featuresinimage
    featuresInImage_options(image: cocoascript.CIImage, options: cocoascript.CIDetector):cocoascript.CIFeature;
    //
    alloc():cocoascript.CIDetector;
    //
    init():cocoascript.CIDetector;
  }
}

declare const CIDetector: cocoascript.CIDetector;
declare namespace cocoascript {
  /**
   * The abstract superclass for objects representing notable features detected in an image.
   * doc://com.apple.documentation/documentation/coreimage/cifeature
   */
  interface CIFeature extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cifeature/1437782-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifeature/1438092-type
    type(): cocoascript.NSString;
    setType(): void;
    //
    alloc():cocoascript.CIFeature;
    //
    init():cocoascript.CIFeature;
  }
}

declare const CIFeature: cocoascript.CIFeature;
// doc://com.apple.documentation/documentation/coreimage/cifeaturetypeface
declare const CIFeatureTypeFace: cocoascript.NSString;
// doc://com.apple.documentation/documentation/coreimage/cifeaturetyperectangle
declare const CIFeatureTypeRectangle: cocoascript.NSString;
// doc://com.apple.documentation/documentation/coreimage/cifeaturetypeqrcode
declare const CIFeatureTypeQRCode: cocoascript.NSString;
// doc://com.apple.documentation/documentation/coreimage/cifeaturetypetext
declare const CIFeatureTypeText: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * Information about a face detected in a still or video image.
   * doc://com.apple.documentation/documentation/coreimage/cifacefeature
   */
  interface CIFaceFeature extends CIFeature {
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438068-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438165-hasfaceangle
    hasFaceAngle(): cocoascript.BOOL;
    setHasFaceAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437689-faceangle
    faceAngle(): number;
    setFaceAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437900-haslefteyeposition
    hasLeftEyePosition(): cocoascript.BOOL;
    setHasLeftEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438076-hasrighteyeposition
    hasRightEyePosition(): cocoascript.BOOL;
    setHasRightEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437976-hasmouthposition
    hasMouthPosition(): cocoascript.BOOL;
    setHasMouthPosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437923-lefteyeposition
    leftEyePosition(): cocoascript.CGPoint;
    setLeftEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438213-righteyeposition
    rightEyePosition(): cocoascript.CGPoint;
    setRightEyePosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1438020-mouthposition
    mouthPosition(): cocoascript.CGPoint;
    setMouthPosition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437882-hassmile
    hasSmile(): cocoascript.BOOL;
    setHasSmile(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437630-lefteyeclosed
    leftEyeClosed(): cocoascript.BOOL;
    setLeftEyeClosed(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437615-righteyeclosed
    rightEyeClosed(): cocoascript.BOOL;
    setRightEyeClosed(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437683-hastrackingid
    hasTrackingID(): cocoascript.BOOL;
    setHasTrackingID(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437709-trackingid
    trackingID(): number;
    setTrackingID(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437731-hastrackingframecount
    hasTrackingFrameCount(): cocoascript.BOOL;
    setHasTrackingFrameCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifacefeature/1437953-trackingframecount
    trackingFrameCount(): number;
    setTrackingFrameCount(): void;
    //
    alloc():cocoascript.CIFaceFeature;
    //
    init():cocoascript.CIFaceFeature;
  }
}

declare const CIFaceFeature: cocoascript.CIFaceFeature;
declare namespace cocoascript {
  /**
   * Information about a rectangular region detected in a still or video image.
   * doc://com.apple.documentation/documentation/coreimage/cirectanglefeature
   */
  interface CIRectangleFeature extends CIFeature {
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1438024-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1437878-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1437888-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1437951-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirectanglefeature/1438071-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
    //
    alloc():cocoascript.CIRectangleFeature;
    //
    init():cocoascript.CIRectangleFeature;
  }
}

declare const CIRectangleFeature: cocoascript.CIRectangleFeature;
declare namespace cocoascript {
  /**
   * Information about a region likely to contain text detected in a still or video image.
   * doc://com.apple.documentation/documentation/coreimage/citextfeature
   */
  interface CITextFeature extends CIFeature {
    // doc://com.apple.documentation/documentation/coreimage/citextfeature/1437885-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextfeature/1437810-subfeatures
    subFeatures(): cocoascript.NSArray;
    setSubFeatures(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextfeature/1438004-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextfeature/1437659-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextfeature/1438221-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextfeature/1438282-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
    //
    alloc():cocoascript.CITextFeature;
    //
    init():cocoascript.CITextFeature;
  }
}

declare const CITextFeature: cocoascript.CITextFeature;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor
   */
  interface CIQRCodeDescriptor extends CIBarcodeDescriptor {
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875180-initwithpayload
    initWithPayload_symbolVersion_maskPattern_errorCorrectionLevel(errorCorrectedPayload: cocoascript.NSData, symbolVersion: cocoascript.NSInteger, maskPattern: number, errorCorrectionLevel: cocoascript.CIQRCodeErrorCorrectionLevel):cocoascript.CIQRCodeDescriptor;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875167-errorcorrectedpayload
    errorCorrectedPayload(): cocoascript.NSData;
    setErrorCorrectedPayload(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875193-symbolversion
    symbolVersion(): cocoascript.NSInteger;
    setSymbolVersion(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875191-maskpattern
    maskPattern(): number;
    setMaskPattern(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875196-errorcorrectionlevel
    errorCorrectionLevel(): cocoascript.CIQRCodeErrorCorrectionLevel;
    setErrorCorrectionLevel(): void;
    //
    alloc():cocoascript.CIQRCodeDescriptor;
    //
    init():cocoascript.CIQRCodeDescriptor;
  }
}

declare const CIQRCodeDescriptor: cocoascript.CIQRCodeDescriptor;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor
   */
  interface CIAztecCodeDescriptor extends CIBarcodeDescriptor {
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875188-initwithpayload
    initWithPayload_isCompact_layerCount_dataCodewordCount(errorCorrectedPayload: cocoascript.NSData, isCompact: cocoascript.BOOL, layerCount: cocoascript.NSInteger, dataCodewordCount: cocoascript.NSInteger):cocoascript.CIAztecCodeDescriptor;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875187-errorcorrectedpayload
    errorCorrectedPayload(): cocoascript.NSData;
    setErrorCorrectedPayload(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875203-iscompact
    isCompact(): cocoascript.BOOL;
    setIsCompact(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875174-layercount
    layerCount(): cocoascript.NSInteger;
    setLayerCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875166-datacodewordcount
    dataCodewordCount(): cocoascript.NSInteger;
    setDataCodewordCount(): void;
    //
    alloc():cocoascript.CIAztecCodeDescriptor;
    //
    init():cocoascript.CIAztecCodeDescriptor;
  }
}

declare const CIAztecCodeDescriptor: cocoascript.CIAztecCodeDescriptor;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor
   */
  interface CIPDF417CodeDescriptor extends CIBarcodeDescriptor {
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875182-initwithpayload
    initWithPayload_isCompact_rowCount_columnCount(errorCorrectedPayload: cocoascript.NSData, isCompact: cocoascript.BOOL, rowCount: cocoascript.NSInteger, columnCount: cocoascript.NSInteger):cocoascript.CIPDF417CodeDescriptor;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875204-errorcorrectedpayload
    errorCorrectedPayload(): cocoascript.NSData;
    setErrorCorrectedPayload(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875194-iscompact
    isCompact(): cocoascript.BOOL;
    setIsCompact(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875199-rowcount
    rowCount(): cocoascript.NSInteger;
    setRowCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875171-columncount
    columnCount(): cocoascript.NSInteger;
    setColumnCount(): void;
    //
    alloc():cocoascript.CIPDF417CodeDescriptor;
    //
    init():cocoascript.CIPDF417CodeDescriptor;
  }
}

declare const CIPDF417CodeDescriptor: cocoascript.CIPDF417CodeDescriptor;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor
   */
  interface CIDataMatrixCodeDescriptor extends CIBarcodeDescriptor {
    // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875201-initwithpayload
    initWithPayload_rowCount_columnCount_eccVersion(errorCorrectedPayload: cocoascript.NSData, rowCount: cocoascript.NSInteger, columnCount: cocoascript.NSInteger, eccVersion: cocoascript.CIDataMatrixCodeECCVersion):cocoascript.CIDataMatrixCodeDescriptor;
    // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875173-errorcorrectedpayload
    errorCorrectedPayload(): cocoascript.NSData;
    setErrorCorrectedPayload(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875200-rowcount
    rowCount(): cocoascript.NSInteger;
    setRowCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875202-columncount
    columnCount(): cocoascript.NSInteger;
    setColumnCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875170-eccversion
    eccVersion(): cocoascript.CIDataMatrixCodeECCVersion;
    setEccVersion(): void;
    //
    alloc():cocoascript.CIDataMatrixCodeDescriptor;
    //
    init():cocoascript.CIDataMatrixCodeDescriptor;
  }
}

declare const CIDataMatrixCodeDescriptor: cocoascript.CIDataMatrixCodeDescriptor;
declare namespace cocoascript {
  /**
   * The mechanism for loading image units in macOS.
   * doc://com.apple.documentation/documentation/coreimage/ciplugin
   */
  interface CIPlugIn extends NSObject {
    //
    alloc():cocoascript.CIPlugIn;
    //
    init():cocoascript.CIPlugIn;
  }
}

declare const CIPlugIn: cocoascript.CIPlugIn;
declare namespace cocoascript {
  /**
   * A general interface for objects that produce
   * doc://com.apple.documentation/documentation/coreimage/cifilterconstructor
   */
  interface CIFilterConstructor {
    // doc://com.apple.documentation/documentation/coreimage/cifilterconstructor/1438018-filterwithname
    filterWithName(name: cocoascript.NSString):cocoascript.CIFilter;
  }
}
declare namespace cocoascript {
  /**
   * The interface for loading Core Image image units.
   * doc://com.apple.documentation/documentation/coreimage/cipluginregistration
   */
  interface CIPlugInRegistration {
    // doc://com.apple.documentation/documentation/coreimage/cipluginregistration/1437823-load
    load(host: void):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/cirawfilteroption
  type CIRAWFilterOption = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationavdepthdata
declare const kCIImageRepresentationAVDepthData: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationdepthimage
declare const kCIImageRepresentationDepthImage: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationdisparityimage
declare const kCIImageRepresentationDisparityImage: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextoutputcolorspace
declare const kCIContextOutputColorSpace: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextworkingcolorspace
declare const kCIContextWorkingColorSpace: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextworkingformat
declare const kCIContextWorkingFormat: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontexthighqualitydownsample
declare const kCIContextHighQualityDownsample: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextoutputpremultiplied
declare const kCIContextOutputPremultiplied: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextcacheintermediates
declare const kCIContextCacheIntermediates: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextusesoftwarerenderer
declare const kCIContextUseSoftwareRenderer: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextpriorityrequestlow
declare const kCIContextPriorityRequestLow: cocoascript.CIContextOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/ciimageoption
  type CIImageOption = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A specification for configuring all attributes of a render task's destination and issuing asynchronous render tasks.
   * doc://com.apple.documentation/documentation/coreimage/cirenderdestination
   */
  interface CIRenderDestination extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875436-initwithpixelbuffer
    initWithPixelBuffer(pixelBuffer: cocoascript.CVPixelBufferRef):cocoascript.CIRenderDestination;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2876044-initwithiosurface
    initWithIOSurface(surface: cocoascript.IOSurface):cocoascript.CIRenderDestination;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2880273-initwithmtltexture
    initWithMTLTexture_commandBuffer(texture: any, commandBuffer: any):cocoascript.CIRenderDestination;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2880274-initwithwidth
    initWithWidth_height_pixelFormat_commandBuffer_mtlTextureProvider(width: cocoascript.NSUInteger, height: cocoascript.NSUInteger, pixelFormat: any, commandBuffer: any, block: void):cocoascript.CIRenderDestination;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875438-initwithgltexture
    initWithGLTexture_target_width_height(texture: number, target: number, width: cocoascript.NSUInteger, height: cocoascript.NSUInteger):cocoascript.CIRenderDestination;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875427-initwithbitmapdata
    initWithBitmapData_width_height_bytesPerRow_format(data: void, width: cocoascript.NSUInteger, height: cocoascript.NSUInteger, bytesPerRow: cocoascript.NSUInteger, format: cocoascript.CIFormat):cocoascript.CIRenderDestination;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875443-alphamode
    alphaMode(): cocoascript.CIRenderDestinationAlphaMode;
    setAlphaMode(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875452-blendkernel
    blendKernel(): cocoascript.CIBlendKernel;
    setBlendKernel(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875437-blendsindestinationcolorspace
    blendsInDestinationColorSpace(): cocoascript.BOOL;
    setBlendsInDestinationColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875439-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875434-width
    width(): cocoascript.NSUInteger;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875433-height
    height(): cocoascript.NSUInteger;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875451-clamped
    clamped(): cocoascript.BOOL;
    setClamped(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875441-dithered
    dithered(): cocoascript.BOOL;
    setDithered(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2875442-flipped
    flipped(): cocoascript.BOOL;
    setFlipped(): void;
    //
    alloc():cocoascript.CIRenderDestination;
    //
    init():cocoascript.CIRenderDestination;
  }
}

declare const CIRenderDestination: cocoascript.CIRenderDestination;
declare namespace cocoascript {
  /**
   * The abstract class you extend to create custom image processors that can integrate with Core Image workflows.
   * doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel
   */
  interface CIImageProcessorKernel extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel/2143065-outputformat
    outputFormat(): cocoascript.CIFormat;
    setOutputFormat(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel/2867389-outputisopaque
    outputIsOpaque(): boolean;
    setOutputIsOpaque(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorkernel/2143066-synchronizeinputs
    synchronizeInputs(): boolean;
    setSynchronizeInputs(): void;
    //
    alloc():cocoascript.CIImageProcessorKernel;
    //
    init():cocoascript.CIImageProcessorKernel;
  }
}

declare const CIImageProcessorKernel: cocoascript.CIImageProcessorKernel;
declare namespace cocoascript {
  /**
   * A container of image data and information for use in a custom image processor.
   * doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput
   */
  interface CIImageProcessorInput {
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639645-baseaddress
    baseAddress(): void;
    setBaseAddress(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639651-metaltexture
    metalTexture(): any;
    setMetalTexture(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639649-pixelbuffer
    pixelBuffer(): cocoascript.CVPixelBufferRef;
    setPixelBuffer(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639657-surface
    surface(): cocoascript.IOSurfaceRef;
    setSurface(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639633-region
    region(): cocoascript.CGRect;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639655-bytesperrow
    bytesPerRow(): any;
    setBytesPerRow(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639639-format
    format(): cocoascript.CIFormat;
    setFormat(): void;
  }
}
declare namespace cocoascript {
  /**
   * A container for writing image data and information produced by a custom image processor.
   * doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput
   */
  interface CIImageProcessorOutput {
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639626-baseaddress
    baseAddress(): void;
    setBaseAddress(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639631-metaltexture
    metalTexture(): any;
    setMetalTexture(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639647-pixelbuffer
    pixelBuffer(): cocoascript.CVPixelBufferRef;
    setPixelBuffer(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639627-surface
    surface(): cocoascript.IOSurfaceRef;
    setSurface(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639629-region
    region(): cocoascript.CGRect;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639641-metalcommandbuffer
    metalCommandBuffer(): any;
    setMetalCommandBuffer(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639635-bytesperrow
    bytesPerRow(): any;
    setBytesPerRow(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639628-format
    format(): cocoascript.CIFormat;
    setFormat(): void;
  }
}
declare namespace cocoascript {
  /**
   * An encapsulation of a render task's timing, passes, and pixels processed.
   * doc://com.apple.documentation/documentation/coreimage/cirenderinfo
   */
  interface CIRenderInfo extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cirenderinfo/2875453-kernelexecutiontime
    kernelExecutionTime(): cocoascript.NSTimeInterval;
    setKernelExecutionTime(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderinfo/2875446-passcount
    passCount(): cocoascript.NSInteger;
    setPassCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderinfo/2919725-pixelsprocessed
    pixelsProcessed(): cocoascript.NSInteger;
    setPixelsProcessed(): void;
    //
    alloc():cocoascript.CIRenderInfo;
    //
    init():cocoascript.CIRenderInfo;
  }
}

declare const CIRenderInfo: cocoascript.CIRenderInfo;
declare namespace cocoascript {
  /**
   * A single render task issued in conjunction with
   * doc://com.apple.documentation/documentation/coreimage/cirendertask
   */
  interface CIRenderTask extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cirendertask/2881294-waituntilcompletedandreturnerror
    waitUntilCompletedAndReturnError(error: cocoascript.NSError):cocoascript.CIRenderInfo;
    //
    alloc():cocoascript.CIRenderTask;
    //
    init():cocoascript.CIRenderTask;
  }
}

declare const CIRenderTask: cocoascript.CIRenderTask;
declare namespace cocoascript {
  /**
   * An object that manages feedback-based image processing for tasks such as painting or fluid simulation.
   * doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator
   */
  interface CIImageAccumulator extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427718-initwithextent
    initWithExtent_format(extent: cocoascript.CGRect, format: cocoascript.CIFormat):cocoascript.CIImageAccumulator;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427710-initwithextent
    initWithExtent_format_colorSpace(extent: cocoascript.CGRect, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImageAccumulator;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427702-setimage
    setImage(image: cocoascript.CIImage):void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427706-setimage
    setImage_dirtyRect(image: cocoascript.CIImage, dirtyRect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427714-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427716-format
    format(): cocoascript.CIFormat;
    setFormat(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427704-image
    image():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427720-clear
    clear():void;
    //
    alloc():cocoascript.CIImageAccumulator;
    //
    init():cocoascript.CIImageAccumulator;
  }
}

declare const CIImageAccumulator: cocoascript.CIImageAccumulator;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareaaverage
   */
  interface CIAreaAverage extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareahistogram
   */
  interface CIAreaHistogram extends CIAreaReductionFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciareahistogram/3547092-count
    count(): cocoascript.NSInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciareahistogram/3547093-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareamaximum
   */
  interface CIAreaMaximum extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareamaximumalpha
   */
  interface CIAreaMaximumAlpha extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareaminmax
   */
  interface CIAreaMinMax extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareaminmaxred
   */
  interface CIAreaMinMaxRed extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareaminimum
   */
  interface CIAreaMinimum extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareaminimumalpha
   */
  interface CIAreaMinimumAlpha extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciareareductionfilter
   */
  interface CIAreaReductionFilter extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciareareductionfilter/3547101-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciareareductionfilter/3547102-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cibumpdistortion
   */
  interface CIBumpDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600107-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600108-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600109-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortion/3600110-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear
   */
  interface CIBumpDistortionLinear extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600112-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600113-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600114-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600115-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibumpdistortionlinear/3600116-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion
   */
  interface CICircleSplashDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion/3600118-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion/3600119-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicirclesplashdistortion/3600120-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cicircularwrap
   */
  interface CICircularWrap extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600122-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600123-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600124-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularwrap/3600125-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cicolorabsolutedifference
   */
  interface CIColorAbsoluteDifference extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorabsolutedifference/3547104-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorabsolutedifference/3547105-inputimage2
    inputImage2(): cocoascript.CIImage;
    setInputImage2(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cicolorthreshold
   */
  interface CIColorThreshold extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorthreshold/3547107-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorthreshold/3547108-threshold
    threshold(): number;
    setThreshold(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cicolorthresholdotsu
   */
  interface CIColorThresholdOtsu extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorthresholdotsu/3584769-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cicolumnaverage
   */
  interface CIColumnAverage extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion
   */
  interface CIDisplacementDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion/3600127-displacementimage
    displacementImage(): cocoascript.CIImage;
    setDisplacementImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion/3600128-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion/3600129-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cidroste
   */
  interface CIDroste extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600131-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600132-insetpoint0
    insetPoint0(): cocoascript.CGPoint;
    setInsetPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600133-insetpoint1
    insetPoint1(): cocoascript.CGPoint;
    setInsetPoint1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600134-periodicity
    periodicity(): number;
    setPeriodicity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600135-rotation
    rotation(): number;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600136-strands
    strands(): number;
    setStrands(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600137-zoom
    zoom(): number;
    setZoom(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a geometry adjustment filters that requires four coordinates.
   * doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter
   */
  interface CIFourCoordinateGeometryFilter extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338731-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338732-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338733-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338734-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourcoordinategeometryfilter/3338735-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciglassdistortion
   */
  interface CIGlassDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600156-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600157-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600158-scale
    scale(): number;
    setScale(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglassdistortion/3600159-textureimage
    textureImage(): cocoascript.CIImage;
    setTextureImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciglasslozenge
   */
  interface CIGlassLozenge extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600161-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600162-point0
    point0(): cocoascript.CGPoint;
    setPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600163-point1
    point1(): cocoascript.CGPoint;
    setPoint1(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600164-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglasslozenge/3600165-refraction
    refraction(): number;
    setRefraction(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay
   */
  interface CIHistogramDisplay extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547125-height
    height(): number;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547126-highlimit
    highLimit(): number;
    setHighLimit(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547127-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547128-lowlimit
    lowLimit(): number;
    setLowLimit(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/ciholedistortion
   */
  interface CIHoleDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciholedistortion/3600167-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciholedistortion/3600168-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciholedistortion/3600169-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cikmeans
   */
  interface CIKMeans extends CIAreaReductionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547130-count
    count(): cocoascript.NSInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547131-inputmeans
    inputMeans(): cocoascript.CIImage;
    setInputMeans(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547132-passes
    passes(): number;
    setPasses(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547133-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cilighttunnel
   */
  interface CILightTunnel extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600171-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600172-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600173-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600174-rotation
    rotation(): number;
    setRotation(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cininepartstretched
   */
  interface CINinePartStretched extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cininepartstretched/3600176-breakpoint0
    breakpoint0(): cocoascript.CGPoint;
    setBreakpoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cininepartstretched/3600177-breakpoint1
    breakpoint1(): cocoascript.CGPoint;
    setBreakpoint1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cininepartstretched/3600178-growamount
    growAmount(): cocoascript.CGPoint;
    setGrowAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cininepartstretched/3600179-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cinineparttiled
   */
  interface CINinePartTiled extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cinineparttiled/3600181-breakpoint0
    breakpoint0(): cocoascript.CGPoint;
    setBreakpoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinineparttiled/3600182-breakpoint1
    breakpoint1(): cocoascript.CGPoint;
    setBreakpoint1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinineparttiled/3600183-flipytiles
    flipYTiles(): boolean;
    setFlipYTiles(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinineparttiled/3600184-growamount
    growAmount(): cocoascript.CGPoint;
    setGrowAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinineparttiled/3600185-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cipinchdistortion
   */
  interface CIPinchDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600187-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600188-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600189-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipinchdistortion/3600190-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cirowaverage
   */
  interface CIRowAverage extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cistretchcrop
   */
  interface CIStretchCrop extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600192-centerstretchamount
    centerStretchAmount(): number;
    setCenterStretchAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600193-cropamount
    cropAmount(): number;
    setCropAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600194-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600195-size
    size(): cocoascript.CGPoint;
    setSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion
   */
  interface CITorusLensDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600197-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600198-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600199-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600200-refraction
    refraction(): number;
    setRefraction(): void;
    // doc://com.apple.documentation/documentation/coreimage/citoruslensdistortion/3600201-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/citwirldistortion
   */
  interface CITwirlDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600203-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600204-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600205-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citwirldistortion/3600206-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/civortexdistortion
   */
  interface CIVortexDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600208-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600209-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600210-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/civortexdistortion/3600211-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/ciimageautoadjustmentoption
  type CIImageAutoAdjustmentOption = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/coreimage/kciimageautoadjustenhance
declare const kCIImageAutoAdjustEnhance: cocoascript.CIImageAutoAdjustmentOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageautoadjustredeye
declare const kCIImageAutoAdjustRedEye: cocoascript.CIImageAutoAdjustmentOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageautoadjustfeatures
declare const kCIImageAutoAdjustFeatures: cocoascript.CIImageAutoAdjustmentOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageautoadjustcrop
declare const kCIImageAutoAdjustCrop: cocoascript.CIImageAutoAdjustmentOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageautoadjustlevel
declare const kCIImageAutoAdjustLevel: cocoascript.CIImageAutoAdjustmentOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/cikernelroicallback
  type CIKernelROICallback = cocoascript.CGRect;
}
// doc://com.apple.documentation/documentation/coreimage/kciinputbaselineexposurekey
declare const kCIInputBaselineExposureKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputdisablegamutmapkey
declare const kCIInputDisableGamutMapKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputmoireamountkey
declare const kCIInputMoireAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kcisupporteddecoderversionskey
declare const kCISupportedDecoderVersionsKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputallowdraftmodekey
declare const kCIInputAllowDraftModeKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputdecoderversionkey
declare const kCIInputDecoderVersionKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputboostkey
declare const kCIInputBoostKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputneutralchromaticityxkey
declare const kCIInputNeutralChromaticityXKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputneutralchromaticityykey
declare const kCIInputNeutralChromaticityYKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputneutraltemperaturekey
declare const kCIInputNeutralTemperatureKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputneutraltintkey
declare const kCIInputNeutralTintKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputneutrallocationkey
declare const kCIInputNeutralLocationKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputscalefactorkey
declare const kCIInputScaleFactorKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputignoreimageorientationkey
declare const kCIInputIgnoreImageOrientationKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputimageorientationkey
declare const kCIInputImageOrientationKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputenablesharpeningkey
declare const kCIInputEnableSharpeningKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputenablechromaticnoisetrackingkey
declare const kCIInputEnableChromaticNoiseTrackingKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputnoisereductionamountkey
declare const kCIInputNoiseReductionAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputenablevendorlenscorrectionkey
declare const kCIInputEnableVendorLensCorrectionKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputluminancenoisereductionamountkey
declare const kCIInputLuminanceNoiseReductionAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputcolornoisereductionamountkey
declare const kCIInputColorNoiseReductionAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputnoisereductionsharpnessamountkey
declare const kCIInputNoiseReductionSharpnessAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputnoisereductioncontrastamountkey
declare const kCIInputNoiseReductionContrastAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputnoisereductiondetailamountkey
declare const kCIInputNoiseReductionDetailAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputboostshadowamountkey
declare const kCIInputBoostShadowAmountKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciinputlinearspacefilter
declare const kCIInputLinearSpaceFilter: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kcioutputnativesizekey
declare const kCIOutputNativeSizeKey: cocoascript.CIRAWFilterOption;
// doc://com.apple.documentation/documentation/coreimage/kciactivekeys
declare const kCIActiveKeys: cocoascript.CIRAWFilterOption;
declare namespace cocoascript {
  /**
   * The properties you use to configure a CMYK halftone filter.
   * doc://com.apple.documentation/documentation/coreimage/cicmykhalftone
   */
  interface CICMYKHalftone extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228097-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228098-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228099-graycomponentreplacement
    grayComponentReplacement(): number;
    setGrayComponentReplacement(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228100-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228101-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228102-undercolorremoval
    underColorRemoval(): number;
    setUnderColorRemoval(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228103-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Lab Delta E filter.
   * doc://com.apple.documentation/documentation/coreimage/cilabdeltae
   */
  interface CILabDeltaE extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilabdeltae/3228513-image2
    image2(): cocoascript.CIImage;
    setImage2(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilabdeltae/3228514-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a PDF417 barcode generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator
   */
  interface CIPDF417BarcodeGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228605-alwaysspecifycompaction
    alwaysSpecifyCompaction(): number;
    setAlwaysSpecifyCompaction(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228606-compactstyle
    compactStyle(): number;
    setCompactStyle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228607-compactionmode
    compactionMode(): number;
    setCompactionMode(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228608-correctionlevel
    correctionLevel(): number;
    setCorrectionLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228609-datacolumns
    dataColumns(): number;
    setDataColumns(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228610-maxheight
    maxHeight(): number;
    setMaxHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228611-maxwidth
    maxWidth(): number;
    setMaxWidth(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228612-message
    message(): cocoascript.NSData;
    setMessage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228613-minheight
    minHeight(): number;
    setMinHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228614-minwidth
    minWidth(): number;
    setMinWidth(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228615-preferredaspectratio
    preferredAspectRatio(): number;
    setPreferredAspectRatio(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417barcodegenerator/3228616-rows
    rows(): number;
    setRows(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a QR code generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciqrcodegenerator
   */
  interface CIQRCodeGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodegenerator/3228682-correctionlevel
    correctionLevel(): cocoascript.NSString;
    setCorrectionLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodegenerator/3228683-message
    message(): cocoascript.NSData;
    setMessage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an accordion fold transition filter.
   * doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition
   */
  interface CIAccordionFoldTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition/3228050-bottomheight
    bottomHeight(): number;
    setBottomHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition/3228051-foldshadowamount
    foldShadowAmount(): number;
    setFoldShadowAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciaccordionfoldtransition/3228052-numberoffolds
    numberOfFolds(): number;
    setNumberOfFolds(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a composite operation filter.
   * doc://com.apple.documentation/documentation/coreimage/cicompositeoperation
   */
  interface CICompositeOperation extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicompositeoperation/3228182-backgroundimage
    backgroundImage(): cocoascript.CIImage;
    setBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicompositeoperation/3228183-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a affine clamp filter.
   * doc://com.apple.documentation/documentation/coreimage/ciaffineclamp
   */
  interface CIAffineClamp extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciaffineclamp/3228054-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciaffineclamp/3228055-transform
    transform(): cocoascript.CGAffineTransform;
    setTransform(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an affine tile filter.
   * doc://com.apple.documentation/documentation/coreimage/ciaffinetile
   */
  interface CIAffineTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciaffinetile/3228057-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciaffinetile/3228058-transform
    transform(): cocoascript.CGAffineTransform;
    setTransform(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an attributed-text image generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciattributedtextimagegenerator
   */
  interface CIAttributedTextImageGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciattributedtextimagegenerator/3228060-scalefactor
    scaleFactor(): number;
    setScaleFactor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciattributedtextimagegenerator/3228061-text
    text(): cocoascript.NSAttributedString;
    setText(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an Aztec code generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator
   */
  interface CIAztecCodeGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228063-compactstyle
    compactStyle(): number;
    setCompactStyle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228064-correctionlevel
    correctionLevel(): number;
    setCorrectionLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228065-layers
    layers(): number;
    setLayers(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228066-message
    message(): cocoascript.NSData;
    setMessage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a barcode generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cibarcodegenerator
   */
  interface CIBarcodeGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibarcodegenerator/3228068-barcodedescriptor
    barcodeDescriptor(): cocoascript.CIBarcodeDescriptor;
    setBarcodeDescriptor(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bars swipe transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition
   */
  interface CIBarsSwipeTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition/3228070-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition/3228071-baroffset
    barOffset(): number;
    setBarOffset(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibarsswipetransition/3228072-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bicubic scale transform filter.
   * doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform
   */
  interface CIBicubicScaleTransform extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228074-aspectratio
    aspectRatio(): number;
    setAspectRatio(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228075-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228076-parameterb
    parameterB(): number;
    setParameterB(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228077-parameterc
    parameterC(): number;
    setParameterC(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228078-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a blend with mask filter.
   * doc://com.apple.documentation/documentation/coreimage/ciblendwithmask
   */
  interface CIBlendWithMask extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciblendwithmask/3228080-backgroundimage
    backgroundImage(): cocoascript.CIImage;
    setBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendwithmask/3228081-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciblendwithmask/3228082-maskimage
    maskImage(): cocoascript.CIImage;
    setMaskImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bloom filter.
   * doc://com.apple.documentation/documentation/coreimage/cibloom
   */
  interface CIBloom extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibloom/3228084-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibloom/3228085-intensity
    intensity(): number;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibloom/3228086-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bokeh blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cibokehblur
   */
  interface CIBokehBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228088-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228089-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228090-ringamount
    ringAmount(): number;
    setRingAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228091-ringsize
    ringSize(): number;
    setRingSize(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228092-softness
    softness(): number;
    setSoftness(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a box blur filter.
   * doc://com.apple.documentation/documentation/coreimage/ciboxblur
   */
  interface CIBoxBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciboxblur/3228094-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciboxblur/3228095-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a checkerboard generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator
   */
  interface CICheckerboardGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228105-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228106-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228107-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228108-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228109-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a circular screen filter.
   * doc://com.apple.documentation/documentation/coreimage/cicircularscreen
   */
  interface CICircularScreen extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228111-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228112-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228113-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228114-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Code 128 barcode generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator
   */
  interface CICode128BarcodeGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator/3228116-barcodeheight
    barcodeHeight(): number;
    setBarcodeHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator/3228117-message
    message(): cocoascript.NSData;
    setMessage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator/3228118-quietspace
    quietSpace(): number;
    setQuietSpace(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color clamp filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorclamp
   */
  interface CIColorClamp extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorclamp/3228120-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorclamp/3228121-maxcomponents
    maxComponents(): cocoascript.CIVector;
    setMaxComponents(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorclamp/3228122-mincomponents
    minComponents(): cocoascript.CIVector;
    setMinComponents(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color controls filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcontrols
   */
  interface CIColorControls extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228124-brightness
    brightness(): number;
    setBrightness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228125-contrast
    contrast(): number;
    setContrast(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228126-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcontrols/3228127-saturation
    saturation(): number;
    setSaturation(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cross-polynomial filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial
   */
  interface CIColorCrossPolynomial extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228129-bluecoefficients
    blueCoefficients(): cocoascript.CIVector;
    setBlueCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228130-greencoefficients
    greenCoefficients(): cocoascript.CIVector;
    setGreenCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228131-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcrosspolynomial/3228132-redcoefficients
    redCoefficients(): cocoascript.CIVector;
    setRedCoefficients(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcube
   */
  interface CIColorCube extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcube/3228134-cubedata
    cubeData(): cocoascript.NSData;
    setCubeData(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcube/3228135-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcube/3228136-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube with color space filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace
   */
  interface CIColorCubeWithColorSpace extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228138-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228139-cubedata
    cubeData(): cocoascript.NSData;
    setCubeData(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228140-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228141-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube mixed with mask filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask
   */
  interface CIColorCubesMixedWithMask extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228143-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228144-cube0data
    cube0Data(): cocoascript.NSData;
    setCube0Data(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228145-cube1data
    cube1Data(): cocoascript.NSData;
    setCube1Data(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228146-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228147-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228148-maskimage
    maskImage(): cocoascript.CIImage;
    setMaskImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color curves filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcurves
   */
  interface CIColorCurves extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228150-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228151-curvesdata
    curvesData(): cocoascript.NSData;
    setCurvesData(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228152-curvesdomain
    curvesDomain(): cocoascript.CIVector;
    setCurvesDomain(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcurves/3228153-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color invert filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorinvert
   */
  interface CIColorInvert extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorinvert/3228155-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color map filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolormap
   */
  interface CIColorMap extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolormap/3228157-gradientimage
    gradientImage(): cocoascript.CIImage;
    setGradientImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormap/3228158-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color matrix filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolormatrix
   */
  interface CIColorMatrix extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228160-avector
    AVector(): cocoascript.CIVector;
    setAVector(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228161-bvector
    BVector(): cocoascript.CIVector;
    setBVector(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228162-gvector
    GVector(): cocoascript.CIVector;
    setGVector(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228163-rvector
    RVector(): cocoascript.CIVector;
    setRVector(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228164-biasvector
    biasVector(): cocoascript.CIVector;
    setBiasVector(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormatrix/3228165-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color monochrome filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolormonochrome
   */
  interface CIColorMonochrome extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolormonochrome/3228167-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormonochrome/3228168-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormonochrome/3228169-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color polynomial filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial
   */
  interface CIColorPolynomial extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228171-alphacoefficients
    alphaCoefficients(): cocoascript.CIVector;
    setAlphaCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228172-bluecoefficients
    blueCoefficients(): cocoascript.CIVector;
    setBlueCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228173-greencoefficients
    greenCoefficients(): cocoascript.CIVector;
    setGreenCoefficients(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228174-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorpolynomial/3228175-redcoefficients
    redCoefficients(): cocoascript.CIVector;
    setRedCoefficients(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color posterize filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorposterize
   */
  interface CIColorPosterize extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorposterize/3228177-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorposterize/3228178-levels
    levels(): number;
    setLevels(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a comic effect filter.
   * doc://com.apple.documentation/documentation/coreimage/cicomiceffect
   */
  interface CIComicEffect extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicomiceffect/3228180-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a convolution filter.
   * doc://com.apple.documentation/documentation/coreimage/ciconvolution
   */
  interface CIConvolution extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciconvolution/3228185-bias
    bias(): number;
    setBias(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciconvolution/3228186-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciconvolution/3228187-weights
    weights(): cocoascript.CIVector;
    setWeights(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a copy machine transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition
   */
  interface CICopyMachineTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228189-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228190-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228191-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228192-opacity
    opacity(): number;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228193-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Core ML model filter.
   * doc://com.apple.documentation/documentation/coreimage/cicoremlmodel
   */
  interface CICoreMLModel extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228195-headindex
    headIndex(): number;
    setHeadIndex(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228196-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228197-model
    model(): cocoascript.MLModel;
    setModel(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228198-softmaxnormalization
    softmaxNormalization(): boolean;
    setSoftmaxNormalization(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a crystalize filter.
   * doc://com.apple.documentation/documentation/coreimage/cicrystallize
   */
  interface CICrystallize extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicrystallize/3228200-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicrystallize/3228201-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicrystallize/3228202-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a depth-of-field filter.
   * doc://com.apple.documentation/documentation/coreimage/cidepthoffield
   */
  interface CIDepthOfField extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228204-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228205-point0
    point0(): cocoascript.CGPoint;
    setPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228206-point1
    point1(): cocoascript.CGPoint;
    setPoint1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228207-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228208-saturation
    saturation(): number;
    setSaturation(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228209-unsharpmaskintensity
    unsharpMaskIntensity(): number;
    setUnsharpMaskIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidepthoffield/3228210-unsharpmaskradius
    unsharpMaskRadius(): number;
    setUnsharpMaskRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a depth-to-disparity filter.
   * doc://com.apple.documentation/documentation/coreimage/cidepthtodisparity
   */
  interface CIDepthToDisparity extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidepthtodisparity/3228212-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a disc blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cidiscblur
   */
  interface CIDiscBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidiscblur/3228214-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidiscblur/3228215-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a disintegrate-with-mask transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition
   */
  interface CIDisintegrateWithMaskTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228217-maskimage
    maskImage(): cocoascript.CIImage;
    setMaskImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228218-shadowdensity
    shadowDensity(): number;
    setShadowDensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228219-shadowoffset
    shadowOffset(): cocoascript.CGPoint;
    setShadowOffset(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228220-shadowradius
    shadowRadius(): number;
    setShadowRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a disparity-to-depth filter.
   * doc://com.apple.documentation/documentation/coreimage/cidisparitytodepth
   */
  interface CIDisparityToDepth extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidisparitytodepth/3228222-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a dissolve transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cidissolvetransition
   */
  interface CIDissolveTransition extends CITransitionFilter {
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a dither filter.
   * doc://com.apple.documentation/documentation/coreimage/cidither
   */
  interface CIDither extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidither/3228225-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidither/3228226-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a document enhancer filter.
   * doc://com.apple.documentation/documentation/coreimage/cidocumentenhancer
   */
  interface CIDocumentEnhancer extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidocumentenhancer/3228228-amount
    amount(): number;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidocumentenhancer/3228229-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a dot screen filter.
   * doc://com.apple.documentation/documentation/coreimage/cidotscreen
   */
  interface CIDotScreen extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228231-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228232-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228233-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228234-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidotscreen/3228235-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an edge preserve upsample filter.
   * doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample
   */
  interface CIEdgePreserveUpsample extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228237-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228238-lumasigma
    lumaSigma(): number;
    setLumaSigma(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228239-smallimage
    smallImage(): cocoascript.CIImage;
    setSmallImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228240-spatialsigma
    spatialSigma(): number;
    setSpatialSigma(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an edge-work filter.
   * doc://com.apple.documentation/documentation/coreimage/ciedgework
   */
  interface CIEdgeWork extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciedgework/3228242-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedgework/3228243-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an edges filter.
   * doc://com.apple.documentation/documentation/coreimage/ciedges
   */
  interface CIEdges extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciedges/3228245-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedges/3228246-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an eightfold reflected tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile
   */
  interface CIEightfoldReflectedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228248-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228249-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228250-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cieightfoldreflectedtile/3228251-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an exposure adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/ciexposureadjust
   */
  interface CIExposureAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciexposureadjust/3228253-ev
    EV(): number;
    setEV(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciexposureadjust/3228254-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a false color filter.
   * doc://com.apple.documentation/documentation/coreimage/cifalsecolor
   */
  interface CIFalseColor extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifalsecolor/3228256-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifalsecolor/3228257-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifalsecolor/3228258-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a flash transition filter.
   * doc://com.apple.documentation/documentation/coreimage/ciflashtransition
   */
  interface CIFlashTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228436-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228437-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228438-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228439-fadethreshold
    fadeThreshold(): number;
    setFadeThreshold(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228440-maxstriationradius
    maxStriationRadius(): number;
    setMaxStriationRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228441-striationcontrast
    striationContrast(): number;
    setStriationContrast(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228442-striationstrength
    striationStrength(): number;
    setStriationStrength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold reflected tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile
   */
  interface CIFourfoldReflectedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228444-acuteangle
    acuteAngle(): number;
    setAcuteAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228445-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228446-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228447-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldreflectedtile/3228448-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold rotated tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile
   */
  interface CIFourfoldRotatedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228450-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228451-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228452-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldrotatedtile/3228453-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold translated tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile
   */
  interface CIFourfoldTranslatedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228455-acuteangle
    acuteAngle(): number;
    setAcuteAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228456-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228457-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228458-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228459-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Gabor gradients filter.
   * doc://com.apple.documentation/documentation/coreimage/cigaborgradients
   */
  interface CIGaborGradients extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigaborgradients/3325514-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a gamma adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/cigammaadjust
   */
  interface CIGammaAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigammaadjust/3228461-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigammaadjust/3228462-power
    power(): number;
    setPower(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Gaussian blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cigaussianblur
   */
  interface CIGaussianBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigaussianblur/3228464-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigaussianblur/3228465-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Gaussian gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cigaussiangradient
   */
  interface CIGaussianGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228467-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228468-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228469-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigaussiangradient/3228470-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a glide reflected tile filter.
   * doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile
   */
  interface CIGlideReflectedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228472-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228473-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228474-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciglidereflectedtile/3228475-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a gloom filter.
   * doc://com.apple.documentation/documentation/coreimage/cigloom
   */
  interface CIGloom extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cigloom/3228477-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigloom/3228478-intensity
    intensity(): number;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cigloom/3228479-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hatched screen filter.
   * doc://com.apple.documentation/documentation/coreimage/cihatchedscreen
   */
  interface CIHatchedScreen extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228481-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228482-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228483-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228484-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihatchedscreen/3228485-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a height-field-from-mask filter.
   * doc://com.apple.documentation/documentation/coreimage/ciheightfieldfrommask
   */
  interface CIHeightFieldFromMask extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciheightfieldfrommask/3228487-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciheightfieldfrommask/3228488-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hexagonal pixellate filter.
   * doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate
   */
  interface CIHexagonalPixellate extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate/3228490-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate/3228491-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate/3228492-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a highlight-shadow adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust
   */
  interface CIHighlightShadowAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228494-highlightamount
    highlightAmount(): number;
    setHighlightAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228495-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228496-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228497-shadowamount
    shadowAmount(): number;
    setShadowAmount(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hue adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/cihueadjust
   */
  interface CIHueAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihueadjust/3228499-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihueadjust/3228500-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hue-saturation-value gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient
   */
  interface CIHueSaturationValueGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228502-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228503-dither
    dither(): number;
    setDither(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228504-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228505-softness
    softness(): number;
    setSoftness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228506-value
    value(): number;
    setValue(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a kaleidoscope filter.
   * doc://com.apple.documentation/documentation/coreimage/cikaleidoscope
   */
  interface CIKaleidoscope extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228508-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228509-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228510-count
    count(): cocoascript.NSInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikaleidoscope/3228511-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a keystone correction combined filter.
   * doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectioncombined
   */
  interface CIKeystoneCorrectionCombined extends CIFourCoordinateGeometryFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectioncombined/3325518-focallength
    focalLength(): number;
    setFocalLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a keystone correction horizontal filter.
   * doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionhorizontal
   */
  interface CIKeystoneCorrectionHorizontal extends CIFourCoordinateGeometryFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionhorizontal/3325525-focallength
    focalLength(): number;
    setFocalLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a keystone correction vertical filter.
   * doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionvertical
   */
  interface CIKeystoneCorrectionVertical extends CIFourCoordinateGeometryFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionvertical/3325532-focallength
    focalLength(): number;
    setFocalLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Lanczos scale transform filter.
   * doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform
   */
  interface CILanczosScaleTransform extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform/3228516-aspectratio
    aspectRatio(): number;
    setAspectRatio(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform/3228517-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform/3228518-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a lenticular halo generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator
   */
  interface CILenticularHaloGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228520-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228521-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228522-halooverlap
    haloOverlap(): number;
    setHaloOverlap(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228523-haloradius
    haloRadius(): number;
    setHaloRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228524-halowidth
    haloWidth(): number;
    setHaloWidth(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228525-striationcontrast
    striationContrast(): number;
    setStriationContrast(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228526-striationstrength
    striationStrength(): number;
    setStriationStrength(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228527-time
    time(): number;
    setTime(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a line overlay filter.
   * doc://com.apple.documentation/documentation/coreimage/cilineoverlay
   */
  interface CILineOverlay extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228529-nrnoiselevel
    NRNoiseLevel(): number;
    setNRNoiseLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228530-nrsharpness
    NRSharpness(): number;
    setNRSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228531-contrast
    contrast(): number;
    setContrast(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228532-edgeintensity
    edgeIntensity(): number;
    setEdgeIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228533-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228534-threshold
    threshold(): number;
    setThreshold(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a line screen filter.
   * doc://com.apple.documentation/documentation/coreimage/cilinescreen
   */
  interface CILineScreen extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228536-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228537-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228538-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228539-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilinescreen/3228540-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a linear gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cilineargradient
   */
  interface CILinearGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228542-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228543-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228544-point0
    point0(): cocoascript.CGPoint;
    setPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cilineargradient/3228545-point1
    point1(): cocoascript.CGPoint;
    setPoint1(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a linear-to-sRGB filter.
   * doc://com.apple.documentation/documentation/coreimage/cilineartosrgbtonecurve
   */
  interface CILinearToSRGBToneCurve extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cilineartosrgbtonecurve/3228547-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mask-to-alpha filter.
   * doc://com.apple.documentation/documentation/coreimage/cimasktoalpha
   */
  interface CIMaskToAlpha extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimasktoalpha/3228549-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a masked variable blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur
   */
  interface CIMaskedVariableBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur/3228551-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur/3228552-mask
    mask(): cocoascript.CIImage;
    setMask(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimaskedvariableblur/3228553-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a maximum component filter.
   * doc://com.apple.documentation/documentation/coreimage/cimaximumcomponent
   */
  interface CIMaximumComponent extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimaximumcomponent/3228555-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a median filter.
   * doc://com.apple.documentation/documentation/coreimage/cimedian
   */
  interface CIMedian extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimedian/3228557-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mesh generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cimeshgenerator
   */
  interface CIMeshGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimeshgenerator/3228559-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimeshgenerator/3228560-mesh
    mesh(): cocoascript.NSArray;
    setMesh(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimeshgenerator/3228561-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a minimum component filter.
   * doc://com.apple.documentation/documentation/coreimage/ciminimumcomponent
   */
  interface CIMinimumComponent extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciminimumcomponent/3228563-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mix filter.
   * doc://com.apple.documentation/documentation/coreimage/cimix
   */
  interface CIMix extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimix/3228565-amount
    amount(): number;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimix/3228566-backgroundimage
    backgroundImage(): cocoascript.CIImage;
    setBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimix/3228567-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mod transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cimodtransition
   */
  interface CIModTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228569-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228570-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228571-compression
    compression(): number;
    setCompression(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228572-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologygradient
   */
  interface CIMorphologyGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologygradient/3228574-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologygradient/3228575-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology maximum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologymaximum
   */
  interface CIMorphologyMaximum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologymaximum/3228577-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologymaximum/3228578-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology minimum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologyminimum
   */
  interface CIMorphologyMinimum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyminimum/3228580-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyminimum/3228581-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology rectangle maximum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum
   */
  interface CIMorphologyRectangleMaximum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum/3228583-height
    height(): number;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum/3228584-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectanglemaximum/3228585-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology rectangle minimum filter.
   * doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum
   */
  interface CIMorphologyRectangleMinimum extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum/3228587-height
    height(): number;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum/3228588-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimorphologyrectangleminimum/3228589-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a motion blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cimotionblur
   */
  interface CIMotionBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimotionblur/3228591-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimotionblur/3228592-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimotionblur/3228593-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a noise reduction filter.
   * doc://com.apple.documentation/documentation/coreimage/cinoisereduction
   */
  interface CINoiseReduction extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cinoisereduction/3228595-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinoisereduction/3228596-noiselevel
    noiseLevel(): number;
    setNoiseLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/cinoisereduction/3228597-sharpness
    sharpness(): number;
    setSharpness(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an optical tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cioptile
   */
  interface CIOpTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cioptile/3228599-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cioptile/3228600-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cioptile/3228601-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cioptile/3228602-scale
    scale(): number;
    setScale(): void;
    // doc://com.apple.documentation/documentation/coreimage/cioptile/3228603-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a page curl transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cipagecurltransition
   */
  interface CIPageCurlTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228618-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228619-backsideimage
    backsideImage(): cocoascript.CIImage;
    setBacksideImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228620-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228621-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228622-shadingimage
    shadingImage(): cocoascript.CIImage;
    setShadingImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a page-curl-with-shadow transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition
   */
  interface CIPageCurlWithShadowTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228624-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228625-backsideimage
    backsideImage(): cocoascript.CIImage;
    setBacksideImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228626-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228627-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228628-shadowamount
    shadowAmount(): number;
    setShadowAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228629-shadowextent
    shadowExtent(): cocoascript.CGRect;
    setShadowExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228630-shadowsize
    shadowSize(): number;
    setShadowSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a palette centroid filter.
   * doc://com.apple.documentation/documentation/coreimage/cipalettecentroid
   */
  interface CIPaletteCentroid extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipalettecentroid/3228632-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipalettecentroid/3228633-paletteimage
    paletteImage(): cocoascript.CIImage;
    setPaletteImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipalettecentroid/3228634-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a palettize filter.
   * doc://com.apple.documentation/documentation/coreimage/cipalettize
   */
  interface CIPalettize extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipalettize/3228636-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipalettize/3228637-paletteimage
    paletteImage(): cocoascript.CIImage;
    setPaletteImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipalettize/3228638-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a parallelogram tile filter.
   * doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile
   */
  interface CIParallelogramTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228640-acuteangle
    acuteAngle(): number;
    setAcuteAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228641-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228642-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228643-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciparallelogramtile/3228644-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective correction filter.
   * doc://com.apple.documentation/documentation/coreimage/ciperspectivecorrection
   */
  interface CIPerspectiveCorrection extends CIFourCoordinateGeometryFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivecorrection/3228648-crop
    crop(): boolean;
    setCrop(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective rotate filter.
   * doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate
   */
  interface CIPerspectiveRotate extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325537-focallength
    focalLength(): number;
    setFocalLength(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325538-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325539-pitch
    pitch(): number;
    setPitch(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325540-roll
    roll(): number;
    setRoll(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325541-yaw
    yaw(): number;
    setYaw(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective tile filter.
   * doc://com.apple.documentation/documentation/coreimage/ciperspectivetile
   */
  interface CIPerspectiveTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228653-bottomleft
    bottomLeft(): cocoascript.CGPoint;
    setBottomLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228654-bottomright
    bottomRight(): cocoascript.CGPoint;
    setBottomRight(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228655-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228656-topleft
    topLeft(): cocoascript.CGPoint;
    setTopLeft(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228657-topright
    topRight(): cocoascript.CGPoint;
    setTopRight(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective transform filter.
   * doc://com.apple.documentation/documentation/coreimage/ciperspectivetransform
   */
  interface CIPerspectiveTransform extends CIFourCoordinateGeometryFilter {
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective transform with extent filter.
   * doc://com.apple.documentation/documentation/coreimage/ciperspectivetransformwithextent
   */
  interface CIPerspectiveTransformWithExtent extends CIFourCoordinateGeometryFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivetransformwithextent/3228667-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a photo-effect filter.
   * doc://com.apple.documentation/documentation/coreimage/ciphotoeffect
   */
  interface CIPhotoEffect extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciphotoeffect/3228672-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a pixellate filter.
   * doc://com.apple.documentation/documentation/coreimage/cipixellate
   */
  interface CIPixellate extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipixellate/3228674-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipixellate/3228675-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipixellate/3228676-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a pointillize filter.
   * doc://com.apple.documentation/documentation/coreimage/cipointillize
   */
  interface CIPointillize extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipointillize/3228678-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipointillize/3228679-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipointillize/3228680-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a radial gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/ciradialgradient
   */
  interface CIRadialGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228685-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228686-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228687-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228688-radius0
    radius0(): number;
    setRadius0(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciradialgradient/3228689-radius1
    radius1(): number;
    setRadius1(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a random generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cirandomgenerator
   */
  interface CIRandomGenerator extends CIFilter {
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a ripple transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cirippletransition
   */
  interface CIRippleTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228692-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228693-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228694-scale
    scale(): number;
    setScale(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228695-shadingimage
    shadingImage(): cocoascript.CIImage;
    setShadingImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228696-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a rounded rectangle generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator
   */
  interface CIRoundedRectangleGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator/3338737-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator/3338738-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciroundedrectanglegenerator/3338739-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an sRGB-to-linear filter.
   * doc://com.apple.documentation/documentation/coreimage/cisrgbtonecurvetolinear
   */
  interface CISRGBToneCurveToLinear extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisrgbtonecurvetolinear/3228698-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a saliency map filter.
   * doc://com.apple.documentation/documentation/coreimage/cisaliencymap
   */
  interface CISaliencyMap extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisaliencymap/3228700-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sepia-tone filter.
   * doc://com.apple.documentation/documentation/coreimage/cisepiatone
   */
  interface CISepiaTone extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisepiatone/3228702-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisepiatone/3228703-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a shaded material filter.
   * doc://com.apple.documentation/documentation/coreimage/cishadedmaterial
   */
  interface CIShadedMaterial extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cishadedmaterial/3228705-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cishadedmaterial/3228706-scale
    scale(): number;
    setScale(): void;
    // doc://com.apple.documentation/documentation/coreimage/cishadedmaterial/3228707-shadingimage
    shadingImage(): cocoascript.CIImage;
    setShadingImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sharpen luminance filter.
   * doc://com.apple.documentation/documentation/coreimage/cisharpenluminance
   */
  interface CISharpenLuminance extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisharpenluminance/3228709-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisharpenluminance/3228710-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisharpenluminance/3228711-sharpness
    sharpness(): number;
    setSharpness(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sixfold reflected tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile
   */
  interface CISixfoldReflectedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228713-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228714-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228715-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldreflectedtile/3228716-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sixfold rotated tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile
   */
  interface CISixfoldRotatedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228718-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228719-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228720-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisixfoldrotatedtile/3228721-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a smooth linear gradient filter.
   * doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient
   */
  interface CISmoothLinearGradient extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228723-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228724-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228725-point0
    point0(): cocoascript.CGPoint;
    setPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cismoothlineargradient/3228726-point1
    point1(): cocoascript.CGPoint;
    setPoint1(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a spot color filter.
   * doc://com.apple.documentation/documentation/coreimage/cispotcolor
   */
  interface CISpotColor extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228728-centercolor1
    centerColor1(): cocoascript.CIColor;
    setCenterColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228729-centercolor2
    centerColor2(): cocoascript.CIColor;
    setCenterColor2(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228730-centercolor3
    centerColor3(): cocoascript.CIColor;
    setCenterColor3(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228731-closeness1
    closeness1(): number;
    setCloseness1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228732-closeness2
    closeness2(): number;
    setCloseness2(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228733-closeness3
    closeness3(): number;
    setCloseness3(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228734-contrast1
    contrast1(): number;
    setContrast1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228735-contrast2
    contrast2(): number;
    setContrast2(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228736-contrast3
    contrast3(): number;
    setContrast3(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228737-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228738-replacementcolor1
    replacementColor1(): cocoascript.CIColor;
    setReplacementColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228739-replacementcolor2
    replacementColor2(): cocoascript.CIColor;
    setReplacementColor2(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228740-replacementcolor3
    replacementColor3(): cocoascript.CIColor;
    setReplacementColor3(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a spotlight filter.
   * doc://com.apple.documentation/documentation/coreimage/cispotlight
   */
  interface CISpotLight extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228742-brightness
    brightness(): number;
    setBrightness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228743-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228744-concentration
    concentration(): number;
    setConcentration(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228745-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228746-lightpointsat
    lightPointsAt(): cocoascript.CIVector;
    setLightPointsAt(): void;
    // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228747-lightposition
    lightPosition(): cocoascript.CIVector;
    setLightPosition(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a star-shine generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator
   */
  interface CIStarShineGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228749-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228750-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228751-crossangle
    crossAngle(): number;
    setCrossAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228752-crossopacity
    crossOpacity(): number;
    setCrossOpacity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228753-crossscale
    crossScale(): number;
    setCrossScale(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228754-crosswidth
    crossWidth(): number;
    setCrossWidth(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228755-epsilon
    epsilon(): number;
    setEpsilon(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228756-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a straighten filter.
   * doc://com.apple.documentation/documentation/coreimage/cistraighten
   */
  interface CIStraighten extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cistraighten/3228758-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistraighten/3228759-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a stripes generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cistripesgenerator
   */
  interface CIStripesGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228761-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228762-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228763-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228764-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistripesgenerator/3228765-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sunbeams generator filter.
   * doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator
   */
  interface CISunbeamsGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228767-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228768-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228769-maxstriationradius
    maxStriationRadius(): number;
    setMaxStriationRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228770-striationcontrast
    striationContrast(): number;
    setStriationContrast(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228771-striationstrength
    striationStrength(): number;
    setStriationStrength(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228772-sunradius
    sunRadius(): number;
    setSunRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228773-time
    time(): number;
    setTime(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a swipe transition filter.
   * doc://com.apple.documentation/documentation/coreimage/ciswipetransition
   */
  interface CISwipeTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228775-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228776-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228777-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228778-opacity
    opacity(): number;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciswipetransition/3228779-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a temperature and tint filter.
   * doc://com.apple.documentation/documentation/coreimage/citemperatureandtint
   */
  interface CITemperatureAndTint extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citemperatureandtint/3228781-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citemperatureandtint/3228782-neutral
    neutral(): cocoascript.CIVector;
    setNeutral(): void;
    // doc://com.apple.documentation/documentation/coreimage/citemperatureandtint/3228783-targetneutral
    targetNeutral(): cocoascript.CIVector;
    setTargetNeutral(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a text image generator filter.
   * doc://com.apple.documentation/documentation/coreimage/citextimagegenerator
   */
  interface CITextImageGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228785-fontname
    fontName(): cocoascript.NSString;
    setFontName(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228786-fontsize
    fontSize(): number;
    setFontSize(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228787-scalefactor
    scaleFactor(): number;
    setScaleFactor(): void;
    // doc://com.apple.documentation/documentation/coreimage/citextimagegenerator/3228788-text
    text(): cocoascript.NSString;
    setText(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a thermal filter.
   * doc://com.apple.documentation/documentation/coreimage/cithermal
   */
  interface CIThermal extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cithermal/3228790-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a tone curve filter.
   * doc://com.apple.documentation/documentation/coreimage/citonecurve
   */
  interface CIToneCurve extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228792-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228793-point0
    point0(): cocoascript.CGPoint;
    setPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228794-point1
    point1(): cocoascript.CGPoint;
    setPoint1(): void;
    // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228795-point2
    point2(): cocoascript.CGPoint;
    setPoint2(): void;
    // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228796-point3
    point3(): cocoascript.CGPoint;
    setPoint3(): void;
    // doc://com.apple.documentation/documentation/coreimage/citonecurve/3228797-point4
    point4(): cocoascript.CGPoint;
    setPoint4(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a triangle kaleidoscope filter.
   * doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope
   */
  interface CITriangleKaleidoscope extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228803-decay
    decay(): number;
    setDecay(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228804-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228805-point
    point(): cocoascript.CGPoint;
    setPoint(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228806-rotation
    rotation(): number;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228807-size
    size(): number;
    setSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a triangle tile filter.
   * doc://com.apple.documentation/documentation/coreimage/citriangletile
   */
  interface CITriangleTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228809-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228810-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228811-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citriangletile/3228812-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a twelvefold reflected tile filter.
   * doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile
   */
  interface CITwelvefoldReflectedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228814-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228815-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228816-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citwelvefoldreflectedtile/3228817-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an unsharp mask filter.
   * doc://com.apple.documentation/documentation/coreimage/ciunsharpmask
   */
  interface CIUnsharpMask extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciunsharpmask/3228819-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciunsharpmask/3228820-intensity
    intensity(): number;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciunsharpmask/3228821-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a vibrance filter.
   * doc://com.apple.documentation/documentation/coreimage/civibrance
   */
  interface CIVibrance extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/civibrance/3228823-amount
    amount(): number;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/civibrance/3228824-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a vignette-effect filter.
   * doc://com.apple.documentation/documentation/coreimage/civignetteeffect
   */
  interface CIVignetteEffect extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228830-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228831-falloff
    falloff(): number;
    setFalloff(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228832-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228833-intensity
    intensity(): number;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignetteeffect/3228834-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a vignette filter.
   * doc://com.apple.documentation/documentation/coreimage/civignette
   */
  interface CIVignette extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/civignette/3228826-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignette/3228827-intensity
    intensity(): number;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/civignette/3228828-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a white-point adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/ciwhitepointadjust
   */
  interface CIWhitePointAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciwhitepointadjust/3228836-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciwhitepointadjust/3228837-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an X-ray filter.
   * doc://com.apple.documentation/documentation/coreimage/cixray
   */
  interface CIXRay extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cixray/3228839-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a zoom blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cizoomblur
   */
  interface CIZoomBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cizoomblur/3228841-amount
    amount(): number;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cizoomblur/3228842-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cizoomblur/3228843-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/ciqrcodeerrorcorrectionlevel
  type CIQRCodeErrorCorrectionLevel = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodeeccversion
  type CIDataMatrixCodeECCVersion = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/coreimage/kciinputlocaltonemapamountkey
declare const kCIInputLocalToneMapAmountKey: cocoascript.CIRAWFilterOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/cirenderdestinationalphamode
  type CIRenderDestinationAlphaMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/cicontextoption
  type CIContextOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/coreimage/ciimagerepresentationoption
  type CIImageRepresentationOption = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliarysemanticsegmentationglassesmatte
declare const kCIImageAuxiliarySemanticSegmentationGlassesMatte: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliarysemanticsegmentationhairmatte
declare const kCIImageAuxiliarySemanticSegmentationHairMatte: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliarysemanticsegmentationskinmatte
declare const kCIImageAuxiliarySemanticSegmentationSkinMatte: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliarysemanticsegmentationskymatte
declare const kCIImageAuxiliarySemanticSegmentationSkyMatte: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimageauxiliarysemanticsegmentationteethmatte
declare const kCIImageAuxiliarySemanticSegmentationTeethMatte: cocoascript.CIImageOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagetonemaphdrtosdr
declare const kCIImageToneMapHDRtoSDR: cocoascript.CIImageOption;
declare namespace cocoascript {
  /**
   * The properties you use to configure a Core Image filter.
   * doc://com.apple.documentation/documentation/coreimage/cifilter-gce
   */
  interface CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifilter/3228048-outputimage
    outputImage(): cocoascript.CIImage;
    setOutputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a transition filter.
   * doc://com.apple.documentation/documentation/coreimage/citransitionfilter
   */
  interface CITransitionFilter extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citransitionfilter/3228799-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citransitionfilter/3228800-targetimage
    targetImage(): cocoascript.CIImage;
    setTargetImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citransitionfilter/3228801-time
    time(): number;
    setTime(): void;
  }
}
// doc://com.apple.documentation/documentation/coreimage/kcicontextallowlowpower
declare const kCIContextAllowLowPower: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kcicontextname
declare const kCIContextName: cocoascript.CIContextOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationavportraiteffectsmatte
declare const kCIImageRepresentationAVPortraitEffectsMatte: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationavsemanticsegmentationmattes
declare const kCIImageRepresentationAVSemanticSegmentationMattes: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationportraiteffectsmatteimage
declare const kCIImageRepresentationPortraitEffectsMatteImage: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationsemanticsegmentationglassesmatteimage
declare const kCIImageRepresentationSemanticSegmentationGlassesMatteImage: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationsemanticsegmentationhairmatteimage
declare const kCIImageRepresentationSemanticSegmentationHairMatteImage: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationsemanticsegmentationskinmatteimage
declare const kCIImageRepresentationSemanticSegmentationSkinMatteImage: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationsemanticsegmentationskymatteimage
declare const kCIImageRepresentationSemanticSegmentationSkyMatteImage: cocoascript.CIImageRepresentationOption;
// doc://com.apple.documentation/documentation/coreimage/kciimagerepresentationsemanticsegmentationteethmatteimage
declare const kCIImageRepresentationSemanticSegmentationTeethMatteImage: cocoascript.CIImageRepresentationOption;
