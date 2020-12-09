declare namespace cocoascript {
/**
 * A collection of optional methods that you implement to make a search bar control functional. 
 * doc://com.apple.documentation/documentation/uikit/uisearchbardelegate
 */
interface UISearchBarDelegate extends UIBarPositioningDelegate {
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624299-searchbar
  searchBar_textDidChange(searchBar: cocoascript.UISearchBar, searchText: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624328-searchbar
  searchBar_shouldChangeTextInRange_replacementText(searchBar: cocoascript.UISearchBar, range: cocoascript.NSRange, text: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624306-searchbarshouldbeginediting
  searchBarShouldBeginEditing(searchBar: cocoascript.UISearchBar):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624303-searchbartextdidbeginediting
  searchBarTextDidBeginEditing(searchBar: cocoascript.UISearchBar):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624329-searchbarshouldendediting
  searchBarShouldEndEditing(searchBar: cocoascript.UISearchBar):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624301-searchbartextdidendediting
  searchBarTextDidEndEditing(searchBar: cocoascript.UISearchBar):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624312-searchbarbookmarkbuttonclicked
  searchBarBookmarkButtonClicked(searchBar: cocoascript.UISearchBar):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624314-searchbarcancelbuttonclicked
  searchBarCancelButtonClicked(searchBar: cocoascript.UISearchBar):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624294-searchbarsearchbuttonclicked
  searchBarSearchButtonClicked(searchBar: cocoascript.UISearchBar):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624305-searchbarresultslistbuttonclicke
  searchBarResultsListButtonClicked(searchBar: cocoascript.UISearchBar):void;
  // doc://com.apple.documentation/documentation/uikit/uisearchbardelegate/1624280-searchbar
  searchBar_selectedScopeButtonIndexDidChange(searchBar: cocoascript.UISearchBar, selectedScope: cocoascript.NSInteger):void;
}
}

