declare namespace cocoascript {
  /**
   * The properties you use to configure a QR code generator filter.
   * doc://com.apple.documentation/documentation/coreimage/ciqrcodegenerator
   */
  interface CIQRCodeGenerator extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodegenerator/3228682-correctionlevel
    correctionLevel(): cocoascript.NSString;
    setCorrectionLevel(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodegenerator/3228683-message
    message(): cocoascript.NSData;
    setMessage(): void;
  }
}
