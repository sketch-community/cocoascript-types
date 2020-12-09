declare namespace cocoascript {
/**
 * A request to search for notes, tasks, and reminders.
 * doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent
 */
interface INSearchForNotebookItemsIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/3141829-initwithtitle
  initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType_temporalEventTriggerTypes_taskPriority_notebookItemIdentifier(title: cocoascript.INSpeakableString, content: cocoascript.NSString, itemType: cocoascript.INNotebookItemType, status: cocoascript.INTaskStatus, location: cocoascript.CLPlacemark, locationSearchType: cocoascript.INLocationSearchType, dateTime: cocoascript.INDateComponentsRange, dateSearchType: cocoascript.INDateSearchType, temporalEventTriggerTypes: cocoascript.INTemporalEventTriggerTypeOptions, taskPriority: cocoascript.INTaskPriority, notebookItemIdentifier: cocoascript.NSString):cocoascript.INSearchForNotebookItemsIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2935526-initwithtitle
  initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType_notebookItemIdentifier(title: cocoascript.INSpeakableString, content: cocoascript.NSString, itemType: cocoascript.INNotebookItemType, status: cocoascript.INTaskStatus, location: cocoascript.CLPlacemark, locationSearchType: cocoascript.INLocationSearchType, dateTime: cocoascript.INDateComponentsRange, dateSearchType: cocoascript.INDateSearchType, notebookItemIdentifier: cocoascript.NSString):cocoascript.INSearchForNotebookItemsIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875705-initwithtitle
  initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType(title: cocoascript.INSpeakableString, content: cocoascript.NSString, itemType: cocoascript.INNotebookItemType, status: cocoascript.INTaskStatus, location: cocoascript.CLPlacemark, locationSearchType: cocoascript.INLocationSearchType, dateTime: cocoascript.INDateComponentsRange, dateSearchType: cocoascript.INDateSearchType):cocoascript.INSearchForNotebookItemsIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875589-itemtype
  itemType(): cocoascript.INNotebookItemType;
  setItemType(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875610-title
  title(): cocoascript.INSpeakableString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875644-content
  content(): cocoascript.NSString;
  setContent(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875588-status
  status(): cocoascript.INTaskStatus;
  setStatus(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875647-location
  location(): cocoascript.CLPlacemark;
  setLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875602-locationsearchtype
  locationSearchType(): cocoascript.INLocationSearchType;
  setLocationSearchType(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875608-datetime
  dateTime(): cocoascript.INDateComponentsRange;
  setDateTime(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875615-datesearchtype
  dateSearchType(): cocoascript.INDateSearchType;
  setDateSearchType(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2935527-notebookitemidentifier
  notebookItemIdentifier(): cocoascript.NSString;
  setNotebookItemIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/3141830-taskpriority
  taskPriority(): cocoascript.INTaskPriority;
  setTaskPriority(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/3141831-temporaleventtriggertypes
  temporalEventTriggerTypes(): cocoascript.INTemporalEventTriggerTypeOptions;
  setTemporalEventTriggerTypes(): void;
  // 
  alloc():cocoascript.INSearchForNotebookItemsIntent;
  // 
  init():cocoascript.INSearchForNotebookItemsIntent;
}
}
declare const INSearchForNotebookItemsIntent: cocoascript.INSearchForNotebookItemsIntent;

