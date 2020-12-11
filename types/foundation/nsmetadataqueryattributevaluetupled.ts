declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple
   */
  interface NSMetadataQueryAttributeValueTuple extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple/1415060-attribute
    attribute(): cocoascript.NSString;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple/1414426-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmetadataqueryattributevaluetuple/1417894-value
    value(): cocoascript.id;
    setValue(): void;
    //
    alloc():cocoascript.NSMetadataQueryAttributeValueTuple;
    //
    init():cocoascript.NSMetadataQueryAttributeValueTuple;
  }
}

declare const NSMetadataQueryAttributeValueTuple: cocoascript.NSMetadataQueryAttributeValueTuple;
