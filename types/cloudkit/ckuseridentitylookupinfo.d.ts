declare namespace cocoascript {
  /**
   * An object that represents the criteria CloudKit uses when fetching user identities.
   * doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo
   */
  interface CKUserIdentityLookupInfo extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640484-initwithemailaddress
    initWithEmailAddress(emailAddress: cocoascript.NSString):cocoascript.CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640402-initwithphonenumber
    initWithPhoneNumber(phoneNumber: cocoascript.NSString):cocoascript.CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640419-initwithuserrecordid
    initWithUserRecordID(userRecordID: cocoascript.CKRecordID):cocoascript.CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640462-emailaddress
    emailAddress(): cocoascript.NSString;
    setEmailAddress(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640482-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640405-userrecordid
    userRecordID(): cocoascript.CKRecordID;
    setUserRecordID(): void;
    //
    alloc():cocoascript.CKUserIdentityLookupInfo;
    //
    init():cocoascript.CKUserIdentityLookupInfo;
  }
}

declare const CKUserIdentityLookupInfo: cocoascript.CKUserIdentityLookupInfo;
