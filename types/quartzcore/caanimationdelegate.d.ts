declare namespace cocoascript {
  /**
   * Methods your app can implement to respond when animations start and stop.
   * doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate
   */
  interface CAAnimationDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate/2097265-animationdidstart
    animationDidStart(anim: cocoascript.CAAnimation):void;
    // doc://com.apple.documentation/documentation/quartzcore/caanimationdelegate/2097259-animationdidstop
    animationDidStop_finished(anim: cocoascript.CAAnimation, flag: cocoascript.BOOL):void;
  }
}
