declare namespace cocoascript {
  /**
   * A concrete subclass of
   * doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor
   */
  interface CIQRCodeDescriptor extends CIBarcodeDescriptor {
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875180-initwithpayload
    initWithPayload_symbolVersion_maskPattern_errorCorrectionLevel(errorCorrectedPayload: cocoascript.NSData, symbolVersion: cocoascript.NSInteger, maskPattern: number, errorCorrectionLevel: cocoascript.CIQRCodeErrorCorrectionLevel):cocoascript.CIQRCodeDescriptor;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875167-errorcorrectedpayload
    errorCorrectedPayload(): cocoascript.NSData;
    setErrorCorrectedPayload(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875193-symbolversion
    symbolVersion(): cocoascript.NSInteger;
    setSymbolVersion(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875191-maskpattern
    maskPattern(): number;
    setMaskPattern(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciqrcodedescriptor/2875196-errorcorrectionlevel
    errorCorrectionLevel(): cocoascript.CIQRCodeErrorCorrectionLevel;
    setErrorCorrectionLevel(): void;
    //
    alloc():cocoascript.CIQRCodeDescriptor;
    //
    init():cocoascript.CIQRCodeDescriptor;
  }
}

declare const CIQRCodeDescriptor: cocoascript.CIQRCodeDescriptor;
