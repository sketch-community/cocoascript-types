declare namespace cocoascript {
/**
 * The handler interface for searching for notes, tasks, and reminders.
 * doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling
 */
interface INSearchForNotebookItemsIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875695-resolveitemtypeforsearchfornoteb
  resolveItemTypeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INNotebookItemTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875660-resolvetitleforsearchfornotebook
  resolveTitleForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875692-resolvecontentforsearchfornotebo
  resolveContentForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875583-resolvestatusforsearchfornoteboo
  resolveStatusForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INTaskStatusResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875597-resolvedatesearchtypeforsearchfo
  resolveDateSearchTypeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INDateSearchTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875698-resolvedatetimeforsearchfornoteb
  resolveDateTimeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875630-resolvelocationforsearchfornoteb
  resolveLocationForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875637-resolvelocationsearchtypeforsear
  resolveLocationSearchTypeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INLocationSearchTypeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/3141832-resolvetaskpriorityforsearchforn
  resolveTaskPriorityForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INTaskPriorityResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/3141833-resolvetemporaleventtriggertypes
  resolveTemporalEventTriggerTypesForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INTemporalEventTriggerTypeOptionsResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875580-confirmsearchfornotebookitems
  confirmSearchForNotebookItems_completion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INSearchForNotebookItemsIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875649-handlesearchfornotebookitems
  handleSearchForNotebookItems_completion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INSearchForNotebookItemsIntentResponse):void;
}
}

