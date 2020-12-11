declare namespace cocoascript {
  /**
   * The width and the height of an item in a collection view.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsize
   */
  interface NSCollectionLayoutSize extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsize/3213888-widthdimension
    widthDimension(): cocoascript.NSCollectionLayoutDimension;
    setWidthDimension(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsize/3213886-heightdimension
    heightDimension(): cocoascript.NSCollectionLayoutDimension;
    setHeightDimension(): void;
    //
    alloc():cocoascript.NSCollectionLayoutSize;
    //
    init():cocoascript.NSCollectionLayoutSize;
  }
}

declare const NSCollectionLayoutSize: cocoascript.NSCollectionLayoutSize;
