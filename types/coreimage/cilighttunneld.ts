declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/cilighttunnel
 */
interface CILightTunnel extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600171-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600172-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600173-radius
  radius(): number;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilighttunnel/3600174-rotation
  rotation(): number;
  setRotation(): void;
}
}

