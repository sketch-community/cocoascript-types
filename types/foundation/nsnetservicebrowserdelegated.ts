declare namespace cocoascript {
/**
 * The interface a net service browser uses to inform a delegate about the state of service discovery.
 * doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate
 */
interface NSNetServiceBrowserDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1407204-netservicebrowser
  netServiceBrowser_didFindDomain_moreComing(browser: cocoascript.NSNetServiceBrowser, domainString: cocoascript.NSString, moreComing: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1412712-netservicebrowser
  netServiceBrowser_didRemoveDomain_moreComing(browser: cocoascript.NSNetServiceBrowser, domainString: cocoascript.NSString, moreComing: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1417979-netservicebrowser
  netServiceBrowser_didFindService_moreComing(browser: cocoascript.NSNetServiceBrowser, service: cocoascript.NSNetService, moreComing: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1412917-netservicebrowser
  netServiceBrowser_didRemoveService_moreComing(browser: cocoascript.NSNetServiceBrowser, service: cocoascript.NSNetService, moreComing: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1408173-netservicebrowserwillsearch
  netServiceBrowserWillSearch(browser: cocoascript.NSNetServiceBrowser):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1410567-netservicebrowser
  netServiceBrowser_didNotSearch(browser: cocoascript.NSNetServiceBrowser, errorDict: cocoascript.NSNumber):void;
  // doc://com.apple.documentation/documentation/foundation/nsnetservicebrowserdelegate/1418341-netservicebrowserdidstopsearch
  netServiceBrowserDidStopSearch(browser: cocoascript.NSNetServiceBrowser):void;
}
}

