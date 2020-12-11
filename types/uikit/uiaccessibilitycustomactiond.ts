declare namespace cocoascript {
  /**
   * A custom action to be performed on an accessible object.
   * doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction
   */
  interface UIAccessibilityCustomAction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/1620499-initwithname
    initWithName_target_selector(name: cocoascript.NSString, target: cocoascript.UIAccessibilityCustomAction, selector: cocoascript.SEL):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/2865951-initwithattributedname
    initWithAttributedName_target_selector(attributedName: cocoascript.NSAttributedString, target: cocoascript.UIAccessibilityCustomAction, selector: cocoascript.SEL):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/1620502-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/2865932-attributedname
    attributedName(): cocoascript.NSAttributedString;
    setAttributedName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/1620501-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/1620498-selector
    selector(): cocoascript.SEL;
    setSelector(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3043556-initwithattributedname
    initWithAttributedName_actionHandler(attributedName: cocoascript.NSAttributedString, actionHandler: cocoascript.UIAccessibilityCustomActionHandler):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3650218-initwithattributedname
    initWithAttributedName_image_actionHandler(attributedName: cocoascript.NSAttributedString, image: cocoascript.UIImage, actionHandler: cocoascript.UIAccessibilityCustomActionHandler):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3650219-initwithattributedname
    initWithAttributedName_image_target_selector(attributedName: cocoascript.NSAttributedString, image: cocoascript.UIImage, target: cocoascript.UIAccessibilityCustomAction, selector: cocoascript.SEL):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3043557-initwithname
    initWithName_actionHandler(name: cocoascript.NSString, actionHandler: cocoascript.UIAccessibilityCustomActionHandler):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3650220-initwithname
    initWithName_image_actionHandler(name: cocoascript.NSString, image: cocoascript.UIImage, actionHandler: cocoascript.UIAccessibilityCustomActionHandler):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3650221-initwithname
    initWithName_image_target_selector(name: cocoascript.NSString, image: cocoascript.UIImage, target: cocoascript.UIAccessibilityCustomAction, selector: cocoascript.SEL):cocoascript.UIAccessibilityCustomAction;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3043555-actionhandler
    actionHandler(): cocoascript.UIAccessibilityCustomActionHandler;
    setActionHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomaction/3650217-image
    image(): cocoascript.UIImage;
    setImage(): void;
    //
    alloc():cocoascript.UIAccessibilityCustomAction;
    //
    init():cocoascript.UIAccessibilityCustomAction;
  }
}

declare const UIAccessibilityCustomAction: cocoascript.UIAccessibilityCustomAction;
