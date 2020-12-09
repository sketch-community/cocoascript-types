declare namespace cocoascript {
/**
 * The interface that an object implements to declare its ability to accept specific data types for pasting and for drag and drop activities.
 * doc://com.apple.documentation/documentation/uikit/uipasteconfiguration
 */
interface UIPasteConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipasteconfiguration/2882061-init
  init():cocoascript.UIPasteConfiguration;
  // doc://com.apple.documentation/documentation/uikit/uipasteconfiguration/2882060-initwithacceptabletypeidentifier
  initWithAcceptableTypeIdentifiers(acceptableTypeIdentifiers: cocoascript.NSString):cocoascript.UIPasteConfiguration;
  // doc://com.apple.documentation/documentation/uikit/uipasteconfiguration/2882058-initwithtypeidentifiersforaccept
  initWithTypeIdentifiersForAcceptingClass(aClass: cocoascript.NSItemProviderReading):cocoascript.UIPasteConfiguration;
  // doc://com.apple.documentation/documentation/uikit/uipasteconfiguration/2882059-acceptabletypeidentifiers
  acceptableTypeIdentifiers(): cocoascript.NSString;
  setAcceptableTypeIdentifiers(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteconfiguration/2882057-addacceptabletypeidentifiers
  addAcceptableTypeIdentifiers(acceptableTypeIdentifiers: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uipasteconfiguration/2882062-addtypeidentifiersforacceptingcl
  addTypeIdentifiersForAcceptingClass(aClass: cocoascript.NSItemProviderReading):void;
  // 
  alloc():cocoascript.UIPasteConfiguration;
  // 
  init():cocoascript.UIPasteConfiguration;
}
}
declare const UIPasteConfiguration: cocoascript.UIPasteConfiguration;

