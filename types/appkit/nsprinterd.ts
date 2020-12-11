declare namespace cocoascript {
  /**
   * An object that describes a printer’s capabilities.
   * doc://com.apple.documentation/documentation/appkit/nsprinter
   */
  interface NSPrinter extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525209-printernames
    printerNames(): cocoascript.NSString;
    setPrinterNames(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525216-printertypes
    printerTypes(): cocoascript.NSPrinterTypeName;
    setPrinterTypes(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525189-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1524450-type
    type(): cocoascript.NSPrinterTypeName;
    setType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525222-pagesizeforpaper
    pageSizeForPaper(paperName: cocoascript.NSPrinterPaperName):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525215-languagelevel
    languageLevel(): cocoascript.NSInteger;
    setLanguageLevel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525201-devicedescription
    deviceDescription(): cocoascript.id;
    setDeviceDescription(): void;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525200-iskey
    isKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525217-stringforkey
    stringForKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525219-stringlistforkey
    stringListForKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525212-booleanforkey
    booleanForKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525195-floatforkey
    floatForKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525214-intforkey
    intForKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525198-rectforkey
    rectForKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525205-sizeforkey
    sizeForKey_inTable(key: cocoascript.NSString, table: cocoascript.NSString):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525218-statusfortable
    statusForTable(tableName: cocoascript.NSString):cocoascript.NSPrinterTableStatus;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525224-acceptsbinary
    acceptsBinary():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525197-domain
    domain():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525221-host
    host():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525199-imagerectforpaper
    imageRectForPaper(paperName: cocoascript.NSString):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525187-iscolor
    isColor():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525226-isfontavailable
    isFontAvailable(faceName: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525203-isoutputstackinreverseorder
    isOutputStackInReverseOrder():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsprinter/1525210-note
    note():cocoascript.NSString;
    //
    alloc():cocoascript.NSPrinter;
    //
    init():cocoascript.NSPrinter;
  }
}

declare const NSPrinter: cocoascript.NSPrinter;
