declare namespace cocoascript {
/**
 * An abstract class used to represent natural language expressions.
 * doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier
 */
interface NSScriptObjectSpecifier extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1410480-initwithcontainerclassdescriptio
  initWithContainerClassDescription_containerSpecifier_key(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString):cocoascript.NSScriptObjectSpecifier;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1409384-initwithcontainerspecifier
  initWithContainerSpecifier_key(container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString):cocoascript.NSScriptObjectSpecifier;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1415107-indicesofobjectsbyevaluatingwith
  indicesOfObjectsByEvaluatingWithContainer_count(container: cocoascript.NSScriptObjectSpecifier, count: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1413391-objectsbyevaluatingspecifier
  objectsByEvaluatingSpecifier(): cocoascript.id;
  setObjectsByEvaluatingSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1409842-objectsbyevaluatingwithcontainer
  objectsByEvaluatingWithContainers(containers: cocoascript.NSScriptObjectSpecifier):cocoascript.NSScriptObjectSpecifier;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1413179-containerclassdescription
  containerClassDescription(): cocoascript.NSScriptClassDescription;
  setContainerClassDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1410887-containerisobjectbeingtested
  containerIsObjectBeingTested(): cocoascript.BOOL;
  setContainerIsObjectBeingTested(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1416507-containerisrangecontainerobject
  containerIsRangeContainerObject(): cocoascript.BOOL;
  setContainerIsRangeContainerObject(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1414424-containerspecifier
  containerSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setContainerSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1409882-childspecifier
  childSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setChildSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1412986-key
  key(): cocoascript.NSString;
  setKey(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1417974-keyclassdescription
  keyClassDescription(): cocoascript.NSScriptClassDescription;
  setKeyClassDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1416385-evaluationerrorspecifier
  evaluationErrorSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setEvaluationErrorSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1416938-evaluationerrornumber
  evaluationErrorNumber(): cocoascript.NSInteger;
  setEvaluationErrorNumber(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1410018-descriptor
  descriptor(): cocoascript.NSAppleEventDescriptor;
  setDescriptor(): void;
  // doc://com.apple.documentation/documentation/foundation/nsscriptobjectspecifier/1408941-initwithcoder
  initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSScriptObjectSpecifier;
  // 
  alloc():cocoascript.NSScriptObjectSpecifier;
  // 
  init():cocoascript.NSScriptObjectSpecifier;
}
}
declare const NSScriptObjectSpecifier: cocoascript.NSScriptObjectSpecifier;

