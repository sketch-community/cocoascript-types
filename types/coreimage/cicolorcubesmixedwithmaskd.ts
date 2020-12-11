declare namespace cocoascript {
  /**
   * The properties you use to configure a color cube mixed with mask filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask
   */
  interface CIColorCubesMixedWithMask extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228143-colorspace
    colorSpace(): cocoascript.CGColorSpaceRef;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228144-cube0data
    cube0Data(): cocoascript.NSData;
    setCube0Data(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228145-cube1data
    cube1Data(): cocoascript.NSData;
    setCube1Data(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228146-cubedimension
    cubeDimension(): number;
    setCubeDimension(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228147-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolorcubesmixedwithmask/3228148-maskimage
    maskImage(): cocoascript.CIImage;
    setMaskImage(): void;
  }
}
