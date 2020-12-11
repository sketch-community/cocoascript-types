declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcplugincontext
   */
  interface QCPlugInContext {
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488849-cglcontextobj
    CGLContextObj():any;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488711-logmessage
    logMessage(format: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488731-userinfo
    userInfo():cocoascript.NSMutableDictionary;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488700-bounds
    bounds():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488846-colorspace
    colorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488754-outputimageproviderfrombufferwit
    outputImageProviderFromBufferWithPixelFormat_pixelsWide_pixelsHigh_baseAddress_bytesPerRow_releaseCallback_releaseContext_colorSpace_shouldColorMatch(format: cocoascript.NSString, width: cocoascript.NSUInteger, height: cocoascript.NSUInteger, baseAddress: void, rowBytes: cocoascript.NSUInteger, callback: cocoascript.QCPlugInBufferReleaseCallback, context: void, colorSpace: cocoascript.CGColorSpaceRef, colorMatch: cocoascript.BOOL):cocoascript.QCPlugInContext;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488756-outputimageproviderfromtexturewi
    outputImageProviderFromTextureWithPixelFormat_pixelsWide_pixelsHigh_name_flipped_releaseCallback_releaseContext_colorSpace_shouldColorMatch(format: cocoascript.NSString, width: cocoascript.NSUInteger, height: cocoascript.NSUInteger, name: cocoascript.GLuint, flipped: cocoascript.BOOL, callback: cocoascript.QCPlugInTextureReleaseCallback, context: void, colorSpace: cocoascript.CGColorSpaceRef, colorMatch: cocoascript.BOOL):cocoascript.QCPlugInContext;
    // doc://com.apple.documentation/documentation/quartz/qcplugincontext/1488750-compositionurl
    compositionURL():cocoascript.NSURL;
  }
}
