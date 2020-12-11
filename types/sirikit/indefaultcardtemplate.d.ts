declare namespace cocoascript {
  /**
   * A card template for customizing the Siri watch face for a shortcut.
   * doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate
   */
  interface INDefaultCardTemplate extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962952-initwithtitle
    initWithTitle(title: cocoascript.NSString):cocoascript.INDefaultCardTemplate;
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962954-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962953-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962951-image
    image(): cocoascript.INImage;
    setImage(): void;
    //
    alloc():cocoascript.INDefaultCardTemplate;
    //
    init():cocoascript.INDefaultCardTemplate;
  }
}

declare const INDefaultCardTemplate: cocoascript.INDefaultCardTemplate;
