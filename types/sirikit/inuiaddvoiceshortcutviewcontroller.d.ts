declare namespace cocoascript {
  /**
   * A view controller that guides the user through the steps for adding a shortcut to Siri.
   * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontroller
   */
  interface INUIAddVoiceShortcutViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontroller/2999415-initwithshortcut
    initWithShortcut(shortcut: cocoascript.INShortcut):cocoascript.INUIAddVoiceShortcutViewController;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontroller/2968467-delegate
    delegate(): cocoascript.INUIAddVoiceShortcutViewControllerDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.INUIAddVoiceShortcutViewController;
    //
    init():cocoascript.INUIAddVoiceShortcutViewController;
  }
}

declare const INUIAddVoiceShortcutViewController: cocoascript.INUIAddVoiceShortcutViewController;
