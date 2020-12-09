declare namespace cocoascript {
/**
 * An animation of an app's views, limited to changes in frame location and size, and to fade-in and fade-out effects. 
 * doc://com.apple.documentation/documentation/appkit/nsviewanimation
 */
interface NSViewAnimation extends NSAnimation {
  // doc://com.apple.documentation/documentation/appkit/nsviewanimation/1531141-initwithviewanimations
  initWithViewAnimations(viewAnimations: cocoascript.NSViewAnimation):cocoascript.NSViewAnimation;
  // doc://com.apple.documentation/documentation/appkit/nsviewanimation/1527416-viewanimations
  viewAnimations(): cocoascript.id;
  setViewAnimations(): void;
  // 
  alloc():cocoascript.NSViewAnimation;
  // 
  init():cocoascript.NSViewAnimation;
}
}
declare const NSViewAnimation: cocoascript.NSViewAnimation;

