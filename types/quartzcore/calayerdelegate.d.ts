declare namespace cocoascript {
  /**
   * Methods your app can implement to respond to layer-related events.
   * doc://com.apple.documentation/documentation/quartzcore/calayerdelegate
   */
  interface CALayerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097261-displaylayer
    displayLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097262-drawlayer
    drawLayer_inContext(layer: cocoascript.CALayer, ctx: cocoascript.CGContextRef):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097263-layerwilldraw
    layerWillDraw(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097257-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayerdelegate/2097264-actionforlayer
    actionForLayer_forKey(layer: cocoascript.CALayer, event: cocoascript.NSString):cocoascript.CAAction;
  }
}
