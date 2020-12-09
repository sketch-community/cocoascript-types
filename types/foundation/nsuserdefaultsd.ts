declare namespace cocoascript {
/**
 * An interface to the user’s defaults database, where you store key-value pairs persistently across launches of your app.
 * doc://com.apple.documentation/documentation/foundation/nsuserdefaults
 */
interface NSUserDefaults extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416603-standarduserdefaults
  standardUserDefaults(): cocoascript.NSUserDefaults;
  setStandardUserDefaults(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414356-init
  init():cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1409957-initwithsuitename
  initWithSuiteName(suitename: cocoascript.NSString):cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1410095-objectforkey
  objectForKey(defaultName: cocoascript.NSString):cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408648-urlforkey
  URLForKey(defaultName: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414792-arrayforkey
  arrayForKey(defaultName: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408563-dictionaryforkey
  dictionaryForKey(defaultName: cocoascript.NSString):cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416700-stringforkey
  stringForKey(defaultName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416414-stringarrayforkey
  stringArrayForKey(defaultName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1409590-dataforkey
  dataForKey(defaultName: cocoascript.NSString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416388-boolforkey
  boolForKey(defaultName: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1407405-integerforkey
  integerForKey(defaultName: cocoascript.NSString):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414027-floatforkey
  floatForKey(defaultName: cocoascript.NSString):number;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416581-doubleforkey
  doubleForKey(defaultName: cocoascript.NSString):number;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1415919-dictionaryrepresentation
  dictionaryRepresentation():cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414067-setobject
  setObject_forKey(value: cocoascript.NSUserDefaults, defaultName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1413320-setfloat
  setFloat_forKey(value: number, defaultName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408646-setdouble
  setDouble_forKey(value: number, defaultName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1413614-setinteger
  setInteger_forKey(value: cocoascript.NSInteger, defaultName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408905-setbool
  setBool_forKey(value: cocoascript.BOOL, defaultName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414194-seturl
  setURL_forKey(url: cocoascript.NSURL, defaultName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1411182-removeobjectforkey
  removeObjectForKey(defaultName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1410294-addsuitenamed
  addSuiteNamed(suiteName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408047-removesuitenamed
  removeSuiteNamed(suiteName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1417065-registerdefaults
  registerDefaults(registrationDictionary: cocoascript.NSUserDefaults):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1412197-persistentdomainforname
  persistentDomainForName(domainName: cocoascript.NSString):cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408187-setpersistentdomain
  setPersistentDomain_forName(domain: cocoascript.NSUserDefaults, domainName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1417339-removepersistentdomainforname
  removePersistentDomainForName(domainName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1589081-persistentdomainnames
  persistentDomainNames():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414231-volatiledomainnames
  volatileDomainNames(): cocoascript.NSString;
  setVolatileDomainNames(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1409592-volatiledomainforname
  volatileDomainForName(domainName: cocoascript.NSString):cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1413720-setvolatiledomain
  setVolatileDomain_forName(domain: cocoascript.NSUserDefaults, domainName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1415955-removevolatiledomainforname
  removeVolatileDomainForName(domainName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1408635-objectisforcedforkey
  objectIsForcedForKey(key: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1416306-objectisforcedforkey
  objectIsForcedForKey_inDomain(key: cocoascript.NSString, domain: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsargumentdomain
  NSArgumentDomain(): cocoascript.const;
  setNSArgumentDomain(): void;
  // doc://com.apple.documentation/documentation/foundation/nsglobaldomain
  NSGlobalDomain(): cocoascript.const;
  setNSGlobalDomain(): void;
  // doc://com.apple.documentation/documentation/foundation/nsregistrationdomain
  NSRegistrationDomain(): cocoascript.const;
  setNSRegistrationDomain(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1589066-initwithuser
  initWithUser(username: cocoascript.NSString):cocoascript.NSUserDefaults;
  // doc://com.apple.documentation/documentation/foundation/nsuserdefaults/1414005-synchronize
  synchronize():cocoascript.BOOL;
  // 
  alloc():cocoascript.NSUserDefaults;
  // 
  init():cocoascript.NSUserDefaults;
}
}
declare const NSUserDefaults: cocoascript.NSUserDefaults;

