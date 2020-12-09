declare namespace cocoascript {
/**
 * The properties you use to configure a keystone correction combined filter.
 * doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectioncombined
 */
interface CIKeystoneCorrectionCombined extends CIFourCoordinateGeometryFilter {
  // doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectioncombined/3325518-focallength
  focalLength(): number;
  setFocalLength(): void;
}
}

