declare namespace cocoascript {
/**
 * The protocol you implement on a class to allow an item provider to create an instance of the class.
 * doc://com.apple.documentation/documentation/foundation/nsitemproviderreading
 */
interface NSItemProviderReading extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderreading/2888305-readabletypeidentifiersforitempr
  readableTypeIdentifiersForItemProvider(): cocoascript.NSString;
  setReadableTypeIdentifiersForItemProvider(): void;
}
}

