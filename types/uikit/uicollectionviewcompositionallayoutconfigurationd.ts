declare namespace cocoascript {
/**
 * An object that defines scroll direction, section spacing, and headers or footers for the layout.
 * doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayoutconfiguration
 */
interface UICollectionViewCompositionalLayoutConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayoutconfiguration/3199222-scrolldirection
  scrollDirection(): cocoascript.UICollectionViewScrollDirection;
  setScrollDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayoutconfiguration/3199221-intersectionspacing
  interSectionSpacing(): cocoascript.CGFloat;
  setInterSectionSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayoutconfiguration/3600435-contentinsetsreference
  contentInsetsReference(): cocoascript.UIContentInsetsReference;
  setContentInsetsReference(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionviewcompositionallayoutconfiguration/3199219-boundarysupplementaryitems
  boundarySupplementaryItems(): cocoascript.NSCollectionLayoutBoundarySupplementaryItem;
  setBoundarySupplementaryItems(): void;
  // 
  alloc():cocoascript.UICollectionViewCompositionalLayoutConfiguration;
  // 
  init():cocoascript.UICollectionViewCompositionalLayoutConfiguration;
}
}
declare const UICollectionViewCompositionalLayoutConfiguration: cocoascript.UICollectionViewCompositionalLayoutConfiguration;

