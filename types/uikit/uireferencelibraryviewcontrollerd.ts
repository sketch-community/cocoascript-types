declare namespace cocoascript {
/**
 * A view controller that displays a standard interface for looking up the definition of a word or term.
 * doc://com.apple.documentation/documentation/uikit/uireferencelibraryviewcontroller
 */
interface UIReferenceLibraryViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uireferencelibraryviewcontroller/1624808-initwithterm
  initWithTerm(term: cocoascript.NSString):cocoascript.UIReferenceLibraryViewController;
  // doc://com.apple.documentation/documentation/uikit/uireferencelibraryviewcontroller/1624809-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIReferenceLibraryViewController;
  // 
  alloc():cocoascript.UIReferenceLibraryViewController;
  // 
  init():cocoascript.UIReferenceLibraryViewController;
}
}
declare const UIReferenceLibraryViewController: cocoascript.UIReferenceLibraryViewController;

