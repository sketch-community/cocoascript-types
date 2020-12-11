declare namespace cocoascript {
  /**
   * The interface for querying a drop session about its state and associated drag items.
   * doc://com.apple.documentation/documentation/uikit/uidropsession
   */
  interface UIDropSession extends NSProgressReporting {
    // doc://com.apple.documentation/documentation/uikit/uidropsession/2890985-localdragsession
    localDragSession(): cocoascript.UIDragSession;
    setLocalDragSession(): void;
    // doc://com.apple.documentation/documentation/uikit/uidropsession/2891058-loadobjectsofclass
    loadObjectsOfClass_completion(aClass: cocoascript.NSItemProviderReading, completion: cocoascript.NSItemProviderReading):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/uikit/uidropsession/2890980-progressindicatorstyle
    progressIndicatorStyle(): cocoascript.UIDropSessionProgressIndicatorStyle;
    setProgressIndicatorStyle(): void;
  }
}
