declare namespace cocoascript {
/**
 * An object that defines a shortcut and its relevance to the user.
 * doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut
 */
interface INRelevantShortcut extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993343-initwithshortcut
  initWithShortcut(shortcut: cocoascript.INShortcut):cocoascript.INRelevantShortcut;
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993345-shortcut
  shortcut(): cocoascript.INShortcut;
  setShortcut(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/3017321-shortcutrole
  shortcutRole(): cocoascript.INRelevantShortcutRole;
  setShortcutRole(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993344-relevanceproviders
  relevanceProviders(): cocoascript.INRelevanceProvider;
  setRelevanceProviders(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993346-watchtemplate
  watchTemplate(): cocoascript.INDefaultCardTemplate;
  setWatchTemplate(): void;
  // 
  alloc():cocoascript.INRelevantShortcut;
  // 
  init():cocoascript.INRelevantShortcut;
}
}
declare const INRelevantShortcut: cocoascript.INRelevantShortcut;

