declare namespace cocoascript {
  /**
   * The protocol an object implements to receive notifications from the Siri Shortcut button.
   * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate
   */
  interface INUIAddVoiceShortcutButtonDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate/3024517-presentaddvoiceshortcutviewcontr
    presentAddVoiceShortcutViewController_forAddVoiceShortcutButton(addVoiceShortcutViewController: cocoascript.INUIAddVoiceShortcutViewController, addVoiceShortcutButton: cocoascript.INUIAddVoiceShortcutButton):void;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate/3024518-presenteditvoiceshortcutviewcont
    presentEditVoiceShortcutViewController_forAddVoiceShortcutButton(editVoiceShortcutViewController: cocoascript.INUIEditVoiceShortcutViewController, addVoiceShortcutButton: cocoascript.INUIAddVoiceShortcutButton):void;
  }
}
