declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/uikit/uistoryboardpopoversegue
   */
  interface UIStoryboardPopoverSegue extends UIStoryboardSegue {
    // doc://com.apple.documentation/documentation/uikit/uistoryboardpopoversegue/1624759-popovercontroller
    popoverController(): cocoascript.UIPopoverController;
    setPopoverController(): void;
    //
    alloc():cocoascript.UIStoryboardPopoverSegue;
    //
    init():cocoascript.UIStoryboardPopoverSegue;
  }
}

declare const UIStoryboardPopoverSegue: cocoascript.UIStoryboardPopoverSegue;
