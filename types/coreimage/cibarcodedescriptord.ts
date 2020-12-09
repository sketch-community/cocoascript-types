declare namespace cocoascript {
/**
 * An abstract base class that represents a machine readable code's attributes.
 * doc://com.apple.documentation/documentation/coreimage/cibarcodedescriptor
 */
interface CIBarcodeDescriptor extends NSObject {
  // 
  alloc():cocoascript.CIBarcodeDescriptor;
  // 
  init():cocoascript.CIBarcodeDescriptor;
}
}
declare const CIBarcodeDescriptor: cocoascript.CIBarcodeDescriptor;

