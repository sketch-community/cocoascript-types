declare namespace cocoascript {
  /**
   * A concrete layout object that arranges items end-to-end in a linear strip.
   * doc://com.apple.documentation/documentation/appkit/nsscrubberflowlayout
   */
  interface NSScrubberFlowLayout extends NSScrubberLayout {
    // doc://com.apple.documentation/documentation/appkit/nsscrubberflowlayout/2544649-itemspacing
    itemSpacing(): cocoascript.CGFloat;
    setItemSpacing(): void;
    // doc://com.apple.documentation/documentation/appkit/nsscrubberflowlayout/2544627-itemsize
    itemSize(): cocoascript.NSSize;
    setItemSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsscrubberflowlayout/2544642-invalidatelayoutforitemsatindexe
    invalidateLayoutForItemsAtIndexes(invalidItemIndexes: cocoascript.NSIndexSet):void;
    //
    alloc():cocoascript.NSScrubberFlowLayout;
    //
    init():cocoascript.NSScrubberFlowLayout;
  }
}

declare const NSScrubberFlowLayout: cocoascript.NSScrubberFlowLayout;
