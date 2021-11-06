declare namespace cocoascript {
  interface CVTimeStamp {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvimagebufferref
  type CVImageBufferRef = cocoascript.CVBufferRef;
}
declare namespace cocoascript {
  interface CVDisplayLinkRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvpixelbufferref
  type CVPixelBufferRef = cocoascript.CVImageBufferRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvpixelbufferlockflags
  type CVPixelBufferLockFlags = cocoascript.CVOptionFlags;
}
declare namespace cocoascript {
  interface CVPlanarComponentInfo {
  }
}
declare namespace cocoascript {
  interface CVPlanarPixelBufferInfo {
  }
}
declare namespace cocoascript {
  interface CVPlanarPixelBufferInfo_YCbCrPlanar {
  }
}
declare namespace cocoascript {
  interface CVPlanarPixelBufferInfo_YCbCrBiPlanar {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvpixelbufferreleasebytescallback
  type CVPixelBufferReleaseBytesCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvpixelbufferreleaseplanarbytescallback
  type CVPixelBufferReleasePlanarBytesCallback = cocoascript._Nullable;
}
declare namespace cocoascript {
  interface CVBufferRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvreturn
  type CVReturn = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvoptionflags
  type CVOptionFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvattachmentmode
  type CVAttachmentMode = number;
}
declare namespace cocoascript {
  interface CVPixelBufferPoolRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolflushflags
  type CVPixelBufferPoolFlushFlags = cocoascript.CVOptionFlags;
}
declare namespace cocoascript {
  interface CVFillExtendedPixelsCallBackData {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvfillextendedpixelscallback
  type CVFillExtendedPixelsCallBack = void;
}
declare namespace cocoascript {
  interface CVTime {
  }
}
declare namespace cocoascript {
  interface CVSMPTETime {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvsmptetimetype
  type CVSMPTETimeType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvsmptetimeflags
  type CVSMPTETimeFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvtimeflags
  type CVTimeFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvtimestampflags
  type CVTimeStampFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvdisplaylinkoutputcallback
  type CVDisplayLinkOutputCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvdisplaylinkoutputhandler
  type CVDisplayLinkOutputHandler = cocoascript.CVOptionFlags;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvmetaltextureref
  type CVMetalTextureRef = cocoascript.CVImageBufferRef;
}
declare namespace cocoascript {
  interface CVMetalTextureCacheRef {
  }
}
declare namespace cocoascript {
  interface CVOpenGLTextureCacheRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvopengltextureref
  type CVOpenGLTextureRef = cocoascript.CVImageBufferRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvopenglbufferref
  type CVOpenGLBufferRef = cocoascript.CVImageBufferRef;
}
declare namespace cocoascript {
  interface CVOpenGLBufferPoolRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cvopenglestextureref
  type CVOpenGLESTextureRef = cocoascript.CVImageBufferRef;
}
declare namespace cocoascript {
  interface CVOpenGLESTextureCacheRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corevideo/cveaglcontext
  type CVEAGLContext = cocoascript.EAGLContext;
}
// https://developer.apple.com/documentation/corevideo/kcvzerotime
declare const kCVZeroTime: cocoascript.CVTime;
// https://developer.apple.com/documentation/corevideo/kcvindefinitetime
declare const kCVIndefiniteTime: cocoascript.CVTime;
