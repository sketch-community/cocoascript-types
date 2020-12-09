declare namespace cocoascript {
/**
 * An abstract class that defines the basic properties for all shape-based overlay objects.
 * doc://com.apple.documentation/documentation/mapkit/mkshape
 */
interface MKShape extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mkshape/1437594-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/mapkit/mkshape/1437592-subtitle
  subtitle(): cocoascript.NSString;
  setSubtitle(): void;
  // 
  alloc():cocoascript.MKShape;
  // 
  init():cocoascript.MKShape;
}
}
declare const MKShape: cocoascript.MKShape;

