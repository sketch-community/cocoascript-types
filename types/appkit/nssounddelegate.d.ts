declare namespace cocoascript {
  /**
   * A set of optional methods implemented by delegates of
   * doc://com.apple.documentation/documentation/appkit/nssounddelegate
   */
  interface NSSoundDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nssounddelegate/1477298-sound
    sound_didFinishPlaying(sound: cocoascript.NSSound, flag: cocoascript.BOOL):void;
  }
}
