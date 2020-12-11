declare namespace cocoascript {
  /**
   * The properties you use to configure a keystone correction vertical filter.
   * doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionvertical
   */
  interface CIKeystoneCorrectionVertical extends CIFourCoordinateGeometryFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikeystonecorrectionvertical/3325532-focallength
    focalLength(): number;
    setFocalLength(): void;
  }
}
