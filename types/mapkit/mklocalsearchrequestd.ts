declare namespace cocoascript {
/**
 * The parameters to use when searching for points of interest on the map. 
 * doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest
 */
interface MKLocalSearchRequest extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235755-init
  init():cocoascript.MKLocalSearchRequest;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1452301-initwithcompletion
  initWithCompletion(completion: cocoascript.MKLocalSearchCompletion):cocoascript.MKLocalSearchRequest;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235756-initwithnaturallanguagequery
  initWithNaturalLanguageQuery(naturalLanguageQuery: cocoascript.NSString):cocoascript.MKLocalSearchRequest;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3235757-initwithnaturallanguagequery
  initWithNaturalLanguageQuery_region(naturalLanguageQuery: cocoascript.NSString, region: cocoascript.MKCoordinateRegion):cocoascript.MKLocalSearchRequest;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1452353-naturallanguagequery
  naturalLanguageQuery(): cocoascript.NSString;
  setNaturalLanguageQuery(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/1451919-region
  region(): cocoascript.MKCoordinateRegion;
  setRegion(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3143410-pointofinterestfilter
  pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
  setPointOfInterestFilter(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchrequest/3143411-resulttypes
  resultTypes(): cocoascript.MKLocalSearchResultType;
  setResultTypes(): void;
  // 
  alloc():cocoascript.MKLocalSearchRequest;
  // 
  init():cocoascript.MKLocalSearchRequest;
}
}
declare const MKLocalSearchRequest: cocoascript.MKLocalSearchRequest;

