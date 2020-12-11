declare namespace cocoascript {
  /**
   * An object that defines the space around the edges of items in a collection view.
   * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutedgespacing
   */
  interface NSCollectionLayoutEdgeSpacing extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutedgespacing/3199069-leading
    leading(): cocoascript.NSCollectionLayoutSpacing;
    setLeading(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutedgespacing/3199070-top
    top(): cocoascript.NSCollectionLayoutSpacing;
    setTop(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutedgespacing/3199071-trailing
    trailing(): cocoascript.NSCollectionLayoutSpacing;
    setTrailing(): void;
    // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutedgespacing/3199065-bottom
    bottom(): cocoascript.NSCollectionLayoutSpacing;
    setBottom(): void;
    //
    alloc():cocoascript.NSCollectionLayoutEdgeSpacing;
    //
    init():cocoascript.NSCollectionLayoutEdgeSpacing;
  }
}

declare const NSCollectionLayoutEdgeSpacing: cocoascript.NSCollectionLayoutEdgeSpacing;
