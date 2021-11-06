declare namespace cocoascript {
  /**
   * The component values defining a color in a specific color space.
   * https://developer.apple.com/documentation/coreimage/cicolor
   */
  interface CIColor extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cicolor/1437821-initwithcgcolor
    initWithCGColor(c: CGColorRef):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1528762-initwithcolor
    initWithColor(color: UIColor):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1502102-initwithred
    initWithRed_green_blue(r: CGFloat, g: CGFloat, b: CGFloat):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1438084-initwithred
    initWithRed_green_blue_alpha(r: CGFloat, g: CGFloat, b: CGFloat, a: CGFloat):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643576-initwithred
    initWithRed_green_blue_colorSpace(r: CGFloat, g: CGFloat, b: CGFloat, colorSpace: CGColorSpaceRef):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643572-initwithred
    initWithRed_green_blue_alpha_colorSpace(r: CGFloat, g: CGFloat, b: CGFloat, a: CGFloat, colorSpace: CGColorSpaceRef):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1502106-colorwithcgcolor
    colorWithCGColor(c: CGColorRef):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1437941-colorwithred
    colorWithRed_green_blue(r: CGFloat, g: CGFloat, b: CGFloat):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1502111-colorwithred
    colorWithRed_green_blue_alpha(r: CGFloat, g: CGFloat, b: CGFloat, a: CGFloat):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1438059-colorwithstring
    colorWithString(representation: string | cocoascript.NSString):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643579-colorwithred
    colorWithRed_green_blue_colorSpace(r: CGFloat, g: CGFloat, b: CGFloat, colorSpace: CGColorSpaceRef):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643575-colorwithred
    colorWithRed_green_blue_alpha_colorSpace(r: CGFloat, g: CGFloat, b: CGFloat, a: CGFloat, colorSpace: CGColorSpaceRef):CIColor;
    // https://developer.apple.com/documentation/coreimage/cicolor/1437917-colorspace
    colorSpace(): CGColorSpaceRef;
    setColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1437862-components
    components(): CGFloat;
    setComponents(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1438151-numberofcomponents
    numberOfComponents(): any;
    setNumberOfComponents(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1437969-red
    red(): CGFloat;
    setRed(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1437607-green
    green(): CGFloat;
    setGreen(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1438033-blue
    blue(): CGFloat;
    setBlue(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1437981-alpha
    alpha(): CGFloat;
    setAlpha(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1437910-stringrepresentation
    stringRepresentation(): string | cocoascript.NSString;
    setStringRepresentation(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643578-blackcolor
    blackColor(): CIColor;
    setBlackColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643569-bluecolor
    blueColor(): CIColor;
    setBlueColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643577-clearcolor
    clearColor(): CIColor;
    setClearColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643581-cyancolor
    cyanColor(): CIColor;
    setCyanColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643573-graycolor
    grayColor(): CIColor;
    setGrayColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643580-greencolor
    greenColor(): CIColor;
    setGreenColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643574-magentacolor
    magentaColor(): CIColor;
    setMagentaColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643570-redcolor
    redColor(): CIColor;
    setRedColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643571-whitecolor
    whiteColor(): CIColor;
    setWhiteColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolor/1643582-yellowcolor
    yellowColor(): CIColor;
    setYellowColor(): void;
    //
    alloc():CIColor;
    //
    init():CIColor;
  }
}

declare const CIColor: cocoascript.CIColor;
declare namespace cocoascript {
  /**
   * A representation of an image to be processed or produced by Core Image filters.
   * https://developer.apple.com/documentation/coreimage/ciimage
   */
  interface CIImage extends NSObject {
    // https://developer.apple.com/documentation/coreimage/ciimage/1438023-emptyimage
    emptyImage():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547012-imagewithcolor
    imageWithColor(color: CIColor):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547023-imagewithbitmapdata
    imageWithBitmapData_bytesPerRow_size_format_colorSpace(data: NSData, bytesPerRow: any, size: CGSize, format: CIFormat, colorSpace: CGColorSpaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547025-imagewithcgimage
    imageWithCGImage(image: CGImageRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547021-imagewithcgimage
    imageWithCGImage_options(image: CGImageRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547022-imagewithcglayer
    imageWithCGLayer(layer: CGLayerRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1546998-imagewithcglayer
    imageWithCGLayer_options(layer: CGLayerRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547027-imagewithcontentsofurl
    imageWithContentsOfURL(url: NSURL):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1546997-imagewithcontentsofurl
    imageWithContentsOfURL_options(url: NSURL, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547007-imagewithcvimagebuffer
    imageWithCVImageBuffer(imageBuffer: CVImageBufferRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547028-imagewithcvimagebuffer
    imageWithCVImageBuffer_options(imageBuffer: CVImageBufferRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547005-imagewithcvpixelbuffer
    imageWithCVPixelBuffer(pixelBuffer: CVPixelBufferRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547003-imagewithcvpixelbuffer
    imageWithCVPixelBuffer_options(pixelBuffer: CVPixelBufferRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547029-imagewithdata
    imageWithData(data: NSData):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547016-imagewithdata
    imageWithData_options(data: NSData, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1579115-imagewithimageprovider
    imageWithImageProvider_size__format_colorSpace_options(p: CIImage, width: any, height: any, f: CIFormat, cs: CGColorSpaceRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547006-imagewithtexture
    imageWithTexture_size_flipped_colorSpace(name: number, size: CGSize, flipped: BOOL, colorSpace: CGColorSpaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547000-imagewithtexture
    imageWithTexture_size_flipped_options(name: number, size: CGSize, flipped: BOOL, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1546999-imagewithmtltexture
    imageWithMTLTexture_options(texture: any, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547024-imagewithiosurface
    imageWithIOSurface(surface: IOSurfaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1547001-imagewithiosurface
    imageWithIOSurface_options(surface: IOSurfaceRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437947-initwithcolor
    initWithColor(color: CIColor):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437857-initwithbitmapdata
    initWithBitmapData_bytesPerRow_size_format_colorSpace(data: NSData, bytesPerRow: any, size: CGSize, format: CIFormat, colorSpace: CGColorSpaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437986-initwithcgimage
    initWithCGImage(image: CGImageRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437764-initwithcgimage
    initWithCGImage_options(image: CGImageRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1535335-initwithbitmapimagerep
    initWithBitmapImageRep(bitmapImageRep: NSBitmapImageRep):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1624119-initwithimage
    initWithImage(image: UIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1624098-initwithimage
    initWithImage_options(image: UIImage, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438065-initwithcglayer
    initWithCGLayer(layer: CGLayerRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437687-initwithcglayer
    initWithCGLayer_options(layer: CGLayerRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437908-initwithcontentsofurl
    initWithContentsOfURL(url: NSURL):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437867-initwithcontentsofurl
    initWithContentsOfURL_options(url: NSURL, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438012-initwithcvimagebuffer
    initWithCVImageBuffer(imageBuffer: CVImageBufferRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437617-initwithcvimagebuffer
    initWithCVImageBuffer_options(imageBuffer: CVImageBufferRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438072-initwithcvpixelbuffer
    initWithCVPixelBuffer(pixelBuffer: CVPixelBufferRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438209-initwithcvpixelbuffer
    initWithCVPixelBuffer_options(pixelBuffer: CVPixelBufferRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437925-initwithdata
    initWithData(data: NSData):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438032-initwithdata
    initWithData_options(data: NSData, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437868-initwithimageprovider
    initWithImageProvider_size__format_colorSpace_options(p: CIImage, width: any, height: any, f: CIFormat, cs: CGColorSpaceRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438015-initwithtexture
    initWithTexture_size_flipped_colorSpace(name: number, size: CGSize, flipped: BOOL, colorSpace: CGColorSpaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437880-initwithtexture
    initWithTexture_size_flipped_options(name: number, size: CGSize, flipped: BOOL, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437890-initwithmtltexture
    initWithMTLTexture_options(texture: any, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438030-initwithiosurface
    initWithIOSurface(surface: IOSurfaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438181-initwithiosurface
    initWithIOSurface_options(surface: IOSurfaceRef, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437670-initwithiosurface
    initWithIOSurface_plane_format_options(surface: IOSurfaceRef, plane: any, format: CIFormat, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437589-imagebyapplyingfilter
    imageByApplyingFilter_withInputParameters(filterName: string | cocoascript.NSString, params: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2915368-imagebyapplyingfilter
    imageByApplyingFilter(filterName: string | cocoascript.NSString):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438203-imagebyapplyingtransform
    imageByApplyingTransform(matrix: CGAffineTransform):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437833-imagebycroppingtorect
    imageByCroppingToRect(rect: CGRect):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438223-imagebyapplyingorientation
    imageByApplyingOrientation(orientation: number):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437628-imagebyclampingtoextent
    imageByClampingToExtent():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645893-imagebyclampingtorect
    imageByClampingToRect(rect: CGRect):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437837-imagebycompositingoverimage
    imageByCompositingOverImage(dest: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645896-imagebycolormatchingcolorspaceto
    imageByColorMatchingColorSpaceToWorkingSpace(colorSpace: CGColorSpaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645898-imagebycolormatchingworkingspace
    imageByColorMatchingWorkingSpaceToColorSpace(colorSpace: CGColorSpaceRef):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645894-imagebypremultiplyingalpha
    imageByPremultiplyingAlpha():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645892-imagebyunpremultiplyingalpha
    imageByUnpremultiplyingAlpha():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645891-imagebysettingalphaoneinextent
    imageBySettingAlphaOneInExtent(extent: CGRect):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645897-imagebyapplyinggaussianblurwiths
    imageByApplyingGaussianBlurWithSigma(sigma: number):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645895-imagebysettingproperties
    imageBySettingProperties(properties: NSDictionary):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2966521-imagebyinsertingintermediate
    imageByInsertingIntermediate():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2966522-imagebyinsertingintermediate
    imageByInsertingIntermediate(cache: BOOL):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437804-definition
    definition(): CIFilterShape;
    setDefinition(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437996-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437733-properties
    properties(): id;
    setProperties(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1438195-url
    url(): NSURL;
    setUrl(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437750-colorspace
    colorSpace(): CGColorSpaceRef;
    setColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437930-imagetransformfororientation
    imageTransformForOrientation(orientation: number):CGAffineTransform;
    // https://developer.apple.com/documentation/coreimage/ciimage/1534432-drawatpoint
    drawAtPoint_fromRect_operation_fraction(point: NSPoint, fromRect: NSRect, op: NSCompositingOperation, delta: CGFloat):void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1534407-drawinrect
    drawInRect_fromRect_operation_fraction(rect: NSRect, fromRect: NSRect, op: NSCompositingOperation, delta: CGFloat):void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1645889-autoadjustmentfilters
    autoAdjustmentFilters():CIFilter;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437792-autoadjustmentfilterswithoptions
    autoAdjustmentFiltersWithOptions(options: CIImage):CIFilter;
    // https://developer.apple.com/documentation/coreimage/ciimage/1437994-regionofinterestforimage
    regionOfInterestForImage_inRect(image: CIImage, rect: CGRect):CGRect;
    // https://developer.apple.com/documentation/coreimage/ciimage/2919727-imagebyapplyingcgorientation
    imageByApplyingCGOrientation(orientation: CGImagePropertyOrientation):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2919726-imagetransformforcgorientation
    imageTransformForCGOrientation(orientation: CGImagePropertyOrientation):CGAffineTransform;
    // https://developer.apple.com/documentation/coreimage/ciimage/2867429-imagebysamplingnearest
    imageBySamplingNearest():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2867346-imagebysamplinglinear
    imageBySamplingLinear():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/1687603-cgimage
    CGImage(): CGImageRef;
    setCGImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/1687604-pixelbuffer
    pixelBuffer(): CVPixelBufferRef;
    setPixelBuffer(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/2902251-depthdata
    depthData(): AVDepthData;
    setDepthData(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/2976440-portraiteffectsmatte
    portraitEffectsMatte(): AVPortraitEffectsMatte;
    setPortraitEffectsMatte(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3152399-initwithcgimagesource
    initWithCGImageSource_index_options(source: CGImageSourceRef, index: any, dict: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998421-initwithdepthdata
    initWithDepthData(data: AVDepthData):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998422-initwithdepthdata
    initWithDepthData_options(data: AVDepthData, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998423-initwithportaiteffectsmatte
    initWithPortaitEffectsMatte(matte: AVPortraitEffectsMatte):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998424-initwithportaiteffectsmatte
    initWithPortaitEffectsMatte_options(matte: AVPortraitEffectsMatte, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/3242779-initwithsemanticsegmentationmatt
    initWithSemanticSegmentationMatte(matte: AVSemanticSegmentationMatte):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/3242780-initwithsemanticsegmentationmatt
    initWithSemanticSegmentationMatte_options(matte: AVSemanticSegmentationMatte, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/3242781-semanticsegmentationmatte
    semanticSegmentationMatte(): AVSemanticSegmentationMatte;
    setSemanticSegmentationMatte(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074421-blackimage
    blackImage(): CIImage;
    setBlackImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074422-blueimage
    blueImage(): CIImage;
    setBlueImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074423-clearimage
    clearImage(): CIImage;
    setClearImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074424-cyanimage
    cyanImage(): CIImage;
    setCyanImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074425-grayimage
    grayImage(): CIImage;
    setGrayImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074426-greenimage
    greenImage(): CIImage;
    setGreenImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074427-magentaimage
    magentaImage(): CIImage;
    setMagentaImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074428-redimage
    redImage(): CIImage;
    setRedImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074429-whiteimage
    whiteImage(): CIImage;
    setWhiteImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3074430-yellowimage
    yellowImage(): CIImage;
    setYellowImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciimage/3334939-imagebyapplyingtransform
    imageByApplyingTransform_highQualityDownsample(matrix: CGAffineTransform, highQualityDownsample: BOOL):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/3152398-imagewithcgimagesource
    imageWithCGImageSource_index_options(source: CGImageSourceRef, index: any, dict: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998417-imagewithdepthdata
    imageWithDepthData(data: AVDepthData):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998418-imagewithdepthdata
    imageWithDepthData_options(data: AVDepthData, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998419-imagewithportaiteffectsmatte
    imageWithPortaitEffectsMatte(matte: AVPortraitEffectsMatte):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/2998420-imagewithportaiteffectsmatte
    imageWithPortaitEffectsMatte_options(matte: AVPortraitEffectsMatte, options: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/3242777-imagewithsemanticsegmentationmat
    imageWithSemanticSegmentationMatte(matte: AVSemanticSegmentationMatte):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimage/3242778-imagewithsemanticsegmentationmat
    imageWithSemanticSegmentationMatte_options(matte: AVSemanticSegmentationMatte, options: CIImage):CIImage;
    //
    alloc():CIImage;
    //
    init():CIImage;
  }
}

declare const CIImage: cocoascript.CIImage;
declare namespace cocoascript {
  /**
   * An object that retrieves pixel samples for processing by a filter kernel.
   * https://developer.apple.com/documentation/coreimage/cisampler
   */
  interface CISampler extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cisampler/1555075-samplerwithimage
    samplerWithImage(im: CIImage):CISampler;
    // https://developer.apple.com/documentation/coreimage/cisampler/1555078-samplerwithimage
    samplerWithImage_keysAndValues(im: CIImage, ...key0: Array<id>):CISampler;
    // https://developer.apple.com/documentation/coreimage/cisampler/1555076-samplerwithimage
    samplerWithImage_options(im: CIImage, dict: NSDictionary):CISampler;
    // https://developer.apple.com/documentation/coreimage/cisampler/1438117-initwithimage
    initWithImage(im: CIImage):CISampler;
    // https://developer.apple.com/documentation/coreimage/cisampler/1555077-initwithimage
    initWithImage_keysAndValues(im: CIImage, ...key0: Array<id>):CISampler;
    // https://developer.apple.com/documentation/coreimage/cisampler/1437963-initwithimage
    initWithImage_options(im: CIImage, dict: NSDictionary):CISampler;
    // https://developer.apple.com/documentation/coreimage/cisampler/1437877-definition
    definition(): CIFilterShape;
    setDefinition(): void;
    // https://developer.apple.com/documentation/coreimage/cisampler/1437872-extent
    extent(): CGRect;
    setExtent(): void;
    //
    alloc():CISampler;
    //
    init():CISampler;
  }
}

declare const CISampler: cocoascript.CISampler;
declare namespace cocoascript {
  /**
   * An image processor that produces an image by manipulating one or more input images or by generating new image data.
   * https://developer.apple.com/documentation/coreimage/cifilter
   */
  interface CIFilter extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cifilter/1438255-filterwithname
    filterWithName(name: string | cocoascript.NSString):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437894-filterwithname
    filterWithName_withInputParameters(name: string | cocoascript.NSString, params: CIFilter):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cifilter/1562057-filterwithname
    filterWithName_keysAndValues(name: string | cocoascript.NSString, ...key0: Array<id>):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437879-filterwithimagedata
    filterWithImageData_options(data: NSData, options: CIFilter):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438096-filterwithimageurl
    filterWithImageURL_options(url: NSURL, options: CIFilter):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cifilter/2138288-filterwithcvpixelbuffer
    filterWithCVPixelBuffer_properties_options(pixelBuffer: CVPixelBufferRef, properties: NSDictionary, options: CIFilter):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437595-filternamesincategories
    filterNamesInCategories(categories: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438145-filternamesincategory
    filterNamesInCategory(category: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437889-registerfiltername
    registerFilterName_constructor_classAttributes(name: string | cocoascript.NSString, anObject: CIFilterConstructor, attributes: CIFilter):void;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437997-setname
    name():NSString;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438276-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437661-attributes
    attributes(): id;
    setAttributes(): void;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438013-inputkeys
    inputKeys(): string | cocoascript.NSString;
    setInputKeys(): void;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438122-outputkeys
    outputKeys(): string | cocoascript.NSString;
    setOutputKeys(): void;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438169-outputimage
    outputImage(): CIImage;
    setOutputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437902-setdefaults
    setDefaults():void;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438077-apply
    apply_arguments_options(k: CIKernel, args: NSArray, dict: CIFilter):CIImage;
    // https://developer.apple.com/documentation/coreimage/cifilter/1562058-apply
    apply(...k: Array<CIKernel>):CIImage;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437697-localizednameforfiltername
    localizedNameForFilterName(filterName: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438057-localizednameforcategory
    localizedNameForCategory(category: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437591-localizeddescriptionforfilternam
    localizedDescriptionForFilterName(filterName: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/coreimage/cifilter/1437642-localizedreferencedocumentationf
    localizedReferenceDocumentationForFilterName(filterName: string | cocoascript.NSString):NSURL;
    // https://developer.apple.com/documentation/coreimage/cifilter/1427521-viewforuiconfiguration
    viewForUIConfiguration_excludedKeys(inUIConfiguration: NSDictionary, inKeys: NSArray):IKFilterUIView;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438006-serializedxmpfromfilters
    serializedXMPFromFilters_inputImageExtent(filters: CIFilter, extent: CGRect):NSData;
    // https://developer.apple.com/documentation/coreimage/cifilter/1438237-filterarrayfromserializedxmp
    filterArrayFromSerializedXMP_inputImageExtent_error(xmpData: NSData, extent: CGRect, outError: NSError):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cifilter/3242782-supportedrawcameramodels
    supportedRawCameraModels():NSString;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228259-cmykhalftone
    CMYKHalftone():CICMYKHalftone;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547110-kmeansfilter
    KMeansFilter():CIKMeans;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228260-labdeltae
    LabDeltaE():CILabDeltaE;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228261-pdf417barcodegenerator
    PDF417BarcodeGenerator():CIPDF417BarcodeGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228262-qrcodegenerator
    QRCodeGenerator():CIQRCodeGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228263-accordionfoldtransitionfilter
    accordionFoldTransitionFilter():CIAccordionFoldTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228264-additioncompositingfilter
    additionCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228265-affineclampfilter
    affineClampFilter():CIAffineClamp;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228266-affinetilefilter
    affineTileFilter():CIAffineTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547111-areaaveragefilter
    areaAverageFilter():CIAreaAverage;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547112-areahistogramfilter
    areaHistogramFilter():CIAreaHistogram;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547113-areamaximumalphafilter
    areaMaximumAlphaFilter():CIAreaMaximumAlpha;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547114-areamaximumfilter
    areaMaximumFilter():CIAreaMaximum;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547115-areaminmaxfilter
    areaMinMaxFilter():CIAreaMinMax;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547116-areaminmaxredfilter
    areaMinMaxRedFilter():CIAreaMinMaxRed;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547117-areaminimumalphafilter
    areaMinimumAlphaFilter():CIAreaMinimumAlpha;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547118-areaminimumfilter
    areaMinimumFilter():CIAreaMinimum;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228267-attributedtextimagegeneratorfilt
    attributedTextImageGeneratorFilter():CIAttributedTextImageGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228268-azteccodegeneratorfilter
    aztecCodeGeneratorFilter():CIAztecCodeGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228269-barcodegeneratorfilter
    barcodeGeneratorFilter():CIBarcodeGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228270-barsswipetransitionfilter
    barsSwipeTransitionFilter():CIBarsSwipeTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228271-bicubicscaletransformfilter
    bicubicScaleTransformFilter():CIBicubicScaleTransform;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228272-blendwithalphamaskfilter
    blendWithAlphaMaskFilter():CIBlendWithMask;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228273-blendwithbluemaskfilter
    blendWithBlueMaskFilter():CIBlendWithMask;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228274-blendwithmaskfilter
    blendWithMaskFilter():CIBlendWithMask;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228275-blendwithredmaskfilter
    blendWithRedMaskFilter():CIBlendWithMask;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228276-bloomfilter
    bloomFilter():CIBloom;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228277-bokehblurfilter
    bokehBlurFilter():CIBokehBlur;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228278-boxblurfilter
    boxBlurFilter():CIBoxBlur;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600138-bumpdistortionfilter
    bumpDistortionFilter():CIBumpDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600139-bumpdistortionlinearfilter
    bumpDistortionLinearFilter():CIBumpDistortionLinear;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228279-checkerboardgeneratorfilter
    checkerboardGeneratorFilter():CICheckerboardGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600140-circlesplashdistortionfilter
    circleSplashDistortionFilter():CICircleSplashDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228280-circularscreenfilter
    circularScreenFilter():CICircularScreen;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600141-circularwrapfilter
    circularWrapFilter():CICircularWrap;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228281-code128barcodegeneratorfilter
    code128BarcodeGeneratorFilter():CICode128BarcodeGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547119-colorabsolutedifferencefilter
    colorAbsoluteDifferenceFilter():CIColorAbsoluteDifference;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228282-colorblendmodefilter
    colorBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228283-colorburnblendmodefilter
    colorBurnBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228284-colorclampfilter
    colorClampFilter():CIColorClamp;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228285-colorcontrolsfilter
    colorControlsFilter():CIColorControls;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228286-colorcrosspolynomialfilter
    colorCrossPolynomialFilter():CIColorCrossPolynomial;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228287-colorcubefilter
    colorCubeFilter():CIColorCube;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228288-colorcubewithcolorspacefilter
    colorCubeWithColorSpaceFilter():CIColorCubeWithColorSpace;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228289-colorcubesmixedwithmaskfilter
    colorCubesMixedWithMaskFilter():CIColorCubesMixedWithMask;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228290-colorcurvesfilter
    colorCurvesFilter():CIColorCurves;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228291-colordodgeblendmodefilter
    colorDodgeBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228292-colorinvertfilter
    colorInvertFilter():CIColorInvert;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228293-colormapfilter
    colorMapFilter():CIColorMap;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228294-colormatrixfilter
    colorMatrixFilter():CIColorMatrix;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228295-colormonochromefilter
    colorMonochromeFilter():CIColorMonochrome;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228296-colorpolynomialfilter
    colorPolynomialFilter():CIColorPolynomial;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228297-colorposterizefilter
    colorPosterizeFilter():CIColorPosterize;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547120-colorthresholdfilter
    colorThresholdFilter():CIColorThreshold;
    // https://developer.apple.com/documentation/coreimage/cifilter/3584770-colorthresholdotsufilter
    colorThresholdOtsuFilter():CIColorThresholdOtsu;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547121-columnaveragefilter
    columnAverageFilter():CIColumnAverage;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228298-comiceffectfilter
    comicEffectFilter():CIComicEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228299-convolution3x3filter
    convolution3X3Filter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228300-convolution5x5filter
    convolution5X5Filter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228301-convolution7x7filter
    convolution7X7Filter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228302-convolution9horizontalfilter
    convolution9HorizontalFilter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228303-convolution9verticalfilter
    convolution9VerticalFilter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3750385-convolutionrgb3x3filter
    convolutionRGB3X3Filter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3750386-convolutionrgb5x5filter
    convolutionRGB5X5Filter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3750387-convolutionrgb7x7filter
    convolutionRGB7X7Filter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3750388-convolutionrgb9horizontalfilter
    convolutionRGB9HorizontalFilter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3750389-convolutionrgb9verticalfilter
    convolutionRGB9VerticalFilter():CIConvolution;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228304-copymachinetransitionfilter
    copyMachineTransitionFilter():CICopyMachineTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228305-coremlmodelfilter
    coreMLModelFilter():CICoreMLModel;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228306-crystallizefilter
    crystallizeFilter():CICrystallize;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228307-darkenblendmodefilter
    darkenBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228308-depthoffieldfilter
    depthOfFieldFilter():CIDepthOfField;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228309-depthtodisparityfilter
    depthToDisparityFilter():CIDepthToDisparity;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228310-differenceblendmodefilter
    differenceBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228311-discblurfilter
    discBlurFilter():CIDiscBlur;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228312-disintegratewithmasktransitionfi
    disintegrateWithMaskTransitionFilter():CIDisintegrateWithMaskTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228313-disparitytodepthfilter
    disparityToDepthFilter():CIDisparityToDepth;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600142-displacementdistortionfilter
    displacementDistortionFilter():CIDisplacementDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228314-dissolvetransitionfilter
    dissolveTransitionFilter():CIDissolveTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228315-ditherfilter
    ditherFilter():CIDither;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228316-divideblendmodefilter
    divideBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228317-documentenhancerfilter
    documentEnhancerFilter():CIDocumentEnhancer;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228318-dotscreenfilter
    dotScreenFilter():CIDotScreen;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600143-drostefilter
    drosteFilter():CIDroste;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228319-edgepreserveupsamplefilter
    edgePreserveUpsampleFilter():CIEdgePreserveUpsample;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228320-edgeworkfilter
    edgeWorkFilter():CIEdgeWork;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228321-edgesfilter
    edgesFilter():CIEdges;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228322-eightfoldreflectedtilefilter
    eightfoldReflectedTileFilter():CIEightfoldReflectedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228323-exclusionblendmodefilter
    exclusionBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228324-exposureadjustfilter
    exposureAdjustFilter():CIExposureAdjust;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228325-falsecolorfilter
    falseColorFilter():CIFalseColor;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228326-flashtransitionfilter
    flashTransitionFilter():CIFlashTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228327-fourfoldreflectedtilefilter
    fourfoldReflectedTileFilter():CIFourfoldReflectedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228328-fourfoldrotatedtilefilter
    fourfoldRotatedTileFilter():CIFourfoldRotatedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228329-fourfoldtranslatedtilefilter
    fourfoldTranslatedTileFilter():CIFourfoldTranslatedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3325508-gaborgradientsfilter
    gaborGradientsFilter():CIGaborGradients;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228330-gammaadjustfilter
    gammaAdjustFilter():CIGammaAdjust;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228331-gaussianblurfilter
    gaussianBlurFilter():CIGaussianBlur;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228332-gaussiangradientfilter
    gaussianGradientFilter():CIGaussianGradient;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600144-glassdistortionfilter
    glassDistortionFilter():CIGlassDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600145-glasslozengefilter
    glassLozengeFilter():CIGlassLozenge;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228333-glidereflectedtilefilter
    glideReflectedTileFilter():CIGlideReflectedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228334-gloomfilter
    gloomFilter():CIGloom;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228335-hardlightblendmodefilter
    hardLightBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228336-hatchedscreenfilter
    hatchedScreenFilter():CIHatchedScreen;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228337-heightfieldfrommaskfilter
    heightFieldFromMaskFilter():CIHeightFieldFromMask;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228338-hexagonalpixellatefilter
    hexagonalPixellateFilter():CIHexagonalPixellate;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228339-highlightshadowadjustfilter
    highlightShadowAdjustFilter():CIHighlightShadowAdjust;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547122-histogramdisplayfilter
    histogramDisplayFilter():CIHistogramDisplay;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600146-holedistortionfilter
    holeDistortionFilter():CIHoleDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228340-hueadjustfilter
    hueAdjustFilter():CIHueAdjust;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228341-hueblendmodefilter
    hueBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228342-huesaturationvaluegradientfilter
    hueSaturationValueGradientFilter():CIHueSaturationValueGradient;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228343-kaleidoscopefilter
    kaleidoscopeFilter():CIKaleidoscope;
    // https://developer.apple.com/documentation/coreimage/cifilter/3325509-keystonecorrectioncombinedfilter
    keystoneCorrectionCombinedFilter():CIKeystoneCorrectionCombined;
    // https://developer.apple.com/documentation/coreimage/cifilter/3325510-keystonecorrectionhorizontalfilt
    keystoneCorrectionHorizontalFilter():CIKeystoneCorrectionHorizontal;
    // https://developer.apple.com/documentation/coreimage/cifilter/3325511-keystonecorrectionverticalfilter
    keystoneCorrectionVerticalFilter():CIKeystoneCorrectionVertical;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228344-lanczosscaletransformfilter
    lanczosScaleTransformFilter():CILanczosScaleTransform;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228345-lenticularhalogeneratorfilter
    lenticularHaloGeneratorFilter():CILenticularHaloGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600147-lighttunnelfilter
    lightTunnelFilter():CILightTunnel;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228346-lightenblendmodefilter
    lightenBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228347-lineoverlayfilter
    lineOverlayFilter():CILineOverlay;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228348-linescreenfilter
    lineScreenFilter():CILineScreen;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228349-linearburnblendmodefilter
    linearBurnBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228350-lineardodgeblendmodefilter
    linearDodgeBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228351-lineargradientfilter
    linearGradientFilter():CILinearGradient;
    // https://developer.apple.com/documentation/coreimage/cifilter/3801604-linearlightblendmodefilter
    linearLightBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228352-lineartosrgbtonecurvefilter
    linearToSRGBToneCurveFilter():CILinearToSRGBToneCurve;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228353-luminosityblendmodefilter
    luminosityBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228354-masktoalphafilter
    maskToAlphaFilter():CIMaskToAlpha;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228355-maskedvariableblurfilter
    maskedVariableBlurFilter():CIMaskedVariableBlur;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228356-maximumcomponentfilter
    maximumComponentFilter():CIMaximumComponent;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228357-maximumcompositingfilter
    maximumCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228358-medianfilter
    medianFilter():CIMedian;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228359-meshgeneratorfilter
    meshGeneratorFilter():CIMeshGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228360-minimumcomponentfilter
    minimumComponentFilter():CIMinimumComponent;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228361-minimumcompositingfilter
    minimumCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228362-mixfilter
    mixFilter():CIMix;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228363-modtransitionfilter
    modTransitionFilter():CIModTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228364-morphologygradientfilter
    morphologyGradientFilter():CIMorphologyGradient;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228365-morphologymaximumfilter
    morphologyMaximumFilter():CIMorphologyMaximum;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228366-morphologyminimumfilter
    morphologyMinimumFilter():CIMorphologyMinimum;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228367-morphologyrectanglemaximumfilter
    morphologyRectangleMaximumFilter():CIMorphologyRectangleMaximum;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228368-morphologyrectangleminimumfilter
    morphologyRectangleMinimumFilter():CIMorphologyRectangleMinimum;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228369-motionblurfilter
    motionBlurFilter():CIMotionBlur;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228370-multiplyblendmodefilter
    multiplyBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228371-multiplycompositingfilter
    multiplyCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600148-ninepartstretchedfilter
    ninePartStretchedFilter():CINinePartStretched;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600149-nineparttiledfilter
    ninePartTiledFilter():CINinePartTiled;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228372-noisereductionfilter
    noiseReductionFilter():CINoiseReduction;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228373-optilefilter
    opTileFilter():CIOpTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228374-overlayblendmodefilter
    overlayBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228375-pagecurltransitionfilter
    pageCurlTransitionFilter():CIPageCurlTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228376-pagecurlwithshadowtransitionfilt
    pageCurlWithShadowTransitionFilter():CIPageCurlWithShadowTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228377-palettecentroidfilter
    paletteCentroidFilter():CIPaletteCentroid;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228378-palettizefilter
    palettizeFilter():CIPalettize;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228379-parallelogramtilefilter
    parallelogramTileFilter():CIParallelogramTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3750390-personsegmentationfilter
    personSegmentationFilter():CIPersonSegmentation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228380-perspectivecorrectionfilter
    perspectiveCorrectionFilter():CIPerspectiveCorrection;
    // https://developer.apple.com/documentation/coreimage/cifilter/3325512-perspectiverotatefilter
    perspectiveRotateFilter():CIPerspectiveRotate;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228381-perspectivetilefilter
    perspectiveTileFilter():CIPerspectiveTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228382-perspectivetransformfilter
    perspectiveTransformFilter():CIPerspectiveTransform;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228383-perspectivetransformwithextentfi
    perspectiveTransformWithExtentFilter():CIPerspectiveTransformWithExtent;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228384-photoeffectchromefilter
    photoEffectChromeFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228385-photoeffectfadefilter
    photoEffectFadeFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228386-photoeffectinstantfilter
    photoEffectInstantFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228387-photoeffectmonofilter
    photoEffectMonoFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228388-photoeffectnoirfilter
    photoEffectNoirFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228389-photoeffectprocessfilter
    photoEffectProcessFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228390-photoeffecttonalfilter
    photoEffectTonalFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228391-photoeffecttransferfilter
    photoEffectTransferFilter():CIPhotoEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228392-pinlightblendmodefilter
    pinLightBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600150-pinchdistortionfilter
    pinchDistortionFilter():CIPinchDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228393-pixellatefilter
    pixellateFilter():CIPixellate;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228394-pointillizefilter
    pointillizeFilter():CIPointillize;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228395-radialgradientfilter
    radialGradientFilter():CIRadialGradient;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228396-randomgeneratorfilter
    randomGeneratorFilter():CIRandomGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228397-rippletransitionfilter
    rippleTransitionFilter():CIRippleTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3335007-roundedrectanglegeneratorfilter
    roundedRectangleGeneratorFilter():CIRoundedRectangleGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3547123-rowaveragefilter
    rowAverageFilter():CIRowAverage;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228398-srgbtonecurvetolinearfilter
    sRGBToneCurveToLinearFilter():CISRGBToneCurveToLinear;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228399-saliencymapfilter
    saliencyMapFilter():CISaliencyMap;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228400-saturationblendmodefilter
    saturationBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228401-screenblendmodefilter
    screenBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228402-sepiatonefilter
    sepiaToneFilter():CISepiaTone;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228403-shadedmaterialfilter
    shadedMaterialFilter():CIShadedMaterial;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228404-sharpenluminancefilter
    sharpenLuminanceFilter():CISharpenLuminance;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228405-sixfoldreflectedtilefilter
    sixfoldReflectedTileFilter():CISixfoldReflectedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228406-sixfoldrotatedtilefilter
    sixfoldRotatedTileFilter():CISixfoldRotatedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228407-smoothlineargradientfilter
    smoothLinearGradientFilter():CISmoothLinearGradient;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228408-softlightblendmodefilter
    softLightBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228409-sourceatopcompositingfilter
    sourceAtopCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228410-sourceincompositingfilter
    sourceInCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228411-sourceoutcompositingfilter
    sourceOutCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228412-sourceovercompositingfilter
    sourceOverCompositingFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228413-spotcolorfilter
    spotColorFilter():CISpotColor;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228414-spotlightfilter
    spotLightFilter():CISpotLight;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228415-starshinegeneratorfilter
    starShineGeneratorFilter():CIStarShineGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228416-straightenfilter
    straightenFilter():CIStraighten;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600151-stretchcropfilter
    stretchCropFilter():CIStretchCrop;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228417-stripesgeneratorfilter
    stripesGeneratorFilter():CIStripesGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228418-subtractblendmodefilter
    subtractBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228419-sunbeamsgeneratorfilter
    sunbeamsGeneratorFilter():CISunbeamsGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228420-swipetransitionfilter
    swipeTransitionFilter():CISwipeTransition;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228421-temperatureandtintfilter
    temperatureAndTintFilter():CITemperatureAndTint;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228422-textimagegeneratorfilter
    textImageGeneratorFilter():CITextImageGenerator;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228423-thermalfilter
    thermalFilter():CIThermal;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228424-tonecurvefilter
    toneCurveFilter():CIToneCurve;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600152-toruslensdistortionfilter
    torusLensDistortionFilter():CITorusLensDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228425-trianglekaleidoscopefilter
    triangleKaleidoscopeFilter():CITriangleKaleidoscope;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228426-triangletilefilter
    triangleTileFilter():CITriangleTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228427-twelvefoldreflectedtilefilter
    twelvefoldReflectedTileFilter():CITwelvefoldReflectedTile;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600153-twirldistortionfilter
    twirlDistortionFilter():CITwirlDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228428-unsharpmaskfilter
    unsharpMaskFilter():CIUnsharpMask;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228429-vibrancefilter
    vibranceFilter():CIVibrance;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228430-vignetteeffectfilter
    vignetteEffectFilter():CIVignetteEffect;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228431-vignettefilter
    vignetteFilter():CIVignette;
    // https://developer.apple.com/documentation/coreimage/cifilter/3801605-vividlightblendmodefilter
    vividLightBlendModeFilter():CICompositeOperation;
    // https://developer.apple.com/documentation/coreimage/cifilter/3600154-vortexdistortionfilter
    vortexDistortionFilter():CIVortexDistortion;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228432-whitepointadjustfilter
    whitePointAdjustFilter():CIWhitePointAdjust;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228433-xrayfilter
    xRayFilter():CIXRay;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228434-zoomblurfilter
    zoomBlurFilter():CIZoomBlur;
    //
    alloc():CIFilter;
    //
    init():CIFilter;
  }
}

declare const CIFilter: cocoascript.CIFilter;
declare namespace cocoascript {
  /**
   * A description of the bounding shape of a filter and the domain of definition for a filter operation.
   * https://developer.apple.com/documentation/coreimage/cifiltershape
   */
  interface CIFilterShape extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1562074-shapewithrect
    shapeWithRect(r: CGRect):CIFilterShape;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1437921-initwithrect
    initWithRect(r: CGRect):CIFilterShape;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1438022-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1437987-insetbyx
    insetByX_Y(dx: number, dy: number):CIFilterShape;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1437881-intersectwith
    intersectWith(s2: CIFilterShape):CIFilterShape;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1437806-intersectwithrect
    intersectWithRect(r: CGRect):CIFilterShape;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1437808-transformby
    transformBy_interior(m: CGAffineTransform, flag: BOOL):CIFilterShape;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1438227-unionwith
    unionWith(s2: CIFilterShape):CIFilterShape;
    // https://developer.apple.com/documentation/coreimage/cifiltershape/1437601-unionwithrect
    unionWithRect(r: CGRect):CIFilterShape;
    //
    alloc():CIFilterShape;
    //
    init():CIFilterShape;
  }
}

declare const CIFilterShape: cocoascript.CIFilterShape;
declare namespace cocoascript {
  /**
   * A container for coordinate values, direction vectors, matrices, and other non-scalar values, typically used in Core Image for filter parameters.
   * https://developer.apple.com/documentation/coreimage/civector
   */
  interface CIVector extends NSObject {
    // https://developer.apple.com/documentation/coreimage/civector/1564088-vectorwithvalues
    vectorWithValues_count(values: CGFloat, count: any):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564092-vectorwithx
    vectorWithX(x: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564091-vectorwithx
    vectorWithX_Y(x: CGFloat, y: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564089-vectorwithx
    vectorWithX_Y_Z(x: CGFloat, y: CGFloat, z: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564087-vectorwithx
    vectorWithX_Y_Z_W(x: CGFloat, y: CGFloat, z: CGFloat, w: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564093-vectorwithstring
    vectorWithString(representation: string | cocoascript.NSString):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564090-vectorwithcgaffinetransform
    vectorWithCGAffineTransform(t: CGAffineTransform):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564086-vectorwithcgpoint
    vectorWithCGPoint(p: CGPoint):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1564085-vectorwithcgrect
    vectorWithCGRect(r: CGRect):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1437849-initwithvalues
    initWithValues_count(values: CGFloat, count: any):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1437657-initwithx
    initWithX(x: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1437865-initwithx
    initWithX_Y(x: CGFloat, y: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1438056-initwithx
    initWithX_Y_Z(x: CGFloat, y: CGFloat, z: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1438088-initwithx
    initWithX_Y_Z_W(x: CGFloat, y: CGFloat, z: CGFloat, w: CGFloat):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1437938-initwithstring
    initWithString(representation: string | cocoascript.NSString):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1438102-initwithcgaffinetransform
    initWithCGAffineTransform(r: CGAffineTransform):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1438133-initwithcgpoint
    initWithCGPoint(p: CGPoint):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1437644-initwithcgrect
    initWithCGRect(r: CGRect):CIVector;
    // https://developer.apple.com/documentation/coreimage/civector/1438207-valueatindex
    valueAtIndex(index: any):CGFloat;
    // https://developer.apple.com/documentation/coreimage/civector/1438197-count
    count(): any;
    setCount(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1437738-x
    X(): CGFloat;
    setX(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1437843-y
    Y(): CGFloat;
    setY(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1437627-z
    Z(): CGFloat;
    setZ(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1438058-w
    W(): CGFloat;
    setW(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1437752-stringrepresentation
    stringRepresentation(): string | cocoascript.NSString;
    setStringRepresentation(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1438249-cgaffinetransformvalue
    CGAffineTransformValue(): CGAffineTransform;
    setCGAffineTransformValue(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1437672-cgpointvalue
    CGPointValue(): CGPoint;
    setCGPointValue(): void;
    // https://developer.apple.com/documentation/coreimage/civector/1438108-cgrectvalue
    CGRectValue(): CGRect;
    setCGRectValue(): void;
    //
    alloc():CIVector;
    //
    init():CIVector;
  }
}

declare const CIVector: cocoascript.CIVector;
declare namespace cocoascript {
  /**
   * Information about a Quick Response code (a kind of 2D barcode) detected in a still or video image.
   * https://developer.apple.com/documentation/coreimage/ciqrcodefeature
   */
  interface CIQRCodeFeature extends CIFeature {
    // https://developer.apple.com/documentation/coreimage/ciqrcodefeature/1438153-bounds
    bounds(): CGRect;
    setBounds(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodefeature/1438035-messagestring
    messageString(): string | cocoascript.NSString;
    setMessageString(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodefeature/2875553-symboldescriptor
    symbolDescriptor(): CIQRCodeDescriptor;
    setSymbolDescriptor(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodefeature/1437985-bottomleft
    bottomLeft(): CGPoint;
    setBottomLeft(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodefeature/1438245-bottomright
    bottomRight(): CGPoint;
    setBottomRight(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodefeature/1437780-topleft
    topLeft(): CGPoint;
    setTopLeft(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodefeature/1437896-topright
    topRight(): CGPoint;
    setTopRight(): void;
    //
    alloc():CIQRCodeFeature;
    //
    init():CIQRCodeFeature;
  }
}

declare const CIQRCodeFeature: cocoascript.CIQRCodeFeature;
declare namespace cocoascript {
  /**
   * An abstract base class that represents a machine readable code's attributes.
   * https://developer.apple.com/documentation/coreimage/cibarcodedescriptor
   */
  interface CIBarcodeDescriptor extends NSObject {
    //
    alloc():CIBarcodeDescriptor;
    //
    init():CIBarcodeDescriptor;
  }
}

declare const CIBarcodeDescriptor: cocoascript.CIBarcodeDescriptor;
declare namespace cocoascript {
  /**
   * An object that creates and configures chains of individual image filters.
   * https://developer.apple.com/documentation/coreimage/cifiltergenerator
   */
  interface CIFilterGenerator extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1525954-filtergenerator
    filterGenerator():CIFilterGenerator;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1525950-filtergeneratorwithcontentsofurl
    filterGeneratorWithContentsOfURL(aURL: NSURL):CIFilterGenerator;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1437742-initwithcontentsofurl
    initWithContentsOfURL(aURL: NSURL):CIFilterGenerator;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1438159-connectobject
    connectObject_withKey_toObject_withKey(sourceObject: CIFilterGenerator, sourceKey: string | cocoascript.NSString, targetObject: CIFilterGenerator, targetKey: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1438075-disconnectobject
    disconnectObject_withKey_toObject_withKey(sourceObject: CIFilterGenerator, sourceKey: string | cocoascript.NSString, targetObject: CIFilterGenerator, targetKey: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1437955-exportedkeys
    exportedKeys(): NSDictionary;
    setExportedKeys(): void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1438155-exportkey
    exportKey_fromObject_withName(key: string | cocoascript.NSString, targetObject: CIFilterGenerator, exportedKeyName: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1438191-removeexportedkey
    removeExportedKey(exportedKeyName: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1438069-setattributes
    setAttributes_forExportedKey(attributes: NSDictionary, key: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1437855-classattributes
    classAttributes(): NSDictionary;
    setClassAttributes(): void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1438179-writetourl
    writeToURL_atomically(aURL: NSURL, flag: BOOL):BOOL;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1437891-registerfiltername
    registerFilterName(name: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/coreimage/cifiltergenerator/1438044-filter
    filter():CIFilter;
    //
    alloc():CIFilterGenerator;
    //
    init():CIFilterGenerator;
  }
}

declare const CIFilterGenerator: cocoascript.CIFilterGenerator;
declare namespace cocoascript {
  /**
   * An evaluation context for rendering image processing results and performing image analysis.
   * https://developer.apple.com/documentation/coreimage/cicontext
   */
  interface CIContext extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cicontext/1642219-context
    context():CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1642212-init
    init():CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1438261-initwithoptions
    contextWithOptions(options: CIContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437864-contextwithcgcontext
    contextWithCGContext_options(cgctx: CGContextRef, options: CIContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1438137-contextwithcglcontext
    contextWithCGLContext_pixelFormat_colorSpace_options(cglctx: any, pixelFormat: any, colorSpace: CGColorSpaceRef, options: CIContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1473525-contextwithcglcontext
    contextWithCGLContext_pixelFormat_options(cglctx: any, pixelFormat: any, options: CIContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1620419-contextwitheaglcontext
    contextWithEAGLContext(eaglContext: EAGLContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1620362-contextwitheaglcontext
    contextWithEAGLContext_options(eaglContext: EAGLContext, options: CIContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437772-contextforofflinegpuatindex
    contextForOfflineGPUAtIndex(index: number):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437758-contextforofflinegpuatindex
    contextForOfflineGPUAtIndex_colorSpace_options_sharedContext(index: number, colorSpace: CGColorSpaceRef, options: CIContext, sharedContext: any):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437609-contextwithmtldevice
    contextWithMTLDevice(device: any):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437711-contextwithmtldevice
    contextWithMTLDevice_options(device: any, options: CIContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437784-createcgimage
    createCGImage_fromRect(image: CIImage, fromRect: CGRect):CGImageRef;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437978-createcgimage
    createCGImage_fromRect_format_colorSpace(image: CIImage, fromRect: CGRect, format: CIFormat, colorSpace: CGColorSpaceRef):CGImageRef;
    // https://developer.apple.com/documentation/coreimage/cicontext/1642211-createcgimage
    createCGImage_fromRect_format_colorSpace_deferred(image: CIImage, fromRect: CGRect, format: CIFormat, colorSpace: CGColorSpaceRef, deferred: BOOL):CGImageRef;
    // https://developer.apple.com/documentation/coreimage/cicontext/1438267-createcglayerwithsize
    createCGLayerWithSize_info(size: CGSize, info: CFDictionaryRef):CGLayerRef;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437897-render
    render_toBitmap_rowBytes_bounds_format_colorSpace(image: CIImage, data: void, rowBytes: ptrdiff_t, bounds: CGRect, format: CIFormat, colorSpace: CGColorSpaceRef):void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437853-render
    render_toCVPixelBuffer(image: CIImage, buffer: CVPixelBufferRef):void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437835-render
    render_toCVPixelBuffer_bounds_colorSpace(image: CIImage, buffer: CVPixelBufferRef, bounds: CGRect, colorSpace: CGColorSpaceRef):void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437778-render
    render_toIOSurface_bounds_colorSpace(image: CIImage, surface: IOSurfaceRef, bounds: CGRect, colorSpace: CGColorSpaceRef):void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1438026-render
    render_toMTLTexture_commandBuffer_bounds_colorSpace(image: CIImage, texture: any, commandBuffer: any, bounds: CGRect, colorSpace: CGColorSpaceRef):void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1473521-drawimage
    drawImage_atPoint_fromRect(image: CIImage, atPoint: CGPoint, fromRect: CGRect):void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437786-drawimage
    drawImage_inRect_fromRect(image: CIImage, inRect: CGRect, fromRect: CGRect):void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1620425-inputimagemaximumsize
    inputImageMaximumSize():CGSize;
    // https://developer.apple.com/documentation/coreimage/cicontext/1620335-outputimagemaximumsize
    outputImageMaximumSize():CGSize;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437790-clearcaches
    clearCaches():void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437967-reclaimresources
    reclaimResources():void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1437817-offlinegpucount
    offlineGPUCount():number;
    // https://developer.apple.com/documentation/coreimage/cicontext/1438061-workingcolorspace
    workingColorSpace(): CGColorSpaceRef;
    setWorkingColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1642215-workingformat
    workingFormat(): CIFormat;
    setWorkingFormat(): void;
    // https://developer.apple.com/documentation/coreimage/cicontext/1642220-tiffrepresentationofimage
    TIFFRepresentationOfImage_format_colorSpace_options(image: CIImage, format: CIFormat, colorSpace: CGColorSpaceRef, options: CIContext):NSData;
    // https://developer.apple.com/documentation/coreimage/cicontext/1642214-jpegrepresentationofimage
    JPEGRepresentationOfImage_colorSpace_options(image: CIImage, colorSpace: CGColorSpaceRef, options: CIContext):NSData;
    // https://developer.apple.com/documentation/coreimage/cicontext/2866196-pngrepresentationofimage
    PNGRepresentationOfImage_format_colorSpace_options(image: CIImage, format: CIFormat, colorSpace: CGColorSpaceRef, options: CIContext):NSData;
    // https://developer.apple.com/documentation/coreimage/cicontext/2902269-heifrepresentationofimage
    HEIFRepresentationOfImage_format_colorSpace_options(image: CIImage, format: CIFormat, colorSpace: CGColorSpaceRef, options: CIContext):NSData;
    // https://developer.apple.com/documentation/coreimage/cicontext/1642213-writetiffrepresentationofimage
    writeTIFFRepresentationOfImage_toURL_format_colorSpace_options_error(image: CIImage, url: NSURL, format: CIFormat, colorSpace: CGColorSpaceRef, options: CIContext, errorPtr: NSError):BOOL;
    // https://developer.apple.com/documentation/coreimage/cicontext/1642218-writejpegrepresentationofimage
    writeJPEGRepresentationOfImage_toURL_colorSpace_options_error(image: CIImage, url: NSURL, colorSpace: CGColorSpaceRef, options: CIContext, errorPtr: NSError):BOOL;
    // https://developer.apple.com/documentation/coreimage/cicontext/2866197-writepngrepresentationofimage
    writePNGRepresentationOfImage_toURL_format_colorSpace_options_error(image: CIImage, url: NSURL, format: CIFormat, colorSpace: CGColorSpaceRef, options: CIContext, errorPtr: NSError):BOOL;
    // https://developer.apple.com/documentation/coreimage/cicontext/2902266-writeheifrepresentationofimage
    writeHEIFRepresentationOfImage_toURL_format_colorSpace_options_error(image: CIImage, url: NSURL, format: CIFormat, colorSpace: CGColorSpaceRef, options: CIContext, errorPtr: NSError):BOOL;
    // https://developer.apple.com/documentation/coreimage/cicontext/2875428-preparerender
    prepareRender_fromRect_toDestination_atPoint_error(image: CIImage, fromRect: CGRect, destination: CIRenderDestination, atPoint: CGPoint, error: NSError):BOOL;
    // https://developer.apple.com/documentation/coreimage/cicontext/2875450-starttasktoclear
    startTaskToClear_error(destination: CIRenderDestination, error: NSError):CIRenderTask;
    // https://developer.apple.com/documentation/coreimage/cicontext/2875448-starttasktorender
    startTaskToRender_fromRect_toDestination_atPoint_error(image: CIImage, fromRect: CGRect, destination: CIRenderDestination, atPoint: CGPoint, error: NSError):CIRenderTask;
    // https://developer.apple.com/documentation/coreimage/cicontext/2875429-starttasktorender
    startTaskToRender_toDestination_error(image: CIImage, destination: CIRenderDestination, error: NSError):CIRenderTask;
    // https://developer.apple.com/documentation/coreimage/cicontext/3365984-contextwithmtlcommandqueue
    contextWithMTLCommandQueue(commandQueue: any):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/3365985-contextwithmtlcommandqueue
    contextWithMTLCommandQueue_options(commandQueue: any, options: CIContext):CIContext;
    // https://developer.apple.com/documentation/coreimage/cicontext/3600105-depthblureffectfilterforimage
    depthBlurEffectFilterForImage_disparityImage_portraitEffectsMatte_hairSemanticSegmentation_glassesMatte_gainMap_orientation_options(image: CIImage, disparityImage: CIImage, portraitEffectsMatte: CIImage, hairSemanticSegmentation: CIImage, glassesMatte: CIImage, gainMap: CIImage, orientation: CGImagePropertyOrientation, options: NSDictionary):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cicontext/3228045-depthblureffectfilterforimage
    depthBlurEffectFilterForImage_disparityImage_portraitEffectsMatte_hairSemanticSegmentation_orientation_options(image: CIImage, disparityImage: CIImage, portraitEffectsMatte: CIImage, hairSemanticSegmentation: CIImage, orientation: CGImagePropertyOrientation, options: NSDictionary):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cicontext/3019315-depthblureffectfilterforimage
    depthBlurEffectFilterForImage_disparityImage_portraitEffectsMatte_orientation_options(image: CIImage, disparityImage: CIImage, portraitEffectsMatte: CIImage, orientation: CGImagePropertyOrientation, options: NSDictionary):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cicontext/3020629-depthblureffectfilterforimagedat
    depthBlurEffectFilterForImageData_options(data: NSData, options: NSDictionary):CIFilter;
    // https://developer.apple.com/documentation/coreimage/cicontext/3019316-depthblureffectfilterforimageurl
    depthBlurEffectFilterForImageURL_options(url: NSURL, options: NSDictionary):CIFilter;
    //
    alloc():CIContext;
    //
    init():CIContext;
  }
}

declare const CIContext: cocoascript.CIContext;
// https://developer.apple.com/documentation/coreimage/kciimageprovidertilesize
declare const kCIImageProviderTileSize: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageprovideruserinfo
declare const kCIImageProviderUserInfo: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimagecolorspace
declare const kCIImageColorSpace: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageproperties
declare const kCIImageProperties: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageapplyorientationproperty
declare const kCIImageApplyOrientationProperty: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimagetexturetarget
declare const kCIImageTextureTarget: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimagetextureformat
declare const kCIImageTextureFormat: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimagenearestsampling
declare const kCIImageNearestSampling: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageauxiliarydepth
declare const kCIImageAuxiliaryDepth: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageauxiliarydisparity
declare const kCIImageAuxiliaryDisparity: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageauxiliaryportraiteffectsmatte
declare const kCIImageAuxiliaryPortraitEffectsMatte: cocoascript.CIImageOption;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine used to create custom Core Image filters.
   * https://developer.apple.com/documentation/coreimage/cikernel
   */
  interface CIKernel extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cikernel/1437796-kernelwithstring
    kernelWithString(string: string | cocoascript.NSString):CIKernel;
    // https://developer.apple.com/documentation/coreimage/cikernel/1437876-kernelswithstring
    kernelsWithString(string: string | cocoascript.NSString):CIKernel;
    // https://developer.apple.com/documentation/coreimage/cikernel/2880194-kernelwithfunctionname
    kernelWithFunctionName_fromMetalLibraryData_error(name: string | cocoascript.NSString, data: NSData, error: NSError):CIKernel;
    // https://developer.apple.com/documentation/coreimage/cikernel/2880195-kernelwithfunctionname
    kernelWithFunctionName_fromMetalLibraryData_outputPixelFormat_error(name: string | cocoascript.NSString, data: NSData, format: CIFormat, error: NSError):CIKernel;
    // https://developer.apple.com/documentation/coreimage/cikernel/1438067-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/coreimage/cikernel/1437691-setroiselector
    setROISelector(method: SEL):void;
    // https://developer.apple.com/documentation/coreimage/cikernel/1438243-applywithextent
    applyWithExtent_roiCallback_arguments(extent: CGRect, callback: CIKernelROICallback, args: CIKernel):CIImage;
    // https://developer.apple.com/documentation/coreimage/cikernel/3577535-kernelnamesfrommetallibrarydata
    kernelNamesFromMetalLibraryData(data: NSData):NSString;
    //
    alloc():CIKernel;
    //
    init():CIKernel;
  }
}

declare const CIKernel: cocoascript.CIKernel;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that processes only the color information in images, used to create custom Core Image filters.
   * https://developer.apple.com/documentation/coreimage/cicolorkernel
   */
  interface CIColorKernel extends CIKernel {
    // https://developer.apple.com/documentation/coreimage/cicolorkernel/1438143-kernelwithstring
    kernelWithString(string: string | cocoascript.NSString):CIColorKernel;
    // https://developer.apple.com/documentation/coreimage/cicolorkernel/1438110-applywithextent
    applyWithExtent_arguments(extent: CGRect, args: CIColorKernel):CIImage;
    //
    alloc():CIColorKernel;
    //
    init():CIColorKernel;
  }
}

declare const CIColorKernel: cocoascript.CIColorKernel;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that processes only the geometry information in an image, used to create custom Core Image filters.
   * https://developer.apple.com/documentation/coreimage/ciwarpkernel
   */
  interface CIWarpKernel extends CIKernel {
    // https://developer.apple.com/documentation/coreimage/ciwarpkernel/1438278-kernelwithstring
    kernelWithString(string: string | cocoascript.NSString):CIWarpKernel;
    // https://developer.apple.com/documentation/coreimage/ciwarpkernel/1437798-applywithextent
    applyWithExtent_roiCallback_inputImage_arguments(extent: CGRect, callback: CIKernelROICallback, image: CIImage, args: CIWarpKernel):CIImage;
    //
    alloc():CIWarpKernel;
    //
    init():CIWarpKernel;
  }
}

declare const CIWarpKernel: cocoascript.CIWarpKernel;
declare namespace cocoascript {
  /**
   * A GPU-based image processing routine that is optimized for blending two images.
   * https://developer.apple.com/documentation/coreimage/ciblendkernel
   */
  interface CIBlendKernel extends CIColorKernel {
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867353-kernelwithstring
    kernelWithString(string: string | cocoascript.NSString):CIBlendKernel;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2919728-applywithforeground
    applyWithForeground_background(foreground: CIImage, background: CIImage):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867388-clear
    clear(): CIBlendKernel;
    setClear(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867350-color
    color(): CIBlendKernel;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867391-colorburn
    colorBurn(): CIBlendKernel;
    setColorBurn(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867417-colordodge
    colorDodge(): CIBlendKernel;
    setColorDodge(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867384-componentadd
    componentAdd(): CIBlendKernel;
    setComponentAdd(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867433-componentmax
    componentMax(): CIBlendKernel;
    setComponentMax(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867425-componentmin
    componentMin(): CIBlendKernel;
    setComponentMin(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867406-componentmultiply
    componentMultiply(): CIBlendKernel;
    setComponentMultiply(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867348-darken
    darken(): CIBlendKernel;
    setDarken(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867351-darkercolor
    darkerColor(): CIBlendKernel;
    setDarkerColor(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867422-destination
    destination(): CIBlendKernel;
    setDestination(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867385-destinationatop
    destinationAtop(): CIBlendKernel;
    setDestinationAtop(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867352-destinationin
    destinationIn(): CIBlendKernel;
    setDestinationIn(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867368-destinationout
    destinationOut(): CIBlendKernel;
    setDestinationOut(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867432-destinationover
    destinationOver(): CIBlendKernel;
    setDestinationOver(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867416-difference
    difference(): CIBlendKernel;
    setDifference(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867410-divide
    divide(): CIBlendKernel;
    setDivide(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867343-exclusion
    exclusion(): CIBlendKernel;
    setExclusion(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867421-exclusiveor
    exclusiveOr(): CIBlendKernel;
    setExclusiveOr(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867418-hardlight
    hardLight(): CIBlendKernel;
    setHardLight(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867347-hardmix
    hardMix(): CIBlendKernel;
    setHardMix(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867408-hue
    hue(): CIBlendKernel;
    setHue(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867424-lighten
    lighten(): CIBlendKernel;
    setLighten(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867427-lightercolor
    lighterColor(): CIBlendKernel;
    setLighterColor(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867409-linearburn
    linearBurn(): CIBlendKernel;
    setLinearBurn(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867354-lineardodge
    linearDodge(): CIBlendKernel;
    setLinearDodge(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867435-linearlight
    linearLight(): CIBlendKernel;
    setLinearLight(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867423-luminosity
    luminosity(): CIBlendKernel;
    setLuminosity(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867419-multiply
    multiply(): CIBlendKernel;
    setMultiply(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867411-overlay
    overlay(): CIBlendKernel;
    setOverlay(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867420-pinlight
    pinLight(): CIBlendKernel;
    setPinLight(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867431-saturation
    saturation(): CIBlendKernel;
    setSaturation(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867356-screen
    screen(): CIBlendKernel;
    setScreen(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867434-softlight
    softLight(): CIBlendKernel;
    setSoftLight(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867407-source
    source(): CIBlendKernel;
    setSource(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867357-sourceatop
    sourceAtop(): CIBlendKernel;
    setSourceAtop(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867428-sourcein
    sourceIn(): CIBlendKernel;
    setSourceIn(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867415-sourceout
    sourceOut(): CIBlendKernel;
    setSourceOut(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867413-sourceover
    sourceOver(): CIBlendKernel;
    setSourceOver(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867370-subtract
    subtract(): CIBlendKernel;
    setSubtract(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/2867358-vividlight
    vividLight(): CIBlendKernel;
    setVividLight(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendkernel/3152403-applywithforeground
    applyWithForeground_background_colorSpace(foreground: CIImage, background: CIImage, colorSpace: CGColorSpaceRef):CIImage;
    //
    alloc():CIBlendKernel;
    //
    init():CIBlendKernel;
  }
}

declare const CIBlendKernel: cocoascript.CIBlendKernel;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/ciformat
  type CIFormat = number;
}
declare namespace cocoascript {
  /**
   * An image processor that identifies notable features (such as faces and barcodes) in a still image or video.
   * https://developer.apple.com/documentation/coreimage/cidetector
   */
  interface CIDetector extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cidetector/1437884-detectoroftype
    detectorOfType_context_options(type: string | cocoascript.NSString, context: CIContext, options: CIDetector):CIDetector;
    // https://developer.apple.com/documentation/coreimage/cidetector/1438049-featuresinimage
    featuresInImage(image: CIImage):CIFeature;
    // https://developer.apple.com/documentation/coreimage/cidetector/1438189-featuresinimage
    featuresInImage_options(image: CIImage, options: CIDetector):CIFeature;
    //
    alloc():CIDetector;
    //
    init():CIDetector;
  }
}

declare const CIDetector: cocoascript.CIDetector;
declare namespace cocoascript {
  /**
   * The abstract superclass for objects representing notable features detected in an image.
   * https://developer.apple.com/documentation/coreimage/cifeature
   */
  interface CIFeature extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cifeature/1437782-bounds
    bounds(): CGRect;
    setBounds(): void;
    // https://developer.apple.com/documentation/coreimage/cifeature/1438092-type
    type(): string | cocoascript.NSString;
    setType(): void;
    //
    alloc():CIFeature;
    //
    init():CIFeature;
  }
}

declare const CIFeature: cocoascript.CIFeature;
// https://developer.apple.com/documentation/coreimage/cifeaturetypeface
declare const CIFeatureTypeFace: cocoascript.NSString;
// https://developer.apple.com/documentation/coreimage/cifeaturetyperectangle
declare const CIFeatureTypeRectangle: cocoascript.NSString;
// https://developer.apple.com/documentation/coreimage/cifeaturetypeqrcode
declare const CIFeatureTypeQRCode: cocoascript.NSString;
// https://developer.apple.com/documentation/coreimage/cifeaturetypetext
declare const CIFeatureTypeText: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * Information about a face detected in a still or video image.
   * https://developer.apple.com/documentation/coreimage/cifacefeature
   */
  interface CIFaceFeature extends CIFeature {
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1438068-bounds
    bounds(): CGRect;
    setBounds(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1438165-hasfaceangle
    hasFaceAngle(): BOOL;
    setHasFaceAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437689-faceangle
    faceAngle(): number;
    setFaceAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437900-haslefteyeposition
    hasLeftEyePosition(): BOOL;
    setHasLeftEyePosition(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1438076-hasrighteyeposition
    hasRightEyePosition(): BOOL;
    setHasRightEyePosition(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437976-hasmouthposition
    hasMouthPosition(): BOOL;
    setHasMouthPosition(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437923-lefteyeposition
    leftEyePosition(): CGPoint;
    setLeftEyePosition(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1438213-righteyeposition
    rightEyePosition(): CGPoint;
    setRightEyePosition(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1438020-mouthposition
    mouthPosition(): CGPoint;
    setMouthPosition(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437882-hassmile
    hasSmile(): BOOL;
    setHasSmile(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437630-lefteyeclosed
    leftEyeClosed(): BOOL;
    setLeftEyeClosed(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437615-righteyeclosed
    rightEyeClosed(): BOOL;
    setRightEyeClosed(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437683-hastrackingid
    hasTrackingID(): BOOL;
    setHasTrackingID(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437709-trackingid
    trackingID(): number;
    setTrackingID(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437731-hastrackingframecount
    hasTrackingFrameCount(): BOOL;
    setHasTrackingFrameCount(): void;
    // https://developer.apple.com/documentation/coreimage/cifacefeature/1437953-trackingframecount
    trackingFrameCount(): number;
    setTrackingFrameCount(): void;
    //
    alloc():CIFaceFeature;
    //
    init():CIFaceFeature;
  }
}

declare const CIFaceFeature: cocoascript.CIFaceFeature;
declare namespace cocoascript {
  /**
   * Information about a rectangular region detected in a still or video image.
   * https://developer.apple.com/documentation/coreimage/cirectanglefeature
   */
  interface CIRectangleFeature extends CIFeature {
    // https://developer.apple.com/documentation/coreimage/cirectanglefeature/1438024-bounds
    bounds(): CGRect;
    setBounds(): void;
    // https://developer.apple.com/documentation/coreimage/cirectanglefeature/1437878-bottomleft
    bottomLeft(): CGPoint;
    setBottomLeft(): void;
    // https://developer.apple.com/documentation/coreimage/cirectanglefeature/1437888-bottomright
    bottomRight(): CGPoint;
    setBottomRight(): void;
    // https://developer.apple.com/documentation/coreimage/cirectanglefeature/1437951-topleft
    topLeft(): CGPoint;
    setTopLeft(): void;
    // https://developer.apple.com/documentation/coreimage/cirectanglefeature/1438071-topright
    topRight(): CGPoint;
    setTopRight(): void;
    //
    alloc():CIRectangleFeature;
    //
    init():CIRectangleFeature;
  }
}

declare const CIRectangleFeature: cocoascript.CIRectangleFeature;
declare namespace cocoascript {
  /**
   * Information about a region likely to contain text detected in a still or video image.
   * https://developer.apple.com/documentation/coreimage/citextfeature
   */
  interface CITextFeature extends CIFeature {
    // https://developer.apple.com/documentation/coreimage/citextfeature/1437885-bounds
    bounds(): CGRect;
    setBounds(): void;
    // https://developer.apple.com/documentation/coreimage/citextfeature/1437810-subfeatures
    subFeatures(): NSArray;
    setSubFeatures(): void;
    // https://developer.apple.com/documentation/coreimage/citextfeature/1438004-bottomleft
    bottomLeft(): CGPoint;
    setBottomLeft(): void;
    // https://developer.apple.com/documentation/coreimage/citextfeature/1437659-bottomright
    bottomRight(): CGPoint;
    setBottomRight(): void;
    // https://developer.apple.com/documentation/coreimage/citextfeature/1438221-topleft
    topLeft(): CGPoint;
    setTopLeft(): void;
    // https://developer.apple.com/documentation/coreimage/citextfeature/1438282-topright
    topRight(): CGPoint;
    setTopRight(): void;
    //
    alloc():CITextFeature;
    //
    init():CITextFeature;
  }
}

declare const CITextFeature: cocoascript.CITextFeature;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor
   */
  interface CIQRCodeDescriptor extends CIBarcodeDescriptor {
    // https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/2875180-initwithpayload
    initWithPayload_symbolVersion_maskPattern_errorCorrectionLevel(errorCorrectedPayload: NSData, symbolVersion: NSInteger, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel):CIQRCodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/2875169-descriptorwithpayload
    descriptorWithPayload_symbolVersion_maskPattern_errorCorrectionLevel(errorCorrectedPayload: NSData, symbolVersion: NSInteger, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel):CIQRCodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/2875167-errorcorrectedpayload
    errorCorrectedPayload(): NSData;
    setErrorCorrectedPayload(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/2875193-symbolversion
    symbolVersion(): NSInteger;
    setSymbolVersion(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/2875191-maskpattern
    maskPattern(): number;
    setMaskPattern(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/2875196-errorcorrectionlevel
    errorCorrectionLevel(): CIQRCodeErrorCorrectionLevel;
    setErrorCorrectionLevel(): void;
    //
    alloc():CIQRCodeDescriptor;
    //
    init():CIQRCodeDescriptor;
  }
}

declare const CIQRCodeDescriptor: cocoascript.CIQRCodeDescriptor;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor
   */
  interface CIAztecCodeDescriptor extends CIBarcodeDescriptor {
    // https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/2875188-initwithpayload
    initWithPayload_isCompact_layerCount_dataCodewordCount(errorCorrectedPayload: NSData, isCompact: BOOL, layerCount: NSInteger, dataCodewordCount: NSInteger):CIAztecCodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/2875192-descriptorwithpayload
    descriptorWithPayload_isCompact_layerCount_dataCodewordCount(errorCorrectedPayload: NSData, isCompact: BOOL, layerCount: NSInteger, dataCodewordCount: NSInteger):CIAztecCodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/2875187-errorcorrectedpayload
    errorCorrectedPayload(): NSData;
    setErrorCorrectedPayload(): void;
    // https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/2875203-iscompact
    isCompact(): BOOL;
    setIsCompact(): void;
    // https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/2875174-layercount
    layerCount(): NSInteger;
    setLayerCount(): void;
    // https://developer.apple.com/documentation/coreimage/ciazteccodedescriptor/2875166-datacodewordcount
    dataCodewordCount(): NSInteger;
    setDataCodewordCount(): void;
    //
    alloc():CIAztecCodeDescriptor;
    //
    init():CIAztecCodeDescriptor;
  }
}

declare const CIAztecCodeDescriptor: cocoascript.CIAztecCodeDescriptor;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor
   */
  interface CIPDF417CodeDescriptor extends CIBarcodeDescriptor {
    // https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/2875182-initwithpayload
    initWithPayload_isCompact_rowCount_columnCount(errorCorrectedPayload: NSData, isCompact: BOOL, rowCount: NSInteger, columnCount: NSInteger):CIPDF417CodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/2875195-descriptorwithpayload
    descriptorWithPayload_isCompact_rowCount_columnCount(errorCorrectedPayload: NSData, isCompact: BOOL, rowCount: NSInteger, columnCount: NSInteger):CIPDF417CodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/2875204-errorcorrectedpayload
    errorCorrectedPayload(): NSData;
    setErrorCorrectedPayload(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/2875194-iscompact
    isCompact(): BOOL;
    setIsCompact(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/2875199-rowcount
    rowCount(): NSInteger;
    setRowCount(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417codedescriptor/2875171-columncount
    columnCount(): NSInteger;
    setColumnCount(): void;
    //
    alloc():CIPDF417CodeDescriptor;
    //
    init():CIPDF417CodeDescriptor;
  }
}

declare const CIPDF417CodeDescriptor: cocoascript.CIPDF417CodeDescriptor;
declare namespace cocoascript {
  /**
   * A concrete subclass of
   * https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor
   */
  interface CIDataMatrixCodeDescriptor extends CIBarcodeDescriptor {
    // https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/2875201-initwithpayload
    initWithPayload_rowCount_columnCount_eccVersion(errorCorrectedPayload: NSData, rowCount: NSInteger, columnCount: NSInteger, eccVersion: CIDataMatrixCodeECCVersion):CIDataMatrixCodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/2875163-descriptorwithpayload
    descriptorWithPayload_rowCount_columnCount_eccVersion(errorCorrectedPayload: NSData, rowCount: NSInteger, columnCount: NSInteger, eccVersion: CIDataMatrixCodeECCVersion):CIDataMatrixCodeDescriptor;
    // https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/2875173-errorcorrectedpayload
    errorCorrectedPayload(): NSData;
    setErrorCorrectedPayload(): void;
    // https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/2875200-rowcount
    rowCount(): NSInteger;
    setRowCount(): void;
    // https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/2875202-columncount
    columnCount(): NSInteger;
    setColumnCount(): void;
    // https://developer.apple.com/documentation/coreimage/cidatamatrixcodedescriptor/2875170-eccversion
    eccVersion(): CIDataMatrixCodeECCVersion;
    setEccVersion(): void;
    //
    alloc():CIDataMatrixCodeDescriptor;
    //
    init():CIDataMatrixCodeDescriptor;
  }
}

declare const CIDataMatrixCodeDescriptor: cocoascript.CIDataMatrixCodeDescriptor;
declare namespace cocoascript {
  /**
   * The mechanism for loading image units in macOS.
   * https://developer.apple.com/documentation/coreimage/ciplugin
   */
  interface CIPlugIn extends NSObject {
    // https://developer.apple.com/documentation/coreimage/ciplugin/1437653-loadallplugins
    loadAllPlugIns():void;
    // https://developer.apple.com/documentation/coreimage/ciplugin/1437599-loadnonexecutableplugins
    loadNonExecutablePlugIns():void;
    // https://developer.apple.com/documentation/coreimage/ciplugin/1438187-loadplugin
    loadPlugIn_allowExecutableCode(url: NSURL, allowExecutableCode: BOOL):void;
    // https://developer.apple.com/documentation/coreimage/ciplugin/1551323-loadplugin
    loadPlugIn_allowNonExecutable(url: NSURL, allowNonExecutable: BOOL):void;
    // https://developer.apple.com/documentation/coreimage/ciplugin/3180431-loadnonexecutableplugin
    loadNonExecutablePlugIn(url: NSURL):void;
    //
    alloc():CIPlugIn;
    //
    init():CIPlugIn;
  }
}

declare const CIPlugIn: cocoascript.CIPlugIn;
declare namespace cocoascript {
  /**
   * A general interface for objects that produce
   * https://developer.apple.com/documentation/coreimage/cifilterconstructor
   */
  interface CIFilterConstructor {
    // https://developer.apple.com/documentation/coreimage/cifilterconstructor/1438018-filterwithname
    filterWithName(name: string | cocoascript.NSString):CIFilter;
  }
}
declare namespace cocoascript {
  /**
   * The interface for loading Core Image image units.
   * https://developer.apple.com/documentation/coreimage/cipluginregistration
   */
  interface CIPlugInRegistration {
    // https://developer.apple.com/documentation/coreimage/cipluginregistration/1437823-load
    load(host: void):BOOL;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/cirawfilteroption
  type CIRAWFilterOption = cocoascript.NSString;
}
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationavdepthdata
declare const kCIImageRepresentationAVDepthData: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationdepthimage
declare const kCIImageRepresentationDepthImage: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationdisparityimage
declare const kCIImageRepresentationDisparityImage: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kcicontextoutputcolorspace
declare const kCIContextOutputColorSpace: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontextworkingcolorspace
declare const kCIContextWorkingColorSpace: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontextworkingformat
declare const kCIContextWorkingFormat: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontexthighqualitydownsample
declare const kCIContextHighQualityDownsample: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontextoutputpremultiplied
declare const kCIContextOutputPremultiplied: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontextcacheintermediates
declare const kCIContextCacheIntermediates: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontextusesoftwarerenderer
declare const kCIContextUseSoftwareRenderer: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontextpriorityrequestlow
declare const kCIContextPriorityRequestLow: cocoascript.CIContextOption;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/ciimageoption
  type CIImageOption = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A specification for configuring all attributes of a render task's destination and issuing asynchronous render tasks.
   * https://developer.apple.com/documentation/coreimage/cirenderdestination
   */
  interface CIRenderDestination extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875436-initwithpixelbuffer
    initWithPixelBuffer(pixelBuffer: CVPixelBufferRef):CIRenderDestination;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2876044-initwithiosurface
    initWithIOSurface(surface: IOSurface):CIRenderDestination;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2880273-initwithmtltexture
    initWithMTLTexture_commandBuffer(texture: any, commandBuffer: any):CIRenderDestination;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2880274-initwithwidth
    initWithWidth_height_pixelFormat_commandBuffer_mtlTextureProvider(width: NSUInteger, height: NSUInteger, pixelFormat: any, commandBuffer: any, block: void):CIRenderDestination;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875438-initwithgltexture
    initWithGLTexture_target_width_height(texture: number, target: number, width: NSUInteger, height: NSUInteger):CIRenderDestination;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875427-initwithbitmapdata
    initWithBitmapData_width_height_bytesPerRow_format(data: void, width: NSUInteger, height: NSUInteger, bytesPerRow: NSUInteger, format: CIFormat):CIRenderDestination;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875443-alphamode
    alphaMode(): CIRenderDestinationAlphaMode;
    setAlphaMode(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875452-blendkernel
    blendKernel(): CIBlendKernel;
    setBlendKernel(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875437-blendsindestinationcolorspace
    blendsInDestinationColorSpace(): BOOL;
    setBlendsInDestinationColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875439-colorspace
    colorSpace(): CGColorSpaceRef;
    setColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875434-width
    width(): NSUInteger;
    setWidth(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875433-height
    height(): NSUInteger;
    setHeight(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875451-clamped
    clamped(): BOOL;
    setClamped(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875441-dithered
    dithered(): BOOL;
    setDithered(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderdestination/2875442-flipped
    flipped(): BOOL;
    setFlipped(): void;
    //
    alloc():CIRenderDestination;
    //
    init():CIRenderDestination;
  }
}

declare const CIRenderDestination: cocoascript.CIRenderDestination;
declare namespace cocoascript {
  /**
   * The abstract class you extend to create custom image processors that can integrate with Core Image workflows.
   * https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel
   */
  interface CIImageProcessorKernel extends NSObject {
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/2143065-outputformat
    outputFormat(): CIFormat;
    setOutputFormat(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/2867389-outputisopaque
    outputIsOpaque(): boolean;
    setOutputIsOpaque(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/2143066-synchronizeinputs
    synchronizeInputs(): boolean;
    setSynchronizeInputs(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/2138284-applywithextent
    applyWithExtent_inputs_arguments_error(extent: CGRect, inputs: CIImage, args: CIImageProcessorKernel, error: NSError):CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/2138289-formatforinputatindex
    formatForInputAtIndex(input: number):CIFormat;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/2138290-processwithinputs
    processWithInputs_arguments_output_error(inputs: CIImageProcessorInput, arguments: CIImageProcessorKernel, output: CIImageProcessorOutput, error: NSError):BOOL;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/2138287-roiforinput
    roiForInput_arguments_outputRect(input: number, arguments: CIImageProcessorKernel, outputRect: CGRect):CGRect;
    //
    alloc():CIImageProcessorKernel;
    //
    init():CIImageProcessorKernel;
  }
}

declare const CIImageProcessorKernel: cocoascript.CIImageProcessorKernel;
declare namespace cocoascript {
  /**
   * A container of image data and information for use in a custom image processor.
   * https://developer.apple.com/documentation/coreimage/ciimageprocessorinput
   */
  interface CIImageProcessorInput {
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/1639645-baseaddress
    baseAddress(): void;
    setBaseAddress(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/1639651-metaltexture
    metalTexture(): any;
    setMetalTexture(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/1639649-pixelbuffer
    pixelBuffer(): CVPixelBufferRef;
    setPixelBuffer(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/1639657-surface
    surface(): IOSurfaceRef;
    setSurface(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/1639633-region
    region(): CGRect;
    setRegion(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/1639655-bytesperrow
    bytesPerRow(): any;
    setBytesPerRow(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessorinput/1639639-format
    format(): CIFormat;
    setFormat(): void;
  }
}
declare namespace cocoascript {
  /**
   * A container for writing image data and information produced by a custom image processor.
   * https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput
   */
  interface CIImageProcessorOutput {
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639626-baseaddress
    baseAddress(): void;
    setBaseAddress(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639631-metaltexture
    metalTexture(): any;
    setMetalTexture(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639647-pixelbuffer
    pixelBuffer(): CVPixelBufferRef;
    setPixelBuffer(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639627-surface
    surface(): IOSurfaceRef;
    setSurface(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639629-region
    region(): CGRect;
    setRegion(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639641-metalcommandbuffer
    metalCommandBuffer(): any;
    setMetalCommandBuffer(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639635-bytesperrow
    bytesPerRow(): any;
    setBytesPerRow(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/1639628-format
    format(): CIFormat;
    setFormat(): void;
  }
}
declare namespace cocoascript {
  /**
   * An encapsulation of a render task's timing, passes, and pixels processed.
   * https://developer.apple.com/documentation/coreimage/cirenderinfo
   */
  interface CIRenderInfo extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cirenderinfo/2875453-kernelexecutiontime
    kernelExecutionTime(): NSTimeInterval;
    setKernelExecutionTime(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderinfo/2875446-passcount
    passCount(): NSInteger;
    setPassCount(): void;
    // https://developer.apple.com/documentation/coreimage/cirenderinfo/2919725-pixelsprocessed
    pixelsProcessed(): NSInteger;
    setPixelsProcessed(): void;
    //
    alloc():CIRenderInfo;
    //
    init():CIRenderInfo;
  }
}

declare const CIRenderInfo: cocoascript.CIRenderInfo;
declare namespace cocoascript {
  /**
   * A single render task issued in conjunction with
   * https://developer.apple.com/documentation/coreimage/cirendertask
   */
  interface CIRenderTask extends NSObject {
    // https://developer.apple.com/documentation/coreimage/cirendertask/2881294-waituntilcompletedandreturnerror
    waitUntilCompletedAndReturnError(error: NSError):CIRenderInfo;
    //
    alloc():CIRenderTask;
    //
    init():CIRenderTask;
  }
}

declare const CIRenderTask: cocoascript.CIRenderTask;
declare namespace cocoascript {
  /**
   * An object that manages feedback-based image processing for tasks such as painting or fluid simulation.
   * https://developer.apple.com/documentation/coreimage/ciimageaccumulator
   */
  interface CIImageAccumulator extends NSObject {
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427722-imageaccumulatorwithextent
    imageAccumulatorWithExtent_format(extent: CGRect, format: CIFormat):CIImageAccumulator;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427712-imageaccumulatorwithextent
    imageAccumulatorWithExtent_format_colorSpace(extent: CGRect, format: CIFormat, colorSpace: CGColorSpaceRef):CIImageAccumulator;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427718-initwithextent
    initWithExtent_format(extent: CGRect, format: CIFormat):CIImageAccumulator;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427710-initwithextent
    initWithExtent_format_colorSpace(extent: CGRect, format: CIFormat, colorSpace: CGColorSpaceRef):CIImageAccumulator;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427702-setimage
    setImage(image: CIImage):void;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427706-setimage
    setImage_dirtyRect(image: CIImage, dirtyRect: CGRect):void;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427714-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427716-format
    format(): CIFormat;
    setFormat(): void;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427704-image
    image():CIImage;
    // https://developer.apple.com/documentation/coreimage/ciimageaccumulator/1427720-clear
    clear():void;
    //
    alloc():CIImageAccumulator;
    //
    init():CIImageAccumulator;
  }
}

declare const CIImageAccumulator: cocoascript.CIImageAccumulator;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareaaverage
   */
  interface CIAreaAverage extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareahistogram
   */
  interface CIAreaHistogram extends CIAreaReductionFilter {
    // https://developer.apple.com/documentation/coreimage/ciareahistogram/3547092-count
    count(): NSInteger;
    setCount(): void;
    // https://developer.apple.com/documentation/coreimage/ciareahistogram/3547093-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareamaximum
   */
  interface CIAreaMaximum extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareamaximumalpha
   */
  interface CIAreaMaximumAlpha extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareaminmax
   */
  interface CIAreaMinMax extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareaminmaxred
   */
  interface CIAreaMinMaxRed extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareaminimum
   */
  interface CIAreaMinimum extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareaminimumalpha
   */
  interface CIAreaMinimumAlpha extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciareareductionfilter
   */
  interface CIAreaReductionFilter extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciareareductionfilter/3547101-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/ciareareductionfilter/3547102-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cibumpdistortion
   */
  interface CIBumpDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cibumpdistortion/3600107-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cibumpdistortion/3600108-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cibumpdistortion/3600109-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cibumpdistortion/3600110-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cibumpdistortionlinear
   */
  interface CIBumpDistortionLinear extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cibumpdistortionlinear/3600112-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cibumpdistortionlinear/3600113-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cibumpdistortionlinear/3600114-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cibumpdistortionlinear/3600115-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cibumpdistortionlinear/3600116-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cicirclesplashdistortion
   */
  interface CICircleSplashDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicirclesplashdistortion/3600118-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cicirclesplashdistortion/3600119-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicirclesplashdistortion/3600120-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cicircularwrap
   */
  interface CICircularWrap extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicircularwrap/3600122-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cicircularwrap/3600123-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cicircularwrap/3600124-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicircularwrap/3600125-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cicolorabsolutedifference
   */
  interface CIColorAbsoluteDifference extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorabsolutedifference/3547104-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorabsolutedifference/3547105-inputimage2
    inputImage2(): CIImage;
    setInputImage2(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cicolorthreshold
   */
  interface CIColorThreshold extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorthreshold/3547107-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorthreshold/3547108-threshold
    threshold(): number;
    setThreshold(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cicolorthresholdotsu
   */
  interface CIColorThresholdOtsu extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorthresholdotsu/3584769-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cicolumnaverage
   */
  interface CIColumnAverage extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cidisplacementdistortion
   */
  interface CIDisplacementDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidisplacementdistortion/3600127-displacementimage
    displacementImage(): CIImage;
    setDisplacementImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidisplacementdistortion/3600128-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidisplacementdistortion/3600129-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cidroste
   */
  interface CIDroste extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidroste/3600131-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidroste/3600132-insetpoint0
    insetPoint0(): CGPoint;
    setInsetPoint0(): void;
    // https://developer.apple.com/documentation/coreimage/cidroste/3600133-insetpoint1
    insetPoint1(): CGPoint;
    setInsetPoint1(): void;
    // https://developer.apple.com/documentation/coreimage/cidroste/3600134-periodicity
    periodicity(): number;
    setPeriodicity(): void;
    // https://developer.apple.com/documentation/coreimage/cidroste/3600135-rotation
    rotation(): number;
    setRotation(): void;
    // https://developer.apple.com/documentation/coreimage/cidroste/3600136-strands
    strands(): number;
    setStrands(): void;
    // https://developer.apple.com/documentation/coreimage/cidroste/3600137-zoom
    zoom(): number;
    setZoom(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a geometry adjustment filters that requires four coordinates.
   * https://developer.apple.com/documentation/coreimage/cifourcoordinategeometryfilter
   */
  interface CIFourCoordinateGeometryFilter extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cifourcoordinategeometryfilter/3338731-bottomleft
    bottomLeft(): CGPoint;
    setBottomLeft(): void;
    // https://developer.apple.com/documentation/coreimage/cifourcoordinategeometryfilter/3338732-bottomright
    bottomRight(): CGPoint;
    setBottomRight(): void;
    // https://developer.apple.com/documentation/coreimage/cifourcoordinategeometryfilter/3338733-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cifourcoordinategeometryfilter/3338734-topleft
    topLeft(): CGPoint;
    setTopLeft(): void;
    // https://developer.apple.com/documentation/coreimage/cifourcoordinategeometryfilter/3338735-topright
    topRight(): CGPoint;
    setTopRight(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciglassdistortion
   */
  interface CIGlassDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciglassdistortion/3600156-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/ciglassdistortion/3600157-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciglassdistortion/3600158-scale
    scale(): number;
    setScale(): void;
    // https://developer.apple.com/documentation/coreimage/ciglassdistortion/3600159-textureimage
    textureImage(): CIImage;
    setTextureImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciglasslozenge
   */
  interface CIGlassLozenge extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciglasslozenge/3600161-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciglasslozenge/3600162-point0
    point0(): CGPoint;
    setPoint0(): void;
    // https://developer.apple.com/documentation/coreimage/ciglasslozenge/3600163-point1
    point1(): CGPoint;
    setPoint1(): void;
    // https://developer.apple.com/documentation/coreimage/ciglasslozenge/3600164-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/ciglasslozenge/3600165-refraction
    refraction(): number;
    setRefraction(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cihistogramdisplay
   */
  interface CIHistogramDisplay extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cihistogramdisplay/3547125-height
    height(): number;
    setHeight(): void;
    // https://developer.apple.com/documentation/coreimage/cihistogramdisplay/3547126-highlimit
    highLimit(): number;
    setHighLimit(): void;
    // https://developer.apple.com/documentation/coreimage/cihistogramdisplay/3547127-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cihistogramdisplay/3547128-lowlimit
    lowLimit(): number;
    setLowLimit(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/ciholedistortion
   */
  interface CIHoleDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciholedistortion/3600167-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/ciholedistortion/3600168-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciholedistortion/3600169-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cikmeans
   */
  interface CIKMeans extends CIAreaReductionFilter {
    // https://developer.apple.com/documentation/coreimage/cikmeans/3547130-count
    count(): NSInteger;
    setCount(): void;
    // https://developer.apple.com/documentation/coreimage/cikmeans/3547131-inputmeans
    inputMeans(): CIImage;
    setInputMeans(): void;
    // https://developer.apple.com/documentation/coreimage/cikmeans/3547132-passes
    passes(): number;
    setPasses(): void;
    // https://developer.apple.com/documentation/coreimage/cikmeans/3547133-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cilighttunnel
   */
  interface CILightTunnel extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilighttunnel/3600171-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cilighttunnel/3600172-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cilighttunnel/3600173-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cilighttunnel/3600174-rotation
    rotation(): number;
    setRotation(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cininepartstretched
   */
  interface CINinePartStretched extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cininepartstretched/3600176-breakpoint0
    breakpoint0(): CGPoint;
    setBreakpoint0(): void;
    // https://developer.apple.com/documentation/coreimage/cininepartstretched/3600177-breakpoint1
    breakpoint1(): CGPoint;
    setBreakpoint1(): void;
    // https://developer.apple.com/documentation/coreimage/cininepartstretched/3600178-growamount
    growAmount(): CGPoint;
    setGrowAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cininepartstretched/3600179-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cinineparttiled
   */
  interface CINinePartTiled extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cinineparttiled/3600181-breakpoint0
    breakpoint0(): CGPoint;
    setBreakpoint0(): void;
    // https://developer.apple.com/documentation/coreimage/cinineparttiled/3600182-breakpoint1
    breakpoint1(): CGPoint;
    setBreakpoint1(): void;
    // https://developer.apple.com/documentation/coreimage/cinineparttiled/3600183-flipytiles
    flipYTiles(): boolean;
    setFlipYTiles(): void;
    // https://developer.apple.com/documentation/coreimage/cinineparttiled/3600184-growamount
    growAmount(): CGPoint;
    setGrowAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cinineparttiled/3600185-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cipinchdistortion
   */
  interface CIPinchDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cipinchdistortion/3600187-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cipinchdistortion/3600188-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipinchdistortion/3600189-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cipinchdistortion/3600190-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cirowaverage
   */
  interface CIRowAverage extends CIAreaReductionFilter {
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/cistretchcrop
   */
  interface CIStretchCrop extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cistretchcrop/3600192-centerstretchamount
    centerStretchAmount(): number;
    setCenterStretchAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cistretchcrop/3600193-cropamount
    cropAmount(): number;
    setCropAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cistretchcrop/3600194-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cistretchcrop/3600195-size
    size(): CGPoint;
    setSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/citoruslensdistortion
   */
  interface CITorusLensDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citoruslensdistortion/3600197-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/citoruslensdistortion/3600198-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citoruslensdistortion/3600199-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/citoruslensdistortion/3600200-refraction
    refraction(): number;
    setRefraction(): void;
    // https://developer.apple.com/documentation/coreimage/citoruslensdistortion/3600201-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/citwirldistortion
   */
  interface CITwirlDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citwirldistortion/3600203-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/citwirldistortion/3600204-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/citwirldistortion/3600205-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citwirldistortion/3600206-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/coreimage/civortexdistortion
   */
  interface CIVortexDistortion extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/civortexdistortion/3600208-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/civortexdistortion/3600209-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/civortexdistortion/3600210-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/civortexdistortion/3600211-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/ciimageautoadjustmentoption
  type CIImageAutoAdjustmentOption = cocoascript.NSString;
}
// https://developer.apple.com/documentation/coreimage/kciimageautoadjustenhance
declare const kCIImageAutoAdjustEnhance: cocoascript.CIImageAutoAdjustmentOption;
// https://developer.apple.com/documentation/coreimage/kciimageautoadjustredeye
declare const kCIImageAutoAdjustRedEye: cocoascript.CIImageAutoAdjustmentOption;
// https://developer.apple.com/documentation/coreimage/kciimageautoadjustfeatures
declare const kCIImageAutoAdjustFeatures: cocoascript.CIImageAutoAdjustmentOption;
// https://developer.apple.com/documentation/coreimage/kciimageautoadjustcrop
declare const kCIImageAutoAdjustCrop: cocoascript.CIImageAutoAdjustmentOption;
// https://developer.apple.com/documentation/coreimage/kciimageautoadjustlevel
declare const kCIImageAutoAdjustLevel: cocoascript.CIImageAutoAdjustmentOption;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/cikernelroicallback
  type CIKernelROICallback = cocoascript.CGRect;
}
// https://developer.apple.com/documentation/coreimage/kciinputbaselineexposurekey
declare const kCIInputBaselineExposureKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputdisablegamutmapkey
declare const kCIInputDisableGamutMapKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputmoireamountkey
declare const kCIInputMoireAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kcisupporteddecoderversionskey
declare const kCISupportedDecoderVersionsKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputallowdraftmodekey
declare const kCIInputAllowDraftModeKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputdecoderversionkey
declare const kCIInputDecoderVersionKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputboostkey
declare const kCIInputBoostKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputneutralchromaticityxkey
declare const kCIInputNeutralChromaticityXKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputneutralchromaticityykey
declare const kCIInputNeutralChromaticityYKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputneutraltemperaturekey
declare const kCIInputNeutralTemperatureKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputneutraltintkey
declare const kCIInputNeutralTintKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputneutrallocationkey
declare const kCIInputNeutralLocationKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputscalefactorkey
declare const kCIInputScaleFactorKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputignoreimageorientationkey
declare const kCIInputIgnoreImageOrientationKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputimageorientationkey
declare const kCIInputImageOrientationKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputenablesharpeningkey
declare const kCIInputEnableSharpeningKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputenablechromaticnoisetrackingkey
declare const kCIInputEnableChromaticNoiseTrackingKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputnoisereductionamountkey
declare const kCIInputNoiseReductionAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputenablevendorlenscorrectionkey
declare const kCIInputEnableVendorLensCorrectionKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputluminancenoisereductionamountkey
declare const kCIInputLuminanceNoiseReductionAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputcolornoisereductionamountkey
declare const kCIInputColorNoiseReductionAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputnoisereductionsharpnessamountkey
declare const kCIInputNoiseReductionSharpnessAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputnoisereductioncontrastamountkey
declare const kCIInputNoiseReductionContrastAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputnoisereductiondetailamountkey
declare const kCIInputNoiseReductionDetailAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputboostshadowamountkey
declare const kCIInputBoostShadowAmountKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciinputlinearspacefilter
declare const kCIInputLinearSpaceFilter: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kcioutputnativesizekey
declare const kCIOutputNativeSizeKey: cocoascript.CIRAWFilterOption;
// https://developer.apple.com/documentation/coreimage/kciactivekeys
declare const kCIActiveKeys: cocoascript.CIRAWFilterOption;
declare namespace cocoascript {
  /**
   * The properties you use to configure a CMYK halftone filter.
   * https://developer.apple.com/documentation/coreimage/cicmykhalftone
   */
  interface CICMYKHalftone extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicmykhalftone/3228097-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cicmykhalftone/3228098-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cicmykhalftone/3228099-graycomponentreplacement
    grayComponentReplacement(): number;
    setGrayComponentReplacement(): void;
    // https://developer.apple.com/documentation/coreimage/cicmykhalftone/3228100-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicmykhalftone/3228101-sharpness
    sharpness(): number;
    setSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cicmykhalftone/3228102-undercolorremoval
    underColorRemoval(): number;
    setUnderColorRemoval(): void;
    // https://developer.apple.com/documentation/coreimage/cicmykhalftone/3228103-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Lab Delta E filter.
   * https://developer.apple.com/documentation/coreimage/cilabdeltae
   */
  interface CILabDeltaE extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilabdeltae/3228513-image2
    image2(): CIImage;
    setImage2(): void;
    // https://developer.apple.com/documentation/coreimage/cilabdeltae/3228514-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a PDF417 barcode generator filter.
   * https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator
   */
  interface CIPDF417BarcodeGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228605-alwaysspecifycompaction
    alwaysSpecifyCompaction(): number;
    setAlwaysSpecifyCompaction(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228606-compactstyle
    compactStyle(): number;
    setCompactStyle(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228607-compactionmode
    compactionMode(): number;
    setCompactionMode(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228608-correctionlevel
    correctionLevel(): number;
    setCorrectionLevel(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228609-datacolumns
    dataColumns(): number;
    setDataColumns(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228610-maxheight
    maxHeight(): number;
    setMaxHeight(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228611-maxwidth
    maxWidth(): number;
    setMaxWidth(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228612-message
    message(): NSData;
    setMessage(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228613-minheight
    minHeight(): number;
    setMinHeight(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228614-minwidth
    minWidth(): number;
    setMinWidth(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228615-preferredaspectratio
    preferredAspectRatio(): number;
    setPreferredAspectRatio(): void;
    // https://developer.apple.com/documentation/coreimage/cipdf417barcodegenerator/3228616-rows
    rows(): number;
    setRows(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a QR code generator filter.
   * https://developer.apple.com/documentation/coreimage/ciqrcodegenerator
   */
  interface CIQRCodeGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciqrcodegenerator/3228682-correctionlevel
    correctionLevel(): string | cocoascript.NSString;
    setCorrectionLevel(): void;
    // https://developer.apple.com/documentation/coreimage/ciqrcodegenerator/3228683-message
    message(): NSData;
    setMessage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an accordion fold transition filter.
   * https://developer.apple.com/documentation/coreimage/ciaccordionfoldtransition
   */
  interface CIAccordionFoldTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/ciaccordionfoldtransition/3228050-bottomheight
    bottomHeight(): number;
    setBottomHeight(): void;
    // https://developer.apple.com/documentation/coreimage/ciaccordionfoldtransition/3228051-foldshadowamount
    foldShadowAmount(): number;
    setFoldShadowAmount(): void;
    // https://developer.apple.com/documentation/coreimage/ciaccordionfoldtransition/3228052-numberoffolds
    numberOfFolds(): number;
    setNumberOfFolds(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a composite operation filter.
   * https://developer.apple.com/documentation/coreimage/cicompositeoperation
   */
  interface CICompositeOperation extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicompositeoperation/3228182-backgroundimage
    backgroundImage(): CIImage;
    setBackgroundImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicompositeoperation/3228183-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a affine clamp filter.
   * https://developer.apple.com/documentation/coreimage/ciaffineclamp
   */
  interface CIAffineClamp extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciaffineclamp/3228054-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciaffineclamp/3228055-transform
    transform(): CGAffineTransform;
    setTransform(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an affine tile filter.
   * https://developer.apple.com/documentation/coreimage/ciaffinetile
   */
  interface CIAffineTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciaffinetile/3228057-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciaffinetile/3228058-transform
    transform(): CGAffineTransform;
    setTransform(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an attributed-text image generator filter.
   * https://developer.apple.com/documentation/coreimage/ciattributedtextimagegenerator
   */
  interface CIAttributedTextImageGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciattributedtextimagegenerator/3228060-scalefactor
    scaleFactor(): number;
    setScaleFactor(): void;
    // https://developer.apple.com/documentation/coreimage/ciattributedtextimagegenerator/3228061-text
    text(): NSAttributedString;
    setText(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an Aztec code generator filter.
   * https://developer.apple.com/documentation/coreimage/ciazteccodegenerator
   */
  interface CIAztecCodeGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciazteccodegenerator/3228063-compactstyle
    compactStyle(): number;
    setCompactStyle(): void;
    // https://developer.apple.com/documentation/coreimage/ciazteccodegenerator/3228064-correctionlevel
    correctionLevel(): number;
    setCorrectionLevel(): void;
    // https://developer.apple.com/documentation/coreimage/ciazteccodegenerator/3228065-layers
    layers(): number;
    setLayers(): void;
    // https://developer.apple.com/documentation/coreimage/ciazteccodegenerator/3228066-message
    message(): NSData;
    setMessage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a barcode generator filter.
   * https://developer.apple.com/documentation/coreimage/cibarcodegenerator
   */
  interface CIBarcodeGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cibarcodegenerator/3228068-barcodedescriptor
    barcodeDescriptor(): CIBarcodeDescriptor;
    setBarcodeDescriptor(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bars swipe transition filter.
   * https://developer.apple.com/documentation/coreimage/cibarsswipetransition
   */
  interface CIBarsSwipeTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/cibarsswipetransition/3228070-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cibarsswipetransition/3228071-baroffset
    barOffset(): number;
    setBarOffset(): void;
    // https://developer.apple.com/documentation/coreimage/cibarsswipetransition/3228072-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bicubic scale transform filter.
   * https://developer.apple.com/documentation/coreimage/cibicubicscaletransform
   */
  interface CIBicubicScaleTransform extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cibicubicscaletransform/3228074-aspectratio
    aspectRatio(): number;
    setAspectRatio(): void;
    // https://developer.apple.com/documentation/coreimage/cibicubicscaletransform/3228075-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cibicubicscaletransform/3228076-parameterb
    parameterB(): number;
    setParameterB(): void;
    // https://developer.apple.com/documentation/coreimage/cibicubicscaletransform/3228077-parameterc
    parameterC(): number;
    setParameterC(): void;
    // https://developer.apple.com/documentation/coreimage/cibicubicscaletransform/3228078-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a blend with mask filter.
   * https://developer.apple.com/documentation/coreimage/ciblendwithmask
   */
  interface CIBlendWithMask extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciblendwithmask/3228080-backgroundimage
    backgroundImage(): CIImage;
    setBackgroundImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendwithmask/3228081-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciblendwithmask/3228082-maskimage
    maskImage(): CIImage;
    setMaskImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bloom filter.
   * https://developer.apple.com/documentation/coreimage/cibloom
   */
  interface CIBloom extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cibloom/3228084-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cibloom/3228085-intensity
    intensity(): number;
    setIntensity(): void;
    // https://developer.apple.com/documentation/coreimage/cibloom/3228086-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a bokeh blur filter.
   * https://developer.apple.com/documentation/coreimage/cibokehblur
   */
  interface CIBokehBlur extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cibokehblur/3228088-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cibokehblur/3228089-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cibokehblur/3228090-ringamount
    ringAmount(): number;
    setRingAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cibokehblur/3228091-ringsize
    ringSize(): number;
    setRingSize(): void;
    // https://developer.apple.com/documentation/coreimage/cibokehblur/3228092-softness
    softness(): number;
    setSoftness(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a box blur filter.
   * https://developer.apple.com/documentation/coreimage/ciboxblur
   */
  interface CIBoxBlur extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciboxblur/3228094-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciboxblur/3228095-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a checkerboard generator filter.
   * https://developer.apple.com/documentation/coreimage/cicheckerboardgenerator
   */
  interface CICheckerboardGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicheckerboardgenerator/3228105-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cicheckerboardgenerator/3228106-color0
    color0(): CIColor;
    setColor0(): void;
    // https://developer.apple.com/documentation/coreimage/cicheckerboardgenerator/3228107-color1
    color1(): CIColor;
    setColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cicheckerboardgenerator/3228108-sharpness
    sharpness(): number;
    setSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cicheckerboardgenerator/3228109-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a circular screen filter.
   * https://developer.apple.com/documentation/coreimage/cicircularscreen
   */
  interface CICircularScreen extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicircularscreen/3228111-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cicircularscreen/3228112-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicircularscreen/3228113-sharpness
    sharpness(): number;
    setSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cicircularscreen/3228114-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Code 128 barcode generator filter.
   * https://developer.apple.com/documentation/coreimage/cicode128barcodegenerator
   */
  interface CICode128BarcodeGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicode128barcodegenerator/3228116-barcodeheight
    barcodeHeight(): number;
    setBarcodeHeight(): void;
    // https://developer.apple.com/documentation/coreimage/cicode128barcodegenerator/3228117-message
    message(): NSData;
    setMessage(): void;
    // https://developer.apple.com/documentation/coreimage/cicode128barcodegenerator/3228118-quietspace
    quietSpace(): number;
    setQuietSpace(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color clamp filter.
   * https://developer.apple.com/documentation/coreimage/cicolorclamp
   */
  interface CIColorClamp extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorclamp/3228120-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorclamp/3228121-maxcomponents
    maxComponents(): CIVector;
    setMaxComponents(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorclamp/3228122-mincomponents
    minComponents(): CIVector;
    setMinComponents(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color controls filter.
   * https://developer.apple.com/documentation/coreimage/cicolorcontrols
   */
  interface CIColorControls extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorcontrols/3228124-brightness
    brightness(): number;
    setBrightness(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcontrols/3228125-contrast
    contrast(): number;
    setContrast(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcontrols/3228126-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcontrols/3228127-saturation
    saturation(): number;
    setSaturation(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cross-polynomial filter.
   * https://developer.apple.com/documentation/coreimage/cicolorcrosspolynomial
   */
  interface CIColorCrossPolynomial extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorcrosspolynomial/3228129-bluecoefficients
    blueCoefficients(): CIVector;
    setBlueCoefficients(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcrosspolynomial/3228130-greencoefficients
    greenCoefficients(): CIVector;
    setGreenCoefficients(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcrosspolynomial/3228131-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcrosspolynomial/3228132-redcoefficients
    redCoefficients(): CIVector;
    setRedCoefficients(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube filter.
   * https://developer.apple.com/documentation/coreimage/cicolorcube
   */
  interface CIColorCube extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorcube/3228134-cubedata
    cubeData(): NSData;
    setCubeData(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcube/3228135-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcube/3228136-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube with color space filter.
   * https://developer.apple.com/documentation/coreimage/cicolorcubewithcolorspace
   */
  interface CIColorCubeWithColorSpace extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorcubewithcolorspace/3228138-colorspace
    colorSpace(): CGColorSpaceRef;
    setColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubewithcolorspace/3228139-cubedata
    cubeData(): NSData;
    setCubeData(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubewithcolorspace/3228140-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubewithcolorspace/3228141-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube mixed with mask filter.
   * https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask
   */
  interface CIColorCubesMixedWithMask extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/3228143-colorspace
    colorSpace(): CGColorSpaceRef;
    setColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/3228144-cube0data
    cube0Data(): NSData;
    setCube0Data(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/3228145-cube1data
    cube1Data(): NSData;
    setCube1Data(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/3228146-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/3228147-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcubesmixedwithmask/3228148-maskimage
    maskImage(): CIImage;
    setMaskImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color curves filter.
   * https://developer.apple.com/documentation/coreimage/cicolorcurves
   */
  interface CIColorCurves extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorcurves/3228150-colorspace
    colorSpace(): CGColorSpaceRef;
    setColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcurves/3228151-curvesdata
    curvesData(): NSData;
    setCurvesData(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcurves/3228152-curvesdomain
    curvesDomain(): CIVector;
    setCurvesDomain(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorcurves/3228153-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color invert filter.
   * https://developer.apple.com/documentation/coreimage/cicolorinvert
   */
  interface CIColorInvert extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorinvert/3228155-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color map filter.
   * https://developer.apple.com/documentation/coreimage/cicolormap
   */
  interface CIColorMap extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolormap/3228157-gradientimage
    gradientImage(): CIImage;
    setGradientImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormap/3228158-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color matrix filter.
   * https://developer.apple.com/documentation/coreimage/cicolormatrix
   */
  interface CIColorMatrix extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolormatrix/3228160-avector
    AVector(): CIVector;
    setAVector(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormatrix/3228161-bvector
    BVector(): CIVector;
    setBVector(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormatrix/3228162-gvector
    GVector(): CIVector;
    setGVector(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormatrix/3228163-rvector
    RVector(): CIVector;
    setRVector(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormatrix/3228164-biasvector
    biasVector(): CIVector;
    setBiasVector(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormatrix/3228165-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color monochrome filter.
   * https://developer.apple.com/documentation/coreimage/cicolormonochrome
   */
  interface CIColorMonochrome extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolormonochrome/3228167-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormonochrome/3228168-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolormonochrome/3228169-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color polynomial filter.
   * https://developer.apple.com/documentation/coreimage/cicolorpolynomial
   */
  interface CIColorPolynomial extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorpolynomial/3228171-alphacoefficients
    alphaCoefficients(): CIVector;
    setAlphaCoefficients(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorpolynomial/3228172-bluecoefficients
    blueCoefficients(): CIVector;
    setBlueCoefficients(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorpolynomial/3228173-greencoefficients
    greenCoefficients(): CIVector;
    setGreenCoefficients(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorpolynomial/3228174-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorpolynomial/3228175-redcoefficients
    redCoefficients(): CIVector;
    setRedCoefficients(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a color posterize filter.
   * https://developer.apple.com/documentation/coreimage/cicolorposterize
   */
  interface CIColorPosterize extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicolorposterize/3228177-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicolorposterize/3228178-levels
    levels(): number;
    setLevels(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a comic effect filter.
   * https://developer.apple.com/documentation/coreimage/cicomiceffect
   */
  interface CIComicEffect extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicomiceffect/3228180-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a convolution filter.
   * https://developer.apple.com/documentation/coreimage/ciconvolution
   */
  interface CIConvolution extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciconvolution/3228185-bias
    bias(): number;
    setBias(): void;
    // https://developer.apple.com/documentation/coreimage/ciconvolution/3228186-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciconvolution/3228187-weights
    weights(): CIVector;
    setWeights(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a copy machine transition filter.
   * https://developer.apple.com/documentation/coreimage/cicopymachinetransition
   */
  interface CICopyMachineTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/cicopymachinetransition/3228189-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cicopymachinetransition/3228190-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/cicopymachinetransition/3228191-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/cicopymachinetransition/3228192-opacity
    opacity(): number;
    setOpacity(): void;
    // https://developer.apple.com/documentation/coreimage/cicopymachinetransition/3228193-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Core ML model filter.
   * https://developer.apple.com/documentation/coreimage/cicoremlmodel
   */
  interface CICoreMLModel extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicoremlmodel/3228195-headindex
    headIndex(): number;
    setHeadIndex(): void;
    // https://developer.apple.com/documentation/coreimage/cicoremlmodel/3228196-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicoremlmodel/3228197-model
    model(): MLModel;
    setModel(): void;
    // https://developer.apple.com/documentation/coreimage/cicoremlmodel/3228198-softmaxnormalization
    softmaxNormalization(): boolean;
    setSoftmaxNormalization(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a crystalize filter.
   * https://developer.apple.com/documentation/coreimage/cicrystallize
   */
  interface CICrystallize extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cicrystallize/3228200-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cicrystallize/3228201-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cicrystallize/3228202-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a depth-of-field filter.
   * https://developer.apple.com/documentation/coreimage/cidepthoffield
   */
  interface CIDepthOfField extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidepthoffield/3228204-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidepthoffield/3228205-point0
    point0(): CGPoint;
    setPoint0(): void;
    // https://developer.apple.com/documentation/coreimage/cidepthoffield/3228206-point1
    point1(): CGPoint;
    setPoint1(): void;
    // https://developer.apple.com/documentation/coreimage/cidepthoffield/3228207-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cidepthoffield/3228208-saturation
    saturation(): number;
    setSaturation(): void;
    // https://developer.apple.com/documentation/coreimage/cidepthoffield/3228209-unsharpmaskintensity
    unsharpMaskIntensity(): number;
    setUnsharpMaskIntensity(): void;
    // https://developer.apple.com/documentation/coreimage/cidepthoffield/3228210-unsharpmaskradius
    unsharpMaskRadius(): number;
    setUnsharpMaskRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a depth-to-disparity filter.
   * https://developer.apple.com/documentation/coreimage/cidepthtodisparity
   */
  interface CIDepthToDisparity extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidepthtodisparity/3228212-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a disc blur filter.
   * https://developer.apple.com/documentation/coreimage/cidiscblur
   */
  interface CIDiscBlur extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidiscblur/3228214-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidiscblur/3228215-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a disintegrate-with-mask transition filter.
   * https://developer.apple.com/documentation/coreimage/cidisintegratewithmasktransition
   */
  interface CIDisintegrateWithMaskTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/cidisintegratewithmasktransition/3228217-maskimage
    maskImage(): CIImage;
    setMaskImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidisintegratewithmasktransition/3228218-shadowdensity
    shadowDensity(): number;
    setShadowDensity(): void;
    // https://developer.apple.com/documentation/coreimage/cidisintegratewithmasktransition/3228219-shadowoffset
    shadowOffset(): CGPoint;
    setShadowOffset(): void;
    // https://developer.apple.com/documentation/coreimage/cidisintegratewithmasktransition/3228220-shadowradius
    shadowRadius(): number;
    setShadowRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a disparity-to-depth filter.
   * https://developer.apple.com/documentation/coreimage/cidisparitytodepth
   */
  interface CIDisparityToDepth extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidisparitytodepth/3228222-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a dissolve transition filter.
   * https://developer.apple.com/documentation/coreimage/cidissolvetransition
   */
  interface CIDissolveTransition extends CITransitionFilter {
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a dither filter.
   * https://developer.apple.com/documentation/coreimage/cidither
   */
  interface CIDither extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidither/3228225-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidither/3228226-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a document enhancer filter.
   * https://developer.apple.com/documentation/coreimage/cidocumentenhancer
   */
  interface CIDocumentEnhancer extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidocumentenhancer/3228228-amount
    amount(): number;
    setAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cidocumentenhancer/3228229-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a dot screen filter.
   * https://developer.apple.com/documentation/coreimage/cidotscreen
   */
  interface CIDotScreen extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cidotscreen/3228231-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cidotscreen/3228232-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cidotscreen/3228233-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cidotscreen/3228234-sharpness
    sharpness(): number;
    setSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cidotscreen/3228235-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an edge preserve upsample filter.
   * https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample
   */
  interface CIEdgePreserveUpsample extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample/3228237-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample/3228238-lumasigma
    lumaSigma(): number;
    setLumaSigma(): void;
    // https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample/3228239-smallimage
    smallImage(): CIImage;
    setSmallImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciedgepreserveupsample/3228240-spatialsigma
    spatialSigma(): number;
    setSpatialSigma(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an edge-work filter.
   * https://developer.apple.com/documentation/coreimage/ciedgework
   */
  interface CIEdgeWork extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciedgework/3228242-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciedgework/3228243-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an edges filter.
   * https://developer.apple.com/documentation/coreimage/ciedges
   */
  interface CIEdges extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciedges/3228245-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciedges/3228246-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an eightfold reflected tile filter.
   * https://developer.apple.com/documentation/coreimage/cieightfoldreflectedtile
   */
  interface CIEightfoldReflectedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cieightfoldreflectedtile/3228248-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cieightfoldreflectedtile/3228249-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cieightfoldreflectedtile/3228250-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cieightfoldreflectedtile/3228251-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an exposure adjust filter.
   * https://developer.apple.com/documentation/coreimage/ciexposureadjust
   */
  interface CIExposureAdjust extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciexposureadjust/3228253-ev
    EV(): number;
    setEV(): void;
    // https://developer.apple.com/documentation/coreimage/ciexposureadjust/3228254-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a false color filter.
   * https://developer.apple.com/documentation/coreimage/cifalsecolor
   */
  interface CIFalseColor extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cifalsecolor/3228256-color0
    color0(): CIColor;
    setColor0(): void;
    // https://developer.apple.com/documentation/coreimage/cifalsecolor/3228257-color1
    color1(): CIColor;
    setColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cifalsecolor/3228258-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a flash transition filter.
   * https://developer.apple.com/documentation/coreimage/ciflashtransition
   */
  interface CIFlashTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/ciflashtransition/3228436-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/ciflashtransition/3228437-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/ciflashtransition/3228438-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/ciflashtransition/3228439-fadethreshold
    fadeThreshold(): number;
    setFadeThreshold(): void;
    // https://developer.apple.com/documentation/coreimage/ciflashtransition/3228440-maxstriationradius
    maxStriationRadius(): number;
    setMaxStriationRadius(): void;
    // https://developer.apple.com/documentation/coreimage/ciflashtransition/3228441-striationcontrast
    striationContrast(): number;
    setStriationContrast(): void;
    // https://developer.apple.com/documentation/coreimage/ciflashtransition/3228442-striationstrength
    striationStrength(): number;
    setStriationStrength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold reflected tile filter.
   * https://developer.apple.com/documentation/coreimage/cifourfoldreflectedtile
   */
  interface CIFourfoldReflectedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cifourfoldreflectedtile/3228444-acuteangle
    acuteAngle(): number;
    setAcuteAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldreflectedtile/3228445-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldreflectedtile/3228446-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldreflectedtile/3228447-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldreflectedtile/3228448-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold rotated tile filter.
   * https://developer.apple.com/documentation/coreimage/cifourfoldrotatedtile
   */
  interface CIFourfoldRotatedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cifourfoldrotatedtile/3228450-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldrotatedtile/3228451-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldrotatedtile/3228452-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldrotatedtile/3228453-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold translated tile filter.
   * https://developer.apple.com/documentation/coreimage/cifourfoldtranslatedtile
   */
  interface CIFourfoldTranslatedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cifourfoldtranslatedtile/3228455-acuteangle
    acuteAngle(): number;
    setAcuteAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldtranslatedtile/3228456-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldtranslatedtile/3228457-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldtranslatedtile/3228458-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cifourfoldtranslatedtile/3228459-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Gabor gradients filter.
   * https://developer.apple.com/documentation/coreimage/cigaborgradients
   */
  interface CIGaborGradients extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cigaborgradients/3325514-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a gamma adjust filter.
   * https://developer.apple.com/documentation/coreimage/cigammaadjust
   */
  interface CIGammaAdjust extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cigammaadjust/3228461-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cigammaadjust/3228462-power
    power(): number;
    setPower(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Gaussian blur filter.
   * https://developer.apple.com/documentation/coreimage/cigaussianblur
   */
  interface CIGaussianBlur extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cigaussianblur/3228464-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cigaussianblur/3228465-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Gaussian gradient filter.
   * https://developer.apple.com/documentation/coreimage/cigaussiangradient
   */
  interface CIGaussianGradient extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cigaussiangradient/3228467-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cigaussiangradient/3228468-color0
    color0(): CIColor;
    setColor0(): void;
    // https://developer.apple.com/documentation/coreimage/cigaussiangradient/3228469-color1
    color1(): CIColor;
    setColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cigaussiangradient/3228470-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a glide reflected tile filter.
   * https://developer.apple.com/documentation/coreimage/ciglidereflectedtile
   */
  interface CIGlideReflectedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciglidereflectedtile/3228472-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/ciglidereflectedtile/3228473-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/ciglidereflectedtile/3228474-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciglidereflectedtile/3228475-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a gloom filter.
   * https://developer.apple.com/documentation/coreimage/cigloom
   */
  interface CIGloom extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cigloom/3228477-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cigloom/3228478-intensity
    intensity(): number;
    setIntensity(): void;
    // https://developer.apple.com/documentation/coreimage/cigloom/3228479-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hatched screen filter.
   * https://developer.apple.com/documentation/coreimage/cihatchedscreen
   */
  interface CIHatchedScreen extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cihatchedscreen/3228481-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cihatchedscreen/3228482-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cihatchedscreen/3228483-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cihatchedscreen/3228484-sharpness
    sharpness(): number;
    setSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cihatchedscreen/3228485-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a height-field-from-mask filter.
   * https://developer.apple.com/documentation/coreimage/ciheightfieldfrommask
   */
  interface CIHeightFieldFromMask extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciheightfieldfrommask/3228487-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciheightfieldfrommask/3228488-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hexagonal pixellate filter.
   * https://developer.apple.com/documentation/coreimage/cihexagonalpixellate
   */
  interface CIHexagonalPixellate extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cihexagonalpixellate/3228490-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cihexagonalpixellate/3228491-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cihexagonalpixellate/3228492-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a highlight-shadow adjust filter.
   * https://developer.apple.com/documentation/coreimage/cihighlightshadowadjust
   */
  interface CIHighlightShadowAdjust extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cihighlightshadowadjust/3228494-highlightamount
    highlightAmount(): number;
    setHighlightAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cihighlightshadowadjust/3228495-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cihighlightshadowadjust/3228496-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cihighlightshadowadjust/3228497-shadowamount
    shadowAmount(): number;
    setShadowAmount(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hue adjust filter.
   * https://developer.apple.com/documentation/coreimage/cihueadjust
   */
  interface CIHueAdjust extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cihueadjust/3228499-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cihueadjust/3228500-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a hue-saturation-value gradient filter.
   * https://developer.apple.com/documentation/coreimage/cihuesaturationvaluegradient
   */
  interface CIHueSaturationValueGradient extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cihuesaturationvaluegradient/3228502-colorspace
    colorSpace(): CGColorSpaceRef;
    setColorSpace(): void;
    // https://developer.apple.com/documentation/coreimage/cihuesaturationvaluegradient/3228503-dither
    dither(): number;
    setDither(): void;
    // https://developer.apple.com/documentation/coreimage/cihuesaturationvaluegradient/3228504-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cihuesaturationvaluegradient/3228505-softness
    softness(): number;
    setSoftness(): void;
    // https://developer.apple.com/documentation/coreimage/cihuesaturationvaluegradient/3228506-value
    value(): number;
    setValue(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a kaleidoscope filter.
   * https://developer.apple.com/documentation/coreimage/cikaleidoscope
   */
  interface CIKaleidoscope extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cikaleidoscope/3228508-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cikaleidoscope/3228509-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cikaleidoscope/3228510-count
    count(): NSInteger;
    setCount(): void;
    // https://developer.apple.com/documentation/coreimage/cikaleidoscope/3228511-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a keystone correction combined filter.
   * https://developer.apple.com/documentation/coreimage/cikeystonecorrectioncombined
   */
  interface CIKeystoneCorrectionCombined extends CIFourCoordinateGeometryFilter {
    // https://developer.apple.com/documentation/coreimage/cikeystonecorrectioncombined/3325518-focallength
    focalLength(): number;
    setFocalLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a keystone correction horizontal filter.
   * https://developer.apple.com/documentation/coreimage/cikeystonecorrectionhorizontal
   */
  interface CIKeystoneCorrectionHorizontal extends CIFourCoordinateGeometryFilter {
    // https://developer.apple.com/documentation/coreimage/cikeystonecorrectionhorizontal/3325525-focallength
    focalLength(): number;
    setFocalLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a keystone correction vertical filter.
   * https://developer.apple.com/documentation/coreimage/cikeystonecorrectionvertical
   */
  interface CIKeystoneCorrectionVertical extends CIFourCoordinateGeometryFilter {
    // https://developer.apple.com/documentation/coreimage/cikeystonecorrectionvertical/3325532-focallength
    focalLength(): number;
    setFocalLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a Lanczos scale transform filter.
   * https://developer.apple.com/documentation/coreimage/cilanczosscaletransform
   */
  interface CILanczosScaleTransform extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilanczosscaletransform/3228516-aspectratio
    aspectRatio(): number;
    setAspectRatio(): void;
    // https://developer.apple.com/documentation/coreimage/cilanczosscaletransform/3228517-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cilanczosscaletransform/3228518-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a lenticular halo generator filter.
   * https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator
   */
  interface CILenticularHaloGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228520-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228521-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228522-halooverlap
    haloOverlap(): number;
    setHaloOverlap(): void;
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228523-haloradius
    haloRadius(): number;
    setHaloRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228524-halowidth
    haloWidth(): number;
    setHaloWidth(): void;
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228525-striationcontrast
    striationContrast(): number;
    setStriationContrast(): void;
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228526-striationstrength
    striationStrength(): number;
    setStriationStrength(): void;
    // https://developer.apple.com/documentation/coreimage/cilenticularhalogenerator/3228527-time
    time(): number;
    setTime(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a line overlay filter.
   * https://developer.apple.com/documentation/coreimage/cilineoverlay
   */
  interface CILineOverlay extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilineoverlay/3228529-nrnoiselevel
    NRNoiseLevel(): number;
    setNRNoiseLevel(): void;
    // https://developer.apple.com/documentation/coreimage/cilineoverlay/3228530-nrsharpness
    NRSharpness(): number;
    setNRSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cilineoverlay/3228531-contrast
    contrast(): number;
    setContrast(): void;
    // https://developer.apple.com/documentation/coreimage/cilineoverlay/3228532-edgeintensity
    edgeIntensity(): number;
    setEdgeIntensity(): void;
    // https://developer.apple.com/documentation/coreimage/cilineoverlay/3228533-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cilineoverlay/3228534-threshold
    threshold(): number;
    setThreshold(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a line screen filter.
   * https://developer.apple.com/documentation/coreimage/cilinescreen
   */
  interface CILineScreen extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilinescreen/3228536-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cilinescreen/3228537-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cilinescreen/3228538-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cilinescreen/3228539-sharpness
    sharpness(): number;
    setSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cilinescreen/3228540-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a linear gradient filter.
   * https://developer.apple.com/documentation/coreimage/cilineargradient
   */
  interface CILinearGradient extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilineargradient/3228542-color0
    color0(): CIColor;
    setColor0(): void;
    // https://developer.apple.com/documentation/coreimage/cilineargradient/3228543-color1
    color1(): CIColor;
    setColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cilineargradient/3228544-point0
    point0(): CGPoint;
    setPoint0(): void;
    // https://developer.apple.com/documentation/coreimage/cilineargradient/3228545-point1
    point1(): CGPoint;
    setPoint1(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a linear-to-sRGB filter.
   * https://developer.apple.com/documentation/coreimage/cilineartosrgbtonecurve
   */
  interface CILinearToSRGBToneCurve extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cilineartosrgbtonecurve/3228547-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mask-to-alpha filter.
   * https://developer.apple.com/documentation/coreimage/cimasktoalpha
   */
  interface CIMaskToAlpha extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimasktoalpha/3228549-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a masked variable blur filter.
   * https://developer.apple.com/documentation/coreimage/cimaskedvariableblur
   */
  interface CIMaskedVariableBlur extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimaskedvariableblur/3228551-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimaskedvariableblur/3228552-mask
    mask(): CIImage;
    setMask(): void;
    // https://developer.apple.com/documentation/coreimage/cimaskedvariableblur/3228553-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a maximum component filter.
   * https://developer.apple.com/documentation/coreimage/cimaximumcomponent
   */
  interface CIMaximumComponent extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimaximumcomponent/3228555-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a median filter.
   * https://developer.apple.com/documentation/coreimage/cimedian
   */
  interface CIMedian extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimedian/3228557-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mesh generator filter.
   * https://developer.apple.com/documentation/coreimage/cimeshgenerator
   */
  interface CIMeshGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimeshgenerator/3228559-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/cimeshgenerator/3228560-mesh
    mesh(): NSArray;
    setMesh(): void;
    // https://developer.apple.com/documentation/coreimage/cimeshgenerator/3228561-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a minimum component filter.
   * https://developer.apple.com/documentation/coreimage/ciminimumcomponent
   */
  interface CIMinimumComponent extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciminimumcomponent/3228563-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mix filter.
   * https://developer.apple.com/documentation/coreimage/cimix
   */
  interface CIMix extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimix/3228565-amount
    amount(): number;
    setAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cimix/3228566-backgroundimage
    backgroundImage(): CIImage;
    setBackgroundImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimix/3228567-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a mod transition filter.
   * https://developer.apple.com/documentation/coreimage/cimodtransition
   */
  interface CIModTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/cimodtransition/3228569-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cimodtransition/3228570-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cimodtransition/3228571-compression
    compression(): number;
    setCompression(): void;
    // https://developer.apple.com/documentation/coreimage/cimodtransition/3228572-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology gradient filter.
   * https://developer.apple.com/documentation/coreimage/cimorphologygradient
   */
  interface CIMorphologyGradient extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimorphologygradient/3228574-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimorphologygradient/3228575-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology maximum filter.
   * https://developer.apple.com/documentation/coreimage/cimorphologymaximum
   */
  interface CIMorphologyMaximum extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimorphologymaximum/3228577-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimorphologymaximum/3228578-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology minimum filter.
   * https://developer.apple.com/documentation/coreimage/cimorphologyminimum
   */
  interface CIMorphologyMinimum extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimorphologyminimum/3228580-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimorphologyminimum/3228581-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology rectangle maximum filter.
   * https://developer.apple.com/documentation/coreimage/cimorphologyrectanglemaximum
   */
  interface CIMorphologyRectangleMaximum extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimorphologyrectanglemaximum/3228583-height
    height(): number;
    setHeight(): void;
    // https://developer.apple.com/documentation/coreimage/cimorphologyrectanglemaximum/3228584-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimorphologyrectanglemaximum/3228585-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a morphology rectangle minimum filter.
   * https://developer.apple.com/documentation/coreimage/cimorphologyrectangleminimum
   */
  interface CIMorphologyRectangleMinimum extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimorphologyrectangleminimum/3228587-height
    height(): number;
    setHeight(): void;
    // https://developer.apple.com/documentation/coreimage/cimorphologyrectangleminimum/3228588-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimorphologyrectangleminimum/3228589-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a motion blur filter.
   * https://developer.apple.com/documentation/coreimage/cimotionblur
   */
  interface CIMotionBlur extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cimotionblur/3228591-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cimotionblur/3228592-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cimotionblur/3228593-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a noise reduction filter.
   * https://developer.apple.com/documentation/coreimage/cinoisereduction
   */
  interface CINoiseReduction extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cinoisereduction/3228595-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cinoisereduction/3228596-noiselevel
    noiseLevel(): number;
    setNoiseLevel(): void;
    // https://developer.apple.com/documentation/coreimage/cinoisereduction/3228597-sharpness
    sharpness(): number;
    setSharpness(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an optical tile filter.
   * https://developer.apple.com/documentation/coreimage/cioptile
   */
  interface CIOpTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cioptile/3228599-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cioptile/3228600-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cioptile/3228601-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cioptile/3228602-scale
    scale(): number;
    setScale(): void;
    // https://developer.apple.com/documentation/coreimage/cioptile/3228603-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a page curl transition filter.
   * https://developer.apple.com/documentation/coreimage/cipagecurltransition
   */
  interface CIPageCurlTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/cipagecurltransition/3228618-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurltransition/3228619-backsideimage
    backsideImage(): CIImage;
    setBacksideImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurltransition/3228620-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurltransition/3228621-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurltransition/3228622-shadingimage
    shadingImage(): CIImage;
    setShadingImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a page-curl-with-shadow transition filter.
   * https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition
   */
  interface CIPageCurlWithShadowTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition/3228624-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition/3228625-backsideimage
    backsideImage(): CIImage;
    setBacksideImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition/3228626-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition/3228627-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition/3228628-shadowamount
    shadowAmount(): number;
    setShadowAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition/3228629-shadowextent
    shadowExtent(): CGRect;
    setShadowExtent(): void;
    // https://developer.apple.com/documentation/coreimage/cipagecurlwithshadowtransition/3228630-shadowsize
    shadowSize(): number;
    setShadowSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a palette centroid filter.
   * https://developer.apple.com/documentation/coreimage/cipalettecentroid
   */
  interface CIPaletteCentroid extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cipalettecentroid/3228632-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipalettecentroid/3228633-paletteimage
    paletteImage(): CIImage;
    setPaletteImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipalettecentroid/3228634-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a palettize filter.
   * https://developer.apple.com/documentation/coreimage/cipalettize
   */
  interface CIPalettize extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cipalettize/3228636-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipalettize/3228637-paletteimage
    paletteImage(): CIImage;
    setPaletteImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipalettize/3228638-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a parallelogram tile filter.
   * https://developer.apple.com/documentation/coreimage/ciparallelogramtile
   */
  interface CIParallelogramTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciparallelogramtile/3228640-acuteangle
    acuteAngle(): number;
    setAcuteAngle(): void;
    // https://developer.apple.com/documentation/coreimage/ciparallelogramtile/3228641-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/ciparallelogramtile/3228642-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/ciparallelogramtile/3228643-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciparallelogramtile/3228644-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective correction filter.
   * https://developer.apple.com/documentation/coreimage/ciperspectivecorrection
   */
  interface CIPerspectiveCorrection extends CIFourCoordinateGeometryFilter {
    // https://developer.apple.com/documentation/coreimage/ciperspectivecorrection/3228648-crop
    crop(): boolean;
    setCrop(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective rotate filter.
   * https://developer.apple.com/documentation/coreimage/ciperspectiverotate
   */
  interface CIPerspectiveRotate extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciperspectiverotate/3325537-focallength
    focalLength(): number;
    setFocalLength(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectiverotate/3325538-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectiverotate/3325539-pitch
    pitch(): number;
    setPitch(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectiverotate/3325540-roll
    roll(): number;
    setRoll(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectiverotate/3325541-yaw
    yaw(): number;
    setYaw(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective tile filter.
   * https://developer.apple.com/documentation/coreimage/ciperspectivetile
   */
  interface CIPerspectiveTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciperspectivetile/3228653-bottomleft
    bottomLeft(): CGPoint;
    setBottomLeft(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectivetile/3228654-bottomright
    bottomRight(): CGPoint;
    setBottomRight(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectivetile/3228655-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectivetile/3228656-topleft
    topLeft(): CGPoint;
    setTopLeft(): void;
    // https://developer.apple.com/documentation/coreimage/ciperspectivetile/3228657-topright
    topRight(): CGPoint;
    setTopRight(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective transform filter.
   * https://developer.apple.com/documentation/coreimage/ciperspectivetransform
   */
  interface CIPerspectiveTransform extends CIFourCoordinateGeometryFilter {
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective transform with extent filter.
   * https://developer.apple.com/documentation/coreimage/ciperspectivetransformwithextent
   */
  interface CIPerspectiveTransformWithExtent extends CIFourCoordinateGeometryFilter {
    // https://developer.apple.com/documentation/coreimage/ciperspectivetransformwithextent/3228667-extent
    extent(): CGRect;
    setExtent(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a photo-effect filter.
   * https://developer.apple.com/documentation/coreimage/ciphotoeffect
   */
  interface CIPhotoEffect extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciphotoeffect/3228672-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a pixellate filter.
   * https://developer.apple.com/documentation/coreimage/cipixellate
   */
  interface CIPixellate extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cipixellate/3228674-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cipixellate/3228675-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipixellate/3228676-scale
    scale(): number;
    setScale(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a pointillize filter.
   * https://developer.apple.com/documentation/coreimage/cipointillize
   */
  interface CIPointillize extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cipointillize/3228678-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cipointillize/3228679-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cipointillize/3228680-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a radial gradient filter.
   * https://developer.apple.com/documentation/coreimage/ciradialgradient
   */
  interface CIRadialGradient extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciradialgradient/3228685-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/ciradialgradient/3228686-color0
    color0(): CIColor;
    setColor0(): void;
    // https://developer.apple.com/documentation/coreimage/ciradialgradient/3228687-color1
    color1(): CIColor;
    setColor1(): void;
    // https://developer.apple.com/documentation/coreimage/ciradialgradient/3228688-radius0
    radius0(): number;
    setRadius0(): void;
    // https://developer.apple.com/documentation/coreimage/ciradialgradient/3228689-radius1
    radius1(): number;
    setRadius1(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a random generator filter.
   * https://developer.apple.com/documentation/coreimage/cirandomgenerator
   */
  interface CIRandomGenerator extends CIFilter {
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a ripple transition filter.
   * https://developer.apple.com/documentation/coreimage/cirippletransition
   */
  interface CIRippleTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/cirippletransition/3228692-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cirippletransition/3228693-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/cirippletransition/3228694-scale
    scale(): number;
    setScale(): void;
    // https://developer.apple.com/documentation/coreimage/cirippletransition/3228695-shadingimage
    shadingImage(): CIImage;
    setShadingImage(): void;
    // https://developer.apple.com/documentation/coreimage/cirippletransition/3228696-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a rounded rectangle generator filter.
   * https://developer.apple.com/documentation/coreimage/ciroundedrectanglegenerator
   */
  interface CIRoundedRectangleGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciroundedrectanglegenerator/3338737-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/ciroundedrectanglegenerator/3338738-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/ciroundedrectanglegenerator/3338739-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an sRGB-to-linear filter.
   * https://developer.apple.com/documentation/coreimage/cisrgbtonecurvetolinear
   */
  interface CISRGBToneCurveToLinear extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cisrgbtonecurvetolinear/3228698-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a saliency map filter.
   * https://developer.apple.com/documentation/coreimage/cisaliencymap
   */
  interface CISaliencyMap extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cisaliencymap/3228700-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sepia-tone filter.
   * https://developer.apple.com/documentation/coreimage/cisepiatone
   */
  interface CISepiaTone extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cisepiatone/3228702-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cisepiatone/3228703-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a shaded material filter.
   * https://developer.apple.com/documentation/coreimage/cishadedmaterial
   */
  interface CIShadedMaterial extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cishadedmaterial/3228705-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cishadedmaterial/3228706-scale
    scale(): number;
    setScale(): void;
    // https://developer.apple.com/documentation/coreimage/cishadedmaterial/3228707-shadingimage
    shadingImage(): CIImage;
    setShadingImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sharpen luminance filter.
   * https://developer.apple.com/documentation/coreimage/cisharpenluminance
   */
  interface CISharpenLuminance extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cisharpenluminance/3228709-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cisharpenluminance/3228710-radius
    radius(): number;
    setRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cisharpenluminance/3228711-sharpness
    sharpness(): number;
    setSharpness(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sixfold reflected tile filter.
   * https://developer.apple.com/documentation/coreimage/cisixfoldreflectedtile
   */
  interface CISixfoldReflectedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cisixfoldreflectedtile/3228713-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cisixfoldreflectedtile/3228714-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cisixfoldreflectedtile/3228715-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cisixfoldreflectedtile/3228716-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sixfold rotated tile filter.
   * https://developer.apple.com/documentation/coreimage/cisixfoldrotatedtile
   */
  interface CISixfoldRotatedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cisixfoldrotatedtile/3228718-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cisixfoldrotatedtile/3228719-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cisixfoldrotatedtile/3228720-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cisixfoldrotatedtile/3228721-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a smooth linear gradient filter.
   * https://developer.apple.com/documentation/coreimage/cismoothlineargradient
   */
  interface CISmoothLinearGradient extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cismoothlineargradient/3228723-color0
    color0(): CIColor;
    setColor0(): void;
    // https://developer.apple.com/documentation/coreimage/cismoothlineargradient/3228724-color1
    color1(): CIColor;
    setColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cismoothlineargradient/3228725-point0
    point0(): CGPoint;
    setPoint0(): void;
    // https://developer.apple.com/documentation/coreimage/cismoothlineargradient/3228726-point1
    point1(): CGPoint;
    setPoint1(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a spot color filter.
   * https://developer.apple.com/documentation/coreimage/cispotcolor
   */
  interface CISpotColor extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228728-centercolor1
    centerColor1(): CIColor;
    setCenterColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228729-centercolor2
    centerColor2(): CIColor;
    setCenterColor2(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228730-centercolor3
    centerColor3(): CIColor;
    setCenterColor3(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228731-closeness1
    closeness1(): number;
    setCloseness1(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228732-closeness2
    closeness2(): number;
    setCloseness2(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228733-closeness3
    closeness3(): number;
    setCloseness3(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228734-contrast1
    contrast1(): number;
    setContrast1(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228735-contrast2
    contrast2(): number;
    setContrast2(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228736-contrast3
    contrast3(): number;
    setContrast3(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228737-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228738-replacementcolor1
    replacementColor1(): CIColor;
    setReplacementColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228739-replacementcolor2
    replacementColor2(): CIColor;
    setReplacementColor2(): void;
    // https://developer.apple.com/documentation/coreimage/cispotcolor/3228740-replacementcolor3
    replacementColor3(): CIColor;
    setReplacementColor3(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a spotlight filter.
   * https://developer.apple.com/documentation/coreimage/cispotlight
   */
  interface CISpotLight extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cispotlight/3228742-brightness
    brightness(): number;
    setBrightness(): void;
    // https://developer.apple.com/documentation/coreimage/cispotlight/3228743-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/cispotlight/3228744-concentration
    concentration(): number;
    setConcentration(): void;
    // https://developer.apple.com/documentation/coreimage/cispotlight/3228745-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cispotlight/3228746-lightpointsat
    lightPointsAt(): CIVector;
    setLightPointsAt(): void;
    // https://developer.apple.com/documentation/coreimage/cispotlight/3228747-lightposition
    lightPosition(): CIVector;
    setLightPosition(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a star-shine generator filter.
   * https://developer.apple.com/documentation/coreimage/cistarshinegenerator
   */
  interface CIStarShineGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228749-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228750-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228751-crossangle
    crossAngle(): number;
    setCrossAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228752-crossopacity
    crossOpacity(): number;
    setCrossOpacity(): void;
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228753-crossscale
    crossScale(): number;
    setCrossScale(): void;
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228754-crosswidth
    crossWidth(): number;
    setCrossWidth(): void;
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228755-epsilon
    epsilon(): number;
    setEpsilon(): void;
    // https://developer.apple.com/documentation/coreimage/cistarshinegenerator/3228756-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a straighten filter.
   * https://developer.apple.com/documentation/coreimage/cistraighten
   */
  interface CIStraighten extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cistraighten/3228758-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/cistraighten/3228759-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a stripes generator filter.
   * https://developer.apple.com/documentation/coreimage/cistripesgenerator
   */
  interface CIStripesGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cistripesgenerator/3228761-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cistripesgenerator/3228762-color0
    color0(): CIColor;
    setColor0(): void;
    // https://developer.apple.com/documentation/coreimage/cistripesgenerator/3228763-color1
    color1(): CIColor;
    setColor1(): void;
    // https://developer.apple.com/documentation/coreimage/cistripesgenerator/3228764-sharpness
    sharpness(): number;
    setSharpness(): void;
    // https://developer.apple.com/documentation/coreimage/cistripesgenerator/3228765-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a sunbeams generator filter.
   * https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator
   */
  interface CISunbeamsGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator/3228767-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator/3228768-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator/3228769-maxstriationradius
    maxStriationRadius(): number;
    setMaxStriationRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator/3228770-striationcontrast
    striationContrast(): number;
    setStriationContrast(): void;
    // https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator/3228771-striationstrength
    striationStrength(): number;
    setStriationStrength(): void;
    // https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator/3228772-sunradius
    sunRadius(): number;
    setSunRadius(): void;
    // https://developer.apple.com/documentation/coreimage/cisunbeamsgenerator/3228773-time
    time(): number;
    setTime(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a swipe transition filter.
   * https://developer.apple.com/documentation/coreimage/ciswipetransition
   */
  interface CISwipeTransition extends CITransitionFilter {
    // https://developer.apple.com/documentation/coreimage/ciswipetransition/3228775-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/ciswipetransition/3228776-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/ciswipetransition/3228777-extent
    extent(): CGRect;
    setExtent(): void;
    // https://developer.apple.com/documentation/coreimage/ciswipetransition/3228778-opacity
    opacity(): number;
    setOpacity(): void;
    // https://developer.apple.com/documentation/coreimage/ciswipetransition/3228779-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a temperature and tint filter.
   * https://developer.apple.com/documentation/coreimage/citemperatureandtint
   */
  interface CITemperatureAndTint extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citemperatureandtint/3228781-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citemperatureandtint/3228782-neutral
    neutral(): CIVector;
    setNeutral(): void;
    // https://developer.apple.com/documentation/coreimage/citemperatureandtint/3228783-targetneutral
    targetNeutral(): CIVector;
    setTargetNeutral(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a text image generator filter.
   * https://developer.apple.com/documentation/coreimage/citextimagegenerator
   */
  interface CITextImageGenerator extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citextimagegenerator/3228785-fontname
    fontName(): string | cocoascript.NSString;
    setFontName(): void;
    // https://developer.apple.com/documentation/coreimage/citextimagegenerator/3228786-fontsize
    fontSize(): number;
    setFontSize(): void;
    // https://developer.apple.com/documentation/coreimage/citextimagegenerator/3228787-scalefactor
    scaleFactor(): number;
    setScaleFactor(): void;
    // https://developer.apple.com/documentation/coreimage/citextimagegenerator/3228788-text
    text(): string | cocoascript.NSString;
    setText(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a thermal filter.
   * https://developer.apple.com/documentation/coreimage/cithermal
   */
  interface CIThermal extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cithermal/3228790-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a tone curve filter.
   * https://developer.apple.com/documentation/coreimage/citonecurve
   */
  interface CIToneCurve extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citonecurve/3228792-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citonecurve/3228793-point0
    point0(): CGPoint;
    setPoint0(): void;
    // https://developer.apple.com/documentation/coreimage/citonecurve/3228794-point1
    point1(): CGPoint;
    setPoint1(): void;
    // https://developer.apple.com/documentation/coreimage/citonecurve/3228795-point2
    point2(): CGPoint;
    setPoint2(): void;
    // https://developer.apple.com/documentation/coreimage/citonecurve/3228796-point3
    point3(): CGPoint;
    setPoint3(): void;
    // https://developer.apple.com/documentation/coreimage/citonecurve/3228797-point4
    point4(): CGPoint;
    setPoint4(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a triangle kaleidoscope filter.
   * https://developer.apple.com/documentation/coreimage/citrianglekaleidoscope
   */
  interface CITriangleKaleidoscope extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citrianglekaleidoscope/3228803-decay
    decay(): number;
    setDecay(): void;
    // https://developer.apple.com/documentation/coreimage/citrianglekaleidoscope/3228804-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citrianglekaleidoscope/3228805-point
    point(): CGPoint;
    setPoint(): void;
    // https://developer.apple.com/documentation/coreimage/citrianglekaleidoscope/3228806-rotation
    rotation(): number;
    setRotation(): void;
    // https://developer.apple.com/documentation/coreimage/citrianglekaleidoscope/3228807-size
    size(): number;
    setSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a triangle tile filter.
   * https://developer.apple.com/documentation/coreimage/citriangletile
   */
  interface CITriangleTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citriangletile/3228809-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/citriangletile/3228810-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/citriangletile/3228811-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citriangletile/3228812-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a twelvefold reflected tile filter.
   * https://developer.apple.com/documentation/coreimage/citwelvefoldreflectedtile
   */
  interface CITwelvefoldReflectedTile extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citwelvefoldreflectedtile/3228814-angle
    angle(): number;
    setAngle(): void;
    // https://developer.apple.com/documentation/coreimage/citwelvefoldreflectedtile/3228815-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/citwelvefoldreflectedtile/3228816-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citwelvefoldreflectedtile/3228817-width
    width(): number;
    setWidth(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an unsharp mask filter.
   * https://developer.apple.com/documentation/coreimage/ciunsharpmask
   */
  interface CIUnsharpMask extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciunsharpmask/3228819-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/ciunsharpmask/3228820-intensity
    intensity(): number;
    setIntensity(): void;
    // https://developer.apple.com/documentation/coreimage/ciunsharpmask/3228821-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a vibrance filter.
   * https://developer.apple.com/documentation/coreimage/civibrance
   */
  interface CIVibrance extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/civibrance/3228823-amount
    amount(): number;
    setAmount(): void;
    // https://developer.apple.com/documentation/coreimage/civibrance/3228824-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a vignette-effect filter.
   * https://developer.apple.com/documentation/coreimage/civignetteeffect
   */
  interface CIVignetteEffect extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/civignetteeffect/3228830-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/civignetteeffect/3228831-falloff
    falloff(): number;
    setFalloff(): void;
    // https://developer.apple.com/documentation/coreimage/civignetteeffect/3228832-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/civignetteeffect/3228833-intensity
    intensity(): number;
    setIntensity(): void;
    // https://developer.apple.com/documentation/coreimage/civignetteeffect/3228834-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a vignette filter.
   * https://developer.apple.com/documentation/coreimage/civignette
   */
  interface CIVignette extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/civignette/3228826-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/civignette/3228827-intensity
    intensity(): number;
    setIntensity(): void;
    // https://developer.apple.com/documentation/coreimage/civignette/3228828-radius
    radius(): number;
    setRadius(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a white-point adjust filter.
   * https://developer.apple.com/documentation/coreimage/ciwhitepointadjust
   */
  interface CIWhitePointAdjust extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/ciwhitepointadjust/3228836-color
    color(): CIColor;
    setColor(): void;
    // https://developer.apple.com/documentation/coreimage/ciwhitepointadjust/3228837-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure an X-ray filter.
   * https://developer.apple.com/documentation/coreimage/cixray
   */
  interface CIXRay extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cixray/3228839-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a zoom blur filter.
   * https://developer.apple.com/documentation/coreimage/cizoomblur
   */
  interface CIZoomBlur extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/cizoomblur/3228841-amount
    amount(): number;
    setAmount(): void;
    // https://developer.apple.com/documentation/coreimage/cizoomblur/3228842-center
    center(): CGPoint;
    setCenter(): void;
    // https://developer.apple.com/documentation/coreimage/cizoomblur/3228843-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/ciqrcodeerrorcorrectionlevel
  type CIQRCodeErrorCorrectionLevel = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/cidatamatrixcodeeccversion
  type CIDataMatrixCodeECCVersion = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/coreimage/kciinputlocaltonemapamountkey
declare const kCIInputLocalToneMapAmountKey: cocoascript.CIRAWFilterOption;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/cirenderdestinationalphamode
  type CIRenderDestinationAlphaMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/cicontextoption
  type CIContextOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/coreimage/ciimagerepresentationoption
  type CIImageRepresentationOption = cocoascript.NSString;
}
// https://developer.apple.com/documentation/coreimage/kciimageauxiliarysemanticsegmentationglassesmatte
declare const kCIImageAuxiliarySemanticSegmentationGlassesMatte: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageauxiliarysemanticsegmentationhairmatte
declare const kCIImageAuxiliarySemanticSegmentationHairMatte: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageauxiliarysemanticsegmentationskinmatte
declare const kCIImageAuxiliarySemanticSegmentationSkinMatte: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageauxiliarysemanticsegmentationskymatte
declare const kCIImageAuxiliarySemanticSegmentationSkyMatte: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimageauxiliarysemanticsegmentationteethmatte
declare const kCIImageAuxiliarySemanticSegmentationTeethMatte: cocoascript.CIImageOption;
// https://developer.apple.com/documentation/coreimage/kciimagetonemaphdrtosdr
declare const kCIImageToneMapHDRtoSDR: cocoascript.CIImageOption;
declare namespace cocoascript {
  /**
   * The properties you use to configure a Core Image filter.
   * https://developer.apple.com/documentation/coreimage/cifilter-gce
   */
  interface CIFilter {
    // https://developer.apple.com/documentation/coreimage/cifilter/3228048-outputimage
    outputImage(): CIImage;
    setOutputImage(): void;
    // https://developer.apple.com/documentation/coreimage/cifilter/3228047-customattributes
    customAttributes():CIFilter;
  }
}
declare namespace cocoascript {
  /**
   * The properties you use to configure a transition filter.
   * https://developer.apple.com/documentation/coreimage/citransitionfilter
   */
  interface CITransitionFilter extends CIFilter {
    // https://developer.apple.com/documentation/coreimage/citransitionfilter/3228799-inputimage
    inputImage(): CIImage;
    setInputImage(): void;
    // https://developer.apple.com/documentation/coreimage/citransitionfilter/3228800-targetimage
    targetImage(): CIImage;
    setTargetImage(): void;
    // https://developer.apple.com/documentation/coreimage/citransitionfilter/3228801-time
    time(): number;
    setTime(): void;
  }
}
// https://developer.apple.com/documentation/coreimage/kcicontextallowlowpower
declare const kCIContextAllowLowPower: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kcicontextname
declare const kCIContextName: cocoascript.CIContextOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationavportraiteffectsmatte
declare const kCIImageRepresentationAVPortraitEffectsMatte: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationavsemanticsegmentationmattes
declare const kCIImageRepresentationAVSemanticSegmentationMattes: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationportraiteffectsmatteimage
declare const kCIImageRepresentationPortraitEffectsMatteImage: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationsemanticsegmentationglassesmatteimage
declare const kCIImageRepresentationSemanticSegmentationGlassesMatteImage: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationsemanticsegmentationhairmatteimage
declare const kCIImageRepresentationSemanticSegmentationHairMatteImage: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationsemanticsegmentationskinmatteimage
declare const kCIImageRepresentationSemanticSegmentationSkinMatteImage: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationsemanticsegmentationskymatteimage
declare const kCIImageRepresentationSemanticSegmentationSkyMatteImage: cocoascript.CIImageRepresentationOption;
// https://developer.apple.com/documentation/coreimage/kciimagerepresentationsemanticsegmentationteethmatteimage
declare const kCIImageRepresentationSemanticSegmentationTeethMatteImage: cocoascript.CIImageRepresentationOption;
