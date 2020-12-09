declare namespace cocoascript {
/**
 * The criteria to apply when searching previously indexed app content. 
 * doc://com.apple.documentation/documentation/corespotlight/cssearchquery
 */
interface CSSearchQuery extends NSObject {
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquerystring
  CSSearchQueryString(): cocoascript.const;
  setCSSearchQueryString(): void;
  // doc://com.apple.documentation/documentation/corespotlight/csquerycontinuationactiontype
  CSQueryContinuationActionType(): cocoascript.const;
  setCSQueryContinuationActionType(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649308-initwithquerystring
  initWithQueryString_attributes(queryString: cocoascript.NSString, attributes: cocoascript.NSString):cocoascript.CSSearchQuery;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649311-protectionclasses
  protectionClasses(): cocoascript.NSFileProtectionType;
  setProtectionClasses(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649296-start
  start():void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649309-cancel
  cancel():void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649294-cancelled
  cancelled(): cocoascript.BOOL;
  setCancelled(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649312-completionhandler
  completionHandler(): cocoascript.NSError;
  setCompletionHandler(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649300-founditemcount
  foundItemCount(): cocoascript.NSUInteger;
  setFoundItemCount(): void;
  // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649306-founditemshandler
  foundItemsHandler(): cocoascript.CSSearchableItem;
  setFoundItemsHandler(): void;
  // 
  alloc():cocoascript.CSSearchQuery;
  // 
  init():cocoascript.CSSearchQuery;
}
}
declare const CSSearchQuery: cocoascript.CSSearchQuery;

