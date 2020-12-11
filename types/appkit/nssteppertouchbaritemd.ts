declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem
   */
  interface NSStepperTouchBarItem extends NSTouchBarItem {
    // doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem/3334930-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem/3334931-customizationlabel
    customizationLabel(): cocoascript.NSString;
    setCustomizationLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem/3334932-increment
    increment(): number;
    setIncrement(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem/3334933-maxvalue
    maxValue(): number;
    setMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem/3334934-minvalue
    minValue(): number;
    setMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem/3334937-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppertouchbaritem/3334938-value
    value(): number;
    setValue(): void;
    //
    alloc():cocoascript.NSStepperTouchBarItem;
    //
    init():cocoascript.NSStepperTouchBarItem;
  }
}

declare const NSStepperTouchBarItem: cocoascript.NSStepperTouchBarItem;
