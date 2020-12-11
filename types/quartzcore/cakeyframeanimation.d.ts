declare namespace cocoascript {
  /**
   * An object that provides keyframe animation capabilities for a layer object.
   * doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation
   */
  interface CAKeyframeAnimation extends CAPropertyAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412498-values
    values(): cocoascript.NSArray;
    setValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412474-path
    path(): cocoascript.CGPathRef;
    setPath(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412522-keytimes
    keyTimes(): cocoascript.NSNumber;
    setKeyTimes(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412465-timingfunctions
    timingFunctions(): cocoascript.CAMediaTimingFunction;
    setTimingFunctions(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412500-calculationmode
    calculationMode(): cocoascript.CAAnimationCalculationMode;
    setCalculationMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412454-rotationmode
    rotationMode(): cocoascript.CAAnimationRotationMode;
    setRotationMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412475-tensionvalues
    tensionValues(): cocoascript.NSNumber;
    setTensionValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412491-continuityvalues
    continuityValues(): cocoascript.NSNumber;
    setContinuityValues(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cakeyframeanimation/1412485-biasvalues
    biasValues(): cocoascript.NSNumber;
    setBiasValues(): void;
    //
    alloc():cocoascript.CAKeyframeAnimation;
    //
    init():cocoascript.CAKeyframeAnimation;
  }
}

declare const CAKeyframeAnimation: cocoascript.CAKeyframeAnimation;
