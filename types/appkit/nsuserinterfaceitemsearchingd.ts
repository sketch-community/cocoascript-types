declare namespace cocoascript {
  /**
   * A set of methods an app can implement to provide Spotlight for Help for its own custom help data.
   * doc://com.apple.documentation/documentation/appkit/nsuserinterfaceitemsearching
   */
  interface NSUserInterfaceItemSearching extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfaceitemsearching/1420814-localizedtitlesforitem
    localizedTitlesForItem(item: cocoascript.NSUserInterfaceItemSearching):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfaceitemsearching/1420806-showallhelptopicsforsearchstring
    showAllHelpTopicsForSearchString(searchString: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfaceitemsearching/1420816-searchforitemswithsearchstring
    searchForItemsWithSearchString_resultLimit_matchedItemHandler(searchString: cocoascript.NSString, resultLimit: cocoascript.NSInteger, handleMatchedItems: cocoascript.NSArray):void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfaceitemsearching/1420812-performactionforitem
    performActionForItem(item: cocoascript.NSUserInterfaceItemSearching):void;
  }
}
