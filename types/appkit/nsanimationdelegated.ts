declare namespace cocoascript {
/**
 * A set of optional methods implemented by delegates of 
 * doc://com.apple.documentation/documentation/appkit/nsanimationdelegate
 */
interface NSAnimationDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsanimationdelegate/1535871-animationdidend
  animationDidEnd(animation: cocoascript.NSAnimation):void;
  // doc://com.apple.documentation/documentation/appkit/nsanimationdelegate/1534155-animationdidstop
  animationDidStop(animation: cocoascript.NSAnimation):void;
  // doc://com.apple.documentation/documentation/appkit/nsanimationdelegate/1533279-animationshouldstart
  animationShouldStart(animation: cocoascript.NSAnimation):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsanimationdelegate/1528965-animation
  animation_valueForProgress(animation: cocoascript.NSAnimation, progress: cocoascript.NSAnimationProgress):number;
  // doc://com.apple.documentation/documentation/appkit/nsanimationdelegate/1535100-animation
  animation_didReachProgressMark(animation: cocoascript.NSAnimation, progress: cocoascript.NSAnimationProgress):void;
}
}

