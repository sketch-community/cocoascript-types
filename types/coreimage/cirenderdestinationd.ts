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
  initWithMTLTexture_commandBuffer(texture: cocoascript.MTLTexture, commandBuffer: cocoascript.MTLCommandBuffer):cocoascript.CIRenderDestination;
  // doc://com.apple.documentation/documentation/coreimage/cirenderdestination/2880274-initwithwidth
  initWithWidth_height_pixelFormat_commandBuffer_mtlTextureProvider(width: cocoascript.NSUInteger, height: cocoascript.NSUInteger, pixelFormat: cocoascript.MTLPixelFormat, commandBuffer: cocoascript.MTLCommandBuffer, block: void):cocoascript.CIRenderDestination;
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

