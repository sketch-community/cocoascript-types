declare namespace cocoascript {
/**
 * The primary view controller for a custom keyboard app extension. 
 * doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller
 */
interface UIInputViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/1618192-inputview
  inputView(): cocoascript.UIInputView;
  setInputView(): void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/1618191-advancetonextinputmode
  advanceToNextInputMode():void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/1618196-dismisskeyboard
  dismissKeyboard():void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/1649584-handleinputmodelistfromview
  handleInputModeListFromView_withEvent(view: cocoascript.UIView, event: cocoascript.UIEvent):void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/1618193-textdocumentproxy
  textDocumentProxy(): cocoascript.UITextDocumentProxy;
  setTextDocumentProxy(): void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/1618195-requestsupplementarylexiconwithc
  requestSupplementaryLexiconWithCompletion(completionHandler: cocoascript.UILexicon):void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/1618200-primarylanguage
  primaryLanguage(): cocoascript.NSString;
  setPrimaryLanguage(): void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/2875741-needsinputmodeswitchkey
  needsInputModeSwitchKey(): cocoascript.BOOL;
  setNeedsInputModeSwitchKey(): void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/2875763-hasfullaccess
  hasFullAccess(): cocoascript.BOOL;
  setHasFullAccess(): void;
  // doc://com.apple.documentation/documentation/uikit/uiinputviewcontroller/2932195-hasdictationkey
  hasDictationKey(): cocoascript.BOOL;
  setHasDictationKey(): void;
  // 
  alloc():cocoascript.UIInputViewController;
  // 
  init():cocoascript.UIInputViewController;
}
}
declare const UIInputViewController: cocoascript.UIInputViewController;

