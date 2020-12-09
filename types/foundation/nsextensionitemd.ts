declare namespace cocoascript {
/**
 * An immutable collection of values representing different aspects of an item for an extension to act upon.
 * doc://com.apple.documentation/documentation/foundation/nsextensionitem
 */
interface NSExtensionItem extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1416592-attributedtitle
  attributedTitle(): cocoascript.NSAttributedString;
  setAttributedTitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1414953-userinfo
  userInfo(): cocoascript.NSDictionary;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1416690-attachments
  attachments(): cocoascript.NSItemProvider;
  setAttachments(): void;
  // doc://com.apple.documentation/documentation/foundation/nsextensionitem/1408297-attributedcontenttext
  attributedContentText(): cocoascript.NSAttributedString;
  setAttributedContentText(): void;
  // 
  alloc():cocoascript.NSExtensionItem;
  // 
  init():cocoascript.NSExtensionItem;
}
}
declare const NSExtensionItem: cocoascript.NSExtensionItem;

