declare namespace cocoascript {
/**
 * An ordered collection of data items displayed in a customizable layout. 
 * doc://com.apple.documentation/documentation/appkit/nscollectionview
 */
interface NSCollectionView extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528222-datasource
  dataSource(): cocoascript.NSCollectionViewDataSource;
  setDataSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528246-delegate
  delegate(): cocoascript.NSCollectionViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528207-content
  content(): cocoascript.id;
  setContent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528250-backgroundview
  backgroundView(): cocoascript.NSView;
  setBackgroundView(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528220-backgroundcolors
  backgroundColors(): cocoascript.NSColor;
  setBackgroundColors(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1644533-backgroundviewscrollswithcontent
  backgroundViewScrollsWithContent(): cocoascript.BOOL;
  setBackgroundViewScrollsWithContent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528240-makeitemwithidentifier
  makeItemWithIdentifier_forIndexPath(identifier: cocoascript.NSUserInterfaceItemIdentifier, indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewItem;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528268-registerclass
  registerClass_forItemWithIdentifier(itemClass: cocoascript.Class, identifier: cocoascript.NSUserInterfaceItemIdentifier):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528174-registernib
  registerNib_forItemWithIdentifier(nib: cocoascript.NSNib, identifier: cocoascript.NSUserInterfaceItemIdentifier):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528302-makesupplementaryviewofkind
  makeSupplementaryViewOfKind_withIdentifier_forIndexPath(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, identifier: cocoascript.NSUserInterfaceItemIdentifier, indexPath: cocoascript.NSIndexPath):cocoascript.NSView;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528233-registerclass
  registerClass_forSupplementaryViewOfKind_withIdentifier(viewClass: cocoascript.Class, kind: cocoascript.NSCollectionViewSupplementaryElementKind, identifier: cocoascript.NSUserInterfaceItemIdentifier):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1527005-registernib
  registerNib_forSupplementaryViewOfKind_withIdentifier(nib: cocoascript.NSNib, kind: cocoascript.NSCollectionViewSupplementaryElementKind, identifier: cocoascript.NSUserInterfaceItemIdentifier):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528271-collectionviewlayout
  collectionViewLayout(): cocoascript.NSCollectionViewLayout;
  setCollectionViewLayout(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528264-reloaddata
  reloadData():void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528306-reloadsections
  reloadSections(sections: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528166-reloaditemsatindexpaths
  reloadItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/2879292-prefetchdatasource
  prefetchDataSource(): cocoascript.NSCollectionViewPrefetching;
  setPrefetchDataSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528238-numberofsections
  numberOfSections(): cocoascript.NSInteger;
  setNumberOfSections(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528291-numberofitemsinsection
  numberOfItemsInSection(section: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528267-insertitemsatindexpaths
  insertItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528159-moveitematindexpath
  moveItemAtIndexPath_toIndexPath(indexPath: cocoascript.NSIndexPath, newIndexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528128-deleteitemsatindexpaths
  deleteItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1526126-insertsections
  insertSections(sections: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1524485-movesection
  moveSection_toSection(section: cocoascript.NSInteger, newSection: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1527083-deletesections
  deleteSections(sections: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1644691-togglesectioncollapse
  toggleSectionCollapse(sender: cocoascript.NSCollectionView):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528300-selectable
  selectable(): cocoascript.BOOL;
  setSelectable(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1524276-allowsmultipleselection
  allowsMultipleSelection(): cocoascript.BOOL;
  setAllowsMultipleSelection(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528180-allowsemptyselection
  allowsEmptySelection(): cocoascript.BOOL;
  setAllowsEmptySelection(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528275-selectionindexpaths
  selectionIndexPaths(): cocoascript.NSIndexPath;
  setSelectionIndexPaths(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528156-selectall
  selectAll(sender: cocoascript.NSCollectionView):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528251-deselectall
  deselectAll(sender: cocoascript.NSCollectionView):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1525656-selectitemsatindexpaths
  selectItemsAtIndexPaths_scrollPosition(indexPaths: cocoascript.NSIndexPath, scrollPosition: cocoascript.NSCollectionViewScrollPosition):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528172-deselectitemsatindexpaths
  deselectItemsAtIndexPaths(indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528194-visibleitems
  visibleItems():cocoascript.NSCollectionViewItem;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528223-indexpathsforvisibleitems
  indexPathsForVisibleItems():cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528203-visiblesupplementaryviewsofkind
  visibleSupplementaryViewsOfKind(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind):cocoascript.NSCollectionViewElement;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528287-indexpathsforvisiblesupplementar
  indexPathsForVisibleSupplementaryElementsOfKind(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528277-indexpathforitem
  indexPathForItem(item: cocoascript.NSCollectionViewItem):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1524499-indexpathforitematpoint
  indexPathForItemAtPoint(point: cocoascript.NSPoint):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528184-itematindexpath
  itemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewItem;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1524880-supplementaryviewforelementkind
  supplementaryViewForElementKind_atIndexPath(elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewElement;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528227-scrolltoitemsatindexpaths
  scrollToItemsAtIndexPaths_scrollPosition(indexPaths: cocoascript.NSIndexPath, scrollPosition: cocoascript.NSCollectionViewScrollPosition):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528243-layoutattributesforitematindexpa
  layoutAttributesForItemAtIndexPath(indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1526721-layoutattributesforsupplementary
  layoutAttributesForSupplementaryElementOfKind_atIndexPath(kind: cocoascript.NSCollectionViewSupplementaryElementKind, indexPath: cocoascript.NSIndexPath):cocoascript.NSCollectionViewLayoutAttributes;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1525876-performbatchupdates
  performBatchUpdates_completionHandler(updates: void, completionHandler: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528199-firstresponder
  firstResponder(): cocoascript.BOOL;
  setFirstResponder(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528191-draggingimageforitemsatindexpath
  draggingImageForItemsAtIndexPaths_withEvent_offset(indexPaths: cocoascript.NSIndexPath, event: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528285-itemprototype
  itemPrototype(): cocoascript.NSCollectionViewItem;
  setItemPrototype(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528305-newitemforrepresentedobject
  newItemForRepresentedObject(object: cocoascript.NSCollectionView):cocoascript.NSCollectionViewItem;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1525505-selectionindexes
  selectionIndexes(): cocoascript.NSIndexSet;
  setSelectionIndexes(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1524757-maxnumberofrows
  maxNumberOfRows(): cocoascript.NSUInteger;
  setMaxNumberOfRows(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528281-maxnumberofcolumns
  maxNumberOfColumns(): cocoascript.NSUInteger;
  setMaxNumberOfColumns(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1526293-minitemsize
  minItemSize(): cocoascript.NSSize;
  setMinItemSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1526761-maxitemsize
  maxItemSize(): cocoascript.NSSize;
  setMaxItemSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1526399-itematindex
  itemAtIndex(index: cocoascript.NSUInteger):cocoascript.NSCollectionViewItem;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1524639-frameforitematindex
  frameForItemAtIndex(index: cocoascript.NSUInteger):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528209-frameforitematindex
  frameForItemAtIndex_withNumberOfItems(index: cocoascript.NSUInteger, numberOfItems: cocoascript.NSUInteger):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528249-draggingimageforitemsatindexes
  draggingImageForItemsAtIndexes_withEvent_offset(indexes: cocoascript.NSIndexSet, event: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nscollectionview/1528229-setdraggingsourceoperationmask
  setDraggingSourceOperationMask_forLocal(dragOperationMask: cocoascript.NSDragOperation, localDestination: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.NSCollectionView;
  // 
  init():cocoascript.NSCollectionView;
}
}
declare const NSCollectionView: cocoascript.NSCollectionView;

