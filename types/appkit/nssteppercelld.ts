declare namespace cocoascript {
  /**
   * An
   * doc://com.apple.documentation/documentation/appkit/nssteppercell
   */
  interface NSStepperCell extends NSActionCell {
    // doc://com.apple.documentation/documentation/appkit/nssteppercell/1392321-maxvalue
    maxValue(): number;
    setMaxValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppercell/1392327-minvalue
    minValue(): number;
    setMinValue(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppercell/1392331-increment
    increment(): number;
    setIncrement(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppercell/1392323-autorepeat
    autorepeat(): cocoascript.BOOL;
    setAutorepeat(): void;
    // doc://com.apple.documentation/documentation/appkit/nssteppercell/1392325-valuewraps
    valueWraps(): cocoascript.BOOL;
    setValueWraps(): void;
    //
    alloc():cocoascript.NSStepperCell;
    //
    init():cocoascript.NSStepperCell;
  }
}

declare const NSStepperCell: cocoascript.NSStepperCell;
