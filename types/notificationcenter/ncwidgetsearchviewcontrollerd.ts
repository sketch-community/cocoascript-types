declare namespace cocoascript {
  /**
   * An object that provides a default search view within a macOS Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller
   */
  interface NCWidgetSearchViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449562-delegate
    delegate(): cocoascript.NCWidgetSearchViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449554-searchdescription
    searchDescription(): cocoascript.NSString;
    setSearchDescription(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449552-searchresultsplaceholderstring
    searchResultsPlaceholderString(): cocoascript.NSString;
    setSearchResultsPlaceholderString(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449556-searchresultkeypath
    searchResultKeyPath(): cocoascript.NSString;
    setSearchResultKeyPath(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449551-searchresults
    searchResults(): cocoascript.id;
    setSearchResults(): void;
    //
    alloc():cocoascript.NCWidgetSearchViewController;
    //
    init():cocoascript.NCWidgetSearchViewController;
  }
}

declare const NCWidgetSearchViewController: cocoascript.NCWidgetSearchViewController;
