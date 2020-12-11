declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube with color space filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace
   */
  interface CIColorCubeWithColorSpace extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228138-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228139-cubedata
    cubeData(): cocoascript.NSData;
    setCubeData(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228140-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubewithcolorspace/3228141-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
