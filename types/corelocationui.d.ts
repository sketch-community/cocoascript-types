declare namespace cocoascript {
  /**
   * A button that grants one-time location authorization.
   * https://developer.apple.com/documentation/corelocationui/cllocationbutton
   */
  interface CLLocationButton extends UIControl {
    //
    alloc():CLLocationButton;
    //
    init():CLLocationButton;
  }
}

declare const CLLocationButton: cocoascript.CLLocationButton;
