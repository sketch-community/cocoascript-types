declare namespace cocoascript {
/**
 * A request to start a video call with one or more users. 
 * doc://com.apple.documentation/documentation/sirikit/instartvideocallintent
 */
interface INStartVideoCallIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintent/1638541-initwithcontacts
  initWithContacts(contacts: cocoascript.INPerson):cocoascript.INStartVideoCallIntent;
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintent/1639126-contacts
  contacts(): cocoascript.INPerson;
  setContacts(): void;
  // 
  alloc():cocoascript.INStartVideoCallIntent;
  // 
  init():cocoascript.INStartVideoCallIntent;
}
}
declare const INStartVideoCallIntent: cocoascript.INStartVideoCallIntent;

