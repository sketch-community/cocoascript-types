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
  metalTexture(): cocoascript.MTLTexture;
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
  bytesPerRow(): cocoascript.size_t;
  setBytesPerRow(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciimageprocessorinput/1639639-format
  format(): cocoascript.CIFormat;
  setFormat(): void;
}
}

