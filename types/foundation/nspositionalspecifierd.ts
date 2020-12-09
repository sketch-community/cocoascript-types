declare namespace cocoascript {
/**
 * A specifier for an insertion point in a container relative to another object in the container.
 * doc://com.apple.documentation/documentation/foundation/nspositionalspecifier
 */
interface NSPositionalSpecifier extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1416546-initwithposition
  initWithPosition_objectSpecifier(position: cocoascript.NSInsertionPosition, specifier: cocoascript.NSScriptObjectSpecifier):cocoascript.NSPositionalSpecifier;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414957-insertioncontainer
  insertionContainer(): cocoascript.id;
  setInsertionContainer(): void;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414703-insertionindex
  insertionIndex(): cocoascript.NSInteger;
  setInsertionIndex(): void;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414059-insertionkey
  insertionKey(): cocoascript.NSString;
  setInsertionKey(): void;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1411646-insertionreplaces
  insertionReplaces(): cocoascript.BOOL;
  setInsertionReplaces(): void;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1412839-objectspecifier
  objectSpecifier(): cocoascript.NSScriptObjectSpecifier;
  setObjectSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1413865-position
  position(): cocoascript.NSInsertionPosition;
  setPosition(): void;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1414707-setinsertionclassdescription
  setInsertionClassDescription(classDescription: cocoascript.NSScriptClassDescription):void;
  // doc://com.apple.documentation/documentation/foundation/nspositionalspecifier/1417035-evaluate
  evaluate():void;
  // 
  alloc():cocoascript.NSPositionalSpecifier;
  // 
  init():cocoascript.NSPositionalSpecifier;
}
}
declare const NSPositionalSpecifier: cocoascript.NSPositionalSpecifier;

