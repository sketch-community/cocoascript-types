declare namespace cocoascript {
/**
 * A collection of information about the current process.
 * doc://com.apple.documentation/documentation/foundation/nsprocessinfo
 */
interface NSProcessInfo extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408734-processinfo
  processInfo(): cocoascript.NSProcessInfo;
  setProcessInfo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415596-arguments
  arguments(): cocoascript.NSString;
  setArguments(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417911-environment
  environment(): cocoascript.NSString;
  setEnvironment(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1416432-globallyuniquestring
  globallyUniqueString(): cocoascript.NSString;
  setGloballyUniqueString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/3362531-maccatalystapp
  macCatalystApp(): cocoascript.BOOL;
  setMacCatalystApp(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/3608556-iosapponmac
  iOSAppOnMac(): cocoascript.BOOL;
  setIOSAppOnMac(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415929-processidentifier
  processIdentifier(): number;
  setProcessIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1416428-processname
  processName(): cocoascript.NSString;
  setProcessName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1643193-username
  userName(): cocoascript.NSString;
  setUserName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1643199-fullusername
  fullUserName(): cocoascript.NSString;
  setFullUserName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1412841-disablesuddentermination
  disableSuddenTermination():void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1409836-enablesuddentermination
  enableSuddenTermination():void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417402-disableautomatictermination
  disableAutomaticTermination(reason: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1409422-enableautomatictermination
  enableAutomaticTermination(reason: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1407578-automaticterminationsupportenabl
  automaticTerminationSupportEnabled(): cocoascript.BOOL;
  setAutomaticTerminationSupportEnabled(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417236-hostname
  hostName(): cocoascript.NSString;
  setHostName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1416341-operatingsystem
  operatingSystem():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1407388-operatingsystemname
  operatingSystemName():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408730-operatingsystemversionstring
  operatingSystemVersionString(): cocoascript.NSString;
  setOperatingSystemVersionString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1410906-operatingsystemversion
  operatingSystemVersion(): cocoascript.NSOperatingSystemVersion;
  setOperatingSystemVersion(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1414876-isoperatingsystematleastversion
  isOperatingSystemAtLeastVersion(version: cocoascript.NSOperatingSystemVersion):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415622-processorcount
  processorCount(): cocoascript.NSUInteger;
  setProcessorCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408184-activeprocessorcount
  activeProcessorCount(): cocoascript.NSUInteger;
  setActiveProcessorCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1408211-physicalmemory
  physicalMemory(): number;
  setPhysicalMemory(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1414553-systemuptime
  systemUptime(): cocoascript.NSTimeInterval;
  setSystemUptime(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1415995-beginactivitywithoptions
  beginActivityWithOptions_reason(options: cocoascript.NSActivityOptions, reason: cocoascript.NSString):cocoascript.NSObject;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1411321-endactivity
  endActivity(activity: cocoascript.NSObject):void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1418048-performactivitywithoptions
  performActivityWithOptions_reason_usingBlock(options: cocoascript.NSActivityOptions, reason: cocoascript.NSString, block: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1617030-performexpiringactivitywithreaso
  performExpiringActivityWithReason_usingBlock(reason: cocoascript.NSString, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1417480-thermalstate
  thermalState(): cocoascript.NSProcessInfoThermalState;
  setThermalState(): void;
  // doc://com.apple.documentation/documentation/foundation/nsprocessinfo/1617047-lowpowermodeenabled
  lowPowerModeEnabled(): cocoascript.BOOL;
  setLowPowerModeEnabled(): void;
  // 
  alloc():cocoascript.NSProcessInfo;
  // 
  init():cocoascript.NSProcessInfo;
}
}
declare const NSProcessInfo: cocoascript.NSProcessInfo;

