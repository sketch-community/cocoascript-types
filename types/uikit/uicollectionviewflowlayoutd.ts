declare namespace cocoascript {
/**
 * A layout object that organizes items into a grid with optional header and footer views for each section.  
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout
 */
interface UICollectionViewFlowLayout extends UICollectionViewLayout {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617720-scrolldirection
  scrollDirection(): cocoascript.UICollectionViewScrollDirection;
  setScrollDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617717-minimumlinespacing
  minimumLineSpacing(): cocoascript.CGFloat;
  setMinimumLineSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617706-minimuminteritemspacing
  minimumInteritemSpacing(): cocoascript.CGFloat;
  setMinimumInteritemSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617711-itemsize
  itemSize(): cocoascript.CGSize;
  setItemSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617709-estimateditemsize
  estimatedItemSize(): cocoascript.CGSize;
  setEstimatedItemSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617714-sectioninset
  sectionInset(): cocoascript.UIEdgeInsets;
  setSectionInset(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/2921645-sectioninsetreference
  sectionInsetReference(): cocoascript.UICollectionViewFlowLayoutSectionInsetReference;
  setSectionInsetReference(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617710-headerreferencesize
  headerReferenceSize(): cocoascript.CGSize;
  setHeaderReferenceSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617703-footerreferencesize
  footerReferenceSize(): cocoascript.CGSize;
  setFooterReferenceSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617699-sectionheaderspintovisiblebounds
  sectionHeadersPinToVisibleBounds(): cocoascript.BOOL;
  setSectionHeadersPinToVisibleBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewflowlayout/1617701-sectionfooterspintovisiblebounds
  sectionFootersPinToVisibleBounds(): cocoascript.BOOL;
  setSectionFootersPinToVisibleBounds(): void;
  // 
  alloc():cocoascript.UICollectionViewFlowLayout;
  // 
  init():cocoascript.UICollectionViewFlowLayout;
}
}
declare const UICollectionViewFlowLayout: cocoascript.UICollectionViewFlowLayout;

