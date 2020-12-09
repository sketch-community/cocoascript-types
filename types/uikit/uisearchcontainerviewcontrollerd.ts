declare namespace cocoascript {
/**
 * A view controller that manages the presentation of search results in your interface.  
 * doc://com.apple.documentation/documentation/uikit/uisearchcontainerviewcontroller
 */
interface UISearchContainerViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uisearchcontainerviewcontroller/1615746-initwithsearchcontroller
  initWithSearchController(searchController: cocoascript.UISearchController):cocoascript.UISearchContainerViewController;
  // doc://com.apple.documentation/documentation/uikit/uisearchcontainerviewcontroller/1615748-searchcontroller
  searchController(): cocoascript.UISearchController;
  setSearchController(): void;
  // 
  alloc():cocoascript.UISearchContainerViewController;
  // 
  init():cocoascript.UISearchContainerViewController;
}
}
declare const UISearchContainerViewController: cocoascript.UISearchContainerViewController;

