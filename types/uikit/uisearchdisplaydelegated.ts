declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate
   */
  interface UISearchDisplayDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620399-searchdisplaycontrollerwillbegin
    searchDisplayControllerWillBeginSearch(controller: cocoascript.UISearchDisplayController):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620410-searchdisplaycontrollerdidbegins
    searchDisplayControllerDidBeginSearch(controller: cocoascript.UISearchDisplayController):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620389-searchdisplaycontrollerwillendse
    searchDisplayControllerWillEndSearch(controller: cocoascript.UISearchDisplayController):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620402-searchdisplaycontrollerdidendsea
    searchDisplayControllerDidEndSearch(controller: cocoascript.UISearchDisplayController):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620398-searchdisplaycontroller
    searchDisplayController_didLoadSearchResultsTableView(controller: cocoascript.UISearchDisplayController, tableView: cocoascript.UITableView):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620401-searchdisplaycontroller
    searchDisplayController_willUnloadSearchResultsTableView(controller: cocoascript.UISearchDisplayController, tableView: cocoascript.UITableView):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620391-searchdisplaycontroller
    searchDisplayController_willShowSearchResultsTableView(controller: cocoascript.UISearchDisplayController, tableView: cocoascript.UITableView):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620396-searchdisplaycontroller
    searchDisplayController_didShowSearchResultsTableView(controller: cocoascript.UISearchDisplayController, tableView: cocoascript.UITableView):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620407-searchdisplaycontroller
    searchDisplayController_willHideSearchResultsTableView(controller: cocoascript.UISearchDisplayController, tableView: cocoascript.UITableView):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620395-searchdisplaycontroller
    searchDisplayController_didHideSearchResultsTableView(controller: cocoascript.UISearchDisplayController, tableView: cocoascript.UITableView):void;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620403-searchdisplaycontroller
    searchDisplayController_shouldReloadTableForSearchString(controller: cocoascript.UISearchDisplayController, searchString: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uisearchdisplaydelegate/1620409-searchdisplaycontroller
    searchDisplayController_shouldReloadTableForSearchScope(controller: cocoascript.UISearchDisplayController, searchOption: cocoascript.NSInteger):cocoascript.BOOL;
  }
}
