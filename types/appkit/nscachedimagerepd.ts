declare namespace cocoascript {
  /**
   * An object that stores image data in a form that can be readily transferred to the screen.
   * doc://com.apple.documentation/documentation/appkit/nscachedimagerep
   */
  interface NSCachedImageRep extends NSImageRep {
    // doc://com.apple.documentation/documentation/appkit/nscachedimagerep/1431038-initwithsize
    initWithSize_depth_separate_alpha(size: cocoascript.NSSize, depth: cocoascript.NSWindowDepth, flag: cocoascript.BOOL, alpha: cocoascript.BOOL):cocoascript.NSCachedImageRep;
    // doc://com.apple.documentation/documentation/appkit/nscachedimagerep/1431036-initwithwindow
    initWithWindow_rect(win: cocoascript.NSWindow, rect: cocoascript.NSRect):cocoascript.NSCachedImageRep;
    // doc://com.apple.documentation/documentation/appkit/nscachedimagerep/1431032-rect
    rect():cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nscachedimagerep/1431040-window
    window():cocoascript.NSWindow;
    //
    alloc():cocoascript.NSCachedImageRep;
    //
    init():cocoascript.NSCachedImageRep;
  }
}

declare const NSCachedImageRep: cocoascript.NSCachedImageRep;
