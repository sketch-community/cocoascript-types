declare namespace cocoascript {
  /**
   * An object that defines the space between or around items in a collection view.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutspacing
   */
  interface NSCollectionLayoutSpacing extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutspacing/3199107-spacing
    spacing(): cocoascript.CGFloat;
    setSpacing(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutspacing/3199105-isfixedspacing
    isFixedSpacing(): cocoascript.BOOL;
    setIsFixedSpacing(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutspacing/3199106-isflexiblespacing
    isFlexibleSpacing(): cocoascript.BOOL;
    setIsFlexibleSpacing(): void;
    //
    alloc():cocoascript.NSCollectionLayoutSpacing;
    //
    init():cocoascript.NSCollectionLayoutSpacing;
  }
}

declare const NSCollectionLayoutSpacing: cocoascript.NSCollectionLayoutSpacing;
