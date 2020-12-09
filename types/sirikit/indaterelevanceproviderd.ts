declare namespace cocoascript {
/**
 * The provider class that specifies a relevant day and time.
 * doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider
 */
interface INDateRelevanceProvider extends INRelevanceProvider {
  // doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider/2963054-initwithstartdate
  initWithStartDate_endDate(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate):cocoascript.INDateRelevanceProvider;
  // doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider/2963055-startdate
  startDate(): cocoascript.NSDate;
  setStartDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider/2963052-enddate
  endDate(): cocoascript.NSDate;
  setEndDate(): void;
  // 
  alloc():cocoascript.INDateRelevanceProvider;
  // 
  init():cocoascript.INDateRelevanceProvider;
}
}
declare const INDateRelevanceProvider: cocoascript.INDateRelevanceProvider;

