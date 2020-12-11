declare namespace cocoascript {
  /**
   * The visual representation for a single data element in a collection view.
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewitem
   */
  interface NSCollectionViewItem extends NSViewController {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewitem/1525366-imageview
    imageView(): cocoascript.NSImageView;
    setImageView(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewitem/1527126-textfield
    textField(): cocoascript.NSTextField;
    setTextField(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewitem/1528214-selected
    selected(): cocoascript.BOOL;
    setSelected(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewitem/1527689-highlightstate
    highlightState(): cocoascript.NSCollectionViewItemHighlightState;
    setHighlightState(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewitem/1528221-collectionview
    collectionView(): cocoascript.NSCollectionView;
    setCollectionView(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewitem/1528303-draggingimagecomponents
    draggingImageComponents(): cocoascript.NSDraggingImageComponent;
    setDraggingImageComponents(): void;
    //
    alloc():cocoascript.NSCollectionViewItem;
    //
    init():cocoascript.NSCollectionViewItem;
  }
}

declare const NSCollectionViewItem: cocoascript.NSCollectionViewItem;
