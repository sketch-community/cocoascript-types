declare namespace cocoascript {
/**
 * The properties you use to configure a color cube filter.
 * doc://com.apple.documentation/documentation/coreimage/cicolorcube
 */
interface CIColorCube extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolorcube/3228134-cubedata
  cubeData(): cocoascript.NSData;
  setCubeData(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcube/3228135-cubedimension
  cubeDimension(): number;
  setCubeDimension(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorcube/3228136-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

