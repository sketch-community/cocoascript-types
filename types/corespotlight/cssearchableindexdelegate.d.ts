declare namespace cocoascript {
  /**
   * A protocol defining methods a delegate object or app extension uses to handle communication from the on-device index.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate
   */
  interface CSSearchableIndexDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/2867899-dataforsearchableindex
    dataForSearchableIndex_itemIdentifier_typeIdentifier_error(searchableIndex: cocoascript.CSSearchableIndex, itemIdentifier: cocoascript.NSString, typeIdentifier: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/2867898-fileurlforsearchableindex
    fileURLForSearchableIndex_itemIdentifier_typeIdentifier_inPlace_error(searchableIndex: cocoascript.CSSearchableIndex, itemIdentifier: cocoascript.NSString, typeIdentifier: cocoascript.NSString, inPlace: cocoascript.BOOL, outError: cocoascript._Nullable):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620348-searchableindex
    searchableIndex_reindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620338-searchableindex
    searchableIndex_reindexSearchableItemsWithIdentifiers_acknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, identifiers: cocoascript.NSString, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620353-searchableindexdidthrottle
    searchableIndexDidThrottle(searchableIndex: cocoascript.CSSearchableIndex):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620343-searchableindexdidfinishthrottle
    searchableIndexDidFinishThrottle(searchableIndex: cocoascript.CSSearchableIndex):void;
  }
}
