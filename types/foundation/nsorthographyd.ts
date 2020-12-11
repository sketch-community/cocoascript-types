declare namespace cocoascript {
  /**
   * A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
   * doc://com.apple.documentation/documentation/foundation/nsorthography
   */
  interface NSOrthography extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1408708-initwithdominantscript
    initWithDominantScript_languageMap(script: cocoascript.NSString, map: cocoascript.NSString):cocoascript.NSOrthography;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1409533-languagemap
    languageMap(): cocoascript.NSString;
    setLanguageMap(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1415229-dominantlanguage
    dominantLanguage(): cocoascript.NSString;
    setDominantLanguage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1407965-dominantscript
    dominantScript(): cocoascript.NSString;
    setDominantScript(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1407326-dominantlanguageforscript
    dominantLanguageForScript(script: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1412606-languagesforscript
    languagesForScript(script: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1410722-allscripts
    allScripts(): cocoascript.NSString;
    setAllScripts(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1416205-alllanguages
    allLanguages(): cocoascript.NSString;
    setAllLanguages(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorthography/1408410-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSOrthography;
    //
    alloc():cocoascript.NSOrthography;
    //
    init():cocoascript.NSOrthography;
  }
}

declare const NSOrthography: cocoascript.NSOrthography;
