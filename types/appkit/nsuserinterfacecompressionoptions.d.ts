declare namespace cocoascript {
  /**
   * An object that specifies how user interface elements resize themselves when space is constrained.
   * doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions
   */
  interface NSUserInterfaceCompressionOptions extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909982-init
    init():cocoascript.NSUserInterfaceCompressionOptions;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909987-initwithcompressionoptions
    initWithCompressionOptions(options: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.NSUserInterfaceCompressionOptions;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909979-initwithidentifier
    initWithIdentifier(identifier: cocoascript.NSString):cocoascript.NSUserInterfaceCompressionOptions;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909964-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSUserInterfaceCompressionOptions;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909980-hideimagesoption
    hideImagesOption(): cocoascript.NSUserInterfaceCompressionOptions;
    setHideImagesOption(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909971-hidetextoption
    hideTextOption(): cocoascript.NSUserInterfaceCompressionOptions;
    setHideTextOption(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909976-reducemetricsoption
    reduceMetricsOption(): cocoascript.NSUserInterfaceCompressionOptions;
    setReduceMetricsOption(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909966-breakequalwidthsoption
    breakEqualWidthsOption(): cocoascript.NSUserInterfaceCompressionOptions;
    setBreakEqualWidthsOption(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909974-standardoptions
    standardOptions(): cocoascript.NSUserInterfaceCompressionOptions;
    setStandardOptions(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909986-empty
    empty(): cocoascript.BOOL;
    setEmpty(): void;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909983-containsoptions
    containsOptions(options: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909977-intersectsoptions
    intersectsOptions(options: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909965-optionsbyaddingoptions
    optionsByAddingOptions(options: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.NSUserInterfaceCompressionOptions;
    // doc://com.apple.documentation/documentation/appkit/nsuserinterfacecompressionoptions/2909969-optionsbyremovingoptions
    optionsByRemovingOptions(options: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.NSUserInterfaceCompressionOptions;
    //
    alloc():cocoascript.NSUserInterfaceCompressionOptions;
    //
    init():cocoascript.NSUserInterfaceCompressionOptions;
  }
}

declare const NSUserInterfaceCompressionOptions: cocoascript.NSUserInterfaceCompressionOptions;
