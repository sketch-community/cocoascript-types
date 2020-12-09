declare namespace cocoascript {
/**
 * The properties you use to configure a keystone correction horizontal filter.
 * doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionhorizontal
 */
interface CIKeystoneCorrectionHorizontal extends CIFourCoordinateGeometryFilter {
  // doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionhorizontal/3325525-focallength
  focalLength(): number;
  setFocalLength(): void;
}
}

