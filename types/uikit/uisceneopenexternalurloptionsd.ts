declare namespace cocoascript {
/**
 * Options you specify when asking a scene to open a URL.
 * doc://com.apple.documentation/documentation/uikit/uisceneopenexternalurloptions
 */
interface UISceneOpenExternalURLOptions extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uisceneopenexternalurloptions/3197941-universallinksonly
  universalLinksOnly(): cocoascript.BOOL;
  setUniversalLinksOnly(): void;
  // 
  alloc():cocoascript.UISceneOpenExternalURLOptions;
  // 
  init():cocoascript.UISceneOpenExternalURLOptions;
}
}
declare const UISceneOpenExternalURLOptions: cocoascript.UISceneOpenExternalURLOptions;

