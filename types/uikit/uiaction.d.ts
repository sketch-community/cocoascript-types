declare namespace cocoascript {
  /**
   * A menu element that performs its action in a block.
   * doc://com.apple.documentation/documentation/uikit/uiaction
   */
  interface UIAction extends UIMenuElement {
    // doc://com.apple.documentation/documentation/uikit/uiaction/3335179-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaction/3335177-image
    image(): cocoascript.UIImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaction/3335176-identifier
    identifier(): cocoascript.UIActionIdentifier;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaction/3335175-discoverabilitytitle
    discoverabilityTitle(): cocoascript.NSString;
    setDiscoverabilityTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaction/3335174-attributes
    attributes(): cocoascript.UIMenuElementAttributes;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaction/3335178-state
    state(): cocoascript.UIMenuElementState;
    setState(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaction/3600315-sender
    sender(): cocoascript.id;
    setSender(): void;
    //
    alloc():cocoascript.UIAction;
    //
    init():cocoascript.UIAction;
  }
}

declare const UIAction: cocoascript.UIAction;
