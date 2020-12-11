declare namespace cocoascript {
  /**
   * A bar item that provides a slider control for choosing a value in a range.
   * doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem
   */
  interface NSSliderTouchBarItem extends NSTouchBarItem {
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544809-slider
    slider(): cocoascript.NSSlider;
    setSlider(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544741-label
    label(): cocoascript.NSString;
    setLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544846-minimumvalueaccessory
    minimumValueAccessory(): cocoascript.NSSliderAccessory;
    setMinimumValueAccessory(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544672-maximumvalueaccessory
    maximumValueAccessory(): cocoascript.NSSliderAccessory;
    setMaximumValueAccessory(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544811-valueaccessorywidth
    valueAccessoryWidth(): cocoascript.NSSliderAccessoryWidth;
    setValueAccessoryWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544814-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544765-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2544793-customizationlabel
    customizationLabel(): cocoascript.NSString;
    setCustomizationLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/3237220-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/3237221-maximumsliderwidth
    maximumSliderWidth(): cocoascript.CGFloat;
    setMaximumSliderWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/3237222-minimumsliderwidth
    minimumSliderWidth(): cocoascript.CGFloat;
    setMinimumSliderWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidertouchbaritem/2951981-view
    view(): cocoascript.NSUserInterfaceCompression;
    setView(): void;
    //
    alloc():cocoascript.NSSliderTouchBarItem;
    //
    init():cocoascript.NSSliderTouchBarItem;
  }
}

declare const NSSliderTouchBarItem: cocoascript.NSSliderTouchBarItem;
