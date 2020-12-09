declare namespace cocoascript {
/**
 * The protocol you implement on a class to allow an item provider to retrieve data from an instance of the class.
 * doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting
 */
interface NSItemProviderWriting extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2888302-loaddatawithtypeidentifier
  loadDataWithTypeIdentifier_forItemProviderCompletionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2888301-writabletypeidentifiersforitempr
  writableTypeIdentifiersForItemProvider(): cocoascript.NSString;
  setWritableTypeIdentifiersForItemProvider(): void;
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2888299-writabletypeidentifiersforitempr
  writableTypeIdentifiersForItemProvider(): cocoascript.NSString;
  setWritableTypeIdentifiersForItemProvider(): void;
  // doc://com.apple.documentation/documentation/foundation/nsitemproviderwriting/2921254-itemprovidervisibilityforreprese
  itemProviderVisibilityForRepresentationWithTypeIdentifier(typeIdentifier: cocoascript.NSString):cocoascript.NSItemProviderRepresentationVisibility;
}
}

