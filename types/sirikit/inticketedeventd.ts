declare namespace cocoascript {
/**
 * The information that describes a ticketed event.
 * doc://com.apple.documentation/documentation/sirikit/inticketedevent
 */
interface INTicketedEvent extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3191890-initwithcategory
  initWithCategory_name_eventDuration_location(category: cocoascript.INTicketedEventCategory, name: cocoascript.NSString, eventDuration: cocoascript.INDateComponentsRange, location: cocoascript.CLPlacemark):cocoascript.INTicketedEvent;
  // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3191889-category
  category(): cocoascript.INTicketedEventCategory;
  setCategory(): void;
  // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3141882-eventduration
  eventDuration(): cocoascript.INDateComponentsRange;
  setEventDuration(): void;
  // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3141884-location
  location(): cocoascript.CLPlacemark;
  setLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3141885-name
  name(): cocoascript.NSString;
  setName(): void;
  // 
  alloc():cocoascript.INTicketedEvent;
  // 
  init():cocoascript.INTicketedEvent;
}
}
declare const INTicketedEvent: cocoascript.INTicketedEvent;

