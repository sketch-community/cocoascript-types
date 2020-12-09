declare namespace cocoascript {
/**
 * The encapsulation of a drag-and-drop action that supports modification of the drag while in progress.
 * doc://com.apple.documentation/documentation/appkit/nsdraggingsession
 */
interface NSDraggingSession extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsession/1534103-draggingpasteboard
  draggingPasteboard(): cocoascript.NSPasteboard;
  setDraggingPasteboard(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsession/1531277-animatestostartingpositionsoncan
  animatesToStartingPositionsOnCancelOrFail(): cocoascript.BOOL;
  setAnimatesToStartingPositionsOnCancelOrFail(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsession/1524544-draggingformation
  draggingFormation(): cocoascript.NSDraggingFormation;
  setDraggingFormation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsession/1533229-draggingsequencenumber
  draggingSequenceNumber(): cocoascript.NSInteger;
  setDraggingSequenceNumber(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsession/1532445-enumeratedraggingitemswithoption
  enumerateDraggingItemsWithOptions_forView_classes_searchOptions_usingBlock(enumOpts: cocoascript.NSDraggingItemEnumerationOptions, view: cocoascript.NSView, classArray: cocoascript.Class, searchOptions: cocoascript.NSDraggingSession, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsession/1529395-dragginglocation
  draggingLocation(): cocoascript.NSPoint;
  setDraggingLocation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsession/1533729-draggingleaderindex
  draggingLeaderIndex(): cocoascript.NSInteger;
  setDraggingLeaderIndex(): void;
  // 
  alloc():cocoascript.NSDraggingSession;
  // 
  init():cocoascript.NSDraggingSession;
}
}
declare const NSDraggingSession: cocoascript.NSDraggingSession;

