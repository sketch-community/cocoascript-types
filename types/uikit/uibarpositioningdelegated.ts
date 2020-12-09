declare namespace cocoascript {
/**
 * A set of methods that support the positioning of a bar that conforms to the 
 * doc://com.apple.documentation/documentation/uikit/uibarpositioningdelegate
 */
interface UIBarPositioningDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uibarpositioningdelegate/1624872-positionforbar
  positionForBar(bar: cocoascript.UIBarPositioning):cocoascript.UIBarPosition;
}
}

