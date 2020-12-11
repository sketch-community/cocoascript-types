declare namespace cocoascript {
  /**
   * An object that manages feedback-based image processing for tasks such as painting or fluid simulation.
   * doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator
   */
  interface CIImageAccumulator extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427718-initwithextent
    initWithExtent_format(extent: cocoascript.CGRect, format: cocoascript.CIFormat):cocoascript.CIImageAccumulator;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427710-initwithextent
    initWithExtent_format_colorSpace(extent: cocoascript.CGRect, format: cocoascript.CIFormat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIImageAccumulator;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427702-setimage
    setImage(image: cocoascript.CIImage):void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427706-setimage
    setImage_dirtyRect(image: cocoascript.CIImage, dirtyRect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427714-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427716-format
    format(): cocoascript.CIFormat;
    setFormat(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427704-image
    image():cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/ciimageaccumulator/1427720-clear
    clear():void;
    //
    alloc():cocoascript.CIImageAccumulator;
    //
    init():cocoascript.CIImageAccumulator;
  }
}

declare const CIImageAccumulator: cocoascript.CIImageAccumulator;
