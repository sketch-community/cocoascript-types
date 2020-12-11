declare namespace cocoascript {
  /**
   * A display of a bar representing a continuous range of numerical values and a knob representing the currently selected value.
   * doc://com.apple.documentation/documentation/appkit/nsslider
   */
  interface NSSlider extends NSControl {
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532924-slidertype
    sliderType(): cocoascript.NSSliderType;
    setSliderType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532901-altincrementvalue
    altIncrementValue(): number;
    setAltIncrementValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532909-knobthickness
    knobThickness(): cocoascript.CGFloat;
    setKnobThickness(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532899-setknobthickness
    setKnobThickness(thickness: cocoascript.CGFloat):void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1527901-vertical
    vertical(): cocoascript.BOOL;
    setVertical(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/2560999-trackfillcolor
    trackFillColor(): cocoascript.NSColor;
    setTrackFillColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532919-maxvalue
    maxValue(): number;
    setMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1524665-minvalue
    minValue(): number;
    setMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1530290-acceptsfirstmouse
    acceptsFirstMouse(event: cocoascript.NSEvent):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1526898-allowstickmarkvaluesonly
    allowsTickMarkValuesOnly(): cocoascript.BOOL;
    setAllowsTickMarkValuesOnly(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1530237-closesttickmarkvaluetovalue
    closestTickMarkValueToValue(value: number):number;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1526763-indexoftickmarkatpoint
    indexOfTickMarkAtPoint(point: cocoascript.NSPoint):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1524268-numberoftickmarks
    numberOfTickMarks(): cocoascript.NSInteger;
    setNumberOfTickMarks(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532922-rectoftickmarkatindex
    rectOfTickMarkAtIndex(index: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1529657-tickmarkposition
    tickMarkPosition(): cocoascript.NSTickMarkPosition;
    setTickMarkPosition(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1527230-tickmarkvalueatindex
    tickMarkValueAtIndex(index: cocoascript.NSInteger):number;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532926-setimage
    setImage(backgroundImage: cocoascript.NSImage):void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532906-image
    image():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532913-title
    title():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532902-titlecell
    titleCell():cocoascript.NSSlider;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532896-titlecolor
    titleColor():cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532907-titlefont
    titleFont():cocoascript.NSFont;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532915-settitle
    setTitle(string: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532904-settitlecell
    setTitleCell(cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532911-settitlecolor
    setTitleColor(newColor: cocoascript.NSColor):void;
    // doc://com.apple.documentation/documentation/appkit/nsslider/1532927-settitlefont
    setTitleFont(fontObj: cocoascript.NSFont):void;
    //
    alloc():cocoascript.NSSlider;
    //
    init():cocoascript.NSSlider;
  }
}

declare const NSSlider: cocoascript.NSSlider;
