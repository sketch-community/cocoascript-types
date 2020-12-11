declare namespace cocoascript {
  /**
   * A script command that a macOS app supports.
   * doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription
   */
  interface NSScriptCommandDescription extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1410038-initwithsuitename
    initWithSuiteName_commandName_dictionary(suiteName: cocoascript.NSString, commandName: cocoascript.NSString, commandDeclaration: cocoascript.NSDictionary):cocoascript.NSScriptCommandDescription;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1416191-appleeventclasscode
    appleEventClassCode(): cocoascript.FourCharCode;
    setAppleEventClassCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1408972-appleeventcode
    appleEventCode(): cocoascript.FourCharCode;
    setAppleEventCode(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1417478-commandclassname
    commandClassName(): cocoascript.NSString;
    setCommandClassName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1407512-commandname
    commandName(): cocoascript.NSString;
    setCommandName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1413657-suitename
    suiteName(): cocoascript.NSString;
    setSuiteName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1414752-appleeventcodeforargumentwithnam
    appleEventCodeForArgumentWithName(argumentName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1409125-argumentnames
    argumentNames(): cocoascript.NSString;
    setArgumentNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1415798-isoptionalargumentwithname
    isOptionalArgumentWithName(argumentName: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1416163-typeforargumentwithname
    typeForArgumentWithName(argumentName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1408166-appleeventcodeforreturntype
    appleEventCodeForReturnType(): cocoascript.FourCharCode;
    setAppleEventCodeForReturnType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1410754-returntype
    returnType(): cocoascript.NSString;
    setReturnType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1418415-createcommandinstance
    createCommandInstance():cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1413755-createcommandinstancewithzone
    createCommandInstanceWithZone(zone: cocoascript.NSZone):cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommanddescription/1416525-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptCommandDescription;
    //
    alloc():cocoascript.NSScriptCommandDescription;
    //
    init():cocoascript.NSScriptCommandDescription;
  }
}

declare const NSScriptCommandDescription: cocoascript.NSScriptCommandDescription;
