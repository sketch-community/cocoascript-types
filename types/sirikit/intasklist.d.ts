declare namespace cocoascript {
  /**
   * A collection of individual tasks.
   * doc://com.apple.documentation/documentation/sirikit/intasklist
   */
  interface INTaskList extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2888348-initwithtitle
    initWithTitle_tasks_groupName_createdDateComponents_modifiedDateComponents_identifier(title: cocoascript.INSpeakableString, tasks: cocoascript.INTask, groupName: cocoascript.INSpeakableString, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString):cocoascript.INTaskList;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874006-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874011-tasks
    tasks(): cocoascript.INTask;
    setTasks(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874008-groupname
    groupName(): cocoascript.INSpeakableString;
    setGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874009-createddatecomponents
    createdDateComponents(): cocoascript.NSDateComponents;
    setCreatedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874007-modifieddatecomponents
    modifiedDateComponents(): cocoascript.NSDateComponents;
    setModifiedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874004-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    //
    alloc():cocoascript.INTaskList;
    //
    init():cocoascript.INTaskList;
  }
}

declare const INTaskList: cocoascript.INTaskList;
