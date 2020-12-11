declare namespace cocoascript {
  /**
   * An object that displays the system's color-sampling interface and returns the selected color to your app.
   * doc://com.apple.documentation/documentation/appkit/nscolorsampler
   */
  interface NSColorSampler extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscolorsampler/3237187-showsamplerwithselectionhandler
    showSamplerWithSelectionHandler(selectionHandler: cocoascript.NSColor):void;
    //
    alloc():cocoascript.NSColorSampler;
    //
    init():cocoascript.NSColorSampler;
  }
}

declare const NSColorSampler: cocoascript.NSColorSampler;
