declare namespace cocoascript {
  /**
   * A request to modify the attributes of a message.
   * doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent
   */
  interface INSetMessageAttributeIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent/1829396-initwithidentifiers
    initWithIdentifiers_attribute(identifiers: cocoascript.NSString, attribute: cocoascript.INMessageAttribute):cocoascript.INSetMessageAttributeIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent/1829395-attribute
    attribute(): cocoascript.INMessageAttribute;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent/1829392-identifiers
    identifiers(): cocoascript.NSString;
    setIdentifiers(): void;
    //
    alloc():cocoascript.INSetMessageAttributeIntent;
    //
    init():cocoascript.INSetMessageAttributeIntent;
  }
}

declare const INSetMessageAttributeIntent: cocoascript.INSetMessageAttributeIntent;
