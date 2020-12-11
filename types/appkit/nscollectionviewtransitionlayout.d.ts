declare namespace cocoascript {
  /**
   * An object that implements custom behaviors when changing from one layout to another in a collection view.
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewtransitionlayout
   */
  interface NSCollectionViewTransitionLayout extends NSCollectionViewLayout {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewtransitionlayout/1524431-initwithcurrentlayout
    initWithCurrentLayout_nextLayout(currentLayout: cocoascript.NSCollectionViewLayout, newLayout: cocoascript.NSCollectionViewLayout):cocoascript.NSCollectionViewTransitionLayout;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewtransitionlayout/1524424-transitionprogress
    transitionProgress(): cocoascript.CGFloat;
    setTransitionProgress(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewtransitionlayout/1524303-updatevalue
    updateValue_forAnimatedKey(value: cocoascript.CGFloat, key: cocoascript.NSCollectionViewTransitionLayoutAnimatedKey):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewtransitionlayout/1524429-valueforanimatedkey
    valueForAnimatedKey(key: cocoascript.NSCollectionViewTransitionLayoutAnimatedKey):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewtransitionlayout/1524425-currentlayout
    currentLayout(): cocoascript.NSCollectionViewLayout;
    setCurrentLayout(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewtransitionlayout/1524426-nextlayout
    nextLayout(): cocoascript.NSCollectionViewLayout;
    setNextLayout(): void;
    //
    alloc():cocoascript.NSCollectionViewTransitionLayout;
    //
    init():cocoascript.NSCollectionViewTransitionLayout;
  }
}

declare const NSCollectionViewTransitionLayout: cocoascript.NSCollectionViewTransitionLayout;
