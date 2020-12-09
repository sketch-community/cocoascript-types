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
  metalTexture(): cocoascript.MTLTexture;
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
  metalCommandBuffer(): cocoascript.MTLCommandBuffer;
  setMetalCommandBuffer(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639635-bytesperrow
  bytesPerRow(): cocoascript.size_t;
  setBytesPerRow(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciimageprocessoroutput/1639628-format
  format(): cocoascript.CIFormat;
  setFormat(): void;
}
}

