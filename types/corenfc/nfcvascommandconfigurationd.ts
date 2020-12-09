declare namespace cocoascript {
/**
 * An object providing the configuration for a GET VAS DATA command.
 * doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration
 */
interface NFCVASCommandConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043860-initwithvasmode
  initWithVASMode_passTypeIdentifier_url(mode: cocoascript.NFCVASMode, passTypeIdentifier: cocoascript.NSString, url: cocoascript.NSURL):cocoascript.NFCVASCommandConfiguration;
  // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043861-mode
  mode(): cocoascript.NFCVASMode;
  setMode(): void;
  // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043862-passtypeidentifier
  passTypeIdentifier(): cocoascript.NSString;
  setPassTypeIdentifier(): void;
  // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043863-url
  url(): cocoascript.NSURL;
  setUrl(): void;
  // 
  alloc():cocoascript.NFCVASCommandConfiguration;
  // 
  init():cocoascript.NFCVASCommandConfiguration;
}
}
declare const NFCVASCommandConfiguration: cocoascript.NFCVASCommandConfiguration;

