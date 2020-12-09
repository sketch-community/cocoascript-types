declare namespace cocoascript {
/**
 * Analyze natural language text to tag part of speech and lexical class, identify names, perform lemmatization, and determine the language and script.
 * doc://com.apple.documentation/documentation/foundation/nslinguistictagger
 */
interface NSLinguisticTagger extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1414576-initwithtagschemes
  initWithTagSchemes_options(tagSchemes: cocoascript.NSLinguisticTagScheme, opts: cocoascript.NSUInteger):cocoascript.NSLinguisticTagger;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1407750-string
  string(): cocoascript.NSString;
  setString(): void;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1409018-tagschemes
  tagSchemes(): cocoascript.NSLinguisticTagScheme;
  setTagSchemes(): void;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875112-dominantlanguage
  dominantLanguage(): cocoascript.NSString;
  setDominantLanguage(): void;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1415566-orthographyatindex
  orthographyAtIndex_effectiveRange(charIndex: cocoascript.NSUInteger, effectiveRange: cocoascript.NSRangePointer):cocoascript.NSOrthography;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1409101-setorthography
  setOrthography_range(orthography: cocoascript.NSOrthography, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875124-enumeratetagsinrange
  enumerateTagsInRange_unit_scheme_options_usingBlock(range: cocoascript.NSRange, unit: cocoascript.NSLinguisticTaggerUnit, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1410036-enumeratetagsinrange
  enumerateTagsInRange_scheme_options_usingBlock(range: cocoascript.NSRange, tagScheme: cocoascript.NSLinguisticTagScheme, opts: cocoascript.NSLinguisticTaggerOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875123-tagatindex
  tagAtIndex_unit_scheme_tokenRange(charIndex: cocoascript.NSUInteger, unit: cocoascript.NSLinguisticTaggerUnit, scheme: cocoascript.NSLinguisticTagScheme, tokenRange: cocoascript.NSRangePointer):cocoascript.NSLinguisticTag;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1411834-tagatindex
  tagAtIndex_scheme_tokenRange_sentenceRange(charIndex: cocoascript.NSUInteger, scheme: cocoascript.NSLinguisticTagScheme, tokenRange: cocoascript.NSRangePointer, sentenceRange: cocoascript.NSRangePointer):cocoascript.NSLinguisticTag;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875120-tagsinrange
  tagsInRange_unit_scheme_options_tokenRanges(range: cocoascript.NSRange, unit: cocoascript.NSLinguisticTaggerUnit, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, tokenRanges: cocoascript._Nullable):cocoascript.NSLinguisticTag;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1417826-tagsinrange
  tagsInRange_scheme_options_tokenRanges(range: cocoascript.NSRange, tagScheme: cocoascript.NSString, opts: cocoascript.NSLinguisticTaggerOptions, tokenRanges: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/2875122-tokenrangeatindex
  tokenRangeAtIndex_unit(charIndex: cocoascript.NSUInteger, unit: cocoascript.NSLinguisticTaggerUnit):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1415532-sentencerangeforrange
  sentenceRangeForRange(range: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1408537-possibletagsatindex
  possibleTagsAtIndex_scheme_tokenRange_sentenceRange_scores(charIndex: cocoascript.NSUInteger, tagScheme: cocoascript.NSString, tokenRange: cocoascript.NSRangePointer, sentenceRange: cocoascript.NSRangePointer, scores: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslinguistictagger/1417623-stringeditedinrange
  stringEditedInRange_changeInLength(newRange: cocoascript.NSRange, delta: cocoascript.NSInteger):void;
  // 
  alloc():cocoascript.NSLinguisticTagger;
  // 
  init():cocoascript.NSLinguisticTagger;
}
}
declare const NSLinguisticTagger: cocoascript.NSLinguisticTagger;

