declare namespace cocoascript {
/**
 * A protocol that a search field delegate can use to determine when a search started or ended.
 * doc://com.apple.documentation/documentation/appkit/nssearchfielddelegate
 */
interface NSSearchFieldDelegate extends NSTextFieldDelegate {
  // doc://com.apple.documentation/documentation/appkit/nssearchfielddelegate/1535275-searchfielddidstartsearching
  searchFieldDidStartSearching(sender: cocoascript.NSSearchField):void;
  // doc://com.apple.documentation/documentation/appkit/nssearchfielddelegate/1529867-searchfielddidendsearching
  searchFieldDidEndSearching(sender: cocoascript.NSSearchField):void;
}
}

