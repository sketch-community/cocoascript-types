declare namespace cocoascript {
  /**
   * The abstract superclass for animations in Core Animation.
   * doc://com.apple.documentation/documentation/quartzcore/caanimation
   */
  interface CAAnimation extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412458-removedoncompletion
    removedOnCompletion(): cocoascript.BOOL;
    setRemovedOnCompletion(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412456-timingfunction
    timingFunction(): cocoascript.CAMediaTimingFunction;
    setTimingFunction(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412490-delegate
    delegate(): cocoascript.CAAnimationDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1412525-shouldarchivevalueforkey
    shouldArchiveValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523819-usesscenetimebase
    usesSceneTimeBase(): cocoascript.BOOL;
    setUsesSceneTimeBase(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523370-fadeinduration
    fadeInDuration(): cocoascript.CGFloat;
    setFadeInDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1522959-fadeoutduration
    fadeOutDuration(): cocoascript.CGFloat;
    setFadeOutDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimation/1523940-animationevents
    animationEvents(): cocoascript.SCNAnimationEvent;
    setAnimationEvents(): void;
    //
    alloc():cocoascript.CAAnimation;
    //
    init():cocoascript.CAAnimation;
  }
}

declare const CAAnimation: cocoascript.CAAnimation;
