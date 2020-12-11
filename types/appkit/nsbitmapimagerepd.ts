declare namespace cocoascript {
  /**
   * An object that renders an image from bitmap data.
   * doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep
   */
  interface NSBitmapImageRep extends NSImageRep {
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395530-colorizebymappinggray
    colorizeByMappingGray_toColor_blackMapping_whiteMapping(midPoint: cocoascript.CGFloat, midPointColor: cocoascript.NSColor, shadowColor: cocoascript.NSColor, lightColor: cocoascript.NSColor):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395538-initwithbitmapdataplanes
    initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bitmapFormat_bytesPerRow_bitsPerPixel(planes: cocoascript._Nullable, width: cocoascript.NSInteger, height: cocoascript.NSInteger, bps: cocoascript.NSInteger, spp: cocoascript.NSInteger, alpha: cocoascript.BOOL, isPlanar: cocoascript.BOOL, colorSpaceName: cocoascript.NSColorSpaceName, bitmapFormat: cocoascript.NSBitmapFormat, rBytes: cocoascript.NSInteger, pBits: cocoascript.NSInteger):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395540-initwithbitmapdataplanes
    initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bytesPerRow_bitsPerPixel(planes: cocoascript._Nullable, width: cocoascript.NSInteger, height: cocoascript.NSInteger, bps: cocoascript.NSInteger, spp: cocoascript.NSInteger, alpha: cocoascript.BOOL, isPlanar: cocoascript.BOOL, colorSpaceName: cocoascript.NSColorSpaceName, rBytes: cocoascript.NSInteger, pBits: cocoascript.NSInteger):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395423-initwithcgimage
    initWithCGImage(cgImage: cocoascript.CGImageRef):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395587-initwithciimage
    initWithCIImage(ciImage: cocoascript.CIImage):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395569-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395522-initforincrementalload
    initForIncrementalLoad():cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395550-initwithfocusedviewrect
    initWithFocusedViewRect(rect: cocoascript.NSRect):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395508-bitmapformat
    bitmapFormat(): cocoascript.NSBitmapFormat;
    setBitmapFormat(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395488-bitsperpixel
    bitsPerPixel(): cocoascript.NSInteger;
    setBitsPerPixel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395559-bytesperplane
    bytesPerPlane(): cocoascript.NSInteger;
    setBytesPerPlane(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395454-bytesperrow
    bytesPerRow(): cocoascript.NSInteger;
    setBytesPerRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395482-planar
    planar(): cocoascript.BOOL;
    setPlanar(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395474-numberofplanes
    numberOfPlanes(): cocoascript.NSInteger;
    setNumberOfPlanes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395577-samplesperpixel
    samplesPerPixel(): cocoascript.NSInteger;
    setSamplesPerPixel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395421-bitmapdata
    bitmapData(): cocoascript.char;
    setBitmapData(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395490-getbitmapdataplanes
    getBitmapDataPlanes(data: cocoascript._Nullable):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395557-tiffrepresentation
    TIFFRepresentation(): cocoascript.NSData;
    setTIFFRepresentation(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395524-tiffrepresentationusingcompressi
    TIFFRepresentationUsingCompression_factor(comp: cocoascript.NSTIFFCompression, factor: number):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395458-representationusingtype
    representationUsingType_properties(storageType: cocoascript.NSBitmapImageFileType, properties: cocoascript.NSBitmapImageRep):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395427-canbecompressedusing
    canBeCompressedUsing(compression: cocoascript.NSTIFFCompression):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395478-setcompression
    setCompression_factor(compression: cocoascript.NSTIFFCompression, factor: number):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395515-getcompression
    getCompression_factor(compression: cocoascript.NSTIFFCompression, factor: number):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395486-setproperty
    setProperty_withValue(property: cocoascript.NSBitmapImageRepPropertyKey, value: cocoascript.NSBitmapImageRep):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395492-valueforproperty
    valueForProperty(property: cocoascript.NSBitmapImageRepPropertyKey):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395464-incrementalloadfromdata
    incrementalLoadFromData_complete(data: cocoascript.NSData, complete: cocoascript.BOOL):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395472-setcolor
    setColor_atX_y(color: cocoascript.NSColor, x: cocoascript.NSInteger, y: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395583-coloratx
    colorAtX_y(x: cocoascript.NSInteger, y: cocoascript.NSInteger):cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395446-setpixel
    setPixel_atX_y(p: cocoascript.NSUInteger, x: cocoascript.NSInteger, y: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395567-getpixel
    getPixel_atX_y(p: cocoascript.NSUInteger, x: cocoascript.NSInteger, y: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395506-cgimage
    CGImage(): cocoascript.CGImageRef;
    setCGImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395470-bitmapimagerepbyconvertingtocolo
    bitmapImageRepByConvertingToColorSpace_renderingIntent(targetSpace: cocoascript.NSColorSpace, renderingIntent: cocoascript.NSColorRenderingIntent):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395512-bitmapimagerepbyretaggingwithcol
    bitmapImageRepByRetaggingWithColorSpace(newSpace: cocoascript.NSColorSpace):cocoascript.NSBitmapImageRep;
    // doc://com.apple.documentation/documentation/appkit/nsbitmapimagerep/1395468-colorspace
    colorSpace(): cocoascript.NSColorSpace;
    setColorSpace(): void;
    //
    alloc():cocoascript.NSBitmapImageRep;
    //
    init():cocoascript.NSBitmapImageRep;
  }
}

declare const NSBitmapImageRep: cocoascript.NSBitmapImageRep;
