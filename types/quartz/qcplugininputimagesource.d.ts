declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource
   */
  interface QCPlugInInputImageSource {
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488736-locktexturerepresentationwithcol
    lockTextureRepresentationWithColorSpace_forBounds(colorSpace: cocoascript.CGColorSpaceRef, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488856-unlocktexturerepresentation
    unlockTextureRepresentation():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488746-lockbufferrepresentationwithpixe
    lockBufferRepresentationWithPixelFormat_colorSpace_forBounds(format: cocoascript.NSString, colorSpace: cocoascript.CGColorSpaceRef, bounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488704-bindtexturerepresentationtocglco
    bindTextureRepresentationToCGLContext_textureUnit_normalizeCoordinates(cgl_ctx: any, unit: any, flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488702-unbindtexturerepresentationfromc
    unbindTextureRepresentationFromCGLContext_textureUnit(cgl_ctx: any, unit: any):void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488764-unlockbufferrepresentation
    unlockBufferRepresentation():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488777-imagecolorspace
    imageColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488733-shouldcolormatch
    shouldColorMatch():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488855-texturepixelswide
    texturePixelsWide():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488768-texturepixelshigh
    texturePixelsHigh():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488769-texturetarget
    textureTarget():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488744-texturename
    textureName():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488836-texturecolorspace
    textureColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488693-textureflipped
    textureFlipped():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488798-texturematrix
    textureMatrix():cocoascript.const;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488784-imagebounds
    imageBounds():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488823-bufferpixelswide
    bufferPixelsWide():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488860-bufferpixelshigh
    bufferPixelsHigh():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488758-bufferpixelformat
    bufferPixelFormat():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488698-buffercolorspace
    bufferColorSpace():cocoascript.CGColorSpaceRef;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488774-bufferbaseaddress
    bufferBaseAddress():void;
    // doc://com.apple.documentation/documentation/quartz/qcplugininputimagesource/1488834-bufferbytesperrow
    bufferBytesPerRow():cocoascript.NSUInteger;
  }
}
