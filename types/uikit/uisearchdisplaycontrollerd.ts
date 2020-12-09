declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller
 */
interface UISearchDisplayController extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620411-initwithsearchbar
  initWithSearchBar_contentsController(searchBar: cocoascript.UISearchBar, viewController: cocoascript.UIViewController):cocoascript.UISearchDisplayController;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620406-active
  active(): cocoascript.BOOL;
  setActive(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620397-setactive
  setActive_animated(visible: cocoascript.BOOL, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620388-delegate
  delegate(): cocoascript.UISearchDisplayDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620387-searchbar
  searchBar(): cocoascript.UISearchBar;
  setSearchBar(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620393-searchcontentscontroller
  searchContentsController(): cocoascript.UIViewController;
  setSearchContentsController(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620400-searchresultstableview
  searchResultsTableView(): cocoascript.UITableView;
  setSearchResultsTableView(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620390-searchresultsdatasource
  searchResultsDataSource(): cocoascript.UITableViewDataSource;
  setSearchResultsDataSource(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620404-searchresultsdelegate
  searchResultsDelegate(): cocoascript.UITableViewDelegate;
  setSearchResultsDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620386-searchresultstitle
  searchResultsTitle(): cocoascript.NSString;
  setSearchResultsTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620394-displayssearchbarinnavigationbar
  displaysSearchBarInNavigationBar(): cocoascript.BOOL;
  setDisplaysSearchBarInNavigationBar(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchdisplaycontroller/1620408-navigationitem
  navigationItem(): cocoascript.UINavigationItem;
  setNavigationItem(): void;
  // 
  alloc():cocoascript.UISearchDisplayController;
  // 
  init():cocoascript.UISearchDisplayController;
}
}
declare const UISearchDisplayController: cocoascript.UISearchDisplayController;

