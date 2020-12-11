declare namespace cocoascript {
  /**
   * An object that allows multiple animations to be grouped and run concurrently.
   * doc://com.apple.documentation/documentation/quartzcore/caanimationgroup
   */
  interface CAAnimationGroup extends CAAnimation {
    // doc://com.apple.documentation/documentation/quartzcore/caanimationgroup/1412516-animations
    animations(): cocoascript.CAAnimation;
    setAnimations(): void;
    //
    alloc():cocoascript.CAAnimationGroup;
    //
    init():cocoascript.CAAnimationGroup;
  }
}

declare const CAAnimationGroup: cocoascript.CAAnimationGroup;
