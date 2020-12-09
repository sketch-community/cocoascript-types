declare namespace cocoascript {
/**
 * A set of methods that let you update search results based on information the user enters into the search bar.
 * doc://com.apple.documentation/documentation/uikit/uisearchresultsupdating
 */
interface UISearchResultsUpdating extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisearchresultsupdating/1618658-updatesearchresultsforsearchcont
  updateSearchResultsForSearchController(searchController: cocoascript.UISearchController):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchresultsupdating/3584822-updatesearchresultsforsearchcont
  updateSearchResultsForSearchController_selectingSearchSuggestion(searchController: cocoascript.UISearchController, searchSuggestion: cocoascript.UISearchSuggestion):void;
}
}

