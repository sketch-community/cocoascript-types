declare namespace cocoascript {
/**
 * A ruler and the markers above or to the side of a scroll view’s document view. 
 * doc://com.apple.documentation/documentation/appkit/nsrulerview
 */
interface NSRulerView extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1535316-initwithscrollview
  initWithScrollView_orientation(scrollView: cocoascript.NSScrollView, orientation: cocoascript.NSRulerOrientation):cocoascript.NSRulerView;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1644122-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSRulerView;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1531493-measurementunits
  measurementUnits(): cocoascript.NSRulerViewUnitName;
  setMeasurementUnits(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1533483-clientview
  clientView(): cocoascript.NSView;
  setClientView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1532804-accessoryview
  accessoryView(): cocoascript.NSView;
  setAccessoryView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1535432-originoffset
  originOffset(): cocoascript.CGFloat;
  setOriginOffset(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1535213-markers
  markers(): cocoascript.NSRulerMarker;
  setMarkers(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1524916-addmarker
  addMarker(marker: cocoascript.NSRulerMarker):void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1528230-removemarker
  removeMarker(marker: cocoascript.NSRulerMarker):void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1535375-trackmarker
  trackMarker_withMouseEvent(marker: cocoascript.NSRulerMarker, event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1527414-moverulerlinefromlocation
  moveRulerlineFromLocation_toLocation(oldLocation: cocoascript.CGFloat, newLocation: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1529177-drawhashmarksandlabelsinrect
  drawHashMarksAndLabelsInRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1525997-drawmarkersinrect
  drawMarkersInRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1530838-invalidatehashmarks
  invalidateHashMarks():void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1533741-scrollview
  scrollView(): cocoascript.NSScrollView;
  setScrollView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1530596-orientation
  orientation(): cocoascript.NSRulerOrientation;
  setOrientation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1530160-reservedthicknessforaccessoryvie
  reservedThicknessForAccessoryView(): cocoascript.CGFloat;
  setReservedThicknessForAccessoryView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1535112-reservedthicknessformarkers
  reservedThicknessForMarkers(): cocoascript.CGFloat;
  setReservedThicknessForMarkers(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1527872-rulethickness
  ruleThickness(): cocoascript.CGFloat;
  setRuleThickness(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1526479-requiredthickness
  requiredThickness(): cocoascript.CGFloat;
  setRequiredThickness(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1534886-baselinelocation
  baselineLocation(): cocoascript.CGFloat;
  setBaselineLocation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsrulerview/1526302-flipped
  flipped(): cocoascript.BOOL;
  setFlipped(): void;
  // 
  alloc():cocoascript.NSRulerView;
  // 
  init():cocoascript.NSRulerView;
}
}
declare const NSRulerView: cocoascript.NSRulerView;

