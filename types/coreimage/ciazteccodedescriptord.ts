declare namespace cocoascript {
/**
 * A concrete subclass of 
 * doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor
 */
interface CIAztecCodeDescriptor extends CIBarcodeDescriptor {
  // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875188-initwithpayload
  initWithPayload_isCompact_layerCount_dataCodewordCount(errorCorrectedPayload: cocoascript.NSData, isCompact: cocoascript.BOOL, layerCount: cocoascript.NSInteger, dataCodewordCount: cocoascript.NSInteger):cocoascript.CIAztecCodeDescriptor;
  // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875187-errorcorrectedpayload
  errorCorrectedPayload(): cocoascript.NSData;
  setErrorCorrectedPayload(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875203-iscompact
  isCompact(): cocoascript.BOOL;
  setIsCompact(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875174-layercount
  layerCount(): cocoascript.NSInteger;
  setLayerCount(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciazteccodedescriptor/2875166-datacodewordcount
  dataCodewordCount(): cocoascript.NSInteger;
  setDataCodewordCount(): void;
  // 
  alloc():cocoascript.CIAztecCodeDescriptor;
  // 
  init():cocoascript.CIAztecCodeDescriptor;
}
}
declare const CIAztecCodeDescriptor: cocoascript.CIAztecCodeDescriptor;

