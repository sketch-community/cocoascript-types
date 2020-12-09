declare namespace cocoascript {
/**
 * A layout that organizes items into a flexible and configurable arrangement.  
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout
 */
interface NSCollectionViewFlowLayout extends NSCollectionViewLayout {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402869-scrolldirection
  scrollDirection(): cocoascript.NSCollectionViewScrollDirection;
  setScrollDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402898-minimumlinespacing
  minimumLineSpacing(): cocoascript.CGFloat;
  setMinimumLineSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402872-minimuminteritemspacing
  minimumInteritemSpacing(): cocoascript.CGFloat;
  setMinimumInteritemSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402896-estimateditemsize
  estimatedItemSize(): cocoascript.NSSize;
  setEstimatedItemSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402863-itemsize
  itemSize(): cocoascript.NSSize;
  setItemSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402862-sectioninset
  sectionInset(): cocoascript.NSEdgeInsets;
  setSectionInset(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402893-headerreferencesize
  headerReferenceSize(): cocoascript.NSSize;
  setHeaderReferenceSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1402892-footerreferencesize
  footerReferenceSize(): cocoascript.NSSize;
  setFooterReferenceSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1644671-sectionfooterspintovisiblebounds
  sectionFootersPinToVisibleBounds(): cocoascript.BOOL;
  setSectionFootersPinToVisibleBounds(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1644640-sectionheaderspintovisiblebounds
  sectionHeadersPinToVisibleBounds(): cocoascript.BOOL;
  setSectionHeadersPinToVisibleBounds(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1644723-collapsesectionatindex
  collapseSectionAtIndex(sectionIndex: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1644651-expandsectionatindex
  expandSectionAtIndex(sectionIndex: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewflowlayout/1644596-sectionatindexiscollapsed
  sectionAtIndexIsCollapsed(sectionIndex: cocoascript.NSUInteger):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSCollectionViewFlowLayout;
  // 
  init():cocoascript.NSCollectionViewFlowLayout;
}
}
declare const NSCollectionViewFlowLayout: cocoascript.NSCollectionViewFlowLayout;

