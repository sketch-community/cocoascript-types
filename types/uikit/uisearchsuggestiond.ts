declare namespace cocoascript {
/**
 * A selectable search parameter.
 * doc://com.apple.documentation/documentation/uikit/uisearchsuggestion
 */
interface UISearchSuggestion extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestion/3584826-localizedsuggestion
  localizedSuggestion(): cocoascript.NSString;
  setLocalizedSuggestion(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestion/3584825-localizeddescription
  localizedDescription(): cocoascript.NSString;
  setLocalizedDescription(): void;
  // doc://com.apple.documentation/documentation/uikit/uisearchsuggestion/3584824-iconimage
  iconImage(): cocoascript.UIImage;
  setIconImage(): void;
}
}

