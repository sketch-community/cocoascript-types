declare namespace cocoascript {
  /**
   * A self-contained scripting statement.
   * doc://com.apple.documentation/documentation/foundation/nsscriptcommand
   */
  interface NSScriptCommand extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413516-initwithcommanddescription
    initWithCommandDescription(commandDef: cocoascript.NSScriptCommandDescription):cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1415626-appleevent
    appleEvent(): cocoascript.NSAppleEventDescriptor;
    setAppleEvent(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1414780-executecommand
    executeCommand():cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413379-performdefaultimplementation
    performDefaultImplementation():cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1411257-evaluatedreceivers
    evaluatedReceivers(): cocoascript.id;
    setEvaluatedReceivers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417016-receiversspecifier
    receiversSpecifier(): cocoascript.NSScriptObjectSpecifier;
    setReceiversSpecifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1414071-arguments
    arguments(): cocoascript.id;
    setArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413335-evaluatedarguments
    evaluatedArguments(): cocoascript.id;
    setEvaluatedArguments(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1410675-directparameter
    directParameter(): cocoascript.id;
    setDirectParameter(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1407452-commanddescription
    commandDescription(): cocoascript.NSScriptCommandDescription;
    setCommandDescription(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1411714-scripterrorexpectedtypedescripto
    scriptErrorExpectedTypeDescriptor(): cocoascript.NSAppleEventDescriptor;
    setScriptErrorExpectedTypeDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1411484-scripterrornumber
    scriptErrorNumber(): cocoascript.NSInteger;
    setScriptErrorNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417217-scripterroroffendingobjectdescri
    scriptErrorOffendingObjectDescriptor(): cocoascript.NSAppleEventDescriptor;
    setScriptErrorOffendingObjectDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1414596-scripterrorstring
    scriptErrorString(): cocoascript.NSString;
    setScriptErrorString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417785-suspendexecution
    suspendExecution():void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1408227-resumeexecutionwithresult
    resumeExecutionWithResult(result: cocoascript.NSScriptCommand):void;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1417482-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptCommand;
    // doc://com.apple.documentation/documentation/foundation/nsscriptcommand/1413090-wellformed
    wellFormed(): cocoascript.BOOL;
    setWellFormed(): void;
    //
    alloc():cocoascript.NSScriptCommand;
    //
    init():cocoascript.NSScriptCommand;
  }
}

declare const NSScriptCommand: cocoascript.NSScriptCommand;
