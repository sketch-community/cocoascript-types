declare namespace cocoascript {
/**
 * The options to use when capturing map-based imagery. 
 * doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions
 */
interface MKMapSnapshotOptions extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452323-region
  region(): cocoascript.MKCoordinateRegion;
  setRegion(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452727-maprect
  mapRect(): cocoascript.MKMapRect;
  setMapRect(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452082-camera
  camera(): cocoascript.MKMapCamera;
  setCamera(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452341-maptype
  mapType(): cocoascript.MKMapType;
  setMapType(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452191-showsbuildings
  showsBuildings(): cocoascript.BOOL;
  setShowsBuildings(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452316-showspointsofinterest
  showsPointsOfInterest(): cocoascript.BOOL;
  setShowsPointsOfInterest(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/3172734-pointofinterestfilter
  pointOfInterestFilter(): cocoascript.MKPointOfInterestFilter;
  setPointOfInterestFilter(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/3152864-traitcollection
  traitCollection(): cocoascript.UITraitCollection;
  setTraitCollection(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1452485-size
  size(): cocoascript.CGSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/2981023-appearance
  appearance(): cocoascript.NSAppearance;
  setAppearance(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkmapsnapshotoptions/1615960-scale
  scale(): cocoascript.CGFloat;
  setScale(): void;
  // 
  alloc():cocoascript.MKMapSnapshotOptions;
  // 
  init():cocoascript.MKMapSnapshotOptions;
}
}
declare const MKMapSnapshotOptions: cocoascript.MKMapSnapshotOptions;

