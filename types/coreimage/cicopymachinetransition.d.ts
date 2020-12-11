declare namespace cocoascript {
  /**
   * The properties you use to configure a copy machine transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition
   */
  interface CICopyMachineTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228189-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228190-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228191-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228192-opacity
    opacity(): number;
    setOpacity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicopymachinetransition/3228193-width
    width(): number;
    setWidth(): void;
  }
}
