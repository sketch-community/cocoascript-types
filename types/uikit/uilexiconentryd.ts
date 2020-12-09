declare namespace cocoascript {
/**
 * A read-only term pair, available within a lexicon object, for a custom keyboard.
 * doc://com.apple.documentation/documentation/uikit/uilexiconentry
 */
interface UILexiconEntry extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uilexiconentry/1614130-documenttext
  documentText(): cocoascript.NSString;
  setDocumentText(): void;
  // doc://com.apple.documentation/documentation/uikit/uilexiconentry/1614132-userinput
  userInput(): cocoascript.NSString;
  setUserInput(): void;
  // 
  alloc():cocoascript.UILexiconEntry;
  // 
  init():cocoascript.UILexiconEntry;
}
}
declare const UILexiconEntry: cocoascript.UILexiconEntry;

