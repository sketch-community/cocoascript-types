declare namespace cocoascript {
/**
 * An object that manages an ordered collection of data items and presents them using customizable layouts.
 * doc://com.apple.documentation/documentation/uikit/uicollectionview
 */
interface UICollectionView extends UIScrollView {
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618053-initwithframe
  initWithFrame_collectionViewLayout(frame: cocoascript.CGRect, layout: cocoascript.UICollectionViewLayout):cocoascript.UICollectionView;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618065-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICollectionView;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618091-datasource
  dataSource(): cocoascript.UICollectionViewDataSource;
  setDataSource(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1771771-prefetchingenabled
  prefetchingEnabled(): cocoascript.BOOL;
  setPrefetchingEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1771768-prefetchdatasource
  prefetchDataSource(): cocoascript.UICollectionViewDataSourcePrefetching;
  setPrefetchDataSource(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618033-delegate
  delegate(): cocoascript.UICollectionViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/3600423-dequeueconfiguredreusablecellwit
  dequeueConfiguredReusableCellWithRegistration_forIndexPath_item(registration: cocoascript.UICollectionViewCellRegistration, indexPath: cocoascript.NSIndexPath, item: cocoascript.UICollectionView):cocoascript.UICollectionViewCell;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618089-registerclass
  registerClass_forCellWithReuseIdentifier(cellClass: cocoascript.Class, identifier: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618083-registernib
  registerNib_forCellWithReuseIdentifier(nib: cocoascript.UINib, identifier: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618063-dequeuereusablecellwithreuseiden
  dequeueReusableCellWithReuseIdentifier_forIndexPath(identifier: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewCell;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/3600424-dequeueconfiguredreusablesupplem
  dequeueConfiguredReusableSupplementaryViewWithRegistration_forIndexPath(registration: cocoascript.UICollectionViewSupplementaryRegistration, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionReusableView;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618103-registerclass
  registerClass_forSupplementaryViewOfKind_withReuseIdentifier(viewClass: cocoascript.Class, elementKind: cocoascript.NSString, identifier: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618101-registernib
  registerNib_forSupplementaryViewOfKind_withReuseIdentifier(nib: cocoascript.UINib, kind: cocoascript.NSString, identifier: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618068-dequeuereusablesupplementaryview
  dequeueReusableSupplementaryViewOfKind_withReuseIdentifier_forIndexPath(elementKind: cocoascript.NSString, identifier: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionReusableView;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618074-backgroundview
  backgroundView(): cocoascript.UIView;
  setBackgroundView(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618047-collectionviewlayout
  collectionViewLayout(): cocoascript.UICollectionViewLayout;
  setCollectionViewLayout(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618086-setcollectionviewlayout
  setCollectionViewLayout_animated(layout: cocoascript.UICollectionViewLayout, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618017-setcollectionviewlayout
  setCollectionViewLayout_animated_completion(layout: cocoascript.UICollectionViewLayout, animated: cocoascript.BOOL, completion: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618098-startinteractivetransitiontocoll
  startInteractiveTransitionToCollectionViewLayout_completion(layout: cocoascript.UICollectionViewLayout, completion: cocoascript.UICollectionViewLayoutInteractiveTransitionCompletion):cocoascript.UICollectionViewTransitionLayout;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618080-finishinteractivetransition
  finishInteractiveTransition():void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618075-cancelinteractivetransition
  cancelInteractiveTransition():void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618028-numberofsections
  numberOfSections(): cocoascript.NSInteger;
  setNumberOfSections(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618016-numberofitemsinsection
  numberOfItemsInSection(section: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618056-visiblecells
  visibleCells(): cocoascript.UICollectionViewCell;
  setVisibleCells(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618097-insertitemsatindexpaths
  insertItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618059-moveitematindexpath
  moveItemAtIndexPath_toIndexPath(indexPath: cocoascript.NSIndexPath, newIndexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618060-deleteitemsatindexpaths
  deleteItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618090-insertsections
  insertSections(sections: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618042-movesection
  moveSection_toSection(section: cocoascript.NSInteger, newSection: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618102-deletesections
  deleteSections(sections: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618019-begininteractivemovementforitema
  beginInteractiveMovementForItemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618079-updateinteractivemovementtargetp
  updateInteractiveMovementTargetPosition(targetPosition: cocoascript.CGPoint):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618082-endinteractivemovement
  endInteractiveMovement():void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618076-cancelinteractivemovement
  cancelInteractiveMovement():void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/2897404-dragdelegate
  dragDelegate(): cocoascript.UICollectionViewDragDelegate;
  setDragDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/2897415-hasactivedrag
  hasActiveDrag(): cocoascript.BOOL;
  setHasActiveDrag(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/2909041-draginteractionenabled
  dragInteractionEnabled(): cocoascript.BOOL;
  setDragInteractionEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/2897491-dropdelegate
  dropDelegate(): cocoascript.UICollectionViewDropDelegate;
  setDropDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/2897433-hasactivedrop
  hasActiveDrop(): cocoascript.BOOL;
  setHasActiveDrop(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/2897347-reorderingcadence
  reorderingCadence(): cocoascript.UICollectionViewReorderingCadence;
  setReorderingCadence(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618099-indexpathsforselecteditems
  indexPathsForSelectedItems(): cocoascript.NSIndexPath;
  setIndexPathsForSelectedItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618057-selectitematindexpath
  selectItemAtIndexPath_animated_scrollPosition(indexPath: cocoascript.NSIndexPath, animated: cocoascript.BOOL, scrollPosition: cocoascript.UICollectionViewScrollPosition):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618040-deselectitematindexpath
  deselectItemAtIndexPath_animated(indexPath: cocoascript.NSIndexPath, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618009-allowsselection
  allowsSelection(): cocoascript.BOOL;
  setAllowsSelection(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618024-allowsmultipleselection
  allowsMultipleSelection(): cocoascript.BOOL;
  setAllowsMultipleSelection(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/3600422-allowsselectionduringediting
  allowsSelectionDuringEditing(): cocoascript.BOOL;
  setAllowsSelectionDuringEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/3600421-allowsmultipleselectionduringedi
  allowsMultipleSelectionDuringEditing(): cocoascript.BOOL;
  setAllowsMultipleSelectionDuringEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/3573920-selectionfollowsfocus
  selectionFollowsFocus(): cocoascript.BOOL;
  setSelectionFollowsFocus(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/3600425-editing
  editing(): cocoascript.BOOL;
  setEditing(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618030-indexpathforitematpoint
  indexPathForItemAtPoint(point: cocoascript.CGPoint):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618020-indexpathsforvisibleitems
  indexPathsForVisibleItems(): cocoascript.NSIndexPath;
  setIndexPathsForVisibleItems(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618094-indexpathforcell
  indexPathForCell(cell: cocoascript.UICollectionViewCell):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618088-cellforitematindexpath
  cellForItemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewCell;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618034-indexpathsforvisiblesupplementar
  indexPathsForVisibleSupplementaryElementsOfKind(elementKind: cocoascript.NSString):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618041-supplementaryviewforelementkind
  supplementaryViewForElementKind_atIndexPath(elementKind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionReusableView;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618026-visiblesupplementaryviewsofkind
  visibleSupplementaryViewsOfKind(elementKind: cocoascript.NSString):cocoascript.UICollectionReusableView;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618093-layoutattributesforitematindexpa
  layoutAttributesForItemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618012-layoutattributesforsupplementary
  layoutAttributesForSupplementaryElementOfKind_atIndexPath(kind: cocoascript.NSString, indexPath: cocoascript.NSIndexPath):cocoascript.UICollectionViewLayoutAttributes;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618046-scrolltoitematindexpath
  scrollToItemAtIndexPath_atScrollPosition_animated(indexPath: cocoascript.NSIndexPath, scrollPosition: cocoascript.UICollectionViewScrollPosition, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618045-performbatchupdates
  performBatchUpdates_completion(updates: void, completion: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/2891094-hasuncommittedupdates
  hasUncommittedUpdates(): cocoascript.BOOL;
  setHasUncommittedUpdates(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618078-reloaddata
  reloadData():void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618092-reloadsections
  reloadSections(sections: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618055-reloaditemsatindexpaths
  reloadItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionelementkindsectionfooter
  UICollectionElementKindSectionFooter(): cocoascript.const;
  setUICollectionElementKindSectionFooter(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionelementkindsectionheader
  UICollectionElementKindSectionHeader(): cocoascript.const;
  setUICollectionElementKindSectionHeader(): void;
  // doc://com.apple.documentation/documentation/uikit/uicollectionview/1618022-rememberslastfocusedindexpath
  remembersLastFocusedIndexPath(): cocoascript.BOOL;
  setRemembersLastFocusedIndexPath(): void;
  // 
  alloc():cocoascript.UICollectionView;
  // 
  init():cocoascript.UICollectionView;
}
}
declare const UICollectionView: cocoascript.UICollectionView;

