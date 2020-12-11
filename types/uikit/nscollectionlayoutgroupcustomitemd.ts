declare namespace cocoascript {
  /**
   * An item used in a group with a custom layout arrangement.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroupcustomitem
   */
  interface NSCollectionLayoutGroupCustomItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroupcustomitem/3213865-frame
    frame(): cocoascript.CGRect;
    setFrame(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutgroupcustomitem/3213866-zindex
    zIndex(): cocoascript.NSInteger;
    setZIndex(): void;
    //
    alloc():cocoascript.NSCollectionLayoutGroupCustomItem;
    //
    init():cocoascript.NSCollectionLayoutGroupCustomItem;
  }
}

declare const NSCollectionLayoutGroupCustomItem: cocoascript.NSCollectionLayoutGroupCustomItem;
