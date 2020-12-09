declare namespace cocoascript {
/**
 * A utility object for generating a list of completion strings based on a partial search string that you provide.  
 * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter
 */
interface MKLocalSearchCompleter extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452106-delegate
  delegate(): cocoascript.MKLocalSearchCompleterDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452555-queryfragment
  queryFragment(): cocoascript.NSString;
  setQueryFragment(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1451923-region
  region(): cocoascript.MKCoordinateRegion;
  setRegion(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/3143405-resulttypes
  resultTypes(): cocoascript.MKLocalSearchCompleterResultType;
  setResultTypes(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/3143404-pointofinterestfilter
  pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
  setPointOfInterestFilter(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452150-filtertype
  filterType(): cocoascript.MKSearchCompletionFilterType;
  setFilterType(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452337-cancel
  cancel():void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452272-searching
  searching(): cocoascript.BOOL;
  setSearching(): void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleter/1452295-results
  results(): cocoascript.MKLocalSearchCompletion;
  setResults(): void;
  // 
  alloc():cocoascript.MKLocalSearchCompleter;
  // 
  init():cocoascript.MKLocalSearchCompleter;
}
}
declare const MKLocalSearchCompleter: cocoascript.MKLocalSearchCompleter;

