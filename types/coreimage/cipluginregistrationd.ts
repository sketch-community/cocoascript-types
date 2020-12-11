declare namespace cocoascript {
  /**
   * The interface for loading Core Image image units.
   * doc://com.apple.documentation/documentation/coreimage/cipluginregistration
   */
  interface CIPlugInRegistration {
    // doc://com.apple.documentation/documentation/coreimage/cipluginregistration/1437823-load
    load(host: void):cocoascript.BOOL;
  }
}
