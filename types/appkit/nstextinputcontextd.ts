declare namespace cocoascript {
/**
 * An object that represents the Cocoa text input system. 
 * doc://com.apple.documentation/documentation/appkit/nstextinputcontext
 */
interface NSTextInputContext extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1532777-initwithclient
  initWithClient(client: cocoascript.NSTextInputClient):cocoascript.NSTextInputContext;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1527409-currentinputcontext
  currentInputContext(): cocoascript.NSTextInputContext;
  setCurrentInputContext(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1533583-client
  client(): cocoascript.NSTextInputClient;
  setClient(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1534420-acceptsglyphinfo
  acceptsGlyphInfo(): cocoascript.BOOL;
  setAcceptsGlyphInfo(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1532284-allowedinputsourcelocales
  allowedInputSourceLocales(): cocoascript.NSString;
  setAllowedInputSourceLocales(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1534378-activate
  activate():void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1535505-deactivate
  deactivate():void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1528602-handleevent
  handleEvent(event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1528752-discardmarkedtext
  discardMarkedText():void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1535165-invalidatecharactercoordinates
  invalidateCharacterCoordinates():void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1529156-keyboardinputsources
  keyboardInputSources(): cocoascript.NSTextInputSourceIdentifier;
  setKeyboardInputSources(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontext/1533970-selectedkeyboardinputsource
  selectedKeyboardInputSource(): cocoascript.NSTextInputSourceIdentifier;
  setSelectedKeyboardInputSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextinputcontextkeyboardselectiondidchangenotification
  NSTextInputContextKeyboardSelectionDidChangeNotification(): cocoascript.NSNotificationName;
  setNSTextInputContextKeyboardSelectionDidChangeNotification(): void;
  // 
  alloc():cocoascript.NSTextInputContext;
  // 
  init():cocoascript.NSTextInputContext;
}
}
declare const NSTextInputContext: cocoascript.NSTextInputContext;

