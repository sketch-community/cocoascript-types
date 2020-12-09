declare namespace cocoascript {
/**
 * The properties you use to configure a hexagonal pixellate filter.
 * doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate
 */
interface CIHexagonalPixellate extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate/3228490-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate/3228491-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihexagonalpixellate/3228492-scale
  scale(): number;
  setScale(): void;
}
}

