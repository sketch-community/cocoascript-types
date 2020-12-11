declare namespace cocoascript {
  /**
   * An object to check a string (usually the text of a document) for misspelled words.
   * doc://com.apple.documentation/documentation/uikit/uitextchecker
   */
  interface UITextChecker extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextchecker/1621029-rangeofmisspelledwordinstring
    rangeOfMisspelledWordInString_range_startingAt_wrap_language(stringToCheck: cocoascript.NSString, range: cocoascript.NSRange, startingOffset: cocoascript.NSInteger, wrapFlag: cocoascript.BOOL, language: cocoascript.NSString):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/uikit/uitextchecker/1621037-guessesforwordrange
    guessesForWordRange_inString_language(range: cocoascript.NSRange, string: cocoascript.NSString, language: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uitextchecker/1621034-completionsforpartialwordrange
    completionsForPartialWordRange_inString_language(range: cocoascript.NSRange, string: cocoascript.NSString, language: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uitextchecker/1621031-ignoreword
    ignoreWord(wordToIgnore: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uitextchecker/1621032-ignoredwords
    ignoredWords(): cocoascript.NSString;
    setIgnoredWords(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextchecker/1621033-availablelanguages
    availableLanguages(): cocoascript.NSString;
    setAvailableLanguages(): void;
    //
    alloc():cocoascript.UITextChecker;
    //
    init():cocoascript.UITextChecker;
  }
}

declare const UITextChecker: cocoascript.UITextChecker;
