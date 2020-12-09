declare namespace cocoascript {
/**
 * A set of methods that the destination object (or recipient) of a dragged image must implement. 
 * doc://com.apple.documentation/documentation/appkit/nsdraggingdestination
 */
interface NSDraggingDestination extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1416019-draggingentered
  draggingEntered(sender: cocoascript.NSDraggingInfo):cocoascript.NSDragOperation;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1416049-wantsperiodicdraggingupdates
  wantsPeriodicDraggingUpdates():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1415998-draggingupdated
  draggingUpdated(sender: cocoascript.NSDraggingInfo):cocoascript.NSDragOperation;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1416096-draggingended
  draggingEnded(sender: cocoascript.NSDraggingInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1416056-draggingexited
  draggingExited(sender: cocoascript.NSDraggingInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1416066-preparefordragoperation
  prepareForDragOperation(sender: cocoascript.NSDraggingInfo):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1415970-performdragoperation
  performDragOperation(sender: cocoascript.NSDraggingInfo):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1416010-concludedragoperation
  concludeDragOperation(sender: cocoascript.NSDraggingInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingdestination/1416050-updatedraggingitemsfordrag
  updateDraggingItemsForDrag(sender: cocoascript.NSDraggingInfo):void;
}
}

