declare namespace cocoascript {
/**
 * The handler interface for appending content to a note.
 * doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling
 */
interface INAppendToNoteIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2873750-resolvecontentforappendtonote
  resolveContentForAppendToNote_withCompletion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INNoteContentResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2878105-resolvetargetnoteforappendtonote
  resolveTargetNoteForAppendToNote_withCompletion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INNoteResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2873748-confirmappendtonote
  confirmAppendToNote_completion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INAppendToNoteIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2873753-handleappendtonote
  handleAppendToNote_completion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INAppendToNoteIntentResponse):void;
}
}

