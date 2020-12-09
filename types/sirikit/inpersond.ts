declare namespace cocoascript {
/**
 * The information about a user involved in a SiriKit interaction.
 * doc://com.apple.documentation/documentation/sirikit/inperson
 */
interface INPerson extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inperson/2138319-initwithpersonhandle
  initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString):cocoascript.INPerson;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2976230-initwithpersonhandle
  initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_isMe(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString, isMe: cocoascript.BOOL):cocoascript.INPerson;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2138310-initwithpersonhandle
  initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_aliases_suggestionType(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString, aliases: cocoascript.INPersonHandle, suggestionType: cocoascript.INPersonSuggestionType):cocoascript.INPerson;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1638494-initwithhandle
  initWithHandle_displayName_contactIdentifier(handle: cocoascript.NSString, displayName: cocoascript.NSString, contactIdentifier: cocoascript.NSString):cocoascript.INPerson;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1639010-initwithhandle
  initWithHandle_nameComponents_contactIdentifier(handle: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, contactIdentifier: cocoascript.NSString):cocoascript.INPerson;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1638508-initwithhandle
  initWithHandle_nameComponents_displayName_image_contactIdentifier(handle: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString):cocoascript.INPerson;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1638921-displayname
  displayName(): cocoascript.NSString;
  setDisplayName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1638822-namecomponents
  nameComponents(): cocoascript.NSPersonNameComponents;
  setNameComponents(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2138314-personhandle
  personHandle(): cocoascript.INPersonHandle;
  setPersonHandle(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1639130-image
  image(): cocoascript.INImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2878157-isme
  isMe(): cocoascript.BOOL;
  setIsMe(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2138316-aliases
  aliases(): cocoascript.INPersonHandle;
  setAliases(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1639190-handle
  handle(): cocoascript.NSString;
  setHandle(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/1638320-contactidentifier
  contactIdentifier(): cocoascript.NSString;
  setContactIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2138295-customidentifier
  customIdentifier(): cocoascript.NSString;
  setCustomIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2138313-suggestiontype
  suggestionType(): cocoascript.INPersonSuggestionType;
  setSuggestionType(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2715831-relationship
  relationship(): cocoascript.INPersonRelationship;
  setRelationship(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/2863696-sirimatches
  siriMatches(): cocoascript.INPerson;
  setSiriMatches(): void;
  // doc://com.apple.documentation/documentation/sirikit/inperson/3552225-initwithpersonhandle
  initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_relationship(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString, relationship: cocoascript.INPersonRelationship):cocoascript.INPerson;
  // 
  alloc():cocoascript.INPerson;
  // 
  init():cocoascript.INPerson;
}
}
declare const INPerson: cocoascript.INPerson;

