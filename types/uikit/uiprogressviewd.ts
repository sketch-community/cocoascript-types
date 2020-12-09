declare namespace cocoascript {
/**
 * A view that depicts the progress of a task over time.
 * doc://com.apple.documentation/documentation/uikit/uiprogressview
 */
interface UIProgressView extends UIView {
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619833-initwithprogressviewstyle
  initWithProgressViewStyle(style: cocoascript.UIProgressViewStyle):cocoascript.UIProgressView;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619842-initwithframe
  initWithFrame(frame: cocoascript.CGRect):cocoascript.UIProgressView;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619839-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIProgressView;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619844-progress
  progress(): number;
  setProgress(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619846-setprogress
  setProgress_animated(progress: number, animated: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619840-observedprogress
  observedProgress(): cocoascript.NSProgress;
  setObservedProgress(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619845-progressviewstyle
  progressViewStyle(): cocoascript.UIProgressViewStyle;
  setProgressViewStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619836-progresstintcolor
  progressTintColor(): cocoascript.UIColor;
  setProgressTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619837-progressimage
  progressImage(): cocoascript.UIImage;
  setProgressImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619841-tracktintcolor
  trackTintColor(): cocoascript.UIColor;
  setTrackTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uiprogressview/1619843-trackimage
  trackImage(): cocoascript.UIImage;
  setTrackImage(): void;
  // 
  alloc():cocoascript.UIProgressView;
  // 
  init():cocoascript.UIProgressView;
}
}
declare const UIProgressView: cocoascript.UIProgressView;

