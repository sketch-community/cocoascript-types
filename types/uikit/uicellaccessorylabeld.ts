declare namespace cocoascript {
  /**
   * The label system accessory.
   * doc://com.apple.documentation/documentation/uikit/uicellaccessorylabel
   */
  interface UICellAccessoryLabel extends UICellAccessory {
    // doc://com.apple.documentation/documentation/uikit/uicellaccessorylabel/3600378-initwithtext
    initWithText(text: cocoascript.NSString):cocoascript.UICellAccessoryLabel;
    // doc://com.apple.documentation/documentation/uikit/uicellaccessorylabel/3600377-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICellAccessoryLabel;
    // doc://com.apple.documentation/documentation/uikit/uicellaccessorylabel/3600379-text
    text(): cocoascript.NSString;
    setText(): void;
    // doc://com.apple.documentation/documentation/uikit/uicellaccessorylabel/3600376-font
    font(): cocoascript.UIFont;
    setFont(): void;
    // doc://com.apple.documentation/documentation/uikit/uicellaccessorylabel/3600375-adjustsfontforcontentsizecategor
    adjustsFontForContentSizeCategory(): cocoascript.BOOL;
    setAdjustsFontForContentSizeCategory(): void;
    //
    alloc():cocoascript.UICellAccessoryLabel;
    //
    init():cocoascript.UICellAccessoryLabel;
  }
}

declare const UICellAccessoryLabel: cocoascript.UICellAccessoryLabel;
