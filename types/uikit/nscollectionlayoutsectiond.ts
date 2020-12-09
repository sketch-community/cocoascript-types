declare namespace cocoascript {
/**
 * A container that combines a set of groups into distinct visual groupings.
 * doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection
 */
interface NSCollectionLayoutSection extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3199094-orthogonalscrollingbehavior
  orthogonalScrollingBehavior(): cocoascript.UICollectionLayoutSectionOrthogonalScrollingBehavior;
  setOrthogonalScrollingBehavior(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3199093-intergroupspacing
  interGroupSpacing(): cocoascript.CGFloat;
  setInterGroupSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3199090-contentinsets
  contentInsets(): cocoascript.NSDirectionalEdgeInsets;
  setContentInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3600434-contentinsetsreference
  contentInsetsReference(): cocoascript.UIContentInsetsReference;
  setContentInsetsReference(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3199095-supplementariesfollowcontentinse
  supplementariesFollowContentInsets(): cocoascript.BOOL;
  setSupplementariesFollowContentInsets(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3199089-boundarysupplementaryitems
  boundarySupplementaryItems(): cocoascript.NSCollectionLayoutBoundarySupplementaryItem;
  setBoundarySupplementaryItems(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3199091-decorationitems
  decorationItems(): cocoascript.NSCollectionLayoutDecorationItem;
  setDecorationItems(): void;
  // doc://com.apple.documentation/documentation/uikit/nscollectionlayoutsection/3199096-visibleitemsinvalidationhandler
  visibleItemsInvalidationHandler(): cocoascript.NSCollectionLayoutSectionVisibleItemsInvalidationHandler;
  setVisibleItemsInvalidationHandler(): void;
  // 
  alloc():cocoascript.NSCollectionLayoutSection;
  // 
  init():cocoascript.NSCollectionLayoutSection;
}
}
declare const NSCollectionLayoutSection: cocoascript.NSCollectionLayoutSection;

