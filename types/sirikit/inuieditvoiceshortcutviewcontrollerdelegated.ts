declare namespace cocoascript {
/**
 * The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.
 * doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate
 */
interface INUIEditVoiceShortcutViewControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968477-editvoiceshortcutviewcontroller
  editVoiceShortcutViewController_didUpdateVoiceShortcut_error(controller: cocoascript.INUIEditVoiceShortcutViewController, voiceShortcut: cocoascript.INVoiceShortcut, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968476-editvoiceshortcutviewcontroller
  editVoiceShortcutViewController_didDeleteVoiceShortcutWithIdentifier(controller: cocoascript.INUIEditVoiceShortcutViewController, deletedVoiceShortcutIdentifier: cocoascript.NSUUID):void;
  // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968478-editvoiceshortcutviewcontrollerd
  editVoiceShortcutViewControllerDidCancel(controller: cocoascript.INUIEditVoiceShortcutViewController):void;
}
}

