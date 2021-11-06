declare namespace cocoascript {
  /**
   * A button that grants one-time location authorization.
   * https://developer.apple.com/documentation/corelocationui/cllocationbutton
   */
  interface CLLocationButton extends UIControl {
    // https://developer.apple.com/documentation/corelocationui/cllocationbutton/3751991-icon
    icon(): CLLocationButtonIcon;
    setIcon(value: CLLocationButtonIcon): void;
    // https://developer.apple.com/documentation/corelocationui/cllocationbutton/3751992-label
    label(): CLLocationButtonLabel;
    setLabel(value: CLLocationButtonLabel): void;
    // https://developer.apple.com/documentation/corelocationui/cllocationbutton/3751989-cornerradius
    cornerRadius(): CGFloat;
    setCornerRadius(value: CGFloat): void;
    // https://developer.apple.com/documentation/corelocationui/cllocationbutton/3751990-fontsize
    fontSize(): CGFloat;
    setFontSize(value: CGFloat): void;
    //
    alloc():CLLocationButton;
    //
    init():CLLocationButton;
  }
}

declare const CLLocationButton: cocoascript.CLLocationButton;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocationui/cllocationbuttonicon
  type CLLocationButtonIcon = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocationui/cllocationbuttonlabel
  type CLLocationButtonLabel = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/corelocationui/corelocationuiversionstring
declare const CoreLocationUIVersionString: string;
