declare namespace cocoascript {
  /**
   * A bar item that contains a responder of your choice, such as a view, a button, or a scrubber (an instance of the
   * doc://com.apple.documentation/documentation/appkit/nscustomtouchbaritem
   */
  interface NSCustomTouchBarItem extends NSTouchBarItem {
    // doc://com.apple.documentation/documentation/appkit/nscustomtouchbaritem/2544813-view
    view(): cocoascript.NSView;
    setView(): void;
    // doc://com.apple.documentation/documentation/appkit/nscustomtouchbaritem/2544745-viewcontroller
    viewController(): cocoascript.NSViewController;
    setViewController(): void;
    // doc://com.apple.documentation/documentation/appkit/nscustomtouchbaritem/2544770-customizationlabel
    customizationLabel(): cocoascript.NSString;
    setCustomizationLabel(): void;
    //
    alloc():cocoascript.NSCustomTouchBarItem;
    //
    init():cocoascript.NSCustomTouchBarItem;
  }
}

declare const NSCustomTouchBarItem: cocoascript.NSCustomTouchBarItem;
