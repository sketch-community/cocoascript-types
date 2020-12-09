declare namespace cocoascript {
/**
 * A concrete subclass of 
 * doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor
 */
interface CIDataMatrixCodeDescriptor extends CIBarcodeDescriptor {
  // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875201-initwithpayload
  initWithPayload_rowCount_columnCount_eccVersion(errorCorrectedPayload: cocoascript.NSData, rowCount: cocoascript.NSInteger, columnCount: cocoascript.NSInteger, eccVersion: cocoascript.CIDataMatrixCodeECCVersion):cocoascript.CIDataMatrixCodeDescriptor;
  // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875173-errorcorrectedpayload
  errorCorrectedPayload(): cocoascript.NSData;
  setErrorCorrectedPayload(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875200-rowcount
  rowCount(): cocoascript.NSInteger;
  setRowCount(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875202-columncount
  columnCount(): cocoascript.NSInteger;
  setColumnCount(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidatamatrixcodedescriptor/2875170-eccversion
  eccVersion(): cocoascript.CIDataMatrixCodeECCVersion;
  setEccVersion(): void;
  // 
  alloc():cocoascript.CIDataMatrixCodeDescriptor;
  // 
  init():cocoascript.CIDataMatrixCodeDescriptor;
}
}
declare const CIDataMatrixCodeDescriptor: cocoascript.CIDataMatrixCodeDescriptor;

