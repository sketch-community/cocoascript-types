declare namespace cocoascript {
  /**
   * The interface for customizing the appearance and behavior of a Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding
   */
  interface NCWidgetProviding extends NSExtensionRequestHandling {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490248-widgetmargininsetsforproposedmar
    widgetMarginInsetsForProposedMarginInsets(defaultMarginInsets: UIEdgeInsets):UIEdgeInsets;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1649132-widgetactivedisplaymodedidchange
    widgetActiveDisplayModeDidChange_withMaximumSize(activeDisplayMode: NCWidgetDisplayMode, maxSize: CGSize):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490262-widgetperformupdatewithcompletio
    widgetPerformUpdateWithCompletionHandler(completionHandler: NCUpdateResult):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490251-widgetallowsediting
    widgetAllowsEditing(): BOOL;
    setWidgetAllowsEditing(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490249-widgetdidbeginediting
    widgetDidBeginEditing():void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490258-widgetdidendediting
    widgetDidEndEditing():void;
  }
}
declare namespace cocoascript {
  /**
   * The interface for handling content display and editing in the list view of a macOS Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate
   */
  interface NCWidgetListViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476055-widgetlist
    widgetList_viewControllerForRow(list: NCWidgetListViewController, row: NSUInteger):NSViewController;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476049-widgetlist
    widgetList_didRemoveRow(list: NCWidgetListViewController, row: NSUInteger):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476035-widgetlist
    widgetList_shouldRemoveRow(list: NCWidgetListViewController, row: NSUInteger):BOOL;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476037-widgetlistperformaddaction
    widgetListPerformAddAction(list: NCWidgetListViewController):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476063-widgetlist
    widgetList_didReorderRow_toRow(list: NCWidgetListViewController, row: NSUInteger, newIndex: NSUInteger):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476059-widgetlist
    widgetList_shouldReorderRow(list: NCWidgetListViewController, row: NSUInteger):BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The interface for enabling user searches in the search view controller of a macOS Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate
   */
  interface NCWidgetSearchViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449558-widgetsearch
    widgetSearch_searchForTerm_maxResults(controller: NCWidgetSearchViewController, searchTerm: string | cocoascript.NSString, max: NSUInteger):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449548-widgetsearch
    widgetSearch_resultSelected(controller: NCWidgetSearchViewController, object: NCWidgetSearchViewDelegate):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449550-widgetsearchtermcleared
    widgetSearchTermCleared(controller: NCWidgetSearchViewController):void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetdisplaymode
  type NCWidgetDisplayMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/notificationcenter/ncupdateresult
  type NCUpdateResult = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An object used to specify whether a Today widget has content to display.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetcontroller
   */
  interface NCWidgetController extends NSObject {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetcontroller/1456687-widgetcontroller
    widgetController():NCWidgetController;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetcontroller/1456693-sethascontent
    setHasContent_forWidgetWithBundleIdentifier(flag: BOOL, bundleID: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetcontroller/1456691-defaultwidgetcontroller
    defaultWidgetController():NCWidgetController;
    //
    alloc():NCWidgetController;
    //
    init():NCWidgetController;
  }
}

declare const NCWidgetController: cocoascript.NCWidgetController;
declare namespace cocoascript {
  /**
   * An object that provides a list view for displaying content in a macOS Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller
   */
  interface NCWidgetListViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476044-delegate
    delegate(): NCWidgetListViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476057-contents
    contents(): id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476053-rowforviewcontroller
    rowForViewController(viewController: NSViewController):NSUInteger;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476061-viewcontrolleratrow
    viewControllerAtRow_makeIfNecessary(row: NSUInteger, makeIfNecesary: BOOL):NSViewController;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476034-minimumvisiblerowcount
    minimumVisibleRowCount(): NSUInteger;
    setMinimumVisibleRowCount(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476043-hasdividerlines
    hasDividerLines(): BOOL;
    setHasDividerLines(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476039-editing
    editing(): BOOL;
    setEditing(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476041-showsaddbuttonwhenediting
    showsAddButtonWhenEditing(): BOOL;
    setShowsAddButtonWhenEditing(): void;
    //
    alloc():NCWidgetListViewController;
    //
    init():NCWidgetListViewController;
  }
}

declare const NCWidgetListViewController: cocoascript.NCWidgetListViewController;
declare namespace cocoascript {
  /**
   * An object that provides a default search view within a macOS Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller
   */
  interface NCWidgetSearchViewController extends NSViewController {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449562-delegate
    delegate(): NCWidgetSearchViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449554-searchdescription
    searchDescription(): string | cocoascript.NSString;
    setSearchDescription(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449552-searchresultsplaceholderstring
    searchResultsPlaceholderString(): string | cocoascript.NSString;
    setSearchResultsPlaceholderString(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449556-searchresultkeypath
    searchResultKeyPath(): string | cocoascript.NSString;
    setSearchResultKeyPath(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewcontroller/1449551-searchresults
    searchResults(): id;
    setSearchResults(): void;
    //
    alloc():NCWidgetSearchViewController;
    //
    init():NCWidgetSearchViewController;
  }
}

declare const NCWidgetSearchViewController: cocoascript.NCWidgetSearchViewController;
