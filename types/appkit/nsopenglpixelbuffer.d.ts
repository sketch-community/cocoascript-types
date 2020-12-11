declare namespace cocoascript {
  /**
   * An object that provides access to accelerated offscreen rendering.
   * doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer
   */
  interface NSOpenGLPixelBuffer extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436115-initwithtexturetarget
    initWithTextureTarget_textureInternalFormat_textureMaxMipMapLevel_pixelsWide_pixelsHigh(target: any, format: any, maxLevel: any, pixelsWide: any, pixelsHigh: any):cocoascript.NSOpenGLPixelBuffer;
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436176-initwithcglpbufferobj
    initWithCGLPBufferObj(pbuffer: any):cocoascript.NSOpenGLPixelBuffer;
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436155-cglpbufferobj
    CGLPBufferObj(): any;
    setCGLPBufferObj(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436220-pixelshigh
    pixelsHigh(): any;
    setPixelsHigh(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436217-pixelswide
    pixelsWide(): any;
    setPixelsWide(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436215-textureinternalformat
    textureInternalFormat(): any;
    setTextureInternalFormat(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436120-texturemaxmipmaplevel
    textureMaxMipMapLevel(): any;
    setTextureMaxMipMapLevel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglpixelbuffer/1436187-texturetarget
    textureTarget(): any;
    setTextureTarget(): void;
    //
    alloc():cocoascript.NSOpenGLPixelBuffer;
    //
    init():cocoascript.NSOpenGLPixelBuffer;
  }
}

declare const NSOpenGLPixelBuffer: cocoascript.NSOpenGLPixelBuffer;
