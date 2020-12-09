declare namespace cocoascript {
/**
 * An object that represents a user’s identity.
 * doc://com.apple.documentation/documentation/cloudkit/ckuseridentity
 */
interface CKUserIdentity extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640513-hasicloudaccount
  hasiCloudAccount(): cocoascript.BOOL;
  setHasiCloudAccount(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640371-lookupinfo
  lookupInfo(): cocoascript.CKUserIdentityLookupInfo;
  setLookupInfo(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640504-userrecordid
  userRecordID(): cocoascript.CKRecordID;
  setUserRecordID(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/2866227-contactidentifiers
  contactIdentifiers(): cocoascript.NSString;
  setContactIdentifiers(): void;
  // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640458-namecomponents
  nameComponents(): cocoascript.NSPersonNameComponents;
  setNameComponents(): void;
  // 
  alloc():cocoascript.CKUserIdentity;
  // 
  init():cocoascript.CKUserIdentity;
}
}
declare const CKUserIdentity: cocoascript.CKUserIdentity;

