declare namespace cocoascript {
/**
 * An animation that applies a spring-like force to a layer's properties. 
 * doc://com.apple.documentation/documentation/quartzcore/caspringanimation
 */
interface CASpringAnimation extends CABasicAnimation {
  // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412532-damping
  damping(): cocoascript.CGFloat;
  setDamping(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412443-initialvelocity
  initialVelocity(): cocoascript.CGFloat;
  setInitialVelocity(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412540-mass
  mass(): cocoascript.CGFloat;
  setMass(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412524-settlingduration
  settlingDuration(): cocoascript.CFTimeInterval;
  setSettlingDuration(): void;
  // doc://com.apple.documentation/documentation/quartzcore/caspringanimation/1412515-stiffness
  stiffness(): cocoascript.CGFloat;
  setStiffness(): void;
  // 
  alloc():cocoascript.CASpringAnimation;
  // 
  init():cocoascript.CASpringAnimation;
}
}
declare const CASpringAnimation: cocoascript.CASpringAnimation;

