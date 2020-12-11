declare namespace cocoascript {
  /**
   * An encapsulation of information about an unwind segue.
   * doc://com.apple.documentation/documentation/uikit/uistoryboardunwindseguesource
   */
  interface UIStoryboardUnwindSegueSource extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uistoryboardunwindseguesource/1621917-sourceviewcontroller
    sourceViewController(): cocoascript.UIViewController;
    setSourceViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uistoryboardunwindseguesource/1621915-unwindaction
    unwindAction(): cocoascript.SEL;
    setUnwindAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uistoryboardunwindseguesource/1621914-sender
    sender(): cocoascript.id;
    setSender(): void;
    //
    alloc():cocoascript.UIStoryboardUnwindSegueSource;
    //
    init():cocoascript.UIStoryboardUnwindSegueSource;
  }
}

declare const UIStoryboardUnwindSegueSource: cocoascript.UIStoryboardUnwindSegueSource;
