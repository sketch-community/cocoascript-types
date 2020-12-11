declare namespace cocoascript {
  /**
   * An object that specifies a key press perform on a hardware keyboard and the resulting action.
   * doc://com.apple.documentation/documentation/uikit/uikeycommand
   */
  interface UIKeyCommand extends UICommand {
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/1621100-init
    init():cocoascript.UIKeyCommand;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/1621115-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIKeyCommand;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/3335197-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/3335190-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/1621143-input
    input(): cocoascript.NSString;
    setInput(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/3175393-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/1621140-modifierflags
    modifierFlags(): cocoascript.UIKeyModifierFlags;
    setModifierFlags(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/1621094-discoverabilitytitle
    discoverabilityTitle(): cocoascript.NSString;
    setDiscoverabilityTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/3335189-attributes
    attributes(): cocoascript.UIMenuElementAttributes;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/3335196-state
    state(): cocoascript.UIMenuElementState;
    setState(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/3335188-alternates
    alternates(): cocoascript.UICommandAlternate;
    setAlternates(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeycommand/3335195-propertylist
    propertyList(): cocoascript.id;
    setPropertyList(): void;
    // doc://com.apple.documentation/documentation/uikit/uicommandtagshare
    UICommandTagShare(): cocoascript.const;
    setUICommandTagShare(): void;
    //
    alloc():cocoascript.UIKeyCommand;
    //
    init():cocoascript.UIKeyCommand;
  }
}

declare const UIKeyCommand: cocoascript.UIKeyCommand;
