declare namespace cocoascript {
/**
 * Information about linguistic, cultural, and technological conventions for use in formatting data for presentation. 
 * doc://com.apple.documentation/documentation/foundation/nslocale
 */
interface NSLocale extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nslocale/1414217-initwithlocaleidentifier
  initWithLocaleIdentifier(string: cocoascript.NSString):cocoascript.NSLocale;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1415424-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSLocale;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1414388-autoupdatingcurrentlocale
  autoupdatingCurrentLocale(): cocoascript.NSLocale;
  setAutoupdatingCurrentLocale(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1409990-currentlocale
  currentLocale(): cocoascript.NSLocale;
  setCurrentLocale(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1407691-systemlocale
  systemLocale(): cocoascript.NSLocale;
  setSystemLocale(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1410448-availablelocaleidentifiers
  availableLocaleIdentifiers(): cocoascript.NSString;
  setAvailableLocaleIdentifiers(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1413869-isocountrycodes
  ISOCountryCodes(): cocoascript.NSString;
  setISOCountryCodes(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1418015-isolanguagecodes
  ISOLanguageCodes(): cocoascript.NSString;
  setISOLanguageCodes(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1417834-isocurrencycodes
  ISOCurrencyCodes(): cocoascript.NSString;
  setISOCurrencyCodes(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1407272-commonisocurrencycodes
  commonISOCurrencyCodes(): cocoascript.NSString;
  setCommonISOCurrencyCodes(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1416263-localeidentifier
  localeIdentifier(): cocoascript.NSString;
  setLocaleIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643060-countrycode
  countryCode(): cocoascript.NSString;
  setCountryCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643026-languagecode
  languageCode(): cocoascript.NSString;
  setLanguageCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643213-scriptcode
  scriptCode(): cocoascript.NSString;
  setScriptCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643152-variantcode
  variantCode(): cocoascript.NSString;
  setVariantCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643019-exemplarcharacterset
  exemplarCharacterSet(): cocoascript.NSCharacterSet;
  setExemplarCharacterSet(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643092-collationidentifier
  collationIdentifier(): cocoascript.NSString;
  setCollationIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643195-collatoridentifier
  collatorIdentifier(): cocoascript.NSString;
  setCollatorIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643225-usesmetricsystem
  usesMetricSystem(): cocoascript.BOOL;
  setUsesMetricSystem(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643064-decimalseparator
  decimalSeparator(): cocoascript.NSString;
  setDecimalSeparator(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643096-groupingseparator
  groupingSeparator(): cocoascript.NSString;
  setGroupingSeparator(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1642836-currencycode
  currencyCode(): cocoascript.NSString;
  setCurrencyCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1642814-currencysymbol
  currencySymbol(): cocoascript.NSString;
  setCurrencySymbol(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/2242779-calendaridentifier
  calendarIdentifier(): cocoascript.NSString;
  setCalendarIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643155-quotationbegindelimiter
  quotationBeginDelimiter(): cocoascript.NSString;
  setQuotationBeginDelimiter(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643162-quotationenddelimiter
  quotationEndDelimiter(): cocoascript.NSString;
  setQuotationEndDelimiter(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643238-alternatequotationbegindelimiter
  alternateQuotationBeginDelimiter(): cocoascript.NSString;
  setAlternateQuotationBeginDelimiter(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1642885-alternatequotationenddelimiter
  alternateQuotationEndDelimiter(): cocoascript.NSString;
  setAlternateQuotationEndDelimiter(): void;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1642864-localizedstringforlocaleidentifi
  localizedStringForLocaleIdentifier(localeIdentifier: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1642920-localizedstringforcountrycode
  localizedStringForCountryCode(countryCode: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643226-localizedstringforlanguagecode
  localizedStringForLanguageCode(languageCode: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643126-localizedstringforscriptcode
  localizedStringForScriptCode(scriptCode: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643264-localizedstringforvariantcode
  localizedStringForVariantCode(variantCode: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1642875-localizedstringforcollationident
  localizedStringForCollationIdentifier(collationIdentifier: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643004-localizedstringforcollatoridenti
  localizedStringForCollatorIdentifier(collatorIdentifier: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1643179-localizedstringforcurrencycode
  localizedStringForCurrencyCode(currencyCode: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/2242780-localizedstringforcalendaridenti
  localizedStringForCalendarIdentifier(calendarIdentifier: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1418430-objectforkey
  objectForKey(key: cocoascript.NSLocaleKey):cocoascript.NSLocale;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1415931-displaynameforkey
  displayNameForKey_value(key: cocoascript.NSLocaleKey, value: cocoascript.NSLocale):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nslocale/1415614-preferredlanguages
  preferredLanguages(): cocoascript.NSString;
  setPreferredLanguages(): void;
  // 
  alloc():cocoascript.NSLocale;
  // 
  init():cocoascript.NSLocale;
}
}
declare const NSLocale: cocoascript.NSLocale;

