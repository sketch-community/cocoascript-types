declare namespace cocoascript {
/**
 * An object that provides user information to Siri.
 * doc://com.apple.documentation/documentation/sirikit/inusercontext
 */
interface INUserContext extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inusercontext/3197613-becomecurrent
  becomeCurrent():void;
  // 
  alloc():cocoascript.INUserContext;
  // 
  init():cocoascript.INUserContext;
}
}
declare const INUserContext: cocoascript.INUserContext;

