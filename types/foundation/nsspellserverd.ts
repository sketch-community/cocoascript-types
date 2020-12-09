declare namespace cocoascript {
/**
 * A server that your app uses to provide a spell checker service to other apps running in the system.
 * doc://com.apple.documentation/documentation/foundation/nsspellserver
 */
interface NSSpellServer extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsspellserver/1414240-delegate
  delegate(): cocoascript.NSSpellServerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsspellserver/1411187-registerlanguage
  registerLanguage_byVendor(language: cocoascript.NSString, vendor: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsspellserver/1414343-run
  run():void;
  // doc://com.apple.documentation/documentation/foundation/nsspellserver/1412254-iswordinuserdictionaries
  isWordInUserDictionaries_caseSensitive(word: cocoascript.NSString, flag: cocoascript.BOOL):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSSpellServer;
  // 
  init():cocoascript.NSSpellServer;
}
}
declare const NSSpellServer: cocoascript.NSSpellServer;

