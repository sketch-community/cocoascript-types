declare namespace cocoascript {
  /**
   * An instance of the
   * doc://com.apple.documentation/documentation/uikit/uiacceleration
   */
  interface UIAcceleration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiacceleration/1620652-x
    x(): cocoascript.UIAccelerationValue;
    setX(): void;
    // doc://com.apple.documentation/documentation/uikit/uiacceleration/1620644-y
    y(): cocoascript.UIAccelerationValue;
    setY(): void;
    // doc://com.apple.documentation/documentation/uikit/uiacceleration/1620643-z
    z(): cocoascript.UIAccelerationValue;
    setZ(): void;
    // doc://com.apple.documentation/documentation/uikit/uiacceleration/1620650-timestamp
    timestamp(): cocoascript.NSTimeInterval;
    setTimestamp(): void;
    //
    alloc():cocoascript.UIAcceleration;
    //
    init():cocoascript.UIAcceleration;
  }
}

declare const UIAcceleration: cocoascript.UIAcceleration;
