declare namespace cocoascript {
/**
 * A filter that includes or excludes point of interest categories from a map view, local search, or local search completer.
 * doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter
 */
interface MKPointOfInterestFilter extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143464-filterexcludingallcategories
  filterExcludingAllCategories(): cocoascript.MKPointOfInterestFilter;
  setFilterExcludingAllCategories(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143465-filterincludingallcategories
  filterIncludingAllCategories(): cocoascript.MKPointOfInterestFilter;
  setFilterIncludingAllCategories(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143467-initexcludingcategories
  initExcludingCategories(categories: cocoascript.MKPointOfInterestCategory):cocoascript.MKPointOfInterestFilter;
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143468-initincludingcategories
  initIncludingCategories(categories: cocoascript.MKPointOfInterestCategory):cocoascript.MKPointOfInterestFilter;
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143463-excludescategory
  excludesCategory(category: cocoascript.MKPointOfInterestCategory):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/mapkit/mkpointofinterestfilter/3143466-includescategory
  includesCategory(category: cocoascript.MKPointOfInterestCategory):cocoascript.BOOL;
  // 
  alloc():cocoascript.MKPointOfInterestFilter;
  // 
  init():cocoascript.MKPointOfInterestFilter;
}
}
declare const MKPointOfInterestFilter: cocoascript.MKPointOfInterestFilter;

