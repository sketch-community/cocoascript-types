declare namespace cocoascript {
  /**
   * A mechanism for converting one kind of scripting data to another.
   * doc://com.apple.documentation/documentation/foundation/nsscriptcoercionhandler
   */
  interface NSScriptCoercionHandler extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptcoercionhandler/1412034-coercevalue
    coerceValue_toClass(value: cocoascript.NSScriptCoercionHandler, toClass: cocoascript.Class):cocoascript.NSScriptCoercionHandler;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcoercionhandler/1413218-registercoercer
    registerCoercer_selector_toConvertFromClass_toClass(coercer: cocoascript.NSScriptCoercionHandler, selector: cocoascript.SEL, fromClass: cocoascript.Class, toClass: cocoascript.Class):void;
    //
    alloc():cocoascript.NSScriptCoercionHandler;
    //
    init():cocoascript.NSScriptCoercionHandler;
  }
}

declare const NSScriptCoercionHandler: cocoascript.NSScriptCoercionHandler;
