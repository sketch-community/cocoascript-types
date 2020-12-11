declare namespace cocoascript {
  /**
   * An individual task the user needs to complete.
   * doc://com.apple.documentation/documentation/sirikit/intask
   */
  interface INTask extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intask/3227907-initwithtitle
    initWithTitle_status_taskType_spatialEventTrigger_temporalEventTrigger_createdDateComponents_modifiedDateComponents_identifier_priority(title: cocoascript.INSpeakableString, status: cocoascript.INTaskStatus, taskType: cocoascript.INTaskType, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString, priority: cocoascript.INTaskPriority):cocoascript.INTask;
    // doc://com.apple.documentation/documentation/sirikit/intask/2888298-initwithtitle
    initWithTitle_status_taskType_spatialEventTrigger_temporalEventTrigger_createdDateComponents_modifiedDateComponents_identifier(title: cocoascript.INSpeakableString, status: cocoascript.INTaskStatus, taskType: cocoascript.INTaskType, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString):cocoascript.INTask;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874013-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874019-status
    status(): cocoascript.INTaskStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874018-temporaleventtrigger
    temporalEventTrigger(): cocoascript.INTemporalEventTrigger;
    setTemporalEventTrigger(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874015-spatialeventtrigger
    spatialEventTrigger(): cocoascript.INSpatialEventTrigger;
    setSpatialEventTrigger(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874017-createddatecomponents
    createdDateComponents(): cocoascript.NSDateComponents;
    setCreatedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874014-modifieddatecomponents
    modifiedDateComponents(): cocoascript.NSDateComponents;
    setModifiedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2888297-tasktype
    taskType(): cocoascript.INTaskType;
    setTaskType(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874016-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/3227908-priority
    priority(): cocoascript.INTaskPriority;
    setPriority(): void;
    //
    alloc():cocoascript.INTask;
    //
    init():cocoascript.INTask;
  }
}

declare const INTask: cocoascript.INTask;
