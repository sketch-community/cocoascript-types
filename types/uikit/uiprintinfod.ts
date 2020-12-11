declare namespace cocoascript {
  /**
   * Information about a print job.
   * doc://com.apple.documentation/documentation/uikit/uiprintinfo
   */
  interface UIPrintInfo extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiprintinfo/1623539-dictionaryrepresentation
    dictionaryRepresentation(): cocoascript.NSDictionary;
    setDictionaryRepresentation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinfo/1623546-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIPrintInfo;
    // doc://com.apple.documentation/documentation/uikit/uiprintinfo/1623549-duplex
    duplex(): cocoascript.UIPrintInfoDuplex;
    setDuplex(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinfo/1623543-jobname
    jobName(): cocoascript.NSString;
    setJobName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinfo/1623550-orientation
    orientation(): cocoascript.UIPrintInfoOrientation;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinfo/1623552-outputtype
    outputType(): cocoascript.UIPrintInfoOutputType;
    setOutputType(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprintinfo/1623535-printerid
    printerID(): cocoascript.NSString;
    setPrinterID(): void;
    //
    alloc():cocoascript.UIPrintInfo;
    //
    init():cocoascript.UIPrintInfo;
  }
}

declare const UIPrintInfo: cocoascript.UIPrintInfo;
