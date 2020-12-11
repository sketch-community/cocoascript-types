declare namespace cocoascript {
  /**
   * An object representing an alternative action for a command.
   * doc://com.apple.documentation/documentation/uikit/uicommandalternate
   */
  interface UICommandAlternate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicommandalternate/3175316-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICommandAlternate;
    // doc://com.apple.documentation/documentation/uikit/uicommandalternate/3175318-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uicommandalternate/3175314-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uicommandalternate/3175317-modifierflags
    modifierFlags(): cocoascript.UIKeyModifierFlags;
    setModifierFlags(): void;
    //
    alloc():cocoascript.UICommandAlternate;
    //
    init():cocoascript.UICommandAlternate;
  }
}

declare const UICommandAlternate: cocoascript.UICommandAlternate;
