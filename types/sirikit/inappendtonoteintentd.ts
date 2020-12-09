declare namespace cocoascript {
/**
 * A request to append content to a note.
 * doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent
 */
interface INAppendToNoteIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent/2878103-initwithtargetnote
  initWithTargetNote_content(targetNote: cocoascript.INNote, content: cocoascript.INNoteContent):cocoascript.INAppendToNoteIntent;
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent/2873746-content
  content(): cocoascript.INNoteContent;
  setContent(): void;
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent/2878104-targetnote
  targetNote(): cocoascript.INNote;
  setTargetNote(): void;
  // 
  alloc():cocoascript.INAppendToNoteIntent;
  // 
  init():cocoascript.INAppendToNoteIntent;
}
}
declare const INAppendToNoteIntent: cocoascript.INAppendToNoteIntent;

