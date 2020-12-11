declare namespace cocoascript {
  /**
   * A control that displays a color picker.
   * doc://com.apple.documentation/documentation/uikit/uicolorwell
   */
  interface UIColorWell extends UIControl {
    // doc://com.apple.documentation/documentation/uikit/uicolorwell/3600472-selectedcolor
    selectedColor(): cocoascript.UIColor;
    setSelectedColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uicolorwell/3600473-supportsalpha
    supportsAlpha(): cocoascript.BOOL;
    setSupportsAlpha(): void;
    // doc://com.apple.documentation/documentation/uikit/uicolorwell/3600474-title
    title(): cocoascript.NSString;
    setTitle(): void;
    //
    alloc():cocoascript.UIColorWell;
    //
    init():cocoascript.UIColorWell;
  }
}

declare const UIColorWell: cocoascript.UIColorWell;
