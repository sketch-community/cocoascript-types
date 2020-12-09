declare namespace cocoascript {
/**
 * A selectable search parameter.
 * doc://com.apple.documentation/documentation/uikit/uisearchsuggestionitem
 */
interface UISearchSuggestionItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestionitem/3584831-initwithlocalizedsuggestion
  initWithLocalizedSuggestion_localizedDescription_iconImage(suggestion: cocoascript.NSString, description: cocoascript.NSString, iconImage: cocoascript.UIImage):cocoascript.UISearchSuggestionItem;
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestionitem/3584830-initwithlocalizedsuggestion
  initWithLocalizedSuggestion_localizedDescription(suggestion: cocoascript.NSString, description: cocoascript.NSString):cocoascript.UISearchSuggestionItem;
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestionitem/3584829-initwithlocalizedsuggestion
  initWithLocalizedSuggestion(suggestion: cocoascript.NSString):cocoascript.UISearchSuggestionItem;
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestionitem/3584833-localizedsuggestion
  localizedSuggestion(): cocoascript.NSString;
  setLocalizedSuggestion(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestionitem/3584832-localizeddescription
  localizedDescription(): cocoascript.NSString;
  setLocalizedDescription(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestionitem/3584828-iconimage
  iconImage(): cocoascript.UIImage;
  setIconImage(): void;
  // 
  alloc():cocoascript.UISearchSuggestionItem;
  // 
  init():cocoascript.UISearchSuggestionItem;
}
}
declare const UISearchSuggestionItem: cocoascript.UISearchSuggestionItem;

