declare namespace cocoascript {
  /**
   * A concrete subclass of
   * doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor
   */
  interface CIPDF417CodeDescriptor extends CIBarcodeDescriptor {
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875182-initwithpayload
    initWithPayload_isCompact_rowCount_columnCount(errorCorrectedPayload: cocoascript.NSData, isCompact: cocoascript.BOOL, rowCount: cocoascript.NSInteger, columnCount: cocoascript.NSInteger):cocoascript.CIPDF417CodeDescriptor;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875204-errorcorrectedpayload
    errorCorrectedPayload(): cocoascript.NSData;
    setErrorCorrectedPayload(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875194-iscompact
    isCompact(): cocoascript.BOOL;
    setIsCompact(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875199-rowcount
    rowCount(): cocoascript.NSInteger;
    setRowCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipdf417codedescriptor/2875171-columncount
    columnCount(): cocoascript.NSInteger;
    setColumnCount(): void;
    //
    alloc():cocoascript.CIPDF417CodeDescriptor;
    //
    init():cocoascript.CIPDF417CodeDescriptor;
  }
}

declare const CIPDF417CodeDescriptor: cocoascript.CIPDF417CodeDescriptor;
