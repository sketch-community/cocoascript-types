declare namespace cocoascript {
  /**
   * A registration for the collection view’s supplementary views.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewsupplementaryregistration
   */
  interface UICollectionViewSupplementaryRegistration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewsupplementaryregistration/3600450-configurationhandler
    configurationHandler(): cocoascript.UICollectionViewSupplementaryRegistrationConfigurationHandler;
    setConfigurationHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewsupplementaryregistration/3600451-elementkind
    elementKind(): cocoascript.NSString;
    setElementKind(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewsupplementaryregistration/3600454-supplementaryclass
    supplementaryClass(): cocoascript.Class;
    setSupplementaryClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewsupplementaryregistration/3600455-supplementarynib
    supplementaryNib(): cocoascript.UINib;
    setSupplementaryNib(): void;
    //
    alloc():cocoascript.UICollectionViewSupplementaryRegistration;
    //
    init():cocoascript.UICollectionViewSupplementaryRegistration;
  }
}

declare const UICollectionViewSupplementaryRegistration: cocoascript.UICollectionViewSupplementaryRegistration;
