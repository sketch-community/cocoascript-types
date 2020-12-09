declare namespace cocoascript {
/**
 * Retrieve the user's shortcuts and make shortcut suggestions.
 * doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter
 */
interface INVoiceShortcutCenter extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2963093-sharedcenter
  sharedCenter(): cocoascript.INVoiceShortcutCenter;
  setSharedCenter(): void;
  // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2963091-getallvoiceshortcutswithcompleti
  getAllVoiceShortcutsWithCompletion(completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2963092-getvoiceshortcutwithidentifier
  getVoiceShortcutWithIdentifier_completion(identifier: cocoascript.NSUUID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2994364-setshortcutsuggestions
  setShortcutSuggestions(suggestions: cocoascript.INShortcut):void;
  // 
  alloc():cocoascript.INVoiceShortcutCenter;
  // 
  init():cocoascript.INVoiceShortcutCenter;
}
}
declare const INVoiceShortcutCenter: cocoascript.INVoiceShortcutCenter;

