declare namespace cocoascript {
/**
 * Search criteria in a search text field, represented by text and an optional icon.
 * doc://com.apple.documentation/documentation/uikit/uisearchtoken
 */
interface UISearchToken extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisearchtoken/3175448-representedobject
  representedObject(): cocoascript.id;
  setRepresentedObject(): void;
  // 
  alloc():cocoascript.UISearchToken;
  // 
  init():cocoascript.UISearchToken;
}
}
declare const UISearchToken: cocoascript.UISearchToken;

