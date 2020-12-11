declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/quartz/ikfilteruiview
   */
  interface IKFilterUIView extends NSView {
    // doc://com.apple.documentation/documentation/quartz/ikfilteruiview/1504139-initwithframe
    initWithFrame_filter(frameRect: cocoascript.NSRect, inFilter: cocoascript.CIFilter):cocoascript.IKFilterUIView;
    // doc://com.apple.documentation/documentation/quartz/ikfilteruiview/1504622-filter
    filter():cocoascript.CIFilter;
    // doc://com.apple.documentation/documentation/quartz/ikfilteruiview/1504206-objectcontroller
    objectController():cocoascript.NSObjectController;
    //
    alloc():cocoascript.IKFilterUIView;
    //
    init():cocoascript.IKFilterUIView;
  }
}

declare const IKFilterUIView: cocoascript.IKFilterUIView;
