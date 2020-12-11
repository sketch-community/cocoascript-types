declare namespace cocoascript {
  /**
   * A container for a set of items that lays out the items along a path.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroup
   */
  interface NSCollectionLayoutGroup extends NSCollectionLayoutItem {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroup/3213857-subitems
    subitems(): cocoascript.NSCollectionLayoutItem;
    setSubitems(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroup/3199079-supplementaryitems
    supplementaryItems(): cocoascript.NSCollectionLayoutSupplementaryItem;
    setSupplementaryItems(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroup/3199078-interitemspacing
    interItemSpacing(): cocoascript.NSCollectionLayoutSpacing;
    setInterItemSpacing(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroup/3199082-visualdescription
    visualDescription():cocoascript.NSString;
    //
    alloc():cocoascript.NSCollectionLayoutGroup;
    //
    init():cocoascript.NSCollectionLayoutGroup;
  }
}

declare const NSCollectionLayoutGroup: cocoascript.NSCollectionLayoutGroup;
