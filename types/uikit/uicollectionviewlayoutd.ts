declare namespace cocoascript {
  /**
   * An abstract base class for generating layout information for a collection view.
   * doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout
   */
  interface UICollectionViewLayout extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617734-init
    init():cocoascript.UICollectionViewLayout;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617766-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICollectionViewLayout;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617751-collectionview
    collectionView(): cocoascript.UICollectionView;
    setCollectionView(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617796-collectionviewcontentsize
    collectionViewContentSize(): cocoascript.CGSize;
    setCollectionViewContentSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617774-layoutattributesclass
    layoutAttributesClass(): cocoascript.Class;
    setLayoutAttributesClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617752-preparelayout
    prepareLayout():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617769-layoutattributesforelementsinrec
    layoutAttributesForElementsInRect(rect: cocoascript.CGRect):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617797-layoutattributesforitematindexpa
    layoutAttributesForItemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617788-layoutattributesforinteractively
    layoutAttributesForInteractivelyMovingItemAtIndexPath_withTargetPosition(indexPath: cocoascript.NSIndexPath, position: cocoascript.CGPoint):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617792-layoutattributesforsupplementary
    layoutAttributesForSupplementaryViewOfKind_atIndexPath(elementKind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617809-layoutattributesfordecorationvie
    layoutAttributesForDecorationViewOfKind_atIndexPath(elementKind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617724-targetcontentoffsetforproposedco
    targetContentOffsetForProposedContentOffset(proposedContentOffset: cocoascript.CGPoint):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617729-targetcontentoffsetforproposedco
    targetContentOffsetForProposedContentOffset_withScrollingVelocity(proposedContentOffset: cocoascript.CGPoint, velocity: cocoascript.CGPoint):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617784-prepareforcollectionviewupdates
    prepareForCollectionViewUpdates(updateItems: cocoascript.UICollectionViewUpdateItem):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617787-finalizecollectionviewupdates
    finalizeCollectionViewUpdates():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617770-indexpathstoinsertforsupplementa
    indexPathsToInsertForSupplementaryViewOfKind(elementKind: cocoascript.NSString):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617750-indexpathstoinsertfordecorationv
    indexPathsToInsertForDecorationViewOfKind(elementKind: cocoascript.NSString):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617789-initiallayoutattributesforappear
    initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617737-initiallayoutattributesforappear
    initialLayoutAttributesForAppearingSupplementaryElementOfKind_atIndexPath(elementKind: cocoascript.NSString, elementIndexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617726-initiallayoutattributesforappear
    initialLayoutAttributesForAppearingDecorationElementOfKind_atIndexPath(elementKind: cocoascript.NSString, decorationIndexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617807-indexpathstodeleteforsupplementa
    indexPathsToDeleteForSupplementaryViewOfKind(elementKind: cocoascript.NSString):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617730-indexpathstodeletefordecorationv
    indexPathsToDeleteForDecorationViewOfKind(elementKind: cocoascript.NSString):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617740-finallayoutattributesfordisappea
    finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617742-finallayoutattributesfordisappea
    finalLayoutAttributesForDisappearingSupplementaryElementOfKind_atIndexPath(elementKind: cocoascript.NSString, elementIndexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617762-finallayoutattributesfordisappea
    finalLayoutAttributesForDisappearingDecorationElementOfKind_atIndexPath(elementKind: cocoascript.NSString, decorationIndexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617778-targetindexpathforinteractivelym
    targetIndexPathForInteractivelyMovingItem_withPosition(previousIndexPath: cocoascript.NSIndexPath, position: cocoascript.CGPoint):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617728-invalidatelayout
    invalidateLayout():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617771-invalidatelayoutwithcontext
    invalidateLayoutWithContext(context: cocoascript.UICollectionViewLayoutInvalidationContext):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617790-invalidationcontextclass
    invalidationContextClass(): cocoascript.Class;
    setInvalidationContextClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617781-shouldinvalidatelayoutforboundsc
    shouldInvalidateLayoutForBoundsChange(newBounds: cocoascript.CGRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617754-invalidationcontextforboundschan
    invalidationContextForBoundsChange(newBounds: cocoascript.CGRect):cocoascript.UICollectionViewLayoutInvalidationContext;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617746-shouldinvalidatelayoutforpreferr
    shouldInvalidateLayoutForPreferredLayoutAttributes_withOriginalAttributes(preferredAttributes: cocoascript.UICollectionViewLayoutAttributes, originalAttributes: cocoascript.UICollectionViewLayoutAttributes):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617767-invalidationcontextforpreferredl
    invalidationContextForPreferredLayoutAttributes_withOriginalAttributes(preferredAttributes: cocoascript.UICollectionViewLayoutAttributes, originalAttributes: cocoascript.UICollectionViewLayoutAttributes):cocoascript.UICollectionViewLayoutInvalidationContext;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617757-invalidationcontextforinteractiv
    invalidationContextForInteractivelyMovingItems_withTargetPosition_previousIndexPaths_previousPosition(targetIndexPaths: cocoascript.NSIndexPath, targetPosition: cocoascript.CGPoint, previousIndexPaths: cocoascript.NSIndexPath, previousPosition: cocoascript.CGPoint):cocoascript.UICollectionViewLayoutInvalidationContext;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617755-invalidationcontextforendinginte
    invalidationContextForEndingInteractiveMovementOfItemsToFinalIndexPaths_previousIndexPaths_movementCancelled(indexPaths: cocoascript.NSIndexPath, previousIndexPaths: cocoascript.NSIndexPath, movementCancelled: cocoascript.BOOL):cocoascript.UICollectionViewLayoutInvalidationContext;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617761-prepareforanimatedboundschange
    prepareForAnimatedBoundsChange(oldBounds: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617745-finalizeanimatedboundschange
    finalizeAnimatedBoundsChange():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617802-preparefortransitionfromlayout
    prepareForTransitionFromLayout(oldLayout: cocoascript.UICollectionViewLayout):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617791-preparefortransitiontolayout
    prepareForTransitionToLayout(newLayout: cocoascript.UICollectionViewLayout):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617794-finalizelayouttransition
    finalizeLayoutTransition():void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617739-registerclass
    registerClass_forDecorationViewOfKind(viewClass: cocoascript.Class, elementKind: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/1617732-registernib
    registerNib_forDecorationViewOfKind(nib: cocoascript.UINib, elementKind: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/2891100-developmentlayoutdirection
    developmentLayoutDirection(): cocoascript.UIUserInterfaceLayoutDirection;
    setDevelopmentLayoutDirection(): void;
    // doc://com.apple.documentation/documentation/uikit/uicollectionviewlayout/2891099-flipshorizontallyinoppositelayou
    flipsHorizontallyInOppositeLayoutDirection(): cocoascript.BOOL;
    setFlipsHorizontallyInOppositeLayoutDirection(): void;
    //
    alloc():cocoascript.UICollectionViewLayout;
    //
    init():cocoascript.UICollectionViewLayout;
  }
}

declare const UICollectionViewLayout: cocoascript.UICollectionViewLayout;
