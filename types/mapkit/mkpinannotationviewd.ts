declare namespace cocoascript {
/**
 * An annotation view that displays a pin image on the map.  
 * doc://com.apple.documentation/documentation/mapkit/mkpinannotationview
 */
interface MKPinAnnotationView extends MKAnnotationView {
  // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452042-pintintcolor
  pinTintColor(): cocoascript.UIColor;
  setPinTintColor(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452654-animatesdrop
  animatesDrop(): cocoascript.BOOL;
  setAnimatesDrop(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkpinannotationview/1452530-pincolor
  pinColor(): cocoascript.MKPinAnnotationColor;
  setPinColor(): void;
  // 
  alloc():cocoascript.MKPinAnnotationView;
  // 
  init():cocoascript.MKPinAnnotationView;
}
}
declare const MKPinAnnotationView: cocoascript.MKPinAnnotationView;

