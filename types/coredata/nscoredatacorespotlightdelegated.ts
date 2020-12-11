declare namespace cocoascript {
  /**
   * A delegate that supports Core Spotlight integration.
   * doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate
   */
  interface NSCoreDataCoreSpotlightDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897196-initforstorewithdescription
    initForStoreWithDescription_model(description: cocoascript.NSPersistentStoreDescription, model: cocoascript.NSManagedObjectModel):cocoascript.NSCoreDataCoreSpotlightDelegate;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897202-domainidentifier
    domainIdentifier():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897199-indexname
    indexName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897197-attributesetforobject
    attributeSetForObject(object: cocoascript.NSManagedObject):cocoascript.CSSearchableItemAttributeSet;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897201-searchableindex
    searchableIndex_reindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/coredata/nscoredatacorespotlightdelegate/2897198-searchableindex
    searchableIndex_reindexSearchableItemsWithIdentifiers_acknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, identifiers: cocoascript.NSString, acknowledgementHandler: void):void;
    //
    alloc():cocoascript.NSCoreDataCoreSpotlightDelegate;
    //
    init():cocoascript.NSCoreDataCoreSpotlightDelegate;
  }
}

declare const NSCoreDataCoreSpotlightDelegate: cocoascript.NSCoreDataCoreSpotlightDelegate;
