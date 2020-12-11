declare namespace cocoascript {
  /**
   * An abstract base class that you subclass and use to generate layout information for a collection view.
   * doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout
   */
  interface NSCollectionViewLayout extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533540-collectionview
    collectionView(): cocoascript.NSCollectionView;
    setCollectionView(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1527555-layoutattributesclass
    layoutAttributesClass(): cocoascript.Class;
    setLayoutAttributesClass(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1530434-preparelayout
    prepareLayout():void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1532618-collectionviewcontentsize
    collectionViewContentSize(): cocoascript.NSSize;
    setCollectionViewContentSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1524636-layoutattributesforelementsinrec
    layoutAttributesForElementsInRect(rect: cocoascript.NSRect):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1534298-layoutattributesforitematindexpa
    layoutAttributesForItemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1534287-layoutattributesforsupplementary
    layoutAttributesForSupplementaryViewOfKind_atIndexPath(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1527929-layoutattributesfordecorationvie
    layoutAttributesForDecorationViewOfKind_atIndexPath(elementKind: cocoascript.NSCollectionViewDecorationElementKind, indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535931-layoutattributesfordroptargetatp
    layoutAttributesForDropTargetAtPoint(pointInCollectionView: cocoascript.NSPoint):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1528296-layoutattributesforinteritemgapb
    layoutAttributesForInterItemGapBeforeIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535608-targetcontentoffsetforproposedco
    targetContentOffsetForProposedContentOffset(proposedContentOffset: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1525755-targetcontentoffsetforproposedco
    targetContentOffsetForProposedContentOffset_withScrollingVelocity(proposedContentOffset: cocoascript.NSPoint, velocity: cocoascript.NSPoint):cocoascript.NSPoint;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533485-prepareforcollectionviewupdates
    prepareForCollectionViewUpdates(updateItems: cocoascript.NSCollectionViewUpdateItem):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1534473-finalizecollectionviewupdates
    finalizeCollectionViewUpdates():void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1534044-indexpathstoinsertforsupplementa
    indexPathsToInsertForSupplementaryViewOfKind(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1528098-indexpathstoinsertfordecorationv
    indexPathsToInsertForDecorationViewOfKind(elementKind: cocoascript.NSCollectionViewDecorationElementKind):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533598-initiallayoutattributesforappear
    initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535331-initiallayoutattributesforappear
    initialLayoutAttributesForAppearingSupplementaryElementOfKind_atIndexPath(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, elementIndexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535003-initiallayoutattributesforappear
    initialLayoutAttributesForAppearingDecorationElementOfKind_atIndexPath(elementKind: cocoascript.NSCollectionViewDecorationElementKind, decorationIndexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1529622-indexpathstodeleteforsupplementa
    indexPathsToDeleteForSupplementaryViewOfKind(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1529635-indexpathstodeletefordecorationv
    indexPathsToDeleteForDecorationViewOfKind(elementKind: cocoascript.NSCollectionViewDecorationElementKind):cocoascript.NSIndexPath;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533317-finallayoutattributesfordisappea
    finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535919-finallayoutattributesfordisappea
    finalLayoutAttributesForDisappearingSupplementaryElementOfKind_atIndexPath(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, elementIndexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535917-finallayoutattributesfordisappea
    finalLayoutAttributesForDisappearingDecorationElementOfKind_atIndexPath(elementKind: cocoascript.NSCollectionViewDecorationElementKind, decorationIndexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1534293-invalidatelayout
    invalidateLayout():void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533282-invalidatelayoutwithcontext
    invalidateLayoutWithContext(context: cocoascript.NSCollectionViewLayoutInvalidationContext):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535858-invalidationcontextclass
    invalidationContextClass(): cocoascript.Class;
    setInvalidationContextClass(): void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1531047-shouldinvalidatelayoutforboundsc
    shouldInvalidateLayoutForBoundsChange(newBounds: cocoascript.NSRect):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535536-shouldinvalidatelayoutforpreferr
    shouldInvalidateLayoutForPreferredLayoutAttributes_withOriginalAttributes(preferredAttributes: cocoascript.NSCollectionViewLayoutAttributes, originalAttributes: cocoascript.NSCollectionViewLayoutAttributes):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1534058-invalidationcontextforboundschan
    invalidationContextForBoundsChange(newBounds: cocoascript.NSRect):cocoascript.NSCollectionViewLayoutInvalidationContext;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535343-invalidationcontextforpreferredl
    invalidationContextForPreferredLayoutAttributes_withOriginalAttributes(preferredAttributes: cocoascript.NSCollectionViewLayoutAttributes, originalAttributes: cocoascript.NSCollectionViewLayoutAttributes):cocoascript.NSCollectionViewLayoutInvalidationContext;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533678-prepareforanimatedboundschange
    prepareForAnimatedBoundsChange(oldBounds: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533163-finalizeanimatedboundschange
    finalizeAnimatedBoundsChange():void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533837-registerclass
    registerClass_forDecorationViewOfKind(viewClass: cocoascript.Class, elementKind: cocoascript.NSCollectionViewDecorationElementKind):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1535405-registernib
    registerNib_forDecorationViewOfKind(nib: cocoascript.NSNib, elementKind: cocoascript.NSCollectionViewDecorationElementKind):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533383-preparefortransitionfromlayout
    prepareForTransitionFromLayout(oldLayout: cocoascript.NSCollectionViewLayout):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1533945-preparefortransitiontolayout
    prepareForTransitionToLayout(newLayout: cocoascript.NSCollectionViewLayout):void;
    // doc://com.apple.documentation/documentation/appkit/nscollectionviewlayout/1534138-finalizelayouttransition
    finalizeLayoutTransition():void;
    //
    alloc():cocoascript.NSCollectionViewLayout;
    //
    init():cocoascript.NSCollectionViewLayout;
  }
}

declare const NSCollectionViewLayout: cocoascript.NSCollectionViewLayout;
