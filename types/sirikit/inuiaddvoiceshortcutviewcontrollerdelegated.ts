declare namespace cocoascript {
/**
 * The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.
 * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate
 */
interface INUIAddVoiceShortcutViewControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate/2968470-addvoiceshortcutviewcontroller
  addVoiceShortcutViewController_didFinishWithVoiceShortcut_error(controller: cocoascript.INUIAddVoiceShortcutViewController, voiceShortcut: cocoascript.INVoiceShortcut, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate/2968471-addvoiceshortcutviewcontrollerdi
  addVoiceShortcutViewControllerDidCancel(controller: cocoascript.INUIAddVoiceShortcutViewController):void;
}
}

