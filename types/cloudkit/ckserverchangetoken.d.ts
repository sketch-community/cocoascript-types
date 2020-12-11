declare namespace cocoascript {
  /**
   * An object that identifies a specific version of a record.
   * doc://com.apple.documentation/documentation/cloudkit/ckserverchangetoken
   */
  interface CKServerChangeToken extends NSObject {
    //
    alloc():cocoascript.CKServerChangeToken;
    //
    init():cocoascript.CKServerChangeToken;
  }
}

declare const CKServerChangeToken: cocoascript.CKServerChangeToken;
