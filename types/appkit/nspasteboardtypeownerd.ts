declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nspasteboardtypeowner
 */
interface NSPasteboardTypeOwner extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nspasteboardtypeowner/3005193-pasteboard
  pasteboard_provideDataForType(sender: cocoascript.NSPasteboard, type: cocoascript.NSPasteboardType):void;
  // doc://com.apple.documentation/documentation/appkit/nspasteboardtypeowner/3005194-pasteboardchangedowner
  pasteboardChangedOwner(sender: cocoascript.NSPasteboard):void;
}
}

