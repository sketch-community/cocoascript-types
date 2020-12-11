declare namespace cocoascript {
  /**
   * A view controller that you use to offer standard services from your app.
   * doc://com.apple.documentation/documentation/uikit/uiactivityviewcontroller
   */
  interface UIActivityViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/uikit/uiactivityviewcontroller/1622019-initwithactivityitems
    initWithActivityItems_applicationActivities(activityItems: cocoascript.NSArray, applicationActivities: cocoascript.UIActivity):cocoascript.UIActivityViewController;
    // doc://com.apple.documentation/documentation/uikit/uiactivityviewcontroller/3626475-initwithactivityitemsconfigurati
    initWithActivityItemsConfiguration(activityItemsConfiguration: cocoascript.UIActivityItemsConfigurationReading):cocoascript.UIActivityViewController;
    // doc://com.apple.documentation/documentation/uikit/uiactivityviewcontroller/1622022-completionwithitemshandler
    completionWithItemsHandler(): cocoascript.UIActivityViewControllerCompletionWithItemsHandler;
    setCompletionWithItemsHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityviewcontroller/1622010-completionhandler
    completionHandler(): cocoascript.UIActivityViewControllerCompletionHandler;
    setCompletionHandler(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityviewcontroller/1622009-excludedactivitytypes
    excludedActivityTypes(): cocoascript.UIActivityType;
    setExcludedActivityTypes(): void;
    //
    alloc():cocoascript.UIActivityViewController;
    //
    init():cocoascript.UIActivityViewController;
  }
}

declare const UIActivityViewController: cocoascript.UIActivityViewController;
