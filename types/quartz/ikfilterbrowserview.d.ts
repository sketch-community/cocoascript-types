declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikfilterbrowserview
   */
  interface IKFilterBrowserView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserview/1405296-setpreviewstate
    setPreviewState(inState: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/quartz/ikfilterbrowserview/1405294-filtername
    filterName():cocoascript.NSString;
    //
    alloc():cocoascript.IKFilterBrowserView;
    //
    init():cocoascript.IKFilterBrowserView;
  }
}

declare const IKFilterBrowserView: cocoascript.IKFilterBrowserView;
