declare namespace cocoascript {
  /**
   * An object that retrieves pixel samples for processing by a filter kernel.
   * doc://com.apple.documentation/documentation/coreimage/cisampler
   */
  interface CISampler extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1438117-initwithimage
    initWithImage(im: cocoascript.CIImage):cocoascript.CISampler;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1555077-initwithimage
    initWithImage_keysAndValues(im: cocoascript.CIImage, key0: cocoascript.CISampler):cocoascript.CISampler;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1437963-initwithimage
    initWithImage_options(im: cocoascript.CIImage, dict: cocoascript.NSDictionary):cocoascript.CISampler;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1437877-definition
    definition(): cocoascript.CIFilterShape;
    setDefinition(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisampler/1437872-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    //
    alloc():cocoascript.CISampler;
    //
    init():cocoascript.CISampler;
  }
}

declare const CISampler: cocoascript.CISampler;
