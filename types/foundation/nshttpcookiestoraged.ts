declare namespace cocoascript {
/**
 * A container that manages the storage of cookies. 
 * doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage
 */
interface NSHTTPCookieStorage extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1416095-sharedhttpcookiestorage
  sharedHTTPCookieStorage(): cocoascript.NSHTTPCookieStorage;
  setSharedHTTPCookieStorage(): void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1410415-cookieacceptpolicy
  cookieAcceptPolicy(): cocoascript.NSHTTPCookieAcceptPolicy;
  setCookieAcceptPolicy(): void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1407256-removecookiessincedate
  removeCookiesSinceDate(date: cocoascript.NSDate):void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1409218-deletecookie
  deleteCookie(cookie: cocoascript.NSHTTPCookie):void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1418356-setcookie
  setCookie(cookie: cocoascript.NSHTTPCookie):void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1412510-setcookies
  setCookies_forURL_mainDocumentURL(cookies: cocoascript.NSHTTPCookie, URL: cocoascript.NSURL, mainDocumentURL: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1415381-storecookies
  storeCookies_forTask(cookies: cocoascript.NSHTTPCookie, task: cocoascript.NSURLSessionTask):void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1418390-cookies
  cookies(): cocoascript.NSHTTPCookie;
  setCookies(): void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1408517-getcookiesfortask
  getCookiesForTask_completionHandler(task: cocoascript.NSURLSessionTask, completionHandler: cocoascript.NSHTTPCookie):void;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1412100-cookiesforurl
  cookiesForURL(URL: cocoascript.NSURL):cocoascript.NSHTTPCookie;
  // doc://com.apple.documentation/documentation/foundation/nshttpcookiestorage/1413730-sortedcookiesusingdescriptors
  sortedCookiesUsingDescriptors(sortOrder: cocoascript.NSSortDescriptor):cocoascript.NSHTTPCookie;
  // 
  alloc():cocoascript.NSHTTPCookieStorage;
  // 
  init():cocoascript.NSHTTPCookieStorage;
}
}
declare const NSHTTPCookieStorage: cocoascript.NSHTTPCookieStorage;

