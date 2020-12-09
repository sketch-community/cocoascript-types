declare namespace cocoascript {
/**
 * Your app’s response to a request to create a note.
 * doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse
 */
interface INCreateNoteIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse/2873960-initwithcode
  initWithCode_userActivity(code: cocoascript.INCreateNoteIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCreateNoteIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse/2873962-code
  code(): cocoascript.INCreateNoteIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse/2873959-creatednote
  createdNote(): cocoascript.INNote;
  setCreatedNote(): void;
  // 
  alloc():cocoascript.INCreateNoteIntentResponse;
  // 
  init():cocoascript.INCreateNoteIntentResponse;
}
}
declare const INCreateNoteIntentResponse: cocoascript.INCreateNoteIntentResponse;

