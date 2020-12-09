declare namespace cocoascript {
/**
 * An interface with up and down arrow buttons for incrementing or decrementing a value.
 * doc://com.apple.documentation/documentation/appkit/nsstepper
 */
interface NSStepper extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nsstepper/1523578-maxvalue
  maxValue(): number;
  setMaxValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstepper/1523569-minvalue
  minValue(): number;
  setMinValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstepper/1523573-increment
  increment(): number;
  setIncrement(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstepper/1523571-autorepeat
  autorepeat(): cocoascript.BOOL;
  setAutorepeat(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstepper/1523580-valuewraps
  valueWraps(): cocoascript.BOOL;
  setValueWraps(): void;
  // 
  alloc():cocoascript.NSStepper;
  // 
  init():cocoascript.NSStepper;
}
}
declare const NSStepper: cocoascript.NSStepper;

