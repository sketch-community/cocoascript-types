declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/uikit/uiaccelerometerdelegate
   */
  interface UIAccelerometerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiaccelerometerdelegate/1620653-accelerometer
    accelerometer_didAccelerate(accelerometer: cocoascript.UIAccelerometer, acceleration: cocoascript.UIAcceleration):void;
  }
}
