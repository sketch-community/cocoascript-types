declare namespace cocoascript {
  /**
   * The interface for customizing the appearance and behavior of a Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding
   */
  interface NCWidgetProviding extends NSExtensionRequestHandling {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490248-widgetmargininsetsforproposedmar
    widgetMarginInsetsForProposedMarginInsets(defaultMarginInsets: cocoascript.UIEdgeInsets):cocoascript.UIEdgeInsets;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1649132-widgetactivedisplaymodedidchange
    widgetActiveDisplayModeDidChange_withMaximumSize(activeDisplayMode: cocoascript.NCWidgetDisplayMode, maxSize: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490262-widgetperformupdatewithcompletio
    widgetPerformUpdateWithCompletionHandler(completionHandler: cocoascript.NCUpdateResult):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490251-widgetallowsediting
    widgetAllowsEditing(): cocoascript.BOOL;
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
    widgetList_viewControllerForRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):cocoascript.NSViewController;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476049-widgetlist
    widgetList_didRemoveRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476035-widgetlist
    widgetList_shouldRemoveRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476037-widgetlistperformaddaction
    widgetListPerformAddAction(list: cocoascript.NCWidgetListViewController):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476063-widgetlist
    widgetList_didReorderRow_toRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger, newIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewdelegate/1476059-widgetlist
    widgetList_shouldReorderRow(list: cocoascript.NCWidgetListViewController, row: cocoascript.NSUInteger):cocoascript.BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The interface for enabling user searches in the search view controller of a macOS Today widget.
   * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate
   */
  interface NCWidgetSearchViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449558-widgetsearch
    widgetSearch_searchForTerm_maxResults(controller: cocoascript.NCWidgetSearchViewController, searchTerm: cocoascript.NSString, max: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449548-widgetsearch
    widgetSearch_resultSelected(controller: cocoascript.NCWidgetSearchViewController, object: cocoascript.NCWidgetSearchViewDelegate):void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetsearchviewdelegate/1449550-widgetsearchtermcleared
    widgetSearchTermCleared(controller: cocoascript.NCWidgetSearchViewController):void;
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
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetcontroller/1456693-sethascontent
    setHasContent_forWidgetWithBundleIdentifier(flag: cocoascript.BOOL, bundleID: cocoascript.NSString):void;
    //
    alloc():cocoascript.NCWidgetController;
    //
    init():cocoascript.NCWidgetController;
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
    delegate(): cocoascript.NCWidgetListViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476057-contents
    contents(): cocoascript.id;
    setContents(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476053-rowforviewcontroller
    rowForViewController(viewController: cocoascript.NSViewController):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476061-viewcontrolleratrow
    viewControllerAtRow_makeIfNecessary(row: cocoascript.NSUInteger, makeIfNecesary: cocoascript.BOOL):cocoascript.NSViewController;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476034-minimumvisiblerowcount
    minimumVisibleRowCount(): cocoascript.NSUInteger;
    setMinimumVisibleRowCount(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476043-hasdividerlines
    hasDividerLines(): cocoascript.BOOL;
    setHasDividerLines(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476039-editing
    editing(): cocoascript.BOOL;
    setEditing(): void;
    // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetlistviewcontroller/1476041-showsaddbuttonwhenediting
    showsAddButtonWhenEditing(): cocoascript.BOOL;
    setShowsAddButtonWhenEditing(): void;
    //
    alloc():cocoascript.NCWidgetListViewController;
    //
    init():cocoascript.NCWidgetListViewController;
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
