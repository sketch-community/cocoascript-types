declare namespace cocoascript {
  /**
   * The JavaScript API for embedding Apple maps on your website.
   * https://developer.apple.com/documentation/mapkitjs/mapkit
   */
  interface mapkit {
    //
    alloc():mapkit;
    //
    init():mapkit;
  }
}

declare const mapkit: cocoascript.mapkit;
// https://developer.apple.com/documentation/mapkitjs/mapkit/2974044-importgeojson
declare const importGeoJSON: cocoascript.GeoJSONDelegate;
declare namespace cocoascript {
  /**
   * Initialization options for MapKit JS.
   * https://developer.apple.com/documentation/mapkitjs/mapkitinitoptions
   */
  interface MapKitInitOptions {
    //
    alloc():MapKitInitOptions;
    //
    init():MapKitInitOptions;
  }
}

declare const MapKitInitOptions: cocoascript.MapKitInitOptions;
declare namespace cocoascript {
  /**
   * An embeddable interactive map that you add to a webpage.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/map
   */
  interface mapkit.Map {
    //
    alloc():mapkit.Map;
    //
    init():mapkit.Map;
  }
}

declare const mapkit.Map: cocoascript.mapkit.Map;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973935-setcenteranimated
declare const setCenterAnimated: cocoascript.boolean;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973936-setregionanimated
declare const setRegionAnimated: cocoascript.boolean;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2991323-setrotationanimated
declare const setRotationAnimated: cocoascript.boolean;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973937-setvisiblemaprectanimated
declare const setVisibleMapRectAnimated: cocoascript.boolean;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/3257751-setcameraboundaryanimated
declare const setCameraBoundaryAnimated: cocoascript.boolean;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/3257752-setcameradistanceanimated
declare const setCameraDistanceAnimated: cocoascript.boolean;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/3257753-setcamerazoomrangeanimated
declare const setCameraZoomRangeAnimated: cocoascript.boolean;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973913-annotationsinmaprect
declare const annotationsInMapRect: cocoascript.MapRect;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973905-addannotation
declare const addAnnotation: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973906-addannotations
declare const addAnnotations: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973925-removeannotation
declare const removeAnnotation: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973926-removeannotations
declare const removeAnnotations: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973923-overlaysatpoint
declare const overlaysAtPoint: cocoascript.DOMPoint;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973908-addoverlay
declare const addOverlay: cocoascript.Overlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973909-addoverlays
declare const addOverlays: cocoascript.Overlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973928-removeoverlay
declare const removeOverlay: cocoascript.Overlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973929-removeoverlays
declare const removeOverlays: cocoascript.Overlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973947-topoverlayatpoint
declare const topOverlayAtPoint: cocoascript.DOMPoint;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973910-addtileoverlay
declare const addTileOverlay: cocoascript.TileOverlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973911-addtileoverlays
declare const addTileOverlays: cocoascript.TileOverlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973930-removetileoverlay
declare const removeTileOverlay: cocoascript.TileOverlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973931-removetileoverlays
declare const removeTileOverlays: cocoascript.TileOverlay;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973915-convertcoordinatetopointonpage
declare const convertCoordinateToPointOnPage: cocoascript.Coordinate;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/2973916-convertpointonpagetocoordinate
declare const convertPointOnPageToCoordinate: cocoascript.DOMPoint;
declare namespace cocoascript {
  /**
   * A geocoder that converts human-readable addresses to geographic coordinates and vice versa.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/geocoder
   */
  interface mapkit.Geocoder {
    //
    alloc():mapkit.Geocoder;
    //
    init():mapkit.Geocoder;
  }
}

declare const mapkit.Geocoder: cocoascript.mapkit.Geocoder;
// https://developer.apple.com/documentation/mapkitjs/mapkit/geocoder/2973884-lookup
declare const lookup: cocoascript.GeocoderLookupOptions;
// https://developer.apple.com/documentation/mapkitjs/mapkit/geocoder/2973886-reverselookup
declare const reverseLookup: cocoascript.GeocoderReverseLookupOptions;
declare namespace cocoascript {
  /**
   * An object that retrieves map-based search results for a user-entered query.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/search
   */
  interface mapkit.Search {
    //
    alloc():mapkit.Search;
    //
    init():mapkit.Search;
  }
}

declare const mapkit.Search: cocoascript.mapkit.Search;
// https://developer.apple.com/documentation/mapkitjs/mapkit/search/2974019-search
declare const search: cocoascript.SearchOptions;
// https://developer.apple.com/documentation/mapkitjs/mapkit/search/2974016-autocomplete
declare const autocomplete: cocoascript.SearchAutoCompleteOptions;
declare namespace cocoascript {
  /**
   * A filter used to determine the points of interest to include or exclude on a map or local search.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestfilter
   */
  interface mapkit.PointOfInterestFilter {
    //
    alloc():mapkit.PointOfInterestFilter;
    //
    init():mapkit.PointOfInterestFilter;
  }
}

declare const mapkit.PointOfInterestFilter: cocoascript.mapkit.PointOfInterestFilter;
declare namespace cocoascript {
  /**
   * An object that fetches points of interest within a specified region.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/pointsofinterestsearch
   */
  interface mapkit.PointsOfInterestSearch {
    //
    alloc():mapkit.PointsOfInterestSearch;
    //
    init():mapkit.PointsOfInterestSearch;
  }
}

declare const mapkit.PointsOfInterestSearch: cocoascript.mapkit.PointsOfInterestSearch;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointsofinterestsearch/3592036-search
declare const search: cocoascript.PointsOfInterestSearchOptions;
declare namespace cocoascript {
  /**
   * Point of interest categories.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory
   */
  interface mapkit.PointOfInterestCategory {
    //
    alloc():mapkit.PointOfInterestCategory;
    //
    init():mapkit.PointOfInterestCategory;
  }
}

declare const mapkit.PointOfInterestCategory: cocoascript.mapkit.PointOfInterestCategory;
declare namespace cocoascript {
  /**
   * An object that provides directions and estimated travel time based on the options you provide.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/directions
   */
  interface mapkit.Directions {
    //
    alloc():mapkit.Directions;
    //
    init():mapkit.Directions;
  }
}

declare const mapkit.Directions: cocoascript.mapkit.Directions;
// https://developer.apple.com/documentation/mapkitjs/mapkit/directions/3625738-eta
declare const eta: cocoascript.function;
// https://developer.apple.com/documentation/mapkitjs/mapkit/directions/2973874-route
declare const route: cocoascript.function;
declare namespace cocoascript {
  /**
   * The values that define content padding within the map view frame.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/padding
   */
  interface mapkit.Padding {
    //
    alloc():mapkit.Padding;
    //
    init():mapkit.Padding;
  }
}

declare const mapkit.Padding: cocoascript.mapkit.Padding;
declare namespace cocoascript {
  /**
   * Constants indicating the visibility of different adaptive map features.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/featurevisibility
   */
  interface mapkit.FeatureVisibility {
    //
    alloc():mapkit.FeatureVisibility;
    //
    init():mapkit.FeatureVisibility;
  }
}

declare const mapkit.FeatureVisibility: cocoascript.mapkit.FeatureVisibility;
declare namespace cocoascript {
  /**
   * A delegate object that controls a GeoJSON import in order to override default behavior and provide custom style.
   * https://developer.apple.com/documentation/mapkitjs/geojsondelegate
   */
  interface GeoJSONDelegate {
    //
    alloc():GeoJSONDelegate;
    //
    init():GeoJSONDelegate;
  }
}

declare const GeoJSONDelegate: cocoascript.GeoJSONDelegate;
// https://developer.apple.com/documentation/mapkitjs/geojsondelegate/2991194-styleforoverlay
declare const styleForOverlay: cocoascript.Object;
declare namespace cocoascript {
  /**
   * A tree structure containing annotations, overlays, and nested item collection objects.
   * https://developer.apple.com/documentation/mapkitjs/itemcollection
   */
  interface ItemCollection {
    //
    alloc():ItemCollection;
    //
    init():ItemCollection;
  }
}

declare const ItemCollection: cocoascript.ItemCollection;
declare namespace cocoascript {
  /**
   * An object representing the latitude and longitude for a point on the Earth's surface.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/coordinate
   */
  interface mapkit.Coordinate {
    //
    alloc():mapkit.Coordinate;
    //
    init():mapkit.Coordinate;
  }
}

declare const mapkit.Coordinate: cocoascript.mapkit.Coordinate;
// https://developer.apple.com/documentation/mapkitjs/mapkit/coordinate/2973850-copy
declare const copy: cocoascript.Coordinate;
// https://developer.apple.com/documentation/mapkitjs/mapkit/coordinate/2973855-tomappoint
declare const toMapPoint: cocoascript.MapPoint;
// https://developer.apple.com/documentation/mapkitjs/mapkit/coordinate/2973856-tounwrappedmappoint
declare const toUnwrappedMapPoint: cocoascript.MapPoint;
declare namespace cocoascript {
  /**
   * A rectangular area on a map defined by a center coordinate and a span, expressed in degrees of latitude and longitude.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/coordinateregion
   */
  interface mapkit.CoordinateRegion {
    //
    alloc():mapkit.CoordinateRegion;
    //
    init():mapkit.CoordinateRegion;
  }
}

declare const mapkit.CoordinateRegion: cocoascript.mapkit.CoordinateRegion;
// https://developer.apple.com/documentation/mapkitjs/mapkit/coordinateregion/2973863-toboundingregion
declare const toBoundingRegion: cocoascript.BoundingRegion;
// https://developer.apple.com/documentation/mapkitjs/mapkit/coordinateregion/2973864-tomaprect
declare const toMapRect: cocoascript.MapRect;
declare namespace cocoascript {
  /**
   * The width and height of a map region.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/coordinatespan
   */
  interface mapkit.CoordinateSpan {
    //
    alloc():mapkit.CoordinateSpan;
    //
    init():mapkit.CoordinateSpan;
  }
}

declare const mapkit.CoordinateSpan: cocoascript.mapkit.CoordinateSpan;
// https://developer.apple.com/documentation/mapkitjs/mapkit/coordinatespan/2973866-copy
declare const copy: cocoascript.CoordinateSpan;
declare namespace cocoascript {
  /**
   * A rectangular area on a map, defined by coordinates of the rectangle's northeast and southwest corners.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/boundingregion
   */
  interface mapkit.BoundingRegion {
    //
    alloc():mapkit.BoundingRegion;
    //
    init():mapkit.BoundingRegion;
  }
}

declare const mapkit.BoundingRegion: cocoascript.mapkit.BoundingRegion;
// https://developer.apple.com/documentation/mapkitjs/mapkit/boundingregion/2973838-copy
declare const copy: cocoascript.BoundingRegion;
// https://developer.apple.com/documentation/mapkitjs/mapkit/boundingregion/2973843-tocoordinateregion
declare const toCoordinateRegion: cocoascript.CoordinateRegion;
declare namespace cocoascript {
  /**
   * A location, in map units, of a point on the Earth’s surface projected on to a 2D map.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/mappoint
   */
  interface mapkit.MapPoint {
    //
    alloc():mapkit.MapPoint;
    //
    init():mapkit.MapPoint;
  }
}

declare const mapkit.MapPoint: cocoascript.mapkit.MapPoint;
// https://developer.apple.com/documentation/mapkitjs/mapkit/mappoint/2973955-copy
declare const copy: cocoascript.MapPoint;
// https://developer.apple.com/documentation/mapkitjs/mapkit/mappoint/2973958-tocoordinate
declare const toCoordinate: cocoascript.Coordinate;
declare namespace cocoascript {
  /**
   * A rectangular region, in map units, of a two-dimensional map projection.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/maprect
   */
  interface mapkit.MapRect {
    //
    alloc():mapkit.MapRect;
    //
    init():mapkit.MapRect;
  }
}

declare const mapkit.MapRect: cocoascript.mapkit.MapRect;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973965-maxx
declare const maxX: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973966-maxy
declare const maxY: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973967-midx
declare const midX: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973968-midy
declare const midY: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973969-minx
declare const minX: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973970-miny
declare const minY: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973962-copy
declare const copy: cocoascript.MapRect;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973972-scale
declare const scale: cocoascript.MapPoint;
// https://developer.apple.com/documentation/mapkitjs/mapkit/maprect/2973974-tocoordinateregion
declare const toCoordinateRegion: cocoascript.CoordinateRegion;
declare namespace cocoascript {
  /**
   * A pair of values, in map units, that define the width and height of a rectangular area of a map projection.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/mapsize
   */
  interface mapkit.MapSize {
    //
    alloc():mapkit.MapSize;
    //
    init():mapkit.MapSize;
  }
}

declare const mapkit.MapSize: cocoascript.mapkit.MapSize;
// https://developer.apple.com/documentation/mapkitjs/mapkit/mapsize/2973976-copy
declare const copy: cocoascript.MapSize;
declare namespace cocoascript {
  /**
   * A minimum and maximum camera distance as meters from the center of the map.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/camerazoomrange
   */
  interface mapkit.CameraZoomRange {
    //
    alloc():mapkit.CameraZoomRange;
    //
    init():mapkit.CameraZoomRange;
  }
}

declare const mapkit.CameraZoomRange: cocoascript.mapkit.CameraZoomRange;
declare namespace cocoascript {
  /**
   * An object that contains options for initializing a map's features.
   * https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions
   */
  interface MapConstructorOptions {
    //
    alloc():MapConstructorOptions;
    //
    init():MapConstructorOptions;
  }
}

declare const MapConstructorOptions: cocoascript.MapConstructorOptions;
declare namespace cocoascript {
  /**
   * The base annotation object, used for creating custom annotations.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/annotation
   */
  interface mapkit.Annotation {
    //
    alloc():mapkit.Annotation;
    //
    init():mapkit.Annotation;
  }
}

declare const mapkit.Annotation: cocoascript.mapkit.Annotation;
declare namespace cocoascript {
  /**
   * An annotation that displays a balloon-shaped marker at the designated location.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/markerannotation
   */
  interface mapkit.MarkerAnnotation extends mapkit.Annotation {
    //
    alloc():mapkit.MarkerAnnotation;
    //
    init():mapkit.MarkerAnnotation;
  }
}

declare const mapkit.MarkerAnnotation: cocoascript.mapkit.MarkerAnnotation;
declare namespace cocoascript {
  /**
   * A customized annotation with image resources that you provide.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/imageannotation
   */
  interface mapkit.ImageAnnotation extends mapkit.Annotation {
    //
    alloc():mapkit.ImageAnnotation;
    //
    init():mapkit.ImageAnnotation;
  }
}

declare const mapkit.ImageAnnotation: cocoascript.mapkit.ImageAnnotation;
declare namespace cocoascript {
  /**
   * Methods for customizing the behavior and appearance of an annotation callout.
   * https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate
   */
  interface AnnotationCalloutDelegate {
    //
    alloc():AnnotationCalloutDelegate;
    //
    init():AnnotationCalloutDelegate;
  }
}

declare const AnnotationCalloutDelegate: cocoascript.AnnotationCalloutDelegate;
// https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991146-calloutanchoroffsetforannotation
declare const calloutAnchorOffsetForAnnotation: cocoascript.Object;
// https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991147-calloutappearanceanimationforann
declare const calloutAppearanceAnimationForAnnotation: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991148-calloutcontentforannotation
declare const calloutContentForAnnotation: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991149-calloutelementforannotation
declare const calloutElementForAnnotation: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991150-calloutleftaccessoryforannotatio
declare const calloutLeftAccessoryForAnnotation: cocoascript.Annotation;
// https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991151-calloutrightaccessoryforannotati
declare const calloutRightAccessoryForAnnotation: cocoascript.Annotation;
declare namespace cocoascript {
  /**
   * Constants that indicate whether an annotation collides and how to interpret the collision-frame rectangle of an annotation view.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/collisionmode
   */
  interface mapkit.Annotation.CollisionMode {
    //
    alloc():mapkit.Annotation.CollisionMode;
    //
    init():mapkit.Annotation.CollisionMode;
  }
}

declare const mapkit.Annotation.CollisionMode: cocoascript.mapkit.Annotation.CollisionMode;
declare namespace cocoascript {
  /**
   * Constant values used to provide a hint the map uses to prioritize displaying annotations.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/displaypriority
   */
  interface mapkit.Annotation.DisplayPriority {
    //
    alloc():mapkit.Annotation.DisplayPriority;
    //
    init():mapkit.Annotation.DisplayPriority;
  }
}

declare const mapkit.Annotation.DisplayPriority: cocoascript.mapkit.Annotation.DisplayPriority;
declare namespace cocoascript {
  /**
   * A circular overlay with a configurable radius that centers on a specific geographic coordinate.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/circleoverlay
   */
  interface mapkit.CircleOverlay extends mapkit.Overlay {
    //
    alloc():mapkit.CircleOverlay;
    //
    init():mapkit.CircleOverlay;
  }
}

declare const mapkit.CircleOverlay: cocoascript.mapkit.CircleOverlay;
declare namespace cocoascript {
  /**
   * An overlay of connected line segments that do not form a closed shape.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/polylineoverlay
   */
  interface mapkit.PolylineOverlay extends mapkit.Overlay {
    //
    alloc():mapkit.PolylineOverlay;
    //
    init():mapkit.PolylineOverlay;
  }
}

declare const mapkit.PolylineOverlay: cocoascript.mapkit.PolylineOverlay;
declare namespace cocoascript {
  /**
   * An overlay made up of one or more points that forms a closed shape.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/polygonoverlay
   */
  interface mapkit.PolygonOverlay extends mapkit.Overlay {
    //
    alloc():mapkit.PolygonOverlay;
    //
    init():mapkit.PolygonOverlay;
  }
}

declare const mapkit.PolygonOverlay: cocoascript.mapkit.PolygonOverlay;
declare namespace cocoascript {
  /**
   * An abstract base object that defines the methods and attributes for map overlays.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/overlay
   */
  interface mapkit.Overlay {
    //
    alloc():mapkit.Overlay;
    //
    init():mapkit.Overlay;
  }
}

declare const mapkit.Overlay: cocoascript.mapkit.Overlay;
declare namespace cocoascript {
  /**
   * A set of observable attributes for overlays, including color and opacity of stroke and fill, and line styles.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/style
   */
  interface mapkit.Style {
    //
    alloc():mapkit.Style;
    //
    init():mapkit.Style;
  }
}

declare const mapkit.Style: cocoascript.mapkit.Style;
declare namespace cocoascript {
  /**
   * An overlay that covers an area of the map with bitmapped tiles.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/tileoverlay
   */
  interface mapkit.TileOverlay {
    //
    alloc():mapkit.TileOverlay;
    //
    init():mapkit.TileOverlay;
  }
}

declare const mapkit.TileOverlay: cocoascript.mapkit.TileOverlay;
declare namespace cocoascript {
  /**
   * An object or callback function called when performing a search or autocomplete request.
   * https://developer.apple.com/documentation/mapkitjs/searchdelegate
   */
  interface SearchDelegate {
    //
    alloc():SearchDelegate;
    //
    init():SearchDelegate;
  }
}

declare const SearchDelegate: cocoascript.SearchDelegate;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestfilter/3585973-filterincludingallcategories
declare const filterIncludingAllCategories: cocoascript.PointOfInterestFilter;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestfilter/3585972-filterexcludingallcategories
declare const filterExcludingAllCategories: cocoascript.PointOfInterestFilter;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointsofinterestsearch/3592028-maxradius
declare const MaxRadius: cocoascript.number;
declare namespace cocoascript {
  /**
   * An object or callback function that MapKit JS calls when fetching points of interest.
   * https://developer.apple.com/documentation/mapkitjs/pointsofinterestsearchdelegate
   */
  interface PointsOfInterestSearchDelegate {
    //
    alloc():PointsOfInterestSearchDelegate;
    //
    init():PointsOfInterestSearchDelegate;
  }
}

declare const PointsOfInterestSearchDelegate: cocoascript.PointsOfInterestSearchDelegate;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/airport
declare const Airport: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/amusementpark
declare const AmusementPark: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/aquarium
declare const Aquarium: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/atm
declare const ATM: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/bakery
declare const Bakery: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/bank
declare const Bank: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/beach
declare const Beach: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/brewery
declare const Brewery: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/cafe
declare const Cafe: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/campground
declare const Campground: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/carrental
declare const CarRental: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/evcharger
declare const EVCharger: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/firestation
declare const FireStation: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/fitnesscenter
declare const FitnessCenter: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/foodmarket
declare const FoodMarket: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/gasstation
declare const GasStation: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/hospital
declare const Hospital: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/hotel
declare const Hotel: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/laundry
declare const Laundry: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/library
declare const Library: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/marina
declare const Marina: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/movietheater
declare const MovieTheater: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/museum
declare const Museum: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/nationalpark
declare const NationalPark: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/nightlife
declare const Nightlife: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/park
declare const Park: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/parking
declare const Parking: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/pharmacy
declare const Pharmacy: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/police
declare const Police: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/postoffice
declare const PostOffice: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/publictransport
declare const PublicTransport: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/restaurant
declare const Restaurant: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/restroom
declare const Restroom: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/school
declare const School: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/stadium
declare const Stadium: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/store
declare const Store: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/theater
declare const Theater: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/university
declare const University: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/winery
declare const Winery: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory/zoo
declare const Zoo: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/featurevisibility/adaptive
declare const Adaptive: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/featurevisibility/hidden
declare const Hidden: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/featurevisibility/visible
declare const Visible: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/maptypes/mutedstandard
declare const MutedStandard: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/colorschemes/dark
declare const Dark: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/colorschemes/light
declare const Light: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/distances/metric
declare const Metric: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/distances/imperial
declare const Imperial: cocoascript.string;
declare namespace cocoascript {
  /**
   * Constants representing the type of map to display.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/map/maptypes
   */
  interface mapkit.Map.MapTypes {
    //
    alloc():mapkit.Map.MapTypes;
    //
    init():mapkit.Map.MapTypes;
  }
}

declare const mapkit.Map.MapTypes: cocoascript.mapkit.Map.MapTypes;
declare namespace cocoascript {
  /**
   * Constants indicating the color scheme of the map.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/map/colorschemes
   */
  interface mapkit.Map.ColorSchemes {
    //
    alloc():mapkit.Map.ColorSchemes;
    //
    init():mapkit.Map.ColorSchemes;
  }
}

declare const mapkit.Map.ColorSchemes: cocoascript.mapkit.Map.ColorSchemes;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/maptypes/standard
declare const Standard: cocoascript.string;
declare namespace cocoascript {
  /**
   * Constants indicating the system of measurement displayed on the map.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/map/distances
   */
  interface mapkit.Map.Distances {
    //
    alloc():mapkit.Map.Distances;
    //
    init():mapkit.Map.Distances;
  }
}

declare const mapkit.Map.Distances: cocoascript.mapkit.Map.Distances;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/distances/adaptive
declare const Adaptive: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/collisionmode/none
declare const None: cocoascript.String;
// https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/collisionmode/rectangle
declare const Rectangle: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/collisionmode/circle
declare const Circle: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/displaypriority/high
declare const High: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/displaypriority/low
declare const Low: cocoascript.number;
// https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/displaypriority/required
declare const Required: cocoascript.number;
declare namespace cocoascript {
  /**
   * A line that displays with a gradient along the length of the line.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/linegradient
   */
  interface mapkit.LineGradient {
    //
    alloc():mapkit.LineGradient;
    //
    init():mapkit.LineGradient;
  }
}

declare const mapkit.LineGradient: cocoascript.mapkit.LineGradient;
declare namespace cocoascript {
  /**
   * The modes of transportation.
   * https://developer.apple.com/documentation/mapkitjs/mapkit/directions/transport
   */
  interface mapkit.Directions.Transport {
    //
    alloc():mapkit.Directions.Transport;
    //
    init():mapkit.Directions.Transport;
  }
}

declare const mapkit.Directions.Transport: cocoascript.mapkit.Directions.Transport;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/maptypes/hybrid
declare const Hybrid: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/map/maptypes/satellite
declare const Satellite: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/directions/transport/automobile
declare const Automobile: cocoascript.string;
// https://developer.apple.com/documentation/mapkitjs/mapkit/directions/transport/walking
declare const Walking: cocoascript.string;
