declare namespace cocoascript {
  /**
   * An image processor that produces an image by manipulating one or more input images or by generating new image data.
   * doc://com.apple.documentation/documentation/coreimage/cifilter
   */
  interface CIFilter extends NSObject {
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1437997-setname
    name():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438276-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1437661-attributes
    attributes(): cocoascript.id;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438013-inputkeys
    inputKeys(): cocoascript.NSString;
    setInputKeys(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438122-outputkeys
    outputKeys(): cocoascript.NSString;
    setOutputKeys(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438169-outputimage
    outputImage(): cocoascript.CIImage;
    setOutputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1437902-setdefaults
    setDefaults():void;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1438077-apply
    apply_arguments_options(k: cocoascript.CIKernel, args: cocoascript.NSArray, dict: cocoascript.CIFilter):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1562058-apply
    apply(k: cocoascript.CIKernel):cocoascript.CIImage;
    // doc://com.apple.documentation/documentation/coreimage/cifilter/1427521-viewforuiconfiguration
    viewForUIConfiguration_excludedKeys(inUIConfiguration: cocoascript.NSDictionary, inKeys: cocoascript.NSArray):cocoascript.IKFilterUIView;
    //
    alloc():cocoascript.CIFilter;
    //
    init():cocoascript.CIFilter;
  }
}

declare const CIFilter: cocoascript.CIFilter;
