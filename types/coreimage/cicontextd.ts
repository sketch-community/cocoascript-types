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
  render_toMTLTexture_commandBuffer_bounds_colorSpace(image: cocoascript.CIImage, texture: cocoascript.MTLTexture, commandBuffer: cocoascript.MTLCommandBuffer, bounds: cocoascript.CGRect, colorSpace: cocoascript.CGColorSpaceRef):void;
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
  writeTIFFRepresentationOfImage_toURL_format_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coreimage/cicontext/1642218-writejpegrepresentationofimage
  writeJPEGRepresentationOfImage_toURL_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coreimage/cicontext/2866197-writepngrepresentationofimage
  writePNGRepresentationOfImage_toURL_format_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coreimage/cicontext/2902266-writeheifrepresentationofimage
  writeHEIFRepresentationOfImage_toURL_format_colorSpace_options_error(image: cocoascript.CIImage, url: cocoascript.NSURL, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef, options: cocoascript.CIContext, errorPtr: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coreimage/cicontext/2875428-preparerender
  prepareRender_fromRect_toDestination_atPoint_error(image: cocoascript.CIImage, fromRect: cocoascript.CGRect, destination: cocoascript.CIRenderDestination, atPoint: cocoascript.CGPoint, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coreimage/cicontext/2875450-starttasktoclear
  startTaskToClear_error(destination: cocoascript.CIRenderDestination, error: cocoascript._Nullable):cocoascript.CIRenderTask;
  // doc://com.apple.documentation/documentation/coreimage/cicontext/2875448-starttasktorender
  startTaskToRender_fromRect_toDestination_atPoint_error(image: cocoascript.CIImage, fromRect: cocoascript.CGRect, destination: cocoascript.CIRenderDestination, atPoint: cocoascript.CGPoint, error: cocoascript._Nullable):cocoascript.CIRenderTask;
  // doc://com.apple.documentation/documentation/coreimage/cicontext/2875429-starttasktorender
  startTaskToRender_toDestination_error(image: cocoascript.CIImage, destination: cocoascript.CIRenderDestination, error: cocoascript._Nullable):cocoascript.CIRenderTask;
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

