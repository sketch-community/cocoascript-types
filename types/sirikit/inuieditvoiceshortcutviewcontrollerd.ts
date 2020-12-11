declare namespace cocoascript {
  /**
   * A view controller that lets the user edit or remove an existing shortcut.
   * doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontroller
   */
  interface INUIEditVoiceShortcutViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontroller/2981853-initwithvoiceshortcut
    initWithVoiceShortcut(voiceShortcut: cocoascript.INVoiceShortcut):cocoascript.INUIEditVoiceShortcutViewController;
    // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontroller/2968473-delegate
    delegate(): cocoascript.INUIEditVoiceShortcutViewControllerDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.INUIEditVoiceShortcutViewController;
    //
    init():cocoascript.INUIEditVoiceShortcutViewController;
  }
}

declare const INUIEditVoiceShortcutViewController: cocoascript.INUIEditVoiceShortcutViewController;
