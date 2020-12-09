declare namespace cocoascript {
/**
 * Your app’s response to a request to append content to a note.
 * doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse
 */
interface INAppendToNoteIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse/2873878-initwithcode
  initWithCode_userActivity(code: cocoascript.INAppendToNoteIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INAppendToNoteIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse/2873875-code
  code(): cocoascript.INAppendToNoteIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse/2873874-note
  note(): cocoascript.INNote;
  setNote(): void;
  // 
  alloc():cocoascript.INAppendToNoteIntentResponse;
  // 
  init():cocoascript.INAppendToNoteIntentResponse;
}
}
declare const INAppendToNoteIntentResponse: cocoascript.INAppendToNoteIntentResponse;

