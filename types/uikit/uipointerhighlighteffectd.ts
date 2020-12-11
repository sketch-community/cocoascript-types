declare namespace cocoascript {
  /**
   * An effect where the pointer slides under the given view and morphs into the view's shape.
   * doc://com.apple.documentation/documentation/uikit/uipointerhighlighteffect
   */
  interface UIPointerHighlightEffect extends UIPointerEffect {
    //
    alloc():cocoascript.UIPointerHighlightEffect;
    //
    init():cocoascript.UIPointerHighlightEffect;
  }
}

declare const UIPointerHighlightEffect: cocoascript.UIPointerHighlightEffect;
