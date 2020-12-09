declare namespace cocoascript {
/**
 * An interface for modifying an interaction animation in coordination with the pointer effect animations.
 * doc://com.apple.documentation/documentation/uikit/uipointerinteractionanimating
 */
interface UIPointerInteractionAnimating extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipointerinteractionanimating/3538992-addanimations
  addAnimations(animations: void):void;
  // doc://com.apple.documentation/documentation/uikit/uipointerinteractionanimating/3538993-addcompletion
  addCompletion(completion: cocoascript.BOOL):void;
}
}

