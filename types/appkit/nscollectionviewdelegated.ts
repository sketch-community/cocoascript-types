declare namespace cocoascript {
/**
 * A set of methods that you use to manage the behavior of a collection view.
 * doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate
 */
interface NSCollectionViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528280-collectionview
  collectionView_shouldSelectItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528236-collectionview
  collectionView_didSelectItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1525582-collectionview
  collectionView_shouldDeselectItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528279-collectionview
  collectionView_didDeselectItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528178-collectionview
  collectionView_shouldChangeItemsAtIndexPaths_toHighlightState(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath, highlightState: cocoascript.NSCollectionViewItemHighlightState):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1526015-collectionview
  collectionView_didChangeItemsAtIndexPaths_toHighlightState(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath, highlightState: cocoascript.NSCollectionViewItemHighlightState):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1524266-collectionview
  collectionView_willDisplayItem_forRepresentedObjectAtIndexPath(collectionView: cocoascript.NSCollectionView, item: cocoascript.NSCollectionViewItem, indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528183-collectionview
  collectionView_didEndDisplayingItem_forRepresentedObjectAtIndexPath(collectionView: cocoascript.NSCollectionView, item: cocoascript.NSCollectionViewItem, indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1525963-collectionview
  collectionView_willDisplaySupplementaryView_forElementKind_atIndexPath(collectionView: cocoascript.NSCollectionView, view: cocoascript.NSView, elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528192-collectionview
  collectionView_didEndDisplayingSupplementaryView_forElementOfKind_atIndexPath(collectionView: cocoascript.NSCollectionView, view: cocoascript.NSView, elementKind: cocoascript.NSCollectionViewSupplementaryElementKind, indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528228-collectionview
  collectionView_transitionLayoutForOldLayout_newLayout(collectionView: cocoascript.NSCollectionView, fromLayout: cocoascript.NSCollectionViewLayout, toLayout: cocoascript.NSCollectionViewLayout):cocoascript.NSCollectionViewTransitionLayout;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1525969-collectionview
  collectionView_canDragItemsAtIndexPaths_withEvent(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath, event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1527290-collectionview
  collectionView_pasteboardWriterForItemAtIndexPath(collectionView: cocoascript.NSCollectionView, indexPath: cocoascript.NSIndexPath):cocoascript.NSPasteboardWriting;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528182-collectionview
  collectionView_writeItemsAtIndexPaths_toPasteboard(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath, pasteboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528253-collectionview
  collectionView_namesOfPromisedFilesDroppedAtDestination_forDraggedItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, dropURL: cocoascript.NSURL, indexPaths: cocoascript.NSIndexPath):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528175-collectionview
  collectionView_draggingImageForItemsAtIndexPaths_withEvent_offset(collectionView: cocoascript.NSCollectionView, indexPaths: cocoascript.NSIndexPath, event: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1527718-collectionview
  collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexPaths(collectionView: cocoascript.NSCollectionView, session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528224-collectionview
  collectionView_draggingSession_endedAtPoint_dragOperation(collectionView: cocoascript.NSCollectionView, session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, operation: cocoascript.NSDragOperation):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1526881-collectionview
  collectionView_updateDraggingItemsForDrag(collectionView: cocoascript.NSCollectionView, draggingInfo: cocoascript.NSDraggingInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1525471-collectionview
  collectionView_validateDrop_proposedIndexPath_dropOperation(collectionView: cocoascript.NSCollectionView, draggingInfo: cocoascript.NSDraggingInfo, proposedDropIndexPath: cocoascript._Nonnull, proposedDropOperation: cocoascript.NSCollectionViewDropOperation):cocoascript.NSDragOperation;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1525045-collectionview
  collectionView_acceptDrop_indexPath_dropOperation(collectionView: cocoascript.NSCollectionView, draggingInfo: cocoascript.NSDraggingInfo, indexPath: cocoascript.NSIndexPath, dropOperation: cocoascript.NSCollectionViewDropOperation):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528212-collectionview
  collectionView_canDragItemsAtIndexes_withEvent(collectionView: cocoascript.NSCollectionView, indexes: cocoascript.NSIndexSet, event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528257-collectionview
  collectionView_pasteboardWriterForItemAtIndex(collectionView: cocoascript.NSCollectionView, index: cocoascript.NSUInteger):cocoascript.NSPasteboardWriting;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1524770-collectionview
  collectionView_writeItemsAtIndexes_toPasteboard(collectionView: cocoascript.NSCollectionView, indexes: cocoascript.NSIndexSet, pasteboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528189-collectionview
  collectionView_namesOfPromisedFilesDroppedAtDestination_forDraggedItemsAtIndexes(collectionView: cocoascript.NSCollectionView, dropURL: cocoascript.NSURL, indexes: cocoascript.NSIndexSet):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528138-collectionview
  collectionView_draggingImageForItemsAtIndexes_withEvent_offset(collectionView: cocoascript.NSCollectionView, indexes: cocoascript.NSIndexSet, event: cocoascript.NSEvent, dragImageOffset: cocoascript.NSPointPointer):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1524615-collectionview
  collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexes(collectionView: cocoascript.NSCollectionView, session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, indexes: cocoascript.NSIndexSet):void;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528283-collectionview
  collectionView_validateDrop_proposedIndex_dropOperation(collectionView: cocoascript.NSCollectionView, draggingInfo: cocoascript.NSDraggingInfo, proposedDropIndex: cocoascript.NSInteger, proposedDropOperation: cocoascript.NSCollectionViewDropOperation):cocoascript.NSDragOperation;
  // doc://com.apple.documentation/documentation/appkit/nscollectionviewdelegate/1528242-collectionview
  collectionView_acceptDrop_index_dropOperation(collectionView: cocoascript.NSCollectionView, draggingInfo: cocoascript.NSDraggingInfo, index: cocoascript.NSInteger, dropOperation: cocoascript.NSCollectionViewDropOperation):cocoascript.BOOL;
}
}

