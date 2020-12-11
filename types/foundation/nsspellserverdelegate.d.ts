declare namespace cocoascript {
  /**
   * The optional methods implemented by the delegate of a spell server.
   * doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate
   */
  interface NSSpellServerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1409733-spellserver
    spellServer_checkString_offset_types_options_orthography_wordCount(sender: cocoascript.NSSpellServer, stringToCheck: cocoascript.NSString, offset: cocoascript.NSUInteger, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSSpellServerDelegate, orthography: cocoascript.NSOrthography, wordCount: cocoascript.NSInteger):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1410726-spellserver
    spellServer_suggestGuessesForWord_inLanguage(sender: cocoascript.NSSpellServer, word: cocoascript.NSString, language: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1409242-spellserver
    spellServer_checkGrammarInString_language_details(sender: cocoascript.NSSpellServer, stringToCheck: cocoascript.NSString, language: cocoascript.NSString, details: cocoascript._Nullable):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1413235-spellserver
    spellServer_findMisspelledWordInString_language_wordCount_countOnly(sender: cocoascript.NSSpellServer, stringToCheck: cocoascript.NSString, language: cocoascript.NSString, wordCount: cocoascript.NSInteger, countOnly: cocoascript.BOOL):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1417315-spellserver
    spellServer_didForgetWord_inLanguage(sender: cocoascript.NSSpellServer, word: cocoascript.NSString, language: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1407851-spellserver
    spellServer_didLearnWord_inLanguage(sender: cocoascript.NSSpellServer, word: cocoascript.NSString, language: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1414606-spellserver
    spellServer_suggestCompletionsForPartialWordRange_inString_language(sender: cocoascript.NSSpellServer, range: cocoascript.NSRange, string: cocoascript.NSString, language: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsspellserverdelegate/1412894-spellserver
    spellServer_recordResponse_toCorrection_forWord_language(sender: cocoascript.NSSpellServer, response: cocoascript.NSUInteger, correction: cocoascript.NSString, word: cocoascript.NSString, language: cocoascript.NSString):void;
  }
}
