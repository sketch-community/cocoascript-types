declare namespace cocoascript {
  /**
   * A read-only array of term pairs, each in a lexicon entry object, for a custom keyboard.
   * doc://com.apple.documentation/documentation/uikit/uilexicon
   */
  interface UILexicon extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilexicon/1614133-entries
    entries(): cocoascript.UILexiconEntry;
    setEntries(): void;
    //
    alloc():cocoascript.UILexicon;
    //
    init():cocoascript.UILexicon;
  }
}

declare const UILexicon: cocoascript.UILexicon;
