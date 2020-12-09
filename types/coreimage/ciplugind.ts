declare namespace cocoascript {
/**
 * The mechanism for loading image units in macOS. 
 * doc://com.apple.documentation/documentation/coreimage/ciplugin
 */
interface CIPlugIn extends NSObject {
  // 
  alloc():cocoascript.CIPlugIn;
  // 
  init():cocoascript.CIPlugIn;
}
}
declare const CIPlugIn: cocoascript.CIPlugIn;

