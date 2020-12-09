declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/uikit/uiaccelerometer
 */
interface UIAccelerometer extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiaccelerometer/1620651-updateinterval
  updateInterval(): cocoascript.NSTimeInterval;
  setUpdateInterval(): void;
  // doc://com.apple.documentation/documentation/uikit/uiaccelerometer/1620646-delegate
  delegate(): cocoascript.UIAccelerometerDelegate;
  setDelegate(): void;
  // 
  alloc():cocoascript.UIAccelerometer;
  // 
  init():cocoascript.UIAccelerometer;
}
}
declare const UIAccelerometer: cocoascript.UIAccelerometer;

