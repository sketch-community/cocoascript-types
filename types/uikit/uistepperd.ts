declare namespace cocoascript {
/**
 * A control for incrementing or decrementing a value.
 * doc://com.apple.documentation/documentation/uikit/uistepper
 */
interface UIStepper extends UIControl {
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624082-continuous
  continuous(): cocoascript.BOOL;
  setContinuous(): void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624079-autorepeat
  autorepeat(): cocoascript.BOOL;
  setAutorepeat(): void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624068-wraps
  wraps(): cocoascript.BOOL;
  setWraps(): void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624078-minimumvalue
  minimumValue(): number;
  setMinimumValue(): void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624075-maximumvalue
  maximumValue(): number;
  setMaximumValue(): void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624083-stepvalue
  stepValue(): number;
  setStepValue(): void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624076-value
  value(): number;
  setValue(): void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624069-backgroundimageforstate
  backgroundImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624081-setbackgroundimage
  setBackgroundImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624077-decrementimageforstate
  decrementImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624074-setdecrementimage
  setDecrementImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624072-dividerimageforleftsegmentstate
  dividerImageForLeftSegmentState_rightSegmentState(state: cocoascript.UIControlState, state: cocoascript.UIControlState):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624071-setdividerimage
  setDividerImage_forLeftSegmentState_rightSegmentState(image: cocoascript.UIImage, leftState: cocoascript.UIControlState, rightState: cocoascript.UIControlState):void;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624080-incrementimageforstate
  incrementImageForState(state: cocoascript.UIControlState):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uistepper/1624070-setincrementimage
  setIncrementImage_forState(image: cocoascript.UIImage, state: cocoascript.UIControlState):void;
  // 
  alloc():cocoascript.UIStepper;
  // 
  init():cocoascript.UIStepper;
}
}
declare const UIStepper: cocoascript.UIStepper;

