declare namespace cocoascript {
/**
 * An object that saves relevant shortcuts.
 * doc://com.apple.documentation/documentation/sirikit/inrelevantshortcutstore
 */
interface INRelevantShortcutStore extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcutstore/2993348-defaultstore
  defaultStore(): cocoascript.INRelevantShortcutStore;
  setDefaultStore(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcutstore/2993349-setrelevantshortcuts
  setRelevantShortcuts_completionHandler(shortcuts: cocoascript.INRelevantShortcut, completionHandler: cocoascript.NSError):void;
  // 
  alloc():cocoascript.INRelevantShortcutStore;
  // 
  init():cocoascript.INRelevantShortcutStore;
}
}
declare const INRelevantShortcutStore: cocoascript.INRelevantShortcutStore;

