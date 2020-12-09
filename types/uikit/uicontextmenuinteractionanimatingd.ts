declare namespace cocoascript {
/**
 * Methods adopted by system-supplied animator objects when interacting with context menus.
 * doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractionanimating
 */
interface UIContextMenuInteractionAnimating extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractionanimating/3375802-addanimations
  addAnimations(animations: void):void;
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractionanimating/3375803-addcompletion
  addCompletion(completion: void):void;
  // doc://com.apple.documentation/documentation/uikit/uicontextmenuinteractionanimating/3375804-previewviewcontroller
  previewViewController(): cocoascript.UIViewController;
  setPreviewViewController(): void;
}
}

