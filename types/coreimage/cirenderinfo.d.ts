declare namespace cocoascript {
  /**
   * An encapsulation of a render task's timing, passes, and pixels processed.
   * doc://com.apple.documentation/documentation/coreimage/cirenderinfo
   */
  interface CIRenderInfo extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cirenderinfo/2875453-kernelexecutiontime
    kernelExecutionTime(): cocoascript.NSTimeInterval;
    setKernelExecutionTime(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderinfo/2875446-passcount
    passCount(): cocoascript.NSInteger;
    setPassCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cirenderinfo/2919725-pixelsprocessed
    pixelsProcessed(): cocoascript.NSInteger;
    setPixelsProcessed(): void;
    //
    alloc():cocoascript.CIRenderInfo;
    //
    init():cocoascript.CIRenderInfo;
  }
}

declare const CIRenderInfo: cocoascript.CIRenderInfo;
