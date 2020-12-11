declare namespace cocoascript {
  /**
   * The timing information for animations that mimics the behavior of a spring.
   * doc://com.apple.documentation/documentation/uikit/uispringtimingparameters
   */
  interface UISpringTimingParameters extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uispringtimingparameters/1649802-init
    init():cocoascript.UISpringTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uispringtimingparameters/1649835-initwithdampingratio
    initWithDampingRatio(ratio: cocoascript.CGFloat):cocoascript.UISpringTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uispringtimingparameters/1649832-initwithdampingratio
    initWithDampingRatio_initialVelocity(ratio: cocoascript.CGFloat, velocity: cocoascript.CGVector):cocoascript.UISpringTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uispringtimingparameters/1649764-initwithmass
    initWithMass_stiffness_damping_initialVelocity(mass: cocoascript.CGFloat, stiffness: cocoascript.CGFloat, damping: cocoascript.CGFloat, velocity: cocoascript.CGVector):cocoascript.UISpringTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uispringtimingparameters/1649919-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UISpringTimingParameters;
    // doc://com.apple.documentation/documentation/uikit/uispringtimingparameters/1649909-initialvelocity
    initialVelocity(): cocoascript.CGVector;
    setInitialVelocity(): void;
    //
    alloc():cocoascript.UISpringTimingParameters;
    //
    init():cocoascript.UISpringTimingParameters;
  }
}

declare const UISpringTimingParameters: cocoascript.UISpringTimingParameters;
