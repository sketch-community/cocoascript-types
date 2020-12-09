declare namespace cocoascript {
/**
 * The properties you use to configure a Code 128 barcode generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator
 */
interface CICode128BarcodeGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator/3228116-barcodeheight
  barcodeHeight(): number;
  setBarcodeHeight(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator/3228117-message
  message(): cocoascript.NSData;
  setMessage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicode128barcodegenerator/3228118-quietspace
  quietSpace(): number;
  setQuietSpace(): void;
}
}

