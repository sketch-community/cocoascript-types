declare namespace cocoascript {
  /**
   * The appearance and behavior of an
   * doc://com.apple.documentation/documentation/appkit/nsslidercell
   */
  interface NSSliderCell extends NSActionCell {
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444596-altincrementvalue
    altIncrementValue(): number;
    setAltIncrementValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444579-preferstrackinguntilmouseup
    prefersTrackingUntilMouseUp(): cocoascript.BOOL;
    setPrefersTrackingUntilMouseUp(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444583-trackrect
    trackRect(): cocoascript.NSRect;
    setTrackRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444598-slidertype
    sliderType(): cocoascript.NSSliderType;
    setSliderType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444629-barrectflipped
    barRectFlipped(flipped: cocoascript.BOOL):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444633-drawtickmarks
    drawTickMarks():void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444647-knobrectflipped
    knobRectFlipped(flipped: cocoascript.BOOL):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444587-drawbarinside
    drawBarInside_flipped(rect: cocoascript.NSRect, flipped: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444606-drawknob
    drawKnob():void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444600-drawknob
    drawKnob(knobRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444593-knobthickness
    knobThickness(): cocoascript.CGFloat;
    setKnobThickness(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444602-vertical
    vertical(): cocoascript.BOOL;
    setVertical(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444610-title
    title():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444631-settitle
    setTitle(string: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444639-titlecell
    titleCell():cocoascript.NSSliderCell;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444619-settitlecell
    setTitleCell(cell: cocoascript.NSCell):void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444591-titlefont
    titleFont():cocoascript.NSFont;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444577-titlecolor
    titleColor():cocoascript.NSColor;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444623-settitlefont
    setTitleFont(fontObj: cocoascript.NSFont):void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444637-settitlecolor
    setTitleColor(newColor: cocoascript.NSColor):void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444589-maxvalue
    maxValue(): number;
    setMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444641-minvalue
    minValue(): number;
    setMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444604-allowstickmarkvaluesonly
    allowsTickMarkValuesOnly(): cocoascript.BOOL;
    setAllowsTickMarkValuesOnly(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444627-closesttickmarkvaluetovalue
    closestTickMarkValueToValue(value: number):number;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444614-indexoftickmarkatpoint
    indexOfTickMarkAtPoint(point: cocoascript.NSPoint):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444621-numberoftickmarks
    numberOfTickMarks(): cocoascript.NSInteger;
    setNumberOfTickMarks(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444645-rectoftickmarkatindex
    rectOfTickMarkAtIndex(index: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444616-tickmarkposition
    tickMarkPosition(): cocoascript.NSTickMarkPosition;
    setTickMarkPosition(): void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444635-tickmarkvalueatindex
    tickMarkValueAtIndex(index: cocoascript.NSInteger):number;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/2967175-image
    image():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/2967176-setimage
    setImage(backgroundImage: cocoascript.NSImage):void;
    // doc://com.apple.documentation/documentation/appkit/nsslidercell/1444612-setknobthickness
    setKnobThickness(thickness: cocoascript.CGFloat):void;
    //
    alloc():cocoascript.NSSliderCell;
    //
    init():cocoascript.NSSliderCell;
  }
}

declare const NSSliderCell: cocoascript.NSSliderCell;
