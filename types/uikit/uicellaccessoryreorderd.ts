declare namespace cocoascript {
  /**
   * The reorder system accessory.
   * doc://com.apple.documentation/documentation/uikit/uicellaccessoryreorder
   */
  interface UICellAccessoryReorder extends UICellAccessory {
    // doc://com.apple.documentation/documentation/uikit/uicellaccessoryreorder/3600397-showsverticalseparator
    showsVerticalSeparator(): cocoascript.BOOL;
    setShowsVerticalSeparator(): void;
    //
    alloc():cocoascript.UICellAccessoryReorder;
    //
    init():cocoascript.UICellAccessoryReorder;
  }
}

declare const UICellAccessoryReorder: cocoascript.UICellAccessoryReorder;
