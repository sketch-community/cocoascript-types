declare namespace cocoascript {
  /**
   * An abstract class used to transform values from one representation to another.
   * doc://com.apple.documentation/documentation/foundation/nsvaluetransformer
   */
  interface NSValueTransformer extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsvaluetransformer/1402004-transformedvalue
    transformedValue(value: cocoascript.NSValueTransformer):cocoascript.NSValueTransformer;
    // doc://com.apple.documentation/documentation/foundation/nsvaluetransformer/1402020-reversetransformedvalue
    reverseTransformedValue(value: cocoascript.NSValueTransformer):cocoascript.NSValueTransformer;
    //
    alloc():cocoascript.NSValueTransformer;
    //
    init():cocoascript.NSValueTransformer;
  }
}

declare const NSValueTransformer: cocoascript.NSValueTransformer;
