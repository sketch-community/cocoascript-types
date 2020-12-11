declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem
   */
  interface NSButtonTouchBarItem extends NSTouchBarItem {
    // doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem/3237176-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem/3237177-bezelcolor
    bezelColor(): cocoascript.NSColor;
    setBezelColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem/3237181-customizationlabel
    customizationLabel(): cocoascript.NSString;
    setCustomizationLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem/3237182-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem/3353052-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem/3237184-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbuttontouchbaritem/3237185-title
    title(): cocoascript.NSString;
    setTitle(): void;
    //
    alloc():cocoascript.NSButtonTouchBarItem;
    //
    init():cocoascript.NSButtonTouchBarItem;
  }
}

declare const NSButtonTouchBarItem: cocoascript.NSButtonTouchBarItem;
