declare namespace cocoascript {
/**
 * An object that defines scroll direction, section spacing, and headers or footers for the layout.
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayoutconfiguration
 */
interface NSCollectionViewCompositionalLayoutConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayoutconfiguration/3281813-scrolldirection
  scrollDirection(): cocoascript.NSCollectionViewScrollDirection;
  setScrollDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayoutconfiguration/3281812-intersectionspacing
  interSectionSpacing(): cocoascript.CGFloat;
  setInterSectionSpacing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewcompositionallayoutconfiguration/3281811-boundarysupplementaryitems
  boundarySupplementaryItems(): cocoascript.NSCollectionLayoutBoundarySupplementaryItem;
  setBoundarySupplementaryItems(): void;
  // 
  alloc():cocoascript.NSCollectionViewCompositionalLayoutConfiguration;
  // 
  init():cocoascript.NSCollectionViewCompositionalLayoutConfiguration;
}
}
declare const NSCollectionViewCompositionalLayoutConfiguration: cocoascript.NSCollectionViewCompositionalLayoutConfiguration;

