declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cidroste
   */
  interface CIDroste extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600131-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600132-insetpoint0
    insetPoint0(): cocoascript.CGPoint;
    setInsetPoint0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600133-insetpoint1
    insetPoint1(): cocoascript.CGPoint;
    setInsetPoint1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600134-periodicity
    periodicity(): number;
    setPeriodicity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600135-rotation
    rotation(): number;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600136-strands
    strands(): number;
    setStrands(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidroste/3600137-zoom
    zoom(): number;
    setZoom(): void;
  }
}
