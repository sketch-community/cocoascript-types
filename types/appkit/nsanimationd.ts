declare namespace cocoascript {
/**
 * An object that manages the timing and progress of animations in the user interface.
 * doc://com.apple.documentation/documentation/appkit/nsanimation
 */
interface NSAnimation extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1530069-initwithduration
  initWithDuration_animationCurve(duration: cocoascript.NSTimeInterval, animationCurve: cocoascript.NSAnimationCurve):cocoascript.NSAnimation;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1533725-animationblockingmode
  animationBlockingMode(): cocoascript.NSAnimationBlockingMode;
  setAnimationBlockingMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1526965-runloopmodesforanimating
  runLoopModesForAnimating(): cocoascript.NSRunLoopMode;
  setRunLoopModesForAnimating(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1535321-animationcurve
  animationCurve(): cocoascript.NSAnimationCurve;
  setAnimationCurve(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1535110-duration
  duration(): cocoascript.NSTimeInterval;
  setDuration(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1526694-framerate
  frameRate(): number;
  setFrameRate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1524439-delegate
  delegate(): cocoascript.NSAnimationDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1529209-startanimation
  startAnimation():void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1528672-stopanimation
  stopAnimation():void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1527492-animating
  animating(): cocoascript.BOOL;
  setAnimating(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1530843-currentprogress
  currentProgress(): cocoascript.NSAnimationProgress;
  setCurrentProgress(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1531043-currentvalue
  currentValue(): number;
  setCurrentValue(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1526360-addprogressmark
  addProgressMark(progressMark: cocoascript.NSAnimationProgress):void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1528288-removeprogressmark
  removeProgressMark(progressMark: cocoascript.NSAnimationProgress):void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1533642-progressmarks
  progressMarks(): cocoascript.NSNumber;
  setProgressMarks(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1526774-startwhenanimation
  startWhenAnimation_reachesProgress(animation: cocoascript.NSAnimation, startProgress: cocoascript.NSAnimationProgress):void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1530363-stopwhenanimation
  stopWhenAnimation_reachesProgress(animation: cocoascript.NSAnimation, stopProgress: cocoascript.NSAnimationProgress):void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1535932-clearstartanimation
  clearStartAnimation():void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1524448-clearstopanimation
  clearStopAnimation():void;
  // doc://com.apple.documentation/documentation/appkit/nsanimationprogressmarknotification
  NSAnimationProgressMarkNotification(): cocoascript.NSNotificationName;
  setNSAnimationProgressMarkNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsanimation/1643460-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSAnimation;
  // 
  alloc():cocoascript.NSAnimation;
  // 
  init():cocoascript.NSAnimation;
}
}
declare const NSAnimation: cocoascript.NSAnimation;

