declare namespace cocoascript {
  /**
   * An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
   * doc://com.apple.documentation/documentation/appkit/nsopenglcontext
   */
  interface NSOpenGLContext extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436178-initwithformat
    initWithFormat_shareContext(format: cocoascript.NSOpenGLPixelFormat, share: cocoascript.NSOpenGLContext):cocoascript.NSOpenGLContext;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436180-initwithcglcontextobj
    initWithCGLContextObj(context: any):cocoascript.NSOpenGLContext;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436137-currentcontext
    currentContext(): cocoascript.NSOpenGLContext;
    setCurrentContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436212-makecurrentcontext
    makeCurrentContext():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436204-view
    setView(view: cocoascript.NSView):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436221-setfullscreen
    setFullScreen():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436113-setoffscreen
    setOffScreen_width_height_rowbytes(baseaddr: void, width: any, height: any, rowbytes: any):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436114-cleardrawable
    clearDrawable():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436135-update
    update():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436211-flushbuffer
    flushBuffer():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436166-copyattributesfromcontext
    copyAttributesFromContext_withMask(context: cocoascript.NSOpenGLContext, mask: any):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436199-setvalues
    setValues_forParameter(vals: any, param: cocoascript.NSOpenGLContextParameter):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436189-getvalues
    getValues_forParameter(vals: any, param: cocoascript.NSOpenGLContextParameter):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436216-currentvirtualscreen
    currentVirtualScreen(): any;
    setCurrentVirtualScreen(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436141-createtexture
    createTexture_fromView_internalFormat(target: any, view: cocoascript.NSView, format: any):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436158-cglcontextobj
    CGLContextObj(): any;
    setCGLContextObj(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436105-setpixelbuffer
    setPixelBuffer_cubeMapFace_mipMapLevel_currentVirtualScreen(pixelBuffer: cocoascript.NSOpenGLPixelBuffer, face: any, level: any, screen: any):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436218-pixelbuffer
    pixelBuffer():cocoascript.NSOpenGLPixelBuffer;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436122-pixelbuffercubemapface
    pixelBufferCubeMapFace():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436173-pixelbuffermipmaplevel
    pixelBufferMipMapLevel():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436164-settextureimagetopixelbuffer
    setTextureImageToPixelBuffer_colorBuffer(pixelBuffer: cocoascript.NSOpenGLPixelBuffer, source: any):void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglcontext/1436140-pixelformat
    pixelFormat(): cocoascript.NSOpenGLPixelFormat;
    setPixelFormat(): void;
    //
    alloc():cocoascript.NSOpenGLContext;
    //
    init():cocoascript.NSOpenGLContext;
  }
}

declare const NSOpenGLContext: cocoascript.NSOpenGLContext;
