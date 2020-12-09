declare namespace cocoascript {
/**
 * An optional layer delegate method for handling resolution changes.
 * doc://com.apple.documentation/documentation/appkit/nsviewlayercontentscaledelegate
 */
interface NSViewLayerContentScaleDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsviewlayercontentscaledelegate/3005294-layer
  layer_shouldInheritContentsScale_fromWindow(layer: cocoascript.CALayer, newScale: cocoascript.CGFloat, window: cocoascript.NSWindow):cocoascript.BOOL;
}
}

