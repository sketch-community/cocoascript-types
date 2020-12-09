declare namespace cocoascript {
/**
 * The on-device index.
 * doc://com.apple.documentation/documentation/corespotlight/cssearchableindex
 */
interface CSSearchableIndex extends NSObject {
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620347-initwithname
  initWithName(name: cocoascript.NSString):cocoascript.CSSearchableIndex;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620332-initwithname
  initWithName_protectionClass(name: cocoascript.NSString, protectionClass: cocoascript.NSFileProtectionType):cocoascript.CSSearchableIndex;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620354-indexdelegate
  indexDelegate(): cocoascript.CSSearchableIndexDelegate;
  setIndexDelegate(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620342-deleteallsearchableitemswithcomp
  deleteAllSearchableItemsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620351-deletesearchableitemswithdomaini
  deleteSearchableItemsWithDomainIdentifiers_completionHandler(domainIdentifiers: cocoascript.NSString, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620337-deletesearchableitemswithidentif
  deleteSearchableItemsWithIdentifiers_completionHandler(identifiers: cocoascript.NSString, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620333-indexsearchableitems
  indexSearchableItems_completionHandler(items: cocoascript.CSSearchableItem, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620331-beginindexbatch
  beginIndexBatch():void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620344-endindexbatchwithclientstate
  endIndexBatchWithClientState_completionHandler(clientState: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620346-fetchlastclientstatewithcompleti
  fetchLastClientStateWithCompletionHandler(completionHandler: cocoascript.NSError):void;
  // 
  alloc():cocoascript.CSSearchableIndex;
  // 
  init():cocoascript.CSSearchableIndex;
}
}
declare const CSSearchableIndex: cocoascript.CSSearchableIndex;

