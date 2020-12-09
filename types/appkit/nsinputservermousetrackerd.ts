declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nsinputservermousetracker
 */
interface NSInputServerMouseTracker {
  // doc://com.apple.documentation/documentation/appkit/nsinputservermousetracker/1538528-mousedownoncharacterindex
  mouseDownOnCharacterIndex_atCoordinate_withModifier_client(index: cocoascript.NSUInteger, point: cocoascript.NSPoint, flags: cocoascript.NSUInteger, sender: cocoascript.NSInputServerMouseTracker):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsinputservermousetracker/1538554-mousedraggedoncharacterindex
  mouseDraggedOnCharacterIndex_atCoordinate_withModifier_client(index: cocoascript.NSUInteger, point: cocoascript.NSPoint, flags: cocoascript.NSUInteger, sender: cocoascript.NSInputServerMouseTracker):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsinputservermousetracker/1538539-mouseuponcharacterindex
  mouseUpOnCharacterIndex_atCoordinate_withModifier_client(index: cocoascript.NSUInteger, point: cocoascript.NSPoint, flags: cocoascript.NSUInteger, sender: cocoascript.NSInputServerMouseTracker):void;
}
}

