declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup
 */
interface NSMetadataQueryResultGroup extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1411276-attribute
  attribute(): cocoascript.NSString;
  setAttribute(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1417674-value
  value(): cocoascript.id;
  setValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1410191-results
  results(): cocoascript.NSArray;
  setResults(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1414790-resultcount
  resultCount(): cocoascript.NSUInteger;
  setResultCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1410397-resultatindex
  resultAtIndex(idx: cocoascript.NSUInteger):cocoascript.NSMetadataQueryResultGroup;
  // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryresultgroup/1409929-subgroups
  subgroups(): cocoascript.NSMetadataQueryResultGroup;
  setSubgroups(): void;
  // 
  alloc():cocoascript.NSMetadataQueryResultGroup;
  // 
  init():cocoascript.NSMetadataQueryResultGroup;
}
}
declare const NSMetadataQueryResultGroup: cocoascript.NSMetadataQueryResultGroup;

