declare namespace cocoascript {
/**
 * Image data inside an Intents extension or Intents UI extension.
 * doc://com.apple.documentation/documentation/sirikit/inimage
 */
interface INImage extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inimage/2915857-fetchuiimagewithcompletion
  fetchUIImageWithCompletion(completion: cocoascript.UIImage):void;
  // 
  alloc():cocoascript.INImage;
  // 
  init():cocoascript.INImage;
}
}
declare const INImage: cocoascript.INImage;

