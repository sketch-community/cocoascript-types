declare namespace cocoascript {
  /**
   * A tab associated with a window that is part of a tabbing group.
   * doc://com.apple.documentation/documentation/appkit/nswindowtab
   */
  interface NSWindowTab extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nswindowtab/2869746-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowtab/2869743-attributedtitle
    attributedTitle(): cocoascript.NSAttributedString;
    setAttributedTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowtab/2869744-tooltip
    toolTip(): cocoascript.NSString;
    setToolTip(): void;
    // doc://com.apple.documentation/documentation/appkit/nswindowtab/2869745-accessoryview
    accessoryView(): cocoascript.NSView;
    setAccessoryView(): void;
    //
    alloc():cocoascript.NSWindowTab;
    //
    init():cocoascript.NSWindowTab;
  }
}

declare const NSWindowTab: cocoascript.NSWindowTab;
