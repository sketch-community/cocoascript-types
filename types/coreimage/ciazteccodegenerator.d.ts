declare namespace cocoascript {
  /**
   * The properties you use to configure an Aztec code generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator
   */
  interface CIAztecCodeGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228063-compactstyle
    compactStyle(): number;
    setCompactStyle(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228064-correctionlevel
    correctionLevel(): number;
    setCorrectionLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228065-layers
    layers(): number;
    setLayers(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciazteccodegenerator/3228066-message
    message(): cocoascript.NSData;
    setMessage(): void;
  }
}
