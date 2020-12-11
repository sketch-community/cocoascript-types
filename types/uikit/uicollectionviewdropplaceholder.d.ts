declare namespace cocoascript {
  /**
   * A placeholder for an item dropped on a collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewdropplaceholder
   */
  interface UICollectionViewDropPlaceholder extends UICollectionViewPlaceholder {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewdropplaceholder/2921637-previewparametersprovider
    previewParametersProvider(): cocoascript.UICollectionViewCell;
    setPreviewParametersProvider(): void;
    //
    alloc():cocoascript.UICollectionViewDropPlaceholder;
    //
    init():cocoascript.UICollectionViewDropPlaceholder;
  }
}

declare const UICollectionViewDropPlaceholder: cocoascript.UICollectionViewDropPlaceholder;
