declare namespace cocoascript {
  /**
   * The common interface for querying the state of both drag sessions and drop sessions.
   * doc://com.apple.documentation/documentation/uikit/uidragdropsession
   */
  interface UIDragDropSession extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidragdropsession/2903561-canloadobjectsofclass
    canLoadObjectsOfClass(aClass: cocoascript.NSItemProviderReading):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uidragdropsession/2891006-hasitemsconformingtotypeidentifi
    hasItemsConformingToTypeIdentifiers(typeIdentifiers: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uidragdropsession/2891030-items
    items(): cocoascript.UIDragItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uidragdropsession/2891062-allowsmoveoperation
    allowsMoveOperation(): cocoascript.BOOL;
    setAllowsMoveOperation(): void;
    // doc://com.apple.documentation/documentation/uikit/uidragdropsession/2890983-restrictedtodraggingapplication
    restrictedToDraggingApplication(): cocoascript.BOOL;
    setRestrictedToDraggingApplication(): void;
    // doc://com.apple.documentation/documentation/uikit/uidragdropsession/2891049-locationinview
    locationInView(view: cocoascript.UIView):cocoascript.CGPoint;
  }
}
