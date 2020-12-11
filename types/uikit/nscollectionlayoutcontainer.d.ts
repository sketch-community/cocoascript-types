declare namespace cocoascript {
  /**
   * A protocol used to provide information about the size and content insets of a layout's container.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutcontainer
   */
  interface NSCollectionLayoutContainer extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutcontainer/3199047-contentsize
    contentSize(): cocoascript.CGSize;
    setContentSize(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutcontainer/3199049-effectivecontentsize
    effectiveContentSize(): cocoascript.CGSize;
    setEffectiveContentSize(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutcontainer/3199046-contentinsets
    contentInsets(): cocoascript.NSDirectionalEdgeInsets;
    setContentInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutcontainer/3199048-effectivecontentinsets
    effectiveContentInsets(): cocoascript.NSDirectionalEdgeInsets;
    setEffectiveContentInsets(): void;
  }
}
