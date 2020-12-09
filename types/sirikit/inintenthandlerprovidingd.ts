declare namespace cocoascript {
/**
 * The interface for dispatching intents to the custom objects that handle those intents. 
 * doc://com.apple.documentation/documentation/sirikit/inintenthandlerproviding
 */
interface INIntentHandlerProviding extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inintenthandlerproviding/1638898-handlerforintent
  handlerForIntent(intent: cocoascript.INIntent):cocoascript.INIntentHandlerProviding;
}
}

