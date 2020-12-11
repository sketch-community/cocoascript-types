declare namespace cocoascript {
  /**
   * An object that provides a promise for the pasteboard.
   * doc://com.apple.documentation/documentation/appkit/nsfilepromiseprovider
   */
  interface NSFilePromiseProvider extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseprovider/1644655-init
    init():cocoascript.NSFilePromiseProvider;
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseprovider/1644594-initwithfiletype
    initWithFileType_delegate(fileType: cocoascript.NSString, delegate: cocoascript.NSFilePromiseProviderDelegate):cocoascript.NSFilePromiseProvider;
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseprovider/1644726-delegate
    delegate(): cocoascript.NSFilePromiseProviderDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseprovider/1644738-filetype
    fileType(): cocoascript.NSString;
    setFileType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfilepromiseprovider/1644255-userinfo
    userInfo(): cocoascript.id;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSFilePromiseProvider;
    //
    init():cocoascript.NSFilePromiseProvider;
  }
}

declare const NSFilePromiseProvider: cocoascript.NSFilePromiseProvider;
