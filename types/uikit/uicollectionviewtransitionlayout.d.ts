declare namespace cocoascript {
  /**
   * A special type of layout object that lets you implement behaviors when changing from one layout to another in your collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout
   */
  interface UICollectionViewTransitionLayout extends UICollectionViewLayout {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout/1622189-initwithcurrentlayout
    initWithCurrentLayout_nextLayout(currentLayout: cocoascript.UICollectionViewLayout, newLayout: cocoascript.UICollectionViewLayout):cocoascript.UICollectionViewTransitionLayout;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout/1622192-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICollectionViewTransitionLayout;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout/1622191-transitionprogress
    transitionProgress(): cocoascript.CGFloat;
    setTransitionProgress(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout/1622194-updatevalue
    updateValue_forAnimatedKey(value: cocoascript.CGFloat, key: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout/1622193-valueforanimatedkey
    valueForAnimatedKey(key: cocoascript.NSString):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout/1622190-currentlayout
    currentLayout(): cocoascript.UICollectionViewLayout;
    setCurrentLayout(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewtransitionlayout/1622188-nextlayout
    nextLayout(): cocoascript.UICollectionViewLayout;
    setNextLayout(): void;
    //
    alloc():cocoascript.UICollectionViewTransitionLayout;
    //
    init():cocoascript.UICollectionViewTransitionLayout;
  }
}

declare const UICollectionViewTransitionLayout: cocoascript.UICollectionViewTransitionLayout;
