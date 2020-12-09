declare namespace cocoascript {
/**
 * An object that stores information that’s used to generate printed output. 
 * doc://com.apple.documentation/documentation/appkit/nsprintinfo
 */
interface NSPrintInfo extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1535610-sharedprintinfo
  sharedPrintInfo(): cocoascript.NSPrintInfo;
  setSharedPrintInfo(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1526768-initwithdictionary
  initWithDictionary(attributes: cocoascript.NSPrintInfo):cocoascript.NSPrintInfo;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1644252-init
  init():cocoascript.NSPrintInfo;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1644406-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSPrintInfo;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1534030-papersize
  paperSize(): cocoascript.NSSize;
  setPaperSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1529662-topmargin
  topMargin(): cocoascript.CGFloat;
  setTopMargin(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1528397-bottommargin
  bottomMargin(): cocoascript.CGFloat;
  setBottomMargin(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1533430-leftmargin
  leftMargin(): cocoascript.CGFloat;
  setLeftMargin(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1530882-rightmargin
  rightMargin(): cocoascript.CGFloat;
  setRightMargin(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1526570-imageablepagebounds
  imageablePageBounds(): cocoascript.NSRect;
  setImageablePageBounds(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1533755-orientation
  orientation(): cocoascript.NSPaperOrientation;
  setOrientation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1532124-papername
  paperName(): cocoascript.NSPrinterPaperName;
  setPaperName(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1524573-localizedpapername
  localizedPaperName(): cocoascript.NSString;
  setLocalizedPaperName(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1532693-horizontalpagination
  horizontalPagination(): cocoascript.NSPrintingPaginationMode;
  setHorizontalPagination(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1526743-verticalpagination
  verticalPagination(): cocoascript.NSPrintingPaginationMode;
  setVerticalPagination(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1534703-horizontallycentered
  horizontallyCentered(): cocoascript.BOOL;
  setHorizontallyCentered(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1530330-verticallycentered
  verticallyCentered(): cocoascript.BOOL;
  setVerticallyCentered(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1524495-printer
  printer(): cocoascript.NSPrinter;
  setPrinter(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1528717-jobdisposition
  jobDisposition(): cocoascript.NSPrintJobDispositionValue;
  setJobDisposition(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1529453-setupprintoperationdefaultvalues
  setUpPrintOperationDefaultValues():void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1524990-dictionary
  dictionary():cocoascript.NSPrintInfo;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1534094-selectiononly
  selectionOnly(): cocoascript.BOOL;
  setSelectionOnly(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1529753-scalingfactor
  scalingFactor(): cocoascript.CGFloat;
  setScalingFactor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1529413-printsettings
  printSettings(): cocoascript.id;
  setPrintSettings(): void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1534414-pmprintsession
  PMPrintSession():void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1528578-pmpageformat
  PMPageFormat():void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1533537-pmprintsettings
  PMPrintSettings():void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1534429-updatefrompmpageformat
  updateFromPMPageFormat():void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1525003-updatefrompmprintsettings
  updateFromPMPrintSettings():void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1530099-takesettingsfrompdfinfo
  takeSettingsFromPDFInfo(inPDFInfo: cocoascript.NSPDFInfo):void;
  // doc://com.apple.documentation/documentation/appkit/nsprintinfo/1530521-defaultprinter
  defaultPrinter(): cocoascript.NSPrinter;
  setDefaultPrinter(): void;
  // 
  alloc():cocoascript.NSPrintInfo;
  // 
  init():cocoascript.NSPrintInfo;
}
}
declare const NSPrintInfo: cocoascript.NSPrintInfo;

