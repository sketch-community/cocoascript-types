declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell
   */
  interface NSLevelIndicatorCell extends NSActionCell {
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1527498-initwithlevelindicatorstyle
    initWithLevelIndicatorStyle(levelIndicatorStyle: cocoascript.NSLevelIndicatorStyle):cocoascript.NSLevelIndicatorCell;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1534472-minvalue
    minValue(): number;
    setMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1528309-maxvalue
    maxValue(): number;
    setMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1531954-levelindicatorstyle
    levelIndicatorStyle(): cocoascript.NSLevelIndicatorStyle;
    setLevelIndicatorStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1528974-warningvalue
    warningValue(): number;
    setWarningValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1525337-criticalvalue
    criticalValue(): number;
    setCriticalValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1532399-tickmarkposition
    tickMarkPosition(): cocoascript.NSTickMarkPosition;
    setTickMarkPosition(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1534680-numberoftickmarks
    numberOfTickMarks(): cocoascript.NSInteger;
    setNumberOfTickMarks(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1528987-numberofmajortickmarks
    numberOfMajorTickMarks(): cocoascript.NSInteger;
    setNumberOfMajorTickMarks(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1535863-tickmarkvalueatindex
    tickMarkValueAtIndex(index: cocoascript.NSInteger):number;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicatorcell/1534530-rectoftickmarkatindex
    rectOfTickMarkAtIndex(index: cocoascript.NSInteger):cocoascript.NSRect;
    //
    alloc():cocoascript.NSLevelIndicatorCell;
    //
    init():cocoascript.NSLevelIndicatorCell;
  }
}

declare const NSLevelIndicatorCell: cocoascript.NSLevelIndicatorCell;
