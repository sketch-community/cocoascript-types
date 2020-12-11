declare namespace cocoascript {
  /**
   * A collection view cell that provides list features and default styling.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewlistcell
   */
  interface UICollectionViewListCell extends UICollectionViewCell {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlistcell/3600459-defaultcontentconfiguration
    defaultContentConfiguration():cocoascript.UIListContentConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlistcell/3600458-accessories
    accessories(): cocoascript.UICellAccessory;
    setAccessories(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlistcell/3600460-indentationlevel
    indentationLevel(): cocoascript.NSInteger;
    setIndentationLevel(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlistcell/3600461-indentationwidth
    indentationWidth(): cocoascript.CGFloat;
    setIndentationWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlistcell/3600462-indentsaccessories
    indentsAccessories(): cocoascript.BOOL;
    setIndentsAccessories(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlistcell/3601206-separatorlayoutguide
    separatorLayoutGuide(): cocoascript.UILayoutGuide;
    setSeparatorLayoutGuide(): void;
    //
    alloc():cocoascript.UICollectionViewListCell;
    //
    init():cocoascript.UICollectionViewListCell;
  }
}

declare const UICollectionViewListCell: cocoascript.UICollectionViewListCell;
