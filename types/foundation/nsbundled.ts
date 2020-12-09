declare namespace cocoascript {
/**
 * A representation of the code and resources stored in a bundle directory on disk. 
 * doc://com.apple.documentation/documentation/foundation/nsbundle
 */
interface NSBundle extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1410786-mainbundle
  mainBundle(): cocoascript.NSBundle;
  setMainBundle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1408056-allframeworks
  allFrameworks(): cocoascript.NSBundle;
  setAllFrameworks(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1413705-allbundles
  allBundles(): cocoascript.NSBundle;
  setAllBundles(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1409352-initwithurl
  initWithURL(url: cocoascript.NSURL):cocoascript.NSBundle;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1412741-initwithpath
  initWithPath(path: cocoascript.NSString):cocoascript.NSBundle;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1618147-loadnibnamed
  loadNibNamed_owner_options(name: cocoascript.NSString, owner: cocoascript.NSBundle, options: cocoascript.NSBundle):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1402909-loadnibnamed
  loadNibNamed_owner_topLevelObjects(nibName: cocoascript.NSNibName, owner: cocoascript.NSBundle, topLevelObjects: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1402910-loadnibfile
  loadNibFile_externalNameTable_withZone(fileName: cocoascript.NSString, context: cocoascript.NSDictionary, zone: cocoascript.NSZone):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1416712-urlforresource
  URLForResource_withExtension_subdirectory(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1411540-urlforresource
  URLForResource_withExtension(name: cocoascript.NSString, ext: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1407424-urlsforresourceswithextension
  URLsForResourcesWithExtension_subdirectory(ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1417378-urlforresource
  URLForResource_withExtension_subdirectory_localization(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1414688-urlsforresourceswithextension
  URLsForResourcesWithExtension_subdirectory_localization(ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1410989-pathforresource
  pathForResource_ofType(name: cocoascript.NSString, ext: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1409670-pathforresource
  pathForResource_ofType_inDirectory(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1413471-pathforresource
  pathForResource_ofType_inDirectory_forLocalization(name: cocoascript.NSString, ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1413058-pathsforresourcesoftype
  pathsForResourcesOfType_inDirectory(ext: cocoascript.NSString, subpath: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1416940-pathsforresourcesoftype
  pathsForResourcesOfType_inDirectory_forLocalization(ext: cocoascript.NSString, subpath: cocoascript.NSString, localizationName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1519886-urlforimageresource
  URLForImageResource(name: cocoascript.NSImageName):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1519854-pathforimageresource
  pathForImageResource(name: cocoascript.NSImageName):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1519901-imageforresource
  imageForResource(name: cocoascript.NSImageName):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1477280-pathforsoundresource
  pathForSoundResource(name: cocoascript.NSSoundName):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1417694-localizedstringforkey
  localizedStringForKey_value_table(key: cocoascript.NSString, value: cocoascript.NSString, tableName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1500918-contexthelpforkey
  contextHelpForKey(key: cocoascript.NSHelpManagerContextHelpKey):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1414821-resourceurl
  resourceURL(): cocoascript.NSURL;
  setResourceURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1410470-executableurl
  executableURL(): cocoascript.NSURL;
  setExecutableURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1417617-privateframeworksurl
  privateFrameworksURL(): cocoascript.NSURL;
  setPrivateFrameworksURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1411774-sharedframeworksurl
  sharedFrameworksURL(): cocoascript.NSURL;
  setSharedFrameworksURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1409603-builtinpluginsurl
  builtInPlugInsURL(): cocoascript.NSURL;
  setBuiltInPlugInsURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1411412-urlforauxiliaryexecutable
  URLForAuxiliaryExecutable(executableName: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1416823-sharedsupporturl
  sharedSupportURL(): cocoascript.NSURL;
  setSharedSupportURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1407276-appstorereceipturl
  appStoreReceiptURL(): cocoascript.NSURL;
  setAppStoreReceiptURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1417723-resourcepath
  resourcePath(): cocoascript.NSString;
  setResourcePath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1409078-executablepath
  executablePath(): cocoascript.NSString;
  setExecutablePath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1415562-privateframeworkspath
  privateFrameworksPath(): cocoascript.NSString;
  setPrivateFrameworksPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1417226-sharedframeworkspath
  sharedFrameworksPath(): cocoascript.NSString;
  setSharedFrameworksPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1408900-builtinpluginspath
  builtInPlugInsPath(): cocoascript.NSString;
  setBuiltInPlugInsPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1415214-pathforauxiliaryexecutable
  pathForAuxiliaryExecutable(executableName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1411609-sharedsupportpath
  sharedSupportPath(): cocoascript.NSString;
  setSharedSupportPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1415654-bundleurl
  bundleURL(): cocoascript.NSURL;
  setBundleURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1407973-bundlepath
  bundlePath(): cocoascript.NSString;
  setBundlePath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1418023-bundleidentifier
  bundleIdentifier(): cocoascript.NSString;
  setBundleIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1413477-infodictionary
  infoDictionary(): cocoascript.id;
  setInfoDictionary(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1408696-objectforinfodictionarykey
  objectForInfoDictionaryKey(key: cocoascript.NSString):cocoascript.NSBundle;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1417415-localizations
  localizations(): cocoascript.NSString;
  setLocalizations(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1413220-preferredlocalizations
  preferredLocalizations(): cocoascript.NSString;
  setPreferredLocalizations(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1417526-developmentlocalization
  developmentLocalization(): cocoascript.NSString;
  setDevelopmentLocalization(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1407645-localizedinfodictionary
  localizedInfoDictionary(): cocoascript.id;
  setLocalizedInfoDictionary(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1614845-setpreservationpriority
  setPreservationPriority_forTags(priority: number, tags: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1614839-preservationpriorityfortag
  preservationPriorityForTag(tag: cocoascript.NSString):number;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1407299-classnamed
  classNamed(className: cocoascript.NSString):cocoascript.Class;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1409048-principalclass
  principalClass(): cocoascript.Class;
  setPrincipalClass(): void;
  // doc://com.apple.documentation/documentation/foundation/nsloadedclasses
  NSLoadedClasses(): cocoascript.const;
  setNSLoadedClasses(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1415499-executablearchitectures
  executableArchitectures(): cocoascript.NSNumber;
  setExecutableArchitectures(): void;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1415083-preflightandreturnerror
  preflightAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1415927-load
  load():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1411819-loadandreturnerror
  loadAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1412388-unload
  unload():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsbundle/1413594-loaded
  loaded(): cocoascript.BOOL;
  setLoaded(): void;
  // 
  alloc():cocoascript.NSBundle;
  // 
  init():cocoascript.NSBundle;
}
}
declare const NSBundle: cocoascript.NSBundle;

