declare namespace cocoascript {
/**
 * An object that provides basic, single-keyframe animation capabilities for a layer property. 
 * doc://com.apple.documentation/documentation/quartzcore/cabasicanimation
 */
interface CABasicAnimation extends CAPropertyAnimation {
  // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412519-fromvalue
  fromValue(): cocoascript.id;
  setFromValue(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412523-tovalue
  toValue(): cocoascript.id;
  setToValue(): void;
  // doc://com.apple.documentation/documentation/quartzcore/cabasicanimation/1412445-byvalue
  byValue(): cocoascript.id;
  setByValue(): void;
  // 
  alloc():cocoascript.CABasicAnimation;
  // 
  init():cocoascript.CABasicAnimation;
}
}
declare const CABasicAnimation: cocoascript.CABasicAnimation;

