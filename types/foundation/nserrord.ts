declare namespace cocoascript {
/**
 * Information about an error condition including a domain, a domain-specific error code, and application-specific information.
 * doc://com.apple.documentation/documentation/foundation/nserror
 */
interface NSError extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nserror/1417063-initwithdomain
  initWithDomain_code_userInfo(domain: cocoascript.NSErrorDomain, code: cocoascript.NSInteger, dict: cocoascript.NSError):cocoascript.NSError;
  // doc://com.apple.documentation/documentation/foundation/nserror/1409165-code
  code(): cocoascript.NSInteger;
  setCode(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1413924-domain
  domain(): cocoascript.NSErrorDomain;
  setDomain(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1411580-userinfo
  userInfo(): cocoascript.id;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1414418-localizeddescription
  localizedDescription(): cocoascript.NSString;
  setLocalizedDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1415950-localizedrecoveryoptions
  localizedRecoveryOptions(): cocoascript.NSString;
  setLocalizedRecoveryOptions(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1407500-localizedrecoverysuggestion
  localizedRecoverySuggestion(): cocoascript.NSString;
  setLocalizedRecoverySuggestion(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1412752-localizedfailurereason
  localizedFailureReason(): cocoascript.NSString;
  setLocalizedFailureReason(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1408864-recoveryattempter
  recoveryAttempter(): cocoascript.id;
  setRecoveryAttempter(): void;
  // doc://com.apple.documentation/documentation/foundation/nserror/1414718-helpanchor
  helpAnchor(): cocoascript.NSString;
  setHelpAnchor(): void;
  // 
  alloc():cocoascript.NSError;
  // 
  init():cocoascript.NSError;
}
}
declare const NSError: cocoascript.NSError;

