declare namespace cocoascript {
/**
 * Your app’s response to a request to search for notes, tasks, or reminders.
 * doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse
 */
interface INSearchForNotebookItemsIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875685-initwithcode
  initWithCode_userActivity(code: cocoascript.INSearchForNotebookItemsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForNotebookItemsIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875668-code
  code(): cocoascript.INSearchForNotebookItemsIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875669-notes
  notes(): cocoascript.INNote;
  setNotes(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875616-tasklists
  taskLists(): cocoascript.INTaskList;
  setTaskLists(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875664-tasks
  tasks(): cocoascript.INTask;
  setTasks(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875676-sorttype
  sortType(): cocoascript.INSortType;
  setSortType(): void;
  // 
  alloc():cocoascript.INSearchForNotebookItemsIntentResponse;
  // 
  init():cocoascript.INSearchForNotebookItemsIntentResponse;
}
}
declare const INSearchForNotebookItemsIntentResponse: cocoascript.INSearchForNotebookItemsIntentResponse;

