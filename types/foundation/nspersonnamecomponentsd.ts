declare namespace cocoascript {
/**
 * An object that manages the separate parts of a person's name to allow locale-aware formatting.
 * doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents
 */
interface NSPersonNameComponents extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1410275-nameprefix
  namePrefix(): cocoascript.NSString;
  setNamePrefix(): void;
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1407259-givenname
  givenName(): cocoascript.NSString;
  setGivenName(): void;
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1418183-middlename
  middleName(): cocoascript.NSString;
  setMiddleName(): void;
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1413354-familyname
  familyName(): cocoascript.NSString;
  setFamilyName(): void;
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1410776-namesuffix
  nameSuffix(): cocoascript.NSString;
  setNameSuffix(): void;
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1414892-nickname
  nickname(): cocoascript.NSString;
  setNickname(): void;
  // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponents/1412193-phoneticrepresentation
  phoneticRepresentation(): cocoascript.NSPersonNameComponents;
  setPhoneticRepresentation(): void;
  // 
  alloc():cocoascript.NSPersonNameComponents;
  // 
  init():cocoascript.NSPersonNameComponents;
}
}
declare const NSPersonNameComponents: cocoascript.NSPersonNameComponents;

