declare namespace cocoascript {
  /**
   * A set of methods that you use to customize the position and animation of a share sheet, and to be notified whether the item is successfully shared.
   * doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate
   */
  interface NSSharingServiceDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate/1402642-sharingservice
    sharingService_willShareItems(sharingService: cocoascript.NSSharingService, items: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate/1402638-sharingservice
    sharingService_didShareItems(sharingService: cocoascript.NSSharingService, items: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate/1402710-sharingservice
    sharingService_didFailToShareItems_error(sharingService: cocoascript.NSSharingService, items: cocoascript.NSArray, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate/1402695-sharingservice
    sharingService_sourceFrameOnScreenForShareItem(sharingService: cocoascript.NSSharingService, item: cocoascript.NSSharingServiceDelegate):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate/1402622-sharingservice
    sharingService_transitionImageForShareItem_contentRect(sharingService: cocoascript.NSSharingService, item: cocoascript.NSSharingServiceDelegate, contentRect: cocoascript.NSRect):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate/1402679-sharingservice
    sharingService_sourceWindowForShareItems_sharingContentScope(sharingService: cocoascript.NSSharingService, items: cocoascript.NSArray, sharingContentScope: cocoascript.NSSharingContentScope):cocoascript.NSWindow;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicedelegate/1644711-anchoringviewforsharingservice
    anchoringViewForSharingService_showRelativeToRect_preferredEdge(sharingService: cocoascript.NSSharingService, positioningRect: cocoascript.NSRect, preferredEdge: cocoascript.NSRectEdge):cocoascript.NSView;
  }
}
