declare namespace cocoascript {
  /**
   * A context-sensitive function that helps Voice Over users find the next instance of a related element.
   * doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor
   */
  interface UIAccessibilityCustomRotor extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor/2866000-initwithattributedname
    initWithAttributedName_itemSearchBlock(attributedName: cocoascript.NSAttributedString, itemSearchBlock: cocoascript.UIAccessibilityCustomRotorSearch):cocoascript.UIAccessibilityCustomRotor;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor/1649751-initwithname
    initWithName_itemSearchBlock(name: cocoascript.NSString, itemSearchBlock: cocoascript.UIAccessibilityCustomRotorSearch):cocoascript.UIAccessibilityCustomRotor;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor/2866006-initwithsystemtype
    initWithSystemType_itemSearchBlock(type: cocoascript.UIAccessibilityCustomSystemRotorType, itemSearchBlock: cocoascript.UIAccessibilityCustomRotorSearch):cocoascript.UIAccessibilityCustomRotor;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor/1649800-itemsearchblock
    itemSearchBlock(): cocoascript.UIAccessibilityCustomRotorSearch;
    setItemSearchBlock(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor/2865918-systemrotortype
    systemRotorType(): cocoascript.UIAccessibilityCustomSystemRotorType;
    setSystemRotorType(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor/1649745-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotor/2865780-attributedname
    attributedName(): cocoascript.NSAttributedString;
    setAttributedName(): void;
    //
    alloc():cocoascript.UIAccessibilityCustomRotor;
    //
    init():cocoascript.UIAccessibilityCustomRotor;
  }
}

declare const UIAccessibilityCustomRotor: cocoascript.UIAccessibilityCustomRotor;
