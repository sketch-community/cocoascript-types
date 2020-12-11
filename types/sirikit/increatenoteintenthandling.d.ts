declare namespace cocoascript {
  /**
   * The handler interface for creating notes.
   * doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling
   */
  interface INCreateNoteIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874064-resolvetitleforcreatenote
    resolveTitleForCreateNote_withCompletion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874061-resolvecontentforcreatenote
    resolveContentForCreateNote_withCompletion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INNoteContentResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874057-resolvegroupnameforcreatenote
    resolveGroupNameForCreateNote_withCompletion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874062-confirmcreatenote
    confirmCreateNote_completion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INCreateNoteIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874059-handlecreatenote
    handleCreateNote_completion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INCreateNoteIntentResponse):void;
  }
}
