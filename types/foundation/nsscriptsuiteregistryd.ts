declare namespace cocoascript {
/**
 * The top-level repository of scriptability information for an app at runtime.
 * doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry
 */
interface NSScriptSuiteRegistry extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1415178-suiteforappleeventcode
  suiteForAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1414452-suitenames
  suiteNames(): cocoascript.NSString;
  setSuiteNames(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1414328-classdescriptionsinsuite
  classDescriptionsInSuite(suiteName: cocoascript.NSString):cocoascript.NSScriptClassDescription;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1411184-classdescriptionwithappleeventco
  classDescriptionWithAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.NSScriptClassDescription;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1412869-registerclassdescription
  registerClassDescription(classDescription: cocoascript.NSScriptClassDescription):void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1416396-commanddescriptionsinsuite
  commandDescriptionsInSuite(suiteName: cocoascript.NSString):cocoascript.NSScriptCommandDescription;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1416734-commanddescriptionwithappleevent
  commandDescriptionWithAppleEventClass_andAppleEventCode(appleEventClassCode: cocoascript.FourCharCode, appleEventIDCode: cocoascript.FourCharCode):cocoascript.NSScriptCommandDescription;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1408858-registercommanddescription
  registerCommandDescription(commandDescription: cocoascript.NSScriptCommandDescription):void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1409186-aeteresource
  aeteResource(languageName: cocoascript.NSString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1412492-appleeventcodeforsuite
  appleEventCodeForSuite(suiteName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1414868-bundleforsuite
  bundleForSuite(suiteName: cocoascript.NSString):cocoascript.NSBundle;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1413397-loadsuitewithdictionary
  loadSuiteWithDictionary_fromBundle(suiteDeclaration: cocoascript.NSDictionary, bundle: cocoascript.NSBundle):void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptsuiteregistry/1410575-loadsuitesfrombundle
  loadSuitesFromBundle(bundle: cocoascript.NSBundle):void;
  // 
  alloc():cocoascript.NSScriptSuiteRegistry;
  // 
  init():cocoascript.NSScriptSuiteRegistry;
}
}
declare const NSScriptSuiteRegistry: cocoascript.NSScriptSuiteRegistry;

