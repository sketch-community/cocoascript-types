declare namespace cocoascript {
/**
 * An interface to the Cocoa spell-checking service. 
 * doc://com.apple.documentation/documentation/appkit/nsspellchecker
 */
interface NSSpellChecker extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1529639-sharedspellchecker
  sharedSpellChecker(): cocoascript.NSSpellChecker;
  setSharedSpellChecker(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1535301-sharedspellcheckerexists
  sharedSpellCheckerExists(): cocoascript.BOOL;
  setSharedSpellCheckerExists(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1530496-availablelanguages
  availableLanguages(): cocoascript.NSString;
  setAvailableLanguages(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1525173-userpreferredlanguages
  userPreferredLanguages(): cocoascript.NSString;
  setUserPreferredLanguages(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1534335-automaticallyidentifieslanguages
  automaticallyIdentifiesLanguages(): cocoascript.BOOL;
  setAutomaticallyIdentifiesLanguages(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1535648-language
  language():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1532988-setlanguage
  setLanguage(language: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1532806-spellingpanel
  spellingPanel(): cocoascript.NSPanel;
  setSpellingPanel(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1534172-substitutionspanel
  substitutionsPanel(): cocoascript.NSPanel;
  setSubstitutionsPanel(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1525300-updatespellingpanelwithgrammarst
  updateSpellingPanelWithGrammarString_detail(string: cocoascript.NSString, detail: cocoascript.NSSpellChecker):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1531045-updatepanels
  updatePanels():void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1528160-accessoryview
  accessoryView(): cocoascript.NSView;
  setAccessoryView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1531645-substitutionspanelaccessoryviewc
  substitutionsPanelAccessoryViewController(): cocoascript.NSViewController;
  setSubstitutionsPanelAccessoryViewController(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1528008-countwordsinstring
  countWordsInString_language(stringToCount: cocoascript.NSString, language: cocoascript.NSString):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1532957-checkspellingofstring
  checkSpellingOfString_startingAt(stringToCheck: cocoascript.NSString, startingOffset: cocoascript.NSInteger):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1533574-checkspellingofstring
  checkSpellingOfString_startingAt_language_wrap_inSpellDocumentWithTag_wordCount(stringToCheck: cocoascript.NSString, startingOffset: cocoascript.NSInteger, language: cocoascript.NSString, wrapFlag: cocoascript.BOOL, tag: cocoascript.NSInteger, wordCount: cocoascript.NSInteger):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1557141-guessesforword
  guessesForWord(word: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1528441-checkgrammarofstring
  checkGrammarOfString_startingAt_language_wrap_inSpellDocumentWithTag_details(stringToCheck: cocoascript.NSString, startingOffset: cocoascript.NSInteger, language: cocoascript.NSString, wrapFlag: cocoascript.BOOL, tag: cocoascript.NSInteger, details: cocoascript._Nullable):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1535739-checkstring
  checkString_range_types_options_inSpellDocumentWithTag_orthography_wordCount(stringToCheck: cocoascript.NSString, range: cocoascript.NSRange, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSSpellChecker, tag: cocoascript.NSInteger, orthography: cocoascript._Nullable, wordCount: cocoascript.NSInteger):cocoascript.NSTextCheckingResult;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1526261-requestcheckingofstring
  requestCheckingOfString_range_types_options_inSpellDocumentWithTag_completionHandler(stringToCheck: cocoascript.NSString, range: cocoascript.NSRange, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSSpellChecker, tag: cocoascript.NSInteger, completionHandler: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1527419-guessesforwordrange
  guessesForWordRange_inString_language_inSpellDocumentWithTag(range: cocoascript.NSRange, string: cocoascript.NSString, language: cocoascript.NSString, tag: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1534066-closespelldocumentwithtag
  closeSpellDocumentWithTag(tag: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1531220-ignoreword
  ignoreWord_inSpellDocumentWithTag(wordToIgnore: cocoascript.NSString, tag: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1531488-ignoredwordsinspelldocumentwitht
  ignoredWordsInSpellDocumentWithTag(tag: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1535879-setignoredwords
  setIgnoredWords_inSpellDocumentWithTag(words: cocoascript.NSString, tag: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1526688-setwordfieldstringvalue
  setWordFieldStringValue(string: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1524852-updatespellingpanelwithmisspelle
  updateSpellingPanelWithMisspelledWord(word: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1531406-completionsforpartialwordrange
  completionsForPartialWordRange_inString_language_inSpellDocumentWithTag(range: cocoascript.NSRange, string: cocoascript.NSString, language: cocoascript.NSString, tag: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1527525-haslearnedword
  hasLearnedWord(word: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1525147-unlearnword
  unlearnWord(word: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1557140-forgetword
  forgetWord(word: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1534837-learnword
  learnWord(word: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1532171-userquotesarrayforlanguage
  userQuotesArrayForLanguage(language: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1524925-userreplacementsdictionary
  userReplacementsDictionary(): cocoascript.NSString;
  setUserReplacementsDictionary(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1531603-menuforresult
  menuForResult_string_options_atLocation_inView(result: cocoascript.NSTextCheckingResult, checkedString: cocoascript.NSString, options: cocoascript.NSSpellChecker, location: cocoascript.NSPoint, view: cocoascript.NSView):cocoascript.NSMenu;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1531542-correctionforwordrange
  correctionForWordRange_inString_language_inSpellDocumentWithTag(range: cocoascript.NSRange, string: cocoascript.NSString, language: cocoascript.NSString, tag: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1524316-showcorrectionindicatoroftype
  showCorrectionIndicatorOfType_primaryString_alternativeStrings_forStringInRect_view_completionHandler(type: cocoascript.NSCorrectionIndicatorType, primaryString: cocoascript.NSString, alternativeStrings: cocoascript.NSString, rectOfTypedString: cocoascript.NSRect, view: cocoascript.NSView, completionBlock: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1535568-recordresponse
  recordResponse_toCorrection_forWord_language_inSpellDocumentWithTag(response: cocoascript.NSCorrectionResponse, correction: cocoascript.NSString, word: cocoascript.NSString, language: cocoascript.NSString, tag: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1535527-dismisscorrectionindicatorforvie
  dismissCorrectionIndicatorForView(view: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2869583-automaticcapitalizationenabled
  automaticCapitalizationEnabled(): cocoascript.BOOL;
  setAutomaticCapitalizationEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2869577-automaticdashsubstitutionenabled
  automaticDashSubstitutionEnabled(): cocoascript.BOOL;
  setAutomaticDashSubstitutionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2869584-automaticperiodsubstitutionenabl
  automaticPeriodSubstitutionEnabled(): cocoascript.BOOL;
  setAutomaticPeriodSubstitutionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2869581-automaticquotesubstitutionenable
  automaticQuoteSubstitutionEnabled(): cocoascript.BOOL;
  setAutomaticQuoteSubstitutionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2869578-automaticspellingcorrectionenabl
  automaticSpellingCorrectionEnabled(): cocoascript.BOOL;
  setAutomaticSpellingCorrectionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2869580-automatictextcompletionenabled
  automaticTextCompletionEnabled(): cocoascript.BOOL;
  setAutomaticTextCompletionEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2869579-automatictextreplacementenabled
  automaticTextReplacementEnabled(): cocoascript.BOOL;
  setAutomaticTextReplacementEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2561001-deletesautospacebetweenstring
  deletesAutospaceBetweenString_andString_language(precedingString: cocoascript.NSString, followingString: cocoascript.NSString, language: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1530303-languageforwordrange
  languageForWordRange_inString_orthography(range: cocoascript.NSRange, string: cocoascript.NSString, orthography: cocoascript.NSOrthography):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/1792008-preventsautocorrectionbeforestri
  preventsAutocorrectionBeforeString_language(string: cocoascript.NSString, language: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsspellchecker/2560997-requestcandidatesforselectedrang
  requestCandidatesForSelectedRange_inString_types_options_inSpellDocumentWithTag_completionHandler(selectedRange: cocoascript.NSRange, stringToCheck: cocoascript.NSString, checkingTypes: cocoascript.NSTextCheckingTypes, options: cocoascript.NSSpellChecker, tag: cocoascript.NSInteger, completionHandler: cocoascript.NSTextCheckingResult):cocoascript.NSInteger;
  // 
  alloc():cocoascript.NSSpellChecker;
  // 
  init():cocoascript.NSSpellChecker;
}
}
declare const NSSpellChecker: cocoascript.NSSpellChecker;

