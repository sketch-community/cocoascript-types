declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/foundation/nsurlcredential
 */
interface NSURLCredential extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1418121-initwithidentity
  initWithIdentity_certificates_persistence(identity: cocoascript.SecIdentityRef, certArray: cocoascript.NSArray, persistence: cocoascript.NSURLCredentialPersistence):cocoascript.NSURLCredential;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1413935-initwithtrust
  initWithTrust(trust: cocoascript.SecTrustRef):cocoascript.NSURLCredential;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1417977-initwithuser
  initWithUser_password_persistence(user: cocoascript.NSString, password: cocoascript.NSString, persistence: cocoascript.NSURLCredentialPersistence):cocoascript.NSURLCredential;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1408654-user
  user(): cocoascript.NSString;
  setUser(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1412369-certificates
  certificates(): cocoascript.NSArray;
  setCertificates(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1418072-haspassword
  hasPassword(): cocoascript.BOOL;
  setHasPassword(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1417913-password
  password(): cocoascript.NSString;
  setPassword(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1411514-identity
  identity(): cocoascript.SecIdentityRef;
  setIdentity(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurlcredential/1416977-persistence
  persistence(): cocoascript.NSURLCredentialPersistence;
  setPersistence(): void;
  // 
  alloc():cocoascript.NSURLCredential;
  // 
  init():cocoascript.NSURLCredential;
}
}
declare const NSURLCredential: cocoascript.NSURLCredential;

