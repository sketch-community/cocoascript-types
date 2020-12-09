declare namespace cocoascript {
/**
 * An object that provides user information to Siri.
 * doc://com.apple.documentation/documentation/sirikit/inmediausercontext
 */
interface INMediaUserContext extends INUserContext {
  // doc://com.apple.documentation/documentation/sirikit/inmediausercontext/3197603-init
  init():cocoascript.INMediaUserContext;
  // doc://com.apple.documentation/documentation/sirikit/inmediausercontext/3197604-numberoflibraryitems
  numberOfLibraryItems(): cocoascript.NSNumber;
  setNumberOfLibraryItems(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmediausercontext/3197605-subscriptionstatus
  subscriptionStatus(): cocoascript.INMediaUserContextSubscriptionStatus;
  setSubscriptionStatus(): void;
  // 
  alloc():cocoascript.INMediaUserContext;
  // 
  init():cocoascript.INMediaUserContext;
}
}
declare const INMediaUserContext: cocoascript.INMediaUserContext;

