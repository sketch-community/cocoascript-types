declare namespace cocoascript {
/**
 * A scriptable class that a macOS app supports.
 * doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription
 */
interface NSScriptClassDescription extends NSClassDescription {
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1410370-initwithsuitename
  initWithSuiteName_className_dictionary(suiteName: cocoascript.NSString, className: cocoascript.NSString, classDeclaration: cocoascript.NSDictionary):cocoascript.NSScriptClassDescription;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1407343-classdescriptionforkey
  classDescriptionForKey(key: cocoascript.NSString):cocoascript.NSScriptClassDescription;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1416243-superclassdescription
  superclassDescription(): cocoascript.NSScriptClassDescription;
  setSuperclassDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1418029-classname
  className(): cocoascript.NSString;
  setClassName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1410261-defaultsubcontainerattributekey
  defaultSubcontainerAttributeKey(): cocoascript.NSString;
  setDefaultSubcontainerAttributeKey(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1409575-implementationclassname
  implementationClassName(): cocoascript.NSString;
  setImplementationClassName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1416531-islocationrequiredtocreateforkey
  isLocationRequiredToCreateForKey(toManyRelationshipKey: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1410782-suitename
  suiteName(): cocoascript.NSString;
  setSuiteName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1414920-appleeventcode
  appleEventCode(): cocoascript.FourCharCode;
  setAppleEventCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1414657-appleeventcodeforkey
  appleEventCodeForKey(key: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411166-matchesappleeventcode
  matchesAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1413542-hasorderedtomanyrelationshipfork
  hasOrderedToManyRelationshipForKey(key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1407574-haspropertyforkey
  hasPropertyForKey(key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411467-hasreadablepropertyforkey
  hasReadablePropertyForKey(key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411935-haswritablepropertyforkey
  hasWritablePropertyForKey(key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1547649-isreadonlykey
  isReadOnlyKey(key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1415315-keywithappleeventcode
  keyWithAppleEventCode(appleEventCode: cocoascript.FourCharCode):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1417186-typeforkey
  typeForKey(key: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1409327-selectorforcommand
  selectorForCommand(commandDescription: cocoascript.NSScriptCommandDescription):cocoascript.SEL;
  // doc://com.apple.documentation/documentation/foundation/nsscriptclassdescription/1411902-supportscommand
  supportsCommand(commandDescription: cocoascript.NSScriptCommandDescription):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSScriptClassDescription;
  // 
  init():cocoascript.NSScriptClassDescription;
}
}
declare const NSScriptClassDescription: cocoascript.NSScriptClassDescription;

