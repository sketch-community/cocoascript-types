declare namespace cocoascript {
/**
 * The properties you use to configure a barcode generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cibarcodegenerator
 */
interface CIBarcodeGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cibarcodegenerator/3228068-barcodedescriptor
  barcodeDescriptor(): cocoascript.CIBarcodeDescriptor;
  setBarcodeDescriptor(): void;
}
}

