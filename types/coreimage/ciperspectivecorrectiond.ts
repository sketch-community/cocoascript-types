declare namespace cocoascript {
/**
 * The properties you use to configure a perspective correction filter.
 * doc://com.apple.documentation/documentation/coreimage/ciperspectivecorrection
 */
interface CIPerspectiveCorrection extends CIFourCoordinateGeometryFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciperspectivecorrection/3228648-crop
  crop(): boolean;
  setCrop(): void;
}
}

