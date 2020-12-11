declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider
   */
  interface QCPlugInOutputImageProvider {
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488841-rendertobuffer
    renderToBuffer_withBytesPerRow_pixelFormat_forBounds(baseAddress: void, rowBytes: cocoascript.NSUInteger, format: cocoascript.NSString, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488717-copyrenderedtextureforcglcontext
    copyRenderedTextureForCGLContext_pixelFormat_bounds_isFlipped(cgl_ctx: any, format: cocoascript.NSString, bounds: cocoascript.NSRect, flipped: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488815-renderwithcglcontext
    renderWithCGLContext_forBounds(cgl_ctx: any, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488829-releaserenderedtexture
    releaseRenderedTexture_forCGLContext(name: cocoascript.GLuint, cgl_ctx: any):void;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488867-imagebounds
    imageBounds():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488715-imagecolorspace
    imageColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488825-shouldcolormatch
    shouldColorMatch():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488709-supportedbufferpixelformats
    supportedBufferPixelFormats():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488820-supportedrenderedtexturepixelfor
    supportedRenderedTexturePixelFormats():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/quartz/qcpluginoutputimageprovider/1488804-canrenderwithcglcontext
    canRenderWithCGLContext(cgl_ctx: any):cocoascript.BOOL;
  }
}
