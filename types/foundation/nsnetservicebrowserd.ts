declare namespace cocoascript {
/**
 * A network service browser that finds published services on a network using multicast DNS.
 * doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser
 */
interface NSNetServiceBrowser extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1412947-init
  init():cocoascript.NSNetServiceBrowser;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1409380-delegate
  delegate(): cocoascript.NSNetServiceBrowserDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1413106-includespeertopeer
  includesPeerToPeer(): cocoascript.BOOL;
  setIncludesPeerToPeer(): void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1417661-searchforbrowsabledomains
  searchForBrowsableDomains():void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1408718-searchforregistrationdomains
  searchForRegistrationDomains():void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1417565-searchforservicesoftype
  searchForServicesOfType_inDomain(type: cocoascript.NSString, domainString: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1414528-stop
  stop():void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1409776-scheduleinrunloop
  scheduleInRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowser/1411566-removefromrunloop
  removeFromRunLoop_forMode(aRunLoop: cocoascript.NSRunLoop, mode: cocoascript.NSRunLoopMode):void;
  // 
  alloc():cocoascript.NSNetServiceBrowser;
  // 
  init():cocoascript.NSNetServiceBrowser;
}
}
declare const NSNetServiceBrowser: cocoascript.NSNetServiceBrowser;

