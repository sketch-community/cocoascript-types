declare namespace cocoascript {
/**
 * An abstract class that provides decorative accessory views for selected and highlighted items within a scrubber control.
 * doc://com.apple.documentation/documentation/appkit/nsscrubberselectionstyle
 */
interface NSScrubberSelectionStyle extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsscrubberselectionstyle/2588266-outlineoverlaystyle
  outlineOverlayStyle(): cocoascript.NSScrubberSelectionStyle;
  setOutlineOverlayStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberselectionstyle/2588261-roundedbackgroundstyle
  roundedBackgroundStyle(): cocoascript.NSScrubberSelectionStyle;
  setRoundedBackgroundStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberselectionstyle/2588269-init
  init():cocoascript.NSScrubberSelectionStyle;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberselectionstyle/2588264-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSScrubberSelectionStyle;
  // doc://com.apple.documentation/documentation/appkit/nsscrubberselectionstyle/2588257-makeselectionview
  makeSelectionView():cocoascript.NSScrubberSelectionView;
  // 
  alloc():cocoascript.NSScrubberSelectionStyle;
  // 
  init():cocoascript.NSScrubberSelectionStyle;
}
}
declare const NSScrubberSelectionStyle: cocoascript.NSScrubberSelectionStyle;

