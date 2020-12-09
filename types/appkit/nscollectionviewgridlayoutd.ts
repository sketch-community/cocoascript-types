declare namespace cocoascript {
/**
 * A layout that displays a single section of items in a row and column grid. 
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout
 */
interface NSCollectionViewGridLayout extends NSCollectionViewLayout {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1524389-maximumnumberofrows
  maximumNumberOfRows(): cocoascript.NSUInteger;
  setMaximumNumberOfRows(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1533264-maximumnumberofcolumns
  maximumNumberOfColumns(): cocoascript.NSUInteger;
  setMaximumNumberOfColumns(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1534425-minimumitemsize
  minimumItemSize(): cocoascript.NSSize;
  setMinimumItemSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1530923-maximumitemsize
  maximumItemSize(): cocoascript.NSSize;
  setMaximumItemSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1525116-minimuminteritemspacing
  minimumInteritemSpacing(): cocoascript.CGFloat;
  setMinimumInteritemSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1535114-minimumlinespacing
  minimumLineSpacing(): cocoascript.CGFloat;
  setMinimumLineSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1527362-margins
  margins(): cocoascript.NSEdgeInsets;
  setMargins(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewgridlayout/1530955-backgroundcolors
  backgroundColors(): cocoascript.NSColor;
  setBackgroundColors(): void;
  // 
  alloc():cocoascript.NSCollectionViewGridLayout;
  // 
  init():cocoascript.NSCollectionViewGridLayout;
}
}
declare const NSCollectionViewGridLayout: cocoascript.NSCollectionViewGridLayout;

