declare namespace cocoascript {
/**
 * A request to create a new task list.
 * doc://com.apple.documentation/documentation/sirikit/increatetasklistintent
 */
interface INCreateTaskListIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873994-initwithtitle
  initWithTitle_taskTitles_groupName(title: cocoascript.INSpeakableString, taskTitles: cocoascript.INSpeakableString, groupName: cocoascript.INSpeakableString):cocoascript.INCreateTaskListIntent;
  // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873997-title
  title(): cocoascript.INSpeakableString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873992-tasktitles
  taskTitles(): cocoascript.INSpeakableString;
  setTaskTitles(): void;
  // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873999-groupname
  groupName(): cocoascript.INSpeakableString;
  setGroupName(): void;
  // 
  alloc():cocoascript.INCreateTaskListIntent;
  // 
  init():cocoascript.INCreateTaskListIntent;
}
}
declare const INCreateTaskListIntent: cocoascript.INCreateTaskListIntent;

