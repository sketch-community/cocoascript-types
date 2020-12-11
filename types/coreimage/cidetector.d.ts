declare namespace cocoascript {
  /**
   * An image processor that identifies notable features (such as faces and barcodes) in a still image or video.
   * doc://com.apple.documentation/documentation/coreimage/cidetector
   */
  interface CIDetector extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cidetector/1438049-featuresinimage
    featuresInImage(image: cocoascript.CIImage):cocoascript.CIFeature;
    // doc://com.apple.documentation/documentation/coreimage/cidetector/1438189-featuresinimage
    featuresInImage_options(image: cocoascript.CIImage, options: cocoascript.CIDetector):cocoascript.CIFeature;
    //
    alloc():cocoascript.CIDetector;
    //
    init():cocoascript.CIDetector;
  }
}

declare const CIDetector: cocoascript.CIDetector;
