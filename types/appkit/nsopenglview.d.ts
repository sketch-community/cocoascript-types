declare namespace cocoascript {
  /**
   * A view that displays OpenGL content in a view.
   * doc://com.apple.documentation/documentation/appkit/nsopenglview
   */
  interface NSOpenGLView extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1414931-initwithframe
    initWithFrame_pixelFormat(frameRect: cocoascript.NSRect, format: cocoascript.NSOpenGLPixelFormat):cocoascript.NSOpenGLView;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1414946-pixelformat
    pixelFormat(): cocoascript.NSOpenGLPixelFormat;
    setPixelFormat(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1414940-prepareopengl
    prepareOpenGL():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1414936-clearglcontext
    clearGLContext():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1414942-openglcontext
    openGLContext(): cocoascript.NSOpenGLContext;
    setOpenGLContext(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1414948-reshape
    reshape():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1414933-update
    update():void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/1807226-wantsextendeddynamicrangeopengls
    wantsExtendedDynamicRangeOpenGLSurface(): cocoascript.BOOL;
    setWantsExtendedDynamicRangeOpenGLSurface(): void;
    // doc://com.apple.documentation/documentation/appkit/nsopenglview/3172203-wantsbestresolutionopenglsurface
    wantsBestResolutionOpenGLSurface(): cocoascript.BOOL;
    setWantsBestResolutionOpenGLSurface(): void;
    //
    alloc():cocoascript.NSOpenGLView;
    //
    init():cocoascript.NSOpenGLView;
  }
}

declare const NSOpenGLView: cocoascript.NSOpenGLView;
