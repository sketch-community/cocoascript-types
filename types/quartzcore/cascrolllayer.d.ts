declare namespace cocoascript {
  /**
   * A layer that displays scrollable content larger than its own bounds.
   * doc://com.apple.documentation/documentation/quartzcore/cascrolllayer
   */
  interface CAScrollLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522111-scrollmode
    scrollMode(): cocoascript.CAScrollLayerScrollMode;
    setScrollMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522021-scrolltopoint
    scrollToPoint(p: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/quartzcore/cascrolllayer/1522167-scrolltorect
    scrollToRect(r: cocoascript.CGRect):void;
    //
    alloc():cocoascript.CAScrollLayer;
    //
    init():cocoascript.CAScrollLayer;
  }
}

declare const CAScrollLayer: cocoascript.CAScrollLayer;
