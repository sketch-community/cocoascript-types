declare namespace cocoascript {
  /**
   * A visual representation of a level or quantity, using discrete values.
   * doc://com.apple.documentation/documentation/appkit/nslevelindicator
   */
  interface NSLevelIndicator extends NSControl {
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388829-minvalue
    minValue(): number;
    setMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388839-maxvalue
    maxValue(): number;
    setMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388835-warningvalue
    warningValue(): number;
    setWarningValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388821-criticalvalue
    criticalValue(): number;
    setCriticalValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388837-tickmarkposition
    tickMarkPosition(): cocoascript.NSTickMarkPosition;
    setTickMarkPosition(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388827-numberoftickmarks
    numberOfTickMarks(): cocoascript.NSInteger;
    setNumberOfTickMarks(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388819-numberofmajortickmarks
    numberOfMajorTickMarks(): cocoascript.NSInteger;
    setNumberOfMajorTickMarks(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388823-tickmarkvalueatindex
    tickMarkValueAtIndex(index: cocoascript.NSInteger):number;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388825-rectoftickmarkatindex
    rectOfTickMarkAtIndex(index: cocoascript.NSInteger):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/1388833-levelindicatorstyle
    levelIndicatorStyle(): cocoascript.NSLevelIndicatorStyle;
    setLevelIndicatorStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2902327-ratingimage
    ratingImage(): cocoascript.NSImage;
    setRatingImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2902322-drawstieredcapacitylevels
    drawsTieredCapacityLevels(): cocoascript.BOOL;
    setDrawsTieredCapacityLevels(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2902325-fillcolor
    fillColor(): cocoascript.NSColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2902307-warningfillcolor
    warningFillColor(): cocoascript.NSColor;
    setWarningFillColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2902316-criticalfillcolor
    criticalFillColor(): cocoascript.NSColor;
    setCriticalFillColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2902328-ratingplaceholderimage
    ratingPlaceholderImage(): cocoascript.NSImage;
    setRatingPlaceholderImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2902323-placeholdervisibility
    placeholderVisibility(): cocoascript.NSLevelIndicatorPlaceholderVisibility;
    setPlaceholderVisibility(): void;
    // doc://com.apple.documentation/documentation/appkit/nslevelindicator/2919732-editable
    editable(): cocoascript.BOOL;
    setEditable(): void;
    //
    alloc():cocoascript.NSLevelIndicator;
    //
    init():cocoascript.NSLevelIndicator;
  }
}

declare const NSLevelIndicator: cocoascript.NSLevelIndicator;
