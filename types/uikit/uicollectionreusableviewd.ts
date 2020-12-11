declare namespace cocoascript {
  /**
   * A view that defines the behavior for all cells and supplementary views presented by a collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionreusableview
   */
  interface UICollectionReusableView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uicollectionreusableview/1620136-reuseidentifier
    reuseIdentifier(): cocoascript.NSString;
    setReuseIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionreusableview/1620141-prepareforreuse
    prepareForReuse():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionreusableview/1620132-preferredlayoutattributesfitting
    preferredLayoutAttributesFittingAttributes(layoutAttributes: cocoascript.UICollectionViewLayoutAttributes):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionreusableview/1620139-applylayoutattributes
    applyLayoutAttributes(layoutAttributes: cocoascript.UICollectionViewLayoutAttributes):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionreusableview/1620140-willtransitionfromlayout
    willTransitionFromLayout_toLayout(oldLayout: cocoascript.UICollectionViewLayout, newLayout: cocoascript.UICollectionViewLayout):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionreusableview/1620129-didtransitionfromlayout
    didTransitionFromLayout_toLayout(oldLayout: cocoascript.UICollectionViewLayout, newLayout: cocoascript.UICollectionViewLayout):void;
    //
    alloc():cocoascript.UICollectionReusableView;
    //
    init():cocoascript.UICollectionReusableView;
  }
}

declare const UICollectionReusableView: cocoascript.UICollectionReusableView;
