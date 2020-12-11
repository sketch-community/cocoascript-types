declare namespace cocoascript {
  /**
   * A view that embeds web content in your app.
   * doc://com.apple.documentation/documentation/uikit/uiwebview
   */
  interface UIWebView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617937-delegate
    delegate(): cocoascript.UIWebViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617941-loaddata
    loadData_MIMEType_textEncodingName_baseURL(data: cocoascript.NSData, MIMEType: cocoascript.NSString, textEncodingName: cocoascript.NSString, baseURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617979-loadhtmlstring
    loadHTMLString_baseURL(string: cocoascript.NSString, baseURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617957-loadrequest
    loadRequest(request: cocoascript.NSURLRequest):void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617972-request
    request(): cocoascript.NSURLRequest;
    setRequest(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617978-loading
    loading(): cocoascript.BOOL;
    setLoading(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617974-stoploading
    stopLoading():void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617932-reload
    reload():void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617931-cangoback
    canGoBack(): cocoascript.BOOL;
    setCanGoBack(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617951-cangoforward
    canGoForward(): cocoascript.BOOL;
    setCanGoForward(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617975-goback
    goBack():void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617940-goforward
    goForward():void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617976-allowslinkpreview
    allowsLinkPreview(): cocoascript.BOOL;
    setAllowsLinkPreview(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617950-scalespagetofit
    scalesPageToFit(): cocoascript.BOOL;
    setScalesPageToFit(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617955-scrollview
    scrollView(): cocoascript.UIScrollView;
    setScrollView(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617984-suppressesincrementalrendering
    suppressesIncrementalRendering(): cocoascript.BOOL;
    setSuppressesIncrementalRendering(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617967-keyboarddisplayrequiresuseractio
    keyboardDisplayRequiresUserAction(): cocoascript.BOOL;
    setKeyboardDisplayRequiresUserAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617965-datadetectortypes
    dataDetectorTypes(): cocoascript.UIDataDetectorTypes;
    setDataDetectorTypes(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617963-stringbyevaluatingjavascriptfrom
    stringByEvaluatingJavaScriptFromString(script: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617960-allowsinlinemediaplayback
    allowsInlineMediaPlayback(): cocoascript.BOOL;
    setAllowsInlineMediaPlayback(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617954-mediaplaybackrequiresuseraction
    mediaPlaybackRequiresUserAction(): cocoascript.BOOL;
    setMediaPlaybackRequiresUserAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617973-mediaplaybackallowsairplay
    mediaPlaybackAllowsAirPlay(): cocoascript.BOOL;
    setMediaPlaybackAllowsAirPlay(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617944-allowspictureinpicturemediaplayb
    allowsPictureInPictureMediaPlayback(): cocoascript.BOOL;
    setAllowsPictureInPictureMediaPlayback(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617943-gapbetweenpages
    gapBetweenPages(): cocoascript.CGFloat;
    setGapBetweenPages(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617968-pagecount
    pageCount(): cocoascript.NSUInteger;
    setPageCount(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617980-pagelength
    pageLength(): cocoascript.CGFloat;
    setPageLength(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617933-paginationbreakingmode
    paginationBreakingMode(): cocoascript.UIWebPaginationBreakingMode;
    setPaginationBreakingMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617985-paginationmode
    paginationMode(): cocoascript.UIWebPaginationMode;
    setPaginationMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwebview/1617952-detectsphonenumbers
    detectsPhoneNumbers(): cocoascript.BOOL;
    setDetectsPhoneNumbers(): void;
    //
    alloc():cocoascript.UIWebView;
    //
    init():cocoascript.UIWebView;
  }
}

declare const UIWebView: cocoascript.UIWebView;
