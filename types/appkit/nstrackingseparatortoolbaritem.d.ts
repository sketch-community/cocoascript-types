declare namespace cocoascript {
  /**
   * A toolbar separator that aligns with the vertical split view in the same window.
   * doc://com.apple.documentation/documentation/appkit/nstrackingseparatortoolbaritem
   */
  interface NSTrackingSeparatorToolbarItem extends NSToolbarItem {
    // doc://com.apple.documentation/documentation/appkit/nstrackingseparatortoolbaritem/3626826-dividerindex
    dividerIndex(): cocoascript.NSInteger;
    setDividerIndex(): void;
    // doc://com.apple.documentation/documentation/appkit/nstrackingseparatortoolbaritem/3626827-splitview
    splitView(): cocoascript.NSSplitView;
    setSplitView(): void;
    //
    alloc():cocoascript.NSTrackingSeparatorToolbarItem;
    //
    init():cocoascript.NSTrackingSeparatorToolbarItem;
  }
}

declare const NSTrackingSeparatorToolbarItem: cocoascript.NSTrackingSeparatorToolbarItem;
