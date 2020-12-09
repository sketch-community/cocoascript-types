declare namespace cocoascript {
/**
 * A set of methods that supply information about a dragging session.
 * doc://com.apple.documentation/documentation/appkit/nsdragginginfo
 */
interface NSDraggingInfo extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416092-draggingpasteboard
  draggingPasteboard(): cocoascript.NSPasteboard;
  setDraggingPasteboard(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416039-draggingsequencenumber
  draggingSequenceNumber(): cocoascript.NSInteger;
  setDraggingSequenceNumber(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416068-draggingsource
  draggingSource(): cocoascript.id;
  setDraggingSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1415966-draggingsourceoperationmask
  draggingSourceOperationMask(): cocoascript.NSDragOperation;
  setDraggingSourceOperationMask(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416070-dragginglocation
  draggingLocation(): cocoascript.NSPoint;
  setDraggingLocation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416088-draggingdestinationwindow
  draggingDestinationWindow(): cocoascript.NSWindow;
  setDraggingDestinationWindow(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1415980-namesofpromisedfilesdroppedatdes
  namesOfPromisedFilesDroppedAtDestination(dropDestination: cocoascript.NSURL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416033-numberofvaliditemsfordrop
  numberOfValidItemsForDrop(): cocoascript.NSInteger;
  setNumberOfValidItemsForDrop(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416102-draggedimage
  draggedImage(): cocoascript.NSImage;
  setDraggedImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1415990-draggedimagelocation
  draggedImageLocation(): cocoascript.NSPoint;
  setDraggedImageLocation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416045-slidedraggedimageto
  slideDraggedImageTo(screenPoint: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416098-animatestodestination
  animatesToDestination(): cocoascript.BOOL;
  setAnimatesToDestination(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416041-draggingformation
  draggingFormation(): cocoascript.NSDraggingFormation;
  setDraggingFormation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416074-enumeratedraggingitemswithoption
  enumerateDraggingItemsWithOptions_forView_classes_searchOptions_usingBlock(enumOpts: cocoascript.NSDraggingItemEnumerationOptions, view: cocoascript.NSView, classArray: cocoascript.Class, searchOptions: cocoascript.NSDraggingInfo, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416077-springloadinghighlight
  springLoadingHighlight(): cocoascript.NSSpringLoadingHighlight;
  setSpringLoadingHighlight(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdragginginfo/1416012-resetspringloading
  resetSpringLoading():void;
}
}

