declare namespace cocoascript {
  /**
   * An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
   * doc://com.apple.documentation/documentation/sirikit/inshortcut
   */
  interface INShortcut extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993351-initwithintent
    initWithIntent(intent: cocoascript.INIntent):cocoascript.INShortcut;
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993352-initwithuseractivity
    initWithUserActivity(userActivity: cocoascript.NSUserActivity):cocoascript.INShortcut;
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993353-intent
    intent(): cocoascript.INIntent;
    setIntent(): void;
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993354-useractivity
    userActivity(): cocoascript.NSUserActivity;
    setUserActivity(): void;
    //
    alloc():cocoascript.INShortcut;
    //
    init():cocoascript.INShortcut;
  }
}

declare const INShortcut: cocoascript.INShortcut;
