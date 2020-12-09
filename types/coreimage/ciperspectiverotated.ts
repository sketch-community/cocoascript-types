declare namespace cocoascript {
/**
 * The properties you use to configure a perspective rotate filter.
 * doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate
 */
interface CIPerspectiveRotate extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325537-focallength
  focalLength(): number;
  setFocalLength(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325538-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325539-pitch
  pitch(): number;
  setPitch(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325540-roll
  roll(): number;
  setRoll(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectiverotate/3325541-yaw
  yaw(): number;
  setYaw(): void;
}
}

