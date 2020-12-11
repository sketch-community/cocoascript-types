declare namespace cocoascript {
  /**
   * The most basic component of a collection view's layout.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutitem
   */
  interface NSCollectionLayoutItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutitem/3213873-layoutsize
    layoutSize(): cocoascript.NSCollectionLayoutSize;
    setLayoutSize(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutitem/3213874-supplementaryitems
    supplementaryItems(): cocoascript.NSCollectionLayoutSupplementaryItem;
    setSupplementaryItems(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutitem/3199085-edgespacing
    edgeSpacing(): cocoascript.NSCollectionLayoutEdgeSpacing;
    setEdgeSpacing(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutitem/3199084-contentinsets
    contentInsets(): cocoascript.NSDirectionalEdgeInsets;
    setContentInsets(): void;
    //
    alloc():cocoascript.NSCollectionLayoutItem;
    //
    init():cocoascript.NSCollectionLayoutItem;
  }
}

declare const NSCollectionLayoutItem: cocoascript.NSCollectionLayoutItem;
