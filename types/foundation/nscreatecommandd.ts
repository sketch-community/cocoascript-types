declare namespace cocoascript {
/**
 * A command that creates a scriptable object.
 * doc://com.apple.documentation/documentation/foundation/nscreatecommand
 */
interface NSCreateCommand extends NSScriptCommand {
  // doc://com.apple.documentation/documentation/foundation/nscreatecommand/1413533-createclassdescription
  createClassDescription(): cocoascript.NSScriptClassDescription;
  setCreateClassDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nscreatecommand/1407639-resolvedkeydictionary
  resolvedKeyDictionary(): cocoascript.id;
  setResolvedKeyDictionary(): void;
  // 
  alloc():cocoascript.NSCreateCommand;
  // 
  init():cocoascript.NSCreateCommand;
}
}
declare const NSCreateCommand: cocoascript.NSCreateCommand;

