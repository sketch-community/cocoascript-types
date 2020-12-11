declare namespace cocoascript {
  /**
   * Information about standard time conventions associated with a specific geopolitical region.
   * doc://com.apple.documentation/documentation/foundation/nstimezone
   */
  interface NSTimeZone extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387209-localtimezone
    localTimeZone(): cocoascript.NSTimeZone;
    setLocalTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387231-systemtimezone
    systemTimeZone(): cocoascript.NSTimeZone;
    setSystemTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387244-defaulttimezone
    defaultTimeZone(): cocoascript.NSTimeZone;
    setDefaultTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387215-initwithname
    initWithName(tzName: cocoascript.NSString):cocoascript.NSTimeZone;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387250-initwithname
    initWithName_data(tzName: cocoascript.NSString, aData: cocoascript.NSData):cocoascript.NSTimeZone;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387223-knowntimezonenames
    knownTimeZoneNames(): cocoascript.NSString;
    setKnownTimeZoneNames(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387258-abbreviationdictionary
    abbreviationDictionary(): cocoascript.NSString;
    setAbbreviationDictionary(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387233-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387195-abbreviation
    abbreviation(): cocoascript.NSString;
    setAbbreviation(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387237-abbreviationfordate
    abbreviationForDate(aDate: cocoascript.NSDate):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387221-secondsfromgmt
    secondsFromGMT(): cocoascript.NSInteger;
    setSecondsFromGMT(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387242-secondsfromgmtfordate
    secondsFromGMTForDate(aDate: cocoascript.NSDate):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387213-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387187-timezonedataversion
    timeZoneDataVersion(): cocoascript.NSString;
    setTimeZoneDataVersion(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387191-daylightsavingtime
    daylightSavingTime(): cocoascript.BOOL;
    setDaylightSavingTime(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387201-isdaylightsavingtimefordate
    isDaylightSavingTimeForDate(aDate: cocoascript.NSDate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387235-daylightsavingtimeoffset
    daylightSavingTimeOffset(): cocoascript.NSTimeInterval;
    setDaylightSavingTimeOffset(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387207-daylightsavingtimeoffsetfordate
    daylightSavingTimeOffsetForDate(aDate: cocoascript.NSDate):cocoascript.NSTimeInterval;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387183-nextdaylightsavingtimetransition
    nextDaylightSavingTimeTransition(): cocoascript.NSDate;
    setNextDaylightSavingTimeTransition(): void;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387254-nextdaylightsavingtimetransition
    nextDaylightSavingTimeTransitionAfterDate(aDate: cocoascript.NSDate):cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387211-isequaltotimezone
    isEqualToTimeZone(aTimeZone: cocoascript.NSTimeZone):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387193-localizedname
    localizedName_locale(style: cocoascript.NSTimeZoneNameStyle, locale: cocoascript.NSLocale):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nstimezone/1387217-description
    description(): cocoascript.NSString;
    setDescription(): void;
    //
    alloc():cocoascript.NSTimeZone;
    //
    init():cocoascript.NSTimeZone;
  }
}

declare const NSTimeZone: cocoascript.NSTimeZone;
