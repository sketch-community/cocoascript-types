declare namespace cocoascript {
  /**
   * The properties you use to configure an attributed-text image generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciattributedtextimagegenerator
   */
  interface CIAttributedTextImageGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciattributedtextimagegenerator/3228060-scalefactor
    scaleFactor(): number;
    setScaleFactor(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciattributedtextimagegenerator/3228061-text
    text(): cocoascript.NSAttributedString;
    setText(): void;
  }
}
