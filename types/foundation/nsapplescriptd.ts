declare namespace cocoascript {
/**
 * An object that provides the ability to load, compile, and execute scripts.
 * doc://com.apple.documentation/documentation/foundation/nsapplescript
 */
interface NSAppleScript extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1412508-initwithcontentsofurl
  initWithContentsOfURL_error(url: cocoascript.NSURL, errorInfo: cocoascript._Nullable):cocoascript.NSAppleScript;
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1414313-initwithsource
  initWithSource(source: cocoascript.NSString):cocoascript.NSAppleScript;
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1410407-compiled
  compiled(): cocoascript.BOOL;
  setCompiled(): void;
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1408453-source
  source(): cocoascript.NSString;
  setSource(): void;
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1407582-compileandreturnerror
  compileAndReturnError(errorInfo: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1410034-executeandreturnerror
  executeAndReturnError(errorInfo: cocoascript._Nullable):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1410807-executeappleevent
  executeAppleEvent_error(event: cocoascript.NSAppleEventDescriptor, errorInfo: cocoascript._Nullable):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsapplescript/1387495-richtextsource
  richTextSource(): cocoascript.NSAttributedString;
  setRichTextSource(): void;
  // 
  alloc():cocoascript.NSAppleScript;
  // 
  init():cocoascript.NSAppleScript;
}
}
declare const NSAppleScript: cocoascript.NSAppleScript;

