declare namespace cocoascript {
  /**
   * An event that describes the state of a set of physical buttons that are available to the device, such as those on an associated remote or game controller.
   * doc://com.apple.documentation/documentation/uikit/uipressesevent
   */
  interface UIPressesEvent extends UIEvent {
    // doc://com.apple.documentation/documentation/uikit/uipressesevent/1623575-allpresses
    allPresses(): cocoascript.UIPress;
    setAllPresses(): void;
    // doc://com.apple.documentation/documentation/uikit/uipressesevent/1623574-pressesforgesturerecognizer
    pressesForGestureRecognizer(gesture: cocoascript.UIGestureRecognizer):cocoascript.UIPress;
    //
    alloc():cocoascript.UIPressesEvent;
    //
    init():cocoascript.UIPressesEvent;
  }
}

declare const UIPressesEvent: cocoascript.UIPressesEvent;
