declare namespace cocoascript {
/**
 * A request to start an audio-only call with one or more users. 
 * doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent
 */
interface INStartAudioCallIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/2873773-initwithdestinationtype
  initWithDestinationType_contacts(destinationType: cocoascript.INCallDestinationType, contacts: cocoascript.INPerson):cocoascript.INStartAudioCallIntent;
  // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/1638231-initwithcontacts
  initWithContacts(contacts: cocoascript.INPerson):cocoascript.INStartAudioCallIntent;
  // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/1638516-contacts
  contacts(): cocoascript.INPerson;
  setContacts(): void;
  // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/2873774-destinationtype
  destinationType(): cocoascript.INCallDestinationType;
  setDestinationType(): void;
  // 
  alloc():cocoascript.INStartAudioCallIntent;
  // 
  init():cocoascript.INStartAudioCallIntent;
}
}
declare const INStartAudioCallIntent: cocoascript.INStartAudioCallIntent;

