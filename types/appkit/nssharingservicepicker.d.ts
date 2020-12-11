declare namespace cocoascript {
  /**
   * A list of sharing services from which the user can choose.
   * doc://com.apple.documentation/documentation/appkit/nssharingservicepicker
   */
  interface NSSharingServicePicker extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nssharingservicepicker/1402691-initwithitems
    initWithItems(items: cocoascript.NSArray):cocoascript.NSSharingServicePicker;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicepicker/1402706-showrelativetorect
    showRelativeToRect_ofView_preferredEdge(rect: cocoascript.NSRect, view: cocoascript.NSView, preferredEdge: cocoascript.NSRectEdge):void;
    // doc://com.apple.documentation/documentation/appkit/nssharingservicepicker/1402687-delegate
    delegate(): cocoascript.NSSharingServicePickerDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.NSSharingServicePicker;
    //
    init():cocoascript.NSSharingServicePicker;
  }
}

declare const NSSharingServicePicker: cocoascript.NSSharingServicePicker;
