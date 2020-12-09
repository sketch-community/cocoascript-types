declare namespace cocoascript {
/**
 * An encapsulation of the design-time view controller graph represented in an Interface Builder storyboard resource file.
 * doc://com.apple.documentation/documentation/uikit/uistoryboard
 */
interface UIStoryboard extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uistoryboard/1616213-instantiateinitialviewcontroller
  instantiateInitialViewController():cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uistoryboard/3173165-instantiateinitialviewcontroller
  instantiateInitialViewControllerWithCreator(block: cocoascript.UIStoryboardViewControllerCreator):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uistoryboard/1616214-instantiateviewcontrollerwithide
  instantiateViewControllerWithIdentifier(identifier: cocoascript.NSString):cocoascript.UIViewController;
  // doc://com.apple.documentation/documentation/uikit/uistoryboard/3173166-instantiateviewcontrollerwithide
  instantiateViewControllerWithIdentifier_creator(identifier: cocoascript.NSString, block: cocoascript.UIStoryboardViewControllerCreator):cocoascript.UIViewController;
  // 
  alloc():cocoascript.UIStoryboard;
  // 
  init():cocoascript.UIStoryboard;
}
}
declare const UIStoryboard: cocoascript.UIStoryboard;

