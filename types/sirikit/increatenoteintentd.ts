declare namespace cocoascript {
/**
 * A request to create a new note.
 * doc://com.apple.documentation/documentation/sirikit/increatenoteintent
 */
interface INCreateNoteIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874065-initwithtitle
  initWithTitle_content_groupName(title: cocoascript.INSpeakableString, content: cocoascript.INNoteContent, groupName: cocoascript.INSpeakableString):cocoascript.INCreateNoteIntent;
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874056-title
  title(): cocoascript.INSpeakableString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874060-content
  content(): cocoascript.INNoteContent;
  setContent(): void;
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874063-groupname
  groupName(): cocoascript.INSpeakableString;
  setGroupName(): void;
  // 
  alloc():cocoascript.INCreateNoteIntent;
  // 
  init():cocoascript.INCreateNoteIntent;
}
}
declare const INCreateNoteIntent: cocoascript.INCreateNoteIntent;

