declare namespace cocoascript {
/**
 * An abstract superclass for defining motion-based modifiers for views. 
 * doc://com.apple.documentation/documentation/uikit/uimotioneffect
 */
interface UIMotionEffect extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uimotioneffect/1622375-init
  init():cocoascript.UIMotionEffect;
  // doc://com.apple.documentation/documentation/uikit/uimotioneffect/1622371-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIMotionEffect;
  // doc://com.apple.documentation/documentation/uikit/uimotioneffect/1622380-keypathsandrelativevaluesforview
  keyPathsAndRelativeValuesForViewerOffset(viewerOffset: cocoascript.UIOffset):cocoascript.UIMotionEffect;
  // 
  alloc():cocoascript.UIMotionEffect;
  // 
  init():cocoascript.UIMotionEffect;
}
}
declare const UIMotionEffect: cocoascript.UIMotionEffect;

