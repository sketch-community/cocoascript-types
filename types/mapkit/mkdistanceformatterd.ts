declare namespace cocoascript {
  /**
   * A utility object that converts between a geographic distance and a string-based expression of that distance.
   * doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter
   */
  interface MKDistanceFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1451994-stringfromdistance
    stringFromDistance(distance: cocoascript.CLLocationDistance):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452766-distancefromstring
    distanceFromString(distance: cocoascript.NSString):cocoascript.CLLocationDistance;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452235-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452775-units
    units(): cocoascript.MKDistanceFormatterUnits;
    setUnits(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkdistanceformatter/1452128-unitstyle
    unitStyle(): cocoascript.MKDistanceFormatterUnitStyle;
    setUnitStyle(): void;
    //
    alloc():cocoascript.MKDistanceFormatter;
    //
    init():cocoascript.MKDistanceFormatter;
  }
}

declare const MKDistanceFormatter: cocoascript.MKDistanceFormatter;
