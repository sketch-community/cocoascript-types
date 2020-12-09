declare namespace cocoascript {
/**
 * The search parameters that help determine the next matching custom rotor item result.
 * doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate
 */
interface UIAccessibilityCustomRotorSearchPredicate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate/1649821-currentitem
  currentItem(): cocoascript.UIAccessibilityCustomRotorItemResult;
  setCurrentItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uiaccessibilitycustomrotorsearchpredicate/1649916-searchdirection
  searchDirection(): cocoascript.UIAccessibilityCustomRotorDirection;
  setSearchDirection(): void;
  // 
  alloc():cocoascript.UIAccessibilityCustomRotorSearchPredicate;
  // 
  init():cocoascript.UIAccessibilityCustomRotorSearchPredicate;
}
}
declare const UIAccessibilityCustomRotorSearchPredicate: cocoascript.UIAccessibilityCustomRotorSearchPredicate;

