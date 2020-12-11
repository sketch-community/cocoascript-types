declare namespace cocoascript {
  /**
   * The manager of a shared credentials cache.
   * doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage
   */
  interface NSURLCredentialStorage extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1412355-sharedcredentialstorage
    sharedCredentialStorage(): cocoascript.NSURLCredentialStorage;
    setSharedCredentialStorage(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1412650-defaultcredentialforprotectionsp
    defaultCredentialForProtectionSpace(space: cocoascript.NSURLProtectionSpace):cocoascript.NSURLCredential;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1411794-getdefaultcredentialforprotectio
    getDefaultCredentialForProtectionSpace_task_completionHandler(space: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSURLCredential):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1416502-setdefaultcredential
    setDefaultCredential_forProtectionSpace(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1416429-setdefaultcredential
    setDefaultCredential_forProtectionSpace_task(credential: cocoascript.NSURLCredential, protectionSpace: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1408664-removecredential
    removeCredential_forProtectionSpace(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1407695-removecredential
    removeCredential_forProtectionSpace_options(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace, options: cocoascript.NSURLCredentialStorage):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1407237-removecredential
    removeCredential_forProtectionSpace_options_task(credential: cocoascript.NSURLCredential, protectionSpace: cocoascript.NSURLProtectionSpace, options: cocoascript.NSURLCredentialStorage, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1407227-setcredential
    setCredential_forProtectionSpace(credential: cocoascript.NSURLCredential, space: cocoascript.NSURLProtectionSpace):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1412703-setcredential
    setCredential_forProtectionSpace_task(credential: cocoascript.NSURLCredential, protectionSpace: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1413859-allcredentials
    allCredentials(): cocoascript.NSURLCredential;
    setAllCredentials(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1413910-credentialsforprotectionspace
    credentialsForProtectionSpace(space: cocoascript.NSURLProtectionSpace):cocoascript.NSURLCredential;
    // doc://com.apple.documentation/documentation/foundation/nsurlcredentialstorage/1418119-getcredentialsforprotectionspace
    getCredentialsForProtectionSpace_task_completionHandler(protectionSpace: cocoascript.NSURLProtectionSpace, task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSURLCredential):void;
    //
    alloc():cocoascript.NSURLCredentialStorage;
    //
    init():cocoascript.NSURLCredentialStorage;
  }
}

declare const NSURLCredentialStorage: cocoascript.NSURLCredentialStorage;
