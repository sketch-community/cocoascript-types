declare namespace cocoascript {
/**
 * A query that you perform against Spotlight metadata.
 * doc://com.apple.documentation/documentation/foundation/nsmetadataquery
 */
interface NSMetadataQuery extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1412155-searchscopes
  searchScopes(): cocoascript.NSArray;
  setSearchScopes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411478-predicate
  predicate(): cocoascript.NSPredicate;
  setPredicate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411847-sortdescriptors
  sortDescriptors(): cocoascript.NSSortDescriptor;
  setSortDescriptors(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1407767-valuelistattributes
  valueListAttributes(): cocoascript.NSString;
  setValueListAttributes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1409191-groupingattributes
  groupingAttributes(): cocoascript.NSString;
  setGroupingAttributes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411884-notificationbatchinginterval
  notificationBatchingInterval(): cocoascript.NSTimeInterval;
  setNotificationBatchingInterval(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1413181-delegate
  delegate(): cocoascript.NSMetadataQueryDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411307-searchitems
  searchItems(): cocoascript.NSArray;
  setSearchItems(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416780-started
  started(): cocoascript.BOOL;
  setStarted(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1407304-startquery
  startQuery():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1407539-gathering
  gathering(): cocoascript.BOOL;
  setGathering(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1411941-stopped
  stopped(): cocoascript.BOOL;
  setStopped(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1408021-stopquery
  stopQuery():void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1408872-results
  results(): cocoascript.NSArray;
  setResults(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1418315-resultcount
  resultCount(): cocoascript.NSUInteger;
  setResultCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1410162-resultatindex
  resultAtIndex(idx: cocoascript.NSUInteger):cocoascript.NSMetadataQuery;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1410014-indexofresult
  indexOfResult(result: cocoascript.NSMetadataQuery):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416579-groupedresults
  groupedResults(): cocoascript.NSMetadataQueryResultGroup;
  setGroupedResults(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1415856-enumerateresultsusingblock
  enumerateResultsUsingBlock(block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1415123-enumerateresultswithoptions
  enumerateResultsWithOptions_usingBlock(opts: cocoascript.NSEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1418401-valuelists
  valueLists(): cocoascript.NSMetadataQueryAttributeValueTuple;
  setValueLists(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1417133-valueofattribute
  valueOfAttribute_forResultAtIndex(attrName: cocoascript.NSString, idx: cocoascript.NSUInteger):cocoascript.NSMetadataQuery;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416943-enableupdates
  enableUpdates():void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1416337-disableupdates
  disableUpdates():void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataquery/1410953-operationqueue
  operationQueue(): cocoascript.NSOperationQueue;
  setOperationQueue(): void;
  // 
  alloc():cocoascript.NSMetadataQuery;
  // 
  init():cocoascript.NSMetadataQuery;
}
}
declare const NSMetadataQuery: cocoascript.NSMetadataQuery;

