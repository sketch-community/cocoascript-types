declare namespace cocoascript {
/**
 * An abstract subclass of 
 * doc://com.apple.documentation/documentation/quartzcore/capropertyanimation
 */
interface CAPropertyAnimation extends CAAnimation {
  // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412496-keypath
  keyPath(): cocoascript.NSString;
  setKeyPath(): void;
  // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412538-cumulative
  cumulative(): cocoascript.BOOL;
  setCumulative(): void;
  // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412493-additive
  additive(): cocoascript.BOOL;
  setAdditive(): void;
  // doc://com.apple.documentation/documentation/quartzcore/capropertyanimation/1412447-valuefunction
  valueFunction(): cocoascript.CAValueFunction;
  setValueFunction(): void;
  // 
  alloc():cocoascript.CAPropertyAnimation;
  // 
  init():cocoascript.CAPropertyAnimation;
}
}
declare const CAPropertyAnimation: cocoascript.CAPropertyAnimation;

