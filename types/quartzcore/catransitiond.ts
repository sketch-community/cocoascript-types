declare namespace cocoascript {
/**
 * An object that provides an animated transition between a layer's states.
 * doc://com.apple.documentation/documentation/quartzcore/catransition
 */
interface CATransition extends CAAnimation {
  // doc://com.apple.documentation/documentation/quartzcore/catransition/1412511-startprogress
  startProgress(): number;
  setStartProgress(): void;
  // doc://com.apple.documentation/documentation/quartzcore/catransition/1412509-endprogress
  endProgress(): number;
  setEndProgress(): void;
  // doc://com.apple.documentation/documentation/quartzcore/catransition/1412502-type
  type(): cocoascript.CATransitionType;
  setType(): void;
  // doc://com.apple.documentation/documentation/quartzcore/catransition/1412467-subtype
  subtype(): cocoascript.CATransitionSubtype;
  setSubtype(): void;
  // doc://com.apple.documentation/documentation/quartzcore/catransition/1412506-filter
  filter(): cocoascript.id;
  setFilter(): void;
  // 
  alloc():cocoascript.CATransition;
  // 
  init():cocoascript.CATransition;
}
}
declare const CATransition: cocoascript.CATransition;

