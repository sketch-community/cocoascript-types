declare namespace cocoascript {
  /**
   * An operation that fetches a share’s participants.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation
   */
  interface CKFetchShareParticipantsOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640478-init
    init():cocoascript.CKFetchShareParticipantsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640471-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: cocoascript.CKUserIdentityLookupInfo):cocoascript.CKFetchShareParticipantsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640380-useridentitylookupinfos
    userIdentityLookupInfos(): cocoascript.CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640451-shareparticipantfetchedblock
    shareParticipantFetchedBlock(): cocoascript.CKShareParticipant;
    setShareParticipantFetchedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640529-fetchshareparticipantscompletion
    fetchShareParticipantsCompletionBlock(): cocoascript.NSError;
    setFetchShareParticipantsCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchShareParticipantsOperation;
    //
    init():cocoascript.CKFetchShareParticipantsOperation;
  }
}

declare const CKFetchShareParticipantsOperation: cocoascript.CKFetchShareParticipantsOperation;
