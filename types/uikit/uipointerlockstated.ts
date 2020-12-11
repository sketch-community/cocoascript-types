declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uipointerlockstate
   */
  interface UIPointerLockState extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipointerlockstate/3601226-locked
    locked(): cocoascript.BOOL;
    setLocked(): void;
    //
    alloc():cocoascript.UIPointerLockState;
    //
    init():cocoascript.UIPointerLockState;
  }
}

declare const UIPointerLockState: cocoascript.UIPointerLockState;
