declare namespace cocoascript {
  /**
   * A reference to a share record.
   * doc://com.apple.documentation/documentation/cloudkit/ckshare
   */
  interface CKShare extends CKRecord {
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640432-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640448-initwithrootrecord
    initWithRootRecord(rootRecord: cocoascript.CKRecord):cocoascript.CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640381-initwithrootrecord
    initWithRootRecord_shareID(rootRecord: cocoascript.CKRecord, shareID: cocoascript.CKRecordID):cocoascript.CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640494-publicpermission
    publicPermission(): cocoascript.CKShareParticipantPermission;
    setPublicPermission(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640443-addparticipant
    addParticipant(participant: cocoascript.CKShareParticipant):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640523-removeparticipant
    removeParticipant(participant: cocoascript.CKShareParticipant):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640503-owner
    owner(): cocoascript.CKShareParticipant;
    setOwner(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640453-participants
    participants(): cocoascript.CKShareParticipant;
    setParticipants(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640441-currentuserparticipant
    currentUserParticipant(): cocoascript.CKShareParticipant;
    setCurrentUserParticipant(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640465-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.CKShare;
    //
    init():cocoascript.CKShare;
  }
}

declare const CKShare: cocoascript.CKShare;
