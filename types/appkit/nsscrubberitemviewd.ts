declare namespace cocoascript {
  /**
   * An item at a specific index position in the scrubber.
   * doc://com.apple.documentation/documentation/appkit/nsscrubberitemview
   */
  interface NSScrubberItemView extends NSScrubberArrangedView {
    //
    alloc():cocoascript.NSScrubberItemView;
    //
    init():cocoascript.NSScrubberItemView;
  }
}

declare const NSScrubberItemView: cocoascript.NSScrubberItemView;
