declare namespace cocoascript {
/**
 * A set of methods that are implemented by the source object in a dragging session.
 * doc://com.apple.documentation/documentation/appkit/nsdraggingsource
 */
interface NSDraggingSource extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsource/1416000-draggingsession
  draggingSession_sourceOperationMaskForDraggingContext(session: cocoascript.NSDraggingSession, context: cocoascript.NSDraggingContext):cocoascript.NSDragOperation;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsource/1416017-draggingsession
  draggingSession_endedAtPoint_operation(session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint, operation: cocoascript.NSDragOperation):void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsource/1416079-draggingsession
  draggingSession_movedToPoint(session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsource/1415960-draggingsession
  draggingSession_willBeginAtPoint(session: cocoascript.NSDraggingSession, screenPoint: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/appkit/nsdraggingsource/1415974-ignoremodifierkeysfordraggingses
  ignoreModifierKeysForDraggingSession(session: cocoascript.NSDraggingSession):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1416082-namesofpromisedfilesdroppedatdes
  namesOfPromisedFilesDroppedAtDestination(dropDestination: cocoascript.NSURL):cocoascript.NSString;
}
}

