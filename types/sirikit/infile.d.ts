declare namespace cocoascript {
  /**
   * An object that describes a file.
   * doc://com.apple.documentation/documentation/sirikit/infile
   */
  interface INFile extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/infile/3152217-filename
    filename(): cocoascript.NSString;
    setFilename(): void;
    // doc://com.apple.documentation/documentation/sirikit/infile/3152213-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/sirikit/infile/3152214-fileurl
    fileURL(): cocoascript.NSURL;
    setFileURL(): void;
    // doc://com.apple.documentation/documentation/sirikit/infile/3152218-typeidentifier
    typeIdentifier(): cocoascript.NSString;
    setTypeIdentifier(): void;
    //
    alloc():cocoascript.INFile;
    //
    init():cocoascript.INFile;
  }
}

declare const INFile: cocoascript.INFile;
