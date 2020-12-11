declare namespace cocoascript {
  /**
   * The entry point for an Intents extension.
   * doc://com.apple.documentation/documentation/sirikit/inextension
   */
  interface INExtension extends NSObject {
    //
    alloc():cocoascript.INExtension;
    //
    init():cocoascript.INExtension;
  }
}

declare const INExtension: cocoascript.INExtension;
