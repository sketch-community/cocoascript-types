declare namespace cocoascript {
/**
 * An object that specifies the types of buffers and other attributes of the OpenGL context. 
 * doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat
 */
interface NSOpenGLPixelFormat extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436129-initwithcglpixelformatobj
  initWithCGLPixelFormatObj(format: any):cocoascript.NSOpenGLPixelFormat;
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436219-initwithattributes
  initWithAttributes(attribs: cocoascript.NSOpenGLPixelFormatAttribute):cocoascript.NSOpenGLPixelFormat;
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436207-initwithdata
  initWithData(attribs: cocoascript.NSData):cocoascript.NSOpenGLPixelFormat;
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436148-cglpixelformatobj
  CGLPixelFormatObj(): any;
  setCGLPixelFormatObj(): void;
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436109-getvalues
  getValues_forAttribute_forVirtualScreen(vals: any, attrib: cocoascript.NSOpenGLPixelFormatAttribute, screen: any):void;
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436144-numberofvirtualscreens
  numberOfVirtualScreens(): any;
  setNumberOfVirtualScreens(): void;
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436127-attributes
  attributes():cocoascript.NSData;
  // doc://com.apple.documentation/documentation/appkit/nsopenglpixelformat/1436128-setattributes
  setAttributes(attribs: cocoascript.NSData):void;
  // 
  alloc():cocoascript.NSOpenGLPixelFormat;
  // 
  init():cocoascript.NSOpenGLPixelFormat;
}
}
declare const NSOpenGLPixelFormat: cocoascript.NSOpenGLPixelFormat;

