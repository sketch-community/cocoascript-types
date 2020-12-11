declare namespace cocoascript {
  /**
   * A layer that draws a color gradient over its background color, filling the shape of the layer (including rounded corners)
   * doc://com.apple.documentation/documentation/quartzcore/cagradientlayer
   */
  interface CAGradientLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462403-colors
    colors(): cocoascript.NSArray;
    setColors(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462410-locations
    locations(): cocoascript.NSNumber;
    setLocations(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462412-endpoint
    endPoint(): cocoascript.CGPoint;
    setEndPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462408-startpoint
    startPoint(): cocoascript.CGPoint;
    setStartPoint(): void;
    // doc://com.apple.documentation/documentation/quartzcore/cagradientlayer/1462413-type
    type(): cocoascript.CAGradientLayerType;
    setType(): void;
    //
    alloc():cocoascript.CAGradientLayer;
    //
    init():cocoascript.CAGradientLayer;
  }
}

declare const CAGradientLayer: cocoascript.CAGradientLayer;
