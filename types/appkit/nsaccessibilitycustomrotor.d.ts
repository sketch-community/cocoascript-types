declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotor
   */
  interface NSAccessibilityCustomRotor extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotor/2876333-initwithlabel
    initWithLabel_itemSearchDelegate(label: cocoascript.NSString, itemSearchDelegate: cocoascript.NSAccessibilityCustomRotorItemSearchDelegate):cocoascript.NSAccessibilityCustomRotor;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotor/2876299-initwithrotortype
    initWithRotorType_itemSearchDelegate(rotorType: cocoascript.NSAccessibilityCustomRotorType, itemSearchDelegate: cocoascript.NSAccessibilityCustomRotorItemSearchDelegate):cocoascript.NSAccessibilityCustomRotor;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotor/2890783-itemloadingdelegate
    itemLoadingDelegate(): cocoascript.NSAccessibilityElementLoading;
    setItemLoadingDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotor/2876307-itemsearchdelegate
    itemSearchDelegate(): cocoascript.NSAccessibilityCustomRotorItemSearchDelegate;
    setItemSearchDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotor/2876331-label
    label(): cocoascript.NSString;
    setLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsaccessibilitycustomrotor/2876321-type
    type(): cocoascript.NSAccessibilityCustomRotorType;
    setType(): void;
    //
    alloc():cocoascript.NSAccessibilityCustomRotor;
    //
    init():cocoascript.NSAccessibilityCustomRotor;
  }
}

declare const NSAccessibilityCustomRotor: cocoascript.NSAccessibilityCustomRotor;
