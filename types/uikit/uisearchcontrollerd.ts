declare namespace cocoascript {
/**
 * A view controller that manages the display of search results based on interactions with a search bar.  
 * doc://com.apple.documentation/documentation/uikit/uisearchcontroller
 */
interface UISearchController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618647-initwithsearchresultscontroller
  initWithSearchResultsController(searchResultsController: cocoascript.UIViewController):cocoascript.UISearchController;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3043562-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UISearchController;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3043563-initwithnibname
  initWithNibName_bundle(nibNameOrNil: cocoascript.NSString, nibBundleOrNil: cocoascript.NSBundle):cocoascript.UISearchController;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618654-delegate
  delegate(): cocoascript.UISearchControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618657-searchbar
  searchBar(): cocoascript.UISearchBar;
  setSearchBar(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618661-searchresultsupdater
  searchResultsUpdater(): cocoascript.UISearchResultsUpdating;
  setSearchResultsUpdater(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618649-searchresultscontroller
  searchResultsController(): cocoascript.UIViewController;
  setSearchResultsController(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618659-active
  active(): cocoascript.BOOL;
  setActive(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3584820-searchcontrollerobservedscrollvi
  searchControllerObservedScrollView(): cocoascript.UIScrollView;
  setSearchControllerObservedScrollView(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618656-obscuresbackgroundduringpresenta
  obscuresBackgroundDuringPresentation(): cocoascript.BOOL;
  setObscuresBackgroundDuringPresentation(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618650-hidesnavigationbarduringpresenta
  hidesNavigationBarDuringPresentation(): cocoascript.BOOL;
  setHidesNavigationBarDuringPresentation(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3152926-automaticallyshowscancelbutton
  automaticallyShowsCancelButton(): cocoascript.BOOL;
  setAutomaticallyShowsCancelButton(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3152927-automaticallyshowsscopebar
  automaticallyShowsScopeBar(): cocoascript.BOOL;
  setAutomaticallyShowsScopeBar(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3153160-automaticallyshowssearchresultsc
  automaticallyShowsSearchResultsController(): cocoascript.BOOL;
  setAutomaticallyShowsSearchResultsController(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3153161-showssearchresultscontroller
  showsSearchResultsController(): cocoascript.BOOL;
  setShowsSearchResultsController(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/1618660-dimsbackgroundduringpresentation
  dimsBackgroundDuringPresentation(): cocoascript.BOOL;
  setDimsBackgroundDuringPresentation(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontroller/3584821-searchsuggestions
  searchSuggestions(): cocoascript.UISearchSuggestion;
  setSearchSuggestions(): void;
  // 
  alloc():cocoascript.UISearchController;
  // 
  init():cocoascript.UISearchController;
}
}
declare const UISearchController: cocoascript.UISearchController;

