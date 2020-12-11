declare namespace cocoascript {
  /**
   * An abstract base class for the views whose layout is managed by a scrubber.
   * doc://com.apple.documentation/documentation/appkit/nsscrubberarrangedview
   */
  interface NSScrubberArrangedView extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nsscrubberarrangedview/2588255-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/appkit/nsscrubberarrangedview/2588256-selected
    selected(): cocoascript.BOOL;
    setSelected(): void;
    // doc://com.apple.documentation/documentation/appkit/nsscrubberarrangedview/2588268-applylayoutattributes
    applyLayoutAttributes(layoutAttributes: cocoascript.NSScrubberLayoutAttributes):void;
    //
    alloc():cocoascript.NSScrubberArrangedView;
    //
    init():cocoascript.NSScrubberArrangedView;
  }
}

declare const NSScrubberArrangedView: cocoascript.NSScrubberArrangedView;
