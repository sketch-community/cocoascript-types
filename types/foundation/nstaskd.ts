declare namespace cocoascript {
/**
 * An object representing a subprocess of the current process.
 * doc://com.apple.documentation/documentation/foundation/nstask
 */
interface NSTask extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nstask/1415790-init
  init():cocoascript.NSTask;
  // doc://com.apple.documentation/documentation/foundation/nstask/1408983-arguments
  arguments(): cocoascript.NSString;
  setArguments(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1413110-currentdirectorypath
  currentDirectoryPath(): cocoascript.NSString;
  setCurrentDirectoryPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1409412-environment
  environment(): cocoascript.NSString;
  setEnvironment(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1414221-launchpath
  launchPath(): cocoascript.NSString;
  setLaunchPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1412022-processidentifier
  processIdentifier(): number;
  setProcessIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1414916-standarderror
  standardError(): cocoascript.id;
  setStandardError(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1411576-standardinput
  standardInput(): cocoascript.id;
  setStandardInput(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1407627-standardoutput
  standardOutput(): cocoascript.id;
  setStandardOutput(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1410874-interrupt
  interrupt():void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1414189-launch
  launch():void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1407819-resume
  resume():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nstask/1411590-suspend
  suspend():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nstask/1409620-terminate
  terminate():void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1415808-waituntilexit
  waitUntilExit():void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1415788-running
  running(): cocoascript.BOOL;
  setRunning(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1415801-terminationstatus
  terminationStatus(): number;
  setTerminationStatus(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1415605-terminationreason
  terminationReason(): cocoascript.NSTaskTerminationReason;
  setTerminationReason(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1408983-arguments
  arguments(): cocoascript.NSString;
  setArguments(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1413110-currentdirectorypath
  currentDirectoryPath(): cocoascript.NSString;
  setCurrentDirectoryPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1409412-environment
  environment(): cocoascript.NSString;
  setEnvironment(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1414221-launchpath
  launchPath(): cocoascript.NSString;
  setLaunchPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1414916-standarderror
  standardError(): cocoascript.id;
  setStandardError(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1411576-standardinput
  standardInput(): cocoascript.id;
  setStandardInput(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1407627-standardoutput
  standardOutput(): cocoascript.id;
  setStandardOutput(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1408746-terminationhandler
  terminationHandler(): cocoascript.NSTask;
  setTerminationHandler(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/2890107-currentdirectoryurl
  currentDirectoryURL(): cocoascript.NSURL;
  setCurrentDirectoryURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/2890106-executableurl
  executableURL(): cocoascript.NSURL;
  setExecutableURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/1415794-qualityofservice
  qualityOfService(): cocoascript.NSQualityOfService;
  setQualityOfService(): void;
  // doc://com.apple.documentation/documentation/foundation/nstask/2890105-launchandreturnerror
  launchAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSTask;
  // 
  init():cocoascript.NSTask;
}
}
declare const NSTask: cocoascript.NSTask;

