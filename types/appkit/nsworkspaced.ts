declare namespace cocoascript {
  /**
   * A workspace that can launch other apps and perform a variety of file-handling services.
   * doc://com.apple.documentation/documentation/appkit/nsworkspace
   */
  interface NSWorkspace extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1530344-sharedworkspace
    sharedWorkspace(): cocoascript.NSWorkspace;
    setSharedWorkspace(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1525071-notificationcenter
    notificationCenter(): cocoascript.NSNotificationCenter;
    setNotificationCenter(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/3172701-openurl
    openURL_configuration_completionHandler(url: cocoascript.NSURL, configuration: cocoascript.NSWorkspaceOpenConfiguration, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/3172702-openurls
    openURLs_withApplicationAtURL_configuration_completionHandler(urls: cocoascript.NSURL, applicationURL: cocoascript.NSURL, configuration: cocoascript.NSWorkspaceOpenConfiguration, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1533463-openurl
    openURL(url: cocoascript.NSURL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/3172700-openapplicationaturl
    openApplicationAtURL_configuration_completionHandler(applicationURL: cocoascript.NSURL, configuration: cocoascript.NSWorkspaceOpenConfiguration, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1530417-hideotherapplications
    hideOtherApplications():void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1524490-duplicateurls
    duplicateURLs_completionHandler(URLs: cocoascript.NSURL, handler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1530465-recycleurls
    recycleURLs_completionHandler(URLs: cocoascript.NSURL, handler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1524549-activatefileviewerselectingurls
    activateFileViewerSelectingURLs(fileURLs: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1524399-selectfile
    selectFile_inFileViewerRootedAtPath(fullPath: cocoascript.NSString, rootFullPath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1526144-typeoffile
    typeOfFile_error(absoluteFilePath: cocoascript.NSString, outError: cocoascript._Nullable):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1527222-localizeddescriptionfortype
    localizedDescriptionForType(typeName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1535654-preferredfilenameextensionfortyp
    preferredFilenameExtensionForType(typeName: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1525316-filenameextension
    filenameExtension_isValidForType(filenameExtension: cocoascript.NSString, typeName: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1535903-type
    type_conformsToType(firstTypeName: cocoascript.NSString, secondTypeName: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1534053-urlforapplicationwithbundleident
    URLForApplicationWithBundleIdentifier(bundleIdentifier: cocoascript.NSString):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1535102-getinfoforfile
    getInfoForFile_application_type(fullPath: cocoascript.NSString, appName: cocoascript._Nullable, type: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1533391-urlforapplicationtoopenurl
    URLForApplicationToOpenURL(url: cocoascript.NSURL):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1526987-getfilesysteminfoforpath
    getFileSystemInfoForPath_isRemovable_isWritable_isUnmountable_description_type(fullPath: cocoascript.NSString, removableFlag: cocoascript.BOOL, writableFlag: cocoascript.BOOL, unmountableFlag: cocoascript.BOOL, description: cocoascript._Nullable, fileSystemType: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1529991-isfilepackageatpath
    isFilePackageAtPath(fullPath: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1532097-frontmostapplication
    frontmostApplication(): cocoascript.NSRunningApplication;
    setFrontmostApplication(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1534059-runningapplications
    runningApplications(): cocoascript.NSRunningApplication;
    setRunningApplications(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1525848-menubarowningapplication
    menuBarOwningApplication(): cocoascript.NSRunningApplication;
    setMenuBarOwningApplication(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1528158-iconforfile
    iconForFile(fullPath: cocoascript.NSString):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1527879-iconforfiletype
    iconForFileType(fileType: cocoascript.NSString):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1525487-iconforfiles
    iconForFiles(fullPaths: cocoascript.NSString):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/3553230-iconforcontenttype
    iconForContentType(contentType: cocoascript.UTType):cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1529882-seticon
    setIcon_forFile_options(image: cocoascript.NSImage, fullPath: cocoascript.NSString, options: cocoascript.NSWorkspaceIconCreationOptions):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1527741-unmountandejectdeviceatpath
    unmountAndEjectDeviceAtPath(path: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1530469-unmountandejectdeviceaturl
    unmountAndEjectDeviceAtURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1530635-desktopimageurlforscreen
    desktopImageURLForScreen(screen: cocoascript.NSScreen):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1527228-setdesktopimageurl
    setDesktopImageURL_forScreen_options_error(url: cocoascript.NSURL, screen: cocoascript.NSScreen, options: cocoascript.NSWorkspace, error: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1530855-desktopimageoptionsforscreen
    desktopImageOptionsForScreen(screen: cocoascript.NSScreen):cocoascript.NSWorkspace;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1532131-showsearchresultsforquerystring
    showSearchResultsForQueryString(queryString: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1533953-filelabels
    fileLabels(): cocoascript.NSString;
    setFileLabels(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1527553-filelabelcolors
    fileLabelColors(): cocoascript.NSColor;
    setFileLabelColors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1525376-notefilesystemchanged
    noteFileSystemChanged(path: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1533106-extendpoweroffby
    extendPowerOffBy(requested: cocoascript.NSInteger):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1524656-accessibilitydisplayshoulddiffer
    accessibilityDisplayShouldDifferentiateWithoutColor(): cocoascript.BOOL;
    setAccessibilityDisplayShouldDifferentiateWithoutColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1526290-accessibilitydisplayshouldincrea
    accessibilityDisplayShouldIncreaseContrast(): cocoascript.BOOL;
    setAccessibilityDisplayShouldIncreaseContrast(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1533006-accessibilitydisplayshouldreduce
    accessibilityDisplayShouldReduceTransparency(): cocoascript.BOOL;
    setAccessibilityDisplayShouldReduceTransparency(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1644068-accessibilitydisplayshouldinvert
    accessibilityDisplayShouldInvertColors(): cocoascript.BOOL;
    setAccessibilityDisplayShouldInvertColors(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/1644069-accessibilitydisplayshouldreduce
    accessibilityDisplayShouldReduceMotion(): cocoascript.BOOL;
    setAccessibilityDisplayShouldReduceMotion(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/2880322-switchcontrolenabled
    switchControlEnabled(): cocoascript.BOOL;
    setSwitchControlEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/2880317-voiceoverenabled
    voiceOverEnabled(): cocoascript.BOOL;
    setVoiceOverEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspace/3025774-requestauthorizationoftype
    requestAuthorizationOfType_completionHandler(type: cocoascript.NSWorkspaceAuthorizationType, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacewilllaunchapplicationnotification
    NSWorkspaceWillLaunchApplicationNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceWillLaunchApplicationNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacedidlaunchapplicationnotification
    NSWorkspaceDidLaunchApplicationNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceDidLaunchApplicationNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacedidterminateapplicationnotification
    NSWorkspaceDidTerminateApplicationNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceDidTerminateApplicationNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacesessiondidbecomeactivenotification
    NSWorkspaceSessionDidBecomeActiveNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceSessionDidBecomeActiveNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacesessiondidresignactivenotification
    NSWorkspaceSessionDidResignActiveNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceSessionDidResignActiveNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacedidmountnotification
    NSWorkspaceDidMountNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceDidMountNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacewillunmountnotification
    NSWorkspaceWillUnmountNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceWillUnmountNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacedidunmountnotification
    NSWorkspaceDidUnmountNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceDidUnmountNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacedidwakenotification
    NSWorkspaceDidWakeNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceDidWakeNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacewillsleepnotification
    NSWorkspaceWillSleepNotification(): cocoascript.NSNotificationName;
    setNSWorkspaceWillSleepNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacevolumelocalizednamekey
    NSWorkspaceVolumeLocalizedNameKey(): cocoascript.const;
    setNSWorkspaceVolumeLocalizedNameKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacevolumeurlkey
    NSWorkspaceVolumeURLKey(): cocoascript.const;
    setNSWorkspaceVolumeURLKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacevolumeoldlocalizednamekey
    NSWorkspaceVolumeOldLocalizedNameKey(): cocoascript.const;
    setNSWorkspaceVolumeOldLocalizedNameKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsworkspacevolumeoldurlkey
    NSWorkspaceVolumeOldURLKey(): cocoascript.const;
    setNSWorkspaceVolumeOldURLKey(): void;
    //
    alloc():cocoascript.NSWorkspace;
    //
    init():cocoascript.NSWorkspace;
  }
}

declare const NSWorkspace: cocoascript.NSWorkspace;
