declare namespace cocoascript {
  /**
   * The properties you use to configure a circular screen filter.
   * doc://com.apple.documentation/documentation/coreimage/cicircularscreen
   */
  interface CICircularScreen extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228111-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228112-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228113-sharpness
    sharpness(): number;
    setSharpness(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicircularscreen/3228114-width
    width(): number;
    setWidth(): void;
  }
}
