declare namespace cocoascript {
  /**
   * Methods that allow an object to manage the layout of a layer and its sublayers.
   * doc://com.apple.documentation/documentation/quartzcore/calayoutmanager
   */
  interface CALayoutManager extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097258-invalidatelayoutoflayer
    invalidateLayoutOfLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097260-layoutsublayersoflayer
    layoutSublayersOfLayer(layer: cocoascript.CALayer):void;
    // doc://com.apple.documentation/documentation/quartzcore/calayoutmanager/2097256-preferredsizeoflayer
    preferredSizeOfLayer(layer: cocoascript.CALayer):cocoascript.CGSize;
  }
}
