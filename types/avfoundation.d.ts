declare namespace cocoascript {
  /**
   * An object that models timed audiovisual media.
   * https://developer.apple.com/documentation/avfoundation/avasset
   */
  interface AVAsset extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avasset/1389943-assetwithurl
    assetWithURL(URL: NSURL):AVAsset;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746529-loadtrackwithtrackid
    loadTrackWithTrackID_completionHandler(trackID: CMPersistentTrackID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746531-loadtrackswithmediatype
    loadTracksWithMediaType_completionHandler(mediaType: AVMediaType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746530-loadtrackswithmediacharacteristi
    loadTracksWithMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746590-findunusedtrackidwithcompletionh
    findUnusedTrackIDWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746528-loadmetadataforformat
    loadMetadataForFormat_completionHandler(format: AVMetadataFormat, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746527-loadmediaselectiongroupformediac
    loadMediaSelectionGroupForMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746526-loadchaptermetadatagroupswithtit
    loadChapterMetadataGroupsWithTitleLocale_containingItemsWithCommonKeys_completionHandler(locale: NSLocale, commonKeys: AVMetadataKey, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3746525-loadchaptermetadatagroupsbestmat
    loadChapterMetadataGroupsBestMatchingPreferredLanguages_completionHandler(preferredLanguages: string | cocoascript.NSString, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1388722-cancelloading
    cancelLoading():void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390489-referencerestrictions
    referenceRestrictions(): AVAssetReferenceRestrictions;
    setReferenceRestrictions(value: AVAssetReferenceRestrictions): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1389400-duration
    duration(): CMTime;
    setDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390850-providesprecisedurationandtiming
    providesPreciseDurationAndTiming(): boolean;
    setProvidesPreciseDurationAndTiming(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/3197641-minimumtimeoffsetfromlive
    minimumTimeOffsetFromLive(): CMTime;
    setMinimumTimeOffsetFromLive(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1387953-tracks
    tracks(): AVAssetTrack;
    setTracks(value: AVAssetTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390145-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVAssetTrack;
    // https://developer.apple.com/documentation/avfoundation/avasset/1387140-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVAssetTrack;
    // https://developer.apple.com/documentation/avfoundation/avasset/1389554-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVAssetTrack;
    // https://developer.apple.com/documentation/avfoundation/avasset/1385898-unusedtrackid
    unusedTrackID():CMPersistentTrackID;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390697-trackgroups
    trackGroups(): AVAssetTrackGroup;
    setTrackGroups(value: AVAssetTrackGroup): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1386884-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390498-commonmetadata
    commonMetadata(): AVMetadataItem;
    setCommonMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1385823-availablemetadataformats
    availableMetadataFormats(): AVMetadataFormat;
    setAvailableMetadataFormats(value: AVMetadataFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1387759-metadataforformat
    metadataForFormat(format: AVMetadataFormat):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avasset/1386342-creationdate
    creationDate(): AVMetadataItem;
    setCreationDate(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1388104-lyrics
    lyrics(): string | cocoascript.NSString;
    setLyrics(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1385974-playable
    playable(): boolean;
    setPlayable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1389245-exportable
    exportable(): boolean;
    setExportable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390475-readable
    readable(): boolean;
    setReadable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1386129-composable
    composable(): boolean;
    setComposable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390333-compatiblewithairplayvideo
    compatibleWithAirPlayVideo(): boolean;
    setCompatibleWithAirPlayVideo(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1616742-compatiblewithsavedphotosalbum
    compatibleWithSavedPhotosAlbum(): boolean;
    setCompatibleWithSavedPhotosAlbum(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1389912-preferredrate
    preferredRate(): number;
    setPreferredRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390457-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1385906-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(value: CGAffineTransform): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/2935636-preferreddisplaycriteria
    preferredDisplayCriteria(): AVDisplayCriteria;
    setPreferredDisplayCriteria(value: AVDisplayCriteria): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/2890796-allmediaselections
    allMediaSelections(): AVMediaSelection;
    setAllMediaSelections(value: AVMediaSelection): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1386122-preferredmediaselection
    preferredMediaSelection(): AVMediaSelection;
    setPreferredMediaSelection(value: AVMediaSelection): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1389433-availablemediacharacteristicswit
    availableMediaCharacteristicsWithMediaSelectionOptions(): AVMediaCharacteristic;
    setAvailableMediaCharacteristicsWithMediaSelectionOptions(value: AVMediaCharacteristic): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1387496-mediaselectiongroupformediachara
    mediaSelectionGroupForMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMediaSelectionGroup;
    // https://developer.apple.com/documentation/avfoundation/avasset/1388228-availablechapterlocales
    availableChapterLocales(): NSLocale;
    setAvailableChapterLocales(value: NSLocale): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1388966-chaptermetadatagroupswithtitlelo
    chapterMetadataGroupsWithTitleLocale_containingItemsWithCommonKeys(locale: NSLocale, commonKeys: AVMetadataKey):AVTimedMetadataGroup;
    // https://developer.apple.com/documentation/avfoundation/avasset/1390909-chaptermetadatagroupsbestmatchin
    chapterMetadataGroupsBestMatchingPreferredLanguages(preferredLanguages: string | cocoascript.NSString):AVTimedMetadataGroup;
    // https://developer.apple.com/documentation/avfoundation/avasset/1389223-hasprotectedcontent
    hasProtectedContent(): boolean;
    setHasProtectedContent(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1389520-cancontainfragments
    canContainFragments(): boolean;
    setCanContainFragments(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1385589-containsfragments
    containsFragments(): boolean;
    setContainsFragments(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/2715834-overalldurationhint
    overallDurationHint(): CMTime;
    setOverallDurationHint(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avasset/1508715-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(value: CGSize): void;
    //
    alloc():AVAsset;
    //
    init():AVAsset;
  }
}

declare const AVAsset: cocoascript.AVAsset;
declare namespace cocoascript {
  /**
   * A group of related tracks in an asset.
   * https://developer.apple.com/documentation/avfoundation/avassettrackgroup
   */
  interface AVAssetTrackGroup extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassettrackgroup/1389024-trackids
    trackIDs(): NSNumber;
    setTrackIDs(value: NSNumber): void;
    //
    alloc():AVAssetTrackGroup;
    //
    init():AVAssetTrackGroup;
  }
}

declare const AVAssetTrackGroup: cocoascript.AVAssetTrackGroup;
declare namespace cocoascript {
  /**
   * An object that contains properties defining the display criteria for a media asset.
   * https://developer.apple.com/documentation/avfoundation/avdisplaycriteria
   */
  interface AVDisplayCriteria extends NSObject {
    //
    alloc():AVDisplayCriteria;
    //
    init():AVDisplayCriteria;
  }
}

declare const AVDisplayCriteria: cocoascript.AVDisplayCriteria;
declare namespace cocoascript {
  /**
   * An object that manages capture activity and coordinates the flow of data from input devices to capture outputs.
   * https://developer.apple.com/documentation/avfoundation/avcapturesession
   */
  interface AVCaptureSession extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1390865-inputs
    inputs(): AVCaptureInput;
    setInputs(value: AVCaptureInput): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1387180-canaddinput
    canAddInput(input: AVCaptureInput):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1387239-addinput
    addInput(input: AVCaptureInput):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1388073-removeinput
    removeInput(input: AVCaptureInput):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1387621-outputs
    outputs(): AVCaptureOutput;
    setOutputs(value: AVCaptureOutput): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1388944-canaddoutput
    canAddOutput(output: AVCaptureOutput):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1387325-addoutput
    addOutput(output: AVCaptureOutput):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1385688-removeoutput
    removeOutput(output: AVCaptureOutput):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1388185-startrunning
    startRunning():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1385661-stoprunning
    stopRunning():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1388133-running
    running(): boolean;
    setRunning(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1620475-interrupted
    interrupted(): boolean;
    setInterrupted(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1389174-beginconfiguration
    beginConfiguration():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1388173-commitconfiguration
    commitConfiguration():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1389696-sessionpreset
    sessionPreset(): AVCaptureSessionPreset;
    setSessionPreset(value: AVCaptureSessionPreset): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1389824-cansetsessionpreset
    canSetSessionPreset(preset: AVCaptureSessionPreset):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/3153020-connections
    connections(): AVCaptureConnection;
    setConnections(value: AVCaptureConnection): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1389687-addconnection
    addConnection(connection: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1389596-canaddconnection
    canAddConnection(connection: AVCaptureConnection):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1390383-addinputwithnoconnections
    addInputWithNoConnections(input: AVCaptureInput):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1388709-addoutputwithnoconnections
    addOutputWithNoConnections(output: AVCaptureOutput):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1390041-removeconnection
    removeConnection(connection: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1620490-usesapplicationaudiosession
    usesApplicationAudioSession(): boolean;
    setUsesApplicationAudioSession(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1620477-automaticallyconfiguresapplicati
    automaticallyConfiguresApplicationAudioSession(): boolean;
    setAutomaticallyConfiguresApplicationAudioSession(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1388984-masterclock
    masterClock(): CMClockRef;
    setMasterClock(value: CMClockRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesession/1648764-automaticallyconfigurescapturede
    automaticallyConfiguresCaptureDeviceForWideColor(): boolean;
    setAutomaticallyConfiguresCaptureDeviceForWideColor(value: boolean): void;
    //
    alloc():AVCaptureSession;
    //
    init():AVCaptureSession;
  }
}

declare const AVCaptureSession: cocoascript.AVCaptureSession;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionruntimeerrornotification
declare const AVCaptureSessionRuntimeErrorNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessiondidstartrunningnotification
declare const AVCaptureSessionDidStartRunningNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessiondidstoprunningnotification
declare const AVCaptureSessionDidStopRunningNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionwasinterruptednotification
declare const AVCaptureSessionWasInterruptedNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessioninterruptionendednotification
declare const AVCaptureSessionInterruptionEndedNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionerrorkey
declare const AVCaptureSessionErrorKey: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessioninterruptionreasonkey
declare const AVCaptureSessionInterruptionReasonKey: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessioninterruptionsystempressurestatekey
declare const AVCaptureSessionInterruptionSystemPressureStateKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A capture session that supports simultaneous capture from multiple inputs of the same media type.
   * https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession
   */
  interface AVCaptureMultiCamSession extends AVCaptureSession {
    // https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession/3183002-multicamsupported
    multiCamSupported(): boolean;
    setMultiCamSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession/3153017-hardwarecost
    hardwareCost(): number;
    setHardwareCost(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession/3153019-systempressurecost
    systemPressureCost(): number;
    setSystemPressureCost(value: number): void;
    //
    alloc():AVCaptureMultiCamSession;
    //
    init():AVCaptureMultiCamSession;
  }
}

declare const AVCaptureMultiCamSession: cocoascript.AVCaptureMultiCamSession;
declare namespace cocoascript {
  /**
   * A device that provides input (such as audio or video) for capture sessions and offers controls for hardware-specific capture features.
   * https://developer.apple.com/documentation/avfoundation/avcapturedevice
   */
  interface AVCaptureDevice extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388904-devicewithuniqueid
    deviceWithUniqueID(deviceUniqueID: string | cocoascript.NSString):AVCaptureDevice;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386589-defaultdevicewithmediatype
    defaultDeviceWithMediaType(mediaType: AVMediaType):AVCaptureDevice;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2361508-defaultdevicewithdevicetype
    defaultDeviceWithDeviceType_mediaType_position(deviceType: AVCaptureDeviceType, mediaType: AVMediaType, position: AVCaptureDevicePosition):AVCaptureDevice;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386237-devices
    devices():AVCaptureDevice;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1390520-deviceswithmediatype
    devicesWithMediaType(mediaType: AVMediaType):AVCaptureDevice;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624584-requestaccessformediatype
    requestAccessForMediaType_completionHandler(mediaType: AVMediaType, handler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624613-authorizationstatusformediatype
    authorizationStatusForMediaType(mediaType: AVMediaType):AVAuthorizationStatus;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1387810-lockforconfiguration
    lockForConfiguration(outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1387917-unlockforconfiguration
    unlockForConfiguration():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389512-inusebyanotherapplication
    inUseByAnotherApplication(): boolean;
    setInUseByAnotherApplication(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1387761-suspended
    suspended(): boolean;
    setSuspended(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388720-linkeddevices
    linkedDevices(): AVCaptureDevice;
    setLinkedDevices(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1387804-transporttype
    transportType(): number;
    setTransportType(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388404-inputsources
    inputSources(): AVCaptureDeviceInputSource;
    setInputSources(value: AVCaptureDeviceInputSource): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1390141-activeinputsource
    activeInputSource(): AVCaptureDeviceInputSource;
    setActiveInputSource(value: AVCaptureDeviceInputSource): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1390477-uniqueid
    uniqueID(): string | cocoascript.NSString;
    setUniqueID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389500-modelid
    modelID(): string | cocoascript.NSString;
    setModelID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1390193-manufacturer
    manufacturer(): string | cocoascript.NSString;
    setManufacturer(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388222-localizedname
    localizedName(): string | cocoascript.NSString;
    setLocalizedName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389343-connected
    connected(): boolean;
    setConnected(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3153002-virtualdevice
    virtualDevice(): boolean;
    setVirtualDevice(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2361119-devicetype
    deviceType(): AVCaptureDeviceType;
    setDeviceType(value: AVCaptureDeviceType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3153001-constituentdevices
    constituentDevices(): AVCaptureDevice;
    setConstituentDevices(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624589-lensaperture
    lensAperture(): number;
    setLensAperture(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386909-position
    position(): AVCaptureDevicePosition;
    setPosition(value: AVCaptureDevicePosition): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389487-hasmediatype
    hasMediaType(mediaType: AVMediaType):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386263-supportsavcapturesessionpreset
    supportsAVCaptureSessionPreset(preset: AVCaptureSessionPreset):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3738419-centerstageenabled
    centerStageEnabled(): boolean;
    setCenterStageEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3738417-centerstageactive
    centerStageActive(): boolean;
    setCenterStageActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3738418-centerstagecontrolmode
    centerStageControlMode(): AVCaptureCenterStageControlMode;
    setCenterStageControlMode(value: AVCaptureCenterStageControlMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388738-formats
    formats(): AVCaptureDeviceFormat;
    setFormats(value: AVCaptureDeviceFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389221-activeformat
    activeFormat(): AVCaptureDeviceFormat;
    setActiveFormat(value: AVCaptureDeviceFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624606-exposureduration
    exposureDuration(): CMTime;
    setExposureDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624646-setexposuremodecustomwithduratio
    setExposureModeCustomWithDuration_ISO_completionHandler(duration: CMTime, ISO: number, handler: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624630-exposuretargetoffset
    exposureTargetOffset(): number;
    setExposureTargetOffset(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624651-exposuretargetbias
    exposureTargetBias(): number;
    setExposureTargetBias(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624604-minexposuretargetbias
    minExposureTargetBias(): number;
    setMinExposureTargetBias(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624576-maxexposuretargetbias
    maxExposureTargetBias(): number;
    setMaxExposureTargetBias(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2968216-activemaxexposureduration
    activeMaxExposureDuration(): CMTime;
    setActiveMaxExposureDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624637-setexposuretargetbias
    setExposureTargetBias_completionHandler(bias: number, handler: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386253-adjustingexposure
    adjustingExposure(): boolean;
    setAdjustingExposure(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388858-exposuremode
    exposureMode(): AVCaptureExposureMode;
    setExposureMode(value: AVCaptureExposureMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389048-isexposuremodesupported
    isExposureModeSupported(exposureMode: AVCaptureExposureMode):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388777-exposurepointofinterest
    exposurePointOfInterest(): CGPoint;
    setExposurePointOfInterest(value: CGPoint): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1387263-exposurepointofinterestsupported
    exposurePointOfInterestSupported(): boolean;
    setExposurePointOfInterestSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2865755-activedepthdataformat
    activeDepthDataFormat(): AVCaptureDeviceFormat;
    setActiveDepthDataFormat(value: AVCaptureDeviceFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2968215-activedepthdataminframeduration
    activeDepthDataMinFrameDuration(): CMTime;
    setActiveDepthDataMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624611-videozoomfactor
    videoZoomFactor(): CGFloat;
    setVideoZoomFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2865754-minavailablevideozoomfactor
    minAvailableVideoZoomFactor(): CGFloat;
    setMinAvailableVideoZoomFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2865758-maxavailablevideozoomfactor
    maxAvailableVideoZoomFactor(): CGFloat;
    setMaxAvailableVideoZoomFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624614-ramptovideozoomfactor
    rampToVideoZoomFactor_withRate(factor: CGFloat, rate: number):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624588-rampingvideozoom
    rampingVideoZoom(): boolean;
    setRampingVideoZoom(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624631-cancelvideozoomramp
    cancelVideoZoomRamp():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3153003-virtualdeviceswitchovervideozoom
    virtualDeviceSwitchOverVideoZoomFactors(): NSNumber;
    setVirtualDeviceSwitchOverVideoZoomFactors(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2908991-dualcameraswitchovervideozoomfac
    dualCameraSwitchOverVideoZoomFactor(): CGFloat;
    setDualCameraSwitchOverVideoZoomFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3751762-minimumfocusdistance
    minimumFocusDistance(): NSInteger;
    setMinimumFocusDistance(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389191-focusmode
    focusMode(): AVCaptureFocusMode;
    setFocusMode(value: AVCaptureFocusMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1390215-isfocusmodesupported
    isFocusModeSupported(focusMode: AVCaptureFocusMode):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1385853-focuspointofinterest
    focusPointOfInterest(): CGPoint;
    setFocusPointOfInterest(value: CGPoint): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1390436-focuspointofinterestsupported
    focusPointOfInterestSupported(): boolean;
    setFocusPointOfInterestSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1390577-adjustingfocus
    adjustingFocus(): boolean;
    setAdjustingFocus(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624653-smoothautofocusenabled
    smoothAutoFocusEnabled(): boolean;
    setSmoothAutoFocusEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624625-smoothautofocussupported
    smoothAutoFocusSupported(): boolean;
    setSmoothAutoFocusSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624622-autofocusrangerestriction
    autoFocusRangeRestriction(): AVCaptureAutoFocusRangeRestriction;
    setAutoFocusRangeRestriction(value: AVCaptureAutoFocusRangeRestriction): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624570-autofocusrangerestrictionsupport
    autoFocusRangeRestrictionSupported(): boolean;
    setAutoFocusRangeRestrictionSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388988-hasflash
    hasFlash(): boolean;
    setHasFlash(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624627-flashavailable
    flashAvailable(): boolean;
    setFlashAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388116-flashmode
    flashMode(): AVCaptureFlashMode;
    setFlashMode(value: AVCaptureFlashMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386434-isflashmodesupported
    isFlashModeSupported(flashMode: AVCaptureFlashMode):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624598-flashactive
    flashActive(): boolean;
    setFlashActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1387674-hastorch
    hasTorch(): boolean;
    setHasTorch(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624626-torchavailable
    torchAvailable(): boolean;
    setTorchAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624578-torchactive
    torchActive(): boolean;
    setTorchActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624605-torchlevel
    torchLevel(): number;
    setTorchLevel(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386035-torchmode
    torchMode(): AVCaptureTorchMode;
    setTorchMode(value: AVCaptureTorchMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388822-istorchmodesupported
    isTorchModeSupported(torchMode: AVCaptureTorchMode):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624609-settorchmodeonwithlevel
    setTorchModeOnWithLevel_error(torchLevel: number, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624595-lowlightboostsupported
    lowLightBoostSupported(): boolean;
    setLowLightBoostSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624602-lowlightboostenabled
    lowLightBoostEnabled(): boolean;
    setLowLightBoostEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624610-automaticallyenableslowlightboos
    automaticallyEnablesLowLightBoostWhenAvailable(): boolean;
    setAutomaticallyEnablesLowLightBoostWhenAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1389290-activevideominframeduration
    activeVideoMinFrameDuration(): CMTime;
    setActiveVideoMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1387816-activevideomaxframeduration
    activeVideoMaxFrameDuration(): CMTime;
    setActiveVideoMaxFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388479-transportcontrolssupported
    transportControlsSupported(): boolean;
    setTransportControlsSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386373-transportcontrolsplaybackmode
    transportControlsPlaybackMode(): AVCaptureDeviceTransportControlsPlaybackMode;
    setTransportControlsPlaybackMode(value: AVCaptureDeviceTransportControlsPlaybackMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386639-transportcontrolsspeed
    transportControlsSpeed(): AVCaptureDeviceTransportControlsSpeed;
    setTransportControlsSpeed(value: AVCaptureDeviceTransportControlsSpeed): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388481-settransportcontrolsplaybackmode
    setTransportControlsPlaybackMode_speed(mode: AVCaptureDeviceTransportControlsPlaybackMode, speed: AVCaptureDeviceTransportControlsSpeed):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624644-subjectareachangemonitoringenabl
    subjectAreaChangeMonitoringEnabled(): boolean;
    setSubjectAreaChangeMonitoringEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624643-lensposition
    lensPosition(): number;
    setLensPosition(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624617-setfocusmodelockedwithlenspositi
    setFocusModeLockedWithLensPosition_completionHandler(lensPosition: number, handler: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2361529-lockingfocuswithcustomlenspositi
    lockingFocusWithCustomLensPositionSupported(): boolean;
    setLockingFocusWithCustomLensPositionSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1388587-iswhitebalancemodesupported
    isWhiteBalanceModeSupported(whiteBalanceMode: AVCaptureWhiteBalanceMode):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386369-whitebalancemode
    whiteBalanceMode(): AVCaptureWhiteBalanceMode;
    setWhiteBalanceMode(value: AVCaptureWhiteBalanceMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1386544-adjustingwhitebalance
    adjustingWhiteBalance(): boolean;
    setAdjustingWhiteBalance(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624650-chromaticityvaluesfordevicewhite
    chromaticityValuesForDeviceWhiteBalanceGains(whiteBalanceGains: AVCaptureWhiteBalanceGains):AVCaptureWhiteBalanceChromaticityValues;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624633-devicewhitebalancegains
    deviceWhiteBalanceGains(): AVCaptureWhiteBalanceGains;
    setDeviceWhiteBalanceGains(value: AVCaptureWhiteBalanceGains): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624586-maxwhitebalancegain
    maxWhiteBalanceGain(): number;
    setMaxWhiteBalanceGain(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624575-devicewhitebalancegainsforchroma
    deviceWhiteBalanceGainsForChromaticityValues(chromaticityValues: AVCaptureWhiteBalanceChromaticityValues):AVCaptureWhiteBalanceGains;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624628-devicewhitebalancegainsfortemper
    deviceWhiteBalanceGainsForTemperatureAndTintValues(tempAndTintValues: AVCaptureWhiteBalanceTemperatureAndTintValues):AVCaptureWhiteBalanceGains;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624574-grayworlddevicewhitebalancegains
    grayWorldDeviceWhiteBalanceGains(): AVCaptureWhiteBalanceGains;
    setGrayWorldDeviceWhiteBalanceGains(value: AVCaptureWhiteBalanceGains): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624568-setwhitebalancemodelockedwithdev
    setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains_completionHandler(whiteBalanceGains: AVCaptureWhiteBalanceGains, handler: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624640-temperatureandtintvaluesfordevic
    temperatureAndTintValuesForDeviceWhiteBalanceGains(whiteBalanceGains: AVCaptureWhiteBalanceGains):AVCaptureWhiteBalanceTemperatureAndTintValues;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2360576-lockingwhitebalancewithcustomdev
    lockingWhiteBalanceWithCustomDeviceGainsSupported(): boolean;
    setLockingWhiteBalanceWithCustomDeviceGainsSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624649-iso
    ISO(): number;
    setISO(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624593-automaticallyadjustsvideohdrenab
    automaticallyAdjustsVideoHDREnabled(): boolean;
    setAutomaticallyAdjustsVideoHDREnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1624645-videohdrenabled
    videoHDREnabled(): boolean;
    setVideoHDREnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/1648668-activecolorspace
    activeColorSpace(): AVCaptureColorSpace;
    setActiveColorSpace(value: AVCaptureColorSpace): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3194614-geometricdistortioncorrectionsup
    geometricDistortionCorrectionSupported(): boolean;
    setGeometricDistortionCorrectionSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3194613-geometricdistortioncorrectionena
    geometricDistortionCorrectionEnabled(): boolean;
    setGeometricDistortionCorrectionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3229937-extrinsicmatrixfromdevice
    extrinsicMatrixFromDevice_toDevice(fromDevice: AVCaptureDevice, toDevice: AVCaptureDevice):NSData;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/2933375-systempressurestate
    systemPressureState(): AVCaptureSystemPressureState;
    setSystemPressureState(value: AVCaptureSystemPressureState): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3375756-globaltonemappingenabled
    globalToneMappingEnabled(): boolean;
    setGlobalToneMappingEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875310-setprimaryconstituentdeviceswitc
    setPrimaryConstituentDeviceSwitchingBehavior_restrictedSwitchingBehaviorConditions(switchingBehavior: AVCapturePrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875309-primaryconstituentdeviceswitchin
    primaryConstituentDeviceSwitchingBehavior(): AVCapturePrimaryConstituentDeviceSwitchingBehavior;
    setPrimaryConstituentDeviceSwitchingBehavior(value: AVCapturePrimaryConstituentDeviceSwitchingBehavior): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875308-primaryconstituentdevicerestrict
    primaryConstituentDeviceRestrictedSwitchingBehaviorConditions(): AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions;
    setPrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions(value: AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875304-activeprimaryconstituentdevice
    activePrimaryConstituentDevice(): AVCaptureDevice;
    setActivePrimaryConstituentDevice(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875306-activeprimaryconstituentdevicesw
    activePrimaryConstituentDeviceSwitchingBehavior(): AVCapturePrimaryConstituentDeviceSwitchingBehavior;
    setActivePrimaryConstituentDeviceSwitchingBehavior(value: AVCapturePrimaryConstituentDeviceSwitchingBehavior): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875305-activeprimaryconstituentdevicere
    activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions(): AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions;
    setActivePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions(value: AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875311-supportedfallbackprimaryconstitu
    supportedFallbackPrimaryConstituentDevices(): AVCaptureDevice;
    setSupportedFallbackPrimaryConstituentDevices(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3875307-fallbackprimaryconstituentdevice
    fallbackPrimaryConstituentDevices(): AVCaptureDevice;
    setFallbackPrimaryConstituentDevices(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3850455-activemicrophonemode
    activeMicrophoneMode(): AVCaptureMicrophoneMode;
    setActiveMicrophoneMode(value: AVCaptureMicrophoneMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3850458-preferredmicrophonemode
    preferredMicrophoneMode(): AVCaptureMicrophoneMode;
    setPreferredMicrophoneMode(value: AVCaptureMicrophoneMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3850456-portraiteffectactive
    portraitEffectActive(): boolean;
    setPortraitEffectActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3850457-portraiteffectenabled
    portraitEffectEnabled(): boolean;
    setPortraitEffectEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevice/3850459-showsystemuserinterface
    showSystemUserInterface(systemUserInterface: AVCaptureSystemUserInterface):void;
    //
    alloc():AVCaptureDevice;
    //
    init():AVCaptureDevice;
  }
}

declare const AVCaptureDevice: cocoascript.AVCaptureDevice;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicewasconnectednotification
declare const AVCaptureDeviceWasConnectedNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicewasdisconnectednotification
declare const AVCaptureDeviceWasDisconnectedNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicesubjectareadidchangenotification
declare const AVCaptureDeviceSubjectAreaDidChangeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcapturesessioninterruptionsystempressurestatekey
declare const AVCaptureSessionInterruptionSystemPressureStateKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A capture input that provides media from a capture device to a capture session.
   * https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput
   */
  interface AVCaptureDeviceInput extends AVCaptureInput {
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/1387609-initwithdevice
    initWithDevice_error(device: AVCaptureDevice, outError: NSError):AVCaptureDeviceInput;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/1450880-deviceinputwithdevice
    deviceInputWithDevice_error(device: AVCaptureDevice, outError: NSError):AVCaptureDeviceInput;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/1387915-device
    device(): AVCaptureDevice;
    setDevice(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/3173170-portswithmediatype
    portsWithMediaType_sourceDeviceType_sourceDevicePosition(mediaType: AVMediaType, sourceDeviceType: AVCaptureDeviceType, sourceDevicePosition: AVCaptureDevicePosition):AVCaptureInputPort;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/2968218-unifiedautoexposuredefaultsenabl
    unifiedAutoExposureDefaultsEnabled(): boolean;
    setUnifiedAutoExposureDefaultsEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/3153008-videominframedurationoverride
    videoMinFrameDurationOverride(): CMTime;
    setVideoMinFrameDurationOverride(value: CMTime): void;
    //
    alloc():AVCaptureDeviceInput;
    //
    init():AVCaptureDeviceInput;
  }
}

declare const AVCaptureDeviceInput: cocoascript.AVCaptureDeviceInput;
declare namespace cocoascript {
  /**
   * A container for image data from a photo capture output.
   * https://developer.apple.com/documentation/avfoundation/avcapturephoto
   */
  interface AVCapturePhoto extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873898-resolvedsettings
    resolvedSettings(): AVCaptureResolvedPhotoSettings;
    setResolvedSettings(value: AVCaptureResolvedPhotoSettings): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873906-photocount
    photoCount(): NSInteger;
    setPhotoCount(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873981-timestamp
    timestamp(): CMTime;
    setTimestamp(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873894-rawphoto
    rawPhoto(): boolean;
    setRawPhoto(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873914-pixelbuffer
    pixelBuffer(): CVPixelBufferRef;
    setPixelBuffer(value: CVPixelBufferRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2875952-embeddedthumbnailphotoformat
    embeddedThumbnailPhotoFormat(): id;
    setEmbeddedThumbnailPhotoFormat(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873984-previewpixelbuffer
    previewPixelBuffer(): CVPixelBufferRef;
    setPreviewPixelBuffer(value: CVPixelBufferRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873909-depthdata
    depthData(): AVDepthData;
    setDepthData(value: AVDepthData): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2890249-cameracalibrationdata
    cameraCalibrationData(): AVCameraCalibrationData;
    setCameraCalibrationData(value: AVCameraCalibrationData): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2890250-sourcedevicetype
    sourceDeviceType(): AVCaptureDeviceType;
    setSourceDeviceType(value: AVCaptureDeviceType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873982-metadata
    metadata(): id;
    setMetadata(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2977523-portraiteffectsmatte
    portraitEffectsMatte(): AVPortraitEffectsMatte;
    setPortraitEffectsMatte(value: AVPortraitEffectsMatte): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2977522-filedatarepresentationwithcustom
    fileDataRepresentationWithCustomizer(customizer: AVCapturePhotoFileDataRepresentationCustomizer):NSData;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873919-filedatarepresentation
    fileDataRepresentation():NSData;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873963-cgimagerepresentation
    CGImageRepresentation():CGImageRef;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873945-previewcgimagerepresentation
    previewCGImageRepresentation():CGImageRef;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2875953-filedatarepresentationwithreplac
    fileDataRepresentationWithReplacementMetadata_replacementEmbeddedThumbnailPhotoFormat_replacementEmbeddedThumbnailPixelBuffer_replacementDepthData(replacementMetadata: AVCapturePhoto, replacementEmbeddedThumbnailPhotoFormat: AVCapturePhoto, replacementEmbeddedThumbnailPixelBuffer: CVPixelBufferRef, replacementDepthData: AVDepthData):NSData;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873968-bracketsettings
    bracketSettings(): AVCaptureBracketedStillImageSettings;
    setBracketSettings(value: AVCaptureBracketedStillImageSettings): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2873946-sequencecount
    sequenceCount(): NSInteger;
    setSequenceCount(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2880219-lensstabilizationstatus
    lensStabilizationStatus(): AVCaptureLensStabilizationStatus;
    setLensStabilizationStatus(value: AVCaptureLensStabilizationStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/3153009-semanticsegmentationmattefortype
    semanticSegmentationMatteForType(semanticSegmentationMatteType: AVSemanticSegmentationMatteType):AVSemanticSegmentationMatte;
    //
    alloc():AVCapturePhoto;
    //
    init():AVCapturePhoto;
  }
}

declare const AVCapturePhoto: cocoascript.AVCapturePhoto;
declare namespace cocoascript {
  /**
   * A capture output for still image, Live Photos, and other photography workflows.
   * https://developer.apple.com/documentation/avfoundation/avcapturephotooutput
   */
  interface AVCapturePhotoOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2879540-init
    init():AVCapturePhotoOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2879618-new
    new():AVCapturePhotoOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648765-capturephotowithsettings
    capturePhotoWithSettings_delegate(settings: AVCapturePhotoSettings, delegate: AVCapturePhotoCaptureDelegate):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1778630-availablephotopixelformattypes
    availablePhotoPixelFormatTypes(): NSNumber;
    setAvailablePhotoPixelFormatTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1778628-availablerawphotopixelformattype
    availableRawPhotoPixelFormatTypes(): NSNumber;
    setAvailableRawPhotoPixelFormatTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2873950-supportedphotopixelformattypesfo
    supportedPhotoPixelFormatTypesForFileType(fileType: AVFileType):NSNumber;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2873921-supportedrawphotopixelformattype
    supportedRawPhotoPixelFormatTypesForFileType(fileType: AVFileType):NSNumber;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3697090-isappleprorawpixelformat
    isAppleProRAWPixelFormat(pixelFormat: any):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3697091-isbayerrawpixelformat
    isBayerRAWPixelFormat(pixelFormat: any):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648654-availablephotocodectypes
    availablePhotoCodecTypes(): AVVideoCodecType;
    setAvailablePhotoCodecTypes(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2873916-supportedphotocodectypesforfilet
    supportedPhotoCodecTypesForFileType(fileType: AVFileType):AVVideoCodecType;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2873918-availablephotofiletypes
    availablePhotoFileTypes(): AVFileType;
    setAvailablePhotoFileTypes(value: AVFileType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2873910-availablerawphotofiletypes
    availableRawPhotoFileTypes(): AVFileType;
    setAvailableRawPhotoFileTypes(value: AVFileType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3697089-appleprorawsupported
    appleProRAWSupported(): boolean;
    setAppleProRAWSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3697088-appleprorawenabled
    appleProRAWEnabled(): boolean;
    setAppleProRAWEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3566331-contentawaredistortioncorrection
    contentAwareDistortionCorrectionSupported(): boolean;
    setContentAwareDistortionCorrectionSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3566330-contentawaredistortioncorrection
    contentAwareDistortionCorrectionEnabled(): boolean;
    setContentAwareDistortionCorrectionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648607-lensstabilizationduringbracketed
    lensStabilizationDuringBracketedCaptureSupported(): boolean;
    setLensStabilizationDuringBracketedCaptureSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648702-maxbracketedcapturephotocount
    maxBracketedCapturePhotoCount(): NSUInteger;
    setMaxBracketedCapturePhotoCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648766-supportedflashmodes
    supportedFlashModes(): NSNumber;
    setSupportedFlashModes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2968219-autoredeyereductionsupported
    autoRedEyeReductionSupported(): boolean;
    setAutoRedEyeReductionSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648698-stillimagestabilizationsupported
    stillImageStabilizationSupported(): boolean;
    setStillImageStabilizationSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648703-isflashscene
    isFlashScene(): boolean;
    setIsFlashScene(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1778622-isstillimagestabilizationscene
    isStillImageStabilizationScene(): boolean;
    setIsStillImageStabilizationScene(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1778634-photosettingsforscenemonitoring
    photoSettingsForSceneMonitoring(): AVCapturePhotoSettings;
    setPhotoSettingsForSceneMonitoring(value: AVCapturePhotoSettings): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648721-highresolutioncaptureenabled
    highResolutionCaptureEnabled(): boolean;
    setHighResolutionCaptureEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648622-livephotocapturesupported
    livePhotoCaptureSupported(): boolean;
    setLivePhotoCaptureSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648772-livephotocaptureenabled
    livePhotoCaptureEnabled(): boolean;
    setLivePhotoCaptureEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648615-livephotocapturesuspended
    livePhotoCaptureSuspended(): boolean;
    setLivePhotoCaptureSuspended(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1648778-livephotoautotrimmingenabled
    livePhotoAutoTrimmingEnabled(): boolean;
    setLivePhotoAutoTrimmingEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2866560-availablelivephotovideocodectype
    availableLivePhotoVideoCodecTypes(): AVVideoCodecType;
    setAvailableLivePhotoVideoCodecTypes(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2866563-depthdatadeliverysupported
    depthDataDeliverySupported(): boolean;
    setDepthDataDeliverySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2866565-depthdatadeliveryenabled
    depthDataDeliveryEnabled(): boolean;
    setDepthDataDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2977529-portraiteffectsmattedeliveryenab
    portraitEffectsMatteDeliveryEnabled(): boolean;
    setPortraitEffectsMatteDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2977530-portraiteffectsmattedeliverysupp
    portraitEffectsMatteDeliverySupported(): boolean;
    setPortraitEffectsMatteDeliverySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephoto/2977523-portraiteffectsmatte
    portraitEffectsMatte(): AVPortraitEffectsMatte;
    setPortraitEffectsMatte(value: AVPortraitEffectsMatte): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2726864-dualcamerafusionsupported
    dualCameraFusionSupported(): boolean;
    setDualCameraFusionSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2890245-dualcameradualphotodeliverysuppo
    dualCameraDualPhotoDeliverySupported(): boolean;
    setDualCameraDualPhotoDeliverySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2890248-cameracalibrationdatadeliverysup
    cameraCalibrationDataDeliverySupported(): boolean;
    setCameraCalibrationDataDeliverySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2890246-dualcameradualphotodeliveryenabl
    dualCameraDualPhotoDeliveryEnabled(): boolean;
    setDualCameraDualPhotoDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3192191-virtualdevicefusionsupported
    virtualDeviceFusionSupported(): boolean;
    setVirtualDeviceFusionSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3192190-virtualdeviceconstituentphotodel
    virtualDeviceConstituentPhotoDeliverySupported(): boolean;
    setVirtualDeviceConstituentPhotoDeliverySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3192189-virtualdeviceconstituentphotodel
    virtualDeviceConstituentPhotoDeliveryEnabled(): boolean;
    setVirtualDeviceConstituentPhotoDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2305506-preparedphotosettingsarray
    preparedPhotoSettingsArray(): AVCapturePhotoSettings;
    setPreparedPhotoSettingsArray(value: AVCapturePhotoSettings): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/2305505-setpreparedphotosettingsarray
    setPreparedPhotoSettingsArray_completionHandler(preparedPhotoSettingsArray: AVCapturePhotoSettings, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1778657-jpegphotodatarepresentationforjp
    JPEGPhotoDataRepresentationForJPEGSampleBuffer_previewPhotoSampleBuffer(JPEGSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef):NSData;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/1778643-dngphotodatarepresentationforraw
    DNGPhotoDataRepresentationForRawSampleBuffer_previewPhotoSampleBuffer(rawSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef):NSData;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3153011-availablesemanticsegmentationmat
    availableSemanticSegmentationMatteTypes(): AVSemanticSegmentationMatteType;
    setAvailableSemanticSegmentationMatteTypes(value: AVSemanticSegmentationMatteType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3153012-enabledsemanticsegmentationmatte
    enabledSemanticSegmentationMatteTypes(): AVSemanticSegmentationMatteType;
    setEnabledSemanticSegmentationMatteTypes(value: AVSemanticSegmentationMatteType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/3182995-maxphotoqualityprioritization
    maxPhotoQualityPrioritization(): AVCapturePhotoQualityPrioritization;
    setMaxPhotoQualityPrioritization(value: AVCapturePhotoQualityPrioritization): void;
    //
    alloc():AVCapturePhotoOutput;
    //
    init():AVCapturePhotoOutput;
  }
}

declare const AVCapturePhotoOutput: cocoascript.AVCapturePhotoOutput;
declare namespace cocoascript {
  /**
   * Methods for monitoring progress and receiving results from a photo capture output.
   * https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate
   */
  interface AVCapturePhotoCaptureDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778621-captureoutput
    captureOutput_willBeginCaptureForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778625-captureoutput
    captureOutput_willCapturePhotoForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778632-captureoutput
    captureOutput_didCapturePhotoForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778618-captureoutput
    captureOutput_didFinishCaptureForResolvedSettings_error(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/2873949-captureoutput
    captureOutput_didFinishProcessingPhoto_error(output: AVCapturePhotoOutput, photo: AVCapturePhoto, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778658-captureoutput
    captureOutput_didFinishRecordingLivePhotoMovieForEventualFileAtURL_resolvedSettings(output: AVCapturePhotoOutput, outputFileURL: NSURL, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778637-captureoutput
    captureOutput_didFinishProcessingLivePhotoToMovieFileAtURL_duration_photoDisplayTime_resolvedSettings_error(output: AVCapturePhotoOutput, outputFileURL: NSURL, duration: CMTime, photoDisplayTime: CMTime, resolvedSettings: AVCaptureResolvedPhotoSettings, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778647-captureoutput
    captureOutput_didFinishProcessingPhotoSampleBuffer_previewPhotoSampleBuffer_resolvedSettings_bracketSettings_error(output: AVCapturePhotoOutput, photoSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/1778639-captureoutput
    captureOutput_didFinishProcessingRawPhotoSampleBuffer_previewPhotoSampleBuffer_resolvedSettings_bracketSettings_error(output: AVCapturePhotoOutput, rawSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A capture output that records scene depth information on compatible camera devices.
   * https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput
   */
  interface AVCaptureDepthDataOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/2879538-init
    init():AVCaptureDepthDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/2879590-new
    new():AVCaptureDepthDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/2865670-alwaysdiscardslatedepthdata
    alwaysDiscardsLateDepthData(): boolean;
    setAlwaysDiscardsLateDepthData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/2881290-filteringenabled
    filteringEnabled(): boolean;
    setFilteringEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/2873864-setdelegate
    setDelegate_callbackQueue(delegate: AVCaptureDepthDataOutputDelegate, callbackQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/2873865-delegate
    delegate(): AVCaptureDepthDataOutputDelegate;
    setDelegate(value: AVCaptureDepthDataOutputDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/2873863-delegatecallbackqueue
    delegateCallbackQueue(): dispatch_queue_t;
    setDelegateCallbackQueue(value: dispatch_queue_t): void;
    //
    alloc():AVCaptureDepthDataOutput;
    //
    init():AVCaptureDepthDataOutput;
  }
}

declare const AVCaptureDepthDataOutput: cocoascript.AVCaptureDepthDataOutput;
declare namespace cocoascript {
  /**
   * A container for per-pixel distance or disparity information captured by compatible camera devices.
   * https://developer.apple.com/documentation/avfoundation/avdepthdata
   */
  interface AVDepthData extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881221-depthdatafromdictionaryrepresent
    depthDataFromDictionaryRepresentation_error(imageSourceAuxDataInfoDictionary: NSDictionary, outError: NSError):AVDepthData;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2873883-dictionaryrepresentationforauxil
    dictionaryRepresentationForAuxiliaryDataType(outAuxDataType: string | cocoascript.NSString):NSDictionary;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881227-depthdatamap
    depthDataMap(): CVPixelBufferRef;
    setDepthDataMap(value: CVPixelBufferRef): void;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881228-depthdatatype
    depthDataType(): any;
    setDepthDataType(value: any): void;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881224-depthdatafiltered
    depthDataFiltered(): boolean;
    setDepthDataFiltered(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881229-depthdataaccuracy
    depthDataAccuracy(): AVDepthDataAccuracy;
    setDepthDataAccuracy(value: AVDepthDataAccuracy): void;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2919804-depthdataquality
    depthDataQuality(): AVDepthDataQuality;
    setDepthDataQuality(value: AVDepthDataQuality): void;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881225-depthdatabyapplyingexiforientati
    depthDataByApplyingExifOrientation(exifOrientation: CGImagePropertyOrientation):AVDepthData;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881222-depthdatabyconvertingtodepthdata
    depthDataByConvertingToDepthDataType(depthDataType: any):AVDepthData;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881233-availabledepthdatatypes
    availableDepthDataTypes(): NSNumber;
    setAvailableDepthDataTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881231-depthdatabyreplacingdepthdatamap
    depthDataByReplacingDepthDataMapWithPixelBuffer_error(pixelBuffer: CVPixelBufferRef, outError: NSError):AVDepthData;
    // https://developer.apple.com/documentation/avfoundation/avdepthdata/2881230-cameracalibrationdata
    cameraCalibrationData(): AVCameraCalibrationData;
    setCameraCalibrationData(value: AVCameraCalibrationData): void;
    //
    alloc():AVDepthData;
    //
    init():AVDepthData;
  }
}

declare const AVDepthData: cocoascript.AVDepthData;
declare namespace cocoascript {
  /**
   * An auxiliary image used to separate foreground from background with high resolution.
   * https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte
   */
  interface AVPortraitEffectsMatte extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/2976125-portraiteffectsmattefromdictiona
    portraitEffectsMatteFromDictionaryRepresentation_error(imageSourceAuxDataInfoDictionary: NSDictionary, outError: NSError):AVPortraitEffectsMatte;
    // https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/2976123-portraiteffectsmattebyapplyingex
    portraitEffectsMatteByApplyingExifOrientation(exifOrientation: CGImagePropertyOrientation):AVPortraitEffectsMatte;
    // https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/2976124-portraiteffectsmattebyreplacingp
    portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBuffer_error(pixelBuffer: CVPixelBufferRef, outError: NSError):AVPortraitEffectsMatte;
    // https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/2976121-mattingimage
    mattingImage(): CVPixelBufferRef;
    setMattingImage(value: CVPixelBufferRef): void;
    // https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/2976122-pixelformattype
    pixelFormatType(): any;
    setPixelFormatType(value: any): void;
    // https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/2976120-dictionaryrepresentationforauxil
    dictionaryRepresentationForAuxiliaryDataType(outAuxDataType: string | cocoascript.NSString):NSDictionary;
    //
    alloc():AVPortraitEffectsMatte;
    //
    init():AVPortraitEffectsMatte;
  }
}

declare const AVPortraitEffectsMatte: cocoascript.AVPortraitEffectsMatte;
declare namespace cocoascript {
  /**
   * An object that wraps a matting image for a particular semantic segmentation.
   * https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte
   */
  interface AVSemanticSegmentationMatte extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/3152124-semanticsegmentationmattefromima
    semanticSegmentationMatteFromImageSourceAuxiliaryDataType_dictionaryRepresentation_error(imageSourceAuxiliaryDataType: CFStringRef, imageSourceAuxiliaryDataInfoDictionary: NSDictionary, outError: NSError):AVSemanticSegmentationMatte;
    // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/3152123-semanticsegmentationmattebyrepla
    semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer_error(pixelBuffer: CVPixelBufferRef, outError: NSError):AVSemanticSegmentationMatte;
    // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/3152122-semanticsegmentationmattebyapply
    semanticSegmentationMatteByApplyingExifOrientation(exifOrientation: CGImagePropertyOrientation):AVSemanticSegmentationMatte;
    // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/3152118-dictionaryrepresentationforauxil
    dictionaryRepresentationForAuxiliaryDataType(outAuxDataType: string | cocoascript.NSString):NSDictionary;
    // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/3152119-mattetype
    matteType(): AVSemanticSegmentationMatteType;
    setMatteType(value: AVSemanticSegmentationMatteType): void;
    // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/3152120-mattingimage
    mattingImage(): CVPixelBufferRef;
    setMattingImage(value: CVPixelBufferRef): void;
    // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/3152121-pixelformattype
    pixelFormatType(): any;
    setPixelFormatType(value: any): void;
    //
    alloc():AVSemanticSegmentationMatte;
    //
    init():AVSemanticSegmentationMatte;
  }
}

declare const AVSemanticSegmentationMatte: cocoascript.AVSemanticSegmentationMatte;
declare namespace cocoascript {
  /**
   * A capture output that records video and audio to a QuickTime movie file.
   * https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput
   */
  interface AVCaptureMovieFileOutput extends AVCaptureFileOutput {
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/2879321-new
    new():AVCaptureMovieFileOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/2879213-init
    init():AVCaptureMovieFileOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/1387146-moviefragmentinterval
    movieFragmentInterval(): CMTime;
    setMovieFragmentInterval(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/1387808-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/2968217-supportedoutputsettingskeysforco
    supportedOutputSettingsKeysForConnection(connection: AVCaptureConnection):NSString;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/1386479-outputsettingsforconnection
    outputSettingsForConnection(connection: AVCaptureConnection):AVCaptureMovieFileOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/1388448-setoutputsettings
    setOutputSettings_forConnection(outputSettings: AVCaptureMovieFileOutput, connection: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/1648381-availablevideocodectypes
    availableVideoCodecTypes(): AVVideoCodecType;
    setAvailableVideoCodecTypes(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/1616292-recordsvideoorientationandmirror
    recordsVideoOrientationAndMirroringChangesAsMetadataTrackForConnection(connection: AVCaptureConnection):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/1616284-setrecordsvideoorientationandmir
    setRecordsVideoOrientationAndMirroringChanges_asMetadataTrackForConnection(doRecordChanges: boolean, connection: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/3875326-primaryconstituentdeviceswitchin
    primaryConstituentDeviceSwitchingBehaviorForRecordingEnabled(): boolean;
    setPrimaryConstituentDeviceSwitchingBehaviorForRecordingEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/3875327-setprimaryconstituentdeviceswitc
    setPrimaryConstituentDeviceSwitchingBehaviorForRecording_restrictedSwitchingBehaviorConditions(switchingBehavior: AVCapturePrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/3875325-primaryconstituentdeviceswitchin
    primaryConstituentDeviceSwitchingBehaviorForRecording(): AVCapturePrimaryConstituentDeviceSwitchingBehavior;
    setPrimaryConstituentDeviceSwitchingBehaviorForRecording(value: AVCapturePrimaryConstituentDeviceSwitchingBehavior): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/3875324-primaryconstituentdevicerestrict
    primaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording(): AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions;
    setPrimaryConstituentDeviceRestrictedSwitchingBehaviorConditionsForRecording(value: AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions): void;
    //
    alloc():AVCaptureMovieFileOutput;
    //
    init():AVCaptureMovieFileOutput;
  }
}

declare const AVCaptureMovieFileOutput: cocoascript.AVCaptureMovieFileOutput;
declare namespace cocoascript {
  /**
   * A capture output that records video and provides access to video frames for processing.
   * https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput
   */
  interface AVCaptureVideoDataOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1389945-videosettings
    videoSettings(): id;
    setVideoSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1616296-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1385780-alwaysdiscardslatevideoframes
    alwaysDiscardsLateVideoFrames(): boolean;
    setAlwaysDiscardsLateVideoFrames(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/3153021-automaticallyconfiguresoutputbuf
    automaticallyConfiguresOutputBufferDimensions(): boolean;
    setAutomaticallyConfiguresOutputBufferDimensions(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/3153022-deliverspreviewsizedoutputbuffer
    deliversPreviewSizedOutputBuffers(): boolean;
    setDeliversPreviewSizedOutputBuffers(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/2867900-recommendedvideosettingsforvideo
    recommendedVideoSettingsForVideoCodecType_assetWriterOutputFileType(videoCodecType: AVVideoCodecType, outputFileType: AVFileType):AVCaptureVideoDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1616290-recommendedvideosettingsforasset
    recommendedVideoSettingsForAssetWriterWithOutputFileType(outputFileType: AVFileType):AVCaptureVideoDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1387050-availablevideocvpixelformattypes
    availableVideoCVPixelFormatTypes(): NSNumber;
    setAvailableVideoCVPixelFormatTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1389227-availablevideocodectypes
    availableVideoCodecTypes(): AVVideoCodecType;
    setAvailableVideoCodecTypes(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/2867901-availablevideocodectypesforasset
    availableVideoCodecTypesForAssetWriterWithOutputFileType(outputFileType: AVFileType):AVVideoCodecType;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1389008-setsamplebufferdelegate
    setSampleBufferDelegate_queue(sampleBufferDelegate: AVCaptureVideoDataOutputSampleBufferDelegate, sampleBufferCallbackQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1385886-samplebufferdelegate
    sampleBufferDelegate(): AVCaptureVideoDataOutputSampleBufferDelegate;
    setSampleBufferDelegate(value: AVCaptureVideoDataOutputSampleBufferDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/1385831-samplebuffercallbackqueue
    sampleBufferCallbackQueue(): dispatch_queue_t;
    setSampleBufferCallbackQueue(value: dispatch_queue_t): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/2879216-init
    init():AVCaptureVideoDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/2879482-new
    new():AVCaptureVideoDataOutput;
    //
    alloc():AVCaptureVideoDataOutput;
    //
    init():AVCaptureVideoDataOutput;
  }
}

declare const AVCaptureVideoDataOutput: cocoascript.AVCaptureVideoDataOutput;
declare namespace cocoascript {
  /**
   * A capture output that records audio and saves the recorded audio to a file.
   * https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput
   */
  interface AVCaptureAudioFileOutput extends AVCaptureFileOutput {
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/1390895-availableoutputfiletypes
    availableOutputFileTypes():AVFileType;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/1387420-startrecordingtooutputfileurl
    startRecordingToOutputFileURL_outputFileType_recordingDelegate(outputFileURL: NSURL, fileType: AVFileType, delegate: AVCaptureFileOutputRecordingDelegate):void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/1389958-audiosettings
    audioSettings(): id;
    setAudioSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/1389881-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/2879214-init
    init():AVCaptureAudioFileOutput;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/2879322-new
    new():AVCaptureAudioFileOutput;
    //
    alloc():AVCaptureAudioFileOutput;
    //
    init():AVCaptureAudioFileOutput;
  }
}

declare const AVCaptureAudioFileOutput: cocoascript.AVCaptureAudioFileOutput;
declare namespace cocoascript {
  /**
   * A capture output that records audio and provides access to audio sample buffers as they are recorded.
   * https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput
   */
  interface AVCaptureAudioDataOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/2879217-init
    init():AVCaptureAudioDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/2879486-new
    new():AVCaptureAudioDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/1388527-audiosettings
    audioSettings(): id;
    setAudioSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/1616308-recommendedaudiosettingsforasset
    recommendedAudioSettingsForAssetWriterWithOutputFileType(outputFileType: AVFileType):AVCaptureAudioDataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/1390651-setsamplebufferdelegate
    setSampleBufferDelegate_queue(sampleBufferDelegate: AVCaptureAudioDataOutputSampleBufferDelegate, sampleBufferCallbackQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/1386344-samplebufferdelegate
    sampleBufferDelegate(): AVCaptureAudioDataOutputSampleBufferDelegate;
    setSampleBufferDelegate(value: AVCaptureAudioDataOutputSampleBufferDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/1389355-samplebuffercallbackqueue
    sampleBufferCallbackQueue(): dispatch_queue_t;
    setSampleBufferCallbackQueue(value: dispatch_queue_t): void;
    //
    alloc():AVCaptureAudioDataOutput;
    //
    init():AVCaptureAudioDataOutput;
  }
}

declare const AVCaptureAudioDataOutput: cocoascript.AVCaptureAudioDataOutput;
declare namespace cocoascript {
  /**
   * An abstract class that defines the interface for a metadata body object.
   * https://developer.apple.com/documentation/avfoundation/avmetadatabodyobject
   */
  interface AVMetadataBodyObject extends AVMetadataObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadatabodyobject/3174758-bodyid
    bodyID(): NSInteger;
    setBodyID(value: NSInteger): void;
    //
    alloc():AVMetadataBodyObject;
    //
    init():AVMetadataBodyObject;
  }
}

declare const AVMetadataBodyObject: cocoascript.AVMetadataBodyObject;
declare namespace cocoascript {
  /**
   * An object representing a single detected cat body in a picture.
   * https://developer.apple.com/documentation/avfoundation/avmetadatacatbodyobject
   */
  interface AVMetadataCatBodyObject extends AVMetadataBodyObject {
    //
    alloc():AVMetadataCatBodyObject;
    //
    init():AVMetadataCatBodyObject;
  }
}

declare const AVMetadataCatBodyObject: cocoascript.AVMetadataCatBodyObject;
declare namespace cocoascript {
  /**
   * An object representing a single detected dog body in a picture.
   * https://developer.apple.com/documentation/avfoundation/avmetadatadogbodyobject
   */
  interface AVMetadataDogBodyObject extends AVMetadataBodyObject {
    //
    alloc():AVMetadataDogBodyObject;
    //
    init():AVMetadataDogBodyObject;
  }
}

declare const AVMetadataDogBodyObject: cocoascript.AVMetadataDogBodyObject;
declare namespace cocoascript {
  /**
   * An object representing a single detected human body in a picture.
   * https://developer.apple.com/documentation/avfoundation/avmetadatahumanbodyobject
   */
  interface AVMetadataHumanBodyObject extends AVMetadataBodyObject {
    //
    alloc():AVMetadataHumanBodyObject;
    //
    init():AVMetadataHumanBodyObject;
  }
}

declare const AVMetadataHumanBodyObject: cocoascript.AVMetadataHumanBodyObject;
declare namespace cocoascript {
  /**
   * An object representing a single salient area in a picture.
   * https://developer.apple.com/documentation/avfoundation/avmetadatasalientobject
   */
  interface AVMetadataSalientObject extends AVMetadataObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadatasalientobject/3152378-objectid
    objectID(): NSInteger;
    setObjectID(value: NSInteger): void;
    //
    alloc():AVMetadataSalientObject;
    //
    init():AVMetadataSalientObject;
  }
}

declare const AVMetadataSalientObject: cocoascript.AVMetadataSalientObject;
declare namespace cocoascript {
  /**
   * A capture input for providing timed metadata to a capture session.
   * https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput
   */
  interface AVCaptureMetadataInput extends AVCaptureInput {
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput/1622268-initwithformatdescription
    initWithFormatDescription_clock(desc: CMMetadataFormatDescriptionRef, clock: CMClockRef):AVCaptureMetadataInput;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput/1622269-metadatainputwithformatdescripti
    metadataInputWithFormatDescription_clock(desc: CMMetadataFormatDescriptionRef, clock: CMClockRef):AVCaptureMetadataInput;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadatainput/1622266-appendtimedmetadatagroup
    appendTimedMetadataGroup_error(metadata: AVTimedMetadataGroup, outError: NSError):boolean;
    //
    alloc():AVCaptureMetadataInput;
    //
    init():AVCaptureMetadataInput;
  }
}

declare const AVCaptureMetadataInput: cocoascript.AVCaptureMetadataInput;
declare namespace cocoascript {
  /**
   * A capture output for processing timed metadata produced by a capture session.
   * https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput
   */
  interface AVCaptureMetadataOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/1616289-availablemetadataobjecttypes
    availableMetadataObjectTypes(): AVMetadataObjectType;
    setAvailableMetadataObjectTypes(value: AVMetadataObjectType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/1616299-metadataobjecttypes
    metadataObjectTypes(): AVMetadataObjectType;
    setMetadataObjectTypes(value: AVMetadataObjectType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/1616291-rectofinterest
    rectOfInterest(): CGRect;
    setRectOfInterest(value: CGRect): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/1616309-setmetadataobjectsdelegate
    setMetadataObjectsDelegate_queue(objectsDelegate: AVCaptureMetadataOutputObjectsDelegate, objectsCallbackQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/1616300-metadataobjectsdelegate
    metadataObjectsDelegate(): AVCaptureMetadataOutputObjectsDelegate;
    setMetadataObjectsDelegate(value: AVCaptureMetadataOutputObjectsDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/1616307-metadataobjectscallbackqueue
    metadataObjectsCallbackQueue(): dispatch_queue_t;
    setMetadataObjectsCallbackQueue(value: dispatch_queue_t): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/2879539-init
    init():AVCaptureMetadataOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutput/2879589-new
    new():AVCaptureMetadataOutput;
    //
    alloc():AVCaptureMetadataOutput;
    //
    init():AVCaptureMetadataOutput;
  }
}

declare const AVCaptureMetadataOutput: cocoascript.AVCaptureMetadataOutput;
declare namespace cocoascript {
  /**
   * Face information detected by a metadata capture output.
   * https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject
   */
  interface AVMetadataFaceObject extends AVMetadataObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/1386945-faceid
    faceID(): NSInteger;
    setFaceID(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/1386866-hasrollangle
    hasRollAngle(): boolean;
    setHasRollAngle(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/1389110-rollangle
    rollAngle(): CGFloat;
    setRollAngle(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/1385888-hasyawangle
    hasYawAngle(): boolean;
    setHasYawAngle(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/1386517-yawangle
    yawAngle(): CGFloat;
    setYawAngle(value: CGFloat): void;
    //
    alloc():AVMetadataFaceObject;
    //
    init():AVMetadataFaceObject;
  }
}

declare const AVMetadataFaceObject: cocoascript.AVMetadataFaceObject;
declare namespace cocoascript {
  /**
   * Barcode information detected by a metadata capture output.
   * https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject
   */
  interface AVMetadataMachineReadableCodeObject extends AVMetadataObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject/1618815-corners
    corners(): NSDictionary;
    setCorners(value: NSDictionary): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject/2875944-descriptor
    descriptor(): CIBarcodeDescriptor;
    setDescriptor(value: CIBarcodeDescriptor): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject/1618800-stringvalue
    stringValue(): string | cocoascript.NSString;
    setStringValue(value: string | cocoascript.NSString): void;
    //
    alloc():AVMetadataMachineReadableCodeObject;
    //
    init():AVMetadataMachineReadableCodeObject;
  }
}

declare const AVMetadataMachineReadableCodeObject: cocoascript.AVMetadataMachineReadableCodeObject;
declare namespace cocoascript {
  /**
   * The abstract superclass for objects provided by a metadata capture output.
   * https://developer.apple.com/documentation/avfoundation/avmetadataobject
   */
  interface AVMetadataObject extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadataobject/1387841-type
    type(): AVMetadataObjectType;
    setType(value: AVMetadataObjectType): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataobject/1388593-time
    time(): CMTime;
    setTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataobject/1386827-duration
    duration(): CMTime;
    setDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataobject/1386043-bounds
    bounds(): CGRect;
    setBounds(value: CGRect): void;
    //
    alloc():AVMetadataObject;
    //
    init():AVMetadataObject;
  }
}

declare const AVMetadataObject: cocoascript.AVMetadataObject;
declare namespace cocoascript {
  /**
   * An object that coordinates time-matched delivery of data from multiple capture outputs.
   * https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer
   */
  interface AVCaptureDataOutputSynchronizer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/2873913-initwithdataoutputs
    initWithDataOutputs(dataOutputs: AVCaptureOutput):AVCaptureDataOutputSynchronizer;
    // https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/2873912-dataoutputs
    dataOutputs(): AVCaptureOutput;
    setDataOutputs(value: AVCaptureOutput): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/2873948-setdelegate
    setDelegate_queue(delegate: AVCaptureDataOutputSynchronizerDelegate, delegateCallbackQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/2873969-delegate
    delegate(): AVCaptureDataOutputSynchronizerDelegate;
    setDelegate(value: AVCaptureDataOutputSynchronizerDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/2873947-delegatecallbackqueue
    delegateCallbackQueue(): dispatch_queue_t;
    setDelegateCallbackQueue(value: dispatch_queue_t): void;
    //
    alloc():AVCaptureDataOutputSynchronizer;
    //
    init():AVCaptureDataOutputSynchronizer;
  }
}

declare const AVCaptureDataOutputSynchronizer: cocoascript.AVCaptureDataOutputSynchronizer;
declare namespace cocoascript {
  /**
   * A set of data samples collected simultaneously from multiple capture outputs.
   * https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection
   */
  interface AVCaptureSynchronizedDataCollection extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/2873978-count
    count(): NSUInteger;
    setCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/2873985-synchronizeddataforcaptureoutput
    synchronizedDataForCaptureOutput(captureOutput: AVCaptureOutput):AVCaptureSynchronizedData;
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/2873892-objectforkeyedsubscript
    objectForKeyedSubscript(key: AVCaptureOutput):AVCaptureSynchronizedData;
    //
    alloc():AVCaptureSynchronizedDataCollection;
    //
    init():AVCaptureSynchronizedDataCollection;
  }
}

declare const AVCaptureSynchronizedDataCollection: cocoascript.AVCaptureSynchronizedDataCollection;
declare namespace cocoascript {
  /**
   * A container for scene depth information collected using synchronized capture.
   * https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata
   */
  interface AVCaptureSynchronizedDepthData extends AVCaptureSynchronizedData {
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata/2873977-depthdata
    depthData(): AVDepthData;
    setDepthData(value: AVDepthData): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata/2873971-depthdatawasdropped
    depthDataWasDropped(): boolean;
    setDepthDataWasDropped(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata/2873979-droppedreason
    droppedReason(): AVCaptureOutputDataDroppedReason;
    setDroppedReason(value: AVCaptureOutputDataDroppedReason): void;
    //
    alloc():AVCaptureSynchronizedDepthData;
    //
    init():AVCaptureSynchronizedDepthData;
  }
}

declare const AVCaptureSynchronizedDepthData: cocoascript.AVCaptureSynchronizedDepthData;
declare namespace cocoascript {
  /**
   * A container for metadata objects collected using synchronized capture.
   * https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata
   */
  interface AVCaptureSynchronizedMetadataObjectData extends AVCaptureSynchronizedData {
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata/2873923-metadataobjects
    metadataObjects(): AVMetadataObject;
    setMetadataObjects(value: AVMetadataObject): void;
    //
    alloc():AVCaptureSynchronizedMetadataObjectData;
    //
    init():AVCaptureSynchronizedMetadataObjectData;
  }
}

declare const AVCaptureSynchronizedMetadataObjectData: cocoascript.AVCaptureSynchronizedMetadataObjectData;
declare namespace cocoascript {
  /**
   * A container for video or audio samples collected using synchronized capture.
   * https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedsamplebufferdata
   */
  interface AVCaptureSynchronizedSampleBufferData extends AVCaptureSynchronizedData {
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/2873893-samplebuffer
    sampleBuffer(): CMSampleBufferRef;
    setSampleBuffer(value: CMSampleBufferRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/2873965-samplebufferwasdropped
    sampleBufferWasDropped(): boolean;
    setSampleBufferWasDropped(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/2873896-droppedreason
    droppedReason(): AVCaptureOutputDataDroppedReason;
    setDroppedReason(value: AVCaptureOutputDataDroppedReason): void;
    //
    alloc():AVCaptureSynchronizedSampleBufferData;
    //
    init():AVCaptureSynchronizedSampleBufferData;
  }
}

declare const AVCaptureSynchronizedSampleBufferData: cocoascript.AVCaptureSynchronizedSampleBufferData;
declare namespace cocoascript {
  /**
   * The abstract superclass for media samples collected using synchronized capture.
   * https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddata
   */
  interface AVCaptureSynchronizedData extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddata/2873975-timestamp
    timestamp(): CMTime;
    setTimestamp(value: CMTime): void;
    //
    alloc():AVCaptureSynchronizedData;
    //
    init():AVCaptureSynchronizedData;
  }
}

declare const AVCaptureSynchronizedData: cocoascript.AVCaptureSynchronizedData;
declare namespace cocoascript {
  /**
   * A Core Animation layer that displays the video as it’s captured.
   * https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer
   */
  interface AVCaptureVideoPreviewLayer extends CALayer {
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1567198-layerwithsession
    layerWithSession(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1387766-initwithsession
    initWithSession(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1387426-initwithsessionwithnoconnection
    initWithSessionWithNoConnection(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1567197-layerwithsessionwithnoconnection
    layerWithSessionWithNoConnection(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1386708-videogravity
    videoGravity(): AVLayerVideoGravity;
    setVideoGravity(value: AVLayerVideoGravity): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623494-orientation
    orientation(): AVCaptureVideoOrientation;
    setOrientation(value: AVCaptureVideoOrientation): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623499-orientationsupported
    orientationSupported(): boolean;
    setOrientationSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623493-mirrored
    mirrored(): boolean;
    setMirrored(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623500-mirroringsupported
    mirroringSupported(): boolean;
    setMirroringSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623496-automaticallyadjustsmirroring
    automaticallyAdjustsMirroring(): boolean;
    setAutomaticallyAdjustsMirroring(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/3192195-previewing
    previewing(): boolean;
    setPreviewing(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1386157-session
    session(): AVCaptureSession;
    setSession(value: AVCaptureSession): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1390893-connection
    connection(): AVCaptureConnection;
    setConnection(value: AVCaptureConnection): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1390387-setsessionwithnoconnection
    setSessionWithNoConnection(session: AVCaptureSession):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623497-capturedevicepointofinterestforp
    captureDevicePointOfInterestForPoint(pointInLayer: CGPoint):CGPoint;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623502-pointforcapturedevicepointofinte
    pointForCaptureDevicePointOfInterest(captureDevicePointOfInterest: CGPoint):CGPoint;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623498-rectformetadataoutputrectofinter
    rectForMetadataOutputRectOfInterest(rectInMetadataOutputCoordinates: CGRect):CGRect;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623495-metadataoutputrectofinterestforr
    metadataOutputRectOfInterestForRect(rectInLayerCoordinates: CGRect):CGRect;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/1623501-transformedmetadataobjectformeta
    transformedMetadataObjectForMetadataObject(metadataObject: AVMetadataObject):AVMetadataObject;
    //
    alloc():AVCaptureVideoPreviewLayer;
    //
    init():AVCaptureVideoPreviewLayer;
  }
}

declare const AVCaptureVideoPreviewLayer: cocoascript.AVCaptureVideoPreviewLayer;
declare namespace cocoascript {
  /**
   * A capture output that provides preview playback for audio being recorded in a capture session.
   * https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput
   */
  interface AVCaptureAudioPreviewOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput/1390610-outputdeviceuniqueid
    outputDeviceUniqueID(): string | cocoascript.NSString;
    setOutputDeviceUniqueID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput/1390510-volume
    volume(): number;
    setVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput/2879215-init
    init():AVCaptureAudioPreviewOutput;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput/2879470-new
    new():AVCaptureAudioPreviewOutput;
    //
    alloc():AVCaptureAudioPreviewOutput;
    //
    init():AVCaptureAudioPreviewOutput;
  }
}

declare const AVCaptureAudioPreviewOutput: cocoascript.AVCaptureAudioPreviewOutput;
declare namespace cocoascript {
  /**
   * A capture input for recording from a screen in macOS.
   * https://developer.apple.com/documentation/avfoundation/avcapturescreeninput
   */
  interface AVCaptureScreenInput extends AVCaptureInput {
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/1386383-initwithdisplayid
    initWithDisplayID(displayID: CGDirectDisplayID):AVCaptureScreenInput;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/2879212-init
    init():AVCaptureScreenInput;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/2879218-new
    new():AVCaptureScreenInput;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/1387216-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/1390518-croprect
    cropRect(): CGRect;
    setCropRect(value: CGRect): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/1390311-scalefactor
    scaleFactor(): CGFloat;
    setScaleFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/1385601-capturescursor
    capturesCursor(): boolean;
    setCapturesCursor(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/1385722-capturesmouseclicks
    capturesMouseClicks(): boolean;
    setCapturesMouseClicks(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturescreeninput/1390547-removesduplicateframes
    removesDuplicateFrames(): boolean;
    setRemovesDuplicateFrames(value: boolean): void;
    //
    alloc():AVCaptureScreenInput;
    //
    init():AVCaptureScreenInput;
  }
}

declare const AVCaptureScreenInput: cocoascript.AVCaptureScreenInput;
declare namespace cocoascript {
  /**
   * A capture output for capturing still photos in macOS.
   * https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput
   */
  interface AVCaptureStillImageOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1387374-capturestillimageasynchronouslyf
    captureStillImageAsynchronouslyFromConnection_completionHandler(connection: AVCaptureConnection, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1387269-capturingstillimage
    capturingStillImage(): boolean;
    setCapturingStillImage(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616297-stillimagestabilizationactive
    stillImageStabilizationActive(): boolean;
    setStillImageStabilizationActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616301-automaticallyenablesstillimagest
    automaticallyEnablesStillImageStabilizationWhenAvailable(): boolean;
    setAutomaticallyEnablesStillImageStabilizationWhenAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616286-stillimagestabilizationsupported
    stillImageStabilizationSupported(): boolean;
    setStillImageStabilizationSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616305-highresolutionstillimageoutputen
    highResolutionStillImageOutputEnabled(): boolean;
    setHighResolutionStillImageOutputEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1388622-availableimagedatacvpixelformatt
    availableImageDataCVPixelFormatTypes(): NSNumber;
    setAvailableImageDataCVPixelFormatTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1388312-availableimagedatacodectypes
    availableImageDataCodecTypes(): AVVideoCodecType;
    setAvailableImageDataCodecTypes(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1389306-outputsettings
    outputSettings(): id;
    setOutputSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1388131-jpegstillimagensdatarepresentati
    jpegStillImageNSDataRepresentation(jpegSampleBuffer: CMSampleBufferRef):NSData;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616285-capturestillimagebracketasynchro
    captureStillImageBracketAsynchronouslyFromConnection_withSettingsArray_completionHandler(connection: AVCaptureConnection, settings: AVCaptureBracketedStillImageSettings, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616294-maxbracketedcapturestillimagecou
    maxBracketedCaptureStillImageCount(): NSUInteger;
    setMaxBracketedCaptureStillImageCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616298-preparetocapturestillimagebracke
    prepareToCaptureStillImageBracketFromConnection_withSettingsArray_completionHandler(connection: AVCaptureConnection, settings: AVCaptureBracketedStillImageSettings, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616288-lensstabilizationduringbracketed
    lensStabilizationDuringBracketedCaptureSupported(): boolean;
    setLensStabilizationDuringBracketedCaptureSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/1616287-lensstabilizationduringbracketed
    lensStabilizationDuringBracketedCaptureEnabled(): boolean;
    setLensStabilizationDuringBracketedCaptureEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/2879209-init
    init():AVCaptureStillImageOutput;
    // https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/2879496-new
    new():AVCaptureStillImageOutput;
    //
    alloc():AVCaptureStillImageOutput;
    //
    init():AVCaptureStillImageOutput;
  }
}

declare const AVCaptureStillImageOutput: cocoascript.AVCaptureStillImageOutput;
declare namespace cocoascript {
  /**
   * The abstract superclass for objects that provide input data to a capture session.
   * https://developer.apple.com/documentation/avfoundation/avcaptureinput
   */
  interface AVCaptureInput extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptureinput/1386635-ports
    ports(): AVCaptureInputPort;
    setPorts(value: AVCaptureInputPort): void;
    //
    alloc():AVCaptureInput;
    //
    init():AVCaptureInput;
  }
}

declare const AVCaptureInput: cocoascript.AVCaptureInput;
declare namespace cocoascript {
  /**
   * The abstract superclass for objects that output the media recorded in a capture session.
   * https://developer.apple.com/documentation/avfoundation/avcaptureoutput
   */
  interface AVCaptureOutput extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptureoutput/1386239-connections
    connections(): AVCaptureConnection;
    setConnections(value: AVCaptureConnection): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureoutput/1389574-connectionwithmediatype
    connectionWithMediaType(mediaType: AVMediaType):AVCaptureConnection;
    // https://developer.apple.com/documentation/avfoundation/avcaptureoutput/1616310-transformedmetadataobjectformeta
    transformedMetadataObjectForMetadataObject_connection(metadataObject: AVMetadataObject, connection: AVCaptureConnection):AVMetadataObject;
    // https://developer.apple.com/documentation/avfoundation/avcaptureoutput/1616304-metadataoutputrectofinterestforr
    metadataOutputRectOfInterestForRect(rectInOutputCoordinates: CGRect):CGRect;
    // https://developer.apple.com/documentation/avfoundation/avcaptureoutput/1616311-rectformetadataoutputrectofinter
    rectForMetadataOutputRectOfInterest(rectInMetadataOutputCoordinates: CGRect):CGRect;
    //
    alloc():AVCaptureOutput;
    //
    init():AVCaptureOutput;
  }
}

declare const AVCaptureOutput: cocoascript.AVCaptureOutput;
declare namespace cocoascript {
  /**
   * A connection between a specific pair of capture input and capture output objects in a capture session.
   * https://developer.apple.com/documentation/avfoundation/avcaptureconnection
   */
  interface AVCaptureConnection extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1444473-connectionwithinputports
    connectionWithInputPorts_output(ports: AVCaptureInputPort, output: AVCaptureOutput):AVCaptureConnection;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1388896-initwithinputports
    initWithInputPorts_output(ports: AVCaptureInputPort, output: AVCaptureOutput):AVCaptureConnection;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1444495-connectionwithinputport
    connectionWithInputPort_videoPreviewLayer(port: AVCaptureInputPort, layer: AVCaptureVideoPreviewLayer):AVCaptureConnection;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1385882-initwithinputport
    initWithInputPort_videoPreviewLayer(port: AVCaptureInputPort, layer: AVCaptureVideoPreviewLayer):AVCaptureConnection;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1390131-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1387696-active
    active(): boolean;
    setActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1388322-inputports
    inputPorts(): AVCaptureInputPort;
    setInputPorts(value: AVCaptureInputPort): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1385571-output
    output(): AVCaptureOutput;
    setOutput(value: AVCaptureOutput): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1390614-videopreviewlayer
    videoPreviewLayer(): AVCaptureVideoPreviewLayer;
    setVideoPreviewLayer(value: AVCaptureVideoPreviewLayer): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1387519-audiochannels
    audioChannels(): AVCaptureAudioChannel;
    setAudioChannels(value: AVCaptureAudioChannel): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1389415-videoorientation
    videoOrientation(): AVCaptureVideoOrientation;
    setVideoOrientation(value: AVCaptureVideoOrientation): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1389294-supportsvideoorientation
    supportsVideoOrientation(): boolean;
    setSupportsVideoOrientation(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1390559-videofieldmode
    videoFieldMode(): AVVideoFieldMode;
    setVideoFieldMode(value: AVVideoFieldMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1390836-supportsvideofieldmode
    supportsVideoFieldMode(): boolean;
    setSupportsVideoFieldMode(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1388931-videominframeduration
    videoMinFrameDuration(): CMTime;
    setVideoMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1386978-supportsvideominframeduration
    supportsVideoMinFrameDuration(): boolean;
    setSupportsVideoMinFrameDuration(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1390246-videomaxframeduration
    videoMaxFrameDuration(): CMTime;
    setVideoMaxFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1389158-supportsvideomaxframeduration
    supportsVideoMaxFrameDuration(): boolean;
    setSupportsVideoMaxFrameDuration(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1620479-videoscaleandcropfactor
    videoScaleAndCropFactor(): CGFloat;
    setVideoScaleAndCropFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1620478-videomaxscaleandcropfactor
    videoMaxScaleAndCropFactor(): CGFloat;
    setVideoMaxScaleAndCropFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1387082-automaticallyadjustsvideomirrori
    automaticallyAdjustsVideoMirroring(): boolean;
    setAutomaticallyAdjustsVideoMirroring(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1387424-supportsvideomirroring
    supportsVideoMirroring(): boolean;
    setSupportsVideoMirroring(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1389172-videomirrored
    videoMirrored(): boolean;
    setVideoMirrored(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1620481-supportsvideostabilization
    supportsVideoStabilization(): boolean;
    setSupportsVideoStabilization(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1620483-activevideostabilizationmode
    activeVideoStabilizationMode(): AVCaptureVideoStabilizationMode;
    setActiveVideoStabilizationMode(value: AVCaptureVideoStabilizationMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1620484-preferredvideostabilizationmode
    preferredVideoStabilizationMode(): AVCaptureVideoStabilizationMode;
    setPreferredVideoStabilizationMode(value: AVCaptureVideoStabilizationMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1620485-videostabilizationenabled
    videoStabilizationEnabled(): boolean;
    setVideoStabilizationEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/1620482-enablesvideostabilizationwhenava
    enablesVideoStabilizationWhenAvailable(): boolean;
    setEnablesVideoStabilizationWhenAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/2875902-cameraintrinsicmatrixdeliverysup
    cameraIntrinsicMatrixDeliverySupported(): boolean;
    setCameraIntrinsicMatrixDeliverySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureconnection/2875903-cameraintrinsicmatrixdeliveryena
    cameraIntrinsicMatrixDeliveryEnabled(): boolean;
    setCameraIntrinsicMatrixDeliveryEnabled(value: boolean): void;
    //
    alloc():AVCaptureConnection;
    //
    init():AVCaptureConnection;
  }
}

declare const AVCaptureConnection: cocoascript.AVCaptureConnection;
declare namespace cocoascript {
  /**
   * An object that monitors average and peak power levels for an audio channel in a capture connection.
   * https://developer.apple.com/documentation/avfoundation/avcaptureaudiochannel
   */
  interface AVCaptureAudioChannel extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiochannel/1387368-averagepowerlevel
    averagePowerLevel(): number;
    setAveragePowerLevel(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiochannel/1390872-peakholdlevel
    peakHoldLevel(): number;
    setPeakHoldLevel(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiochannel/1388396-volume
    volume(): number;
    setVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiochannel/1388574-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    //
    alloc():AVCaptureAudioChannel;
    //
    init():AVCaptureAudioChannel;
  }
}

declare const AVCaptureAudioChannel: cocoascript.AVCaptureAudioChannel;
declare namespace cocoascript {
  /**
   * The abstract superclass for capture outputs that can record captured data to a file.
   * https://developer.apple.com/documentation/avfoundation/avcapturefileoutput
   */
  interface AVCaptureFileOutput extends AVCaptureOutput {
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1388718-delegate
    delegate(): AVCaptureFileOutputDelegate;
    setDelegate(value: AVCaptureFileOutputDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1387390-maxrecordedduration
    maxRecordedDuration(): CMTime;
    setMaxRecordedDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1387684-maxrecordedfilesize
    maxRecordedFileSize(): number;
    setMaxRecordedFileSize(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1387523-minfreediskspacelimit
    minFreeDiskSpaceLimit(): number;
    setMinFreeDiskSpaceLimit(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1388576-outputfileurl
    outputFileURL(): NSURL;
    setOutputFileURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1389028-recordedduration
    recordedDuration(): CMTime;
    setRecordedDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1386933-recordedfilesize
    recordedFileSize(): number;
    setRecordedFileSize(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1387539-recording
    recording(): boolean;
    setRecording(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1385716-recordingpaused
    recordingPaused(): boolean;
    setRecordingPaused(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1387224-startrecordingtooutputfileurl
    startRecordingToOutputFileURL_recordingDelegate(outputFileURL: NSURL, delegate: AVCaptureFileOutputRecordingDelegate):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1389485-stoprecording
    stopRecording():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1386806-pauserecording
    pauseRecording():void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutput/1389849-resumerecording
    resumeRecording():void;
    //
    alloc():AVCaptureFileOutput;
    //
    init():AVCaptureFileOutput;
  }
}

declare const AVCaptureFileOutput: cocoascript.AVCaptureFileOutput;
declare namespace cocoascript {
  /**
   * Methods for monitoring or controlling the output of a media file capture.
   * https://developer.apple.com/documentation/avfoundation/avcapturefileoutputdelegate
   */
  interface AVCaptureFileOutputDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutputdelegate/1388760-captureoutputshouldprovidesample
    captureOutputShouldProvideSampleAccurateRecordingStart(output: AVCaptureOutput):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutputdelegate/1390096-captureoutput
    captureOutput_didOutputSampleBuffer_fromConnection(output: AVCaptureFileOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for responding to events that occur while recording captured media to a file.
   * https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate
   */
  interface AVCaptureFileOutputRecordingDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1387301-captureoutput
    captureOutput_didStartRecordingToOutputFileAtURL_fromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1390625-captureoutput
    captureOutput_willFinishRecordingToOutputFileAtURL_fromConnections_error(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1390612-captureoutput
    captureOutput_didFinishRecordingToOutputFileAtURL_fromConnections_error(output: AVCaptureFileOutput, outputFileURL: NSURL, connections: AVCaptureConnection, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1388838-captureoutput
    captureOutput_didPauseRecordingToOutputFileAtURL_fromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1387653-captureoutput
    captureOutput_didResumeRecordingToOutputFileAtURL_fromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving depth data produced by a depth capture output.
   * https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutputdelegate
   */
  interface AVCaptureDepthDataOutputDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutputdelegate/2873866-depthdataoutput
    depthDataOutput_didOutputDepthData_timestamp_connection(output: AVCaptureDepthDataOutput, depthData: AVDepthData, timestamp: CMTime, connection: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutputdelegate/2873867-depthdataoutput
    depthDataOutput_didDropDepthData_timestamp_connection_reason(output: AVCaptureDepthDataOutput, depthData: AVDepthData, timestamp: CMTime, connection: AVCaptureConnection, reason: AVCaptureOutputDataDroppedReason):void;
  }
}
declare namespace cocoascript {
  /**
   * A delegate protocol that defines the methods to implement to respond to asset-writing events.
   * https://developer.apple.com/documentation/avfoundation/avassetwriterdelegate
   */
  interface AVAssetWriterDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetwriterdelegate/3546592-assetwriter
    assetWriter_didOutputSegmentData_segmentType(writer: AVAssetWriter, segmentData: NSData, segmentType: AVAssetSegmentType):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterdelegate/3546593-assetwriter
    assetWriter_didOutputSegmentData_segmentType_segmentReport(writer: AVAssetWriter, segmentData: NSData, segmentType: AVAssetSegmentType, segmentReport: AVAssetSegmentReport):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the methods to implement to respond to changes in the media data sequence.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpushdelegate
   */
  interface AVPlayerItemOutputPushDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpushdelegate/1390224-outputsequencewasflushed
    outputSequenceWasFlushed(output: AVPlayerItemOutput):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the method to implement to respond to playback commands from the playback coordinator.
   * https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate
   */
  interface AVPlaybackCoordinatorPlaybackControlDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate/3750296-playbackcoordinator
    playbackCoordinator_didIssuePlayCommand_completionHandler(coordinator: AVDelegatingPlaybackCoordinator, playCommand: AVDelegatingPlaybackCoordinatorPlayCommand, completionHandler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate/3750295-playbackcoordinator
    playbackCoordinator_didIssuePauseCommand_completionHandler(coordinator: AVDelegatingPlaybackCoordinator, pauseCommand: AVDelegatingPlaybackCoordinatorPauseCommand, completionHandler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate/3750298-playbackcoordinator
    playbackCoordinator_didIssueSeekCommand_completionHandler(coordinator: AVDelegatingPlaybackCoordinator, seekCommand: AVDelegatingPlaybackCoordinatorSeekCommand, completionHandler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate/3750294-playbackcoordinator
    playbackCoordinator_didIssueBufferingCommand_completionHandler(coordinator: AVDelegatingPlaybackCoordinator, bufferingCommand: AVDelegatingPlaybackCoordinatorBufferingCommand, completionHandler: void):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to respond to pixel buffer changes.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate
   */
  interface AVPlayerItemOutputPullDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate/1387498-outputmediadatawillchange
    outputMediaDataWillChange(sender: AVPlayerItemOutput):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate/1387279-outputsequencewasflushed
    outputSequenceWasFlushed(output: AVPlayerItemOutput):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol you implement to receive metadata callbacks from a player item metadata collector.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate
   */
  interface AVPlayerItemMetadataCollectorPushDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate/1617190-metadatacollector
    metadataCollector_didCollectDateRangeMetadataGroups_indexesOfNewGroups_indexesOfModifiedGroups(metadataCollector: AVPlayerItemMetadataCollector, metadataGroups: AVDateRangeMetadataGroup, indexesOfNewGroups: NSIndexSet, indexesOfModifiedGroups: NSIndexSet):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving metadata produced by a metadata capture output.
   * https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate
   */
  interface AVCaptureMetadataOutputObjectsDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/1389481-captureoutput
    captureOutput_didOutputMetadataObjects_fromConnection(output: AVCaptureOutput, metadataObjects: AVMetadataObject, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the interface for a video composition instruction.
   * https://developer.apple.com/documentation/avfoundation/1386654-avvideocompositioninstruction
   */
  interface AVVideoCompositionInstruction extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/1386654-avvideocompositioninstruction/1389919-passthroughtrackid
    passthroughTrackID(): CMPersistentTrackID;
    setPassthroughTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/1386654-avvideocompositioninstruction/1388661-requiredsourcetrackids
    requiredSourceTrackIDs(): NSValue;
    setRequiredSourceTrackIDs(value: NSValue): void;
    // https://developer.apple.com/documentation/avfoundation/1386654-avvideocompositioninstruction/3750315-requiredsourcesampledatatrackids
    requiredSourceSampleDataTrackIDs(): NSNumber;
    setRequiredSourceSampleDataTrackIDs(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/1386654-avvideocompositioninstruction/1389376-containstweening
    containsTweening(): boolean;
    setContainsTweening(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/1386654-avvideocompositioninstruction/1386216-enablepostprocessing
    enablePostProcessing(): boolean;
    setEnablePostProcessing(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/1386654-avvideocompositioninstruction/1389873-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving sample buffers from, and monitoring the status of, a video data output.
   * https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate
   */
  interface AVCaptureVideoDataOutputSampleBufferDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1385775-captureoutput
    captureOutput_didOutputSampleBuffer_fromConnection(output: AVCaptureOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
    // https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1388468-captureoutput
    captureOutput_didDropSampleBuffer_fromConnection(output: AVCaptureOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the methods to implement to customize the packaging of photo data.
   * https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer
   */
  interface AVCapturePhotoFileDataRepresentationCustomizer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977527-replacementmetadataforphoto
    replacementMetadataForPhoto(photo: AVCapturePhoto):AVCapturePhotoFileDataRepresentationCustomizer;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977526-replacementembeddedthumbnailpixe
    replacementEmbeddedThumbnailPixelBufferWithPhotoFormat_forPhoto(replacementEmbeddedThumbnailPhotoFormatOut: AVCapturePhotoFileDataRepresentationCustomizer, photo: AVCapturePhoto):CVPixelBufferRef;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977525-replacementdepthdataforphoto
    replacementDepthDataForPhoto(photo: AVCapturePhoto):AVDepthData;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977528-replacementportraiteffectsmattef
    replacementPortraitEffectsMatteForPhoto(photo: AVCapturePhoto):AVPortraitEffectsMatte;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/3153010-replacementsemanticsegmentationm
    replacementSemanticSegmentationMatteOfType_forPhoto(semanticSegmentationMatteType: AVSemanticSegmentationMatteType, photo: AVCapturePhoto):AVSemanticSegmentationMatte;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/3697087-replacementappleprorawcompressio
    replacementAppleProRAWCompressionSettingsForPhoto_defaultSettings_maximumBitDepth(photo: AVCapturePhoto, defaultSettings: AVCapturePhotoFileDataRepresentationCustomizer, maximumBitDepth: NSInteger):AVCapturePhotoFileDataRepresentationCustomizer;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the methods to implement to participate in playback coordination.
   * https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinatordelegate
   */
  interface AVPlayerPlaybackCoordinatorDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinatordelegate/3750304-playbackcoordinator
    playbackCoordinator_identifierForPlayerItem(coordinator: AVPlayerPlaybackCoordinator, playerItem: AVPlayerItem):NSString;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to handle resource-loading requests coming from a URL asset.
   * https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate
   */
  interface AVAssetResourceLoaderDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/1388121-resourceloader
    resourceLoader_shouldWaitForLoadingOfRequestedResource(resourceLoader: AVAssetResourceLoader, loadingRequest: AVAssetResourceLoadingRequest):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/1387058-resourceloader
    resourceLoader_shouldWaitForRenewalOfRequestedResource(resourceLoader: AVAssetResourceLoader, renewalRequest: AVAssetResourceRenewalRequest):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/1387722-resourceloader
    resourceLoader_didCancelLoadingRequest(resourceLoader: AVAssetResourceLoader, loadingRequest: AVAssetResourceLoadingRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/1388736-resourceloader
    resourceLoader_shouldWaitForResponseToAuthenticationChallenge(resourceLoader: AVAssetResourceLoader, authenticationChallenge: NSURLAuthenticationChallenge):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/1387929-resourceloader
    resourceLoader_didCancelAuthenticationChallenge(resourceLoader: AVAssetResourceLoader, authenticationChallenge: NSURLAuthenticationChallenge):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
   * https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling
   */
  interface AVVideoCompositionValidationHandling extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/1389404-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingInvalidValueForKey(videoComposition: AVVideoComposition, key: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/1388620-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingEmptyTimeRange(videoComposition: AVVideoComposition, timeRange: CMTimeRange):boolean;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/1390721-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction(videoComposition: AVVideoComposition, videoCompositionInstruction: AVVideoCompositionInstruction):boolean;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/1388452-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingInvalidTrackIDInInstruction_layerInstruction_asset(videoComposition: AVVideoComposition, videoCompositionInstruction: AVVideoCompositionInstruction, layerInstruction: AVVideoCompositionLayerInstruction, asset: AVAsset):boolean;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that handles content key requests.
   * https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate
   */
  interface AVContentKeySessionDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2799204-contentkeysession
    contentKeySession_didProvideContentKeyRequest(session: AVContentKeySession, keyRequest: AVContentKeyRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2799168-contentkeysession
    contentKeySession_didProvideRenewingContentKeyRequest(session: AVContentKeySession, keyRequest: AVContentKeyRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2799200-contentkeysession
    contentKeySession_didProvidePersistableContentKeyRequest(session: AVContentKeySession, keyRequest: AVPersistableContentKeyRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2881821-contentkeysession
    contentKeySession_didUpdatePersistableContentKey_forContentKeyIdentifier(session: AVContentKeySession, persistableContentKey: NSData, keyIdentifier: AVContentKeySessionDelegate):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2799210-contentkeysession
    contentKeySession_shouldRetryContentKeyRequest_reason(session: AVContentKeySession, keyRequest: AVContentKeyRequest, retryReason: AVContentKeyRequestRetryReason):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2799160-contentkeysessioncontentprotecti
    contentKeySessionContentProtectionSessionIdentifierDidChange(session: AVContentKeySession):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2799201-contentkeysession
    contentKeySession_contentKeyRequest_didFailWithError(session: AVContentKeySession, keyRequest: AVContentKeyRequest, err: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2966512-contentkeysession
    contentKeySession_contentKeyRequestDidSucceed(session: AVContentKeySession, keyRequest: AVContentKeyRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/2966513-contentkeysessiondidgenerateexpi
    contentKeySessionDidGenerateExpiredSessionReport(session: AVContentKeySession):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving audio sample data from an audio capture.
   * https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate
   */
  interface AVCaptureAudioDataOutputSampleBufferDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate/1386039-captureoutput
    captureOutput_didOutputSampleBuffer_fromConnection(output: AVCaptureOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to enqueue sample buffers for presentation.
   * https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering
   */
  interface AVQueuedSampleBufferRendering extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/2867638-readyformoremediadata
    readyForMoreMediaData(): boolean;
    setReadyForMoreMediaData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/2867641-enqueuesamplebuffer
    enqueueSampleBuffer(sampleBuffer: CMSampleBufferRef):void;
    // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/2867643-requestmediadatawhenreadyonqueue
    requestMediaDataWhenReadyOnQueue_usingBlock(queue: dispatch_queue_t, block: void):void;
    // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/2867642-stoprequestingmediadata
    stopRequestingMediaData():void;
    // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/3726153-hassufficientmediadataforreliabl
    hasSufficientMediaDataForReliablePlaybackStart(): boolean;
    setHasSufficientMediaDataForReliablePlaybackStart(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/2867639-flush
    flush():void;
    // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/2867640-timebase
    timebase(): CMTimebaseRef;
    setTimebase(value: CMTimebaseRef): void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the methods custom video compositors must implement.
   * https://developer.apple.com/documentation/avfoundation/avvideocompositing
   */
  interface AVVideoCompositing extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/1388610-sourcepixelbufferattributes
    sourcePixelBufferAttributes(): id;
    setSourcePixelBufferAttributes(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/1386414-requiredpixelbufferattributesfor
    requiredPixelBufferAttributesForRenderContext(): id;
    setRequiredPixelBufferAttributesForRenderContext(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/3626026-supportshdrsourceframes
    supportsHDRSourceFrames(): boolean;
    setSupportsHDRSourceFrames(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/1643657-supportswidecolorsourceframes
    supportsWideColorSourceFrames(): boolean;
    setSupportsWideColorSourceFrames(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/3750314-canconformcolorofsourceframes
    canConformColorOfSourceFrames(): boolean;
    setCanConformColorOfSourceFrames(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/1390363-rendercontextchanged
    renderContextChanged(newRenderContext: AVVideoCompositionRenderContext):void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/3227885-anticipaterenderingusinghint
    anticipateRenderingUsingHint(renderHint: AVVideoCompositionRenderHint):void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/3227886-prerollforrenderingusinghint
    prerollForRenderingUsingHint(renderHint: AVVideoCompositionRenderHint):void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/1388894-startvideocompositionrequest
    startVideoCompositionRequest(asyncVideoCompositionRequest: AVAsynchronousVideoCompositionRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositing/1390659-cancelallpendingvideocomposition
    cancelAllPendingVideoCompositionRequests():void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving captured data from multiple capture outputs synchronized to the same timestamp.
   * https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizerdelegate
   */
  interface AVCaptureDataOutputSynchronizerDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizerdelegate/2873976-dataoutputsynchronizer
    dataOutputSynchronizer_didOutputSynchronizedDataCollection(synchronizer: AVCaptureDataOutputSynchronizer, synchronizedDataCollection: AVCaptureSynchronizedDataCollection):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the methods for caption validation events.
   * https://developer.apple.com/documentation/avfoundation/avassetreadercaptionvalidationhandling
   */
  interface AVAssetReaderCaptionValidationHandling extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetreadercaptionvalidationhandling/3752792-captionadaptor
    captionAdaptor_didVendCaption_skippingUnsupportedSourceSyntaxElements(adaptor: AVAssetReaderOutputCaptionAdaptor, caption: AVCaption, syntaxElements: string | cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * A metadata item for an audiovisual asset or one of its tracks.
   * https://developer.apple.com/documentation/avfoundation/avmetadataitem
   */
  interface AVMetadataItem extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387745-metadataitemwithpropertiesofmeta
    metadataItemWithPropertiesOfMetadataItem_valueLoadingHandler(metadataItem: AVMetadataItem, handler: AVMetadataItemValueRequest):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1386968-identifier
    identifier(): AVMetadataIdentifier;
    setIdentifier(value: AVMetadataIdentifier): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387843-key
    key(): NSCopying;
    setKey(value: NSCopying): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1389864-commonkey
    commonKey(): AVMetadataKey;
    setCommonKey(value: AVMetadataKey): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1385757-keyspace
    keySpace(): AVMetadataKeySpace;
    setKeySpace(value: AVMetadataKeySpace): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1390537-value
    value(): NSCopying;
    setValue(value: NSCopying): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1389570-extraattributes
    extraAttributes(): id;
    setExtraAttributes(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1386856-datatype
    dataType(): string | cocoascript.NSString;
    setDataType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1390846-stringvalue
    stringValue(): string | cocoascript.NSString;
    setStringValue(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1390681-numbervalue
    numberValue(): NSNumber;
    setNumberValue(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387641-datavalue
    dataValue(): NSData;
    setDataValue(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1385563-datevalue
    dateValue(): NSDate;
    setDateValue(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387102-loadvaluesasynchronouslyforkeys
    loadValuesAsynchronouslyForKeys_completionHandler(keys: string | cocoascript.NSString, handler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1388523-statusofvalueforkey
    statusOfValueForKey_error(key: string | cocoascript.NSString, outError: NSError):AVKeyValueStatus;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1388612-time
    time(): CMTime;
    setTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1388535-startdate
    startDate(): NSDate;
    setStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1386610-duration
    duration(): CMTime;
    setDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387114-locale
    locale(): NSLocale;
    setLocale(value: NSLocale): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387068-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1385843-metadataitemsfromarray
    metadataItemsFromArray_filteredByIdentifier(metadataItems: AVMetadataItem, identifier: AVMetadataIdentifier):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1386083-metadataitemsfromarray
    metadataItemsFromArray_withKey_keySpace(metadataItems: AVMetadataItem, key: AVMetadataItem, keySpace: AVMetadataKeySpace):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1389374-metadataitemsfromarray
    metadataItemsFromArray_withLocale(metadataItems: AVMetadataItem, locale: NSLocale):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387901-metadataitemsfromarray
    metadataItemsFromArray_filteredAndSortedAccordingToPreferredLanguages(metadataItems: AVMetadataItem, preferredLanguages: string | cocoascript.NSString):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1390238-metadataitemsfromarray
    metadataItemsFromArray_filteredByMetadataItemFilter(metadataItems: AVMetadataItem, metadataItemFilter: AVMetadataItemFilter):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1387869-identifierforkey
    identifierForKey_keySpace(key: AVMetadataItem, keySpace: AVMetadataKeySpace):AVMetadataIdentifier;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1385613-keyforidentifier
    keyForIdentifier(identifier: AVMetadataIdentifier):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitem/1390663-keyspaceforidentifier
    keySpaceForIdentifier(identifier: AVMetadataIdentifier):AVMetadataKeySpace;
    //
    alloc():AVMetadataItem;
    //
    init():AVMetadataItem;
  }
}

declare const AVMetadataItem: cocoascript.AVMetadataItem;
declare namespace cocoascript {
  /**
   * An object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.
   * https://developer.apple.com/documentation/avfoundation/avmovie
   */
  interface AVMovie extends AVAsset {
    // https://developer.apple.com/documentation/avfoundation/avmovie/1458223-moviewithurl
    movieWithURL_options(URL: NSURL, options: AVMovie):AVMovie;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1387923-initwithurl
    initWithURL_options(URL: NSURL, options: AVMovie):AVMovie;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1458261-moviewithdata
    movieWithData_options(data: NSData, options: AVMovie):AVMovie;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1388090-initwithdata
    initWithData_options(data: NSData, options: AVMovie):AVMovie;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1386990-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1388017-data
    data(): NSData;
    setData(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1387333-cancontainmoviefragments
    canContainMovieFragments(): boolean;
    setCanContainMovieFragments(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1388597-containsmoviefragments
    containsMovieFragments(): boolean;
    setContainsMovieFragments(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1388424-defaultmediadatastorage
    defaultMediaDataStorage(): AVMediaDataStorage;
    setDefaultMediaDataStorage(value: AVMediaDataStorage): void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1388690-movietypes
    movieTypes():AVFileType;
    // https://developer.apple.com/documentation/avfoundation/avmovie/3746571-loadtrackwithtrackid
    loadTrackWithTrackID_completionHandler(trackID: CMPersistentTrackID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/3746573-loadtrackswithmediatype
    loadTracksWithMediaType_completionHandler(mediaType: AVMediaType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/3746572-loadtrackswithmediacharacteristi
    loadTracksWithMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1386485-tracks
    tracks(): AVMovieTrack;
    setTracks(value: AVMovieTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1386722-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1388667-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1386839-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1386686-movieheaderwithfiletype
    movieHeaderWithFileType_error(fileType: AVFileType, outError: NSError):NSData;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1386682-writemovieheadertourl
    writeMovieHeaderToURL_fileType_options_error(URL: NSURL, fileType: AVFileType, options: AVMovieWritingOptions, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmovie/1385982-iscompatiblewithfiletype
    isCompatibleWithFileType(fileType: AVFileType):boolean;
    //
    alloc():AVMovie;
    //
    init():AVMovie;
  }
}

declare const AVMovie: cocoascript.AVMovie;
declare namespace cocoascript {
  /**
   * A collection of metadata items that are valid for use during a specific time range.
   * https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup
   */
  interface AVTimedMetadataGroup extends AVMetadataGroup {
    // https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/1389632-initwithitems
    initWithItems_timeRange(items: AVMetadataItem, timeRange: CMTimeRange):AVTimedMetadataGroup;
    // https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/1387128-initwithsamplebuffer
    initWithSampleBuffer(sampleBuffer: CMSampleBufferRef):AVTimedMetadataGroup;
    // https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/1385928-items
    items(): AVMetadataItem;
    setItems(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/1387992-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/1389461-copyformatdescription
    copyFormatDescription():CMMetadataFormatDescriptionRef;
    //
    alloc():AVTimedMetadataGroup;
    //
    init():AVTimedMetadataGroup;
  }
}

declare const AVTimedMetadataGroup: cocoascript.AVTimedMetadataGroup;
declare namespace cocoascript {
  /**
   * A collection of metadata items that are valid for use within a specific date range.
   * https://developer.apple.com/documentation/avfoundation/avdaterangemetadatagroup
   */
  interface AVDateRangeMetadataGroup extends AVMetadataGroup {
    // https://developer.apple.com/documentation/avfoundation/avdaterangemetadatagroup/1389614-initwithitems
    initWithItems_startDate_endDate(items: AVMetadataItem, startDate: NSDate, endDate: NSDate):AVDateRangeMetadataGroup;
    // https://developer.apple.com/documentation/avfoundation/avdaterangemetadatagroup/1390120-items
    items(): AVMetadataItem;
    setItems(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avdaterangemetadatagroup/1386420-startdate
    startDate(): NSDate;
    setStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avdaterangemetadatagroup/1386255-enddate
    endDate(): NSDate;
    setEndDate(value: NSDate): void;
    //
    alloc():AVDateRangeMetadataGroup;
    //
    init():AVDateRangeMetadataGroup;
  }
}

declare const AVDateRangeMetadataGroup: cocoascript.AVDateRangeMetadataGroup;
declare namespace cocoascript {
  /**
   * An object that supprts using Core Image filters to process an individual video frame in a video composition.
   * https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest
   */
  interface AVAsynchronousCIImageFilteringRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/1387577-sourceimage
    sourceImage(): CIImage;
    setSourceImage(value: CIImage): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/1388240-compositiontime
    compositionTime(): CMTime;
    setCompositionTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/1387933-rendersize
    renderSize(): CGSize;
    setRenderSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/1389124-finishwithimage
    finishWithImage_context(filteredImage: CIImage, context: CIContext):void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousciimagefilteringrequest/1386608-finishwitherror
    finishWithError(error: NSError):void;
    //
    alloc():AVAsynchronousCIImageFilteringRequest;
    //
    init():AVAsynchronousCIImageFilteringRequest;
  }
}

declare const AVAsynchronousCIImageFilteringRequest: cocoascript.AVAsynchronousCIImageFilteringRequest;
declare namespace cocoascript {
  /**
   * An object that contains information a video compositor needs to render an output pixel buffer.
   * https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest
   */
  interface AVAsynchronousVideoCompositionRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1386888-compositiontime
    compositionTime(): CMTime;
    setCompositionTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1389112-rendercontext
    renderContext(): AVVideoCompositionRenderContext;
    setRenderContext(value: AVVideoCompositionRenderContext): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1386672-videocompositioninstruction
    videoCompositionInstruction(): AVVideoCompositionInstruction;
    setVideoCompositionInstruction(value: AVVideoCompositionInstruction): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1388898-sourcetrackids
    sourceTrackIDs(): NSNumber;
    setSourceTrackIDs(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/3750312-sourcesampledatatrackids
    sourceSampleDataTrackIDs(): NSNumber;
    setSourceSampleDataTrackIDs(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1390379-sourceframebytrackid
    sourceFrameByTrackID(trackID: CMPersistentTrackID):CVPixelBufferRef;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/3750311-sourcesamplebufferbytrackid
    sourceSampleBufferByTrackID(trackID: CMPersistentTrackID):CMSampleBufferRef;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/3750313-sourcetimedmetadatabytrackid
    sourceTimedMetadataByTrackID(trackID: CMPersistentTrackID):AVTimedMetadataGroup;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1387450-finishwithcomposedvideoframe
    finishWithComposedVideoFrame(composedVideoFrame: CVPixelBufferRef):void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1390797-finishwitherror
    finishWithError(error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/1386261-finishcancelledrequest
    finishCancelledRequest():void;
    //
    alloc():AVAsynchronousVideoCompositionRequest;
    //
    init():AVAsynchronousVideoCompositionRequest;
  }
}

declare const AVAsynchronousVideoCompositionRequest: cocoascript.AVAsynchronousVideoCompositionRequest;
declare namespace cocoascript {
  /**
   * An object that represents an immutable video composition.
   * https://developer.apple.com/documentation/avfoundation/avvideocomposition
   */
  interface AVVideoComposition extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1385892-videocompositionwithpropertiesof
    videoCompositionWithPropertiesOfAsset(asset: AVAsset):AVVideoComposition;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1389556-videocompositionwithasset
    videoCompositionWithAsset_applyingCIFiltersWithHandler(asset: AVAsset, applier: AVAsynchronousCIImageFilteringRequest):AVVideoComposition;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1388013-frameduration
    frameDuration(): CMTime;
    setFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1388705-rendersize
    renderSize(): CGSize;
    setRenderSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1615786-renderscale
    renderScale(): number;
    setRenderScale(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1387030-animationtool
    animationTool(): AVVideoCompositionCoreAnimationTool;
    setAnimationTool(value: AVVideoCompositionCoreAnimationTool): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1389622-customvideocompositorclass
    customVideoCompositorClass(): AVVideoCompositing;
    setCustomVideoCompositorClass(value: AVVideoCompositing): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1643235-colorprimaries
    colorPrimaries(): string | cocoascript.NSString;
    setColorPrimaries(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1643230-colortransferfunction
    colorTransferFunction(): string | cocoascript.NSString;
    setColorTransferFunction(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1643236-colorycbcrmatrix
    colorYCbCrMatrix(): string | cocoascript.NSString;
    setColorYCbCrMatrix(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1389917-isvalidforasset
    isValidForAsset_timeRange_validationDelegate(asset: AVAsset, timeRange: CMTimeRange, validationDelegate: AVVideoCompositionValidationHandling):boolean;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/1389211-instructions
    instructions(): AVVideoCompositionInstruction;
    setInstructions(value: AVVideoCompositionInstruction): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/2873798-sourcetrackidforframetiming
    sourceTrackIDForFrameTiming(): CMPersistentTrackID;
    setSourceTrackIDForFrameTiming(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocomposition/3750318-sourcesampledatatrackids
    sourceSampleDataTrackIDs(): NSNumber;
    setSourceSampleDataTrackIDs(value: NSNumber): void;
    //
    alloc():AVVideoComposition;
    //
    init():AVVideoComposition;
  }
}

declare const AVVideoComposition: cocoascript.AVVideoComposition;
declare namespace cocoascript {
  /**
   * An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
   * https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction
   */
  interface AVVideoCompositionLayerInstruction extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/1390240-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/1388471-getopacityrampfortime
    getOpacityRampForTime_startOpacity_endOpacity_timeRange(time: CMTime, startOpacity: number, endOpacity: number, timeRange: CMTimeRange):boolean;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/1387257-gettransformrampfortime
    getTransformRampForTime_startTransform_endTransform_timeRange(time: CMTime, startTransform: CGAffineTransform, endTransform: CGAffineTransform, timeRange: CMTimeRange):boolean;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/1387998-getcroprectanglerampfortime
    getCropRectangleRampForTime_startCropRectangle_endCropRectangle_timeRange(time: CMTime, startCropRectangle: CGRect, endCropRectangle: CGRect, timeRange: CMTimeRange):boolean;
    //
    alloc():AVVideoCompositionLayerInstruction;
    //
    init():AVVideoCompositionLayerInstruction;
  }
}

declare const AVVideoCompositionLayerInstruction: cocoascript.AVVideoCompositionLayerInstruction;
declare namespace cocoascript {
  /**
   * An operation performed by a compositor.
   * https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction
   */
  interface AVVideoCompositionInstruction extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction/1389384-backgroundcolor
    backgroundColor(): CGColorRef;
    setBackgroundColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction/1389689-layerinstructions
    layerInstructions(): AVVideoCompositionLayerInstruction;
    setLayerInstructions(value: AVVideoCompositionLayerInstruction): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction/1387857-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction/1388697-enablepostprocessing
    enablePostProcessing(): boolean;
    setEnablePostProcessing(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction/1390913-requiredsourcetrackids
    requiredSourceTrackIDs(): NSValue;
    setRequiredSourceTrackIDs(value: NSValue): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction/3750319-requiredsourcesampledatatrackids
    requiredSourceSampleDataTrackIDs(): NSNumber;
    setRequiredSourceSampleDataTrackIDs(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction/1387657-passthroughtrackid
    passthroughTrackID(): CMPersistentTrackID;
    setPassthroughTrackID(value: CMPersistentTrackID): void;
    //
    alloc():AVVideoCompositionInstruction;
    //
    init():AVVideoCompositionInstruction;
  }
}

declare const AVVideoCompositionInstruction: cocoascript.AVVideoCompositionInstruction;
declare namespace cocoascript {
  /**
   * An object that manages the input parameters for mixing audio tracks.
   * https://developer.apple.com/documentation/avfoundation/avaudiomix
   */
  interface AVAudioMix extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiomix/1388791-inputparameters
    inputParameters(): AVAudioMixInputParameters;
    setInputParameters(value: AVAudioMixInputParameters): void;
    //
    alloc():AVAudioMix;
    //
    init():AVAudioMix;
  }
}

declare const AVAudioMix: cocoascript.AVAudioMix;
declare namespace cocoascript {
  /**
   * An object that represents the parameters that you apply when adding an audio track to a mix.
   * https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameters
   */
  interface AVAudioMixInputParameters extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameters/1387471-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameters/1389578-getvolumerampfortime
    getVolumeRampForTime_startVolume_endVolume_timeRange(time: CMTime, startVolume: number, endVolume: number, timeRange: CMTimeRange):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameters/1388578-audiotapprocessor
    audioTapProcessor(): MTAudioProcessingTapRef;
    setAudioTapProcessor(value: MTAudioProcessingTapRef): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameters/1387042-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(value: AVAudioTimePitchAlgorithm): void;
    //
    alloc():AVAudioMixInputParameters;
    //
    init():AVAudioMixInputParameters;
  }
}

declare const AVAudioMixInputParameters: cocoascript.AVAudioMixInputParameters;
declare namespace cocoascript {
  /**
   * An object that models a track of media that an asset contains.
   * https://developer.apple.com/documentation/avfoundation/avassettrack
   */
  interface AVAssetTrack extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1385799-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1385741-mediatype
    mediaType(): AVMediaType;
    setMediaType(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1385611-asset
    asset(): AVAsset;
    setAsset(value: AVAsset): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/3746539-loadmetadataforformat
    loadMetadataForFormat_completionHandler(format: AVMetadataFormat, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/3746541-loadsegmentfortracktime
    loadSegmentForTrackTime_completionHandler(trackTime: CMTime, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/3746540-loadsamplepresentationtimefortra
    loadSamplePresentationTimeForTrackTime_completionHandler(trackTime: CMTime, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/3746538-loadassociatedtracksoftype
    loadAssociatedTracksOfType_completionHandler(trackAssociationType: AVTrackAssociationType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1386694-formatdescriptions
    formatDescriptions(): NSArray;
    setFormatDescriptions(value: NSArray): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388276-playable
    playable(): boolean;
    setPlayable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/2887366-decodable
    decodable(): boolean;
    setDecodable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1387546-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1387643-selfcontained
    selfContained(): boolean;
    setSelfContained(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388900-totalsampledatalength
    totalSampleDataLength(): number;
    setTotalSampleDataLength(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1385847-hasmediacharacteristic
    hasMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388335-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1389233-naturaltimescale
    naturalTimeScale(): CMTimeScale;
    setNaturalTimeScale(value: CMTimeScale): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1389758-estimateddatarate
    estimatedDataRate(): number;
    setEstimatedDataRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388627-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1389105-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1387724-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1389837-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(value: CGAffineTransform): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388832-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/3131265-hasaudiosampledependencies
    hasAudioSampleDependencies(): boolean;
    setHasAudioSampleDependencies(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1386182-nominalframerate
    nominalFrameRate(): number;
    setNominalFrameRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388608-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1390844-requiresframereordering
    requiresFrameReordering(): boolean;
    setRequiresFrameReordering(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1389054-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1390832-commonmetadata
    commonMetadata(): AVMetadataItem;
    setCommonMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1385751-availablemetadataformats
    availableMetadataFormats(): AVMetadataFormat;
    setAvailableMetadataFormats(value: AVMetadataFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1387921-metadataforformat
    metadataForFormat(format: AVMetadataFormat):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1390665-segments
    segments(): AVAssetTrackSegment;
    setSegments(value: AVAssetTrackSegment): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1387186-segmentfortracktime
    segmentForTrackTime(trackTime: CMTime):AVAssetTrackSegment;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388248-samplepresentationtimefortrackti
    samplePresentationTimeForTrackTime(trackTime: CMTime):CMTime;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1388065-availabletrackassociationtypes
    availableTrackAssociationTypes(): AVTrackAssociationType;
    setAvailableTrackAssociationTypes(value: AVTrackAssociationType): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1389251-associatedtracksoftype
    associatedTracksOfType(trackAssociationType: AVTrackAssociationType):AVAssetTrack;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1386692-canprovidesamplecursors
    canProvideSampleCursors(): boolean;
    setCanProvideSampleCursors(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1390248-makesamplecursorwithpresentation
    makeSampleCursorWithPresentationTimeStamp(presentationTimeStamp: CMTime):AVSampleCursor;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1387226-makesamplecursoratfirstsampleind
    makeSampleCursorAtFirstSampleInDecodeOrder():AVSampleCursor;
    // https://developer.apple.com/documentation/avfoundation/avassettrack/1386014-makesamplecursoratlastsampleinde
    makeSampleCursorAtLastSampleInDecodeOrder():AVSampleCursor;
    //
    alloc():AVAssetTrack;
    //
    init():AVAssetTrack;
  }
}

declare const AVAssetTrack: cocoascript.AVAssetTrack;
declare namespace cocoascript {
  /**
   * An object that represents a collection of mutually exclusive options for the presentation of media within an asset.
   * https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup
   */
  interface AVMediaSelectionGroup extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1388351-options
    options(): AVMediaSelectionOption;
    setOptions(value: AVMediaSelectionOption): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1389968-mediaselectionoptionwithproperty
    mediaSelectionOptionWithPropertyList(plist: AVMediaSelectionGroup):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1388440-defaultoption
    defaultOption(): AVMediaSelectionOption;
    setDefaultOption(value: AVMediaSelectionOption): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1388483-allowsemptyselection
    allowsEmptySelection(): boolean;
    setAllowsEmptySelection(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1387351-playablemediaselectionoptionsfro
    playableMediaSelectionOptionsFromArray(mediaSelectionOptions: AVMediaSelectionOption):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1387494-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_withLocale(mediaSelectionOptions: AVMediaSelectionOption, locale: NSLocale):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1388258-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_withMediaCharacteristics(mediaSelectionOptions: AVMediaSelectionOption, mediaCharacteristics: AVMediaCharacteristic):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1387631-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_withoutMediaCharacteristics(mediaSelectionOptions: AVMediaSelectionOption, mediaCharacteristics: AVMediaCharacteristic):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1387034-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_filteredAndSortedAccordingToPreferredLanguages(mediaSelectionOptions: AVMediaSelectionOption, preferredLanguages: string | cocoascript.NSString):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/1623531-makenowplayinginfolanguageoption
    makeNowPlayingInfoLanguageOptionGroup():MPNowPlayingInfoLanguageOptionGroup;
    //
    alloc():AVMediaSelectionGroup;
    //
    init():AVMediaSelectionGroup;
  }
}

declare const AVMediaSelectionGroup: cocoascript.AVMediaSelectionGroup;
declare namespace cocoascript {
  /**
   * An object that represents a specific option for the presentation of media within a group of options.
   * https://developer.apple.com/documentation/avfoundation/avmediaselectionoption
   */
  interface AVMediaSelectionOption extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1386322-mediatype
    mediaType(): AVMediaType;
    setMediaType(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1385587-mediasubtypes
    mediaSubTypes(): NSNumber;
    setMediaSubTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1388531-hasmediacharacteristic
    hasMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1387859-commonmetadata
    commonMetadata(): AVMetadataItem;
    setCommonMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1389504-availablemetadataformats
    availableMetadataFormats(): string | cocoascript.NSString;
    setAvailableMetadataFormats(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1386666-metadataforformat
    metadataForFormat(format: string | cocoascript.NSString):AVMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1390917-playable
    playable(): boolean;
    setPlayable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1388485-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1388021-displaynamewithlocale
    displayNameWithLocale(locale: NSLocale):NSString;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1388436-locale
    locale(): NSLocale;
    setLocale(value: NSLocale): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1387619-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1388232-associatedmediaselectionoptionin
    associatedMediaSelectionOptionInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1623532-makenowplayinginfolanguageoption
    makeNowPlayingInfoLanguageOption():MPNowPlayingInfoLanguageOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/1386310-propertylist
    propertyList():AVMediaSelectionOption;
    //
    alloc():AVMediaSelectionOption;
    //
    init():AVMediaSelectionOption;
  }
}

declare const AVMediaSelectionOption: cocoascript.AVMediaSelectionOption;
declare namespace cocoascript {
  /**
   * An object that represents the text styling rules to apply to a media item’s textual content.
   * https://developer.apple.com/documentation/avfoundation/avtextstylerule
   */
  interface AVTextStyleRule extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1387802-textstylerulesfrompropertylist
    textStyleRulesFromPropertyList(plist: AVTextStyleRule):AVTextStyleRule;
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1584360-textstylerulewithtextmarkupattri
    textStyleRuleWithTextMarkupAttributes(textMarkupAttributes: AVTextStyleRule):AVTextStyleRule;
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1584361-textstylerulewithtextmarkupattri
    textStyleRuleWithTextMarkupAttributes_textSelector(textMarkupAttributes: AVTextStyleRule, textSelector: string | cocoascript.NSString):AVTextStyleRule;
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1385849-initwithtextmarkupattributes
    initWithTextMarkupAttributes(textMarkupAttributes: AVTextStyleRule):AVTextStyleRule;
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1389854-initwithtextmarkupattributes
    initWithTextMarkupAttributes_textSelector(textMarkupAttributes: AVTextStyleRule, textSelector: string | cocoascript.NSString):AVTextStyleRule;
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1387945-textmarkupattributes
    textMarkupAttributes(): id;
    setTextMarkupAttributes(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1389451-textselector
    textSelector(): string | cocoascript.NSString;
    setTextSelector(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avtextstylerule/1387970-propertylistfortextstylerules
    propertyListForTextStyleRules(textStyleRules: AVTextStyleRule):AVTextStyleRule;
    //
    alloc():AVTextStyleRule;
    //
    init():AVTextStyleRule;
  }
}

declare const AVTextStyleRule: cocoascript.AVTextStyleRule;
declare namespace cocoascript {
  /**
   * An object that represents a complete rendition of media selection options on an asset.
   * https://developer.apple.com/documentation/avfoundation/avmediaselection
   */
  interface AVMediaSelection extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmediaselection/1389197-selectedmediaoptioninmediaselect
    selectedMediaOptionInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avmediaselection/1386716-mediaselectioncriteriacanbeappli
    mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmediaselection/1390874-asset
    asset(): AVAsset;
    setAsset(value: AVAsset): void;
    //
    alloc():AVMediaSelection;
    //
    init():AVMediaSelection;
  }
}

declare const AVMediaSelection: cocoascript.AVMediaSelection;
declare namespace cocoascript {
  /**
   * An object that models the timing and presentation state of an asset that a player object presents.
   * https://developer.apple.com/documentation/avfoundation/avplayeritem
   */
  interface AVPlayerItem extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387558-initwithurl
    initWithURL(URL: NSURL):AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1588089-playeritemwithurl
    playerItemWithURL(URL: NSURL):AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1390707-initwithasset
    initWithAsset(asset: AVAsset):AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1588087-playeritemwithasset
    playerItemWithAsset(asset: AVAsset):AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387529-initwithasset
    initWithAsset_automaticallyLoadedAssetKeys(asset: AVAsset, automaticallyLoadedAssetKeys: string | cocoascript.NSString):AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1588088-playeritemwithasset
    playerItemWithAsset_automaticallyLoadedAssetKeys(asset: AVAsset, automaticallyLoadedAssetKeys: string | cocoascript.NSString):AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386361-tracks
    tracks(): AVPlayerItemTrack;
    setTracks(value: AVPlayerItemTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1627623-externalmetadata
    externalMetadata(): AVMetadataItem;
    setExternalMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389602-timedmetadata
    timedMetadata(): AVMetadataItem;
    setTimedMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388633-automaticallyloadedassetkeys
    automaticallyLoadedAssetKeys(): string | cocoascript.NSString;
    setAutomaticallyLoadedAssetKeys(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389493-status
    status(): AVPlayerItemStatus;
    setStatus(value: AVPlayerItemStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389185-error
    error(): NSError;
    setError(value: NSError): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1385591-canplayreverse
    canPlayReverse(): boolean;
    setCanPlayReverse(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389096-canplayfastforward
    canPlayFastForward(): boolean;
    setCanPlayFastForward(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1390493-canplayfastreverse
    canPlayFastReverse(): boolean;
    setCanPlayFastReverse(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388078-canplayslowforward
    canPlaySlowForward(): boolean;
    setCanPlaySlowForward(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1390598-canplayslowreverse
    canPlaySlowReverse(): boolean;
    setCanPlaySlowReverse(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3726149-variantpreferences
    variantPreferences(): AVVariantPreferences;
    setVariantPreferences(value: AVVariantPreferences): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3579514-startsonfirsteligiblevariant
    startsOnFirstEligibleVariant(): boolean;
    setStartsOnFirstEligibleVariant(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3726147-templateplayeritem
    templatePlayerItem(): AVPlayerItem;
    setTemplatePlayerItem(value: AVPlayerItem): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3726146-automaticallyhandlesinterstitial
    automaticallyHandlesInterstitialEvents(): boolean;
    setAutomaticallyHandlesInterstitialEvents(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3750338-translatesplayerinterstitialeven
    translatesPlayerInterstitialEvents(): boolean;
    setTranslatesPlayerInterstitialEvents(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1385622-forwardplaybackendtime
    forwardPlaybackEndTime(): CMTime;
    setForwardPlaybackEndTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388438-reverseplaybackendtime
    reversePlaybackEndTime(): CMTime;
    setReversePlaybackEndTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389656-canstepforward
    canStepForward(): boolean;
    setCanStepForward(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386796-canstepbackward
    canStepBackward(): boolean;
    setCanStepBackward(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387968-stepbycount
    stepByCount(stepCount: NSInteger):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387418-seektotime
    seekToTime_completionHandler(time: CMTime, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387753-seektotime
    seekToTime_toleranceBefore_toleranceAfter_completionHandler(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389877-seektodate
    seekToDate_completionHandler(date: NSDate, completionHandler: boolean):boolean;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388316-cancelpendingseeks
    cancelPendingSeeks():void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1390153-seektotime
    seekToTime(time: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1385620-seektotime
    seekToTime_toleranceBefore_toleranceAfter(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389067-seektodate
    seekToDate(date: NSDate):boolean;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387230-currenttime
    currentTime():CMTime;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386188-currentdate
    currentDate():NSDate;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389386-duration
    duration(): CMTime;
    setDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387605-timebase
    timebase(): CMTimebaseRef;
    setTimebase(value: CMTimebaseRef): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389953-loadedtimeranges
    loadedTimeRanges(): NSValue;
    setLoadedTimeRanges(value: NSValue): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386155-seekabletimeranges
    seekableTimeRanges(): NSValue;
    setSeekableTimeRanges(value: NSValue): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1390348-playbacklikelytokeepup
    playbackLikelyToKeepUp(): boolean;
    setPlaybackLikelyToKeepUp(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388852-playbackbufferfull
    playbackBufferFull(): boolean;
    setPlaybackBufferFull(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386960-playbackbufferempty
    playbackBufferEmpty(): boolean;
    setPlaybackBufferEmpty(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3746589-preferredpeakbitrateforexpensive
    preferredPeakBitRateForExpensiveNetworks(): number;
    setPreferredPeakBitRateForExpensiveNetworks(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3750308-preferredmaximumresolutionforexp
    preferredMaximumResolutionForExpensiveNetworks(): CGSize;
    setPreferredMaximumResolutionForExpensiveNetworks(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386519-currentmediaselection
    currentMediaSelection(): AVMediaSelection;
    setCurrentMediaSelection(value: AVMediaSelection): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389610-selectmediaoption
    selectMediaOption_inMediaSelectionGroup(mediaSelectionOption: AVMediaSelectionOption, mediaSelectionGroup: AVMediaSelectionGroup):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388268-selectmediaoptionautomaticallyin
    selectMediaOptionAutomaticallyInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386314-selectedmediaoptioninmediaselect
    selectedMediaOptionInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):AVMediaSelectionOption;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389681-textstylerules
    textStyleRules(): AVTextStyleRule;
    setTextStyleRules(value: AVTextStyleRule): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388499-accesslog
    accessLog():AVPlayerItemAccessLog;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387573-errorlog
    errorLog():AVPlayerItemErrorLog;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3229855-automaticallypreservestimeoffset
    automaticallyPreservesTimeOffsetFromLive(): boolean;
    setAutomaticallyPreservesTimeOffsetFromLive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3227883-recommendedtimeoffsetfromlive
    recommendedTimeOffsetFromLive(): CMTime;
    setRecommendedTimeOffsetFromLive(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3227882-configuredtimeoffsetfromlive
    configuredTimeOffsetFromLive(): CMTime;
    setConfiguredTimeOffsetFromLive(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388962-presentationsize
    presentationSize(): CGSize;
    setPresentationSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/2867324-preferredmaximumresolution
    preferredMaximumResolution(): CGSize;
    setPreferredMaximumResolution(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/2868499-videoaperturemode
    videoApertureMode(): AVVideoApertureMode;
    setVideoApertureMode(value: AVVideoApertureMode): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3656127-appliesperframehdrdisplaymetadat
    appliesPerFrameHDRDisplayMetadata(): boolean;
    setAppliesPerFrameHDRDisplayMetadata(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388818-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(value: AVVideoComposition): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1390669-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(value: AVVideoCompositing): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1385726-seekingwaitsforvideocompositionr
    seekingWaitsForVideoCompositionRendering(): boolean;
    setSeekingWaitsForVideoCompositionRendering(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388037-audiomix
    audioMix(): AVAudioMix;
    setAudioMix(value: AVAudioMix): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1385855-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(value: AVAudioTimePitchAlgorithm): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3601108-allowedaudiospatializationformat
    allowedAudioSpatializationFormats(): AVAudioSpatializationFormats;
    setAllowedAudioSpatializationFormats(value: AVAudioSpatializationFormats): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3237174-audiospatializationallowed
    audioSpatializationAllowed(): boolean;
    setAudioSpatializationAllowed(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389090-outputs
    outputs(): AVPlayerItemOutput;
    setOutputs(value: AVPlayerItemOutput): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389782-addoutput
    addOutput(output: AVPlayerItemOutput):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388756-removeoutput
    removeOutput(output: AVPlayerItemOutput):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1624161-mediadatacollectors
    mediaDataCollectors(): AVPlayerItemMediaDataCollector;
    setMediaDataCollectors(value: AVPlayerItemMediaDataCollector): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1624164-addmediadatacollector
    addMediaDataCollector(collector: AVPlayerItemMediaDataCollector):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1624163-removemediadatacollector
    removeMediaDataCollector(collector: AVPlayerItemMediaDataCollector):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388541-preferredpeakbitrate
    preferredPeakBitRate(): number;
    setPreferredPeakBitRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1643630-preferredforwardbufferduration
    preferredForwardBufferDuration(): NSTimeInterval;
    setPreferredForwardBufferDuration(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388752-canusenetworkresourcesforlivestr
    canUseNetworkResourcesForLiveStreamingWhilePaused(): boolean;
    setCanUseNetworkResourcesForLiveStreamingWhilePaused(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1627626-navigationmarkergroups
    navigationMarkerGroups(): AVNavigationMarkersGroup;
    setNavigationMarkerGroups(value: AVNavigationMarkersGroup): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1627628-interstitialtimeranges
    interstitialTimeRanges(): AVInterstitialTimeRange;
    setInterstitialTimeRanges(value: AVInterstitialTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1650942-nextcontentproposal
    nextContentProposal(): AVContentProposal;
    setNextContentProposal(value: AVContentProposal): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3152863-requestplaybackrestrictionsautho
    requestPlaybackRestrictionsAuthorization(completion: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3152862-cancelplaybackrestrictionsauthor
    cancelPlaybackRestrictionsAuthorizationRequest():void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388458-contentauthorizedforplayback
    contentAuthorizedForPlayback(): boolean;
    setContentAuthorizedForPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1386106-authorizationrequiredforplayback
    authorizationRequiredForPlayback(): boolean;
    setAuthorizationRequiredForPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389929-applicationauthorizedforplayback
    applicationAuthorizedForPlayback(): boolean;
    setApplicationAuthorizedForPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1390600-requestcontentauthorizationasync
    requestContentAuthorizationAsynchronouslyWithTimeoutInterval_completionHandler(timeoutInterval: NSTimeInterval, handler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1389746-contentauthorizationrequeststatu
    contentAuthorizationRequestStatus(): AVContentAuthorizationStatus;
    setContentAuthorizationRequestStatus(value: AVContentAuthorizationStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1387726-cancelcontentauthorizationreques
    cancelContentAuthorizationRequest():void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1627766-externalsubtitleoptionlanguages
    externalSubtitleOptionLanguages(): string | cocoascript.NSString;
    setExternalSubtitleOptionLanguages(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1627765-selectedexternalsubtitleoptionla
    selectedExternalSubtitleOptionLanguage(): string | cocoascript.NSString;
    setSelectedExternalSubtitleOptionLanguage(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388177-asset
    asset(): AVAsset;
    setAsset(value: AVAsset): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3861797-copy
    copy():AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3861798-copywithzone
    copyWithZone(zone: NSZone):AVPlayerItem;
    //
    alloc():AVPlayerItem;
    //
    init():AVPlayerItem;
  }
}

declare const AVPlayerItem: cocoascript.AVPlayerItem;
// https://developer.apple.com/documentation/avfoundation/avplayeritemdidplaytoendtimenotification
declare const AVPlayerItemDidPlayToEndTimeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avplayeritemfailedtoplaytoendtimenotification
declare const AVPlayerItemFailedToPlayToEndTimeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avplayeritemplaybackstallednotification
declare const AVPlayerItemPlaybackStalledNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avplayeritemnewaccesslogentrynotification
declare const AVPlayerItemNewAccessLogEntryNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avplayeritemnewerrorlogentrynotification
declare const AVPlayerItemNewErrorLogEntryNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A single entry in a player item's access log.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent
   */
  interface AVPlayerItemAccessLogEvent extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388643-uri
    URI(): string | cocoascript.NSString;
    setURI(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1390315-serveraddress
    serverAddress(): string | cocoascript.NSString;
    setServerAddress(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388076-numberofserveraddresschanges
    numberOfServerAddressChanges(): NSInteger;
    setNumberOfServerAddressChanges(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388549-mediarequestswwan
    mediaRequestsWWAN(): NSInteger;
    setMediaRequestsWWAN(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1387370-transferduration
    transferDuration(): NSTimeInterval;
    setTransferDuration(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1387305-numberofbytestransferred
    numberOfBytesTransferred(): number;
    setNumberOfBytesTransferred(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388357-numberofmediarequests
    numberOfMediaRequests(): NSInteger;
    setNumberOfMediaRequests(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1390502-playbackstartdate
    playbackStartDate(): NSDate;
    setPlaybackStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388462-playbacksessionid
    playbackSessionID(): string | cocoascript.NSString;
    setPlaybackSessionID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1385922-playbackstartoffset
    playbackStartOffset(): NSTimeInterval;
    setPlaybackStartOffset(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1387218-playbacktype
    playbackType(): string | cocoascript.NSString;
    setPlaybackType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1389138-startuptime
    startupTime(): NSTimeInterval;
    setStartupTime(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388200-durationwatched
    durationWatched(): NSTimeInterval;
    setDurationWatched(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388647-numberofdroppedvideoframes
    numberOfDroppedVideoFrames(): NSInteger;
    setNumberOfDroppedVideoFrames(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1387712-numberofstalls
    numberOfStalls(): NSInteger;
    setNumberOfStalls(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1588090-numberofsegmentsdownloaded
    numberOfSegmentsDownloaded(): NSInteger;
    setNumberOfSegmentsDownloaded(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388147-segmentsdownloadedduration
    segmentsDownloadedDuration(): NSTimeInterval;
    setSegmentsDownloadedDuration(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1389213-downloadoverdue
    downloadOverdue(): NSInteger;
    setDownloadOverdue(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1386094-observedbitratestandarddeviation
    observedBitrateStandardDeviation(): number;
    setObservedBitrateStandardDeviation(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1386714-observedmaxbitrate
    observedMaxBitrate(): number;
    setObservedMaxBitrate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1390173-observedminbitrate
    observedMinBitrate(): number;
    setObservedMinBitrate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1390645-switchbitrate
    switchBitrate(): number;
    setSwitchBitrate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1388123-indicatedbitrate
    indicatedBitrate(): number;
    setIndicatedBitrate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1390804-observedbitrate
    observedBitrate(): number;
    setObservedBitrate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1643590-averageaudiobitrate
    averageAudioBitrate(): number;
    setAverageAudioBitrate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1643592-averagevideobitrate
    averageVideoBitrate(): number;
    setAverageVideoBitrate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/1872546-indicatedaveragebitrate
    indicatedAverageBitrate(): number;
    setIndicatedAverageBitrate(value: number): void;
    //
    alloc():AVPlayerItemAccessLogEvent;
    //
    init():AVPlayerItemAccessLogEvent;
  }
}

declare const AVPlayerItemAccessLogEvent: cocoascript.AVPlayerItemAccessLogEvent;
declare namespace cocoascript {
  /**
   * An object used to retrieve the access log associated with a player item.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog
   */
  interface AVPlayerItemAccessLog extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog/1387406-events
    events(): AVPlayerItemAccessLogEvent;
    setEvents(value: AVPlayerItemAccessLogEvent): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog/1386892-extendedlogdata
    extendedLogData():NSData;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog/1390863-extendedlogdatastringencoding
    extendedLogDataStringEncoding(): NSStringEncoding;
    setExtendedLogDataStringEncoding(value: NSStringEncoding): void;
    //
    alloc():AVPlayerItemAccessLog;
    //
    init():AVPlayerItemAccessLog;
  }
}

declare const AVPlayerItemAccessLog: cocoascript.AVPlayerItemAccessLog;
declare namespace cocoascript {
  /**
   * A single item in a player item's error log.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent
   */
  interface AVPlayerItemErrorLogEvent extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/1388416-date
    date(): NSDate;
    setDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/1389302-uri
    URI(): string | cocoascript.NSString;
    setURI(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/1385797-serveraddress
    serverAddress(): string | cocoascript.NSString;
    setServerAddress(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/1385934-playbacksessionid
    playbackSessionID(): string | cocoascript.NSString;
    setPlaybackSessionID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/1387875-errorstatuscode
    errorStatusCode(): NSInteger;
    setErrorStatusCode(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/1388603-errordomain
    errorDomain(): string | cocoascript.NSString;
    setErrorDomain(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent/1388011-errorcomment
    errorComment(): string | cocoascript.NSString;
    setErrorComment(value: string | cocoascript.NSString): void;
    //
    alloc():AVPlayerItemErrorLogEvent;
    //
    init():AVPlayerItemErrorLogEvent;
  }
}

declare const AVPlayerItemErrorLogEvent: cocoascript.AVPlayerItemErrorLogEvent;
declare namespace cocoascript {
  /**
   * The error log associated with a player item.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlog
   */
  interface AVPlayerItemErrorLog extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlog/1387637-events
    events(): AVPlayerItemErrorLogEvent;
    setEvents(value: AVPlayerItemErrorLogEvent): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlog/1389100-extendedlogdata
    extendedLogData():NSData;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlog/1387271-extendedlogdatastringencoding
    extendedLogDataStringEncoding(): NSStringEncoding;
    setExtendedLogDataStringEncoding(value: NSStringEncoding): void;
    //
    alloc():AVPlayerItemErrorLog;
    //
    init():AVPlayerItemErrorLog;
  }
}

declare const AVPlayerItemErrorLog: cocoascript.AVPlayerItemErrorLog;
declare namespace cocoascript {
  /**
   * A specification of the features and settings to use for a single photo capture request.
   * https://developer.apple.com/documentation/avfoundation/avcapturephotosettings
   */
  interface AVCapturePhotoSettings extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1649254-photosettings
    photoSettings():AVCapturePhotoSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648673-photosettingswithformat
    photoSettingsWithFormat(format: AVCapturePhotoSettings):AVCapturePhotoSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648662-photosettingswithrawpixelformatt
    photoSettingsWithRawPixelFormatType(rawPixelFormatType: any):AVCapturePhotoSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648700-photosettingswithrawpixelformatt
    photoSettingsWithRawPixelFormatType_processedFormat(rawPixelFormatType: any, processedFormat: AVCapturePhotoSettings):AVCapturePhotoSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873920-photosettingswithrawpixelformatt
    photoSettingsWithRawPixelFormatType_rawFileType_processedFormat_processedFileType(rawPixelFormatType: any, rawFileType: AVFileType, processedFormat: AVCapturePhotoSettings, processedFileType: AVFileType):AVCapturePhotoSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648783-format
    format(): id;
    setFormat(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873970-processedfiletype
    processedFileType(): AVFileType;
    setProcessedFileType(value: AVFileType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873895-rawfiletype
    rawFileType(): AVFileType;
    setRawFileType(value: AVFileType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648768-rawphotopixelformattype
    rawPhotoPixelFormatType(): any;
    setRawPhotoPixelFormatType(value: any): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1778655-photosettingsfromphotosettings
    photoSettingsFromPhotoSettings(photoSettings: AVCapturePhotoSettings):AVCapturePhotoSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648767-uniqueid
    uniqueID(): number;
    setUniqueID(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648696-previewphotoformat
    previewPhotoFormat(): id;
    setPreviewPhotoFormat(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1778629-availablepreviewphotopixelformat
    availablePreviewPhotoPixelFormatTypes(): NSNumber;
    setAvailablePreviewPhotoPixelFormatTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873905-embeddedthumbnailphotoformat
    embeddedThumbnailPhotoFormat(): id;
    setEmbeddedThumbnailPhotoFormat(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3019549-availablerawembeddedthumbnailpho
    availableRawEmbeddedThumbnailPhotoCodecTypes(): AVVideoCodecType;
    setAvailableRawEmbeddedThumbnailPhotoCodecTypes(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3019550-rawembeddedthumbnailphotoformat
    rawEmbeddedThumbnailPhotoFormat(): id;
    setRawEmbeddedThumbnailPhotoFormat(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873907-availableembeddedthumbnailphotoc
    availableEmbeddedThumbnailPhotoCodecTypes(): AVVideoCodecType;
    setAvailableEmbeddedThumbnailPhotoCodecTypes(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648760-flashmode
    flashMode(): AVCaptureFlashMode;
    setFlashMode(value: AVCaptureFlashMode): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3183000-photoqualityprioritization
    photoQualityPrioritization(): AVCapturePhotoQualityPrioritization;
    setPhotoQualityPrioritization(value: AVCapturePhotoQualityPrioritization): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2968220-autoredeyereductionenabled
    autoRedEyeReductionEnabled(): boolean;
    setAutoRedEyeReductionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648666-highresolutionphotoenabled
    highResolutionPhotoEnabled(): boolean;
    setHighResolutionPhotoEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2890247-cameracalibrationdatadeliveryena
    cameraCalibrationDataDeliveryEnabled(): boolean;
    setCameraCalibrationDataDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3566332-autocontentawaredistortioncorrec
    autoContentAwareDistortionCorrectionEnabled(): boolean;
    setAutoContentAwareDistortionCorrectionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3192192-autovirtualdevicefusionenabled
    autoVirtualDeviceFusionEnabled(): boolean;
    setAutoVirtualDeviceFusionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3192193-virtualdeviceconstituentphotodel
    virtualDeviceConstituentPhotoDeliveryEnabledDevices(): AVCaptureDevice;
    setVirtualDeviceConstituentPhotoDeliveryEnabledDevices(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648710-autostillimagestabilizationenabl
    autoStillImageStabilizationEnabled(): boolean;
    setAutoStillImageStabilizationEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2726862-autodualcamerafusionenabled
    autoDualCameraFusionEnabled(): boolean;
    setAutoDualCameraFusionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873917-dualcameradualphotodeliveryenabl
    dualCameraDualPhotoDeliveryEnabled(): boolean;
    setDualCameraDualPhotoDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648681-livephotomoviefileurl
    livePhotoMovieFileURL(): NSURL;
    setLivePhotoMovieFileURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/1648731-livephotomoviemetadata
    livePhotoMovieMetadata(): AVMetadataItem;
    setLivePhotoMovieMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2866564-livephotovideocodectype
    livePhotoVideoCodecType(): AVVideoCodecType;
    setLivePhotoVideoCodecType(value: AVVideoCodecType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2866562-depthdatadeliveryenabled
    depthDataDeliveryEnabled(): boolean;
    setDepthDataDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2873915-embedsdepthdatainphoto
    embedsDepthDataInPhoto(): boolean;
    setEmbedsDepthDataInPhoto(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2881293-depthdatafiltered
    depthDataFiltered(): boolean;
    setDepthDataFiltered(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2977532-portraiteffectsmattedeliveryenab
    portraitEffectsMatteDeliveryEnabled(): boolean;
    setPortraitEffectsMatteDeliveryEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2977531-embedsportraiteffectsmatteinphot
    embedsPortraitEffectsMatteInPhoto(): boolean;
    setEmbedsPortraitEffectsMatteInPhoto(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3153013-embedssemanticsegmentationmattes
    embedsSemanticSegmentationMattesInPhoto(): boolean;
    setEmbedsSemanticSegmentationMattesInPhoto(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/3153014-enabledsemanticsegmentationmatte
    enabledSemanticSegmentationMatteTypes(): AVSemanticSegmentationMatteType;
    setEnabledSemanticSegmentationMatteTypes(value: AVSemanticSegmentationMatteType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/2875951-metadata
    metadata(): id;
    setMetadata(value: id): void;
    //
    alloc():AVCapturePhotoSettings;
    //
    init():AVCapturePhotoSettings;
  }
}

declare const AVCapturePhotoSettings: cocoascript.AVCapturePhotoSettings;
declare namespace cocoascript {
  /**
   * An object that defines a policy to automatically manage the storage of downloaded assets.
   * https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanagementpolicy
   */
  interface AVAssetDownloadStorageManagementPolicy extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanagementpolicy/2865559-expirationdate
    expirationDate(): NSDate;
    setExpirationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanagementpolicy/2865565-priority
    priority(): AVAssetDownloadedAssetEvictionPriority;
    setPriority(value: AVAssetDownloadedAssetEvictionPriority): void;
    //
    alloc():AVAssetDownloadStorageManagementPolicy;
    //
    init():AVAssetDownloadStorageManagementPolicy;
  }
}

declare const AVAssetDownloadStorageManagementPolicy: cocoascript.AVAssetDownloadStorageManagementPolicy;
declare namespace cocoascript {
  /**
   * A configuration object that contains variant qualifiers and media options.
   * https://developer.apple.com/documentation/avfoundation/avassetdownloadcontentconfiguration
   */
  interface AVAssetDownloadContentConfiguration extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadcontentconfiguration/3750225-variantqualifiers
    variantQualifiers(): AVAssetVariantQualifier;
    setVariantQualifiers(value: AVAssetVariantQualifier): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadcontentconfiguration/3750224-mediaselections
    mediaSelections(): AVMediaSelection;
    setMediaSelections(value: AVMediaSelection): void;
    //
    alloc():AVAssetDownloadContentConfiguration;
    //
    init():AVAssetDownloadContentConfiguration;
  }
}

declare const AVAssetDownloadContentConfiguration: cocoascript.AVAssetDownloadContentConfiguration;
declare namespace cocoascript {
  /**
   * An object that represents an HTTP Live Streaming asset variant.
   * https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier
   */
  interface AVAssetVariantQualifier extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/3750228-assetvariantqualifierwithvariant
    assetVariantQualifierWithVariant(variant: AVAssetVariant):AVAssetVariantQualifier;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/3750227-assetvariantqualifierwithpredica
    assetVariantQualifierWithPredicate(predicate: NSPredicate):AVAssetVariantQualifier;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/3750230-predicateforchannelcount
    predicateForChannelCount_mediaSelectionOption_operatorType(channelCount: NSInteger, mediaSelectionOption: AVMediaSelectionOption, operatorType: NSPredicateOperatorType):NSPredicate;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/3857561-predicateforpresentationheight
    predicateForPresentationHeight_operatorType(height: CGFloat, operatorType: NSPredicateOperatorType):NSPredicate;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantqualifier/3857562-predicateforpresentationwidth
    predicateForPresentationWidth_operatorType(width: CGFloat, operatorType: NSPredicateOperatorType):NSPredicate;
    //
    alloc():AVAssetVariantQualifier;
    //
    init():AVAssetVariantQualifier;
  }
}

declare const AVAssetVariantQualifier: cocoascript.AVAssetVariantQualifier;
declare namespace cocoascript {
  /**
   * An object that provides information about the media sample at the cursor’s current position.
   * https://developer.apple.com/documentation/avfoundation/avsamplecursor
   */
  interface AVSampleCursor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1389152-stepbydecodetime
    stepByDecodeTime_wasPinned(deltaDecodeTime: CMTime, outWasPinned: boolean):CMTime;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1387680-stepbypresentationtime
    stepByPresentationTime_wasPinned(deltaPresentationTime: CMTime, outWasPinned: boolean):CMTime;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1389606-stepindecodeorderbycount
    stepInDecodeOrderByCount(stepCount: number):number;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1388834-stepinpresentationorderbycount
    stepInPresentationOrderByCount(stepCount: number):number;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1388412-decodetimestamp
    decodeTimeStamp(): CMTime;
    setDecodeTimeStamp(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1389740-presentationtimestamp
    presentationTimeStamp(): CMTime;
    setPresentationTimeStamp(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1387481-currentchunkinfo
    currentChunkInfo(): AVSampleCursorChunkInfo;
    setCurrentChunkInfo(value: AVSampleCursorChunkInfo): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1390385-currentchunkstoragerange
    currentChunkStorageRange(): AVSampleCursorStorageRange;
    setCurrentChunkStorageRange(value: AVSampleCursorStorageRange): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1388328-currentchunkstorageurl
    currentChunkStorageURL(): NSURL;
    setCurrentChunkStorageURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1390766-currentsampledependencyinfo
    currentSampleDependencyInfo(): AVSampleCursorDependencyInfo;
    setCurrentSampleDependencyInfo(value: AVSampleCursorDependencyInfo): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1389833-currentsampleduration
    currentSampleDuration(): CMTime;
    setCurrentSampleDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1387806-currentsampleindexinchunk
    currentSampleIndexInChunk(): number;
    setCurrentSampleIndexInChunk(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1386359-currentsamplestoragerange
    currentSampleStorageRange(): AVSampleCursorStorageRange;
    setCurrentSampleStorageRange(value: AVSampleCursorStorageRange): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1390776-currentsamplesyncinfo
    currentSampleSyncInfo(): AVSampleCursorSyncInfo;
    setCurrentSampleSyncInfo(value: AVSampleCursorSyncInfo): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1390703-copycurrentsampleformatdescripti
    copyCurrentSampleFormatDescription():CMFormatDescriptionRef;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/3131266-currentsampleaudiodependencyinfo
    currentSampleAudioDependencyInfo(): AVSampleCursorAudioDependencyInfo;
    setCurrentSampleAudioDependencyInfo(value: AVSampleCursorAudioDependencyInfo): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/3752983-currentsampledependencyattachmen
    currentSampleDependencyAttachments(): NSDictionary;
    setCurrentSampleDependencyAttachments(value: NSDictionary): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1386558-sampleswithearlierdecodetimestam
    samplesWithEarlierDecodeTimeStampsMayHaveLaterPresentationTimeStampsThanCursor(cursor: AVSampleCursor):boolean;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1390029-sampleswithlaterdecodetimestamps
    samplesWithLaterDecodeTimeStampsMayHaveEarlierPresentationTimeStampsThanCursor(cursor: AVSampleCursor):boolean;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1386446-samplesrequiredfordecoderrefresh
    samplesRequiredForDecoderRefresh(): NSInteger;
    setSamplesRequiredForDecoderRefresh(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplecursor/1390608-comparepositionindecodeorderwith
    comparePositionInDecodeOrderWithPositionOfCursor(cursor: AVSampleCursor):NSComparisonResult;
    //
    alloc():AVSampleCursor;
    //
    init():AVSampleCursor;
  }
}

declare const AVSampleCursor: cocoascript.AVSampleCursor;
declare namespace cocoascript {
  /**
   * An object that represents text to present over a time range.
   * https://developer.apple.com/documentation/avfoundation/avcaption
   */
  interface AVCaption extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752820-initwithtext
    initWithText_timeRange(text: string | cocoascript.NSString, timeRange: CMTimeRange):AVCaption;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752823-text
    text(): string | cocoascript.NSString;
    setText(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752827-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752821-region
    region(): AVCaptionRegion;
    setRegion(value: AVCaptionRegion): void;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752818-fontstyleatindex
    fontStyleAtIndex_range(index: NSInteger, outRange: NSRange):AVCaptionFontStyle;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752819-fontweightatindex
    fontWeightAtIndex_range(index: NSInteger, outRange: NSRange):AVCaptionFontWeight;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752817-decorationatindex
    decorationAtIndex_range(index: NSInteger, outRange: NSRange):AVCaptionDecoration;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752825-textcoloratindex
    textColorAtIndex_range(index: NSInteger, outRange: NSRange):CGColorRef;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752816-backgroundcoloratindex
    backgroundColorAtIndex_range(index: NSInteger, outRange: NSRange):CGColorRef;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752824-textalignment
    textAlignment(): AVCaptionTextAlignment;
    setTextAlignment(value: AVCaptionTextAlignment): void;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752815-animation
    animation(): AVCaptionAnimation;
    setAnimation(value: AVCaptionAnimation): void;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752822-rubyatindex
    rubyAtIndex_range(index: NSInteger, outRange: NSRange):AVCaptionRuby;
    // https://developer.apple.com/documentation/avfoundation/avcaption/3752826-textcombineatindex
    textCombineAtIndex_range(index: NSInteger, outRange: NSRange):AVCaptionTextCombine;
    //
    alloc():AVCaption;
    //
    init():AVCaption;
  }
}

declare const AVCaption: cocoascript.AVCaption;
declare namespace cocoascript {
  /**
   * An object that represents the region in which the system presents a caption.
   * https://developer.apple.com/documentation/avfoundation/avcaptionregion
   */
  interface AVCaptionRegion extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3857626-appleitttopregion
    appleITTTopRegion(): AVCaptionRegion;
    setAppleITTTopRegion(value: AVCaptionRegion): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3857623-appleittbottomregion
    appleITTBottomRegion(): AVCaptionRegion;
    setAppleITTBottomRegion(value: AVCaptionRegion): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3857624-appleittleftregion
    appleITTLeftRegion(): AVCaptionRegion;
    setAppleITTLeftRegion(value: AVCaptionRegion): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3857625-appleittrightregion
    appleITTRightRegion(): AVCaptionRegion;
    setAppleITTRightRegion(value: AVCaptionRegion): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3857629-subriptextbottomregion
    subRipTextBottomRegion(): AVCaptionRegion;
    setSubRipTextBottomRegion(value: AVCaptionRegion): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3752853-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3857627-origin
    origin(): AVCaptionPoint;
    setOrigin(value: AVCaptionPoint): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3857628-size
    size(): AVCaptionSize;
    setSize(value: AVCaptionSize): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3752850-displayalignment
    displayAlignment(): AVCaptionRegionDisplayAlignment;
    setDisplayAlignment(value: AVCaptionRegionDisplayAlignment): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3752855-scroll
    scroll(): AVCaptionRegionScroll;
    setScroll(value: AVCaptionRegionScroll): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionregion/3752857-writingmode
    writingMode(): AVCaptionRegionWritingMode;
    setWritingMode(value: AVCaptionRegionWritingMode): void;
    //
    alloc():AVCaptionRegion;
    //
    init():AVCaptionRegion;
  }
}

declare const AVCaptionRegion: cocoascript.AVCaptionRegion;
// https://developer.apple.com/documentation/avfoundation/3857618-avcaptiondimensionmake
declare const AVCaptionDimensionMake: cocoascript.AVCaptionUnitsType;
// https://developer.apple.com/documentation/avfoundation/3857622-avcaptionpointmake
declare const AVCaptionPointMake: cocoascript.AVCaptionDimension;
// https://developer.apple.com/documentation/avfoundation/3857633-avcaptionsizemake
declare const AVCaptionSizeMake: cocoascript.AVCaptionDimension;
declare namespace cocoascript {
  /**
   * An object that presents ruby characters.
   * https://developer.apple.com/documentation/avfoundation/avcaptionruby
   */
  interface AVCaptionRuby extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionruby/3752870-initwithtext
    initWithText(text: string | cocoascript.NSString):AVCaptionRuby;
    // https://developer.apple.com/documentation/avfoundation/avcaptionruby/3752871-initwithtext
    initWithText_position_alignment(text: string | cocoascript.NSString, position: AVCaptionRubyPosition, alignment: AVCaptionRubyAlignment):AVCaptionRuby;
    // https://developer.apple.com/documentation/avfoundation/avcaptionruby/3752873-text
    text(): string | cocoascript.NSString;
    setText(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionruby/3752872-position
    position(): AVCaptionRubyPosition;
    setPosition(value: AVCaptionRubyPosition): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionruby/3752869-alignment
    alignment(): AVCaptionRubyAlignment;
    setAlignment(value: AVCaptionRubyAlignment): void;
    //
    alloc():AVCaptionRuby;
    //
    init():AVCaptionRuby;
  }
}

declare const AVCaptionRuby: cocoascript.AVCaptionRuby;
declare namespace cocoascript {
  /**
   * An object that holds a time range and an associated state which indicates when the renderer draws output.
   * https://developer.apple.com/documentation/avfoundation/avcaptionrendererscene
   */
  interface AVCaptionRendererScene extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionrendererscene/3752975-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionrendererscene/3752973-hasactivecaptions
    hasActiveCaptions(): boolean;
    setHasActiveCaptions(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionrendererscene/3752974-needsperiodicrefresh
    needsPeriodicRefresh(): boolean;
    setNeedsPeriodicRefresh(value: boolean): void;
    //
    alloc():AVCaptionRendererScene;
    //
    init():AVCaptionRendererScene;
  }
}

declare const AVCaptionRendererScene: cocoascript.AVCaptionRendererScene;
declare namespace cocoascript {
  /**
   * An object that represents a format description and its replacement.
   * https://developer.apple.com/documentation/avfoundation/avcompositiontrackformatdescriptionreplacement
   */
  interface AVCompositionTrackFormatDescriptionReplacement extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcompositiontrackformatdescriptionreplacement/3180002-originalformatdescription
    originalFormatDescription(): CMFormatDescriptionRef;
    setOriginalFormatDescription(value: CMFormatDescriptionRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontrackformatdescriptionreplacement/3180003-replacementformatdescription
    replacementFormatDescription(): CMFormatDescriptionRef;
    setReplacementFormatDescription(value: CMFormatDescriptionRef): void;
    //
    alloc():AVCompositionTrackFormatDescriptionReplacement;
    //
    init():AVCompositionTrackFormatDescriptionReplacement;
  }
}

declare const AVCompositionTrackFormatDescriptionReplacement: cocoascript.AVCompositionTrackFormatDescriptionReplacement;
declare namespace cocoascript {
  /**
   * An asset that represents media at a local or remote URL.
   * https://developer.apple.com/documentation/avfoundation/avurlasset
   */
  interface AVURLAsset extends AVAsset {
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1385698-initwithurl
    initWithURL_options(URL: NSURL, options: AVURLAsset):AVURLAsset;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1508727-urlassetwithurl
    URLAssetWithURL_options(URL: NSURL, options: AVURLAsset):AVURLAsset;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1388127-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/3746535-findcompatibletrackforcompositio
    findCompatibleTrackForCompositionTrack_completionHandler(compositionTrack: AVCompositionTrack, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1386800-audiovisualtypes
    audiovisualTypes():AVFileType;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1390006-audiovisualmimetypes
    audiovisualMIMETypes():NSString;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1387142-isplayableextendedmimetype
    isPlayableExtendedMIMEType(extendedMIMEType: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1389118-resourceloader
    resourceLoader(): AVAssetResourceLoader;
    setResourceLoader(value: AVAssetResourceLoader): void;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/3746536-variants
    variants(): AVAssetVariant;
    setVariants(value: AVAssetVariant): void;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1389650-compatibletrackforcompositiontra
    compatibleTrackForCompositionTrack(compositionTrack: AVCompositionTrack):AVAssetTrack;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/2806807-mayrequirecontentkeysformediadat
    mayRequireContentKeysForMediaDataProcessing(): boolean;
    setMayRequireContentKeysForMediaDataProcessing(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avurlasset/1823714-assetcache
    assetCache(): AVAssetCache;
    setAssetCache(value: AVAssetCache): void;
    //
    alloc():AVURLAsset;
    //
    init():AVURLAsset;
  }
}

declare const AVURLAsset: cocoascript.AVURLAsset;
declare namespace cocoascript {
  /**
   * A protocol for loading the media and metadata of an asset or asset track without blocking the calling thread.
   * https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading
   */
  interface AVAsynchronousKeyValueLoading {
    // https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading/1387321-loadvaluesasynchronouslyforkeys
    loadValuesAsynchronouslyForKeys_completionHandler(keys: string | cocoascript.NSString, handler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading/1386816-statusofvalueforkey
    statusOfValueForKey_error(key: string | cocoascript.NSString, outError: NSError):AVKeyValueStatus;
  }
}
declare namespace cocoascript {
  /**
   * An asset with a duration that the system can extend without modifying its existing media data.
   * https://developer.apple.com/documentation/avfoundation/avfragmentedasset
   */
  interface AVFragmentedAsset extends AVURLAsset {
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/1508700-fragmentedassetwithurl
    fragmentedAssetWithURL_options(URL: NSURL, options: AVFragmentedAsset):AVFragmentedAsset;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/3746532-loadtrackwithtrackid
    loadTrackWithTrackID_completionHandler(trackID: CMPersistentTrackID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/3746534-loadtrackswithmediatype
    loadTracksWithMediaType_completionHandler(mediaType: AVMediaType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/3746533-loadtrackswithmediacharacteristi
    loadTracksWithMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/1387937-tracks
    tracks(): AVFragmentedAssetTrack;
    setTracks(value: AVFragmentedAssetTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/1385712-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVFragmentedAssetTrack;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/1387253-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVFragmentedAssetTrack;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedasset/1387259-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVFragmentedAssetTrack;
    //
    alloc():AVFragmentedAsset;
    //
    init():AVFragmentedAsset;
  }
}

declare const AVFragmentedAsset: cocoascript.AVFragmentedAsset;
declare namespace cocoascript {
  /**
   * An object that provides the track-level interface to inspect a fragmented asset’s media tracks.
   * https://developer.apple.com/documentation/avfoundation/avfragmentedassettrack
   */
  interface AVFragmentedAssetTrack extends AVAssetTrack {
    //
    alloc():AVFragmentedAssetTrack;
    //
    init():AVFragmentedAssetTrack;
  }
}

declare const AVFragmentedAssetTrack: cocoascript.AVFragmentedAssetTrack;
declare namespace cocoascript {
  /**
   * An object that periodically checks whether the system adds new fragments to a fragmented asset.
   * https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder
   */
  interface AVFragmentedAssetMinder extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/2966508-initwithasset
    initWithAsset_mindingInterval(asset: AVFragmentMinding, mindingInterval: NSTimeInterval):AVFragmentedAssetMinder;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/1387182-fragmentedassetminderwithasset
    fragmentedAssetMinderWithAsset_mindingInterval(asset: AVFragmentMinding, mindingInterval: NSTimeInterval):AVFragmentedAssetMinder;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/1390760-mindinginterval
    mindingInterval(): NSTimeInterval;
    setMindingInterval(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/1390319-assets
    assets(): AVFragmentMinding;
    setAssets(value: AVFragmentMinding): void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/1387483-addfragmentedasset
    addFragmentedAsset(asset: AVFragmentMinding):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedassetminder/1389856-removefragmentedasset
    removeFragmentedAsset(asset: AVFragmentMinding):void;
    //
    alloc():AVFragmentedAssetMinder;
    //
    init():AVFragmentedAssetMinder;
  }
}

declare const AVFragmentedAssetMinder: cocoascript.AVFragmentedAssetMinder;
declare namespace cocoascript {
  /**
   * A protocol that defines whether an asset supports fragment minding.
   * https://developer.apple.com/documentation/avfoundation/avfragmentminding
   */
  interface AVFragmentMinding {
    // https://developer.apple.com/documentation/avfoundation/avfragmentminding/1390175-associatedwithfragmentminder
    associatedWithFragmentMinder(): boolean;
    setAssociatedWithFragmentMinder(value: boolean): void;
  }
}
declare namespace cocoascript {
  /**
   * A mutable metadata item for an audiovisual asset or for one of its tracks.
   * https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem
   */
  interface AVMutableMetadataItem extends AVMetadataItem {
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1426379-metadataitem
    metadataItem():AVMutableMetadataItem;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1386688-identifier
    identifier(): AVMetadataIdentifier;
    setIdentifier(value: AVMetadataIdentifier): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1386776-key
    key(): NSCopying;
    setKey(value: NSCopying): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1385655-keyspace
    keySpace(): AVMetadataKeySpace;
    setKeySpace(value: AVMetadataKeySpace): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1388296-value
    value(): NSCopying;
    setValue(value: NSCopying): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1390397-extraattributes
    extraAttributes(): id;
    setExtraAttributes(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1389471-datatype
    dataType(): string | cocoascript.NSString;
    setDataType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1389990-time
    time(): CMTime;
    setTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1389966-startdate
    startDate(): NSDate;
    setStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1389980-duration
    duration(): CMTime;
    setDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1389292-locale
    locale(): NSLocale;
    setLocale(value: NSLocale): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem/1386664-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(value: string | cocoascript.NSString): void;
    //
    alloc():AVMutableMetadataItem;
    //
    init():AVMutableMetadataItem;
  }
}

declare const AVMutableMetadataItem: cocoascript.AVMutableMetadataItem;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmetadataformat
  type AVMetadataFormat = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that filters selected information from a metadata item.
   * https://developer.apple.com/documentation/avfoundation/avmetadataitemfilter
   */
  interface AVMetadataItemFilter extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadataitemfilter/1387905-metadataitemfilterforsharing
    metadataItemFilterForSharing():AVMetadataItemFilter;
    //
    alloc():AVMetadataItemFilter;
    //
    init():AVMetadataItemFilter;
  }
}

declare const AVMetadataItemFilter: cocoascript.AVMetadataItemFilter;
declare namespace cocoascript {
  /**
   * An object that transcodes the contents of an asset in a format that you specify using an export preset.
   * https://developer.apple.com/documentation/avfoundation/avassetexportsession
   */
  interface AVAssetExportSession extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1389367-initwithasset
    initWithAsset_presetName(asset: AVAsset, presetName: string | cocoascript.NSString):AVAssetExportSession;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1564246-exportsessionwithasset
    exportSessionWithAsset_presetName(asset: AVAsset, presetName: string | cocoascript.NSString):AVAssetExportSession;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1390467-presetname
    presetName(): string | cocoascript.NSString;
    setPresetName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1387150-allexportpresets
    allExportPresets():NSString;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1390567-exportpresetscompatiblewithasset
    exportPresetsCompatibleWithAsset(asset: AVAsset):NSString;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1385821-determinecompatibilityofexportpr
    determineCompatibilityOfExportPreset_withAsset_outputFileType_completionHandler(presetName: string | cocoascript.NSString, asset: AVAsset, outputFileType: AVFileType, handler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1387907-determinecompatiblefiletypeswith
    determineCompatibleFileTypesWithCompletionHandler(handler: AVFileType):void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1389970-outputurl
    outputURL(): NSURL;
    setOutputURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1387110-outputfiletype
    outputFileType(): AVFileType;
    setOutputFileType(value: AVFileType): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1388762-supportedfiletypes
    supportedFileTypes(): AVFileType;
    setSupportedFileTypes(value: AVFileType): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1388728-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1622333-filelengthlimit
    fileLengthLimit(): number;
    setFileLengthLimit(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1390593-shouldoptimizefornetworkuse
    shouldOptimizeForNetworkUse(): boolean;
    setShouldOptimizeForNetworkUse(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1388797-canperformmultiplepassesoversour
    canPerformMultiplePassesOverSourceMediaData(): boolean;
    setCanPerformMultiplePassesOverSourceMediaData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1388699-directoryfortemporaryfiles
    directoryForTemporaryFiles(): NSURL;
    setDirectoryForTemporaryFiles(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1390453-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1390226-metadataitemfilter
    metadataItemFilter(): AVMetadataItemFilter;
    setMetadataItemFilter(value: AVMetadataItemFilter): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1389477-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(value: AVVideoComposition): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1388288-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(value: AVVideoCompositing): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1388155-audiomix
    audioMix(): AVAudioMix;
    setAudioMix(value: AVAudioMix): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1385835-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(value: AVAudioTimePitchAlgorithm): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1388005-exportasynchronouslywithcompleti
    exportAsynchronouslyWithCompletionHandler(handler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1387794-cancelexport
    cancelExport():void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1390528-status
    status(): AVAssetExportSessionStatus;
    setStatus(value: AVAssetExportSessionStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1387530-progress
    progress(): number;
    setProgress(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1385936-error
    error(): NSError;
    setError(value: NSError): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/3042921-estimateoutputfilelengthwithcomp
    estimateOutputFileLengthWithCompletionHandler(handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1389181-estimatedoutputfilelength
    estimatedOutputFileLength(): number;
    setEstimatedOutputFileLength(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/3042920-estimatemaximumdurationwithcompl
    estimateMaximumDurationWithCompletionHandler(handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1622332-maxduration
    maxDuration(): CMTime;
    setMaxDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetexportsession/1385690-asset
    asset(): AVAsset;
    setAsset(value: AVAsset): void;
    //
    alloc():AVAssetExportSession;
    //
    init():AVAssetExportSession;
  }
}

declare const AVAssetExportSession: cocoascript.AVAssetExportSession;
declare namespace cocoascript {
  /**
   * An object that generates thumbnail or preview images of video assets.
   * https://developer.apple.com/documentation/avfoundation/avassetimagegenerator
   */
  interface AVAssetImageGenerator extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1387855-initwithasset
    initWithAsset(asset: AVAsset):AVAssetImageGenerator;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1426634-assetimagegeneratorwithasset
    assetImageGeneratorWithAsset(asset: AVAsset):AVAssetImageGenerator;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1390689-asset
    asset(): AVAsset;
    setAsset(value: AVAsset): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1387560-maximumsize
    maximumSize(): CGSize;
    setMaximumSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1390616-appliespreferredtracktransform
    appliesPreferredTrackTransform(): boolean;
    setAppliesPreferredTrackTransform(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1390571-requestedtimetolerancebefore
    requestedTimeToleranceBefore(): CMTime;
    setRequestedTimeToleranceBefore(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1387751-requestedtimetoleranceafter
    requestedTimeToleranceAfter(): CMTime;
    setRequestedTimeToleranceAfter(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1389314-aperturemode
    apertureMode(): AVAssetImageGeneratorApertureMode;
    setApertureMode(value: AVAssetImageGeneratorApertureMode): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1390189-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(value: AVVideoComposition): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1386469-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(value: AVVideoCompositing): void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1387303-copycgimageattime
    copyCGImageAtTime_actualTime_error(requestedTime: CMTime, actualTime: CMTime, outError: NSError):CGImageRef;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1388100-generatecgimagesasynchronouslyfo
    generateCGImagesAsynchronouslyForTimes_completionHandler(requestedTimes: NSValue, handler: AVAssetImageGeneratorCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/1385859-cancelallcgimagegeneration
    cancelAllCGImageGeneration():void;
    //
    alloc():AVAssetImageGenerator;
    //
    init():AVAssetImageGenerator;
  }
}

declare const AVAssetImageGenerator: cocoascript.AVAssetImageGenerator;
declare namespace cocoascript {
  /**
   * An object that mediates resource requests from a URL asset.
   * https://developer.apple.com/documentation/avfoundation/avassetresourceloader
   */
  interface AVAssetResourceLoader extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloader/1388314-setdelegate
    setDelegate_queue(delegate: AVAssetResourceLoaderDelegate, delegateQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloader/1387913-delegate
    delegate(): AVAssetResourceLoaderDelegate;
    setDelegate(value: AVAssetResourceLoaderDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloader/1387678-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(value: dispatch_queue_t): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloader/1386939-preloadseligiblecontentkeys
    preloadsEligibleContentKeys(): boolean;
    setPreloadsEligibleContentKeys(value: boolean): void;
    //
    alloc():AVAssetResourceLoader;
    //
    init():AVAssetResourceLoader;
  }
}

declare const AVAssetResourceLoader: cocoascript.AVAssetResourceLoader;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a resource request from a resource loader object.
   * https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest
   */
  interface AVAssetResourceLoadingRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1386220-request
    request(): NSURLRequest;
    setRequest(value: NSURLRequest): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/2966509-requestor
    requestor(): AVAssetResourceLoadingRequestor;
    setRequestor(value: AVAssetResourceLoadingRequestor): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1386116-streamingcontentkeyrequestdatafo
    streamingContentKeyRequestDataForApp_contentIdentifier_options_error(appIdentifier: NSData, contentIdentifier: NSData, options: AVAssetResourceLoadingRequest, outError: NSError):NSData;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1623676-persistentcontentkeyfromkeyvendo
    persistentContentKeyFromKeyVendorResponse_options_error(keyVendorResponse: NSData, options: AVAssetResourceLoadingRequest, outError: NSError):NSData;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1390340-contentinformationrequest
    contentInformationRequest(): AVAssetResourceLoadingContentInformationRequest;
    setContentInformationRequest(value: AVAssetResourceLoadingContentInformationRequest): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1388779-datarequest
    dataRequest(): AVAssetResourceLoadingDataRequest;
    setDataRequest(value: AVAssetResourceLoadingDataRequest): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1390854-redirect
    redirect(): NSURLRequest;
    setRedirect(value: NSURLRequest): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1389034-response
    response(): NSURLResponse;
    setResponse(value: NSURLResponse): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1623677-finishloadingwithresponse
    finishLoadingWithResponse_data_redirect(response: NSURLResponse, data: NSData, redirect: NSURLRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1388359-finishloading
    finishLoading():void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1389518-cancelled
    cancelled(): boolean;
    setCancelled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1390491-finishloadingwitherror
    finishLoadingWithError(error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/1389270-finished
    finished(): boolean;
    setFinished(value: boolean): void;
    //
    alloc():AVAssetResourceLoadingRequest;
    //
    init():AVAssetResourceLoadingRequest;
  }
}

declare const AVAssetResourceLoadingRequest: cocoascript.AVAssetResourceLoadingRequest;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a resource request from a resource loader to renew a previously issued request.
   * https://developer.apple.com/documentation/avfoundation/avassetresourcerenewalrequest
   */
  interface AVAssetResourceRenewalRequest extends AVAssetResourceLoadingRequest {
    //
    alloc():AVAssetResourceRenewalRequest;
    //
    init():AVAssetResourceRenewalRequest;
  }
}

declare const AVAssetResourceRenewalRequest: cocoascript.AVAssetResourceRenewalRequest;
declare namespace cocoascript {
  /**
   * An object that contains information about the originator of a resource-loading request.
   * https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequestor
   */
  interface AVAssetResourceLoadingRequestor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequestor/2966511-providesexpiredsessionreports
    providesExpiredSessionReports(): boolean;
    setProvidesExpiredSessionReports(value: boolean): void;
    //
    alloc():AVAssetResourceLoadingRequestor;
    //
    init():AVAssetResourceLoadingRequestor;
  }
}

declare const AVAssetResourceLoadingRequestor: cocoascript.AVAssetResourceLoadingRequestor;
declare namespace cocoascript {
  /**
   * An object for requesting data from a resource that an asset resource-loading request references.
   * https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest
   */
  interface AVAssetResourceLoadingDataRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/1390581-respondwithdata
    respondWithData(data: NSData):void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/1387720-requestedlength
    requestedLength(): NSInteger;
    setRequestedLength(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/1388428-requestedoffset
    requestedOffset(): number;
    setRequestedOffset(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/1385945-currentoffset
    currentOffset(): number;
    setCurrentOffset(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/1386864-requestsalldatatoendofresource
    requestsAllDataToEndOfResource(): boolean;
    setRequestsAllDataToEndOfResource(value: boolean): void;
    //
    alloc():AVAssetResourceLoadingDataRequest;
    //
    init():AVAssetResourceLoadingDataRequest;
  }
}

declare const AVAssetResourceLoadingDataRequest: cocoascript.AVAssetResourceLoadingDataRequest;
declare namespace cocoascript {
  /**
   * A query for retrieving essential information about a resource that an asset resource-loading request references.
   * https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest
   */
  interface AVAssetResourceLoadingContentInformationRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/2936886-allowedcontenttypes
    allowedContentTypes(): string | cocoascript.NSString;
    setAllowedContentTypes(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1388529-contenttype
    contentType(): string | cocoascript.NSString;
    setContentType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1389390-contentlength
    contentLength(): number;
    setContentLength(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1386054-byterangeaccesssupported
    byteRangeAccessSupported(): boolean;
    setByteRangeAccessSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1390683-renewaldate
    renewalDate(): NSDate;
    setRenewalDate(value: NSDate): void;
    //
    alloc():AVAssetResourceLoadingContentInformationRequest;
    //
    init():AVAssetResourceLoadingContentInformationRequest;
  }
}

declare const AVAssetResourceLoadingContentInformationRequest: cocoascript.AVAssetResourceLoadingContentInformationRequest;
declare namespace cocoascript {
  interface AVSampleCursorSyncInfo {
  }
}
declare namespace cocoascript {
  interface AVSampleCursorDependencyInfo {
  }
}
declare namespace cocoascript {
  interface AVSampleCursorAudioDependencyInfo {
  }
}
declare namespace cocoascript {
  interface AVSampleCursorStorageRange {
  }
}
declare namespace cocoascript {
  interface AVSampleCursorChunkInfo {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmediatype
  type AVMediaType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmediacharacteristic
  type AVMediaCharacteristic = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avfiletype
  type AVFileType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avfiletypeprofile
  type AVFileTypeProfile = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that builds audio and video output settings dictionaries.
   * https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant
   */
  interface AVOutputSettingsAssistant extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1387909-outputsettingsassistantwithprese
    outputSettingsAssistantWithPreset(presetIdentifier: AVOutputSettingsPreset):AVOutputSettingsAssistant;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1388118-availableoutputsettingspresets
    availableOutputSettingsPresets():AVOutputSettingsPreset;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1390842-outputfiletype
    outputFileType(): AVFileType;
    setOutputFileType(value: AVFileType): void;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1386233-audiosettings
    audioSettings(): id;
    setAudioSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1390673-sourceaudioformat
    sourceAudioFormat(): CMAudioFormatDescriptionRef;
    setSourceAudioFormat(value: CMAudioFormatDescriptionRef): void;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1386880-videosettings
    videoSettings(): id;
    setVideoSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1387885-sourcevideoformat
    sourceVideoFormat(): CMVideoFormatDescriptionRef;
    setSourceVideoFormat(value: CMVideoFormatDescriptionRef): void;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1386812-sourcevideominframeduration
    sourceVideoMinFrameDuration(): CMTime;
    setSourceVideoMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avoutputsettingsassistant/1387414-sourcevideoaverageframeduration
    sourceVideoAverageFrameDuration(): CMTime;
    setSourceVideoAverageFrameDuration(value: CMTime): void;
    //
    alloc():AVOutputSettingsAssistant;
    //
    init():AVOutputSettingsAssistant;
  }
}

declare const AVOutputSettingsAssistant: cocoascript.AVOutputSettingsAssistant;
declare namespace cocoascript {
  /**
   * An object that provides the interface to control the player’s transport behavior.
   * https://developer.apple.com/documentation/avfoundation/avplayer
   */
  interface AVPlayer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayer/1385706-initwithurl
    initWithURL(URL: NSURL):AVPlayer;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1538409-playerwithurl
    playerWithURL(URL: NSURL):AVPlayer;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387104-initwithplayeritem
    initWithPlayerItem(item: AVPlayerItem):AVPlayer;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1538390-playerwithplayeritem
    playerWithPlayerItem(item: AVPlayerItem):AVPlayer;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1388096-status
    status(): AVPlayerStatus;
    setStatus(value: AVPlayerStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387764-error
    error(): NSError;
    setError(value: NSError): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387569-currentitem
    currentItem(): AVPlayerItem;
    setCurrentItem(value: AVPlayerItem): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1390806-replacecurrentitemwithplayeritem
    replaceCurrentItemWithPlayerItem(item: AVPlayerItem):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1386726-play
    play():void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387895-pause
    pause():void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1388846-rate
    rate(): number;
    setRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/3750305-playbackcoordinator
    playbackCoordinator(): AVPlayerPlaybackCoordinator;
    setPlaybackCoordinator(value: AVPlayerPlaybackCoordinator): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1385953-seektotime
    seekToTime(time: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387018-seektotime
    seekToTime_completionHandler(time: CMTime, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387741-seektotime
    seekToTime_toleranceBefore_toleranceAfter(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1388493-seektotime
    seekToTime_toleranceBefore_toleranceAfter_completionHandler(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1386114-seektodate
    seekToDate(date: NSDate):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1386108-seektodate
    seekToDate_completionHandler(date: NSDate, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1390404-currenttime
    currentTime():CMTime;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1385829-addperiodictimeobserverforinterv
    addPeriodicTimeObserverForInterval_queue_usingBlock(interval: CMTime, queue: dispatch_queue_t, block: CMTime):AVPlayer;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1388027-addboundarytimeobserverfortimes
    addBoundaryTimeObserverForTimes_queue_usingBlock(times: NSValue, queue: dispatch_queue_t, block: void):AVPlayer;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387552-removetimeobserver
    removeTimeObserver(observer: AVPlayer):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/3787548-audiovisualbackgroundplaybackpol
    audiovisualBackgroundPlaybackPolicy(): AVPlayerAudiovisualBackgroundPlaybackPolicy;
    setAudiovisualBackgroundPlaybackPolicy(value: AVPlayerAudiovisualBackgroundPlaybackPolicy): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1643482-automaticallywaitstominimizestal
    automaticallyWaitsToMinimizeStalling(): boolean;
    setAutomaticallyWaitsToMinimizeStalling(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1643486-reasonforwaitingtoplay
    reasonForWaitingToPlay(): AVPlayerWaitingReason;
    setReasonForWaitingToPlay(value: AVPlayerWaitingReason): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1643485-timecontrolstatus
    timeControlStatus(): AVPlayerTimeControlStatus;
    setTimeControlStatus(value: AVPlayerTimeControlStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1643480-playimmediatelyatrate
    playImmediatelyAtRate(rate: number):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3601108-allowedaudiospatializationformat
    allowedAudioSpatializationFormats(): AVAudioSpatializationFormats;
    setAllowedAudioSpatializationFormats(value: AVAudioSpatializationFormats): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritem/3237174-audiospatializationallowed
    audioSpatializationAllowed(): boolean;
    setAudioSpatializationAllowed(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387441-allowsexternalplayback
    allowsExternalPlayback(): boolean;
    setAllowsExternalPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1388982-externalplaybackactive
    externalPlaybackActive(): boolean;
    setExternalPlaybackActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1624255-usesexternalplaybackwhileexterna
    usesExternalPlaybackWhileExternalScreenIsActive(): boolean;
    setUsesExternalPlaybackWhileExternalScreenIsActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1624251-externalplaybackvideogravity
    externalPlaybackVideoGravity(): AVLayerVideoGravity;
    setExternalPlaybackVideoGravity(value: AVLayerVideoGravity): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/3365978-eligibleforhdrplayback
    eligibleForHDRPlayback(): boolean;
    setEligibleForHDRPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/2936889-availablehdrmodes
    availableHDRModes(): AVPlayerHDRMode;
    setAvailableHDRModes(value: AVPlayerHDRMode): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387376-actionatitemend
    actionAtItemEnd(): AVPlayerActionAtItemEnd;
    setActionAtItemEnd(value: AVPlayerActionAtItemEnd): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387178-appliesmediaselectioncriteriaaut
    appliesMediaSelectionCriteriaAutomatically(): boolean;
    setAppliesMediaSelectionCriteriaAutomatically(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387825-mediaselectioncriteriaformediach
    mediaSelectionCriteriaForMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVPlayerMediaSelectionCriteria;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1390563-setmediaselectioncriteria
    setMediaSelectionCriteria_forMediaCharacteristic(criteria: AVPlayerMediaSelectionCriteria, mediaCharacteristic: AVMediaCharacteristic):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1390127-volume
    volume(): number;
    setVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387544-muted
    muted(): boolean;
    setMuted(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/2990522-preventsdisplaysleepduringvideop
    preventsDisplaySleepDuringVideoPlayback(): boolean;
    setPreventsDisplaySleepDuringVideoPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1624254-outputobscuredduetoinsufficiente
    outputObscuredDueToInsufficientExternalProtection(): boolean;
    setOutputObscuredDueToInsufficientExternalProtection(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1386591-setrate
    setRate_time_atHostTime(rate: number, itemTime: CMTime, hostClockTime: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1389712-prerollatrate
    prerollAtRate_completionHandler(rate: number, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1388260-cancelpendingprerolls
    cancelPendingPrerolls():void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/3746583-sourceclock
    sourceClock(): CMClockRef;
    setSourceClock(value: CMClockRef): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1387066-masterclock
    masterClock(): CMClockRef;
    setMasterClock(value: CMClockRef): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1390717-audiooutputdeviceuniqueid
    audioOutputDeviceUniqueID(): string | cocoascript.NSString;
    setAudioOutputDeviceUniqueID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/2942616-preferredvideodecodergpuregistry
    preferredVideoDecoderGPURegistryID(): number;
    setPreferredVideoDecoderGPURegistryID(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1386458-closedcaptiondisplayenabled
    closedCaptionDisplayEnabled(): boolean;
    setClosedCaptionDisplayEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1624258-allowsairplayvideo
    allowsAirPlayVideo(): boolean;
    setAllowsAirPlayVideo(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1624259-airplayvideoactive
    airPlayVideoActive(): boolean;
    setAirPlayVideoActive(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayer/1624256-usesairplayvideowhileairplayscre
    usesAirPlayVideoWhileAirPlayScreenIsActive(): boolean;
    setUsesAirPlayVideoWhileAirPlayScreenIsActive(value: boolean): void;
    //
    alloc():AVPlayer;
    //
    init():AVPlayer;
  }
}

declare const AVPlayer: cocoascript.AVPlayer;
declare namespace cocoascript {
  /**
   * An object that plays a sequence of player items.
   * https://developer.apple.com/documentation/avfoundation/avqueueplayer
   */
  interface AVQueuePlayer extends AVPlayer {
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1389345-initwithitems
    initWithItems(items: AVPlayerItem):AVQueuePlayer;
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1538384-queueplayerwithitems
    queuePlayerWithItems(items: AVPlayerItem):AVQueuePlayer;
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1390539-items
    items():AVPlayerItem;
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1389318-advancetonextitem
    advanceToNextItem():void;
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1387289-caninsertitem
    canInsertItem_afterItem(item: AVPlayerItem, afterItem: AVPlayerItem):boolean;
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1388543-insertitem
    insertItem_afterItem(item: AVPlayerItem, afterItem: AVPlayerItem):void;
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1387400-removeitem
    removeItem(item: AVPlayerItem):void;
    // https://developer.apple.com/documentation/avfoundation/avqueueplayer/1385788-removeallitems
    removeAllItems():void;
    //
    alloc():AVQueuePlayer;
    //
    init():AVQueuePlayer;
  }
}

declare const AVQueuePlayer: cocoascript.AVQueuePlayer;
declare namespace cocoascript {
  /**
   * An object that loops media content using a queue player.
   * https://developer.apple.com/documentation/avfoundation/avplayerlooper
   */
  interface AVPlayerLooper extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/1643626-initwithplayer
    initWithPlayer_templateItem_timeRange(player: AVQueuePlayer, itemToLoop: AVPlayerItem, loopRange: CMTimeRange):AVPlayerLooper;
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/1645034-playerlooperwithplayer
    playerLooperWithPlayer_templateItem_timeRange(player: AVQueuePlayer, itemToLoop: AVPlayerItem, loopRange: CMTimeRange):AVPlayerLooper;
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/1643625-playerlooperwithplayer
    playerLooperWithPlayer_templateItem(player: AVQueuePlayer, itemToLoop: AVPlayerItem):AVPlayerLooper;
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/1643631-loopingplayeritems
    loopingPlayerItems(): AVPlayerItem;
    setLoopingPlayerItems(value: AVPlayerItem): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/1643629-disablelooping
    disableLooping():void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/1643648-loopcount
    loopCount(): NSInteger;
    setLoopCount(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/2177060-status
    status(): AVPlayerLooperStatus;
    setStatus(value: AVPlayerLooperStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlooper/2177064-error
    error(): NSError;
    setError(value: NSError): void;
    //
    alloc():AVPlayerLooper;
    //
    init():AVPlayerLooper;
  }
}

declare const AVPlayerLooper: cocoascript.AVPlayerLooper;
declare namespace cocoascript {
  /**
   * An abstract class that defines the common interface to output media data from a player item.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemoutput
   */
  interface AVPlayerItemOutput extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/1386538-itemtimeforhosttime
    itemTimeForHostTime(hostTimeInSeconds: CFTimeInterval):CMTime;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/1386962-itemtimeformachabsolutetime
    itemTimeForMachAbsoluteTime(machAbsoluteTime: number):CMTime;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/1388333-itemtimeforcvtimestamp
    itemTimeForCVTimeStamp(timestamp: CVTimeStamp):CMTime;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/1386133-suppressesplayerrendering
    suppressesPlayerRendering(): boolean;
    setSuppressesPlayerRendering(value: boolean): void;
    //
    alloc():AVPlayerItemOutput;
    //
    init():AVPlayerItemOutput;
  }
}

declare const AVPlayerItemOutput: cocoascript.AVPlayerItemOutput;
declare namespace cocoascript {
  /**
   * An object that outputs video frames from a player item.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput
   */
  interface AVPlayerItemVideoOutput extends AVPlayerItemOutput {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1389231-initwithpixelbufferattributes
    initWithPixelBufferAttributes(pixelBufferAttributes: AVPlayerItemVideoOutput):AVPlayerItemVideoOutput;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1643270-initwithoutputsettings
    initWithOutputSettings(outputSettings: AVPlayerItemVideoOutput):AVPlayerItemVideoOutput;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1386824-setdelegate
    setDelegate_queue(delegate: AVPlayerItemOutputPullDelegate, delegateQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1385827-delegate
    delegate(): AVPlayerItemOutputPullDelegate;
    setDelegate(value: AVPlayerItemOutputPullDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1388108-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(value: dispatch_queue_t): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1386046-requestnotificationofmediadatach
    requestNotificationOfMediaDataChangeWithAdvanceInterval(interval: NSTimeInterval):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1386444-hasnewpixelbufferforitemtime
    hasNewPixelBufferForItemTime(itemTime: CMTime):boolean;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/1386148-copypixelbufferforitemtime
    copyPixelBufferForItemTime_itemTimeForDisplay(itemTime: CMTime, outItemTimeForDisplay: CMTime):CVPixelBufferRef;
    //
    alloc():AVPlayerItemVideoOutput;
    //
    init():AVPlayerItemVideoOutput;
  }
}

declare const AVPlayerItemVideoOutput: cocoascript.AVPlayerItemVideoOutput;
declare namespace cocoascript {
  /**
   * An object that vends attributed strings for media with a legible characteristic.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput
   */
  interface AVPlayerItemLegibleOutput extends AVPlayerItemOutput {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/1390500-initwithmediasubtypesfornativere
    initWithMediaSubtypesForNativeRepresentation(subtypes: NSNumber):AVPlayerItemLegibleOutput;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/1385803-textstylingresolution
    textStylingResolution(): AVPlayerItemLegibleOutputTextStylingResolution;
    setTextStylingResolution(value: AVPlayerItemLegibleOutputTextStylingResolution): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/1387877-delegate
    delegate(): AVPlayerItemLegibleOutputPushDelegate;
    setDelegate(value: AVPlayerItemLegibleOutputPushDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/1386204-setdelegate
    setDelegate_queue(delegate: AVPlayerItemLegibleOutputPushDelegate, delegateQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/1388098-advanceintervalfordelegateinvoca
    advanceIntervalForDelegateInvocation(): NSTimeInterval;
    setAdvanceIntervalForDelegateInvocation(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/1386275-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(value: dispatch_queue_t): void;
    //
    alloc():AVPlayerItemLegibleOutput;
    //
    init():AVPlayerItemLegibleOutput;
  }
}

declare const AVPlayerItemLegibleOutput: cocoascript.AVPlayerItemLegibleOutput;
declare namespace cocoascript {
  /**
   * An object that vends collections of metadata items that a player item’s tracks carry.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput
   */
  interface AVPlayerItemMetadataOutput extends AVPlayerItemOutput {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/1390205-initwithidentifiers
    initWithIdentifiers(identifiers: string | cocoascript.NSString):AVPlayerItemMetadataOutput;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/1387372-advanceintervalfordelegateinvoca
    advanceIntervalForDelegateInvocation(): NSTimeInterval;
    setAdvanceIntervalForDelegateInvocation(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/1387200-delegate
    delegate(): AVPlayerItemMetadataOutputPushDelegate;
    setDelegate(value: AVPlayerItemMetadataOutputPushDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/1387265-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(value: dispatch_queue_t): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutput/1385728-setdelegate
    setDelegate_queue(delegate: AVPlayerItemMetadataOutputPushDelegate, delegateQueue: dispatch_queue_t):void;
    //
    alloc():AVPlayerItemMetadataOutput;
    //
    init():AVPlayerItemMetadataOutput;
  }
}

declare const AVPlayerItemMetadataOutput: cocoascript.AVPlayerItemMetadataOutput;
declare namespace cocoascript {
  /**
   * An object that presents the visual contents of a player object.
   * https://developer.apple.com/documentation/avfoundation/avplayerlayer
   */
  interface AVPlayerLayer extends CALayer {
    // https://developer.apple.com/documentation/avfoundation/avplayerlayer/1389308-playerlayerwithplayer
    playerLayerWithPlayer(player: AVPlayer):AVPlayerLayer;
    // https://developer.apple.com/documentation/avfoundation/avplayerlayer/1385745-videorect
    videoRect(): CGRect;
    setVideoRect(value: CGRect): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlayer/1388915-videogravity
    videoGravity(): AVLayerVideoGravity;
    setVideoGravity(value: AVLayerVideoGravity): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlayer/1389748-readyfordisplay
    readyForDisplay(): boolean;
    setReadyForDisplay(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlayer/1390434-player
    player(): AVPlayer;
    setPlayer(value: AVPlayer): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerlayer/1390055-pixelbufferattributes
    pixelBufferAttributes(): id;
    setPixelBufferAttributes(value: id): void;
    //
    alloc():AVPlayerLayer;
    //
    init():AVPlayerLayer;
  }
}

declare const AVPlayerLayer: cocoascript.AVPlayerLayer;
declare namespace cocoascript {
  /**
   * A Core Animation layer that derives its timing from a player item so that you can synchronize layer animations with media playback.
   * https://developer.apple.com/documentation/avfoundation/avsynchronizedlayer
   */
  interface AVSynchronizedLayer extends CALayer {
    // https://developer.apple.com/documentation/avfoundation/avsynchronizedlayer/1388781-synchronizedlayerwithplayeritem
    synchronizedLayerWithPlayerItem(playerItem: AVPlayerItem):AVSynchronizedLayer;
    // https://developer.apple.com/documentation/avfoundation/avsynchronizedlayer/1385679-playeritem
    playerItem(): AVPlayerItem;
    setPlayerItem(value: AVPlayerItem): void;
    //
    alloc():AVSynchronizedLayer;
    //
    init():AVSynchronizedLayer;
  }
}

declare const AVSynchronizedLayer: cocoascript.AVSynchronizedLayer;
declare namespace cocoascript {
  /**
   * An object that coordinates the playback of players in a connected group.
   * https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator
   */
  interface AVPlaybackCoordinator extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750287-participantlimitforwaitingoutsus
    participantLimitForWaitingOutSuspensionsWithReason(reason: AVCoordinatedPlaybackSuspensionReason):NSInteger;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750289-setparticipantlimit
    setParticipantLimit_forWaitingOutSuspensionsWithReason(participantLimit: NSInteger, reason: AVCoordinatedPlaybackSuspensionReason):void;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750291-suspensionreasonsthattriggerwait
    suspensionReasonsThatTriggerWaiting(): AVCoordinatedPlaybackSuspensionReason;
    setSuspensionReasonsThatTriggerWaiting(value: AVCoordinatedPlaybackSuspensionReason): void;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750288-pausesnapstomediatimeoforiginato
    pauseSnapsToMediaTimeOfOriginator(): boolean;
    setPauseSnapsToMediaTimeOfOriginator(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750284-beginsuspensionforreason
    beginSuspensionForReason(suspensionReason: AVCoordinatedPlaybackSuspensionReason):AVCoordinatedPlaybackSuspension;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750285-expecteditemtimeathosttime
    expectedItemTimeAtHostTime(hostClockTime: CMTime):CMTime;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750290-suspensionreasons
    suspensionReasons(): AVCoordinatedPlaybackSuspensionReason;
    setSuspensionReasons(value: AVCoordinatedPlaybackSuspensionReason): void;
    // https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/3750286-otherparticipants
    otherParticipants(): AVCoordinatedPlaybackParticipant;
    setOtherParticipants(value: AVCoordinatedPlaybackParticipant): void;
    //
    alloc():AVPlaybackCoordinator;
    //
    init():AVPlaybackCoordinator;
  }
}

declare const AVPlaybackCoordinator: cocoascript.AVPlaybackCoordinator;
declare namespace cocoascript {
  /**
   * A playback coordinator subclass that coordinates the playback of player objects in a connected group.
   * https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinator
   */
  interface AVPlayerPlaybackCoordinator extends AVPlaybackCoordinator {
    // https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinator/3750302-player
    player(): AVPlayer;
    setPlayer(value: AVPlayer): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinator/3750301-delegate
    delegate(): AVPlayerPlaybackCoordinatorDelegate;
    setDelegate(value: AVPlayerPlaybackCoordinatorDelegate): void;
    //
    alloc():AVPlayerPlaybackCoordinator;
    //
    init():AVPlayerPlaybackCoordinator;
  }
}

declare const AVPlayerPlaybackCoordinator: cocoascript.AVPlayerPlaybackCoordinator;
declare namespace cocoascript {
  /**
   * A playback coordinator subclass that coordinates the playback of custom player objects in a connected group.
   * https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator
   */
  interface AVDelegatingPlaybackCoordinator extends AVPlaybackCoordinator {
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/3750256-initwithplaybackcontroldelegate
    initWithPlaybackControlDelegate(playbackControlDelegate: AVPlaybackCoordinatorPlaybackControlDelegate):AVDelegatingPlaybackCoordinator;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/3750252-currentitemidentifier
    currentItemIdentifier(): string | cocoascript.NSString;
    setCurrentItemIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/3750257-playbackcontroldelegate
    playbackControlDelegate(): AVPlaybackCoordinatorPlaybackControlDelegate;
    setPlaybackControlDelegate(value: AVPlaybackCoordinatorPlaybackControlDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/3750250-coordinateratechangetorate
    coordinateRateChangeToRate_options(rate: number, options: AVDelegatingPlaybackCoordinatorRateChangeOptions):void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/3750251-coordinateseektotime
    coordinateSeekToTime_options(time: CMTime, options: AVDelegatingPlaybackCoordinatorSeekOptions):void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/3750259-transitiontoitemwithidentifier
    transitionToItemWithIdentifier_proposingInitialTimingBasedOnTimebase(itemIdentifier: string | cocoascript.NSString, snapshotTimebase: CMTimebaseRef):void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/3750258-reapplycurrentitemstatetoplaybac
    reapplyCurrentItemStateToPlaybackControlDelegate():void;
    //
    alloc():AVDelegatingPlaybackCoordinator;
    //
    init():AVDelegatingPlaybackCoordinator;
  }
}

declare const AVDelegatingPlaybackCoordinator: cocoascript.AVDelegatingPlaybackCoordinator;
declare namespace cocoascript {
  /**
   * An object that provides instructions for how a player presents interstitial content.
   * https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent
   */
  interface AVPlayerInterstitialEvent extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3820993-interstitialeventwithprimaryitem
    interstitialEventWithPrimaryItem_identifier_time_templateItems_restrictions_resumptionOffset_playoutLimit_userDefinedAttributes(primaryItem: AVPlayerItem, identifier: string | cocoascript.NSString, time: CMTime, templateItems: AVPlayerItem, restrictions: AVPlayerInterstitialEventRestrictions, resumptionOffset: CMTime, playoutLimit: CMTime, userDefinedAttributes: NSDictionary):AVPlayerInterstitialEvent;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3820992-interstitialeventwithprimaryitem
    interstitialEventWithPrimaryItem_identifier_date_templateItems_restrictions_resumptionOffset_playoutLimit_userDefinedAttributes(primaryItem: AVPlayerItem, identifier: string | cocoascript.NSString, date: NSDate, templateItems: AVPlayerItem, restrictions: AVPlayerInterstitialEventRestrictions, resumptionOffset: CMTime, playoutLimit: CMTime, userDefinedAttributes: NSDictionary):AVPlayerInterstitialEvent;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3746585-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3820994-userdefinedattributes
    userDefinedAttributes(): NSDictionary;
    setUserDefinedAttributes(value: NSDictionary): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3726118-primaryitem
    primaryItem(): AVPlayerItem;
    setPrimaryItem(value: AVPlayerItem): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3726121-templateitems
    templateItems(): AVPlayerItem;
    setTemplateItems(value: AVPlayerItem): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3726112-date
    date(): NSDate;
    setDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3726122-time
    time(): CMTime;
    setTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3726120-resumptionoffset
    resumptionOffset(): CMTime;
    setResumptionOffset(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3746588-playoutlimit
    playoutLimit(): CMTime;
    setPlayoutLimit(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/3726119-restrictions
    restrictions(): AVPlayerInterstitialEventRestrictions;
    setRestrictions(value: AVPlayerInterstitialEventRestrictions): void;
    //
    alloc():AVPlayerInterstitialEvent;
    //
    init():AVPlayerInterstitialEvent;
  }
}

declare const AVPlayerInterstitialEvent: cocoascript.AVPlayerInterstitialEvent;
declare namespace cocoascript {
  /**
   * An object that schedules interstitial events for items played by the primary player.
   * https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller
   */
  interface AVPlayerInterstitialEventController extends AVPlayerInterstitialEventMonitor {
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/3726126-initwithprimaryplayer
    initWithPrimaryPlayer(primaryPlayer: AVPlayer):AVPlayerInterstitialEventController;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/3726127-interstitialeventcontrollerwithp
    interstitialEventControllerWithPrimaryPlayer(primaryPlayer: AVPlayer):AVPlayerInterstitialEventController;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/3726125-events
    events(): AVPlayerInterstitialEvent;
    setEvents(value: AVPlayerInterstitialEvent): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventcontroller/3726124-cancelcurrenteventwithresumption
    cancelCurrentEventWithResumptionOffset(resumptionOffset: CMTime):void;
    //
    alloc():AVPlayerInterstitialEventController;
    //
    init():AVPlayerInterstitialEventController;
  }
}

declare const AVPlayerInterstitialEventController: cocoascript.AVPlayerInterstitialEventController;
declare namespace cocoascript {
  /**
   * An object that monitors the scheduling and progress of interstitial events.
   * https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor
   */
  interface AVPlayerInterstitialEventMonitor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/3800565-initwithprimaryplayer
    initWithPrimaryPlayer(primaryPlayer: AVPlayer):AVPlayerInterstitialEventMonitor;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/3800566-interstitialeventmonitorwithprim
    interstitialEventMonitorWithPrimaryPlayer(primaryPlayer: AVPlayer):AVPlayerInterstitialEventMonitor;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/3800563-currentevent
    currentEvent(): AVPlayerInterstitialEvent;
    setCurrentEvent(value: AVPlayerInterstitialEvent): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/3800564-events
    events(): AVPlayerInterstitialEvent;
    setEvents(value: AVPlayerInterstitialEvent): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/3800568-primaryplayer
    primaryPlayer(): AVPlayer;
    setPrimaryPlayer(value: AVPlayer): void;
    // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/3800567-interstitialplayer
    interstitialPlayer(): AVQueuePlayer;
    setInterstitialPlayer(value: AVQueuePlayer): void;
    //
    alloc():AVPlayerInterstitialEventMonitor;
    //
    init():AVPlayerInterstitialEventMonitor;
  }
}

declare const AVPlayerInterstitialEventMonitor: cocoascript.AVPlayerInterstitialEventMonitor;
declare namespace cocoascript {
  /**
   * A mutable object that represents a complete rendition of media selection options on an asset.
   * https://developer.apple.com/documentation/avfoundation/avmutablemediaselection
   */
  interface AVMutableMediaSelection extends AVMediaSelection {
    // https://developer.apple.com/documentation/avfoundation/avmutablemediaselection/1386768-selectmediaoption
    selectMediaOption_inMediaSelectionGroup(mediaSelectionOption: AVMediaSelectionOption, mediaSelectionGroup: AVMediaSelectionGroup):void;
    //
    alloc():AVMutableMediaSelection;
    //
    init():AVMutableMediaSelection;
  }
}

declare const AVMutableMediaSelection: cocoascript.AVMutableMediaSelection;
declare namespace cocoascript {
  /**
   * An object that specifies the preferred languages and media characteristics for a player.
   * https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria
   */
  interface AVPlayerMediaSelectionCriteria extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/1387627-initwithpreferredlanguages
    initWithPreferredLanguages_preferredMediaCharacteristics(preferredLanguages: string | cocoascript.NSString, preferredMediaCharacteristics: AVMediaCharacteristic):AVPlayerMediaSelectionCriteria;
    // https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/3042657-initwithprincipalmediacharacteri
    initWithPrincipalMediaCharacteristics_preferredLanguages_preferredMediaCharacteristics(principalMediaCharacteristics: AVMediaCharacteristic, preferredLanguages: string | cocoascript.NSString, preferredMediaCharacteristics: AVMediaCharacteristic):AVPlayerMediaSelectionCriteria;
    // https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/1388559-preferredlanguages
    preferredLanguages(): string | cocoascript.NSString;
    setPreferredLanguages(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/1385734-preferredmediacharacteristics
    preferredMediaCharacteristics(): AVMediaCharacteristic;
    setPreferredMediaCharacteristics(value: AVMediaCharacteristic): void;
    // https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/3042658-principalmediacharacteristics
    principalMediaCharacteristics(): AVMediaCharacteristic;
    setPrincipalMediaCharacteristics(value: AVMediaCharacteristic): void;
    //
    alloc():AVPlayerMediaSelectionCriteria;
    //
    init():AVPlayerMediaSelectionCriteria;
  }
}

declare const AVPlayerMediaSelectionCriteria: cocoascript.AVPlayerMediaSelectionCriteria;
declare namespace cocoascript {
  /**
   * A collection of metadata items associated with a timeline segment.
   * https://developer.apple.com/documentation/avfoundation/avmetadatagroup
   */
  interface AVMetadataGroup extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadatagroup/1389935-items
    items(): AVMetadataItem;
    setItems(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatagroup/1620088-uniqueid
    uniqueID(): string | cocoascript.NSString;
    setUniqueID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmetadatagroup/1620087-classifyinglabel
    classifyingLabel(): string | cocoascript.NSString;
    setClassifyingLabel(value: string | cocoascript.NSString): void;
    //
    alloc():AVMetadataGroup;
    //
    init():AVMetadataGroup;
  }
}

declare const AVMetadataGroup: cocoascript.AVMetadataGroup;
declare namespace cocoascript {
  /**
   * A mutable collection of metadata items that are valid for use during a specific time range.
   * https://developer.apple.com/documentation/avfoundation/avmutabletimedmetadatagroup
   */
  interface AVMutableTimedMetadataGroup extends AVTimedMetadataGroup {
    // https://developer.apple.com/documentation/avfoundation/avmutabletimedmetadatagroup/1386481-items
    items(): AVMetadataItem;
    setItems(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avmutabletimedmetadatagroup/1387595-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    //
    alloc():AVMutableTimedMetadataGroup;
    //
    init():AVMutableTimedMetadataGroup;
  }
}

declare const AVMutableTimedMetadataGroup: cocoascript.AVMutableTimedMetadataGroup;
declare namespace cocoascript {
  /**
   * A mutable collection of metadata items that are valid for use within a specific range of dates.
   * https://developer.apple.com/documentation/avfoundation/avmutabledaterangemetadatagroup
   */
  interface AVMutableDateRangeMetadataGroup extends AVDateRangeMetadataGroup {
    // https://developer.apple.com/documentation/avfoundation/avmutabledaterangemetadatagroup/1388262-items
    items(): AVMetadataItem;
    setItems(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avmutabledaterangemetadatagroup/1390555-startdate
    startDate(): NSDate;
    setStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avmutabledaterangemetadatagroup/1387651-enddate
    endDate(): NSDate;
    setEndDate(value: NSDate): void;
    //
    alloc():AVMutableDateRangeMetadataGroup;
    //
    init():AVMutableDateRangeMetadataGroup;
  }
}

declare const AVMutableDateRangeMetadataGroup: cocoascript.AVMutableDateRangeMetadataGroup;
declare namespace cocoascript {
  /**
   * The abstract base for media data collectors.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemmediadatacollector
   */
  interface AVPlayerItemMediaDataCollector extends NSObject {
    //
    alloc():AVPlayerItemMediaDataCollector;
    //
    init():AVPlayerItemMediaDataCollector;
  }
}

declare const AVPlayerItemMediaDataCollector: cocoascript.AVPlayerItemMediaDataCollector;
declare namespace cocoascript {
  /**
   * An object used to capture the date range metadata defined for an HTTP Live Streaming asset.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector
   */
  interface AVPlayerItemMetadataCollector extends AVPlayerItemMediaDataCollector {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector/1617191-initwithidentifiers
    initWithIdentifiers_classifyingLabels(identifiers: string | cocoascript.NSString, classifyingLabels: string | cocoascript.NSString):AVPlayerItemMetadataCollector;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector/1617195-setdelegate
    setDelegate_queue(delegate: AVPlayerItemMetadataCollectorPushDelegate, delegateQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector/1617196-delegate
    delegate(): AVPlayerItemMetadataCollectorPushDelegate;
    setDelegate(value: AVPlayerItemMetadataCollectorPushDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollector/1617192-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(value: dispatch_queue_t): void;
    //
    alloc():AVPlayerItemMetadataCollector;
    //
    init():AVPlayerItemMetadataCollector;
  }
}

declare const AVPlayerItemMetadataCollector: cocoascript.AVPlayerItemMetadataCollector;
declare namespace cocoascript {
  /**
   * A URL session that creates and executes asset download tasks.
   * https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession
   */
  interface AVAssetDownloadURLSession extends NSURLSession {
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/1621015-sessionwithconfiguration
    sessionWithConfiguration_assetDownloadDelegate_delegateQueue(configuration: NSURLSessionConfiguration, delegate: AVAssetDownloadDelegate, delegateQueue: NSOperationQueue):AVAssetDownloadURLSession;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/3751761-assetdownloadtaskwithconfigurati
    assetDownloadTaskWithConfiguration(downloadConfiguration: AVAssetDownloadConfiguration):AVAssetDownloadTask;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/1650938-assetdownloadtaskwithurlasset
    assetDownloadTaskWithURLAsset_assetTitle_assetArtworkData_options(URLAsset: AVURLAsset, title: string | cocoascript.NSString, artworkData: NSData, options: AVAssetDownloadURLSession):AVAssetDownloadTask;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/2897242-aggregateassetdownloadtaskwithur
    aggregateAssetDownloadTaskWithURLAsset_mediaSelections_assetTitle_assetArtworkData_options(URLAsset: AVURLAsset, mediaSelections: AVMediaSelection, title: string | cocoascript.NSString, artworkData: NSData, options: AVAssetDownloadURLSession):AVAggregateAssetDownloadTask;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/1621018-assetdownloadtaskwithurlasset
    assetDownloadTaskWithURLAsset_destinationURL_options(URLAsset: AVURLAsset, destinationURL: NSURL, options: AVAssetDownloadURLSession):AVAssetDownloadTask;
    //
    alloc():AVAssetDownloadURLSession;
    //
    init():AVAssetDownloadURLSession;
  }
}

declare const AVAssetDownloadURLSession: cocoascript.AVAssetDownloadURLSession;
declare namespace cocoascript {
  /**
   * A session used to download HTTP Live Streaming assets.
   * https://developer.apple.com/documentation/avfoundation/avassetdownloadtask
   */
  interface AVAssetDownloadTask extends NSURLSessionTask {
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadtask/1621024-urlasset
    URLAsset(): AVURLAsset;
    setURLAsset(value: AVURLAsset): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadtask/1621026-loadedtimeranges
    loadedTimeRanges(): NSValue;
    setLoadedTimeRanges(value: NSValue): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadtask/1621014-options
    options(): id;
    setOptions(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadtask/1621022-destinationurl
    destinationURL(): NSURL;
    setDestinationURL(value: NSURL): void;
    //
    alloc():AVAssetDownloadTask;
    //
    init():AVAssetDownloadTask;
  }
}

declare const AVAssetDownloadTask: cocoascript.AVAssetDownloadTask;
declare namespace cocoascript {
  /**
   * A task that downloads multiple media selections for an asset.
   * https://developer.apple.com/documentation/avfoundation/avaggregateassetdownloadtask
   */
  interface AVAggregateAssetDownloadTask extends NSURLSessionTask {
    // https://developer.apple.com/documentation/avfoundation/avaggregateassetdownloadtask/2897238-urlasset
    URLAsset(): AVURLAsset;
    setURLAsset(value: AVURLAsset): void;
    //
    alloc():AVAggregateAssetDownloadTask;
    //
    init():AVAggregateAssetDownloadTask;
  }
}

declare const AVAggregateAssetDownloadTask: cocoascript.AVAggregateAssetDownloadTask;
declare namespace cocoascript {
  /**
   * An object that you use to inspect locally cached media data.
   * https://developer.apple.com/documentation/avfoundation/avassetcache
   */
  interface AVAssetCache extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetcache/1823708-playableoffline
    playableOffline(): boolean;
    setPlayableOffline(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetcache/1823715-mediaselectionoptionsinmediasele
    mediaSelectionOptionsInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):AVMediaSelectionOption;
    //
    alloc():AVAssetCache;
    //
    init():AVAssetCache;
  }
}

declare const AVAssetCache: cocoascript.AVAssetCache;
declare namespace cocoascript {
  /**
   * An object that manages policies to automatically purge downloaded assets.
   * https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanager
   */
  interface AVAssetDownloadStorageManager extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanager/2865563-shareddownloadstoragemanager
    sharedDownloadStorageManager():AVAssetDownloadStorageManager;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanager/2865562-storagemanagementpolicyforurl
    storageManagementPolicyForURL(downloadStorageURL: NSURL):AVAssetDownloadStorageManagementPolicy;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadstoragemanager/2865557-setstoragemanagementpolicy
    setStorageManagementPolicy_forURL(storageManagementPolicy: AVAssetDownloadStorageManagementPolicy, downloadStorageURL: NSURL):void;
    //
    alloc():AVAssetDownloadStorageManager;
    //
    init():AVAssetDownloadStorageManager;
  }
}

declare const AVAssetDownloadStorageManager: cocoascript.AVAssetDownloadStorageManager;
declare namespace cocoascript {
  /**
   * A mutable object that you use to create a new storage management policy.
   * https://developer.apple.com/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy
   */
  interface AVMutableAssetDownloadStorageManagementPolicy extends AVAssetDownloadStorageManagementPolicy {
    // https://developer.apple.com/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy/2865564-expirationdate
    expirationDate(): NSDate;
    setExpirationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy/2865558-priority
    priority(): AVAssetDownloadedAssetEvictionPriority;
    setPriority(value: AVAssetDownloadedAssetEvictionPriority): void;
    //
    alloc():AVMutableAssetDownloadStorageManagementPolicy;
    //
    init():AVMutableAssetDownloadStorageManagementPolicy;
  }
}

declare const AVMutableAssetDownloadStorageManagementPolicy: cocoascript.AVMutableAssetDownloadStorageManagementPolicy;
declare namespace cocoascript {
  /**
   * An object that creates and tracks decryption keys for media data.
   * https://developer.apple.com/documentation/avfoundation/avcontentkeysession
   */
  interface AVContentKeySession extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2887362-contentkeysessionwithkeysystem
    contentKeySessionWithKeySystem(keySystem: AVContentKeySystem):AVContentKeySession;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799206-contentkeysessionwithkeysystem
    contentKeySessionWithKeySystem_storageDirectoryAtURL(keySystem: AVContentKeySystem, storageURL: NSURL):AVContentKeySession;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799167-keysystem
    keySystem(): AVContentKeySystem;
    setKeySystem(value: AVContentKeySystem): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799203-storageurl
    storageURL(): NSURL;
    setStorageURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799164-setdelegate
    setDelegate_queue(delegate: AVContentKeySessionDelegate, delegateQueue: dispatch_queue_t):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799191-delegate
    delegate(): AVContentKeySessionDelegate;
    setDelegate(value: AVContentKeySessionDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799178-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(value: dispatch_queue_t): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799192-contentkeyrecipients
    contentKeyRecipients(): AVContentKeyRecipient;
    setContentKeyRecipients(value: AVContentKeyRecipient): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799174-addcontentkeyrecipient
    addContentKeyRecipient(recipient: AVContentKeyRecipient):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799181-removecontentkeyrecipient
    removeContentKeyRecipient(recipient: AVContentKeyRecipient):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799180-processcontentkeyrequestwithiden
    processContentKeyRequestWithIdentifier_initializationData_options(identifier: AVContentKeySession, initializationData: NSData, options: AVContentKeySession):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799171-expire
    expire():void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2887476-makesecuretokenforexpirationdate
    makeSecureTokenForExpirationDateOfPersistableContentKey_completionHandler(persistableContentKeyData: NSData, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799208-renewexpiringresponsedataforcont
    renewExpiringResponseDataForContentKeyRequest(contentKeyRequest: AVContentKeyRequest):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799189-contentprotectionsessionidentifi
    contentProtectionSessionIdentifier(): NSData;
    setContentProtectionSessionIdentifier(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/3089138-invalidatepersistablecontentkey
    invalidatePersistableContentKey_options_completionHandler(persistableContentKeyData: NSData, options: AVContentKeySession, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/3089137-invalidateallpersistablecontentk
    invalidateAllPersistableContentKeysForApp_options_completionHandler(appIdentifier: NSData, options: AVContentKeySession, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799161-pendingexpiredsessionreportswith
    pendingExpiredSessionReportsWithAppIdentifier_storageDirectoryAtURL(appIdentifier: NSData, storageURL: NSURL):NSData;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeysession/2799170-removependingexpiredsessionrepor
    removePendingExpiredSessionReports_withAppIdentifier_storageDirectoryAtURL(expiredSessionReports: NSData, appIdentifier: NSData, storageURL: NSURL):void;
    //
    alloc():AVContentKeySession;
    //
    init():AVContentKeySession;
  }
}

declare const AVContentKeySession: cocoascript.AVContentKeySession;
declare namespace cocoascript {
  /**
   * An object that represents the content key decryptor.
   * https://developer.apple.com/documentation/avfoundation/avcontentkey
   */
  interface AVContentKey extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcontentkey/3726100-contentkeyspecifier
    contentKeySpecifier(): AVContentKeySpecifier;
    setContentKeySpecifier(value: AVContentKeySpecifier): void;
    //
    alloc():AVContentKey;
    //
    init():AVContentKey;
  }
}

declare const AVContentKey: cocoascript.AVContentKey;
declare namespace cocoascript {
  /**
   * An object that uniquely identifies a content key.
   * https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier
   */
  interface AVContentKeySpecifier extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/3726107-initforkeysystem
    initForKeySystem_identifier_options(keySystem: AVContentKeySystem, contentKeyIdentifier: AVContentKeySpecifier, options: AVContentKeySpecifier):AVContentKeySpecifier;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/3726105-contentkeyspecifierforkeysystem
    contentKeySpecifierForKeySystem_identifier_options(keySystem: AVContentKeySystem, contentKeyIdentifier: AVContentKeySpecifier, options: AVContentKeySpecifier):AVContentKeySpecifier;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/3726106-identifier
    identifier(): id;
    setIdentifier(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/3726108-keysystem
    keySystem(): AVContentKeySystem;
    setKeySystem(value: AVContentKeySystem): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyspecifier/3726109-options
    options(): id;
    setOptions(value: id): void;
    //
    alloc():AVContentKeySpecifier;
    //
    init():AVContentKeySpecifier;
  }
}

declare const AVContentKeySpecifier: cocoascript.AVContentKeySpecifier;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a content decryption key request issued from a content key session object.
   * https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest
   */
  interface AVContentKeyRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799198-makestreamingcontentkeyrequestda
    makeStreamingContentKeyRequestDataForApp_contentIdentifier_options_completionHandler(appIdentifier: NSData, contentIdentifier: NSData, options: AVContentKeyRequest, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2936887-respondbyrequestingpersistableco
    respondByRequestingPersistableContentKeyRequestAndReturnError(outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799165-processcontentkeyresponse
    processContentKeyResponse(keyResponse: AVContentKeyResponse):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799159-processcontentkeyresponseerror
    processContentKeyResponseError(error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799207-respondbyrequestingpersistableco
    respondByRequestingPersistableContentKeyRequest():void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799205-identifier
    identifier(): id;
    setIdentifier(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799185-canprovidepersistablecontentkey
    canProvidePersistableContentKey(): boolean;
    setCanProvidePersistableContentKey(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799182-error
    error(): NSError;
    setError(value: NSError): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799186-initializationdata
    initializationData(): NSData;
    setInitializationData(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799193-renewsexpiringresponsedata
    renewsExpiringResponseData(): boolean;
    setRenewsExpiringResponseData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/2799190-status
    status(): AVContentKeyRequestStatus;
    setStatus(value: AVContentKeyRequestStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/3726102-contentkey
    contentKey(): AVContentKey;
    setContentKey(value: AVContentKey): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/3726103-contentkeyspecifier
    contentKeySpecifier(): AVContentKeySpecifier;
    setContentKeySpecifier(value: AVContentKeySpecifier): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/3112525-options
    options(): id;
    setOptions(value: id): void;
    //
    alloc():AVContentKeyRequest;
    //
    init():AVContentKeyRequest;
  }
}

declare const AVContentKeyRequest: cocoascript.AVContentKeyRequest;
// https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestprotocolversionskey
declare const AVContentKeyRequestProtocolVersionsKey: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestrequiresvalidationdatainsecuretokenkey
declare const AVContentKeyRequestRequiresValidationDataInSecureTokenKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a persistable content decryption key request issued from a content key session.
   * https://developer.apple.com/documentation/avfoundation/avpersistablecontentkeyrequest
   */
  interface AVPersistableContentKeyRequest extends AVContentKeyRequest {
    // https://developer.apple.com/documentation/avfoundation/avpersistablecontentkeyrequest/2799188-persistablecontentkeyfromkeyvend
    persistableContentKeyFromKeyVendorResponse_options_error(keyVendorResponse: NSData, options: AVPersistableContentKeyRequest, outError: NSError):NSData;
    //
    alloc():AVPersistableContentKeyRequest;
    //
    init():AVPersistableContentKeyRequest;
  }
}

declare const AVPersistableContentKeyRequest: cocoascript.AVPersistableContentKeyRequest;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a response to a content decryption key request.
   * https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse
   */
  interface AVContentKeyResponse extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/2867986-contentkeyresponsewithclearkeyda
    contentKeyResponseWithClearKeyData_initializationVector(keyData: NSData, initializationVector: NSData):AVContentKeyResponse;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/2799183-contentkeyresponsewithfairplayst
    contentKeyResponseWithFairPlayStreamingKeyResponseData(keyResponseData: NSData):AVContentKeyResponse;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyresponse/3088798-contentkeyresponsewithauthorizat
    contentKeyResponseWithAuthorizationTokenData(authorizationTokenData: NSData):AVContentKeyResponse;
    //
    alloc():AVContentKeyResponse;
    //
    init():AVContentKeyResponse;
  }
}

declare const AVContentKeyResponse: cocoascript.AVContentKeyResponse;
declare namespace cocoascript {
  /**
   * An object used to synchronize multiple queued sample buffers to a single timeline.
   * https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer
   */
  interface AVSampleBufferRenderSynchronizer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867827-renderers
    renderers(): AVQueuedSampleBufferRendering;
    setRenderers(value: AVQueuedSampleBufferRendering): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867828-addrenderer
    addRenderer(renderer: AVQueuedSampleBufferRendering):void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867826-removerenderer
    removeRenderer_atTime_completionHandler(renderer: AVQueuedSampleBufferRendering, time: CMTime, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/3022467-currenttime
    currentTime():CMTime;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867822-timebase
    timebase(): CMTimebaseRef;
    setTimebase(value: CMTimebaseRef): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867823-rate
    rate(): number;
    setRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867821-setrate
    setRate_time(rate: number, time: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/3726157-setrate
    setRate_time_atHostTime(rate: number, time: CMTime, hostTime: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/3726156-delaysratechangeuntilhassufficie
    delaysRateChangeUntilHasSufficientMediaData(): boolean;
    setDelaysRateChangeUntilHasSufficientMediaData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867825-addperiodictimeobserverforinterv
    addPeriodicTimeObserverForInterval_queue_usingBlock(interval: CMTime, queue: dispatch_queue_t, block: CMTime):AVSampleBufferRenderSynchronizer;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867824-addboundarytimeobserverfortimes
    addBoundaryTimeObserverForTimes_queue_usingBlock(times: NSValue, queue: dispatch_queue_t, block: void):AVSampleBufferRenderSynchronizer;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/2867829-removetimeobserver
    removeTimeObserver(observer: AVSampleBufferRenderSynchronizer):void;
    //
    alloc():AVSampleBufferRenderSynchronizer;
    //
    init():AVSampleBufferRenderSynchronizer;
  }
}

declare const AVSampleBufferRenderSynchronizer: cocoascript.AVSampleBufferRenderSynchronizer;
declare namespace cocoascript {
  /**
   * An object that displays compressed or uncompressed video frames.
   * https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer
   */
  interface AVSampleBufferDisplayLayer extends CALayer {
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1387778-requestmediadatawhenreadyonqueue
    requestMediaDataWhenReadyOnQueue_usingBlock(queue: dispatch_queue_t, block: void):void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1387317-readyformoremediadata
    readyForMoreMediaData(): boolean;
    setReadyForMoreMediaData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/3563946-requiresflushtoresumedecoding
    requiresFlushToResumeDecoding(): boolean;
    setRequiresFlushToResumeDecoding(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1388557-stoprequestingmediadata
    stopRequestingMediaData():void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1385692-flush
    flush():void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1389257-flushandremoveimage
    flushAndRemoveImage():void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1390569-controltimebase
    controlTimebase(): CMTimebaseRef;
    setControlTimebase(value: CMTimebaseRef): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1387599-enqueuesamplebuffer
    enqueueSampleBuffer(sampleBuffer: CMSampleBufferRef):void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1387625-videogravity
    videoGravity(): AVLayerVideoGravity;
    setVideoGravity(value: AVLayerVideoGravity): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1387837-status
    status(): AVQueuedSampleBufferRenderingStatus;
    setStatus(value: AVQueuedSampleBufferRenderingStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/3081651-preventscapture
    preventsCapture(): boolean;
    setPreventsCapture(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/3088800-preventsdisplaysleepduringvideop
    preventsDisplaySleepDuringVideoPlayback(): boolean;
    setPreventsDisplaySleepDuringVideoPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/3726154-outputobscuredduetoinsufficiente
    outputObscuredDueToInsufficientExternalProtection(): boolean;
    setOutputObscuredDueToInsufficientExternalProtection(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/1390739-error
    error(): NSError;
    setError(value: NSError): void;
    //
    alloc():AVSampleBufferDisplayLayer;
    //
    init():AVSampleBufferDisplayLayer;
  }
}

declare const AVSampleBufferDisplayLayer: cocoascript.AVSampleBufferDisplayLayer;
// https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayerfailedtodecodenotificationerrorkey
declare const AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey: cocoascript.NSString;
// https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayerfailedtodecodenotification
declare const AVSampleBufferDisplayLayerFailedToDecodeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object used to decompress audio and play compressed or uncompressed audio.
   * https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer
   */
  interface AVSampleBufferAudioRenderer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/2866183-status
    status(): AVQueuedSampleBufferRenderingStatus;
    setStatus(value: AVQueuedSampleBufferRenderingStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/2866181-flushfromsourcetime
    flushFromSourceTime_completionHandler(time: CMTime, completionHandler: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/2866180-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(value: AVAudioTimePitchAlgorithm): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/3750310-allowedaudiospatializationformat
    allowedAudioSpatializationFormats(): AVAudioSpatializationFormats;
    setAllowedAudioSpatializationFormats(value: AVAudioSpatializationFormats): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/2866179-volume
    volume(): number;
    setVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/2866177-muted
    muted(): boolean;
    setMuted(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/2866182-audiooutputdeviceuniqueid
    audioOutputDeviceUniqueID(): string | cocoascript.NSString;
    setAudioOutputDeviceUniqueID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorenderer/2866178-error
    error(): NSError;
    setError(value: NSError): void;
    //
    alloc():AVSampleBufferAudioRenderer;
    //
    init():AVSampleBufferAudioRenderer;
  }
}

declare const AVSampleBufferAudioRenderer: cocoascript.AVSampleBufferAudioRenderer;
// https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorendererflushtimekey
declare const AVSampleBufferAudioRendererFlushTimeKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object used to create sample buffer opaque objects.
   * https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator
   */
  interface AVSampleBufferGenerator extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/1387477-initwithasset
    initWithAsset_timebase(asset: AVAsset, timebase: CMTimebaseRef):AVSampleBufferGenerator;
    // https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/1387475-createsamplebufferforrequest
    createSampleBufferForRequest(request: AVSampleBufferRequest):CMSampleBufferRef;
    // https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/1387295-notifyofdatareadyforsamplebuffer
    notifyOfDataReadyForSampleBuffer_completionHandler(sbuf: CMSampleBufferRef, completionHandler: NSError):void;
    //
    alloc():AVSampleBufferGenerator;
    //
    init():AVSampleBufferGenerator;
  }
}

declare const AVSampleBufferGenerator: cocoascript.AVSampleBufferGenerator;
declare namespace cocoascript {
  /**
   * An object that describes a sample buffer creation request.
   * https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest
   */
  interface AVSampleBufferRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1387449-initwithstartcursor
    initWithStartCursor(startCursor: AVSampleCursor):AVSampleBufferRequest;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1386442-direction
    direction(): AVSampleBufferRequestDirection;
    setDirection(value: AVSampleBufferRequestDirection): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1387466-limitcursor
    limitCursor(): AVSampleCursor;
    setLimitCursor(value: AVSampleCursor): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1385645-maxsamplecount
    maxSampleCount(): NSInteger;
    setMaxSampleCount(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1387463-mode
    mode(): AVSampleBufferRequestMode;
    setMode(value: AVSampleBufferRequestMode): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1385790-overridetime
    overrideTime(): CMTime;
    setOverrideTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1386251-preferredminsamplecount
    preferredMinSampleCount(): NSInteger;
    setPreferredMinSampleCount(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/1387398-startcursor
    startCursor(): AVSampleCursor;
    setStartCursor(value: AVSampleCursor): void;
    //
    alloc():AVSampleBufferRequest;
    //
    init():AVSampleBufferRequest;
  }
}

declare const AVSampleBufferRequest: cocoascript.AVSampleBufferRequest;
declare namespace cocoascript {
  /**
   * An object that detects available media playback routes.
   * https://developer.apple.com/documentation/avfoundation/avroutedetector
   */
  interface AVRouteDetector extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avroutedetector/2915762-routedetectionenabled
    routeDetectionEnabled(): boolean;
    setRouteDetectionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avroutedetector/2915760-multipleroutesdetected
    multipleRoutesDetected(): boolean;
    setMultipleRoutesDetected(value: boolean): void;
    //
    alloc():AVRouteDetector;
    //
    init():AVRouteDetector;
  }
}

declare const AVRouteDetector: cocoascript.AVRouteDetector;
// https://developer.apple.com/documentation/avfoundation/avfoundationerrordomain
declare const AVFoundationErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  /**
   * An object that combines and arranges media from multiple assets into a single composite asset that you can play or process.
   * https://developer.apple.com/documentation/avfoundation/avcomposition
   */
  interface AVComposition extends AVAsset {
    // https://developer.apple.com/documentation/avfoundation/avcomposition/3746561-loadtrackwithtrackid
    loadTrackWithTrackID_completionHandler(trackID: CMPersistentTrackID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/3746563-loadtrackswithmediatype
    loadTracksWithMediaType_completionHandler(mediaType: AVMediaType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/3746562-loadtrackswithmediacharacteristi
    loadTracksWithMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/1390165-tracks
    tracks(): AVCompositionTrack;
    setTracks(value: AVCompositionTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/1388473-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/1386534-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/1387525-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/1387247-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avcomposition/1387080-urlassetinitializationoptions
    URLAssetInitializationOptions(): id;
    setURLAssetInitializationOptions(value: id): void;
    //
    alloc():AVComposition;
    //
    init():AVComposition;
  }
}

declare const AVComposition: cocoascript.AVComposition;
declare namespace cocoascript {
  /**
   * A track in a composition that presents media of a uniform type.
   * https://developer.apple.com/documentation/avfoundation/avcompositiontrack
   */
  interface AVCompositionTrack extends AVAssetTrack {
    // https://developer.apple.com/documentation/avfoundation/avcompositiontrack/1387267-segments
    segments(): AVCompositionTrackSegment;
    setSegments(value: AVCompositionTrackSegment): void;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontrack/2865555-segmentfortracktime
    segmentForTrackTime(trackTime: CMTime):AVCompositionTrackSegment;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontrack/3194194-formatdescriptionreplacements
    formatDescriptionReplacements(): AVCompositionTrackFormatDescriptionReplacement;
    setFormatDescriptionReplacements(value: AVCompositionTrackFormatDescriptionReplacement): void;
    //
    alloc():AVCompositionTrack;
    //
    init():AVCompositionTrack;
  }
}

declare const AVCompositionTrack: cocoascript.AVCompositionTrack;
declare namespace cocoascript {
  /**
   * A track segment that maps a time from the source media track to the composition track.
   * https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment
   */
  interface AVCompositionTrackSegment extends AVAssetTrackSegment {
    // https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/1400556-compositiontracksegmentwithtimer
    compositionTrackSegmentWithTimeRange(timeRange: CMTimeRange):AVCompositionTrackSegment;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/1386841-initwithtimerange
    initWithTimeRange(timeRange: CMTimeRange):AVCompositionTrackSegment;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/1400552-compositiontracksegmentwithurl
    compositionTrackSegmentWithURL_trackID_sourceTimeRange_targetTimeRange(URL: NSURL, trackID: CMPersistentTrackID, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange):AVCompositionTrackSegment;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/1390282-initwithurl
    initWithURL_trackID_sourceTimeRange_targetTimeRange(URL: NSURL, trackID: CMPersistentTrackID, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange):AVCompositionTrackSegment;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/1386814-sourceurl
    sourceURL(): NSURL;
    setSourceURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/1388326-sourcetrackid
    sourceTrackID(): CMPersistentTrackID;
    setSourceTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avcompositiontracksegment/1389592-empty
    empty(): boolean;
    setEmpty(value: boolean): void;
    //
    alloc():AVCompositionTrackSegment;
    //
    init():AVCompositionTrackSegment;
  }
}

declare const AVCompositionTrackSegment: cocoascript.AVCompositionTrackSegment;
declare namespace cocoascript {
  /**
   * An object that you use to create a new composition from existing assets.
   * https://developer.apple.com/documentation/avfoundation/avmutablecomposition
   */
  interface AVMutableComposition extends AVComposition {
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1390705-compositionwithurlassetinitializ
    compositionWithURLAssetInitializationOptions(URLAssetInitializationOptions: AVMutableComposition):AVMutableComposition;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1495098-composition
    composition():AVMutableComposition;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/3746564-loadtrackwithtrackid
    loadTrackWithTrackID_completionHandler(trackID: CMPersistentTrackID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/3746566-loadtrackswithmediatype
    loadTracksWithMediaType_completionHandler(mediaType: AVMediaType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/3746565-loadtrackswithmediacharacteristi
    loadTracksWithMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1389937-tracks
    tracks(): AVMutableCompositionTrack;
    setTracks(value: AVMutableCompositionTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1390074-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVMutableCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1385724-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVMutableCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1388464-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMutableCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1386662-mutabletrackcompatiblewithtrack
    mutableTrackCompatibleWithTrack(track: AVAssetTrack):AVMutableCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1387601-addmutabletrackwithmediatype
    addMutableTrackWithMediaType_preferredTrackID(mediaType: AVMediaType, preferredTrackID: CMPersistentTrackID):AVMutableCompositionTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1386818-removetrack
    removeTrack(track: AVCompositionTrack):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1386710-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1385943-inserttimerange
    insertTimeRange_ofAsset_atTime_error(timeRange: CMTimeRange, asset: AVAsset, startTime: CMTime, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1387768-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1390549-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecomposition/1390424-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(value: CGSize): void;
    //
    alloc():AVMutableComposition;
    //
    init():AVMutableComposition;
  }
}

declare const AVMutableComposition: cocoascript.AVMutableComposition;
declare namespace cocoascript {
  /**
   * A mutable track in a composition that you use to insert, remove, and scale track segments without affecting their low-level representation.
   * https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack
   */
  interface AVMutableCompositionTrack extends AVCompositionTrack {
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/3334926-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1389030-naturaltimescale
    naturalTimeScale(): CMTimeScale;
    setNaturalTimeScale(value: CMTimeScale): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1387192-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1388866-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1388304-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(value: CGAffineTransform): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1388649-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1390321-segments
    segments(): AVCompositionTrackSegment;
    setSegments(value: AVCompositionTrackSegment): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1389483-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1390691-inserttimerange
    insertTimeRange_ofTrack_atTime_error(timeRange: CMTimeRange, track: AVAssetTrack, startTime: CMTime, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1388629-inserttimeranges
    insertTimeRanges_ofTracks_atTime_error(timeRanges: NSValue, tracks: AVAssetTrack, startTime: CMTime, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1386048-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1388212-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/3013764-addtrackassociationtotrack
    addTrackAssociationToTrack_type(compositionTrack: AVCompositionTrack, trackAssociationType: AVTrackAssociationType):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/3013765-removetrackassociationtotrack
    removeTrackAssociationToTrack_type(compositionTrack: AVCompositionTrack, trackAssociationType: AVTrackAssociationType):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/3180005-replaceformatdescription
    replaceFormatDescription_withFormatDescription(originalFormatDescription: CMFormatDescriptionRef, replacementFormatDescription: CMFormatDescriptionRef):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/1388746-validatetracksegments
    validateTrackSegments_error(trackSegments: AVCompositionTrackSegment, outError: NSError):boolean;
    //
    alloc():AVMutableCompositionTrack;
    //
    init():AVMutableCompositionTrack;
  }
}

declare const AVMutableCompositionTrack: cocoascript.AVMutableCompositionTrack;
declare namespace cocoascript {
  /**
   * A track in a movie that conforms to the QuickTime or ISO base media file format.
   * https://developer.apple.com/documentation/avfoundation/avmovietrack
   */
  interface AVMovieTrack extends AVAssetTrack {
    // https://developer.apple.com/documentation/avfoundation/avmovietrack/1387020-alternategroupid
    alternateGroupID(): NSInteger;
    setAlternateGroupID(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avmovietrack/1386868-mediadatastorage
    mediaDataStorage(): AVMediaDataStorage;
    setMediaDataStorage(value: AVMediaDataStorage): void;
    // https://developer.apple.com/documentation/avfoundation/avmovietrack/1388187-mediadecodetimerange
    mediaDecodeTimeRange(): CMTimeRange;
    setMediaDecodeTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avmovietrack/1389982-mediapresentationtimerange
    mediaPresentationTimeRange(): CMTimeRange;
    setMediaPresentationTimeRange(value: CMTimeRange): void;
    //
    alloc():AVMovieTrack;
    //
    init():AVMovieTrack;
  }
}

declare const AVMovieTrack: cocoascript.AVMovieTrack;
declare namespace cocoascript {
  /**
   * A mutable object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.
   * https://developer.apple.com/documentation/avfoundation/avmutablemovie
   */
  interface AVMutableMovie extends AVMovie {
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1386052-initwithurl
    initWithURL_options_error(URL: NSURL, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1458226-moviewithurl
    movieWithURL_options_error(URL: NSURL, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1388442-initwithdata
    initWithData_options_error(data: NSData, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1458234-moviewithdata
    movieWithData_options_error(data: NSData, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1386408-initwithsettingsfrommovie
    initWithSettingsFromMovie_options_error(movie: AVMovie, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1458238-moviewithsettingsfrommovie
    movieWithSettingsFromMovie_options_error(movie: AVMovie, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1389960-modified
    modified(): boolean;
    setModified(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1388742-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1387335-preferredrate
    preferredRate(): number;
    setPreferredRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1388771-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(value: CGAffineTransform): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1388614-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1390622-timescale
    timescale(): CMTimeScale;
    setTimescale(value: CMTimeScale): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1386969-interleavingperiod
    interleavingPeriod(): CMTime;
    setInterleavingPeriod(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1389320-defaultmediadatastorage
    defaultMediaDataStorage(): AVMediaDataStorage;
    setDefaultMediaDataStorage(value: AVMediaDataStorage): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/3746575-loadtrackwithtrackid
    loadTrackWithTrackID_completionHandler(trackID: CMPersistentTrackID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/3746577-loadtrackswithmediatype
    loadTracksWithMediaType_completionHandler(mediaType: AVMediaType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/3746576-loadtrackswithmediacharacteristi
    loadTracksWithMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1387739-tracks
    tracks(): AVMutableMovieTrack;
    setTracks(value: AVMutableMovieTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1389467-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVMutableMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1390443-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVMutableMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1388547-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMutableMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1388669-mutabletrackcompatiblewithtrack
    mutableTrackCompatibleWithTrack(track: AVAssetTrack):AVMutableMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1390063-addmutabletrackwithmediatype
    addMutableTrackWithMediaType_copySettingsFromTrack_options(mediaType: AVMediaType, track: AVAssetTrack, options: AVMutableMovie):AVMutableMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1389215-addmutabletrackscopyingsettingsf
    addMutableTracksCopyingSettingsFromTracks_options(existingTracks: AVAssetTrack, options: AVMutableMovie):AVMutableMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1386735-removetrack
    removeTrack(track: AVMovieTrack):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1387515-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1389598-inserttimerange
    insertTimeRange_ofAsset_atTime_copySampleData_error(timeRange: CMTimeRange, asset: AVAsset, startTime: CMTime, copySampleData: boolean, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1385653-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovie/1385605-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    //
    alloc():AVMutableMovie;
    //
    init():AVMutableMovie;
  }
}

declare const AVMutableMovie: cocoascript.AVMutableMovie;
declare namespace cocoascript {
  /**
   * A mutable track that conforms to the QuickTime or ISO base media file format.
   * https://developer.apple.com/documentation/avfoundation/avmutablemovietrack
   */
  interface AVMutableMovieTrack extends AVMovieTrack {
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390163-addtrackassociationtotrack
    addTrackAssociationToTrack_type(movieTrack: AVMovieTrack, trackAssociationType: AVTrackAssociationType):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1389620-removetrackassociationtotrack
    removeTrackAssociationToTrack_type(movieTrack: AVMovieTrack, trackAssociationType: AVTrackAssociationType):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1387206-alternategroupid
    alternateGroupID(): NSInteger;
    setAlternateGroupID(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1386340-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1389542-hasprotectedcontent
    hasProtectedContent(): boolean;
    setHasProtectedContent(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1386532-mediadatastorage
    mediaDataStorage(): AVMediaDataStorage;
    setMediaDataStorage(value: AVMediaDataStorage): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390201-modified
    modified(): boolean;
    setModified(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1385583-samplereferencebaseurl
    sampleReferenceBaseURL(): NSURL;
    setSampleReferenceBaseURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1388055-timescale
    timescale(): CMTimeScale;
    setTimescale(value: CMTimeScale): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390023-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1385900-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1386593-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(value: CGAffineTransform): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1387655-layer
    layer(): NSInteger;
    setLayer(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1386454-cleanaperturedimensions
    cleanApertureDimensions(): CGSize;
    setCleanApertureDimensions(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390108-productionaperturedimensions
    productionApertureDimensions(): CGSize;
    setProductionApertureDimensions(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1389417-encodedpixelsdimensions
    encodedPixelsDimensions(): CGSize;
    setEncodedPixelsDimensions(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390391-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1389736-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1389056-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1387665-inserttimerange
    insertTimeRange_ofTrack_atTime_copySampleData_error(timeRange: CMTimeRange, track: AVAssetTrack, startTime: CMTime, copySampleData: boolean, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1389441-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1385962-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1388618-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390504-preferredmediachunkalignment
    preferredMediaChunkAlignment(): NSInteger;
    setPreferredMediaChunkAlignment(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390292-preferredmediachunkduration
    preferredMediaChunkDuration(): CMTime;
    setPreferredMediaChunkDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1390149-preferredmediachunksize
    preferredMediaChunkSize(): NSInteger;
    setPreferredMediaChunkSize(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1638041-appendsamplebuffer
    appendSampleBuffer_decodeTime_presentationTime_error(sampleBuffer: CMSampleBufferRef, outDecodeTime: CMTime, outPresentationTime: CMTime, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/1638038-insertmediatimerange
    insertMediaTimeRange_intoTimeRange(mediaTimeRange: CMTimeRange, trackTimeRange: CMTimeRange):boolean;
    // https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/2876160-replaceformatdescription
    replaceFormatDescription_withFormatDescription(formatDescription: CMFormatDescriptionRef, newFormatDescription: CMFormatDescriptionRef):void;
    //
    alloc():AVMutableMovieTrack;
    //
    init():AVMutableMovieTrack;
  }
}

declare const AVMutableMovieTrack: cocoascript.AVMutableMovieTrack;
declare namespace cocoascript {
  /**
   * An object that represents a fragmented movie file.
   * https://developer.apple.com/documentation/avfoundation/avfragmentedmovie
   */
  interface AVFragmentedMovie extends AVMovie {
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/3746568-loadtrackwithtrackid
    loadTrackWithTrackID_completionHandler(trackID: CMPersistentTrackID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/3746570-loadtrackswithmediatype
    loadTracksWithMediaType_completionHandler(mediaType: AVMediaType, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/3746569-loadtrackswithmediacharacteristi
    loadTracksWithMediaCharacteristic_completionHandler(mediaCharacteristic: AVMediaCharacteristic, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/1388242-tracks
    tracks(): AVFragmentedMovieTrack;
    setTracks(value: AVFragmentedMovieTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/1388343-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVFragmentedMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/1390553-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVFragmentedMovieTrack;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovie/1388651-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVFragmentedMovieTrack;
    //
    alloc():AVFragmentedMovie;
    //
    init():AVFragmentedMovie;
  }
}

declare const AVFragmentedMovie: cocoascript.AVFragmentedMovie;
declare namespace cocoascript {
  /**
   * An object that represents a track in a fragmented movie.
   * https://developer.apple.com/documentation/avfoundation/avfragmentedmovietrack
   */
  interface AVFragmentedMovieTrack extends AVMovieTrack {
    //
    alloc():AVFragmentedMovieTrack;
    //
    init():AVFragmentedMovieTrack;
  }
}

declare const AVFragmentedMovieTrack: cocoascript.AVFragmentedMovieTrack;
declare namespace cocoascript {
  /**
   * An object that checks whether a fragmented movie appends additional movie fragments.
   * https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder
   */
  interface AVFragmentedMovieMinder extends AVFragmentedAssetMinder {
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/1390294-initwithmovie
    initWithMovie_mindingInterval(movie: AVFragmentedMovie, mindingInterval: NSTimeInterval):AVFragmentedMovieMinder;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/1458262-fragmentedmovieminderwithmovie
    fragmentedMovieMinderWithMovie_mindingInterval(movie: AVFragmentedMovie, mindingInterval: NSTimeInterval):AVFragmentedMovieMinder;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/1386171-addfragmentedmovie
    addFragmentedMovie(movie: AVFragmentedMovie):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/1389794-removefragmentedmovie
    removeFragmentedMovie(movie: AVFragmentedMovie):void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/1387704-mindinginterval
    mindingInterval(): NSTimeInterval;
    setMindingInterval(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avfragmentedmovieminder/1388707-movies
    movies(): AVFragmentedMovie;
    setMovies(value: AVFragmentedMovie): void;
    //
    alloc():AVFragmentedMovieMinder;
    //
    init():AVFragmentedMovieMinder;
  }
}

declare const AVFragmentedMovieMinder: cocoascript.AVFragmentedMovieMinder;
declare namespace cocoascript {
  /**
   * An object that represents the media sample data storage file.
   * https://developer.apple.com/documentation/avfoundation/avmediadatastorage
   */
  interface AVMediaDataStorage extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmediadatastorage/1386008-initwithurl
    initWithURL_options(URL: NSURL, options: AVMediaDataStorage):AVMediaDataStorage;
    // https://developer.apple.com/documentation/avfoundation/avmediadatastorage/1385809-url
    URL():NSURL;
    //
    alloc():AVMediaDataStorage;
    //
    init():AVMediaDataStorage;
  }
}

declare const AVMediaDataStorage: cocoascript.AVMediaDataStorage;
declare namespace cocoascript {
  /**
   * An object that represents a mutable video composition.
   * https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition
   */
  interface AVMutableVideoComposition extends AVVideoComposition {
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1519720-videocomposition
    videoComposition():AVMutableVideoComposition;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1388430-videocompositionwithpropertiesof
    videoCompositionWithPropertiesOfAsset(asset: AVAsset):AVMutableVideoComposition;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/3200159-videocompositionwithpropertiesof
    videoCompositionWithPropertiesOfAsset_prototypeInstruction(asset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction):AVMutableVideoComposition;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1387006-videocompositionwithasset
    videoCompositionWithAsset_applyingCIFiltersWithHandler(asset: AVAsset, applier: AVAsynchronousCIImageFilteringRequest):AVMutableVideoComposition;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1390059-frameduration
    frameDuration(): CMTime;
    setFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1386365-rendersize
    renderSize(): CGSize;
    setRenderSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1615787-renderscale
    renderScale(): number;
    setRenderScale(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1385815-instructions
    instructions(): AVVideoCompositionInstruction;
    setInstructions(value: AVVideoCompositionInstruction): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1390395-animationtool
    animationTool(): AVVideoCompositionCoreAnimationTool;
    setAnimationTool(value: AVVideoCompositionCoreAnimationTool): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1390649-customvideocompositorclass
    customVideoCompositorClass(): AVVideoCompositing;
    setCustomVideoCompositorClass(value: AVVideoCompositing): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1643234-colorprimaries
    colorPrimaries(): string | cocoascript.NSString;
    setColorPrimaries(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1643237-colortransferfunction
    colorTransferFunction(): string | cocoascript.NSString;
    setColorTransferFunction(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/1643231-colorycbcrmatrix
    colorYCbCrMatrix(): string | cocoascript.NSString;
    setColorYCbCrMatrix(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/2873799-sourcetrackidforframetiming
    sourceTrackIDForFrameTiming(): CMPersistentTrackID;
    setSourceTrackIDForFrameTiming(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/3750316-sourcesampledatatrackids
    sourceSampleDataTrackIDs(): NSNumber;
    setSourceSampleDataTrackIDs(value: NSNumber): void;
    //
    alloc():AVMutableVideoComposition;
    //
    init():AVMutableVideoComposition;
  }
}

declare const AVMutableVideoComposition: cocoascript.AVMutableVideoComposition;
declare namespace cocoascript {
  /**
   * An operation performed by a compositor.
   * https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction
   */
  interface AVMutableVideoCompositionInstruction extends AVVideoCompositionInstruction {
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/1519701-videocompositioninstruction
    videoCompositionInstruction():AVMutableVideoCompositionInstruction;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/1390236-backgroundcolor
    backgroundColor(): CGColorRef;
    setBackgroundColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/1388912-layerinstructions
    layerInstructions(): AVVideoCompositionLayerInstruction;
    setLayerInstructions(value: AVVideoCompositionLayerInstruction): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/1390418-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/1385876-enablepostprocessing
    enablePostProcessing(): boolean;
    setEnablePostProcessing(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/3750317-requiredsourcesampledatatrackids
    requiredSourceSampleDataTrackIDs(): NSNumber;
    setRequiredSourceSampleDataTrackIDs(value: NSNumber): void;
    //
    alloc():AVMutableVideoCompositionInstruction;
    //
    init():AVMutableVideoCompositionInstruction;
  }
}

declare const AVMutableVideoCompositionInstruction: cocoascript.AVMutableVideoCompositionInstruction;
declare namespace cocoascript {
  /**
   * An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.
   * https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction
   */
  interface AVMutableVideoCompositionLayerInstruction extends AVVideoCompositionLayerInstruction {
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1519717-videocompositionlayerinstruction
    videoCompositionLayerInstruction():AVMutableVideoCompositionLayerInstruction;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1389691-videocompositionlayerinstruction
    videoCompositionLayerInstructionWithAssetTrack(track: AVAssetTrack):AVMutableVideoCompositionLayerInstruction;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1387222-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1390758-setopacity
    setOpacity_atTime(opacity: number, time: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1387532-setopacityrampfromstartopacity
    setOpacityRampFromStartOpacity_toEndOpacity_timeRange(startOpacity: number, endOpacity: number, timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1390899-settransform
    setTransform_atTime(transform: CGAffineTransform, time: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1388192-settransformrampfromstarttransfo
    setTransformRampFromStartTransform_toEndTransform_timeRange(startTransform: CGAffineTransform, endTransform: CGAffineTransform, timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1387402-setcroprectangle
    setCropRectangle_atTime(cropRectangle: CGRect, time: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1385677-setcroprectanglerampfromstartcro
    setCropRectangleRampFromStartCropRectangle_toEndCropRectangle_timeRange(startCropRectangle: CGRect, endCropRectangle: CGRect, timeRange: CMTimeRange):void;
    //
    alloc():AVMutableVideoCompositionLayerInstruction;
    //
    init():AVMutableVideoCompositionLayerInstruction;
  }
}

declare const AVMutableVideoCompositionLayerInstruction: cocoascript.AVMutableVideoCompositionLayerInstruction;
declare namespace cocoascript {
  /**
   * An object used to incorporate Core Animation into a video composition.
   * https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool
   */
  interface AVVideoCompositionCoreAnimationTool extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/1388345-videocompositioncoreanimationtoo
    videoCompositionCoreAnimationToolWithAdditionalLayer_asTrackID(layer: CALayer, trackID: CMPersistentTrackID):AVVideoCompositionCoreAnimationTool;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/1389594-videocompositioncoreanimationtoo
    videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayer_inLayer(videoLayer: CALayer, animationLayer: CALayer):AVVideoCompositionCoreAnimationTool;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/1389778-videocompositioncoreanimationtoo
    videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayers_inLayer(videoLayers: CALayer, animationLayer: CALayer):AVVideoCompositionCoreAnimationTool;
    //
    alloc():AVVideoCompositionCoreAnimationTool;
    //
    init():AVVideoCompositionCoreAnimationTool;
  }
}

declare const AVVideoCompositionCoreAnimationTool: cocoascript.AVVideoCompositionCoreAnimationTool;
declare namespace cocoascript {
  /**
   * An object that manages the input parameters for mixing audio tracks.
   * https://developer.apple.com/documentation/avfoundation/avmutableaudiomix
   */
  interface AVMutableAudioMix extends AVAudioMix {
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomix/1560973-audiomix
    audioMix():AVMutableAudioMix;
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomix/1388159-inputparameters
    inputParameters(): AVAudioMixInputParameters;
    setInputParameters(value: AVAudioMixInputParameters): void;
    //
    alloc():AVMutableAudioMix;
    //
    init():AVMutableAudioMix;
  }
}

declare const AVMutableAudioMix: cocoascript.AVMutableAudioMix;
declare namespace cocoascript {
  /**
   * The parameters you use when adding an audio track to a mix.
   * https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters
   */
  interface AVMutableAudioMixInputParameters extends AVAudioMixInputParameters {
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/1560974-audiomixinputparameters
    audioMixInputParameters():AVMutableAudioMixInputParameters;
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/1386858-audiomixinputparameterswithtrack
    audioMixInputParametersWithTrack(track: AVAssetTrack):AVMutableAudioMixInputParameters;
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/1389209-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/1389875-setvolume
    setVolume_atTime(volume: number, time: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/1386056-setvolumerampfromstartvolume
    setVolumeRampFromStartVolume_toEndVolume_timeRange(startVolume: number, endVolume: number, timeRange: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/1389296-audiotapprocessor
    audioTapProcessor(): MTAudioProcessingTapRef;
    setAudioTapProcessor(value: MTAudioProcessingTapRef): void;
    // https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/1388300-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(value: AVAudioTimePitchAlgorithm): void;
    //
    alloc():AVMutableAudioMixInputParameters;
    //
    init():AVMutableAudioMixInputParameters;
  }
}

declare const AVMutableAudioMixInputParameters: cocoascript.AVMutableAudioMixInputParameters;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions
  type AVAssetReferenceRestrictions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/averror
  type AVError = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avauthorizationstatus
  type AVAuthorizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * Information about OS and hardware status affecting capture system performance and availability.
   * https://developer.apple.com/documentation/avfoundation/avcapturesystempressurestate
   */
  interface AVCaptureSystemPressureState extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturesystempressurestate/2933365-level
    level(): AVCaptureSystemPressureLevel;
    setLevel(value: AVCaptureSystemPressureLevel): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturesystempressurestate/2933367-factors
    factors(): AVCaptureSystemPressureFactors;
    setFactors(value: AVCaptureSystemPressureFactors): void;
    //
    alloc():AVCaptureSystemPressureState;
    //
    init():AVCaptureSystemPressureState;
  }
}

declare const AVCaptureSystemPressureState: cocoascript.AVCaptureSystemPressureState;
// https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmattetypehair
declare const AVSemanticSegmentationMatteTypeHair: cocoascript.AVSemanticSegmentationMatteType;
// https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmattetypeskin
declare const AVSemanticSegmentationMatteTypeSkin: cocoascript.AVSemanticSegmentationMatteType;
// https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmattetypeteeth
declare const AVSemanticSegmentationMatteTypeTeeth: cocoascript.AVSemanticSegmentationMatteType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturesessioninterruptionreason
  type AVCaptureSessionInterruptionReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset
  type AVCaptureSessionPreset = cocoascript.NSString;
}
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpresetinputpriority
declare const AVCaptureSessionPresetInputPriority: cocoascript.AVCaptureSessionPreset;
declare namespace cocoascript {
  /**
   * A query for finding and monitoring available capture devices.
   * https://developer.apple.com/documentation/avfoundation/avcapturedevicediscoverysession
   */
  interface AVCaptureDeviceDiscoverySession extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturedevicediscoverysession/2361539-discoverysessionwithdevicetypes
    discoverySessionWithDeviceTypes_mediaType_position(deviceTypes: AVCaptureDeviceType, mediaType: AVMediaType, position: AVCaptureDevicePosition):AVCaptureDeviceDiscoverySession;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevicediscoverysession/2361002-devices
    devices(): AVCaptureDevice;
    setDevices(value: AVCaptureDevice): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedevicediscoverysession/3153004-supportedmulticamdevicesets
    supportedMultiCamDeviceSets(): AVCaptureDevice;
    setSupportedMultiCamDeviceSets(value: AVCaptureDevice): void;
    //
    alloc():AVCaptureDeviceDiscoverySession;
    //
    init():AVCaptureDeviceDiscoverySession;
  }
}

declare const AVCaptureDeviceDiscoverySession: cocoascript.AVCaptureDeviceDiscoverySession;
declare namespace cocoascript {
  /**
   * A distinct input source on a capture device.
   * https://developer.apple.com/documentation/avfoundation/avcapturedeviceinputsource
   */
  interface AVCaptureDeviceInputSource extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinputsource/1387788-inputsourceid
    inputSourceID(): string | cocoascript.NSString;
    setInputSourceID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceinputsource/1390422-localizedname
    localizedName(): string | cocoascript.NSString;
    setLocalizedName(value: string | cocoascript.NSString): void;
    //
    alloc():AVCaptureDeviceInputSource;
    //
    init():AVCaptureDeviceInputSource;
  }
}

declare const AVCaptureDeviceInputSource: cocoascript.AVCaptureDeviceInputSource;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturedeviceposition
  type AVCaptureDevicePosition = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturedevicetype
  type AVCaptureDeviceType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturecenterstagecontrolmode
  type AVCaptureCenterStageControlMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A set of media format and capture settings (such as video resolution and frame rate) that you use to configure a capture device.
   * https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat
   */
  interface AVCaptureDeviceFormat extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1388503-mediatype
    mediaType(): AVMediaType;
    setMediaType(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1389445-formatdescription
    formatDescription(): CMFormatDescriptionRef;
    setFormatDescription(value: CMFormatDescriptionRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1648611-supportedcolorspaces
    supportedColorSpaces(): NSNumber;
    setSupportedColorSpaces(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624571-videohdrsupported
    videoHDRSupported(): boolean;
    setVideoHDRSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/2865757-unsupportedcaptureoutputclasses
    unsupportedCaptureOutputClasses(): Class;
    setUnsupportedCaptureOutputClasses(value: Class): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624620-highresolutionstillimagedimensio
    highResolutionStillImageDimensions(): CMVideoDimensions;
    setHighResolutionStillImageDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624597-videobinned
    videoBinned(): boolean;
    setVideoBinned(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3153006-multicamsupported
    multiCamSupported(): boolean;
    setMultiCamSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3153005-highestphotoqualitysupported
    highestPhotoQualitySupported(): boolean;
    setHighestPhotoQualitySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1387592-videosupportedframerateranges
    videoSupportedFrameRateRanges(): AVFrameRateRange;
    setVideoSupportedFrameRateRanges(value: AVFrameRateRange): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3194616-geometricdistortioncorrectedvide
    geometricDistortionCorrectedVideoFieldOfView(): number;
    setGeometricDistortionCorrectedVideoFieldOfView(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3375757-globaltonemappingsupported
    globalToneMappingSupported(): boolean;
    setGlobalToneMappingSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624587-isvideostabilizationmodesupporte
    isVideoStabilizationModeSupported(videoStabilizationMode: AVCaptureVideoStabilizationMode):boolean;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624634-videostabilizationsupported
    videoStabilizationSupported(): boolean;
    setVideoStabilizationSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3751763-highphotoqualitysupported
    highPhotoQualitySupported(): boolean;
    setHighPhotoQualitySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3738420-centerstagesupported
    centerStageSupported(): boolean;
    setCenterStageSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3738421-videoframeraterangeforcenterstag
    videoFrameRateRangeForCenterStage(): AVFrameRateRange;
    setVideoFrameRateRangeForCenterStage(value: AVFrameRateRange): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3738423-videominzoomfactorforcenterstage
    videoMinZoomFactorForCenterStage(): CGFloat;
    setVideoMinZoomFactorForCenterStage(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3738422-videomaxzoomfactorforcenterstage
    videoMaxZoomFactorForCenterStage(): CGFloat;
    setVideoMaxZoomFactorForCenterStage(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624592-minexposureduration
    minExposureDuration(): CMTime;
    setMinExposureDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624582-maxexposureduration
    maxExposureDuration(): CMTime;
    setMaxExposureDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624603-miniso
    minISO(): number;
    setMinISO(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624601-maxiso
    maxISO(): number;
    setMaxISO(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624600-autofocussystem
    autoFocusSystem(): AVCaptureAutoFocusSystem;
    setAutoFocusSystem(value: AVCaptureAutoFocusSystem): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624569-videofieldofview
    videoFieldOfView(): number;
    setVideoFieldOfView(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624635-videomaxzoomfactor
    videoMaxZoomFactor(): CGFloat;
    setVideoMaxZoomFactor(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/1624638-videozoomfactorupscalethreshold
    videoZoomFactorUpscaleThreshold(): CGFloat;
    setVideoZoomFactorUpscaleThreshold(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3875312-portraiteffectsupported
    portraitEffectSupported(): boolean;
    setPortraitEffectSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/3875313-videoframeraterangeforportraitef
    videoFrameRateRangeForPortraitEffect(): AVFrameRateRange;
    setVideoFrameRateRangeForPortraitEffect(value: AVFrameRateRange): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/2865753-supporteddepthdataformats
    supportedDepthDataFormats(): AVCaptureDeviceFormat;
    setSupportedDepthDataFormats(value: AVCaptureDeviceFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/2977521-portraiteffectsmattestillimagede
    portraitEffectsMatteStillImageDeliverySupported(): boolean;
    setPortraitEffectsMatteStillImageDeliverySupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/2865752-videominzoomfactorfordepthdatade
    videoMinZoomFactorForDepthDataDelivery(): CGFloat;
    setVideoMinZoomFactorForDepthDataDelivery(value: CGFloat): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/2865756-videomaxzoomfactorfordepthdatade
    videoMaxZoomFactorForDepthDataDelivery(): CGFloat;
    setVideoMaxZoomFactorForDepthDataDelivery(value: CGFloat): void;
    //
    alloc():AVCaptureDeviceFormat;
    //
    init():AVCaptureDeviceFormat;
  }
}

declare const AVCaptureDeviceFormat: cocoascript.AVCaptureDeviceFormat;
// https://developer.apple.com/documentation/avfoundation/avcaptureexposuretargetbiascurrent
declare const AVCaptureExposureTargetBiasCurrent: number;
// https://developer.apple.com/documentation/avfoundation/avcaptureexposuredurationcurrent
declare const AVCaptureExposureDurationCurrent: cocoascript.CMTime;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptureexposuremode
  type AVCaptureExposureMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturefocusmode
  type AVCaptureFocusMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptureautofocusrangerestriction
  type AVCaptureAutoFocusRangeRestriction = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptureflashmode
  type AVCaptureFlashMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avcapturemaxavailabletorchlevel
declare const AVCaptureMaxAvailableTorchLevel: number;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturetorchmode
  type AVCaptureTorchMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturedevicetransportcontrolsplaybackmode
  type AVCaptureDeviceTransportControlsPlaybackMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturedevicetransportcontrolsspeed
  type AVCaptureDeviceTransportControlsSpeed = number;
}
// https://developer.apple.com/documentation/avfoundation/avcapturelenspositioncurrent
declare const AVCaptureLensPositionCurrent: number;
// https://developer.apple.com/documentation/avfoundation/avcapturewhitebalancegainscurrent
declare const AVCaptureWhiteBalanceGainsCurrent: cocoascript.AVCaptureWhiteBalanceGains;
declare namespace cocoascript {
  interface AVCaptureWhiteBalanceGains {
  }
}
declare namespace cocoascript {
  interface AVCaptureWhiteBalanceChromaticityValues {
  }
}
declare namespace cocoascript {
  interface AVCaptureWhiteBalanceTemperatureAndTintValues {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturewhitebalancemode
  type AVCaptureWhiteBalanceMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avcaptureisocurrent
declare const AVCaptureISOCurrent: number;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturecolorspace
  type AVCaptureColorSpace = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptureprimaryconstituentdeviceswitchingbehavior
  type AVCapturePrimaryConstituentDeviceSwitchingBehavior = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions
  type AVCapturePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturemicrophonemode
  type AVCaptureMicrophoneMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturesystemuserinterface
  type AVCaptureSystemUserInterface = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpresetphoto
declare const AVCaptureSessionPresetPhoto: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avvideocodectypehevc
declare const AVVideoCodecTypeHEVC: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  /**
   * Information about the camera characteristics used to capture images and depth data.
   * https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata
   */
  interface AVCameraCalibrationData extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/2881135-intrinsicmatrix
    intrinsicMatrix(): matrix_float3x3;
    setIntrinsicMatrix(value: matrix_float3x3): void;
    // https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/2881134-intrinsicmatrixreferencedimensio
    intrinsicMatrixReferenceDimensions(): CGSize;
    setIntrinsicMatrixReferenceDimensions(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/2881130-extrinsicmatrix
    extrinsicMatrix(): matrix_float4x3;
    setExtrinsicMatrix(value: matrix_float4x3): void;
    // https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/2881128-pixelsize
    pixelSize(): number;
    setPixelSize(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/2881129-lensdistortionlookuptable
    lensDistortionLookupTable(): NSData;
    setLensDistortionLookupTable(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/2881132-inverselensdistortionlookuptable
    inverseLensDistortionLookupTable(): NSData;
    setInverseLensDistortionLookupTable(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avcameracalibrationdata/2881131-lensdistortioncenter
    lensDistortionCenter(): CGPoint;
    setLensDistortionCenter(value: CGPoint): void;
    //
    alloc():AVCameraCalibrationData;
    //
    init():AVCameraCalibrationData;
  }
}

declare const AVCameraCalibrationData: cocoascript.AVCameraCalibrationData;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturelensstabilizationstatus
  type AVCaptureLensStabilizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A description of the features and settings in use for an in-progress or complete photo capture request.
   * https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings
   */
  interface AVCaptureResolvedPhotoSettings extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/1648656-uniqueid
    uniqueID(): number;
    setUniqueID(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/2873973-expectedphotocount
    expectedPhotoCount(): NSUInteger;
    setExpectedPhotoCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/1648693-flashenabled
    flashEnabled(): boolean;
    setFlashEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/2968221-redeyereductionenabled
    redEyeReductionEnabled(): boolean;
    setRedEyeReductionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/3192194-virtualdevicefusionenabled
    virtualDeviceFusionEnabled(): boolean;
    setVirtualDeviceFusionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/3566333-contentawaredistortioncorrection
    contentAwareDistortionCorrectionEnabled(): boolean;
    setContentAwareDistortionCorrectionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/1648771-stillimagestabilizationenabled
    stillImageStabilizationEnabled(): boolean;
    setStillImageStabilizationEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/2726863-dualcamerafusionenabled
    dualCameraFusionEnabled(): boolean;
    setDualCameraFusionEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/1648782-photodimensions
    photoDimensions(): CMVideoDimensions;
    setPhotoDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/1648762-rawphotodimensions
    rawPhotoDimensions(): CMVideoDimensions;
    setRawPhotoDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/1648753-previewdimensions
    previewDimensions(): CMVideoDimensions;
    setPreviewDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/2873967-embeddedthumbnaildimensions
    embeddedThumbnailDimensions(): CMVideoDimensions;
    setEmbeddedThumbnailDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/3019551-rawembeddedthumbnaildimensions
    rawEmbeddedThumbnailDimensions(): CMVideoDimensions;
    setRawEmbeddedThumbnailDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/1648781-livephotomoviedimensions
    livePhotoMovieDimensions(): CMVideoDimensions;
    setLivePhotoMovieDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/2977533-portraiteffectsmattedimensions
    portraitEffectsMatteDimensions(): CMVideoDimensions;
    setPortraitEffectsMatteDimensions(value: CMVideoDimensions): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/3153015-dimensionsforsemanticsegmentatio
    dimensionsForSemanticSegmentationMatteOfType(semanticSegmentationMatteType: AVSemanticSegmentationMatteType):CMVideoDimensions;
    // https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/3183001-photoprocessingtimerange
    photoProcessingTimeRange(): CMTimeRange;
    setPhotoProcessingTimeRange(value: CMTimeRange): void;
    //
    alloc():AVCaptureResolvedPhotoSettings;
    //
    init():AVCaptureResolvedPhotoSettings;
  }
}

declare const AVCaptureResolvedPhotoSettings: cocoascript.AVCaptureResolvedPhotoSettings;
declare namespace cocoascript {
  /**
   * A specification of the features and settings to use for a photo capture request that captures multiple images with varied settings.
   * https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings
   */
  interface AVCapturePhotoBracketSettings extends AVCapturePhotoSettings {
    // https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings/2873908-photobracketsettingswithrawpixel
    photoBracketSettingsWithRawPixelFormatType_rawFileType_processedFormat_processedFileType_bracketedSettings(rawPixelFormatType: any, rawFileType: AVFileType, processedFormat: AVCapturePhotoBracketSettings, processedFileType: AVFileType, bracketedSettings: AVCaptureBracketedStillImageSettings):AVCapturePhotoBracketSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings/2127694-photobracketsettingswithrawpixel
    photoBracketSettingsWithRawPixelFormatType_processedFormat_bracketedSettings(rawPixelFormatType: any, processedFormat: AVCapturePhotoBracketSettings, bracketedSettings: AVCaptureBracketedStillImageSettings):AVCapturePhotoBracketSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings/1648613-bracketedsettings
    bracketedSettings(): AVCaptureBracketedStillImageSettings;
    setBracketedSettings(value: AVCaptureBracketedStillImageSettings): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings/1648660-lensstabilizationenabled
    lensStabilizationEnabled(): boolean;
    setLensStabilizationEnabled(value: boolean): void;
    //
    alloc():AVCapturePhotoBracketSettings;
    //
    init():AVCapturePhotoBracketSettings;
  }
}

declare const AVCapturePhotoBracketSettings: cocoascript.AVCapturePhotoBracketSettings;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturephotoqualityprioritization
  type AVCapturePhotoQualityPrioritization = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltindualcamera
declare const AVCaptureDeviceTypeBuiltInDualCamera: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltintruedepthcamera
declare const AVCaptureDeviceTypeBuiltInTrueDepthCamera: cocoascript.AVCaptureDeviceType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avdepthdataaccuracy
  type AVDepthDataAccuracy = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avdepthdataquality
  type AVDepthDataQuality = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmattetype
  type AVSemanticSegmentationMatteType = cocoascript.NSString;
}
// https://developer.apple.com/documentation/avfoundation/avvideocodectypeh264
declare const AVVideoCodecTypeH264: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avvideocodectype
  type AVVideoCodecType = cocoascript.NSString;
}
// https://developer.apple.com/documentation/avfoundation/avvideocodectypejpeg
declare const AVVideoCodecTypeJPEG: cocoascript.AVVideoCodecType;
// https://developer.apple.com/documentation/avfoundation/avvideocodectypeappleprores422
declare const AVVideoCodecTypeAppleProRes422: cocoascript.AVVideoCodecType;
// https://developer.apple.com/documentation/avfoundation/avvideocodectypeappleprores4444
declare const AVVideoCodecTypeAppleProRes4444: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  /**
   * A specific stream of data provided by a capture input.
   * https://developer.apple.com/documentation/avfoundation/avcaptureinputport
   */
  interface AVCaptureInputPort extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptureinputport/1386833-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureinputport/1387702-input
    input(): AVCaptureInput;
    setInput(value: AVCaptureInput): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureinputport/1387120-mediatype
    mediaType(): AVMediaType;
    setMediaType(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureinputport/1385890-formatdescription
    formatDescription(): CMFormatDescriptionRef;
    setFormatDescription(value: CMFormatDescriptionRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureinputport/1385908-clock
    clock(): CMClockRef;
    setClock(value: CMClockRef): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureinputport/3114575-sourcedevicetype
    sourceDeviceType(): AVCaptureDeviceType;
    setSourceDeviceType(value: AVCaptureDeviceType): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptureinputport/3114574-sourcedeviceposition
    sourceDevicePosition(): AVCaptureDevicePosition;
    setSourceDevicePosition(value: AVCaptureDevicePosition): void;
    //
    alloc():AVCaptureInputPort;
    //
    init():AVCaptureInputPort;
  }
}

declare const AVCaptureInputPort: cocoascript.AVCaptureInputPort;
// https://developer.apple.com/documentation/avfoundation/avcaptureinputportformatdescriptiondidchangenotification
declare const AVCaptureInputPortFormatDescriptionDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmetadataobjecttype
  type AVMetadataObjectType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptureoutputdatadroppedreason
  type AVCaptureOutputDataDroppedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturevideoorientation
  type AVCaptureVideoOrientation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avvideofieldmode
  type AVVideoFieldMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avplayeravailablehdrmodesdidchangenotification
declare const AVPlayerAvailableHDRModesDidChangeNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avplayeritemtimejumpednotification
declare const AVPlayerItemTimeJumpedNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avroutedetectormultipleroutesdetecteddidchangenotification
declare const AVRouteDetectorMultipleRoutesDetectedDidChangeNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorendereroutputconfigurationdidchangenotification
declare const AVSampleBufferAudioRendererOutputConfigurationDidChangeNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorendererwasflushedautomaticallynotification
declare const AVSampleBufferAudioRendererWasFlushedAutomaticallyNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayeroutputobscuredduetoinsufficientexternalprotectiondidchangenotification
declare const AVSampleBufferDisplayLayerOutputObscuredDueToInsufficientExternalProtectionDidChangeNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayerrequiresflushtoresumedecodingdidchangenotification
declare const AVSampleBufferDisplayLayerRequiresFlushToResumeDecodingDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * An object that writes media data to a container file.
   * https://developer.apple.com/documentation/avfoundation/avassetwriter
   */
  interface AVAssetWriter extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1426663-assetwriterwithurl
    assetWriterWithURL_fileType_error(outputURL: NSURL, outputFileType: AVFileType, outError: NSError):AVAssetWriter;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1389201-initwithurl
    initWithURL_fileType_error(outputURL: NSURL, outputFileType: AVFileType, outError: NSError):AVAssetWriter;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3563935-initwithcontenttype
    initWithContentType(outputContentType: UTType):AVAssetWriter;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1388264-inputs
    inputs(): AVAssetWriterInput;
    setInputs(value: AVAssetWriterInput): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1388730-availablemediatypes
    availableMediaTypes(): AVMediaType;
    setAvailableMediaTypes(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1388842-canapplyoutputsettings
    canApplyOutputSettings_forMediaType(outputSettings: AVAssetWriter, mediaType: AVMediaType):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1387863-canaddinput
    canAddInput(input: AVAssetWriterInput):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1390389-addinput
    addInput(input: AVAssetWriterInput):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1388432-inputgroups
    inputGroups(): AVAssetWriterInputGroup;
    setInputGroups(value: AVAssetWriterInputGroup): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1386698-canaddinputgroup
    canAddInputGroup(inputGroup: AVAssetWriterInputGroup):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1385643-addinputgroup
    addInputGroup(inputGroup: AVAssetWriterInputGroup):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1387974-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1389811-shouldoptimizefornetworkuse
    shouldOptimizeForNetworkUse(): boolean;
    setShouldOptimizeForNetworkUse(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1387445-directoryfortemporaryfiles
    directoryForTemporaryFiles(): NSURL;
    setDirectoryForTemporaryFiles(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1387469-moviefragmentinterval
    movieFragmentInterval(): CMTime;
    setMovieFragmentInterval(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3577532-initialmoviefragmentsequencenumb
    initialMovieFragmentSequenceNumber(): NSInteger;
    setInitialMovieFragmentSequenceNumber(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3626025-producescombinablefragments
    producesCombinableFragments(): boolean;
    setProducesCombinableFragments(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1388408-overalldurationhint
    overallDurationHint(): CMTime;
    setOverallDurationHint(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1386762-movietimescale
    movieTimeScale(): CMTimeScale;
    setMovieTimeScale(value: CMTimeScale): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1386724-startwriting
    startWriting():boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1389908-startsessionatsourcetime
    startSessionAtSourceTime(startTime: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1389921-endsessionatsourcetime
    endSessionAtSourceTime(endTime: CMTime):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1390432-finishwritingwithcompletionhandl
    finishWritingWithCompletionHandler(handler: void):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1387234-cancelwriting
    cancelWriting():void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1426644-finishwriting
    finishWriting():boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1389335-status
    status(): AVAssetWriterStatus;
    setStatus(value: AVAssetWriterStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1390725-error
    error(): NSError;
    setError(value: NSError): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3546585-delegate
    delegate(): AVAssetWriterDelegate;
    setDelegate(value: AVAssetWriterDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3546590-preferredoutputsegmentinterval
    preferredOutputSegmentInterval(): CMTime;
    setPreferredOutputSegmentInterval(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3546588-initialsegmentstarttime
    initialSegmentStartTime(): CMTime;
    setInitialSegmentStartTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3546589-outputfiletypeprofile
    outputFileTypeProfile(): AVFileTypeProfile;
    setOutputFileTypeProfile(value: AVFileTypeProfile): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/3546586-flushsegment
    flushSegment():void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1387731-outputurl
    outputURL(): NSURL;
    setOutputURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriter/1387349-outputfiletype
    outputFileType(): AVFileType;
    setOutputFileType(value: AVFileType): void;
    //
    alloc():AVAssetWriter;
    //
    init():AVAssetWriter;
  }
}

declare const AVAssetWriter: cocoascript.AVAssetWriter;
declare namespace cocoascript {
  /**
   * An object that provides information about segment data.
   * https://developer.apple.com/documentation/avfoundation/avassetsegmentreport
   */
  interface AVAssetSegmentReport extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetsegmentreport/3546570-segmenttype
    segmentType(): AVAssetSegmentType;
    setSegmentType(value: AVAssetSegmentType): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmentreport/3546571-trackreports
    trackReports(): AVAssetSegmentTrackReport;
    setTrackReports(value: AVAssetSegmentTrackReport): void;
    //
    alloc():AVAssetSegmentReport;
    //
    init():AVAssetSegmentReport;
  }
}

declare const AVAssetSegmentReport: cocoascript.AVAssetSegmentReport;
declare namespace cocoascript {
  /**
   * Methods you can implement to provide alternative attributed-string output.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutputpushdelegate
   */
  interface AVPlayerItemLegibleOutputPushDelegate extends AVPlayerItemOutputPushDelegate {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutputpushdelegate/1386790-legibleoutput
    legibleOutput_didOutputAttributedStrings_nativeSampleBuffers_forItemTime(output: AVPlayerItemLegibleOutput, strings: NSAttributedString, nativeSamples: NSArray, itemTime: CMTime):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to provide additional metadata.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate
   */
  interface AVPlayerItemMetadataOutputPushDelegate extends AVPlayerItemOutputPushDelegate {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate/1388071-metadataoutput
    metadataOutput_didOutputTimedMetadataGroups_fromPlayerItemTrack(output: AVPlayerItemMetadataOutput, groups: AVTimedMetadataGroup, track: AVPlayerItemTrack):void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestretryreason
  type AVContentKeyRequestRetryReason = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that reads video frames composited from the frames in one or more tracks of a reader's assets.
   * https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput
   */
  interface AVAssetReaderVideoCompositionOutput extends AVAssetReaderOutput {
    // https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/1490331-assetreadervideocompositionoutpu
    assetReaderVideoCompositionOutputWithVideoTracks_videoSettings(videoTracks: AVAssetTrack, videoSettings: AVAssetReaderVideoCompositionOutput):AVAssetReaderVideoCompositionOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/1386676-initwithvideotracks
    initWithVideoTracks_videoSettings(videoTracks: AVAssetTrack, videoSettings: AVAssetReaderVideoCompositionOutput):AVAssetReaderVideoCompositionOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/1388927-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(value: AVVideoComposition): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/1388310-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(value: AVVideoCompositing): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/1389247-videosettings
    videoSettings(): id;
    setVideoSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/1389000-videotracks
    videoTracks(): AVAssetTrack;
    setVideoTracks(value: AVAssetTrack): void;
    //
    alloc():AVAssetReaderVideoCompositionOutput;
    //
    init():AVAssetReaderVideoCompositionOutput;
  }
}

declare const AVAssetReaderVideoCompositionOutput: cocoascript.AVAssetReaderVideoCompositionOutput;
declare namespace cocoascript {
  /**
   * An object that defines the context in which custom compositors render pixel buffers.
   * https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext
   */
  interface AVVideoCompositionRenderContext extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1386802-newpixelbuffer
    newPixelBuffer():CVPixelBufferRef;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1390647-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(value: AVVideoComposition): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1388758-highqualityrendering
    highQualityRendering(): boolean;
    setHighQualityRendering(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1387408-renderscale
    renderScale(): number;
    setRenderScale(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1389831-rendertransform
    renderTransform(): CGAffineTransform;
    setRenderTransform(value: CGAffineTransform): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1389718-size
    size(): CGSize;
    setSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1387026-edgewidths
    edgeWidths(): AVEdgeWidths;
    setEdgeWidths(value: AVEdgeWidths): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/1389800-pixelaspectratio
    pixelAspectRatio(): AVPixelAspectRatio;
    setPixelAspectRatio(value: AVPixelAspectRatio): void;
    //
    alloc():AVVideoCompositionRenderContext;
    //
    init():AVVideoCompositionRenderContext;
  }
}

declare const AVVideoCompositionRenderContext: cocoascript.AVVideoCompositionRenderContext;
declare namespace cocoascript {
  /**
   * Information about upcoming composition requests, such as composition start time and end time.
   * https://developer.apple.com/documentation/avfoundation/avvideocompositionrenderhint
   */
  interface AVVideoCompositionRenderHint extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrenderhint/3227889-startcompositiontime
    startCompositionTime(): CMTime;
    setStartCompositionTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avvideocompositionrenderhint/3227888-endcompositiontime
    endCompositionTime(): CMTime;
    setEndCompositionTime(value: CMTime): void;
    //
    alloc():AVVideoCompositionRenderHint;
    //
    init():AVVideoCompositionRenderHint;
  }
}

declare const AVVideoCompositionRenderHint: cocoascript.AVVideoCompositionRenderHint;
declare namespace cocoascript {
  /**
   * An object that reads caption group objects from an asset track that contains timed text.
   * https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor
   */
  interface AVAssetReaderOutputCaptionAdaptor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/3752797-initwithassetreadertrackoutput
    initWithAssetReaderTrackOutput(trackOutput: AVAssetReaderTrackOutput):AVAssetReaderOutputCaptionAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/3752794-assetreaderoutputcaptionadaptorw
    assetReaderOutputCaptionAdaptorWithAssetReaderTrackOutput(trackOutput: AVAssetReaderTrackOutput):AVAssetReaderOutputCaptionAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/3752795-assetreadertrackoutput
    assetReaderTrackOutput(): AVAssetReaderTrackOutput;
    setAssetReaderTrackOutput(value: AVAssetReaderTrackOutput): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/3752799-validationdelegate
    validationDelegate(): AVAssetReaderCaptionValidationHandling;
    setValidationDelegate(value: AVAssetReaderCaptionValidationHandling): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/3752798-nextcaptiongroup
    nextCaptionGroup():AVCaptionGroup;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/3752796-captionsnotpresentinpreviousgrou
    captionsNotPresentInPreviousGroupsInCaptionGroup(captionGroup: AVCaptionGroup):AVCaption;
    //
    alloc():AVAssetReaderOutputCaptionAdaptor;
    //
    init():AVAssetReaderOutputCaptionAdaptor;
  }
}

declare const AVAssetReaderOutputCaptionAdaptor: cocoascript.AVAssetReaderOutputCaptionAdaptor;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmetadatakeyspace
  type AVMetadataKeySpace = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmetadatakey
  type AVMetadataKey = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that responds to a request to load the value of a metadata item.
   * https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest
   */
  interface AVMetadataItemValueRequest extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest/1386820-respondwithvalue
    respondWithValue(value: NSCopying):void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest/1390783-respondwitherror
    respondWithError(error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest/1388069-metadataitem
    metadataItem(): AVMetadataItem;
    setMetadataItem(value: AVMetadataItem): void;
    //
    alloc():AVMetadataItemValueRequest;
    //
    init():AVMetadataItemValueRequest;
  }
}

declare const AVMetadataItemValueRequest: cocoascript.AVMetadataItemValueRequest;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmetadataidentifier
  type AVMetadataIdentifier = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmetadataextraattributekey
  type AVMetadataExtraAttributeKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmoviewritingoptions
  type AVMovieWritingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm
  type AVAudioTimePitchAlgorithm = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that represents a segment of an asset track that consists of a time mapping from the source to the asset track timeline.
   * https://developer.apple.com/documentation/avfoundation/avassettracksegment
   */
  interface AVAssetTrackSegment extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassettracksegment/1385714-empty
    empty(): boolean;
    setEmpty(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassettracksegment/1390557-timemapping
    timeMapping(): CMTimeMapping;
    setTimeMapping(value: CMTimeMapping): void;
    //
    alloc():AVAssetTrackSegment;
    //
    init():AVAssetTrackSegment;
  }
}

declare const AVAssetTrackSegment: cocoascript.AVAssetTrackSegment;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avtrackassociationtype
  type AVTrackAssociationType = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that represents the presentation state of an asset track that the player presents.
   * https://developer.apple.com/documentation/avfoundation/avplayeritemtrack
   */
  interface AVPlayerItemTrack extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avplayeritemtrack/1387062-enabled
    enabled(): boolean;
    setEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemtrack/1390701-assettrack
    assetTrack(): AVAssetTrack;
    setAssetTrack(value: AVAssetTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemtrack/1388956-currentvideoframerate
    currentVideoFrameRate(): number;
    setCurrentVideoFrameRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avplayeritemtrack/1388045-videofieldmode
    videoFieldMode(): string | cocoascript.NSString;
    setVideoFieldMode(value: string | cocoascript.NSString): void;
    //
    alloc():AVPlayerItemTrack;
    //
    init():AVPlayerItemTrack;
  }
}

declare const AVPlayerItemTrack: cocoascript.AVPlayerItemTrack;
// https://developer.apple.com/documentation/avfoundation/avplayeritemtrackvideofieldmodedeinterlacefields
declare const AVPlayerItemTrackVideoFieldModeDeinterlaceFields: cocoascript.NSString;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayeritemstatus
  type AVPlayerItemStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avvariantpreferences
  type AVVariantPreferences = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/avfoundation/avplayeritemmediaselectiondidchangenotification
declare const AVPlayerItemMediaSelectionDidChangeNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avplayeritemrecommendedtimeoffsetfromlivedidchangenotification
declare const AVPlayerItemRecommendedTimeOffsetFromLiveDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avvideoaperturemode
  type AVVideoApertureMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiospatializationformats
  type AVAudioSpatializationFormats = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcontentauthorizationstatus
  type AVContentAuthorizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that provides the configuration for a download task.
   * https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration
   */
  interface AVAssetDownloadConfiguration extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/3750220-downloadconfigurationwithasset
    downloadConfigurationWithAsset_title(asset: AVURLAsset, title: string | cocoascript.NSString):AVAssetDownloadConfiguration;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/3750218-artworkdata
    artworkData(): NSData;
    setArtworkData(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/3750222-primarycontentconfiguration
    primaryContentConfiguration(): AVAssetDownloadContentConfiguration;
    setPrimaryContentConfiguration(value: AVAssetDownloadContentConfiguration): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/3750219-auxiliarycontentconfigurations
    auxiliaryContentConfigurations(): AVAssetDownloadContentConfiguration;
    setAuxiliaryContentConfigurations(value: AVAssetDownloadContentConfiguration): void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration/3750221-optimizesauxiliarycontentconfigu
    optimizesAuxiliaryContentConfigurations(): boolean;
    setOptimizesAuxiliaryContentConfigurations(value: boolean): void;
    //
    alloc():AVAssetDownloadConfiguration;
    //
    init():AVAssetDownloadConfiguration;
  }
}

declare const AVAssetDownloadConfiguration: cocoascript.AVAssetDownloadConfiguration;
declare namespace cocoascript {
  /**
   * An object that represents a bit rate variant.
   * https://developer.apple.com/documentation/avfoundation/avassetvariant
   */
  interface AVAssetVariant extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetvariant/3746543-audioattributes
    audioAttributes(): AVAssetVariantAudioAttributes;
    setAudioAttributes(value: AVAssetVariantAudioAttributes): void;
    // https://developer.apple.com/documentation/avfoundation/avassetvariant/3746546-videoattributes
    videoAttributes(): AVAssetVariantVideoAttributes;
    setVideoAttributes(value: AVAssetVariantVideoAttributes): void;
    // https://developer.apple.com/documentation/avfoundation/avassetvariant/3746544-averagebitrate
    averageBitRate(): number;
    setAverageBitRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetvariant/3746545-peakbitrate
    peakBitRate(): number;
    setPeakBitRate(value: number): void;
    //
    alloc():AVAssetVariant;
    //
    init():AVAssetVariant;
  }
}

declare const AVAssetVariant: cocoascript.AVAssetVariant;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionfontstyle
  type AVCaptionFontStyle = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionfontweight
  type AVCaptionFontWeight = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptiondecoration
  type AVCaptionDecoration = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptiontextalignment
  type AVCaptionTextAlignment = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionanimation
  type AVCaptionAnimation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptiontextcombine
  type AVCaptionTextCombine = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A mutable caption subclass that you use to create new captions.
   * https://developer.apple.com/documentation/avfoundation/avmutablecaption
   */
  interface AVMutableCaption extends AVCaption {
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752915-text
    text(): string | cocoascript.NSString;
    setText(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752917-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752900-region
    region(): AVCaptionRegion;
    setRegion(value: AVCaptionRegion): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752910-setfontstyle
    setFontStyle_inRange(fontStyle: AVCaptionFontStyle, range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752903-removefontstyleinrange
    removeFontStyleInRange(range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752911-setfontweight
    setFontWeight_inRange(fontWeight: AVCaptionFontWeight, range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752904-removefontweightinrange
    removeFontWeightInRange(range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752909-setdecoration
    setDecoration_inRange(decoration: AVCaptionDecoration, range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752902-removedecorationinrange
    removeDecorationInRange(range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752913-settextcolor
    setTextColor_inRange(color: CGColorRef, range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752906-removetextcolorinrange
    removeTextColorInRange(range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752908-setbackgroundcolor
    setBackgroundColor_inRange(color: CGColorRef, range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752901-removebackgroundcolorinrange
    removeBackgroundColorInRange(range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752916-textalignment
    textAlignment(): AVCaptionTextAlignment;
    setTextAlignment(value: AVCaptionTextAlignment): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752899-animation
    animation(): AVCaptionAnimation;
    setAnimation(value: AVCaptionAnimation): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752912-setruby
    setRuby_inRange(ruby: AVCaptionRuby, range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752905-removerubyinrange
    removeRubyInRange(range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752914-settextcombine
    setTextCombine_inRange(textCombine: AVCaptionTextCombine, range: NSRange):void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaption/3752907-removetextcombineinrange
    removeTextCombineInRange(range: NSRange):void;
    //
    alloc():AVMutableCaption;
    //
    init():AVMutableCaption;
  }
}

declare const AVMutableCaption: cocoascript.AVMutableCaption;
declare namespace cocoascript {
  interface AVCaptionDimension {
  }
}
declare namespace cocoascript {
  interface AVCaptionPoint {
  }
}
declare namespace cocoascript {
  interface AVCaptionSize {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionregiondisplayalignment
  type AVCaptionRegionDisplayAlignment = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionregionscroll
  type AVCaptionRegionScroll = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionregionwritingmode
  type AVCaptionRegionWritingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A mutable caption region subclass that you use to create new caption regions.
   * https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion
   */
  interface AVMutableCaptionRegion extends AVCaptionRegion {
    // https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion/3752922-init
    init():AVMutableCaptionRegion;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion/3752923-initwithidentifier
    initWithIdentifier(identifier: string | cocoascript.NSString):AVMutableCaptionRegion;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion/3857638-origin
    origin(): AVCaptionPoint;
    setOrigin(value: AVCaptionPoint): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion/3857639-size
    size(): AVCaptionSize;
    setSize(value: AVCaptionSize): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion/3752919-displayalignment
    displayAlignment(): AVCaptionRegionDisplayAlignment;
    setDisplayAlignment(value: AVCaptionRegionDisplayAlignment): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion/3752925-scroll
    scroll(): AVCaptionRegionScroll;
    setScroll(value: AVCaptionRegionScroll): void;
    // https://developer.apple.com/documentation/avfoundation/avmutablecaptionregion/3752926-writingmode
    writingMode(): AVCaptionRegionWritingMode;
    setWritingMode(value: AVCaptionRegionWritingMode): void;
    //
    alloc():AVMutableCaptionRegion;
    //
    init():AVMutableCaptionRegion;
  }
}

declare const AVMutableCaptionRegion: cocoascript.AVMutableCaptionRegion;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionrubyposition
  type AVCaptionRubyPosition = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionrubyalignment
  type AVCaptionRubyAlignment = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that renders captions for display at a particular time.
   * https://developer.apple.com/documentation/avfoundation/avcaptionrenderer
   */
  interface AVCaptionRenderer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/3752970-captions
    captions(): AVCaption;
    setCaptions(value: AVCaption): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/3752968-bounds
    bounds(): CGRect;
    setBounds(value: CGRect): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/3752969-captionscenechangesinrange
    captionSceneChangesInRange(consideredTimeRange: CMTimeRange):AVCaptionRendererScene;
    // https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/3752971-renderincontext
    renderInContext_forTime(ctx: CGContextRef, time: CMTime):void;
    //
    alloc():AVCaptionRenderer;
    //
    init():AVCaptionRenderer;
  }
}

declare const AVCaptionRenderer: cocoascript.AVCaptionRenderer;
declare namespace cocoascript {
  /**
   * A protocol defining 3D mixing properties.
   * https://developer.apple.com/documentation/avfoundation/avaudio3dmixing
   */
  interface AVAudio3DMixing extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/1387690-obstruction
    obstruction(): number;
    setObstruction(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/1389498-occlusion
    occlusion(): number;
    setOcclusion(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/1390834-position
    position(): AVAudio3DPoint;
    setPosition(value: AVAudio3DPoint): void;
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/1388224-rate
    rate(): number;
    setRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/1386560-renderingalgorithm
    renderingAlgorithm(): AVAudio3DMixingRenderingAlgorithm;
    setRenderingAlgorithm(value: AVAudio3DMixingRenderingAlgorithm): void;
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/1388665-reverbblend
    reverbBlend(): number;
    setReverbBlend(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/3230587-pointsourceinheadmode
    pointSourceInHeadMode(): AVAudio3DMixingPointSourceInHeadMode;
    setPointSourceInHeadMode(value: AVAudio3DMixingPointSourceInHeadMode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudio3dmixing/3230588-sourcemode
    sourceMode(): AVAudio3DMixingSourceMode;
    setSourceMode(value: AVAudio3DMixingSourceMode): void;
  }
}
declare namespace cocoascript {
  /**
   * A reader object used to obtain the media data of an asset, either file-based or consisting of an assemblage of media data from multiple sources.
   * https://developer.apple.com/documentation/avfoundation/avassetreader
   */
  interface AVAssetReader extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1385593-initwithasset
    initWithAsset_error(asset: AVAsset, outError: NSError):AVAssetReader;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1420148-assetreaderwithasset
    assetReaderWithAsset_error(asset: AVAsset, outError: NSError):AVAssetReader;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1387132-outputs
    outputs(): AVAssetReaderOutput;
    setOutputs(value: AVAssetReaderOutput): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1390110-addoutput
    addOutput(output: AVAssetReaderOutput):void;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1387485-canaddoutput
    canAddOutput(output: AVAssetReaderOutput):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1390211-status
    status(): AVAssetReaderStatus;
    setStatus(value: AVAssetReaderStatus): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1390286-startreading
    startReading():boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1390258-cancelreading
    cancelReading():void;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1388114-error
    error(): NSError;
    setError(value: NSError): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1386400-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreader/1389128-asset
    asset(): AVAsset;
    setAsset(value: AVAsset): void;
    //
    alloc():AVAssetReader;
    //
    init():AVAssetReader;
  }
}

declare const AVAssetReader: cocoascript.AVAssetReader;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avkeyvaluestatus
  type AVKeyValueStatus = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avmetadataformathlsmetadata
declare const AVMetadataFormatHLSMetadata: cocoascript.AVMetadataFormat;
// https://developer.apple.com/documentation/avfoundation/avmetadataformatitunesmetadata
declare const AVMetadataFormatiTunesMetadata: cocoascript.AVMetadataFormat;
// https://developer.apple.com/documentation/avfoundation/avmetadataformatid3metadata
declare const AVMetadataFormatID3Metadata: cocoascript.AVMetadataFormat;
// https://developer.apple.com/documentation/avfoundation/avmetadataformatisouserdata
declare const AVMetadataFormatISOUserData: cocoascript.AVMetadataFormat;
// https://developer.apple.com/documentation/avfoundation/avmetadataformatquicktimemetadata
declare const AVMetadataFormatQuickTimeMetadata: cocoascript.AVMetadataFormat;
// https://developer.apple.com/documentation/avfoundation/avmetadataformatquicktimeuserdata
declare const AVMetadataFormatQuickTimeUserData: cocoascript.AVMetadataFormat;
// https://developer.apple.com/documentation/avfoundation/avmetadataformatunknown
declare const AVMetadataFormatUnknown: cocoascript.AVMetadataFormat;
// https://developer.apple.com/documentation/avfoundation/avfiletypequicktimemovie
declare const AVFileTypeQuickTimeMovie: cocoascript.AVFileType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetexportsessionstatus
  type AVAssetExportSessionStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetimagegeneratoraperturemode
  type AVAssetImageGeneratorApertureMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetimagegeneratorcompletionhandler
  type AVAssetImageGeneratorCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetimagegeneratorresult
  type AVAssetImageGeneratorResult = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An abstract class that defines an interface for reading a single collection of samples of a common media type from an asset reader object.
   * https://developer.apple.com/documentation/avfoundation/avassetreaderoutput
   */
  interface AVAssetReaderOutput extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/1385732-copynextsamplebuffer
    copyNextSampleBuffer():CMSampleBufferRef;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/1389189-alwayscopiessampledata
    alwaysCopiesSampleData(): boolean;
    setAlwaysCopiesSampleData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/1390880-mediatype
    mediaType(): AVMediaType;
    setMediaType(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/1386974-markconfigurationasfinal
    markConfigurationAsFinal():void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/1388890-resetforreadingtimeranges
    resetForReadingTimeRanges(timeRanges: NSValue):void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/1387927-supportsrandomaccess
    supportsRandomAccess(): boolean;
    setSupportsRandomAccess(value: boolean): void;
    //
    alloc():AVAssetReaderOutput;
    //
    init():AVAssetReaderOutput;
  }
}

declare const AVAssetReaderOutput: cocoascript.AVAssetReaderOutput;
declare namespace cocoascript {
  /**
   * An object that defines an interface for reading media data from a single track of an asset reader's asset.
   * https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput
   */
  interface AVAssetReaderTrackOutput extends AVAssetReaderOutput {
    // https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/1490322-assetreadertrackoutputwithtrack
    assetReaderTrackOutputWithTrack_outputSettings(track: AVAssetTrack, outputSettings: AVAssetReaderTrackOutput):AVAssetReaderTrackOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/1385807-initwithtrack
    initWithTrack_outputSettings(track: AVAssetTrack, outputSettings: AVAssetReaderTrackOutput):AVAssetReaderTrackOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/1387163-outputsettings
    outputSettings(): id;
    setOutputSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/1386921-track
    track(): AVAssetTrack;
    setTrack(value: AVAssetTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/1387851-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(value: AVAudioTimePitchAlgorithm): void;
    //
    alloc():AVAssetReaderTrackOutput;
    //
    init():AVAssetReaderTrackOutput;
  }
}

declare const AVAssetReaderTrackOutput: cocoascript.AVAssetReaderTrackOutput;
declare namespace cocoascript {
  /**
   * An object that defines an interface for reading audio samples that result from mixing the audio from one or more tracks.
   * https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput
   */
  interface AVAssetReaderAudioMixOutput extends AVAssetReaderOutput {
    // https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/1388883-initwithaudiotracks
    initWithAudioTracks_audioSettings(audioTracks: AVAssetTrack, audioSettings: AVAssetReaderAudioMixOutput):AVAssetReaderAudioMixOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/1490328-assetreaderaudiomixoutputwithaud
    assetReaderAudioMixOutputWithAudioTracks_audioSettings(audioTracks: AVAssetTrack, audioSettings: AVAssetReaderAudioMixOutput):AVAssetReaderAudioMixOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/1387074-audiomix
    audioMix(): AVAudioMix;
    setAudioMix(value: AVAudioMix): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/1388860-audiosettings
    audioSettings(): id;
    setAudioSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/1385635-audiotracks
    audioTracks(): AVAssetTrack;
    setAudioTracks(value: AVAssetTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/1388713-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(value: AVAudioTimePitchAlgorithm): void;
    //
    alloc():AVAssetReaderAudioMixOutput;
    //
    init():AVAssetReaderAudioMixOutput;
  }
}

declare const AVAssetReaderAudioMixOutput: cocoascript.AVAssetReaderAudioMixOutput;
declare namespace cocoascript {
  /**
   * An object that defines an interface for reading sample references from a single asset track.
   * https://developer.apple.com/documentation/avfoundation/avassetreadersamplereferenceoutput
   */
  interface AVAssetReaderSampleReferenceOutput extends AVAssetReaderOutput {
    // https://developer.apple.com/documentation/avfoundation/avassetreadersamplereferenceoutput/1490320-assetreadersamplereferenceoutput
    assetReaderSampleReferenceOutputWithTrack(track: AVAssetTrack):AVAssetReaderSampleReferenceOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreadersamplereferenceoutput/1387339-initwithtrack
    initWithTrack(track: AVAssetTrack):AVAssetReaderSampleReferenceOutput;
    // https://developer.apple.com/documentation/avfoundation/avassetreadersamplereferenceoutput/1390057-track
    track(): AVAssetTrack;
    setTrack(value: AVAssetTrack): void;
    //
    alloc():AVAssetReaderSampleReferenceOutput;
    //
    init():AVAssetReaderSampleReferenceOutput;
  }
}

declare const AVAssetReaderSampleReferenceOutput: cocoascript.AVAssetReaderSampleReferenceOutput;
declare namespace cocoascript {
  /**
   * An object that defines an interface for reading metadata.
   * https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor
   */
  interface AVAssetReaderOutputMetadataAdaptor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1490330-assetreaderoutputmetadataadaptor
    assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput(trackOutput: AVAssetReaderTrackOutput):AVAssetReaderOutputMetadataAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1388009-initwithassetreadertrackoutput
    initWithAssetReaderTrackOutput(trackOutput: AVAssetReaderTrackOutput):AVAssetReaderOutputMetadataAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1388330-assetreadertrackoutput
    assetReaderTrackOutput(): AVAssetReaderTrackOutput;
    setAssetReaderTrackOutput(value: AVAssetReaderTrackOutput): void;
    // https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1390008-nexttimedmetadatagroup
    nextTimedMetadataGroup():AVTimedMetadataGroup;
    //
    alloc():AVAssetReaderOutputMetadataAdaptor;
    //
    init():AVAssetReaderOutputMetadataAdaptor;
  }
}

declare const AVAssetReaderOutputMetadataAdaptor: cocoascript.AVAssetReaderOutputMetadataAdaptor;
declare namespace cocoascript {
  /**
   * An object that appends media samples to a track in an asset writer’s output file.
   * https://developer.apple.com/documentation/avfoundation/avassetwriterinput
   */
  interface AVAssetWriterInput extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1449070-assetwriterinputwithmediatype
    assetWriterInputWithMediaType_outputSettings(mediaType: AVMediaType, outputSettings: AVAssetWriterInput):AVAssetWriterInput;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1385912-initwithmediatype
    initWithMediaType_outputSettings(mediaType: AVMediaType, outputSettings: AVAssetWriterInput):AVAssetWriterInput;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1449091-assetwriterinputwithmediatype
    assetWriterInputWithMediaType_outputSettings_sourceFormatHint(mediaType: AVMediaType, outputSettings: AVAssetWriterInput, sourceFormatHint: CMFormatDescriptionRef):AVAssetWriterInput;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1389994-initwithmediatype
    initWithMediaType_outputSettings_sourceFormatHint(mediaType: AVMediaType, outputSettings: AVAssetWriterInput, sourceFormatHint: CMFormatDescriptionRef):AVAssetWriterInput;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1387437-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1390183-transform
    transform(): CGAffineTransform;
    setTransform(value: CGAffineTransform): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1389949-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1386902-mediatimescale
    mediaTimeScale(): CMTimeScale;
    setMediaTimeScale(value: CMTimeScale): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1386764-marksoutputtrackasenabled
    marksOutputTrackAsEnabled(): boolean;
    setMarksOutputTrackAsEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1388507-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1390768-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1386328-metadata
    metadata(): AVMetadataItem;
    setMetadata(value: AVMetadataItem): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1388163-preferredmediachunkalignment
    preferredMediaChunkAlignment(): NSInteger;
    setPreferredMediaChunkAlignment(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1390463-preferredmediachunkduration
    preferredMediaChunkDuration(): CMTime;
    setPreferredMediaChunkDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1386316-samplereferencebaseurl
    sampleReferenceBaseURL(): NSURL;
    setSampleReferenceBaseURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/2867633-mediadatalocation
    mediaDataLocation(): AVAssetWriterInputMediaDataLocation;
    setMediaDataLocation(value: AVAssetWriterInputMediaDataLocation): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1388292-canaddtrackassociationwithtracko
    canAddTrackAssociationWithTrackOfInput_type(input: AVAssetWriterInput, trackAssociationType: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1388347-addtrackassociationwithtrackofin
    addTrackAssociationWithTrackOfInput_type(input: AVAssetWriterInput, trackAssociationType: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1387827-expectsmediadatainrealtime
    expectsMediaDataInRealTime(): boolean;
    setExpectsMediaDataInRealTime(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1389084-readyformoremediadata
    readyForMoreMediaData(): boolean;
    setReadyForMoreMediaData(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1387508-requestmediadatawhenreadyonqueue
    requestMediaDataWhenReadyOnQueue_usingBlock(queue: dispatch_queue_t, block: void):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1389566-appendsamplebuffer
    appendSampleBuffer(sampleBuffer: CMSampleBufferRef):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1390122-markasfinished
    markAsFinished():void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1388284-canperformmultiplepasses
    canPerformMultiplePasses(): boolean;
    setCanPerformMultiplePasses(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1390627-currentpassdescription
    currentPassDescription(): AVAssetWriterInputPassDescription;
    setCurrentPassDescription(value: AVAssetWriterInputPassDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1389652-markcurrentpassasfinished
    markCurrentPassAsFinished():void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1386570-performsmultipassencodingifsuppo
    performsMultiPassEncodingIfSupported(): boolean;
    setPerformsMultiPassEncodingIfSupported(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1388489-respondtoeachpassdescriptiononqu
    respondToEachPassDescriptionOnQueue_usingBlock(queue: dispatch_queue_t, block: dispatch_block_t):void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1385565-mediatype
    mediaType(): AVMediaType;
    setMediaType(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1388406-outputsettings
    outputSettings(): id;
    setOutputSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinput/1387647-sourceformathint
    sourceFormatHint(): CMFormatDescriptionRef;
    setSourceFormatHint(value: CMFormatDescriptionRef): void;
    //
    alloc():AVAssetWriterInput;
    //
    init():AVAssetWriterInput;
  }
}

declare const AVAssetWriterInput: cocoascript.AVAssetWriterInput;
declare namespace cocoascript {
  /**
   * An object that appends video samples to an asset writer input.
   * https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor
   */
  interface AVAssetWriterInputPixelBufferAdaptor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1449096-assetwriterinputpixelbufferadapt
    assetWriterInputPixelBufferAdaptorWithAssetWriterInput_sourcePixelBufferAttributes(input: AVAssetWriterInput, sourcePixelBufferAttributes: AVAssetWriterInputPixelBufferAdaptor):AVAssetWriterInputPixelBufferAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1390639-initwithassetwriterinput
    initWithAssetWriterInput_sourcePixelBufferAttributes(input: AVAssetWriterInput, sourcePixelBufferAttributes: AVAssetWriterInputPixelBufferAdaptor):AVAssetWriterInputPixelBufferAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1388102-appendpixelbuffer
    appendPixelBuffer_withPresentationTime(pixelBuffer: CVPixelBufferRef, presentationTime: CMTime):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1389662-pixelbufferpool
    pixelBufferPool(): CVPixelBufferPoolRef;
    setPixelBufferPool(value: CVPixelBufferPoolRef): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1387829-sourcepixelbufferattributes
    sourcePixelBufferAttributes(): id;
    setSourcePixelBufferAttributes(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1387565-assetwriterinput
    assetWriterInput(): AVAssetWriterInput;
    setAssetWriterInput(value: AVAssetWriterInput): void;
    //
    alloc():AVAssetWriterInputPixelBufferAdaptor;
    //
    init():AVAssetWriterInputPixelBufferAdaptor;
  }
}

declare const AVAssetWriterInputPixelBufferAdaptor: cocoascript.AVAssetWriterInputPixelBufferAdaptor;
declare namespace cocoascript {
  /**
   * An object that appends timed metadata groups to an asset writer input.
   * https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor
   */
  interface AVAssetWriterInputMetadataAdaptor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor/1449094-assetwriterinputmetadataadaptorw
    assetWriterInputMetadataAdaptorWithAssetWriterInput(input: AVAssetWriterInput):AVAssetWriterInputMetadataAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor/1389706-initwithassetwriterinput
    initWithAssetWriterInput(input: AVAssetWriterInput):AVAssetWriterInputMetadataAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor/1389014-appendtimedmetadatagroup
    appendTimedMetadataGroup(timedMetadataGroup: AVTimedMetadataGroup):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor/1386633-assetwriterinput
    assetWriterInput(): AVAssetWriterInput;
    setAssetWriterInput(value: AVAssetWriterInput): void;
    //
    alloc():AVAssetWriterInputMetadataAdaptor;
    //
    init():AVAssetWriterInputMetadataAdaptor;
  }
}

declare const AVAssetWriterInputMetadataAdaptor: cocoascript.AVAssetWriterInputMetadataAdaptor;
declare namespace cocoascript {
  /**
   * A group of inputs with tracks that are mutually exclusive to each other for playback or processing.
   * https://developer.apple.com/documentation/avfoundation/avassetwriterinputgroup
   */
  interface AVAssetWriterInputGroup extends AVMediaSelectionGroup {
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputgroup/1426655-assetwriterinputgroupwithinputs
    assetWriterInputGroupWithInputs_defaultInput(inputs: AVAssetWriterInput, defaultInput: AVAssetWriterInput):AVAssetWriterInputGroup;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputgroup/1389502-initwithinputs
    initWithInputs_defaultInput(inputs: AVAssetWriterInput, defaultInput: AVAssetWriterInput):AVAssetWriterInputGroup;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputgroup/1388226-inputs
    inputs(): AVAssetWriterInput;
    setInputs(value: AVAssetWriterInput): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputgroup/1389698-defaultinput
    defaultInput(): AVAssetWriterInput;
    setDefaultInput(value: AVAssetWriterInput): void;
    //
    alloc():AVAssetWriterInputGroup;
    //
    init():AVAssetWriterInputGroup;
  }
}

declare const AVAssetWriterInputGroup: cocoascript.AVAssetWriterInputGroup;
declare namespace cocoascript {
  /**
   * An object that represents zero or more captions that intersect in time.
   * https://developer.apple.com/documentation/avfoundation/avcaptiongroup
   */
  interface AVCaptionGroup extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptiongroup/3752962-initwithtimerange
    initWithTimeRange(timeRange: CMTimeRange):AVCaptionGroup;
    // https://developer.apple.com/documentation/avfoundation/avcaptiongroup/3752961-initwithcaptions
    initWithCaptions_timeRange(captions: AVCaption, timeRange: CMTimeRange):AVCaptionGroup;
    // https://developer.apple.com/documentation/avfoundation/avcaptiongroup/3752960-captions
    captions(): AVCaption;
    setCaptions(value: AVCaption): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptiongroup/3752963-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    //
    alloc():AVCaptionGroup;
    //
    init():AVCaptionGroup;
  }
}

declare const AVCaptionGroup: cocoascript.AVCaptionGroup;
declare namespace cocoascript {
  /**
   * An object that analyzes the temporal overlaps of caption objects to create caption groups for each span of concurrent captions.
   * https://developer.apple.com/documentation/avfoundation/avcaptiongrouper
   */
  interface AVCaptionGrouper extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptiongrouper/3752965-addcaption
    addCaption(input: AVCaption):void;
    // https://developer.apple.com/documentation/avfoundation/avcaptiongrouper/3752966-flushaddedcaptionsintogroupsupto
    flushAddedCaptionsIntoGroupsUpToTime(upToTime: CMTime):AVCaptionGroup;
    //
    alloc():AVCaptionGrouper;
    //
    init():AVCaptionGrouper;
  }
}

declare const AVCaptionGrouper: cocoascript.AVCaptionGrouper;
declare namespace cocoascript {
  /**
   * An object that appends captions to an asset writer input.
   * https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor
   */
  interface AVAssetWriterInputCaptionAdaptor extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/3752805-initwithassetwriterinput
    initWithAssetWriterInput(input: AVAssetWriterInput):AVAssetWriterInputCaptionAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/3752804-assetwriterinputcaptionadaptorwi
    assetWriterInputCaptionAdaptorWithAssetWriterInput(input: AVAssetWriterInput):AVAssetWriterInputCaptionAdaptor;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/3752803-assetwriterinput
    assetWriterInput(): AVAssetWriterInput;
    setAssetWriterInput(value: AVAssetWriterInput): void;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/3752801-appendcaption
    appendCaption(caption: AVCaption):boolean;
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/3752802-appendcaptiongroup
    appendCaptionGroup(captionGroup: AVCaptionGroup):boolean;
    //
    alloc():AVAssetWriterInputCaptionAdaptor;
    //
    init():AVAssetWriterInputCaptionAdaptor;
  }
}

declare const AVAssetWriterInputCaptionAdaptor: cocoascript.AVAssetWriterInputCaptionAdaptor;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionsettingskey
  type AVCaptionSettingsKey = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that converts a canonical caption to a specific format.
   * https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer
   */
  interface AVCaptionFormatConformer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/3752958-initwithconversionsettings
    initWithConversionSettings(conversionSettings: AVCaptionFormatConformer):AVCaptionFormatConformer;
    // https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/3752955-captionformatconformerwithconver
    captionFormatConformerWithConversionSettings(conversionSettings: AVCaptionFormatConformer):AVCaptionFormatConformer;
    // https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/3857642-conformscaptionstotimerange
    conformsCaptionsToTimeRange(): boolean;
    setConformsCaptionsToTimeRange(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/3752956-conformedcaptionforcaption
    conformedCaptionForCaption_error(caption: AVCaption, outError: NSError):AVCaption;
    //
    alloc():AVCaptionFormatConformer;
    //
    init():AVCaptionFormatConformer;
  }
}

declare const AVCaptionFormatConformer: cocoascript.AVCaptionFormatConformer;
declare namespace cocoascript {
  /**
   * An object that validates captions for a conversion operation.
   * https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator
   */
  interface AVCaptionConversionValidator extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752937-initwithcaptions
    initWithCaptions_timeRange_conversionSettings(captions: AVCaption, timeRange: CMTimeRange, conversionSettings: AVCaptionConversionValidator):AVCaptionConversionValidator;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752935-captionconversionvalidatorwithca
    captionConversionValidatorWithCaptions_timeRange_conversionSettings(captions: AVCaption, timeRange: CMTimeRange, conversionSettings: AVCaptionConversionValidator):AVCaptionConversionValidator;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752936-captions
    captions(): AVCaption;
    setCaptions(value: AVCaption): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752940-timerange
    timeRange(): CMTimeRange;
    setTimeRange(value: CMTimeRange): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752941-validatecaptionconversionwithwar
    validateCaptionConversionWithWarningHandler(handler: AVCaptionConversionWarning):void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752942-warnings
    warnings(): AVCaptionConversionWarning;
    setWarnings(value: AVCaptionConversionWarning): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752939-stopvalidating
    stopValidating():void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/3752938-status
    status(): AVCaptionConversionValidatorStatus;
    setStatus(value: AVCaptionConversionValidatorStatus): void;
    //
    alloc():AVCaptionConversionValidator;
    //
    init():AVCaptionConversionValidator;
  }
}

declare const AVCaptionConversionValidator: cocoascript.AVCaptionConversionValidator;
// https://developer.apple.com/documentation/avfoundation/avmediatypeaudio
declare const AVMediaTypeAudio: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypeclosedcaption
declare const AVMediaTypeClosedCaption: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypedepthdata
declare const AVMediaTypeDepthData: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypemetadata
declare const AVMediaTypeMetadata: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypemetadataobject
declare const AVMediaTypeMetadataObject: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypemuxed
declare const AVMediaTypeMuxed: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypesubtitle
declare const AVMediaTypeSubtitle: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypetext
declare const AVMediaTypeText: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypetimecode
declare const AVMediaTypeTimecode: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avmediatypevideo
declare const AVMediaTypeVideo: cocoascript.AVMediaType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeapplem4v
declare const AVFileTypeAppleM4V: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicaudible
declare const AVMediaCharacteristicAudible: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristiccontainsalphachannel
declare const AVMediaCharacteristicContainsAlphaChannel: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristiccontainshdrvideo
declare const AVMediaCharacteristicContainsHDRVideo: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristiccontainsonlyforcedsubtitles
declare const AVMediaCharacteristicContainsOnlyForcedSubtitles: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicdescribesmusicandsoundforaccessibility
declare const AVMediaCharacteristicDescribesMusicAndSoundForAccessibility: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicdescribesvideoforaccessibility
declare const AVMediaCharacteristicDescribesVideoForAccessibility: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicdubbedtranslation
declare const AVMediaCharacteristicDubbedTranslation: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristiceasytoread
declare const AVMediaCharacteristicEasyToRead: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicframebased
declare const AVMediaCharacteristicFrameBased: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicisauxiliarycontent
declare const AVMediaCharacteristicIsAuxiliaryContent: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicismainprogramcontent
declare const AVMediaCharacteristicIsMainProgramContent: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicisoriginalcontent
declare const AVMediaCharacteristicIsOriginalContent: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristiclanguagetranslation
declare const AVMediaCharacteristicLanguageTranslation: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristiclegible
declare const AVMediaCharacteristicLegible: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristictranscribesspokendialogforaccessibility
declare const AVMediaCharacteristicTranscribesSpokenDialogForAccessibility: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicuseswidegamutcolorspace
declare const AVMediaCharacteristicUsesWideGamutColorSpace: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicvisual
declare const AVMediaCharacteristicVisual: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avmediacharacteristicvoiceovertranslation
declare const AVMediaCharacteristicVoiceOverTranslation: cocoascript.AVMediaCharacteristic;
// https://developer.apple.com/documentation/avfoundation/avfiletypeac3
declare const AVFileTypeAC3: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeaifc
declare const AVFileTypeAIFC: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeaiff
declare const AVFileTypeAIFF: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeamr
declare const AVFileTypeAMR: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeappleitt
declare const AVFileTypeAppleiTT: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypesunau
declare const AVFileTypeSunAU: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeavci
declare const AVFileTypeAVCI: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypecoreaudioformat
declare const AVFileTypeCoreAudioFormat: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypedng
declare const AVFileTypeDNG: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeenhancedac3
declare const AVFileTypeEnhancedAC3: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeheic
declare const AVFileTypeHEIC: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeheif
declare const AVFileTypeHEIF: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypejpeg
declare const AVFileTypeJPEG: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeapplem4a
declare const AVFileTypeAppleM4A: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletype3gpp
declare const AVFileType3GPP: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletype3gpp2
declare const AVFileType3GPP2: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypempeglayer3
declare const AVFileTypeMPEGLayer3: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypempeg4
declare const AVFileTypeMPEG4: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypescc
declare const AVFileTypeSCC: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypetiff
declare const AVFileTypeTIFF: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypewave
declare const AVFileTypeWAVE: cocoascript.AVFileType;
// https://developer.apple.com/documentation/avfoundation/avfiletypeprofilempeg4applehls
declare const AVFileTypeProfileMPEG4AppleHLS: cocoascript.AVFileTypeProfile;
// https://developer.apple.com/documentation/avfoundation/avfiletypeprofilempeg4cmafcompliant
declare const AVFileTypeProfileMPEG4CMAFCompliant: cocoascript.AVFileTypeProfile;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspresethevc3840x2160withalpha
declare const AVOutputSettingsPresetHEVC3840x2160WithAlpha: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspreset1920x1080
declare const AVOutputSettingsPreset1920x1080: cocoascript.AVOutputSettingsPreset;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avoutputsettingspreset
  type AVOutputSettingsPreset = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayerstatus
  type AVPlayerStatus = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avplayerratedidchangenotification
declare const AVPlayerRateDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayeraudiovisualbackgroundplaybackpolicy
  type AVPlayerAudiovisualBackgroundPlaybackPolicy = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayerwaitingreason
  type AVPlayerWaitingReason = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayertimecontrolstatus
  type AVPlayerTimeControlStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayerhdrmode
  type AVPlayerHDRMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avplayereligibleforhdrplaybackdidchangenotification
declare const AVPlayerEligibleForHDRPlaybackDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayeractionatitemend
  type AVPlayerActionAtItemEnd = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayerlooperstatus
  type AVPlayerLooperStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutputtextstylingresolution
  type AVPlayerItemLegibleOutputTextStylingResolution = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avlayervideogravity
  type AVLayerVideoGravity = cocoascript.NSString;
}
// https://developer.apple.com/documentation/avfoundation/avcoreanimationbegintimeatzero
declare const AVCoreAnimationBeginTimeAtZero: cocoascript.CFTimeInterval;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspensionreason
  type AVCoordinatedPlaybackSuspensionReason = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that represents a temporary suspension of coordinated playback.
   * https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension
   */
  interface AVCoordinatedPlaybackSuspension extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/3750239-begindate
    beginDate(): NSDate;
    setBeginDate(value: NSDate): void;
    // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/3750242-reason
    reason(): AVCoordinatedPlaybackSuspensionReason;
    setReason(value: AVCoordinatedPlaybackSuspensionReason): void;
    // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/3750240-end
    end():void;
    // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension/3750241-endproposingnewtime
    endProposingNewTime(time: CMTime):void;
    //
    alloc():AVCoordinatedPlaybackSuspension;
    //
    init():AVCoordinatedPlaybackSuspension;
  }
}

declare const AVCoordinatedPlaybackSuspension: cocoascript.AVCoordinatedPlaybackSuspension;
// https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorsuspensionreasonsdidchangenotification
declare const AVPlaybackCoordinatorSuspensionReasonsDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * An object that represents a participant in a coordinated playback session.
   * https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant
   */
  interface AVCoordinatedPlaybackParticipant extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/3750235-identifier
    identifier(): NSUUID;
    setIdentifier(value: NSUUID): void;
    // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/3750236-readytoplay
    readyToPlay(): boolean;
    setReadyToPlay(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/3750237-suspensionreasons
    suspensionReasons(): AVCoordinatedPlaybackSuspensionReason;
    setSuspensionReasons(value: AVCoordinatedPlaybackSuspensionReason): void;
    //
    alloc():AVCoordinatedPlaybackParticipant;
    //
    init():AVCoordinatedPlaybackParticipant;
  }
}

declare const AVCoordinatedPlaybackParticipant: cocoascript.AVCoordinatedPlaybackParticipant;
// https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorotherparticipantsdidchangenotification
declare const AVPlaybackCoordinatorOtherParticipantsDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekoptions
  type AVDelegatingPlaybackCoordinatorSeekOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorratechangeoptions
  type AVDelegatingPlaybackCoordinatorRateChangeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An abstract superclass for playback commands.
   * https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaybackcontrolcommand
   */
  interface AVDelegatingPlaybackCoordinatorPlaybackControlCommand extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaybackcontrolcommand/3750270-expectedcurrentitemidentifier
    expectedCurrentItemIdentifier(): string | cocoascript.NSString;
    setExpectedCurrentItemIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaybackcontrolcommand/3750271-originator
    originator(): AVCoordinatedPlaybackParticipant;
    setOriginator(value: AVCoordinatedPlaybackParticipant): void;
    //
    alloc():AVDelegatingPlaybackCoordinatorPlaybackControlCommand;
    //
    init():AVDelegatingPlaybackCoordinatorPlaybackControlCommand;
  }
}

declare const AVDelegatingPlaybackCoordinatorPlaybackControlCommand: cocoascript.AVDelegatingPlaybackCoordinatorPlaybackControlCommand;
declare namespace cocoascript {
  /**
   * A command that indicates to play at a specific rate and time.
   * https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand
   */
  interface AVDelegatingPlaybackCoordinatorPlayCommand extends AVDelegatingPlaybackCoordinatorPlaybackControlCommand {
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand/3750268-rate
    rate(): number;
    setRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand/3750267-itemtime
    itemTime(): CMTime;
    setItemTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand/3750266-hostclocktime
    hostClockTime(): CMTime;
    setHostClockTime(value: CMTime): void;
    //
    alloc():AVDelegatingPlaybackCoordinatorPlayCommand;
    //
    init():AVDelegatingPlaybackCoordinatorPlayCommand;
  }
}

declare const AVDelegatingPlaybackCoordinatorPlayCommand: cocoascript.AVDelegatingPlaybackCoordinatorPlayCommand;
declare namespace cocoascript {
  /**
   * A command that indicates to pause playback.
   * https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand
   */
  interface AVDelegatingPlaybackCoordinatorPauseCommand extends AVDelegatingPlaybackCoordinatorPlaybackControlCommand {
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand/3750264-shouldbufferinanticipationofplay
    shouldBufferInAnticipationOfPlayback(): boolean;
    setShouldBufferInAnticipationOfPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand/3750263-anticipatedplaybackrate
    anticipatedPlaybackRate(): number;
    setAnticipatedPlaybackRate(value: number): void;
    //
    alloc():AVDelegatingPlaybackCoordinatorPauseCommand;
    //
    init():AVDelegatingPlaybackCoordinatorPauseCommand;
  }
}

declare const AVDelegatingPlaybackCoordinatorPauseCommand: cocoascript.AVDelegatingPlaybackCoordinatorPauseCommand;
declare namespace cocoascript {
  /**
   * A command that indicates to seek to a new time in the item timeline.
   * https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand
   */
  interface AVDelegatingPlaybackCoordinatorSeekCommand extends AVDelegatingPlaybackCoordinatorPlaybackControlCommand {
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/3750281-shouldbufferinanticipationofplay
    shouldBufferInAnticipationOfPlayback(): boolean;
    setShouldBufferInAnticipationOfPlayback(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/3750279-anticipatedplaybackrate
    anticipatedPlaybackRate(): number;
    setAnticipatedPlaybackRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/3750280-itemtime
    itemTime(): CMTime;
    setItemTime(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/3778531-completionduedate
    completionDueDate(): NSDate;
    setCompletionDueDate(value: NSDate): void;
    //
    alloc():AVDelegatingPlaybackCoordinatorSeekCommand;
    //
    init():AVDelegatingPlaybackCoordinatorSeekCommand;
  }
}

declare const AVDelegatingPlaybackCoordinatorSeekCommand: cocoascript.AVDelegatingPlaybackCoordinatorSeekCommand;
declare namespace cocoascript {
  /**
   * A command that indicates to start buffering data in preparation for playback.
   * https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorbufferingcommand
   */
  interface AVDelegatingPlaybackCoordinatorBufferingCommand extends AVDelegatingPlaybackCoordinatorPlaybackControlCommand {
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorbufferingcommand/3750261-anticipatedplaybackrate
    anticipatedPlaybackRate(): number;
    setAnticipatedPlaybackRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorbufferingcommand/3778530-completionduedate
    completionDueDate(): NSDate;
    setCompletionDueDate(value: NSDate): void;
    //
    alloc():AVDelegatingPlaybackCoordinatorBufferingCommand;
    //
    init():AVDelegatingPlaybackCoordinatorBufferingCommand;
  }
}

declare const AVDelegatingPlaybackCoordinatorBufferingCommand: cocoascript.AVDelegatingPlaybackCoordinatorBufferingCommand;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventrestrictions
  type AVPlayerInterstitialEventRestrictions = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitorcurrenteventdidchangenotification
declare const AVPlayerInterstitialEventMonitorCurrentEventDidChangeNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitoreventsdidchangenotification
declare const AVPlayerInterstitialEventMonitorEventsDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * A protocol that defines the methods to implement to respond to asset-download events.
   * https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate
   */
  interface AVAssetDownloadDelegate extends NSURLSessionTaskDelegate {
    // https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/1621023-urlsession
    URLSession_assetDownloadTask_didResolveMediaSelection(session: NSURLSession, assetDownloadTask: AVAssetDownloadTask, resolvedMediaSelection: AVMediaSelection):void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/1621019-urlsession
    URLSession_assetDownloadTask_didLoadTimeRange_totalTimeRangesLoaded_timeRangeExpectedToLoad(session: NSURLSession, assetDownloadTask: AVAssetDownloadTask, timeRange: CMTimeRange, loadedTimeRanges: NSValue, timeRangeExpectedToLoad: CMTimeRange):void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/1845200-urlsession
    URLSession_assetDownloadTask_didFinishDownloadingToURL(session: NSURLSession, assetDownloadTask: AVAssetDownloadTask, location: NSURL):void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/3751760-urlsession
    URLSession_assetDownloadTask_willDownloadVariants(session: NSURLSession, assetDownloadTask: AVAssetDownloadTask, variants: AVAssetVariant):void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/2897241-urlsession
    URLSession_aggregateAssetDownloadTask_willDownloadToURL(session: NSURLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, location: NSURL):void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/2919988-urlsession
    URLSession_aggregateAssetDownloadTask_didLoadTimeRange_totalTimeRangesLoaded_timeRangeExpectedToLoad_forMediaSelection(session: NSURLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, timeRange: CMTimeRange, loadedTimeRanges: NSValue, timeRangeExpectedToLoad: CMTimeRange, mediaSelection: AVMediaSelection):void;
    // https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/2897211-urlsession
    URLSession_aggregateAssetDownloadTask_didCompleteForMediaSelection(session: NSURLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, mediaSelection: AVMediaSelection):void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetdownloadedassetevictionpriority
  type AVAssetDownloadedAssetEvictionPriority = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcontentkeysystem
  type AVContentKeySystem = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A protocol for requiring decryption keys for media data.
   * https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient
   */
  interface AVContentKeyRecipient {
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient/2799194-mayrequirecontentkeysformediadat
    mayRequireContentKeysForMediaDataProcessing(): boolean;
    setMayRequireContentKeysForMediaDataProcessing(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient/3726101-contentkeysession
    contentKeySession_didProvideContentKey(contentKeySession: AVContentKeySession, contentKey: AVContentKey):void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption
  type AVContentKeySessionServerPlaybackContextOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcontentkeyrequeststatus
  type AVContentKeyRequestStatus = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizerratedidchangenotification
declare const AVSampleBufferRenderSynchronizerRateDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrenderingstatus
  type AVQueuedSampleBufferRenderingStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequestdirection
  type AVSampleBufferRequestDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avsamplebufferrequestmode
  type AVSampleBufferRequestMode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyartwork
declare const AVMetadataCommonKeyArtwork: cocoascript.AVMetadataKey;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturesystempressurelevel
  type AVCaptureSystemPressureLevel = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturesystempressurefactors
  type AVCaptureSystemPressureFactors = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmattetypeglasses
declare const AVSemanticSegmentationMatteTypeGlasses: cocoascript.AVSemanticSegmentationMatteType;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpresethigh
declare const AVCaptureSessionPresetHigh: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpresetlow
declare const AVCaptureSessionPresetLow: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpresetmedium
declare const AVCaptureSessionPresetMedium: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset960x540
declare const AVCaptureSessionPreset960x540: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset1280x720
declare const AVCaptureSessionPreset1280x720: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset1920x1080
declare const AVCaptureSessionPreset1920x1080: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset3840x2160
declare const AVCaptureSessionPreset3840x2160: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpresetiframe960x540
declare const AVCaptureSessionPresetiFrame960x540: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpresetiframe1280x720
declare const AVCaptureSessionPresetiFrame1280x720: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset320x240
declare const AVCaptureSessionPreset320x240: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset640x480
declare const AVCaptureSessionPreset640x480: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset352x288
declare const AVCaptureSessionPreset352x288: cocoascript.AVCaptureSessionPreset;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltinwideanglecamera
declare const AVCaptureDeviceTypeBuiltInWideAngleCamera: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltindualwidecamera
declare const AVCaptureDeviceTypeBuiltInDualWideCamera: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltintriplecamera
declare const AVCaptureDeviceTypeBuiltInTripleCamera: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltinultrawidecamera
declare const AVCaptureDeviceTypeBuiltInUltraWideCamera: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltintelephotocamera
declare const AVCaptureDeviceTypeBuiltInTelephotoCamera: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltinmicrophone
declare const AVCaptureDeviceTypeBuiltInMicrophone: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypeexternalunknown
declare const AVCaptureDeviceTypeExternalUnknown: cocoascript.AVCaptureDeviceType;
// https://developer.apple.com/documentation/avfoundation/avcapturedevicetypebuiltinduocamera
declare const AVCaptureDeviceTypeBuiltInDuoCamera: cocoascript.AVCaptureDeviceType;
declare namespace cocoascript {
  /**
   * An
   * https://developer.apple.com/documentation/avfoundation/avframeraterange
   */
  interface AVFrameRateRange extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avframeraterange/1386786-maxframeduration
    maxFrameDuration(): CMTime;
    setMaxFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avframeraterange/1386988-maxframerate
    maxFrameRate(): Float64;
    setMaxFrameRate(value: Float64): void;
    // https://developer.apple.com/documentation/avfoundation/avframeraterange/1388420-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avframeraterange/1389132-minframerate
    minFrameRate(): Float64;
    setMinFrameRate(value: Float64): void;
    //
    alloc():AVFrameRateRange;
    //
    init():AVFrameRateRange;
  }
}

declare const AVFrameRateRange: cocoascript.AVFrameRateRange;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcapturevideostabilizationmode
  type AVCaptureVideoStabilizationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptureautofocussystem
  type AVCaptureAutoFocusSystem = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avvideocodectypehevcwithalpha
declare const AVVideoCodecTypeHEVCWithAlpha: cocoascript.AVVideoCodecType;
// https://developer.apple.com/documentation/avfoundation/avvideocodectypeappleprores422lt
declare const AVVideoCodecTypeAppleProRes422LT: cocoascript.AVVideoCodecType;
// https://developer.apple.com/documentation/avfoundation/avvideocodectypeappleprores422hq
declare const AVVideoCodecTypeAppleProRes422HQ: cocoascript.AVVideoCodecType;
// https://developer.apple.com/documentation/avfoundation/avvideocodectypeappleprores422proxy
declare const AVVideoCodecTypeAppleProRes422Proxy: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  /**
   * A configuration for defining bracketed photo captures in terms of bias relative to automatic exposure.
   * https://developer.apple.com/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings
   */
  interface AVCaptureAutoExposureBracketedStillImageSettings extends AVCaptureBracketedStillImageSettings {
    // https://developer.apple.com/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings/1616283-autoexposuresettingswithexposure
    autoExposureSettingsWithExposureTargetBias(exposureTargetBias: number):AVCaptureAutoExposureBracketedStillImageSettings;
    // https://developer.apple.com/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings/1616293-exposuretargetbias
    exposureTargetBias(): number;
    setExposureTargetBias(value: number): void;
    //
    alloc():AVCaptureAutoExposureBracketedStillImageSettings;
    //
    init():AVCaptureAutoExposureBracketedStillImageSettings;
  }
}

declare const AVCaptureAutoExposureBracketedStillImageSettings: cocoascript.AVCaptureAutoExposureBracketedStillImageSettings;
declare namespace cocoascript {
  /**
   * A configuration for defining bracketed photo captures in terms of specific exposure and ISO values.
   * https://developer.apple.com/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings
   */
  interface AVCaptureManualExposureBracketedStillImageSettings extends AVCaptureBracketedStillImageSettings {
    // https://developer.apple.com/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/1616313-manualexposuresettingswithexposu
    manualExposureSettingsWithExposureDuration_ISO(duration: CMTime, ISO: number):AVCaptureManualExposureBracketedStillImageSettings;
    // https://developer.apple.com/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/1616282-iso
    ISO(): number;
    setISO(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/1616312-exposureduration
    exposureDuration(): CMTime;
    setExposureDuration(value: CMTime): void;
    //
    alloc():AVCaptureManualExposureBracketedStillImageSettings;
    //
    init():AVCaptureManualExposureBracketedStillImageSettings;
  }
}

declare const AVCaptureManualExposureBracketedStillImageSettings: cocoascript.AVCaptureManualExposureBracketedStillImageSettings;
declare namespace cocoascript {
  /**
   * The abstract superclass for bracketed photo capture settings.
   * https://developer.apple.com/documentation/avfoundation/avcapturebracketedstillimagesettings
   */
  interface AVCaptureBracketedStillImageSettings extends NSObject {
    //
    alloc():AVCaptureBracketedStillImageSettings;
    //
    init():AVCaptureBracketedStillImageSettings;
  }
}

declare const AVCaptureBracketedStillImageSettings: cocoascript.AVCaptureBracketedStillImageSettings;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeface
declare const AVMetadataObjectTypeFace: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeupcecode
declare const AVMetadataObjectTypeUPCECode: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypecode39code
declare const AVMetadataObjectTypeCode39Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypecode39mod43code
declare const AVMetadataObjectTypeCode39Mod43Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeean13code
declare const AVMetadataObjectTypeEAN13Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeean8code
declare const AVMetadataObjectTypeEAN8Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypecode93code
declare const AVMetadataObjectTypeCode93Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypecode128code
declare const AVMetadataObjectTypeCode128Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypepdf417code
declare const AVMetadataObjectTypePDF417Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeqrcode
declare const AVMetadataObjectTypeQRCode: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeazteccode
declare const AVMetadataObjectTypeAztecCode: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeinterleaved2of5code
declare const AVMetadataObjectTypeInterleaved2of5Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypeitf14code
declare const AVMetadataObjectTypeITF14Code: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypedatamatrixcode
declare const AVMetadataObjectTypeDataMatrixCode: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypehumanbody
declare const AVMetadataObjectTypeHumanBody: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypedogbody
declare const AVMetadataObjectTypeDogBody: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypecatbody
declare const AVMetadataObjectTypeCatBody: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avmetadataobjecttypesalientobject
declare const AVMetadataObjectTypeSalientObject: cocoascript.AVMetadataObjectType;
// https://developer.apple.com/documentation/avfoundation/avlayervideogravityresizeaspect
declare const AVLayerVideoGravityResizeAspect: cocoascript.AVLayerVideoGravity;
// https://developer.apple.com/documentation/avfoundation/avlayervideogravityresizeaspectfill
declare const AVLayerVideoGravityResizeAspectFill: cocoascript.AVLayerVideoGravity;
// https://developer.apple.com/documentation/avfoundation/avlayervideogravityresize
declare const AVLayerVideoGravityResize: cocoascript.AVLayerVideoGravity;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetwriterstatus
  type AVAssetWriterStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetsegmenttype
  type AVAssetSegmentType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that provides information on a track in segment data.
   * https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport
   */
  interface AVAssetSegmentTrackReport extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/3546581-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(value: CMPersistentTrackID): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/3546580-mediatype
    mediaType(): AVMediaType;
    setMediaType(value: AVMediaType): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/3546578-duration
    duration(): CMTime;
    setDuration(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/3600083-earliestpresentationtimestamp
    earliestPresentationTimeStamp(): CMTime;
    setEarliestPresentationTimeStamp(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport/3546579-firstvideosampleinformation
    firstVideoSampleInformation(): AVAssetSegmentReportSampleInformation;
    setFirstVideoSampleInformation(value: AVAssetSegmentReportSampleInformation): void;
    //
    alloc():AVAssetSegmentTrackReport;
    //
    init():AVAssetSegmentTrackReport;
  }
}

declare const AVAssetSegmentTrackReport: cocoascript.AVAssetSegmentTrackReport;
// https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestretryreasonreceivedobsoletecontentkey
declare const AVContentKeyRequestRetryReasonReceivedObsoleteContentKey: cocoascript.AVContentKeyRequestRetryReason;
// https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestretryreasonreceivedresponsewithexpiredlease
declare const AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease: cocoascript.AVContentKeyRequestRetryReason;
// https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestretryreasontimedout
declare const AVContentKeyRequestRetryReasonTimedOut: cocoascript.AVContentKeyRequestRetryReason;
declare namespace cocoascript {
  interface AVEdgeWidths {
  }
}
declare namespace cocoascript {
  interface AVPixelAspectRatio {
  }
}
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspaceaudiofile
declare const AVMetadataKeySpaceAudioFile: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspacecommon
declare const AVMetadataKeySpaceCommon: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspacehlsdaterange
declare const AVMetadataKeySpaceHLSDateRange: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspaceitunes
declare const AVMetadataKeySpaceiTunes: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspaceicy
declare const AVMetadataKeySpaceIcy: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspaceid3
declare const AVMetadataKeySpaceID3: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspaceisouserdata
declare const AVMetadataKeySpaceISOUserData: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspacequicktimemetadata
declare const AVMetadataKeySpaceQuickTimeMetadata: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatakeyspacequicktimeuserdata
declare const AVMetadataKeySpaceQuickTimeUserData: cocoascript.AVMetadataKeySpace;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyaccessibilitydescription
declare const AVMetadataCommonKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyalbumname
declare const AVMetadataCommonKeyAlbumName: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyartist
declare const AVMetadataCommonKeyArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyauthor
declare const AVMetadataCommonKeyAuthor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeycontributor
declare const AVMetadataCommonKeyContributor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeycopyrights
declare const AVMetadataCommonKeyCopyrights: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeycreationdate
declare const AVMetadataCommonKeyCreationDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeycreator
declare const AVMetadataCommonKeyCreator: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeydescription
declare const AVMetadataCommonKeyDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyformat
declare const AVMetadataCommonKeyFormat: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyidentifier
declare const AVMetadataCommonKeyIdentifier: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeylanguage
declare const AVMetadataCommonKeyLanguage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeylastmodifieddate
declare const AVMetadataCommonKeyLastModifiedDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeylocation
declare const AVMetadataCommonKeyLocation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeymake
declare const AVMetadataCommonKeyMake: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeymodel
declare const AVMetadataCommonKeyModel: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeypublisher
declare const AVMetadataCommonKeyPublisher: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeyrelation
declare const AVMetadataCommonKeyRelation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeysoftware
declare const AVMetadataCommonKeySoftware: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeysource
declare const AVMetadataCommonKeySource: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeysubject
declare const AVMetadataCommonKeySubject: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeytitle
declare const AVMetadataCommonKeyTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonkeytype
declare const AVMetadataCommonKeyType: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyaccountkind
declare const AVMetadataiTunesMetadataKeyAccountKind: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyacknowledgement
declare const AVMetadataiTunesMetadataKeyAcknowledgement: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyalbum
declare const AVMetadataiTunesMetadataKeyAlbum: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyalbumartist
declare const AVMetadataiTunesMetadataKeyAlbumArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyappleid
declare const AVMetadataiTunesMetadataKeyAppleID: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyarranger
declare const AVMetadataiTunesMetadataKeyArranger: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyartdirector
declare const AVMetadataiTunesMetadataKeyArtDirector: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyartist
declare const AVMetadataiTunesMetadataKeyArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyartistid
declare const AVMetadataiTunesMetadataKeyArtistID: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyauthor
declare const AVMetadataiTunesMetadataKeyAuthor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeybeatspermin
declare const AVMetadataiTunesMetadataKeyBeatsPerMin: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeycomposer
declare const AVMetadataiTunesMetadataKeyComposer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyconductor
declare const AVMetadataiTunesMetadataKeyConductor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeycontentrating
declare const AVMetadataiTunesMetadataKeyContentRating: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeycopyright
declare const AVMetadataiTunesMetadataKeyCopyright: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeycoverart
declare const AVMetadataiTunesMetadataKeyCoverArt: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeycredits
declare const AVMetadataiTunesMetadataKeyCredits: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeydescription
declare const AVMetadataiTunesMetadataKeyDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeydirector
declare const AVMetadataiTunesMetadataKeyDirector: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeydisccompilation
declare const AVMetadataiTunesMetadataKeyDiscCompilation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeydiscnumber
declare const AVMetadataiTunesMetadataKeyDiscNumber: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyencodedby
declare const AVMetadataiTunesMetadataKeyEncodedBy: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyencodingtool
declare const AVMetadataiTunesMetadataKeyEncodingTool: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyeq
declare const AVMetadataiTunesMetadataKeyEQ: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyexecproducer
declare const AVMetadataiTunesMetadataKeyExecProducer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeygenreid
declare const AVMetadataiTunesMetadataKeyGenreID: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeygrouping
declare const AVMetadataiTunesMetadataKeyGrouping: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeylinernotes
declare const AVMetadataiTunesMetadataKeyLinerNotes: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeylyrics
declare const AVMetadataiTunesMetadataKeyLyrics: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyonlineextras
declare const AVMetadataiTunesMetadataKeyOnlineExtras: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyoriginalartist
declare const AVMetadataiTunesMetadataKeyOriginalArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyperformer
declare const AVMetadataiTunesMetadataKeyPerformer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyphonogramrights
declare const AVMetadataiTunesMetadataKeyPhonogramRights: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyplaylistid
declare const AVMetadataiTunesMetadataKeyPlaylistID: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeypredefinedgenre
declare const AVMetadataiTunesMetadataKeyPredefinedGenre: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyproducer
declare const AVMetadataiTunesMetadataKeyProducer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeypublisher
declare const AVMetadataiTunesMetadataKeyPublisher: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyrecordcompany
declare const AVMetadataiTunesMetadataKeyRecordCompany: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyreleasedate
declare const AVMetadataiTunesMetadataKeyReleaseDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeysoloist
declare const AVMetadataiTunesMetadataKeySoloist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeysongid
declare const AVMetadataiTunesMetadataKeySongID: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeysongname
declare const AVMetadataiTunesMetadataKeySongName: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeysoundengineer
declare const AVMetadataiTunesMetadataKeySoundEngineer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeythanks
declare const AVMetadataiTunesMetadataKeyThanks: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeytracknumber
declare const AVMetadataiTunesMetadataKeyTrackNumber: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeytracksubtitle
declare const AVMetadataiTunesMetadataKeyTrackSubTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyusercomment
declare const AVMetadataiTunesMetadataKeyUserComment: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataitunesmetadatakeyusergenre
declare const AVMetadataiTunesMetadataKeyUserGenre: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyaccessibilitydescription
declare const AVMetadataQuickTimeMetadataKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyalbum
declare const AVMetadataQuickTimeMetadataKeyAlbum: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyarranger
declare const AVMetadataQuickTimeMetadataKeyArranger: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyartist
declare const AVMetadataQuickTimeMetadataKeyArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyartwork
declare const AVMetadataQuickTimeMetadataKeyArtwork: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyauthor
declare const AVMetadataQuickTimeMetadataKeyAuthor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycameraframereadouttime
declare const AVMetadataQuickTimeMetadataKeyCameraFrameReadoutTime: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycameraidentifier
declare const AVMetadataQuickTimeMetadataKeyCameraIdentifier: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycollectionuser
declare const AVMetadataQuickTimeMetadataKeyCollectionUser: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycomment
declare const AVMetadataQuickTimeMetadataKeyComment: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycomposer
declare const AVMetadataQuickTimeMetadataKeyComposer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycontentidentifier
declare const AVMetadataQuickTimeMetadataKeyContentIdentifier: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycopyright
declare const AVMetadataQuickTimeMetadataKeyCopyright: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycreationdate
declare const AVMetadataQuickTimeMetadataKeyCreationDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeycredits
declare const AVMetadataQuickTimeMetadataKeyCredits: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeydescription
declare const AVMetadataQuickTimeMetadataKeyDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeydirectionfacing
declare const AVMetadataQuickTimeMetadataKeyDirectionFacing: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeydirectionmotion
declare const AVMetadataQuickTimeMetadataKeyDirectionMotion: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeydirector
declare const AVMetadataQuickTimeMetadataKeyDirector: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeydisplayname
declare const AVMetadataQuickTimeMetadataKeyDisplayName: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyencodedby
declare const AVMetadataQuickTimeMetadataKeyEncodedBy: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeygenre
declare const AVMetadataQuickTimeMetadataKeyGenre: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyinformation
declare const AVMetadataQuickTimeMetadataKeyInformation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyismontage
declare const AVMetadataQuickTimeMetadataKeyIsMontage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyixml
declare const AVMetadataQuickTimeMetadataKeyiXML: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeykeywords
declare const AVMetadataQuickTimeMetadataKeyKeywords: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeylocationbody
declare const AVMetadataQuickTimeMetadataKeyLocationBody: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeylocationdate
declare const AVMetadataQuickTimeMetadataKeyLocationDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeylocationiso6709
declare const AVMetadataQuickTimeMetadataKeyLocationISO6709: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeylocationname
declare const AVMetadataQuickTimeMetadataKeyLocationName: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeylocationnote
declare const AVMetadataQuickTimeMetadataKeyLocationNote: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeylocationrole
declare const AVMetadataQuickTimeMetadataKeyLocationRole: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeymake
declare const AVMetadataQuickTimeMetadataKeyMake: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeymodel
declare const AVMetadataQuickTimeMetadataKeyModel: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyoriginalartist
declare const AVMetadataQuickTimeMetadataKeyOriginalArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyperformer
declare const AVMetadataQuickTimeMetadataKeyPerformer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyphonogramrights
declare const AVMetadataQuickTimeMetadataKeyPhonogramRights: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyproducer
declare const AVMetadataQuickTimeMetadataKeyProducer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeypublisher
declare const AVMetadataQuickTimeMetadataKeyPublisher: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyratinguser
declare const AVMetadataQuickTimeMetadataKeyRatingUser: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeysoftware
declare const AVMetadataQuickTimeMetadataKeySoftware: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeytitle
declare const AVMetadataQuickTimeMetadataKeyTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimemetadatakeyyear
declare const AVMetadataQuickTimeMetadataKeyYear: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyaccessibilitydescription
declare const AVMetadataQuickTimeUserDataKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyalbum
declare const AVMetadataQuickTimeUserDataKeyAlbum: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyarranger
declare const AVMetadataQuickTimeUserDataKeyArranger: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyartist
declare const AVMetadataQuickTimeUserDataKeyArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyauthor
declare const AVMetadataQuickTimeUserDataKeyAuthor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeychapter
declare const AVMetadataQuickTimeUserDataKeyChapter: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeycomment
declare const AVMetadataQuickTimeUserDataKeyComment: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeycomposer
declare const AVMetadataQuickTimeUserDataKeyComposer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeycopyright
declare const AVMetadataQuickTimeUserDataKeyCopyright: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeycreationdate
declare const AVMetadataQuickTimeUserDataKeyCreationDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeycredits
declare const AVMetadataQuickTimeUserDataKeyCredits: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeydescription
declare const AVMetadataQuickTimeUserDataKeyDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeydirector
declare const AVMetadataQuickTimeUserDataKeyDirector: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeydisclaimer
declare const AVMetadataQuickTimeUserDataKeyDisclaimer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyencodedby
declare const AVMetadataQuickTimeUserDataKeyEncodedBy: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyfullname
declare const AVMetadataQuickTimeUserDataKeyFullName: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeygenre
declare const AVMetadataQuickTimeUserDataKeyGenre: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyhostcomputer
declare const AVMetadataQuickTimeUserDataKeyHostComputer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyinformation
declare const AVMetadataQuickTimeUserDataKeyInformation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeykeywords
declare const AVMetadataQuickTimeUserDataKeyKeywords: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeylocationiso6709
declare const AVMetadataQuickTimeUserDataKeyLocationISO6709: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeymake
declare const AVMetadataQuickTimeUserDataKeyMake: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeymodel
declare const AVMetadataQuickTimeUserDataKeyModel: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyoriginalartist
declare const AVMetadataQuickTimeUserDataKeyOriginalArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyoriginalformat
declare const AVMetadataQuickTimeUserDataKeyOriginalFormat: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyoriginalsource
declare const AVMetadataQuickTimeUserDataKeyOriginalSource: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyperformers
declare const AVMetadataQuickTimeUserDataKeyPerformers: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyphonogramrights
declare const AVMetadataQuickTimeUserDataKeyPhonogramRights: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyproducer
declare const AVMetadataQuickTimeUserDataKeyProducer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyproduct
declare const AVMetadataQuickTimeUserDataKeyProduct: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeypublisher
declare const AVMetadataQuickTimeUserDataKeyPublisher: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeysoftware
declare const AVMetadataQuickTimeUserDataKeySoftware: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyspecialplaybackrequirements
declare const AVMetadataQuickTimeUserDataKeySpecialPlaybackRequirements: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeytaggedcharacteristic
declare const AVMetadataQuickTimeUserDataKeyTaggedCharacteristic: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeytrack
declare const AVMetadataQuickTimeUserDataKeyTrack: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeytrackname
declare const AVMetadataQuickTimeUserDataKeyTrackName: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeyurllink
declare const AVMetadataQuickTimeUserDataKeyURLLink: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeywarning
declare const AVMetadataQuickTimeUserDataKeyWarning: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataquicktimeuserdatakeywriter
declare const AVMetadataQuickTimeUserDataKeyWriter: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyalbumsortorder
declare const AVMetadataID3MetadataKeyAlbumSortOrder: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyalbumtitle
declare const AVMetadataID3MetadataKeyAlbumTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyattachedpicture
declare const AVMetadataID3MetadataKeyAttachedPicture: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyaudioencryption
declare const AVMetadataID3MetadataKeyAudioEncryption: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyaudioseekpointindex
declare const AVMetadataID3MetadataKeyAudioSeekPointIndex: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyband
declare const AVMetadataID3MetadataKeyBand: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeybeatsperminute
declare const AVMetadataID3MetadataKeyBeatsPerMinute: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycomments
declare const AVMetadataID3MetadataKeyComments: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycommercial
declare const AVMetadataID3MetadataKeyCommercial: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycommercialinformation
declare const AVMetadataID3MetadataKeyCommercialInformation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycomposer
declare const AVMetadataID3MetadataKeyComposer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyconductor
declare const AVMetadataID3MetadataKeyConductor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycontentgroupdescription
declare const AVMetadataID3MetadataKeyContentGroupDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycontenttype
declare const AVMetadataID3MetadataKeyContentType: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycopyright
declare const AVMetadataID3MetadataKeyCopyright: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycopyrightinformation
declare const AVMetadataID3MetadataKeyCopyrightInformation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeydate
declare const AVMetadataID3MetadataKeyDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyencodedby
declare const AVMetadataID3MetadataKeyEncodedBy: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyencodedwith
declare const AVMetadataID3MetadataKeyEncodedWith: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyencodingtime
declare const AVMetadataID3MetadataKeyEncodingTime: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyencryption
declare const AVMetadataID3MetadataKeyEncryption: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyequalization
declare const AVMetadataID3MetadataKeyEqualization: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyequalization2
declare const AVMetadataID3MetadataKeyEqualization2: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyeventtimingcodes
declare const AVMetadataID3MetadataKeyEventTimingCodes: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyfileowner
declare const AVMetadataID3MetadataKeyFileOwner: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyfiletype
declare const AVMetadataID3MetadataKeyFileType: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeygeneralencapsulatedobject
declare const AVMetadataID3MetadataKeyGeneralEncapsulatedObject: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeygroupidentifier
declare const AVMetadataID3MetadataKeyGroupIdentifier: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyinitialkey
declare const AVMetadataID3MetadataKeyInitialKey: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyinternationalstandardrecordingcode
declare const AVMetadataID3MetadataKeyInternationalStandardRecordingCode: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyinternetradiostationname
declare const AVMetadataID3MetadataKeyInternetRadioStationName: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyinternetradiostationowner
declare const AVMetadataID3MetadataKeyInternetRadioStationOwner: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyinvolvedpeoplelist_v23
declare const AVMetadataID3MetadataKeyInvolvedPeopleList_v23: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyinvolvedpeoplelist_v24
declare const AVMetadataID3MetadataKeyInvolvedPeopleList_v24: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeylanguage
declare const AVMetadataID3MetadataKeyLanguage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyleadperformer
declare const AVMetadataID3MetadataKeyLeadPerformer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeylength
declare const AVMetadataID3MetadataKeyLength: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeylink
declare const AVMetadataID3MetadataKeyLink: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeylyricist
declare const AVMetadataID3MetadataKeyLyricist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeymediatype
declare const AVMetadataID3MetadataKeyMediaType: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeymodifiedby
declare const AVMetadataID3MetadataKeyModifiedBy: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeymood
declare const AVMetadataID3MetadataKeyMood: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeympeglocationlookuptable
declare const AVMetadataID3MetadataKeyMPEGLocationLookupTable: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeymusiccdidentifier
declare const AVMetadataID3MetadataKeyMusicCDIdentifier: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeymusiciancreditslist
declare const AVMetadataID3MetadataKeyMusicianCreditsList: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyofficialartistwebpage
declare const AVMetadataID3MetadataKeyOfficialArtistWebpage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyofficialaudiofilewebpage
declare const AVMetadataID3MetadataKeyOfficialAudioFileWebpage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyofficialaudiosourcewebpage
declare const AVMetadataID3MetadataKeyOfficialAudioSourceWebpage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyofficialinternetradiostationhomepage
declare const AVMetadataID3MetadataKeyOfficialInternetRadioStationHomepage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyofficialpublisherwebpage
declare const AVMetadataID3MetadataKeyOfficialPublisherWebpage: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyoriginalalbumtitle
declare const AVMetadataID3MetadataKeyOriginalAlbumTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyoriginalartist
declare const AVMetadataID3MetadataKeyOriginalArtist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyoriginalfilename
declare const AVMetadataID3MetadataKeyOriginalFilename: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyoriginallyricist
declare const AVMetadataID3MetadataKeyOriginalLyricist: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyoriginalreleasetime
declare const AVMetadataID3MetadataKeyOriginalReleaseTime: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyoriginalreleaseyear
declare const AVMetadataID3MetadataKeyOriginalReleaseYear: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyownership
declare const AVMetadataID3MetadataKeyOwnership: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeypartofaset
declare const AVMetadataID3MetadataKeyPartOfASet: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeypayment
declare const AVMetadataID3MetadataKeyPayment: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyperformersortorder
declare const AVMetadataID3MetadataKeyPerformerSortOrder: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyplaycounter
declare const AVMetadataID3MetadataKeyPlayCounter: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyplaylistdelay
declare const AVMetadataID3MetadataKeyPlaylistDelay: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeypopularimeter
declare const AVMetadataID3MetadataKeyPopularimeter: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeypositionsynchronization
declare const AVMetadataID3MetadataKeyPositionSynchronization: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyprivate
declare const AVMetadataID3MetadataKeyPrivate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyproducednotice
declare const AVMetadataID3MetadataKeyProducedNotice: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeypublisher
declare const AVMetadataID3MetadataKeyPublisher: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyrecommendedbuffersize
declare const AVMetadataID3MetadataKeyRecommendedBufferSize: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyrecordingdates
declare const AVMetadataID3MetadataKeyRecordingDates: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyrecordingtime
declare const AVMetadataID3MetadataKeyRecordingTime: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyrelativevolumeadjustment
declare const AVMetadataID3MetadataKeyRelativeVolumeAdjustment: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyrelativevolumeadjustment2
declare const AVMetadataID3MetadataKeyRelativeVolumeAdjustment2: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyreleasetime
declare const AVMetadataID3MetadataKeyReleaseTime: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyreverb
declare const AVMetadataID3MetadataKeyReverb: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyseek
declare const AVMetadataID3MetadataKeySeek: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeysetsubtitle
declare const AVMetadataID3MetadataKeySetSubtitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeysignature
declare const AVMetadataID3MetadataKeySignature: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeysize
declare const AVMetadataID3MetadataKeySize: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeysubtitle
declare const AVMetadataID3MetadataKeySubTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeysynchronizedlyric
declare const AVMetadataID3MetadataKeySynchronizedLyric: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeysynchronizedtempocodes
declare const AVMetadataID3MetadataKeySynchronizedTempoCodes: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeytaggingtime
declare const AVMetadataID3MetadataKeyTaggingTime: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeytermsofuse
declare const AVMetadataID3MetadataKeyTermsOfUse: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeytime
declare const AVMetadataID3MetadataKeyTime: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeytitledescription
declare const AVMetadataID3MetadataKeyTitleDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeytitlesortorder
declare const AVMetadataID3MetadataKeyTitleSortOrder: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeytracknumber
declare const AVMetadataID3MetadataKeyTrackNumber: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyuniquefileidentifier
declare const AVMetadataID3MetadataKeyUniqueFileIdentifier: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyunsynchronizedlyric
declare const AVMetadataID3MetadataKeyUnsynchronizedLyric: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyusertext
declare const AVMetadataID3MetadataKeyUserText: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyuserurl
declare const AVMetadataID3MetadataKeyUserURL: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeyyear
declare const AVMetadataID3MetadataKeyYear: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataid3metadatakeycommerical
declare const AVMetadataID3MetadataKeyCommerical: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeyalbumandtrack
declare const AVMetadata3GPUserDataKeyAlbumAndTrack: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeyauthor
declare const AVMetadata3GPUserDataKeyAuthor: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeycollection
declare const AVMetadata3GPUserDataKeyCollection: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeycopyright
declare const AVMetadata3GPUserDataKeyCopyright: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeydescription
declare const AVMetadata3GPUserDataKeyDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeygenre
declare const AVMetadata3GPUserDataKeyGenre: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeykeywordlist
declare const AVMetadata3GPUserDataKeyKeywordList: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeylocation
declare const AVMetadata3GPUserDataKeyLocation: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeymediaclassification
declare const AVMetadata3GPUserDataKeyMediaClassification: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeymediarating
declare const AVMetadata3GPUserDataKeyMediaRating: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeyperformer
declare const AVMetadata3GPUserDataKeyPerformer: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeyrecordingyear
declare const AVMetadata3GPUserDataKeyRecordingYear: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeythumbnail
declare const AVMetadata3GPUserDataKeyThumbnail: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeytitle
declare const AVMetadata3GPUserDataKeyTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadata3gpuserdatakeyuserrating
declare const AVMetadata3GPUserDataKeyUserRating: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataisouserdatakeyaccessibilitydescription
declare const AVMetadataISOUserDataKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataisouserdatakeycopyright
declare const AVMetadataISOUserDataKeyCopyright: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataisouserdatakeydate
declare const AVMetadataISOUserDataKeyDate: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataisouserdatakeytaggedcharacteristic
declare const AVMetadataISOUserDataKeyTaggedCharacteristic: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataicymetadatakeystreamtitle
declare const AVMetadataIcyMetadataKeyStreamTitle: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataicymetadatakeystreamurl
declare const AVMetadataIcyMetadataKeyStreamURL: cocoascript.AVMetadataKey;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifieraccessibilitydescription
declare const AVMetadataCommonIdentifierAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifieralbumname
declare const AVMetadataCommonIdentifierAlbumName: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierartist
declare const AVMetadataCommonIdentifierArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierartwork
declare const AVMetadataCommonIdentifierArtwork: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierassetidentifier
declare const AVMetadataCommonIdentifierAssetIdentifier: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierauthor
declare const AVMetadataCommonIdentifierAuthor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiercontributor
declare const AVMetadataCommonIdentifierContributor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiercopyrights
declare const AVMetadataCommonIdentifierCopyrights: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiercreationdate
declare const AVMetadataCommonIdentifierCreationDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiercreator
declare const AVMetadataCommonIdentifierCreator: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierdescription
declare const AVMetadataCommonIdentifierDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierformat
declare const AVMetadataCommonIdentifierFormat: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierlanguage
declare const AVMetadataCommonIdentifierLanguage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierlastmodifieddate
declare const AVMetadataCommonIdentifierLastModifiedDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierlocation
declare const AVMetadataCommonIdentifierLocation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiermake
declare const AVMetadataCommonIdentifierMake: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiermodel
declare const AVMetadataCommonIdentifierModel: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierpublisher
declare const AVMetadataCommonIdentifierPublisher: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifierrelation
declare const AVMetadataCommonIdentifierRelation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiersoftware
declare const AVMetadataCommonIdentifierSoftware: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiersource
declare const AVMetadataCommonIdentifierSource: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiersubject
declare const AVMetadataCommonIdentifierSubject: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiertitle
declare const AVMetadataCommonIdentifierTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadatacommonidentifiertype
declare const AVMetadataCommonIdentifierType: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataaccountkind
declare const AVMetadataIdentifieriTunesMetadataAccountKind: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataacknowledgement
declare const AVMetadataIdentifieriTunesMetadataAcknowledgement: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataalbum
declare const AVMetadataIdentifieriTunesMetadataAlbum: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataalbumartist
declare const AVMetadataIdentifieriTunesMetadataAlbumArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataappleid
declare const AVMetadataIdentifieriTunesMetadataAppleID: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataarranger
declare const AVMetadataIdentifieriTunesMetadataArranger: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataartdirector
declare const AVMetadataIdentifieriTunesMetadataArtDirector: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataartist
declare const AVMetadataIdentifieriTunesMetadataArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataartistid
declare const AVMetadataIdentifieriTunesMetadataArtistID: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataauthor
declare const AVMetadataIdentifieriTunesMetadataAuthor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatabeatspermin
declare const AVMetadataIdentifieriTunesMetadataBeatsPerMin: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatacomposer
declare const AVMetadataIdentifieriTunesMetadataComposer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataconductor
declare const AVMetadataIdentifieriTunesMetadataConductor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatacontentrating
declare const AVMetadataIdentifieriTunesMetadataContentRating: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatacopyright
declare const AVMetadataIdentifieriTunesMetadataCopyright: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatacoverart
declare const AVMetadataIdentifieriTunesMetadataCoverArt: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatacredits
declare const AVMetadataIdentifieriTunesMetadataCredits: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatadescription
declare const AVMetadataIdentifieriTunesMetadataDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatadirector
declare const AVMetadataIdentifieriTunesMetadataDirector: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatadisccompilation
declare const AVMetadataIdentifieriTunesMetadataDiscCompilation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatadiscnumber
declare const AVMetadataIdentifieriTunesMetadataDiscNumber: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataencodedby
declare const AVMetadataIdentifieriTunesMetadataEncodedBy: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataencodingtool
declare const AVMetadataIdentifieriTunesMetadataEncodingTool: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataeq
declare const AVMetadataIdentifieriTunesMetadataEQ: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataexecproducer
declare const AVMetadataIdentifieriTunesMetadataExecProducer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatagenreid
declare const AVMetadataIdentifieriTunesMetadataGenreID: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatagrouping
declare const AVMetadataIdentifieriTunesMetadataGrouping: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatalinernotes
declare const AVMetadataIdentifieriTunesMetadataLinerNotes: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatalyrics
declare const AVMetadataIdentifieriTunesMetadataLyrics: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataonlineextras
declare const AVMetadataIdentifieriTunesMetadataOnlineExtras: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataoriginalartist
declare const AVMetadataIdentifieriTunesMetadataOriginalArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataperformer
declare const AVMetadataIdentifieriTunesMetadataPerformer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataphonogramrights
declare const AVMetadataIdentifieriTunesMetadataPhonogramRights: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataplaylistid
declare const AVMetadataIdentifieriTunesMetadataPlaylistID: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatapredefinedgenre
declare const AVMetadataIdentifieriTunesMetadataPredefinedGenre: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadataproducer
declare const AVMetadataIdentifieriTunesMetadataProducer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatapublisher
declare const AVMetadataIdentifieriTunesMetadataPublisher: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatarecordcompany
declare const AVMetadataIdentifieriTunesMetadataRecordCompany: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatareleasedate
declare const AVMetadataIdentifieriTunesMetadataReleaseDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatasoloist
declare const AVMetadataIdentifieriTunesMetadataSoloist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatasongid
declare const AVMetadataIdentifieriTunesMetadataSongID: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatasongname
declare const AVMetadataIdentifieriTunesMetadataSongName: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatasoundengineer
declare const AVMetadataIdentifieriTunesMetadataSoundEngineer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatathanks
declare const AVMetadataIdentifieriTunesMetadataThanks: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatatracknumber
declare const AVMetadataIdentifieriTunesMetadataTrackNumber: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatatracksubtitle
declare const AVMetadataIdentifieriTunesMetadataTrackSubTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatausercomment
declare const AVMetadataIdentifieriTunesMetadataUserComment: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifieritunesmetadatausergenre
declare const AVMetadataIdentifieriTunesMetadataUserGenre: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataaccessibilitydescription
declare const AVMetadataIdentifierQuickTimeMetadataAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataalbum
declare const AVMetadataIdentifierQuickTimeMetadataAlbum: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataarranger
declare const AVMetadataIdentifierQuickTimeMetadataArranger: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataartist
declare const AVMetadataIdentifierQuickTimeMetadataArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataartwork
declare const AVMetadataIdentifierQuickTimeMetadataArtwork: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataauthor
declare const AVMetadataIdentifierQuickTimeMetadataAuthor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataautolivephoto
declare const AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacameraframereadouttime
declare const AVMetadataIdentifierQuickTimeMetadataCameraFrameReadoutTime: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacameraidentifier
declare const AVMetadataIdentifierQuickTimeMetadataCameraIdentifier: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacollectionuser
declare const AVMetadataIdentifierQuickTimeMetadataCollectionUser: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacomment
declare const AVMetadataIdentifierQuickTimeMetadataComment: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacomposer
declare const AVMetadataIdentifierQuickTimeMetadataComposer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacontentidentifier
declare const AVMetadataIdentifierQuickTimeMetadataContentIdentifier: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacopyright
declare const AVMetadataIdentifierQuickTimeMetadataCopyright: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacreationdate
declare const AVMetadataIdentifierQuickTimeMetadataCreationDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatacredits
declare const AVMetadataIdentifierQuickTimeMetadataCredits: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadescription
declare const AVMetadataIdentifierQuickTimeMetadataDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedcatbody
declare const AVMetadataIdentifierQuickTimeMetadataDetectedCatBody: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetecteddogbody
declare const AVMetadataIdentifierQuickTimeMetadataDetectedDogBody: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedface
declare const AVMetadataIdentifierQuickTimeMetadataDetectedFace: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedhumanbody
declare const AVMetadataIdentifierQuickTimeMetadataDetectedHumanBody: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedsalientobject
declare const AVMetadataIdentifierQuickTimeMetadataDetectedSalientObject: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadirectionfacing
declare const AVMetadataIdentifierQuickTimeMetadataDirectionFacing: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadirectionmotion
declare const AVMetadataIdentifierQuickTimeMetadataDirectionMotion: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadirector
declare const AVMetadataIdentifierQuickTimeMetadataDirector: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatadisplayname
declare const AVMetadataIdentifierQuickTimeMetadataDisplayName: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataencodedby
declare const AVMetadataIdentifierQuickTimeMetadataEncodedBy: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatagenre
declare const AVMetadataIdentifierQuickTimeMetadataGenre: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatainformation
declare const AVMetadataIdentifierQuickTimeMetadataInformation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataixml
declare const AVMetadataIdentifierQuickTimeMetadataiXML: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatakeywords
declare const AVMetadataIdentifierQuickTimeMetadataKeywords: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalivephotovitalityscore
declare const AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScore: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalivephotovitalityscoringversion
declare const AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScoringVersion: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationbody
declare const AVMetadataIdentifierQuickTimeMetadataLocationBody: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationdate
declare const AVMetadataIdentifierQuickTimeMetadataLocationDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationhorizontalaccuracyinmeters
declare const AVMetadataIdentifierQuickTimeMetadataLocationHorizontalAccuracyInMeters: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationiso6709
declare const AVMetadataIdentifierQuickTimeMetadataLocationISO6709: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationname
declare const AVMetadataIdentifierQuickTimeMetadataLocationName: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationnote
declare const AVMetadataIdentifierQuickTimeMetadataLocationNote: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationrole
declare const AVMetadataIdentifierQuickTimeMetadataLocationRole: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatamake
declare const AVMetadataIdentifierQuickTimeMetadataMake: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatamodel
declare const AVMetadataIdentifierQuickTimeMetadataModel: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataismontage
declare const AVMetadataIdentifierQuickTimeMetadataIsMontage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataoriginalartist
declare const AVMetadataIdentifierQuickTimeMetadataOriginalArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataperformer
declare const AVMetadataIdentifierQuickTimeMetadataPerformer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataphonogramrights
declare const AVMetadataIdentifierQuickTimeMetadataPhonogramRights: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatapreferredaffinetransform
declare const AVMetadataIdentifierQuickTimeMetadataPreferredAffineTransform: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataproducer
declare const AVMetadataIdentifierQuickTimeMetadataProducer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatapublisher
declare const AVMetadataIdentifierQuickTimeMetadataPublisher: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataratinguser
declare const AVMetadataIdentifierQuickTimeMetadataRatingUser: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatasoftware
declare const AVMetadataIdentifierQuickTimeMetadataSoftware: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataspatialovercapturequalityscore
declare const AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScore: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadataspatialovercapturequalityscoringversion
declare const AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScoringVersion: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatatitle
declare const AVMetadataIdentifierQuickTimeMetadataTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatavideoorientation
declare const AVMetadataIdentifierQuickTimeMetadataVideoOrientation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimemetadatayear
declare const AVMetadataIdentifierQuickTimeMetadataYear: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataaccessibilitydescription
declare const AVMetadataIdentifierQuickTimeUserDataAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataalbum
declare const AVMetadataIdentifierQuickTimeUserDataAlbum: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataarranger
declare const AVMetadataIdentifierQuickTimeUserDataArranger: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataartist
declare const AVMetadataIdentifierQuickTimeUserDataArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataauthor
declare const AVMetadataIdentifierQuickTimeUserDataAuthor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatachapter
declare const AVMetadataIdentifierQuickTimeUserDataChapter: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacomment
declare const AVMetadataIdentifierQuickTimeUserDataComment: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacomposer
declare const AVMetadataIdentifierQuickTimeUserDataComposer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacopyright
declare const AVMetadataIdentifierQuickTimeUserDataCopyright: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacreationdate
declare const AVMetadataIdentifierQuickTimeUserDataCreationDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacredits
declare const AVMetadataIdentifierQuickTimeUserDataCredits: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatadescription
declare const AVMetadataIdentifierQuickTimeUserDataDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatadirector
declare const AVMetadataIdentifierQuickTimeUserDataDirector: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatadisclaimer
declare const AVMetadataIdentifierQuickTimeUserDataDisclaimer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataencodedby
declare const AVMetadataIdentifierQuickTimeUserDataEncodedBy: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatafullname
declare const AVMetadataIdentifierQuickTimeUserDataFullName: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatagenre
declare const AVMetadataIdentifierQuickTimeUserDataGenre: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatahostcomputer
declare const AVMetadataIdentifierQuickTimeUserDataHostComputer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatainformation
declare const AVMetadataIdentifierQuickTimeUserDataInformation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatakeywords
declare const AVMetadataIdentifierQuickTimeUserDataKeywords: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatalocationiso6709
declare const AVMetadataIdentifierQuickTimeUserDataLocationISO6709: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatamake
declare const AVMetadataIdentifierQuickTimeUserDataMake: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatamodel
declare const AVMetadataIdentifierQuickTimeUserDataModel: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataoriginalartist
declare const AVMetadataIdentifierQuickTimeUserDataOriginalArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataoriginalformat
declare const AVMetadataIdentifierQuickTimeUserDataOriginalFormat: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataoriginalsource
declare const AVMetadataIdentifierQuickTimeUserDataOriginalSource: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataperformers
declare const AVMetadataIdentifierQuickTimeUserDataPerformers: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataphonogramrights
declare const AVMetadataIdentifierQuickTimeUserDataPhonogramRights: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataproducer
declare const AVMetadataIdentifierQuickTimeUserDataProducer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataproduct
declare const AVMetadataIdentifierQuickTimeUserDataProduct: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatapublisher
declare const AVMetadataIdentifierQuickTimeUserDataPublisher: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatasoftware
declare const AVMetadataIdentifierQuickTimeUserDataSoftware: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataspecialplaybackrequirements
declare const AVMetadataIdentifierQuickTimeUserDataSpecialPlaybackRequirements: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatataggedcharacteristic
declare const AVMetadataIdentifierQuickTimeUserDataTaggedCharacteristic: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatatrack
declare const AVMetadataIdentifierQuickTimeUserDataTrack: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatatrackname
declare const AVMetadataIdentifierQuickTimeUserDataTrackName: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdataurllink
declare const AVMetadataIdentifierQuickTimeUserDataURLLink: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatawarning
declare const AVMetadataIdentifierQuickTimeUserDataWarning: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierquicktimeuserdatawriter
declare const AVMetadataIdentifierQuickTimeUserDataWriter: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataalbumsortorder
declare const AVMetadataIdentifierID3MetadataAlbumSortOrder: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataalbumtitle
declare const AVMetadataIdentifierID3MetadataAlbumTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataattachedpicture
declare const AVMetadataIdentifierID3MetadataAttachedPicture: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataaudioencryption
declare const AVMetadataIdentifierID3MetadataAudioEncryption: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataaudioseekpointindex
declare const AVMetadataIdentifierID3MetadataAudioSeekPointIndex: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataband
declare const AVMetadataIdentifierID3MetadataBand: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatabeatsperminute
declare const AVMetadataIdentifierID3MetadataBeatsPerMinute: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacomments
declare const AVMetadataIdentifierID3MetadataComments: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacommercial
declare const AVMetadataIdentifierID3MetadataCommercial: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacommercialinformation
declare const AVMetadataIdentifierID3MetadataCommercialInformation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacomposer
declare const AVMetadataIdentifierID3MetadataComposer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataconductor
declare const AVMetadataIdentifierID3MetadataConductor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacontentgroupdescription
declare const AVMetadataIdentifierID3MetadataContentGroupDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacontenttype
declare const AVMetadataIdentifierID3MetadataContentType: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacopyright
declare const AVMetadataIdentifierID3MetadataCopyright: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacopyrightinformation
declare const AVMetadataIdentifierID3MetadataCopyrightInformation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatadate
declare const AVMetadataIdentifierID3MetadataDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataencodedby
declare const AVMetadataIdentifierID3MetadataEncodedBy: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataencodedwith
declare const AVMetadataIdentifierID3MetadataEncodedWith: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataencodingtime
declare const AVMetadataIdentifierID3MetadataEncodingTime: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataencryption
declare const AVMetadataIdentifierID3MetadataEncryption: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataequalization
declare const AVMetadataIdentifierID3MetadataEqualization: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataequalization2
declare const AVMetadataIdentifierID3MetadataEqualization2: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataeventtimingcodes
declare const AVMetadataIdentifierID3MetadataEventTimingCodes: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatafileowner
declare const AVMetadataIdentifierID3MetadataFileOwner: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatafiletype
declare const AVMetadataIdentifierID3MetadataFileType: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatageneralencapsulatedobject
declare const AVMetadataIdentifierID3MetadataGeneralEncapsulatedObject: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatagroupidentifier
declare const AVMetadataIdentifierID3MetadataGroupIdentifier: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatainitialkey
declare const AVMetadataIdentifierID3MetadataInitialKey: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatainternationalstandardrecordingcode
declare const AVMetadataIdentifierID3MetadataInternationalStandardRecordingCode: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatainternetradiostationname
declare const AVMetadataIdentifierID3MetadataInternetRadioStationName: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatainternetradiostationowner
declare const AVMetadataIdentifierID3MetadataInternetRadioStationOwner: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatainvolvedpeoplelist_v23
declare const AVMetadataIdentifierID3MetadataInvolvedPeopleList_v23: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatainvolvedpeoplelist_v24
declare const AVMetadataIdentifierID3MetadataInvolvedPeopleList_v24: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatalanguage
declare const AVMetadataIdentifierID3MetadataLanguage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataleadperformer
declare const AVMetadataIdentifierID3MetadataLeadPerformer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatalength
declare const AVMetadataIdentifierID3MetadataLength: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatalink
declare const AVMetadataIdentifierID3MetadataLink: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatalyricist
declare const AVMetadataIdentifierID3MetadataLyricist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatamediatype
declare const AVMetadataIdentifierID3MetadataMediaType: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatamodifiedby
declare const AVMetadataIdentifierID3MetadataModifiedBy: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatamood
declare const AVMetadataIdentifierID3MetadataMood: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatampeglocationlookuptable
declare const AVMetadataIdentifierID3MetadataMPEGLocationLookupTable: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatamusiccdidentifier
declare const AVMetadataIdentifierID3MetadataMusicCDIdentifier: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatamusiciancreditslist
declare const AVMetadataIdentifierID3MetadataMusicianCreditsList: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataofficialartistwebpage
declare const AVMetadataIdentifierID3MetadataOfficialArtistWebpage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataofficialaudiofilewebpage
declare const AVMetadataIdentifierID3MetadataOfficialAudioFileWebpage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataofficialaudiosourcewebpage
declare const AVMetadataIdentifierID3MetadataOfficialAudioSourceWebpage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataofficialinternetradiostationhomepage
declare const AVMetadataIdentifierID3MetadataOfficialInternetRadioStationHomepage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataofficialpublisherwebpage
declare const AVMetadataIdentifierID3MetadataOfficialPublisherWebpage: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataoriginalalbumtitle
declare const AVMetadataIdentifierID3MetadataOriginalAlbumTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataoriginalartist
declare const AVMetadataIdentifierID3MetadataOriginalArtist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataoriginalfilename
declare const AVMetadataIdentifierID3MetadataOriginalFilename: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataoriginallyricist
declare const AVMetadataIdentifierID3MetadataOriginalLyricist: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataoriginalreleasetime
declare const AVMetadataIdentifierID3MetadataOriginalReleaseTime: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataoriginalreleaseyear
declare const AVMetadataIdentifierID3MetadataOriginalReleaseYear: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataownership
declare const AVMetadataIdentifierID3MetadataOwnership: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatapartofaset
declare const AVMetadataIdentifierID3MetadataPartOfASet: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatapayment
declare const AVMetadataIdentifierID3MetadataPayment: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataperformersortorder
declare const AVMetadataIdentifierID3MetadataPerformerSortOrder: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataplaycounter
declare const AVMetadataIdentifierID3MetadataPlayCounter: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataplaylistdelay
declare const AVMetadataIdentifierID3MetadataPlaylistDelay: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatapopularimeter
declare const AVMetadataIdentifierID3MetadataPopularimeter: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatapositionsynchronization
declare const AVMetadataIdentifierID3MetadataPositionSynchronization: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataprivate
declare const AVMetadataIdentifierID3MetadataPrivate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataproducednotice
declare const AVMetadataIdentifierID3MetadataProducedNotice: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatapublisher
declare const AVMetadataIdentifierID3MetadataPublisher: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatarecommendedbuffersize
declare const AVMetadataIdentifierID3MetadataRecommendedBufferSize: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatarecordingdates
declare const AVMetadataIdentifierID3MetadataRecordingDates: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatarecordingtime
declare const AVMetadataIdentifierID3MetadataRecordingTime: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatarelativevolumeadjustment
declare const AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatarelativevolumeadjustment2
declare const AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment2: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatareleasetime
declare const AVMetadataIdentifierID3MetadataReleaseTime: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatareverb
declare const AVMetadataIdentifierID3MetadataReverb: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataseek
declare const AVMetadataIdentifierID3MetadataSeek: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatasetsubtitle
declare const AVMetadataIdentifierID3MetadataSetSubtitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatasignature
declare const AVMetadataIdentifierID3MetadataSignature: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatasize
declare const AVMetadataIdentifierID3MetadataSize: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatasubtitle
declare const AVMetadataIdentifierID3MetadataSubTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatasynchronizedlyric
declare const AVMetadataIdentifierID3MetadataSynchronizedLyric: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatasynchronizedtempocodes
declare const AVMetadataIdentifierID3MetadataSynchronizedTempoCodes: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatataggingtime
declare const AVMetadataIdentifierID3MetadataTaggingTime: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatatermsofuse
declare const AVMetadataIdentifierID3MetadataTermsOfUse: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatatime
declare const AVMetadataIdentifierID3MetadataTime: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatatitledescription
declare const AVMetadataIdentifierID3MetadataTitleDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatatitlesortorder
declare const AVMetadataIdentifierID3MetadataTitleSortOrder: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatatracknumber
declare const AVMetadataIdentifierID3MetadataTrackNumber: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatauniquefileidentifier
declare const AVMetadataIdentifierID3MetadataUniqueFileIdentifier: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadataunsynchronizedlyric
declare const AVMetadataIdentifierID3MetadataUnsynchronizedLyric: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatausertext
declare const AVMetadataIdentifierID3MetadataUserText: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatauserurl
declare const AVMetadataIdentifierID3MetadataUserURL: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatayear
declare const AVMetadataIdentifierID3MetadataYear: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierid3metadatacommerical
declare const AVMetadataIdentifierID3MetadataCommerical: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdataalbumandtrack
declare const AVMetadataIdentifier3GPUserDataAlbumAndTrack: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdataauthor
declare const AVMetadataIdentifier3GPUserDataAuthor: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatacollection
declare const AVMetadataIdentifier3GPUserDataCollection: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatacopyright
declare const AVMetadataIdentifier3GPUserDataCopyright: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatadescription
declare const AVMetadataIdentifier3GPUserDataDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatagenre
declare const AVMetadataIdentifier3GPUserDataGenre: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatakeywordlist
declare const AVMetadataIdentifier3GPUserDataKeywordList: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatalocation
declare const AVMetadataIdentifier3GPUserDataLocation: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatamediaclassification
declare const AVMetadataIdentifier3GPUserDataMediaClassification: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatamediarating
declare const AVMetadataIdentifier3GPUserDataMediaRating: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdataperformer
declare const AVMetadataIdentifier3GPUserDataPerformer: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatarecordingyear
declare const AVMetadataIdentifier3GPUserDataRecordingYear: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatathumbnail
declare const AVMetadataIdentifier3GPUserDataThumbnail: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatatitle
declare const AVMetadataIdentifier3GPUserDataTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifier3gpuserdatauserrating
declare const AVMetadataIdentifier3GPUserDataUserRating: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierisouserdataaccessibilitydescription
declare const AVMetadataIdentifierISOUserDataAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierisouserdatacopyright
declare const AVMetadataIdentifierISOUserDataCopyright: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierisouserdatadate
declare const AVMetadataIdentifierISOUserDataDate: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifierisouserdatataggedcharacteristic
declare const AVMetadataIdentifierISOUserDataTaggedCharacteristic: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifiericymetadatastreamtitle
declare const AVMetadataIdentifierIcyMetadataStreamTitle: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataidentifiericymetadatastreamurl
declare const AVMetadataIdentifierIcyMetadataStreamURL: cocoascript.AVMetadataIdentifier;
// https://developer.apple.com/documentation/avfoundation/avmetadataextraattributevalueurikey
declare const AVMetadataExtraAttributeValueURIKey: cocoascript.AVMetadataExtraAttributeKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataextraattributebaseurikey
declare const AVMetadataExtraAttributeBaseURIKey: cocoascript.AVMetadataExtraAttributeKey;
// https://developer.apple.com/documentation/avfoundation/avmetadataextraattributeinfokey
declare const AVMetadataExtraAttributeInfoKey: cocoascript.AVMetadataExtraAttributeKey;
// https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithmlowqualityzerolatency
declare const AVAudioTimePitchAlgorithmLowQualityZeroLatency: cocoascript.AVAudioTimePitchAlgorithm;
// https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithmspectral
declare const AVAudioTimePitchAlgorithmSpectral: cocoascript.AVAudioTimePitchAlgorithm;
// https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithmtimedomain
declare const AVAudioTimePitchAlgorithmTimeDomain: cocoascript.AVAudioTimePitchAlgorithm;
// https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithmvarispeed
declare const AVAudioTimePitchAlgorithmVarispeed: cocoascript.AVAudioTimePitchAlgorithm;
// https://developer.apple.com/documentation/avfoundation/avtrackassociationtypeaudiofallback
declare const AVTrackAssociationTypeAudioFallback: cocoascript.AVTrackAssociationType;
// https://developer.apple.com/documentation/avfoundation/avtrackassociationtypechapterlist
declare const AVTrackAssociationTypeChapterList: cocoascript.AVTrackAssociationType;
// https://developer.apple.com/documentation/avfoundation/avtrackassociationtypeforcedsubtitlesonly
declare const AVTrackAssociationTypeForcedSubtitlesOnly: cocoascript.AVTrackAssociationType;
// https://developer.apple.com/documentation/avfoundation/avtrackassociationtypemetadatareferent
declare const AVTrackAssociationTypeMetadataReferent: cocoascript.AVTrackAssociationType;
// https://developer.apple.com/documentation/avfoundation/avtrackassociationtypeselectionfollower
declare const AVTrackAssociationTypeSelectionFollower: cocoascript.AVTrackAssociationType;
// https://developer.apple.com/documentation/avfoundation/avtrackassociationtypetimecode
declare const AVTrackAssociationTypeTimecode: cocoascript.AVTrackAssociationType;
// https://developer.apple.com/documentation/avfoundation/avvideoaperturemodecleanaperture
declare const AVVideoApertureModeCleanAperture: cocoascript.AVVideoApertureMode;
// https://developer.apple.com/documentation/avfoundation/avvideoaperturemodeencodedpixels
declare const AVVideoApertureModeEncodedPixels: cocoascript.AVVideoApertureMode;
// https://developer.apple.com/documentation/avfoundation/avvideoaperturemodeproductionaperture
declare const AVVideoApertureModeProductionAperture: cocoascript.AVVideoApertureMode;
declare namespace cocoascript {
  /**
   * An object that defines the audio attributes for an asset variant.
   * https://developer.apple.com/documentation/avfoundation/avassetvariantaudioattributes
   */
  interface AVAssetVariantAudioAttributes extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetvariantaudioattributes/3746548-formatids
    formatIDs(): NSNumber;
    setFormatIDs(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantaudioattributes/3746549-renditionspecificattributesforme
    renditionSpecificAttributesForMediaOption(mediaSelectionOption: AVMediaSelectionOption):AVAssetVariantAudioRenditionSpecificAttributes;
    //
    alloc():AVAssetVariantAudioAttributes;
    //
    init():AVAssetVariantAudioAttributes;
  }
}

declare const AVAssetVariantAudioAttributes: cocoascript.AVAssetVariantAudioAttributes;
declare namespace cocoascript {
  /**
   * An object that defines the video attributes for an asset variant.
   * https://developer.apple.com/documentation/avfoundation/avassetvariantvideoattributes
   */
  interface AVAssetVariantVideoAttributes extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetvariantvideoattributes/3746553-codectypes
    codecTypes(): NSNumber;
    setCodecTypes(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantvideoattributes/3746554-nominalframerate
    nominalFrameRate(): number;
    setNominalFrameRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantvideoattributes/3746555-presentationsize
    presentationSize(): CGSize;
    setPresentationSize(value: CGSize): void;
    // https://developer.apple.com/documentation/avfoundation/avassetvariantvideoattributes/3746556-videorange
    videoRange(): AVVideoRange;
    setVideoRange(value: AVVideoRange): void;
    //
    alloc():AVAssetVariantVideoAttributes;
    //
    init():AVAssetVariantVideoAttributes;
  }
}

declare const AVAssetVariantVideoAttributes: cocoascript.AVAssetVariantVideoAttributes;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionunitstype
  type AVCaptionUnitsType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * Properties that are applicable to the input bus of a mixer node.
   * https://developer.apple.com/documentation/avfoundation/avaudiomixing
   */
  interface AVAudioMixing extends AVAudio3DMixing {
    // https://developer.apple.com/documentation/avfoundation/avaudiomixing/1390356-destinationformixer
    destinationForMixer_bus(mixer: AVAudioNode, bus: AVAudioNodeBus):AVAudioMixingDestination;
    // https://developer.apple.com/documentation/avfoundation/avaudiomixing/1387422-volume
    volume(): number;
    setVolume(value: number): void;
  }
}
declare namespace cocoascript {
  /**
   * A mixer node that simulates a 3D audio environment.
   * https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode
   */
  interface AVAudioEnvironmentNode extends AVAudioNode {
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1643654-init
    init():AVAudioEnvironmentNode;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1387396-distanceattenuationparameters
    distanceAttenuationParameters(): AVAudioEnvironmentDistanceAttenuationParameters;
    setDistanceAttenuationParameters(value: AVAudioEnvironmentDistanceAttenuationParameters): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1386966-listenerangularorientation
    listenerAngularOrientation(): AVAudio3DAngularOrientation;
    setListenerAngularOrientation(value: AVAudio3DAngularOrientation): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1389883-listenervectororientation
    listenerVectorOrientation(): AVAudio3DVectorOrientation;
    setListenerVectorOrientation(value: AVAudio3DVectorOrientation): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1387947-listenerposition
    listenerPosition(): AVAudio3DPoint;
    setListenerPosition(value: AVAudio3DPoint): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1389020-reverbparameters
    reverbParameters(): AVAudioEnvironmentReverbParameters;
    setReverbParameters(value: AVAudioEnvironmentReverbParameters): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1386300-outputvolume
    outputVolume(): number;
    setOutputVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1390049-applicablerenderingalgorithms
    applicableRenderingAlgorithms(): NSNumber;
    setApplicableRenderingAlgorithms(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/1385841-nextavailableinputbus
    nextAvailableInputBus(): AVAudioNodeBus;
    setNextAvailableInputBus(value: AVAudioNodeBus): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentnode/3114278-outputtype
    outputType(): AVAudioEnvironmentOutputType;
    setOutputType(value: AVAudioEnvironmentOutputType): void;
    //
    alloc():AVAudioEnvironmentNode;
    //
    init():AVAudioEnvironmentNode;
  }
}

declare const AVAudioEnvironmentNode: cocoascript.AVAudioEnvironmentNode;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudio3dmixingrenderingalgorithm
  type AVAudio3DMixingRenderingAlgorithm = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that encapsulates the parameters that you use to control the reverb of the environment node class.
   * https://developer.apple.com/documentation/avfoundation/avaudioenvironmentreverbparameters
   */
  interface AVAudioEnvironmentReverbParameters extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentreverbparameters/1386259-enable
    enable(): boolean;
    setEnable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentreverbparameters/1387313-filterparameters
    filterParameters(): AVAudioUnitEQFilterParameters;
    setFilterParameters(value: AVAudioUnitEQFilterParameters): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentreverbparameters/1387891-level
    level(): number;
    setLevel(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentreverbparameters/1390731-loadfactoryreverbpreset
    loadFactoryReverbPreset(preset: AVAudioUnitReverbPreset):void;
    //
    alloc():AVAudioEnvironmentReverbParameters;
    //
    init():AVAudioEnvironmentReverbParameters;
  }
}

declare const AVAudioEnvironmentReverbParameters: cocoascript.AVAudioEnvironmentReverbParameters;
declare namespace cocoascript {
  /**
   * A class that specifies the attenuation distance, the gradual loss in audio intensity, and other characteristics.
   * https://developer.apple.com/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters
   */
  interface AVAudioEnvironmentDistanceAttenuationParameters extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1387431-distanceattenuationmodel
    distanceAttenuationModel(): AVAudioEnvironmentDistanceAttenuationModel;
    setDistanceAttenuationModel(value: AVAudioEnvironmentDistanceAttenuationModel): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1387580-maximumdistance
    maximumDistance(): number;
    setMaximumDistance(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1386982-referencedistance
    referenceDistance(): number;
    setReferenceDistance(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1386448-rollofffactor
    rolloffFactor(): number;
    setRolloffFactor(value: number): void;
    //
    alloc():AVAudioEnvironmentDistanceAttenuationParameters;
    //
    init():AVAudioEnvironmentDistanceAttenuationParameters;
  }
}

declare const AVAudioEnvironmentDistanceAttenuationParameters: cocoascript.AVAudioEnvironmentDistanceAttenuationParameters;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentoutputtype
  type AVAudioEnvironmentOutputType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudio3dmixingsourcemode
  type AVAudio3DMixingSourceMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudio3dmixingpointsourceinheadmode
  type AVAudio3DMixingPointSourceInHeadMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  interface AVAudio3DPoint {
  }
}
declare namespace cocoascript {
  interface AVAudio3DVector {
  }
}
declare namespace cocoascript {
  interface AVAudio3DAngularOrientation {
  }
}
declare namespace cocoascript {
  interface AVAudio3DVectorOrientation {
  }
}
declare namespace cocoascript {
  /**
   * A group of connected audio node objects used to generate and process audio signals and perform audio input and output.
   * https://developer.apple.com/documentation/avfoundation/avaudioengine
   */
  interface AVAudioEngine extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1390381-init
    init():AVAudioEngine;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1390685-attachnode
    attachNode(node: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1388198-detachnode
    detachNode(node: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/3088797-attachednodes
    attachedNodes(): AVAudioNode;
    setAttachedNodes(value: AVAudioNode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1386063-inputnode
    inputNode(): AVAudioInputNode;
    setInputNode(value: AVAudioInputNode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1389103-outputnode
    outputNode(): AVAudioOutputNode;
    setOutputNode(value: AVAudioOutputNode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1385813-mainmixernode
    mainMixerNode(): AVAudioMixerNode;
    setMainMixerNode(value: AVAudioMixerNode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1388974-connect
    connect_to_format(node1: AVAudioNode, node2: AVAudioNode, format: AVAudioFormat):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1389776-connect
    connect_to_fromBus_toBus_format(node1: AVAudioNode, node2: AVAudioNode, bus1: AVAudioNodeBus, bus2: AVAudioNodeBus, format: AVAudioFormat):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1388181-disconnectnodeinput
    disconnectNodeInput(node: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1387251-disconnectnodeinput
    disconnectNodeInput_bus(node: AVAudioNode, bus: AVAudioNodeBus):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1386992-disconnectnodeoutput
    disconnectNodeOutput(node: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1390352-disconnectnodeoutput
    disconnectNodeOutput_bus(node: AVAudioNode, bus: AVAudioNodeBus):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/3012853-connectmidi
    connectMIDI_to_format_block(sourceNode: AVAudioNode, destinationNode: AVAudioNode, format: AVAudioFormat, tapBlock: AUMIDIOutputEventBlock):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/3012854-connectmidi
    connectMIDI_toNodes_format_block(sourceNode: AVAudioNode, destinationNodes: AVAudioNode, format: AVAudioFormat, tapBlock: AUMIDIOutputEventBlock):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/3012855-disconnectmidi
    disconnectMIDI_from(sourceNode: AVAudioNode, destinationNode: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/3012856-disconnectmidi
    disconnectMIDI_fromNodes(sourceNode: AVAudioNode, destinationNodes: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/3012857-disconnectmidiinput
    disconnectMIDIInput(node: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/3012858-disconnectmidioutput
    disconnectMIDIOutput(node: AVAudioNode):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1390410-musicsequence
    musicSequence(): MusicSequence;
    setMusicSequence(value: MusicSequence): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1386931-prepare
    prepare():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1387024-startandreturnerror
    startAndReturnError(outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1388591-running
    running(): boolean;
    setRunning(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1387076-pause
    pause():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1390414-stop
    stop():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1389668-reset
    reset():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881237-enablemanualrenderingmode
    enableManualRenderingMode_format_maximumFrameCount_error(mode: AVAudioEngineManualRenderingMode, pcmFormat: AVAudioFormat, maximumFrameCount: AVAudioFrameCount, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881239-disablemanualrenderingmode
    disableManualRenderingMode():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881253-renderoffline
    renderOffline_toBuffer_error(numberOfFrames: AVAudioFrameCount, buffer: AVAudioPCMBuffer, outError: NSError):AVAudioEngineManualRenderingStatus;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881244-manualrenderingblock
    manualRenderingBlock(): AVAudioEngineManualRenderingBlock;
    setManualRenderingBlock(value: AVAudioEngineManualRenderingBlock): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881246-manualrenderingformat
    manualRenderingFormat(): AVAudioFormat;
    setManualRenderingFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881254-manualrenderingmaximumframecount
    manualRenderingMaximumFrameCount(): AVAudioFrameCount;
    setManualRenderingMaximumFrameCount(value: AVAudioFrameCount): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881247-manualrenderingmode
    manualRenderingMode(): AVAudioEngineManualRenderingMode;
    setManualRenderingMode(value: AVAudioEngineManualRenderingMode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881255-manualrenderingsampletime
    manualRenderingSampleTime(): AVAudioFramePosition;
    setManualRenderingSampleTime(value: AVAudioFramePosition): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2879211-autoshutdownenabled
    autoShutdownEnabled(): boolean;
    setAutoShutdownEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/2881241-isinmanualrenderingmode
    isInManualRenderingMode(): boolean;
    setIsInManualRenderingMode(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1389510-connect
    connect_toConnectionPoints_fromBus_format(sourceNode: AVAudioNode, destNodes: AVAudioConnectionPoint, sourceBus: AVAudioNodeBus, format: AVAudioFormat):void;
    //
    alloc():AVAudioEngine;
    //
    init():AVAudioEngine;
  }
}

declare const AVAudioEngine: cocoascript.AVAudioEngine;
// https://developer.apple.com/documentation/avfoundation/avaudioengineconfigurationchangenotification
declare const AVAudioEngineConfigurationChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An abstract class for an audio generation, processing, or I/O block.
   * https://developer.apple.com/documentation/avfoundation/avaudionode
   */
  interface AVAudioNode extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1390147-inputformatforbus
    inputFormatForBus(bus: AVAudioNodeBus):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1387710-nameforinputbus
    nameForInputBus(bus: AVAudioNodeBus):NSString;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1390585-numberofinputs
    numberOfInputs(): NSUInteger;
    setNumberOfInputs(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1389195-outputformatforbus
    outputFormatForBus(bus: AVAudioNodeBus):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1390811-nameforoutputbus
    nameForOutputBus(bus: AVAudioNodeBus):NSString;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1385916-numberofoutputs
    numberOfOutputs(): NSUInteger;
    setNumberOfOutputs(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1387122-installtaponbus
    installTapOnBus_bufferSize_format_block(bus: AVAudioNodeBus, bufferSize: AVAudioFrameCount, format: AVAudioFormat, tapBlock: AVAudioNodeTapBlock):void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1388717-removetaponbus
    removeTapOnBus(bus: AVAudioNodeBus):void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1386896-engine
    engine(): AVAudioEngine;
    setEngine(value: AVAudioEngine): void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1385978-lastrendertime
    lastRenderTime(): AVAudioTime;
    setLastRenderTime(value: AVAudioTime): void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/2866396-auaudiounit
    AUAudioUnit(): AUAudioUnit;
    setAUAudioUnit(value: AUAudioUnit): void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/2875482-latency
    latency(): NSTimeInterval;
    setLatency(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/2875483-outputpresentationlatency
    outputPresentationLatency(): NSTimeInterval;
    setOutputPresentationLatency(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudionode/1385976-reset
    reset():void;
    //
    alloc():AVAudioNode;
    //
    init():AVAudioNode;
  }
}

declare const AVAudioNode: cocoascript.AVAudioNode;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetreaderstatus
  type AVAssetReaderStatus = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avassetimagegeneratoraperturemodecleanaperture
declare const AVAssetImageGeneratorApertureModeCleanAperture: cocoascript.AVAssetImageGeneratorApertureMode;
// https://developer.apple.com/documentation/avfoundation/avassetimagegeneratoraperturemodeencodedpixels
declare const AVAssetImageGeneratorApertureModeEncodedPixels: cocoascript.AVAssetImageGeneratorApertureMode;
// https://developer.apple.com/documentation/avfoundation/avassetimagegeneratoraperturemodeproductionaperture
declare const AVAssetImageGeneratorApertureModeProductionAperture: cocoascript.AVAssetImageGeneratorApertureMode;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avassetwriterinputmediadatalocation
  type AVAssetWriterInputMediaDataLocation = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that defines the interface to query for the requirements of the current pass.
   * https://developer.apple.com/documentation/avfoundation/avassetwriterinputpassdescription
   */
  interface AVAssetWriterInputPassDescription extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetwriterinputpassdescription/1388732-sourcetimeranges
    sourceTimeRanges(): NSValue;
    setSourceTimeRanges(value: NSValue): void;
    //
    alloc():AVAssetWriterInputPassDescription;
    //
    init():AVAssetWriterInputPassDescription;
  }
}

declare const AVAssetWriterInputPassDescription: cocoascript.AVAssetWriterInputPassDescription;
// https://developer.apple.com/documentation/avfoundation/avcaptionmediatypekey
declare const AVCaptionMediaTypeKey: cocoascript.AVCaptionSettingsKey;
// https://developer.apple.com/documentation/avfoundation/avcaptionmediasubtypekey
declare const AVCaptionMediaSubTypeKey: cocoascript.AVCaptionSettingsKey;
// https://developer.apple.com/documentation/avfoundation/avcaptiontimecodeframedurationkey
declare const AVCaptionTimeCodeFrameDurationKey: cocoascript.AVCaptionSettingsKey;
// https://developer.apple.com/documentation/avfoundation/avcaptionusedropframetimecodekey
declare const AVCaptionUseDropFrameTimeCodeKey: cocoascript.AVCaptionSettingsKey;
declare namespace cocoascript {
  /**
   * An object that represents a conversion warning produced by a validator.
   * https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning
   */
  interface AVCaptionConversionWarning extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/3752951-warningtype
    warningType(): AVCaptionConversionWarningType;
    setWarningType(value: AVCaptionConversionWarningType): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/3752950-rangeofcaptions
    rangeOfCaptions(): NSRange;
    setRangeOfCaptions(value: NSRange): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarning/3752949-adjustment
    adjustment(): AVCaptionConversionAdjustment;
    setAdjustment(value: AVCaptionConversionAdjustment): void;
    //
    alloc():AVCaptionConversionWarning;
    //
    init():AVCaptionConversionWarning;
  }
}

declare const AVCaptionConversionWarning: cocoascript.AVCaptionConversionWarning;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidatorstatus
  type AVCaptionConversionValidatorStatus = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspresethevc3840x2160
declare const AVOutputSettingsPresetHEVC3840x2160: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspresethevc1920x1080
declare const AVOutputSettingsPresetHEVC1920x1080: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspresethevc1920x1080withalpha
declare const AVOutputSettingsPresetHEVC1920x1080WithAlpha: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspreset3840x2160
declare const AVOutputSettingsPreset3840x2160: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspreset1280x720
declare const AVOutputSettingsPreset1280x720: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspreset960x540
declare const AVOutputSettingsPreset960x540: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspreset640x480
declare const AVOutputSettingsPreset640x480: cocoascript.AVOutputSettingsPreset;
// https://developer.apple.com/documentation/avfoundation/avoutputsettingspresethevc7680x4320
declare const AVOutputSettingsPresetHEVC7680x4320: cocoascript.AVOutputSettingsPreset;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avplayerratedidchangereason
  type AVPlayerRateDidChangeReason = cocoascript.NSString;
}
// https://developer.apple.com/documentation/avfoundation/avplayerwaitingtominimizestallsreason
declare const AVPlayerWaitingToMinimizeStallsReason: cocoascript.AVPlayerWaitingReason;
// https://developer.apple.com/documentation/avfoundation/avplayerwaitingwithnoitemtoplayreason
declare const AVPlayerWaitingWithNoItemToPlayReason: cocoascript.AVPlayerWaitingReason;
// https://developer.apple.com/documentation/avfoundation/avplayerwaitingwhileevaluatingbufferingratereason
declare const AVPlayerWaitingWhileEvaluatingBufferingRateReason: cocoascript.AVPlayerWaitingReason;
// https://developer.apple.com/documentation/avfoundation/avplayerwaitingduringinterstitialeventreason
declare const AVPlayerWaitingDuringInterstitialEventReason: cocoascript.AVPlayerWaitingReason;
// https://developer.apple.com/documentation/avfoundation/avplayerwaitingforcoordinatedplaybackreason
declare const AVPlayerWaitingForCoordinatedPlaybackReason: cocoascript.AVPlayerWaitingReason;
// https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutputtextstylingresolutiondefault
declare const AVPlayerItemLegibleOutputTextStylingResolutionDefault: cocoascript.AVPlayerItemLegibleOutputTextStylingResolution;
// https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutputtextstylingresolutionsourceandrulesonly
declare const AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly: cocoascript.AVPlayerItemLegibleOutputTextStylingResolution;
// https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspensionreasonaudiosessioninterrupted
declare const AVCoordinatedPlaybackSuspensionReasonAudioSessionInterrupted: cocoascript.AVCoordinatedPlaybackSuspensionReason;
// https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspensionreasoncoordinatedplaybacknotpossible
declare const AVCoordinatedPlaybackSuspensionReasonCoordinatedPlaybackNotPossible: cocoascript.AVCoordinatedPlaybackSuspensionReason;
// https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspensionreasonplayinginterstitial
declare const AVCoordinatedPlaybackSuspensionReasonPlayingInterstitial: cocoascript.AVCoordinatedPlaybackSuspensionReason;
// https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspensionreasonstallrecovery
declare const AVCoordinatedPlaybackSuspensionReasonStallRecovery: cocoascript.AVCoordinatedPlaybackSuspensionReason;
// https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspensionreasonuseractionrequired
declare const AVCoordinatedPlaybackSuspensionReasonUserActionRequired: cocoascript.AVCoordinatedPlaybackSuspensionReason;
// https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspensionreasonuserischangingcurrenttime
declare const AVCoordinatedPlaybackSuspensionReasonUserIsChangingCurrentTime: cocoascript.AVCoordinatedPlaybackSuspensionReason;
// https://developer.apple.com/documentation/avfoundation/avassetdownloadedassetevictionprioritydefault
declare const AVAssetDownloadedAssetEvictionPriorityDefault: cocoascript.AVAssetDownloadedAssetEvictionPriority;
// https://developer.apple.com/documentation/avfoundation/avassetdownloadedassetevictionpriorityimportant
declare const AVAssetDownloadedAssetEvictionPriorityImportant: cocoascript.AVAssetDownloadedAssetEvictionPriority;
// https://developer.apple.com/documentation/avfoundation/avcontentkeysystemfairplaystreaming
declare const AVContentKeySystemFairPlayStreaming: cocoascript.AVContentKeySystem;
// https://developer.apple.com/documentation/avfoundation/avcontentkeysystemclearkey
declare const AVContentKeySystemClearKey: cocoascript.AVContentKeySystem;
// https://developer.apple.com/documentation/avfoundation/avcontentkeysystemauthorizationtoken
declare const AVContentKeySystemAuthorizationToken: cocoascript.AVContentKeySystem;
// https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoptionprotocolversions
declare const AVContentKeySessionServerPlaybackContextOptionProtocolVersions: cocoascript.AVContentKeySessionServerPlaybackContextOption;
// https://developer.apple.com/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoptionserverchallenge
declare const AVContentKeySessionServerPlaybackContextOptionServerChallenge: cocoascript.AVContentKeySessionServerPlaybackContextOption;
// https://developer.apple.com/documentation/avfoundation/avcapturesystempressurelevelnominal
declare const AVCaptureSystemPressureLevelNominal: cocoascript.AVCaptureSystemPressureLevel;
// https://developer.apple.com/documentation/avfoundation/avcapturesystempressurelevelfair
declare const AVCaptureSystemPressureLevelFair: cocoascript.AVCaptureSystemPressureLevel;
// https://developer.apple.com/documentation/avfoundation/avcapturesystempressurelevelserious
declare const AVCaptureSystemPressureLevelSerious: cocoascript.AVCaptureSystemPressureLevel;
// https://developer.apple.com/documentation/avfoundation/avcapturesystempressurelevelcritical
declare const AVCaptureSystemPressureLevelCritical: cocoascript.AVCaptureSystemPressureLevel;
// https://developer.apple.com/documentation/avfoundation/avcapturesystempressurelevelshutdown
declare const AVCaptureSystemPressureLevelShutdown: cocoascript.AVCaptureSystemPressureLevel;
declare namespace cocoascript {
  /**
   * An object that provides information about sample data in a track.
   * https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation
   */
  interface AVAssetSegmentReportSampleInformation extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation/3546575-presentationtimestamp
    presentationTimeStamp(): CMTime;
    setPresentationTimeStamp(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation/3546574-offset
    offset(): NSInteger;
    setOffset(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation/3546573-length
    length(): NSInteger;
    setLength(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation/3563932-issyncsample
    isSyncSample(): boolean;
    setIsSyncSample(value: boolean): void;
    //
    alloc():AVAssetSegmentReportSampleInformation;
    //
    init():AVAssetSegmentReportSampleInformation;
  }
}

declare const AVAssetSegmentReportSampleInformation: cocoascript.AVAssetSegmentReportSampleInformation;
declare namespace cocoascript {
  /**
   * An audio player that provides playback of audio data from a file or memory.
   * https://developer.apple.com/documentation/avfoundation/avaudioplayer
   */
  interface AVAudioPlayer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387281-initwithcontentsofurl
    initWithContentsOfURL_error(url: NSURL, outError: NSError):AVAudioPlayer;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1388349-initwithcontentsofurl
    initWithContentsOfURL_fileTypeHint_error(url: NSURL, utiString: string | cocoascript.NSString, outError: NSError):AVAudioPlayer;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1388809-initwithdata
    initWithData_error(data: NSData, outError: NSError):AVAudioPlayer;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1388525-initwithdata
    initWithData_fileTypeHint_error(data: NSData, utiString: string | cocoascript.NSString, outError: NSError):AVAudioPlayer;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387297-currenttime
    currentTime(): NSTimeInterval;
    setCurrentTime(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1388395-duration
    duration(): NSTimeInterval;
    setDuration(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1386886-preparetoplay
    prepareToPlay():boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387388-play
    play():boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1389324-playattime
    playAtTime(time: NSTimeInterval):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1389363-pause
    pause():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1386018-stop
    stop():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1390139-playing
    playing(): boolean;
    setPlaying(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1386071-numberofloops
    numberOfLoops(): NSInteger;
    setNumberOfLoops(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1643591-setvolume
    setVolume_fadeDuration(volume: number, duration: NSTimeInterval):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1389330-volume
    volume(): number;
    setVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1390884-pan
    pan(): number;
    setPan(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1386118-rate
    rate(): number;
    setRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387084-enablerate
    enableRate(): boolean;
    setEnableRate(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387935-meteringenabled
    meteringEnabled(): boolean;
    setMeteringEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1388565-updatemeters
    updateMeters():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1390838-averagepowerforchannel
    averagePowerForChannel(channelNumber: NSUInteger):number;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1388509-peakpowerforchannel
    peakPowerForChannel(channelNumber: NSUInteger):number;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387134-delegate
    delegate(): AVAudioPlayerDelegate;
    setDelegate(value: AVAudioPlayerDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1388992-numberofchannels
    numberOfChannels(): NSUInteger;
    setNumberOfChannels(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1624038-channelassignments
    channelAssignments(): AVAudioSessionChannelDescription;
    setChannelAssignments(value: AVAudioSessionChannelDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/2870198-currentdevice
    currentDevice(): string | cocoascript.NSString;
    setCurrentDevice(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387462-devicecurrenttime
    deviceCurrentTime(): NSTimeInterval;
    setDeviceCurrentTime(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1389359-settings
    settings(): id;
    setSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1778427-format
    format(): AVAudioFormat;
    setFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1387448-url
    url(): NSURL;
    setUrl(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayer/1389437-data
    data(): NSData;
    setData(value: NSData): void;
    //
    alloc():AVAudioPlayer;
    //
    init():AVAudioPlayer;
  }
}

declare const AVAudioPlayer: cocoascript.AVAudioPlayer;
declare namespace cocoascript {
  /**
   * An object that represents attributes specific to a particular rendition.
   * https://developer.apple.com/documentation/avfoundation/avassetvariantaudiorenditionspecificattributes
   */
  interface AVAssetVariantAudioRenditionSpecificAttributes extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avassetvariantaudiorenditionspecificattributes/3746551-channelcount
    channelCount(): NSInteger;
    setChannelCount(value: NSInteger): void;
    //
    alloc():AVAssetVariantAudioRenditionSpecificAttributes;
    //
    init():AVAssetVariantAudioRenditionSpecificAttributes;
  }
}

declare const AVAssetVariantAudioRenditionSpecificAttributes: cocoascript.AVAssetVariantAudioRenditionSpecificAttributes;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avvideorange
  type AVVideoRange = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * The base class for nodes that connect to the system's audio input or output.
   * https://developer.apple.com/documentation/avfoundation/avaudioionode
   */
  interface AVAudioIONode extends AVAudioNode {
    // https://developer.apple.com/documentation/avfoundation/avaudioionode/1390587-audiounit
    audioUnit(): AudioUnit;
    setAudioUnit(value: AudioUnit): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioionode/1385631-presentationlatency
    presentationLatency(): NSTimeInterval;
    setPresentationLatency(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioionode/3152101-voiceprocessingenabled
    voiceProcessingEnabled(): boolean;
    setVoiceProcessingEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioionode/3152100-setvoiceprocessingenabled
    setVoiceProcessingEnabled_error(enabled: boolean, outError: NSError):boolean;
    //
    alloc():AVAudioIONode;
    //
    init():AVAudioIONode;
  }
}

declare const AVAudioIONode: cocoascript.AVAudioIONode;
declare namespace cocoascript {
  /**
   * A node that connects to the system’s audio input.
   * https://developer.apple.com/documentation/avfoundation/avaudioinputnode
   */
  interface AVAudioInputNode extends AVAudioIONode {
    // https://developer.apple.com/documentation/avfoundation/avaudioinputnode/2881264-setmanualrenderinginputpcmformat
    setManualRenderingInputPCMFormat_inputBlock(format: AVAudioFormat, block: AVAudioIONodeInputBlock):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioinputnode/3152102-voiceprocessingagcenabled
    voiceProcessingAGCEnabled(): boolean;
    setVoiceProcessingAGCEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioinputnode/3152103-voiceprocessingbypassed
    voiceProcessingBypassed(): boolean;
    setVoiceProcessingBypassed(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioinputnode/3152104-voiceprocessinginputmuted
    voiceProcessingInputMuted(): boolean;
    setVoiceProcessingInputMuted(value: boolean): void;
    //
    alloc():AVAudioInputNode;
    //
    init():AVAudioInputNode;
  }
}

declare const AVAudioInputNode: cocoascript.AVAudioInputNode;
declare namespace cocoascript {
  /**
   * This class represents an audio node that connects to the system’s audio output.
   * https://developer.apple.com/documentation/avfoundation/avaudiooutputnode
   */
  interface AVAudioOutputNode extends AVAudioIONode {
    //
    alloc():AVAudioOutputNode;
    //
    init():AVAudioOutputNode;
  }
}

declare const AVAudioOutputNode: cocoascript.AVAudioOutputNode;
declare namespace cocoascript {
  /**
   * A node that mixes its inputs to a single output.
   * https://developer.apple.com/documentation/avfoundation/avaudiomixernode
   */
  interface AVAudioMixerNode extends AVAudioNode {
    // https://developer.apple.com/documentation/avfoundation/avaudiomixernode/1643644-init
    init():AVAudioMixerNode;
    // https://developer.apple.com/documentation/avfoundation/avaudiomixernode/1390244-outputvolume
    outputVolume(): number;
    setOutputVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiomixernode/1388695-nextavailableinputbus
    nextAvailableInputBus(): AVAudioNodeBus;
    setNextAvailableInputBus(value: AVAudioNodeBus): void;
    //
    alloc():AVAudioMixerNode;
    //
    init():AVAudioMixerNode;
  }
}

declare const AVAudioMixerNode: cocoascript.AVAudioMixerNode;
declare namespace cocoascript {
  /**
   * A class that plays buffers or segments of audio files.
   * https://developer.apple.com/documentation/avfoundation/avaudioplayernode
   */
  interface AVAudioPlayerNode extends AVAudioNode {
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1643624-init
    init():AVAudioPlayerNode;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1390047-schedulefile
    scheduleFile_atTime_completionHandler(file: AVAudioFile, when: AVAudioTime, completionHandler: AVAudioNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/2867814-schedulefile
    scheduleFile_atTime_completionCallbackType_completionHandler(file: AVAudioFile, when: AVAudioTime, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1385884-schedulesegment
    scheduleSegment_startingFrame_frameCount_atTime_completionHandler(file: AVAudioFile, startFrame: AVAudioFramePosition, numberFrames: AVAudioFrameCount, when: AVAudioTime, completionHandler: AVAudioNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/2867815-schedulesegment
    scheduleSegment_startingFrame_frameCount_atTime_completionCallbackType_completionHandler(file: AVAudioFile, startFrame: AVAudioFramePosition, numberFrames: AVAudioFrameCount, when: AVAudioTime, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1388422-schedulebuffer
    scheduleBuffer_atTime_options_completionHandler(buffer: AVAudioPCMBuffer, when: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, completionHandler: AVAudioNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1389996-schedulebuffer
    scheduleBuffer_completionHandler(buffer: AVAudioPCMBuffer, completionHandler: AVAudioNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/2867816-schedulebuffer
    scheduleBuffer_atTime_options_completionCallbackType_completionHandler(buffer: AVAudioPCMBuffer, when: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/2867817-schedulebuffer
    scheduleBuffer_completionCallbackType_completionHandler(buffer: AVAudioPCMBuffer, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1386450-nodetimeforplayertime
    nodeTimeForPlayerTime(playerTime: AVAudioTime):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1390449-playertimefornodetime
    playerTimeForNodeTime(nodeTime: AVAudioTime):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1388511-preparewithframecount
    prepareWithFrameCount(frameCount: AVAudioFrameCount):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1388659-play
    play():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1389304-playattime
    playAtTime(when: AVAudioTime):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1390631-playing
    playing(): boolean;
    setPlaying(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1388025-pause
    pause():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayernode/1388230-stop
    stop():void;
    //
    alloc():AVAudioPlayerNode;
    //
    init():AVAudioPlayerNode;
  }
}

declare const AVAudioPlayerNode: cocoascript.AVAudioPlayerNode;
declare namespace cocoascript {
  /**
   * A collection of MIDI events organized into multiple music tracks, plus a player to play back the events.
   * https://developer.apple.com/documentation/avfoundation/avaudiosequencer
   */
  interface AVAudioSequencer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1385851-init
    init():AVAudioSequencer;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1388339-initwithaudioengine
    initWithAudioEngine(engine: AVAudioEngine):AVAudioSequencer;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1390589-writetourl
    writeToURL_SMPTEResolution_replaceExisting_error(fileURL: NSURL, resolution: NSInteger, replace: boolean, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1385633-preparetoplay
    prepareToPlay():void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1387594-startandreturnerror
    startAndReturnError(outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1386674-stop
    stop():void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1389720-loadfromdata
    loadFromData_options_error(data: NSData, options: AVMusicSequenceLoadOptions, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1386241-loadfromurl
    loadFromURL_options_error(fileURL: NSURL, options: AVMusicSequenceLoadOptions, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1386184-hosttimeforbeats
    hostTimeForBeats_error(inBeats: AVMusicTimeStamp, outError: NSError):UInt64;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1387615-secondsforbeats
    secondsForBeats(beats: AVMusicTimeStamp):NSTimeInterval;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1389012-beatsforhosttime
    beatsForHostTime_error(inHostTime: UInt64, outError: NSError):AVMusicTimeStamp;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1387853-beatsforseconds
    beatsForSeconds(seconds: NSTimeInterval):AVMusicTimeStamp;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1388701-datawithsmpteresolution
    dataWithSMPTEResolution_error(SMPTEResolution: NSInteger, outError: NSError):NSData;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1388910-currentpositioninbeats
    currentPositionInBeats(): NSTimeInterval;
    setCurrentPositionInBeats(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1390524-currentpositioninseconds
    currentPositionInSeconds(): NSTimeInterval;
    setCurrentPositionInSeconds(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1388402-playing
    playing(): boolean;
    setPlaying(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1387903-rate
    rate(): number;
    setRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1390252-tempotrack
    tempoTrack(): AVMusicTrack;
    setTempoTrack(value: AVMusicTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1387567-tracks
    tracks(): AVMusicTrack;
    setTracks(value: AVMusicTrack): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosequencer/1389262-userinfo
    userInfo(): id;
    setUserInfo(value: id): void;
    //
    alloc():AVAudioSequencer;
    //
    init():AVAudioSequencer;
  }
}

declare const AVAudioSequencer: cocoascript.AVAudioSequencer;
declare namespace cocoascript {
  /**
   * A class that encapsulates Apple's Sampler Audio Unit.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitsampler
   */
  interface AVAudioUnitSampler extends AVAudioUnitMIDIInstrument {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitsampler/1388631-loadaudiofilesaturls
    loadAudioFilesAtURLs_error(audioFiles: NSURL, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitsampler/1389514-loadinstrumentaturl
    loadInstrumentAtURL_error(instrumentURL: NSURL, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitsampler/1385687-loadsoundbankinstrumentaturl
    loadSoundBankInstrumentAtURL_program_bankMSB_bankLSB_error(bankURL: NSURL, program: number, bankMSB: number, bankLSB: number, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitsampler/1386733-globaltuning
    globalTuning(): number;
    setGlobalTuning(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitsampler/1386788-mastergain
    masterGain(): number;
    setMasterGain(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitsampler/1385805-stereopan
    stereoPan(): number;
    setStereoPan(value: number): void;
    //
    alloc():AVAudioUnitSampler;
    //
    init():AVAudioUnitSampler;
  }
}

declare const AVAudioUnitSampler: cocoascript.AVAudioUnitSampler;
declare namespace cocoascript {
  /**
   * An abstract class representing music devices or remote instruments.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument
   */
  interface AVAudioUnitMIDIInstrument extends AVAudioUnit {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1386929-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(description: AudioComponentDescription):AVAudioUnitMIDIInstrument;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1388145-sendcontroller
    sendController_withValue_onChannel(controller: number, value: number, channel: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1387561-sendmidievent
    sendMIDIEvent_data1(midiStatus: number, data1: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1387014-sendmidievent
    sendMIDIEvent_data1_data2(midiStatus: number, data1: number, data2: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1387812-sendmidisysexevent
    sendMIDISysExEvent(midiData: NSData):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1390430-sendpitchbend
    sendPitchBend_onChannel(pitchbend: number, channel: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1386668-sendpressure
    sendPressure_onChannel(pressure: number, channel: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1388563-sendpressureforkey
    sendPressureForKey_withValue_onChannel(key: number, value: number, channel: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1390451-sendprogramchange
    sendProgramChange_bankMSB_bankLSB_onChannel(program: number, bankMSB: number, bankLSB: number, channel: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1386110-sendprogramchange
    sendProgramChange_onChannel(program: number, channel: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1386198-startnote
    startNote_withVelocity_onChannel(note: number, velocity: number, channel: number):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitmidiinstrument/1390098-stopnote
    stopNote_onChannel(note: number, channel: number):void;
    //
    alloc():AVAudioUnitMIDIInstrument;
    //
    init():AVAudioUnitMIDIInstrument;
  }
}

declare const AVAudioUnitMIDIInstrument: cocoascript.AVAudioUnitMIDIInstrument;
declare namespace cocoascript {
  /**
   * A node that supplies audio data.
   * https://developer.apple.com/documentation/avfoundation/avaudiosourcenode
   */
  interface AVAudioSourceNode extends AVAudioNode {
    // https://developer.apple.com/documentation/avfoundation/avaudiosourcenode/3113882-initwithrenderblock
    initWithRenderBlock(block: AVAudioSourceNodeRenderBlock):AVAudioSourceNode;
    // https://developer.apple.com/documentation/avfoundation/avaudiosourcenode/3325484-initwithformat
    initWithFormat_renderBlock(format: AVAudioFormat, block: AVAudioSourceNodeRenderBlock):AVAudioSourceNode;
    //
    alloc():AVAudioSourceNode;
    //
    init():AVAudioSourceNode;
  }
}

declare const AVAudioSourceNode: cocoascript.AVAudioSourceNode;
declare namespace cocoascript {
  /**
   * A node that receives audio data.
   * https://developer.apple.com/documentation/avfoundation/avaudiosinknode
   */
  interface AVAudioSinkNode extends AVAudioNode {
    // https://developer.apple.com/documentation/avfoundation/avaudiosinknode/3152110-initwithreceiverblock
    initWithReceiverBlock(block: AVAudioSinkNodeReceiverBlock):AVAudioSinkNode;
    //
    alloc():AVAudioSinkNode;
    //
    init():AVAudioSinkNode;
  }
}

declare const AVAudioSinkNode: cocoascript.AVAudioSinkNode;
declare namespace cocoascript {
  /**
   * A class that converts streams of audio between various formats.
   * https://developer.apple.com/documentation/avfoundation/avaudioconverter
   */
  interface AVAudioConverter extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1387008-initfromformat
    initFromFormat_toFormat(fromFormat: AVAudioFormat, toFormat: AVAudioFormat):AVAudioConverter;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1387865-converttobuffer
    convertToBuffer_error_withInputFromBlock(outputBuffer: AVAudioBuffer, outError: NSError, inputBlock: AVAudioConverterInputBlock):AVAudioConverterOutputStatus;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1388341-converttobuffer
    convertToBuffer_fromBuffer_error(outputBuffer: AVAudioPCMBuffer, inputBuffer: AVAudioPCMBuffer, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1390876-reset
    reset():void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1390653-channelmap
    channelMap(): NSNumber;
    setChannelMap(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1386312-dither
    dither(): boolean;
    setDither(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1388244-downmix
    downmix(): boolean;
    setDownmix(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1388914-inputformat
    inputFormat(): AVAudioFormat;
    setInputFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1387563-outputformat
    outputFormat(): AVAudioFormat;
    setOutputFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1390770-magiccookie
    magicCookie(): NSData;
    setMagicCookie(value: NSData): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1390069-maximumoutputpacketsize
    maximumOutputPacketSize(): NSInteger;
    setMaximumOutputPacketSize(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1388940-applicableencodebitrates
    applicableEncodeBitRates(): NSNumber;
    setApplicableEncodeBitRates(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1388589-availableencodebitrates
    availableEncodeBitRates(): NSNumber;
    setAvailableEncodeBitRates(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1387337-availableencodechannellayouttags
    availableEncodeChannelLayoutTags(): NSNumber;
    setAvailableEncodeChannelLayoutTags(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1390373-bitrate
    bitRate(): NSInteger;
    setBitRate(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1386092-bitratestrategy
    bitRateStrategy(): string | cocoascript.NSString;
    setBitRateStrategy(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1390887-samplerateconverterquality
    sampleRateConverterQuality(): NSInteger;
    setSampleRateConverterQuality(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1387976-samplerateconverteralgorithm
    sampleRateConverterAlgorithm(): string | cocoascript.NSString;
    setSampleRateConverterAlgorithm(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1389427-applicableencodesamplerates
    applicableEncodeSampleRates(): NSNumber;
    setApplicableEncodeSampleRates(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1386202-availableencodesamplerates
    availableEncodeSampleRates(): NSNumber;
    setAvailableEncodeSampleRates(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1389770-primeinfo
    primeInfo(): AVAudioConverterPrimeInfo;
    setPrimeInfo(value: AVAudioConverterPrimeInfo): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconverter/1387299-primemethod
    primeMethod(): AVAudioConverterPrimeMethod;
    setPrimeMethod(value: AVAudioConverterPrimeMethod): void;
    //
    alloc():AVAudioConverter;
    //
    init():AVAudioConverter;
  }
}

declare const AVAudioConverter: cocoascript.AVAudioConverter;
declare namespace cocoascript {
  /**
   * An audio file that can be opened for reading or writing.
   * https://developer.apple.com/documentation/avfoundation/avaudiofile
   */
  interface AVAudioFile extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1387283-initforreading
    initForReading_commonFormat_interleaved_error(fileURL: NSURL, format: AVAudioCommonFormat, interleaved: boolean, outError: NSError):AVAudioFile;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1388218-initforreading
    initForReading_error(fileURL: NSURL, outError: NSError):AVAudioFile;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1387154-initforwriting
    initForWriting_settings_commonFormat_interleaved_error(fileURL: NSURL, settings: AVAudioFile, format: AVAudioCommonFormat, interleaved: boolean, outError: NSError):AVAudioFile;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1390840-initforwriting
    initForWriting_settings_error(fileURL: NSURL, settings: AVAudioFile, outError: NSError):AVAudioFile;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1388043-readintobuffer
    readIntoBuffer_error(buffer: AVAudioPCMBuffer, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1389774-readintobuffer
    readIntoBuffer_frameCount_error(buffer: AVAudioPCMBuffer, frames: AVAudioFrameCount, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1385637-writefrombuffer
    writeFromBuffer_error(buffer: AVAudioPCMBuffer, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1387096-fileformat
    fileFormat(): AVAudioFormat;
    setFileFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1388308-processingformat
    processingFormat(): AVAudioFormat;
    setProcessingFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1390785-frameposition
    framePosition(): AVAudioFramePosition;
    setFramePosition(value: AVAudioFramePosition): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1390473-length
    length(): AVAudioFramePosition;
    setLength(value: AVAudioFramePosition): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiofile/1387360-url
    url(): NSURL;
    setUrl(value: NSURL): void;
    //
    alloc():AVAudioFile;
    //
    init():AVAudioFile;
  }
}

declare const AVAudioFile: cocoascript.AVAudioFile;
// https://developer.apple.com/documentation/avfoundation/avaudiofiletypekey
declare const AVAudioFileTypeKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A buffer of audio data and its format.
   * https://developer.apple.com/documentation/avfoundation/avaudiobuffer
   */
  interface AVAudioBuffer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiobuffer/1387540-format
    format(): AVAudioFormat;
    setFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiobuffer/1385579-audiobufferlist
    audioBufferList(): AudioBufferList;
    setAudioBufferList(value: AudioBufferList): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiobuffer/1389207-mutableaudiobufferlist
    mutableAudioBufferList(): AudioBufferList;
    setMutableAudioBufferList(value: AudioBufferList): void;
    //
    alloc():AVAudioBuffer;
    //
    init():AVAudioBuffer;
  }
}

declare const AVAudioBuffer: cocoascript.AVAudioBuffer;
declare namespace cocoascript {
  /**
   * A class used by the audio engine to represent time.
   * https://developer.apple.com/documentation/avfoundation/avaudiotime
   */
  interface AVAudioTime extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1389146-initwithaudiotimestamp
    initWithAudioTimeStamp_sampleRate(ts: AudioTimeStamp, sampleRate: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1386954-initwithhosttime
    initWithHostTime(hostTime: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1386568-initwithhosttime
    initWithHostTime_sampleTime_atRate(hostTime: number, sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1387972-initwithsampletime
    initWithSampleTime_atRate(sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1522153-timewithaudiotimestamp
    timeWithAudioTimeStamp_sampleRate(ts: AudioTimeStamp, sampleRate: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1522150-timewithhosttime
    timeWithHostTime_sampleTime_atRate(hostTime: number, sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1522149-timewithsampletime
    timeWithSampleTime_atRate(sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1522148-timewithhosttime
    timeWithHostTime(hostTime: number):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1387772-extrapolatetimefromanchor
    extrapolateTimeFromAnchor(anchorTime: AVAudioTime):AVAudioTime;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1385955-hosttime
    hostTime(): number;
    setHostTime(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1387611-hosttimevalid
    hostTimeValid(): boolean;
    setHostTimeValid(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1388521-hosttimeforseconds
    hostTimeForSeconds(seconds: NSTimeInterval):number;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1386096-secondsforhosttime
    secondsForHostTime(hostTime: number):NSTimeInterval;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1387315-samplerate
    sampleRate(): number;
    setSampleRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1389853-sampletime
    sampleTime(): AVAudioFramePosition;
    setSampleTime(value: AVAudioFramePosition): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1385868-sampletimevalid
    sampleTimeValid(): boolean;
    setSampleTimeValid(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiotime/1388908-audiotimestamp
    audioTimeStamp(): AudioTimeStamp;
    setAudioTimeStamp(value: AudioTimeStamp): void;
    //
    alloc():AVAudioTime;
    //
    init():AVAudioTime;
  }
}

declare const AVAudioTime: cocoascript.AVAudioTime;
declare namespace cocoascript {
  /**
   * An object representing a connection to a mixer node from a node that conforms to the
   * https://developer.apple.com/documentation/avfoundation/avaudiomixingdestination
   */
  interface AVAudioMixingDestination extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiomixingdestination/1389898-connectionpoint
    connectionPoint(): AVAudioConnectionPoint;
    setConnectionPoint(value: AVAudioConnectionPoint): void;
    //
    alloc():AVAudioMixingDestination;
    //
    init():AVAudioMixingDestination;
  }
}

declare const AVAudioMixingDestination: cocoascript.AVAudioMixingDestination;
declare namespace cocoascript {
  /**
   * A protocol that defines stereo mixing properties used by mixers.
   * https://developer.apple.com/documentation/avfoundation/avaudiostereomixing
   */
  interface AVAudioStereoMixing extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiostereomixing/1388580-pan
    pan(): number;
    setPan(value: number): void;
  }
}
declare namespace cocoascript {
  /**
   * An audio unit subclass that generates audio output.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitgenerator
   */
  interface AVAudioUnitGenerator extends AVAudioUnit {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitgenerator/1387964-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription):AVAudioUnitGenerator;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitgenerator/1390858-bypass
    bypass(): boolean;
    setBypass(value: boolean): void;
    //
    alloc():AVAudioUnitGenerator;
    //
    init():AVAudioUnitGenerator;
  }
}

declare const AVAudioUnitGenerator: cocoascript.AVAudioUnitGenerator;
declare namespace cocoascript {
  /**
   * A class that represents a buffer of audio data with a format.
   * https://developer.apple.com/documentation/avfoundation/avaudioformat
   */
  interface AVAudioFormat extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1388426-initstandardformatwithsamplerate
    initStandardFormatWithSampleRate_channelLayout(sampleRate: number, layout: AVAudioChannelLayout):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1390416-initstandardformatwithsamplerate
    initStandardFormatWithSampleRate_channels(sampleRate: number, channels: AVAudioChannelCount):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1390591-initwithcommonformat
    initWithCommonFormat_sampleRate_channels_interleaved(format: AVAudioCommonFormat, sampleRate: number, channels: AVAudioChannelCount, interleaved: boolean):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1389361-initwithcommonformat
    initWithCommonFormat_sampleRate_interleaved_channelLayout(format: AVAudioCommonFormat, sampleRate: number, interleaved: boolean, layout: AVAudioChannelLayout):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1387931-initwithsettings
    initWithSettings(settings: AVAudioFormat):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1390106-initwithstreamdescription
    initWithStreamDescription(asbd: AudioStreamBasicDescription):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1389347-initwithstreamdescription
    initWithStreamDescription_channelLayout(asbd: AudioStreamBasicDescription, layout: AVAudioChannelLayout):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1387465-initwithcmaudioformatdescription
    initWithCMAudioFormatDescription(formatDescription: CMAudioFormatDescriptionRef):AVAudioFormat;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1386843-streamdescription
    streamDescription(): AudioStreamBasicDescription;
    setStreamDescription(value: AudioStreamBasicDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1385683-isequal
    isEqual(object: AVAudioFormat):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1386831-channelcount
    channelCount(): AVAudioChannelCount;
    setChannelCount(value: AVAudioChannelCount): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1390671-channellayout
    channelLayout(): AVAudioChannelLayout;
    setChannelLayout(value: AVAudioChannelLayout): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1387814-samplerate
    sampleRate(): number;
    setSampleRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1387467-formatdescription
    formatDescription(): CMAudioFormatDescriptionRef;
    setFormatDescription(value: CMAudioFormatDescriptionRef): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1387347-standard
    standard(): boolean;
    setStandard(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1389340-interleaved
    interleaved(): boolean;
    setInterleaved(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1389455-commonformat
    commonFormat(): AVAudioCommonFormat;
    setCommonFormat(value: AVAudioCommonFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1386904-settings
    settings(): id;
    setSettings(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioformat/1639892-magiccookie
    magicCookie(): NSData;
    setMagicCookie(value: NSData): void;
    //
    alloc():AVAudioFormat;
    //
    init():AVAudioFormat;
  }
}

declare const AVAudioFormat: cocoascript.AVAudioFormat;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioenvironmentdistanceattenuationmodel
  type AVAudioEnvironmentDistanceAttenuationModel = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioenginemanualrenderingblock
  type AVAudioEngineManualRenderingBlock = any;
}
declare namespace cocoascript {
  /**
   * A representation of either a source or destination connection point in the audio engine.
   * https://developer.apple.com/documentation/avfoundation/avaudioconnectionpoint
   */
  interface AVAudioConnectionPoint extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioconnectionpoint/1388569-initwithnode
    initWithNode_bus(node: AVAudioNode, bus: AVAudioNodeBus):AVAudioConnectionPoint;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1387521-inputconnectionpointfornode
    inputConnectionPointForNode_inputBus(node: AVAudioNode, bus: AVAudioNodeBus):AVAudioConnectionPoint;
    // https://developer.apple.com/documentation/avfoundation/avaudioengine/1389298-outputconnectionpointsfornode
    outputConnectionPointsForNode_outputBus(node: AVAudioNode, bus: AVAudioNodeBus):AVAudioConnectionPoint;
    // https://developer.apple.com/documentation/avfoundation/avaudioconnectionpoint/1389288-bus
    bus(): AVAudioNodeBus;
    setBus(value: AVAudioNodeBus): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioconnectionpoint/1386935-node
    node(): AVAudioNode;
    setNode(value: AVAudioNode): void;
    //
    alloc():AVAudioConnectionPoint;
    //
    init():AVAudioConnectionPoint;
  }
}

declare const AVAudioConnectionPoint: cocoascript.AVAudioConnectionPoint;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioenginemanualrenderingerror
  type AVAudioEngineManualRenderingError = any;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioenginemanualrenderingmode
  type AVAudioEngineManualRenderingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioenginemanualrenderingstatus
  type AVAudioEngineManualRenderingStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudionodetapblock
  type AVAudioNodeTapBlock = cocoascript.AVAudioTime;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudionodecompletionhandler
  type AVAudioNodeCompletionHandler = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudionodebus
  type AVAudioNodeBus = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/avfoundation/avassetwriterinputmediadatalocationbeforemainmediadatanotinterleaved
declare const AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved: cocoascript.AVAssetWriterInputMediaDataLocation;
// https://developer.apple.com/documentation/avfoundation/avassetwriterinputmediadatalocationinterleavedwithmainmediadata
declare const AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData: cocoascript.AVAssetWriterInputMediaDataLocation;
declare namespace cocoascript {
  /**
   * An object that describes an adjustment to correct a problem found during validation of a caption conversion.
   * https://developer.apple.com/documentation/avfoundation/avcaptionconversionadjustment
   */
  interface AVCaptionConversionAdjustment extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversionadjustment/3752928-adjustmenttype
    adjustmentType(): AVCaptionConversionAdjustmentType;
    setAdjustmentType(value: AVCaptionConversionAdjustmentType): void;
    //
    alloc():AVCaptionConversionAdjustment;
    //
    init():AVCaptionConversionAdjustment;
  }
}

declare const AVCaptionConversionAdjustment: cocoascript.AVCaptionConversionAdjustment;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarningtype
  type AVCaptionConversionWarningType = cocoascript.NSString;
}
// https://developer.apple.com/documentation/avfoundation/avplayerratedidchangereasonappbackgrounded
declare const AVPlayerRateDidChangeReasonAppBackgrounded: cocoascript.AVPlayerRateDidChangeReason;
// https://developer.apple.com/documentation/avfoundation/avplayerratedidchangereasonaudiosessioninterrupted
declare const AVPlayerRateDidChangeReasonAudioSessionInterrupted: cocoascript.AVPlayerRateDidChangeReason;
// https://developer.apple.com/documentation/avfoundation/avplayerratedidchangereasonsetratecalled
declare const AVPlayerRateDidChangeReasonSetRateCalled: cocoascript.AVPlayerRateDidChangeReason;
// https://developer.apple.com/documentation/avfoundation/avplayerratedidchangereasonsetratefailed
declare const AVPlayerRateDidChangeReasonSetRateFailed: cocoascript.AVPlayerRateDidChangeReason;
declare namespace cocoascript {
  /**
   * A class that describes a hardware channel on the current device.
   * https://developer.apple.com/documentation/avfoundation/avaudiosessionchanneldescription
   */
  interface AVAudioSessionChannelDescription extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionchanneldescription/1616521-channelname
    channelName(): string | cocoascript.NSString;
    setChannelName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionchanneldescription/1616444-channelnumber
    channelNumber(): NSUInteger;
    setChannelNumber(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionchanneldescription/1616562-owningportuid
    owningPortUID(): string | cocoascript.NSString;
    setOwningPortUID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionchanneldescription/1616565-channellabel
    channelLabel(): AudioChannelLabel;
    setChannelLabel(value: AudioChannelLabel): void;
    //
    alloc():AVAudioSessionChannelDescription;
    //
    init():AVAudioSessionChannelDescription;
  }
}

declare const AVAudioSessionChannelDescription: cocoascript.AVAudioSessionChannelDescription;
declare namespace cocoascript {
  /**
   * An object that provides audio recording capabilities in your app.
   * https://developer.apple.com/documentation/avfoundation/avaudiorecorder
   */
  interface AVAudioRecorder extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1388386-initwithurl
    initWithURL_settings_error(url: NSURL, settings: AVAudioRecorder, outError: NSError):AVAudioRecorder;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1778755-initwithurl
    initWithURL_format_error(url: NSURL, format: AVAudioFormat, outError: NSError):AVAudioRecorder;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1390135-currenttime
    currentTime(): NSTimeInterval;
    setCurrentTime(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1389435-preparetorecord
    prepareToRecord():boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1388252-record
    record():boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1624900-recordattime
    recordAtTime(time: NSTimeInterval):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1389378-recordforduration
    recordForDuration(duration: NSTimeInterval):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1624899-recordattime
    recordAtTime_forDuration(time: NSTimeInterval, duration: NSTimeInterval):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1389069-pause
    pause():void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1389073-stop
    stop():void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1388793-deleterecording
    deleteRecording():boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1390313-recording
    recording(): boolean;
    setRecording(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1386355-meteringenabled
    meteringEnabled(): boolean;
    setMeteringEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1386326-updatemeters
    updateMeters():void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1389463-peakpowerforchannel
    peakPowerForChannel(channelNumber: NSUInteger):number;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1387176-averagepowerforchannel
    averagePowerForChannel(channelNumber: NSUInteger):number;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1385839-delegate
    delegate(): AVAudioRecorderDelegate;
    setDelegate(value: AVAudioRecorderDelegate): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1624898-devicecurrenttime
    deviceCurrentTime(): NSTimeInterval;
    setDeviceCurrentTime(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1624903-channelassignments
    channelAssignments(): AVAudioSessionChannelDescription;
    setChannelAssignments(value: AVAudioSessionChannelDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1389050-url
    url(): NSURL;
    setUrl(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1778754-format
    format(): AVAudioFormat;
    setFormat(value: AVAudioFormat): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorder/1390903-settings
    settings(): id;
    setSettings(value: id): void;
    //
    alloc():AVAudioRecorder;
    //
    init():AVAudioRecorder;
  }
}

declare const AVAudioRecorder: cocoascript.AVAudioRecorder;
declare namespace cocoascript {
  /**
   * A protocol that allows a delegate to respond to audio interruptions and audio decoding errors, and to the completion of a sound’s playback.
   * https://developer.apple.com/documentation/avfoundation/avaudioplayerdelegate
   */
  interface AVAudioPlayerDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioplayerdelegate/1389160-audioplayerdidfinishplaying
    audioPlayerDidFinishPlaying_successfully(player: AVAudioPlayer, flag: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayerdelegate/1387676-audioplayerdecodeerrordidoccur
    audioPlayerDecodeErrorDidOccur_error(player: AVAudioPlayer, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayerdelegate/1624037-audioplayerbegininterruption
    audioPlayerBeginInterruption(player: AVAudioPlayer):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayerdelegate/1624040-audioplayerendinterruption
    audioPlayerEndInterruption_withOptions(player: AVAudioPlayer, flags: NSUInteger):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayerdelegate/1624039-audioplayerendinterruption
    audioPlayerEndInterruption(player: AVAudioPlayer):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioplayerdelegate/1624041-audioplayerendinterruption
    audioPlayerEndInterruption_withFlags(player: AVAudioPlayer, flags: NSUInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * An object that communicates to the system how you intend to use audio in your app.
   * https://developer.apple.com/documentation/avfoundation/avaudiosession
   */
  interface AVAudioSession extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616504-sharedinstance
    sharedInstance():AVAudioSession;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1648777-init
    init():AVAudioSession;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616615-category
    category(): AVAudioSessionCategory;
    setCategory(value: AVAudioSessionCategory): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616583-setcategory
    setCategory_error(category: AVAudioSessionCategory, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616591-availablecategories
    availableCategories(): AVAudioSessionCategory;
    setAvailableCategories(value: AVAudioSessionCategory): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616503-categoryoptions
    categoryOptions(): AVAudioSessionCategoryOptions;
    setCategoryOptions(value: AVAudioSessionCategoryOptions): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616442-setcategory
    setCategory_withOptions_error(category: AVAudioSessionCategory, options: AVAudioSessionCategoryOptions, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616508-mode
    mode(): AVAudioSessionMode;
    setMode(value: AVAudioSessionMode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616614-setmode
    setMode_error(mode: AVAudioSessionMode, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1771734-setcategory
    setCategory_mode_options_error(category: AVAudioSessionCategory, mode: AVAudioSessionMode, options: AVAudioSessionCategoryOptions, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616517-availablemodes
    availableModes(): AVAudioSessionMode;
    setAvailableModes(value: AVAudioSessionMode): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/2887118-routesharingpolicy
    routeSharingPolicy(): AVAudioSessionRouteSharingPolicy;
    setRouteSharingPolicy(value: AVAudioSessionRouteSharingPolicy): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/2887480-setcategory
    setCategory_mode_routeSharingPolicy_options_error(category: AVAudioSessionCategory, mode: AVAudioSessionMode, policy: AVAudioSessionRouteSharingPolicy, options: AVAudioSessionCategoryOptions, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616597-setactive
    setActive_error(active: boolean, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616627-setactive
    setActive_withOptions_error(active: boolean, options: AVAudioSessionSetActiveOptions, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/2962797-activatewithoptions
    activateWithOptions_completionHandler(options: AVAudioSessionActivationOptions, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616496-setactive
    setActive_withFlags_error(active: boolean, flags: NSInteger, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616463-recordpermission
    recordPermission(): AVAudioSessionRecordPermission;
    setRecordPermission(value: AVAudioSessionRecordPermission): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616601-requestrecordpermission
    requestRecordPermission(response: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616610-otheraudioplaying
    otherAudioPlaying(): boolean;
    setOtherAudioPlaying(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616600-secondaryaudioshouldbesilencedhi
    secondaryAudioShouldBeSilencedHint(): boolean;
    setSecondaryAudioShouldBeSilencedHint(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/3240575-allowhapticsandsystemsoundsdurin
    allowHapticsAndSystemSoundsDuringRecording(): boolean;
    setAllowHapticsAndSystemSoundsDuringRecording(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/3240576-setallowhapticsandsystemsoundsdu
    setAllowHapticsAndSystemSoundsDuringRecording_error(inValue: boolean, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/3139133-promptstyle
    promptStyle(): AVAudioSessionPromptStyle;
    setPromptStyle(value: AVAudioSessionPromptStyle): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616453-currentroute
    currentRoute(): AVAudioSessionRouteDescription;
    setCurrentRoute(value: AVAudioSessionRouteDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616524-inputavailable
    inputAvailable(): boolean;
    setInputAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616557-availableinputs
    availableInputs(): AVAudioSessionPortDescription;
    setAvailableInputs(value: AVAudioSessionPortDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616536-preferredinput
    preferredInput(): AVAudioSessionPortDescription;
    setPreferredInput(value: AVAudioSessionPortDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616491-setpreferredinput
    setPreferredInput_error(inPort: AVAudioSessionPortDescription, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616485-inputdatasource
    inputDataSource(): AVAudioSessionDataSourceDescription;
    setInputDataSource(value: AVAudioSessionDataSourceDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616513-inputdatasources
    inputDataSources(): AVAudioSessionDataSourceDescription;
    setInputDataSources(value: AVAudioSessionDataSourceDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616507-setinputdatasource
    setInputDataSource_error(dataSource: AVAudioSessionDataSourceDescription, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616479-outputdatasources
    outputDataSources(): AVAudioSessionDataSourceDescription;
    setOutputDataSources(value: AVAudioSessionDataSourceDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616572-outputdatasource
    outputDataSource(): AVAudioSessionDataSourceDescription;
    setOutputDataSource(value: AVAudioSessionDataSourceDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616582-setoutputdatasource
    setOutputDataSource_error(dataSource: AVAudioSessionDataSourceDescription, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616443-overrideoutputaudioport
    overrideOutputAudioPort_error(portOverride: AVAudioSessionPortOverride, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616514-inputisavailable
    inputIsAvailable(): boolean;
    setInputIsAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/3194617-preparerouteselectionforplayback
    prepareRouteSelectionForPlaybackWithCompletionHandler(completionHandler: AVAudioSessionRouteSelection):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/3551723-inputorientation
    inputOrientation(): AVAudioStereoOrientation;
    setInputOrientation(value: AVAudioStereoOrientation): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/3551724-preferredinputorientation
    preferredInputOrientation(): AVAudioStereoOrientation;
    setPreferredInputOrientation(value: AVAudioStereoOrientation): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/3551725-setpreferredinputorientation
    setPreferredInputOrientation_error(orientation: AVAudioStereoOrientation, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616475-inputnumberofchannels
    inputNumberOfChannels(): NSInteger;
    setInputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616454-maximuminputnumberofchannels
    maximumInputNumberOfChannels(): NSInteger;
    setMaximumInputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616440-preferredinputnumberofchannels
    preferredInputNumberOfChannels(): NSInteger;
    setPreferredInputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616483-setpreferredinputnumberofchannel
    setPreferredInputNumberOfChannels_error(count: NSInteger, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616471-outputnumberofchannels
    outputNumberOfChannels(): NSInteger;
    setOutputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616490-maximumoutputnumberofchannels
    maximumOutputNumberOfChannels(): NSInteger;
    setMaximumOutputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616448-preferredoutputnumberofchannels
    preferredOutputNumberOfChannels(): NSInteger;
    setPreferredOutputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616481-setpreferredoutputnumberofchanne
    setPreferredOutputNumberOfChannels_error(count: NSInteger, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616489-currenthardwareinputnumberofchan
    currentHardwareInputNumberOfChannels(): NSInteger;
    setCurrentHardwareInputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616581-currenthardwareoutputnumberofcha
    currentHardwareOutputNumberOfChannels(): NSInteger;
    setCurrentHardwareOutputNumberOfChannels(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616593-inputgain
    inputGain(): number;
    setInputGain(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616502-inputgainsettable
    inputGainSettable(): boolean;
    setInputGainSettable(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616546-setinputgain
    setInputGain_error(gain: number, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616533-outputvolume
    outputVolume(): number;
    setOutputVolume(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616499-samplerate
    sampleRate(): number;
    setSampleRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616543-preferredsamplerate
    preferredSampleRate(): number;
    setPreferredSampleRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616523-setpreferredsamplerate
    setPreferredSampleRate_error(sampleRate: number, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616537-inputlatency
    inputLatency(): NSTimeInterval;
    setInputLatency(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616500-outputlatency
    outputLatency(): NSTimeInterval;
    setOutputLatency(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616498-iobufferduration
    IOBufferDuration(): NSTimeInterval;
    setIOBufferDuration(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616464-preferrediobufferduration
    preferredIOBufferDuration(): NSTimeInterval;
    setPreferredIOBufferDuration(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616589-setpreferrediobufferduration
    setPreferredIOBufferDuration_error(duration: NSTimeInterval, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616494-currenthardwaresamplerate
    currentHardwareSampleRate(): number;
    setCurrentHardwareSampleRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616571-preferredhardwaresamplerate
    preferredHardwareSampleRate(): number;
    setPreferredHardwareSampleRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616526-setpreferredhardwaresamplerate
    setPreferredHardwareSampleRate_error(sampleRate: number, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/2186370-setaggregatediopreference
    setAggregatedIOPreference_error(inIOType: AVAudioSessionIOType, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiosession/1616556-delegate
    delegate(): AVAudioSessionDelegate;
    setDelegate(value: AVAudioSessionDelegate): void;
    //
    alloc():AVAudioSession;
    //
    init():AVAudioSession;
  }
}

declare const AVAudioSession: cocoascript.AVAudioSession;
declare namespace cocoascript {
  /**
   * A protocol that defines responses to changes in state for the audio session.
   * https://developer.apple.com/documentation/avfoundation/avaudiosessiondelegate
   */
  interface AVAudioSessionDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondelegate/1616469-begininterruption
    beginInterruption():void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondelegate/1616515-endinterruption
    endInterruption():void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondelegate/1616472-endinterruptionwithflags
    endInterruptionWithFlags(flags: NSUInteger):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondelegate/1616532-inputisavailablechanged
    inputIsAvailableChanged(isInputAvailable: boolean):void;
  }
}
declare namespace cocoascript {
  /**
   * A player for music file formats like MIDI and iMelody.
   * https://developer.apple.com/documentation/avfoundation/avmidiplayer
   */
  interface AVMIDIPlayer extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1390856-initwithcontentsofurl
    initWithContentsOfURL_soundBankURL_error(inURL: NSURL, bankURL: NSURL, outError: NSError):AVMIDIPlayer;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1389225-initwithdata
    initWithData_soundBankURL_error(data: NSData, bankURL: NSURL, outError: NSError):AVMIDIPlayer;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1385769-preparetoplay
    prepareToPlay():void;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1388390-play
    play(completionHandler: AVMIDIPlayerCompletionHandler):void;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1385747-playing
    playing(): boolean;
    setPlaying(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1388856-stop
    stop():void;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1387366-rate
    rate(): number;
    setRate(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1386440-duration
    duration(): NSTimeInterval;
    setDuration(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avmidiplayer/1389636-currentposition
    currentPosition(): NSTimeInterval;
    setCurrentPosition(value: NSTimeInterval): void;
    //
    alloc():AVMIDIPlayer;
    //
    init():AVMIDIPlayer;
  }
}

declare const AVMIDIPlayer: cocoascript.AVMIDIPlayer;
// https://developer.apple.com/documentation/avfoundation/avvideorangesdr
declare const AVVideoRangeSDR: cocoascript.AVVideoRange;
// https://developer.apple.com/documentation/avfoundation/avvideorangepq
declare const AVVideoRangePQ: cocoascript.AVVideoRange;
// https://developer.apple.com/documentation/avfoundation/avvideorangehlg
declare const AVVideoRangeHLG: cocoascript.AVVideoRange;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioionodeinputblock
  type AVAudioIONodeInputBlock = cocoascript.AVAudioFrameCount;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioplayernodecompletioncallbacktype
  type AVAudioPlayerNodeCompletionCallbackType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioplayernodecompletionhandler
  type AVAudioPlayerNodeCompletionHandler = cocoascript.AVAudioPlayerNodeCompletionCallbackType;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioplayernodebufferoptions
  type AVAudioPlayerNodeBufferOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A collection of music events sent to a given destination, and which can be offset, muted, and manipulated independently from other track events.
   * https://developer.apple.com/documentation/avfoundation/avmusictrack
   */
  interface AVMusicTrack extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1390533-destinationaudiounit
    destinationAudioUnit(): AVAudioUnit;
    setDestinationAudioUnit(value: AVAudioUnit): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1388828-destinationmidiendpoint
    destinationMIDIEndpoint(): MIDIEndpointRef;
    setDestinationMIDIEndpoint(value: MIDIEndpointRef): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1389910-lengthinbeats
    lengthInBeats(): AVMusicTimeStamp;
    setLengthInBeats(value: AVMusicTimeStamp): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1385749-lengthinseconds
    lengthInSeconds(): NSTimeInterval;
    setLengthInSeconds(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1386292-looprange
    loopRange(): AVBeatRange;
    setLoopRange(value: AVBeatRange): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1385811-loopingenabled
    loopingEnabled(): boolean;
    setLoopingEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1387694-muted
    muted(): boolean;
    setMuted(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1389268-numberofloops
    numberOfLoops(): NSInteger;
    setNumberOfLoops(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1386336-offsettime
    offsetTime(): AVMusicTimeStamp;
    setOffsetTime(value: AVMusicTimeStamp): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1387883-soloed
    soloed(): boolean;
    setSoloed(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avmusictrack/1387198-timeresolution
    timeResolution(): NSUInteger;
    setTimeResolution(value: NSUInteger): void;
    //
    alloc():AVMusicTrack;
    //
    init():AVMusicTrack;
  }
}

declare const AVMusicTrack: cocoascript.AVMusicTrack;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmusictrackloopcount
  type AVMusicTrackLoopCount = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmusicsequenceloadoptions
  type AVMusicSequenceLoadOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmusictimestamp
  type AVMusicTimeStamp = cocoascript.Float64;
}
declare namespace cocoascript {
  interface AVBeatRange {
  }
}
declare namespace cocoascript {
  /**
   * A subclass of the audio node class that, depending on the type of the audio unit, processes audio either in real time or non-real time.
   * https://developer.apple.com/documentation/avfoundation/avaudiounit
   */
  interface AVAudioUnit extends AVAudioNode {
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1386098-audiounit
    audioUnit(): AudioUnit;
    setAudioUnit(value: AudioUnit): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1387527-loadaudiounitpresetaturl
    loadAudioUnitPresetAtURL_error(url: NSURL, outError: NSError):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1390583-instantiatewithcomponentdescript
    instantiateWithComponentDescription_options_completionHandler(audioComponentDescription: AudioComponentDescription, options: AudioComponentInstantiationOptions, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1389217-audiocomponentdescription
    audioComponentDescription(): AudioComponentDescription;
    setAudioComponentDescription(value: AudioComponentDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1388972-manufacturername
    manufacturerName(): string | cocoascript.NSString;
    setManufacturerName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1390637-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1386720-version
    version(): NSUInteger;
    setVersion(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounit/1388167-auaudiounit
    AUAudioUnit(): AUAudioUnit;
    setAUAudioUnit(value: AUAudioUnit): void;
    //
    alloc():AVAudioUnit;
    //
    init():AVAudioUnit;
  }
}

declare const AVAudioUnit: cocoascript.AVAudioUnit;
declare namespace cocoascript {
  /**
   * A class that provides details about an audio unit such as: type, subtype, manufacturer, and location.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent
   */
  interface AVAudioUnitComponent extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1385910-audiocomponent
    audioComponent(): AudioComponent;
    setAudioComponent(value: AudioComponent): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1387404-audiocomponentdescription
    audioComponentDescription(): AudioComponentDescription;
    setAudioComponentDescription(value: AudioComponentDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1387088-availablearchitectures
    availableArchitectures(): NSNumber;
    setAvailableArchitectures(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1388088-componenturl
    componentURL(): NSURL;
    setComponentURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1390327-configurationdictionary
    configurationDictionary(): id;
    setConfigurationDictionary(value: id): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1388384-hascustomview
    hasCustomView(): boolean;
    setHasCustomView(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1389600-hasmidiinput
    hasMIDIInput(): boolean;
    setHasMIDIInput(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1387070-hasmidioutput
    hasMIDIOutput(): boolean;
    setHasMIDIOutput(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1387472-manufacturername
    manufacturerName(): string | cocoascript.NSString;
    setManufacturerName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1385941-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1388306-passesauval
    passesAUVal(): boolean;
    setPassesAUVal(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1390100-sandboxsafe
    sandboxSafe(): boolean;
    setSandboxSafe(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1389351-supportsnumberinputchannels
    supportsNumberInputChannels_outputChannels(numInputChannels: NSInteger, numOutputChannels: NSInteger):boolean;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1389988-typename
    typeName(): string | cocoascript.NSString;
    setTypeName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1387762-version
    version(): NSUInteger;
    setVersion(value: NSUInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1388446-versionstring
    versionString(): string | cocoascript.NSString;
    setVersionString(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1390618-iconurl
    iconURL(): NSURL;
    setIconURL(value: NSURL): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1385647-icon
    icon(): NSImage;
    setIcon(value: NSImage): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1390541-localizedtypename
    localizedTypeName(): string | cocoascript.NSString;
    setLocalizedTypeName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1387996-alltagnames
    allTagNames(): string | cocoascript.NSString;
    setAllTagNames(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponent/1385609-usertagnames
    userTagNames(): string | cocoascript.NSString;
    setUserTagNames(value: string | cocoascript.NSString): void;
    //
    alloc():AVAudioUnitComponent;
    //
    init():AVAudioUnitComponent;
  }
}

declare const AVAudioUnitComponent: cocoascript.AVAudioUnitComponent;
// https://developer.apple.com/documentation/avfoundation/avaudiounitcomponenttagsdidchangenotification
declare const AVAudioUnitComponentTagsDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that provides a way to search and query audio components that are registered with the system.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanager
   */
  interface AVAudioUnitComponentManager extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanager/1390177-sharedaudiounitcomponentmanager
    sharedAudioUnitComponentManager():AVAudioUnitComponentManager;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanager/1386367-componentsmatchingdescription
    componentsMatchingDescription(desc: AudioComponentDescription):AVAudioUnitComponent;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanager/1386487-componentsmatchingpredicate
    componentsMatchingPredicate(predicate: NSPredicate):AVAudioUnitComponent;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanager/1390260-componentspassingtest
    componentsPassingTest(testHandler: boolean):AVAudioUnitComponent;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanager/1388545-standardlocalizedtagnames
    standardLocalizedTagNames(): string | cocoascript.NSString;
    setStandardLocalizedTagNames(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanager/1390133-tagnames
    tagNames(): string | cocoascript.NSString;
    setTagNames(value: string | cocoascript.NSString): void;
    //
    alloc():AVAudioUnitComponentManager;
    //
    init():AVAudioUnitComponentManager;
  }
}

declare const AVAudioUnitComponentManager: cocoascript.AVAudioUnitComponentManager;
declare namespace cocoascript {
  /**
   * A class that processes audio in real time.
   * https://developer.apple.com/documentation/avfoundation/avaudiouniteffect
   */
  interface AVAudioUnitEffect extends AVAudioUnit {
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteffect/1388397-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription):AVAudioUnitEffect;
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteffect/1386894-bypass
    bypass(): boolean;
    setBypass(value: boolean): void;
    //
    alloc():AVAudioUnitEffect;
    //
    init():AVAudioUnitEffect;
  }
}

declare const AVAudioUnitEffect: cocoascript.AVAudioUnitEffect;
declare namespace cocoascript {
  /**
   * A class that implements a multiband equalizer.
   * https://developer.apple.com/documentation/avfoundation/avaudiouniteq
   */
  interface AVAudioUnitEQ extends AVAudioUnitEffect {
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteq/1390915-initwithnumberofbands
    initWithNumberOfBands(numberOfBands: NSUInteger):AVAudioUnitEQ;
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteq/1388840-bands
    bands(): AVAudioUnitEQFilterParameters;
    setBands(value: AVAudioUnitEQFilterParameters): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteq/1389193-globalgain
    globalGain(): number;
    setGlobalGain(value: number): void;
    //
    alloc():AVAudioUnitEQ;
    //
    init():AVAudioUnitEQ;
  }
}

declare const AVAudioUnitEQ: cocoascript.AVAudioUnitEQ;
declare namespace cocoascript {
  /**
   * A class that implements a multistage distortion effect.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitdistortion
   */
  interface AVAudioUnitDistortion extends AVAudioUnitEffect {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitdistortion/1389550-loadfactorypreset
    loadFactoryPreset(preset: AVAudioUnitDistortionPreset):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitdistortion/1388179-pregain
    preGain(): number;
    setPreGain(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitdistortion/1385730-wetdrymix
    wetDryMix(): number;
    setWetDryMix(value: number): void;
    //
    alloc():AVAudioUnitDistortion;
    //
    init():AVAudioUnitDistortion;
  }
}

declare const AVAudioUnitDistortion: cocoascript.AVAudioUnitDistortion;
declare namespace cocoascript {
  /**
   * A class that implements a delay effect.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitdelay
   */
  interface AVAudioUnitDelay extends AVAudioUnitEffect {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitdelay/1386919-delaytime
    delayTime(): NSTimeInterval;
    setDelayTime(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitdelay/1388517-feedback
    feedback(): number;
    setFeedback(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitdelay/1386489-lowpasscutoff
    lowPassCutoff(): number;
    setLowPassCutoff(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitdelay/1390516-wetdrymix
    wetDryMix(): number;
    setWetDryMix(value: number): void;
    //
    alloc():AVAudioUnitDelay;
    //
    init():AVAudioUnitDelay;
  }
}

declare const AVAudioUnitDelay: cocoascript.AVAudioUnitDelay;
declare namespace cocoascript {
  /**
   * A class that implements a reverb effect.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitreverb
   */
  interface AVAudioUnitReverb extends AVAudioUnitEffect {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitreverb/1389169-loadfactorypreset
    loadFactoryPreset(preset: AVAudioUnitReverbPreset):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounitreverb/1388998-wetdrymix
    wetDryMix(): number;
    setWetDryMix(value: number): void;
    //
    alloc():AVAudioUnitReverb;
    //
    init():AVAudioUnitReverb;
  }
}

declare const AVAudioUnitReverb: cocoascript.AVAudioUnitReverb;
declare namespace cocoascript {
  /**
   * A class that processes audio in non-real time.
   * https://developer.apple.com/documentation/avfoundation/avaudiounittimeeffect
   */
  interface AVAudioUnitTimeEffect extends AVAudioUnit {
    // https://developer.apple.com/documentation/avfoundation/avaudiounittimeeffect/1390254-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription):AVAudioUnitTimeEffect;
    // https://developer.apple.com/documentation/avfoundation/avaudiounittimeeffect/1388684-bypass
    bypass(): boolean;
    setBypass(value: boolean): void;
    //
    alloc():AVAudioUnitTimeEffect;
    //
    init():AVAudioUnitTimeEffect;
  }
}

declare const AVAudioUnitTimeEffect: cocoascript.AVAudioUnitTimeEffect;
declare namespace cocoascript {
  /**
   * A class that provides good-quality playback rate and pitch shifting independently of each other.
   * https://developer.apple.com/documentation/avfoundation/avaudiounittimepitch
   */
  interface AVAudioUnitTimePitch extends AVAudioUnitTimeEffect {
    // https://developer.apple.com/documentation/avfoundation/avaudiounittimepitch/1388238-overlap
    overlap(): number;
    setOverlap(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounittimepitch/1387188-pitch
    pitch(): number;
    setPitch(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiounittimepitch/1389380-rate
    rate(): number;
    setRate(value: number): void;
    //
    alloc():AVAudioUnitTimePitch;
    //
    init():AVAudioUnitTimePitch;
  }
}

declare const AVAudioUnitTimePitch: cocoascript.AVAudioUnitTimePitch;
declare namespace cocoascript {
  /**
   * A class that allows control of the playback rate.
   * https://developer.apple.com/documentation/avfoundation/avaudiounitvarispeed
   */
  interface AVAudioUnitVarispeed extends AVAudioUnitTimeEffect {
    // https://developer.apple.com/documentation/avfoundation/avaudiounitvarispeed/1387118-rate
    rate(): number;
    setRate(value: number): void;
    //
    alloc():AVAudioUnitVarispeed;
    //
    init():AVAudioUnitVarispeed;
  }
}

declare const AVAudioUnitVarispeed: cocoascript.AVAudioUnitVarispeed;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosourcenoderenderblock
  type AVAudioSourceNodeRenderBlock = cocoascript.AudioBufferList;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosinknodereceiverblock
  type AVAudioSinkNodeReceiverBlock = cocoascript.AudioBufferList;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioconverterinputblock
  type AVAudioConverterInputBlock = cocoascript.AVAudioConverterInputStatus;
}
declare namespace cocoascript {
  interface AVAudioConverterPrimeInfo {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioconverterinputstatus
  type AVAudioConverterInputStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioconverteroutputstatus
  type AVAudioConverterOutputStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioconverterprimemethod
  type AVAudioConverterPrimeMethod = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A subclass of
   * https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer
   */
  interface AVAudioPCMBuffer extends AVAudioBuffer {
    // https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer/1389630-initwithpcmformat
    initWithPCMFormat_frameCapacity(format: AVAudioFormat, frameCapacity: AVAudioFrameCount):AVAudioPCMBuffer;
    // https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer/1386069-framelength
    frameLength(): AVAudioFrameCount;
    setFrameLength(value: AVAudioFrameCount): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer/1386212-floatchanneldata
    floatChannelData(): const;
    setFloatChannelData(value: const): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer/1386941-framecapacity
    frameCapacity(): AVAudioFrameCount;
    setFrameCapacity(value: AVAudioFrameCount): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer/1388925-int16channeldata
    int16ChannelData(): const;
    setInt16ChannelData(value: const): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer/1389756-int32channeldata
    int32ChannelData(): const;
    setInt32ChannelData(value: const): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiopcmbuffer/1389726-stride
    stride(): NSUInteger;
    setStride(value: NSUInteger): void;
    //
    alloc():AVAudioPCMBuffer;
    //
    init():AVAudioPCMBuffer;
  }
}

declare const AVAudioPCMBuffer: cocoascript.AVAudioPCMBuffer;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiocommonformat
  type AVAudioCommonFormat = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioframeposition
  type AVAudioFramePosition = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioframecount
  type AVAudioFrameCount = number;
}
declare namespace cocoascript {
  /**
   * A subclass of
   * https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer
   */
  interface AVAudioCompressedBuffer extends AVAudioBuffer {
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/1387124-initwithformat
    initWithFormat_packetCapacity(format: AVAudioFormat, packetCapacity: AVAudioPacketCount):AVAudioCompressedBuffer;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/1386718-initwithformat
    initWithFormat_packetCapacity_maximumPacketSize(format: AVAudioFormat, packetCapacity: AVAudioPacketCount, maximumPacketSize: NSInteger):AVAudioCompressedBuffer;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/2919694-bytecapacity
    byteCapacity(): number;
    setByteCapacity(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/2919695-bytelength
    byteLength(): number;
    setByteLength(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/1390620-data
    data(): void;
    setData(value: void): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/1389326-maximumpacketsize
    maximumPacketSize(): NSInteger;
    setMaximumPacketSize(value: NSInteger): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/1386081-packetcapacity
    packetCapacity(): AVAudioPacketCount;
    setPacketCapacity(value: AVAudioPacketCount): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/1386000-packetcount
    packetCount(): AVAudioPacketCount;
    setPacketCount(value: AVAudioPacketCount): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiocompressedbuffer/1389750-packetdescriptions
    packetDescriptions(): AudioStreamPacketDescription;
    setPacketDescriptions(value: AudioStreamPacketDescription): void;
    //
    alloc():AVAudioCompressedBuffer;
    //
    init():AVAudioCompressedBuffer;
  }
}

declare const AVAudioCompressedBuffer: cocoascript.AVAudioCompressedBuffer;
declare namespace cocoascript {
  /**
   * The roles of a set of audio channels.
   * https://developer.apple.com/documentation/avfoundation/avaudiochannellayout
   */
  interface AVAudioChannelLayout extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1397770-layoutwithlayout
    layoutWithLayout(layout: AudioChannelLayout):AVAudioChannelLayout;
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1387623-initwithlayout
    initWithLayout(layout: AudioChannelLayout):AVAudioChannelLayout;
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1397765-layoutwithlayouttag
    layoutWithLayoutTag(layoutTag: AudioChannelLayoutTag):AVAudioChannelLayout;
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1388320-initwithlayouttag
    initWithLayoutTag(layoutTag: AudioChannelLayoutTag):AVAudioChannelLayout;
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1390526-channelcount
    channelCount(): AVAudioChannelCount;
    setChannelCount(value: AVAudioChannelCount): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1385786-layout
    layout(): AudioChannelLayout;
    setLayout(value: AudioChannelLayout): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1388519-layouttag
    layoutTag(): AudioChannelLayoutTag;
    setLayoutTag(value: AudioChannelLayoutTag): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiochannellayout/1389677-isequal
    isEqual(object: AVAudioChannelLayout):boolean;
    //
    alloc():AVAudioChannelLayout;
    //
    init():AVAudioChannelLayout;
  }
}

declare const AVAudioChannelLayout: cocoascript.AVAudioChannelLayout;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioquality
  type AVAudioQuality = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/avfoundation/avaudiouniteqfilterparameters
   */
  interface AVAudioUnitEQFilterParameters extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteqfilterparameters/1389528-bandwidth
    bandwidth(): number;
    setBandwidth(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteqfilterparameters/1386257-bypass
    bypass(): boolean;
    setBypass(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteqfilterparameters/1389780-filtertype
    filterType(): AVAudioUnitEQFilterType;
    setFilterType(value: AVAudioUnitEQFilterType): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteqfilterparameters/1390693-frequency
    frequency(): number;
    setFrequency(value: number): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiouniteqfilterparameters/1389286-gain
    gain(): number;
    setGain(value: number): void;
    //
    alloc():AVAudioUnitEQFilterParameters;
    //
    init():AVAudioUnitEQFilterParameters;
  }
}

declare const AVAudioUnitEQFilterParameters: cocoascript.AVAudioUnitEQFilterParameters;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiounitreverbpreset
  type AVAudioUnitReverbPreset = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avcaptionconversionadjustmenttype
  type AVCaptionConversionAdjustmentType = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that describes an adjustment to the time range of one or more captions.
   * https://developer.apple.com/documentation/avfoundation/avcaptionconversiontimerangeadjustment
   */
  interface AVCaptionConversionTimeRangeAdjustment extends AVCaptionConversionAdjustment {
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversiontimerangeadjustment/3857641-starttimeoffset
    startTimeOffset(): CMTime;
    setStartTimeOffset(value: CMTime): void;
    // https://developer.apple.com/documentation/avfoundation/avcaptionconversiontimerangeadjustment/3857640-durationoffset
    durationOffset(): CMTime;
    setDurationOffset(value: CMTime): void;
    //
    alloc():AVCaptionConversionTimeRangeAdjustment;
    //
    init():AVCaptionConversionTimeRangeAdjustment;
  }
}

declare const AVCaptionConversionTimeRangeAdjustment: cocoascript.AVCaptionConversionTimeRangeAdjustment;
// https://developer.apple.com/documentation/avfoundation/avcaptionconversionwarningtypeexcessmediadata
declare const AVCaptionConversionWarningTypeExcessMediaData: cocoascript.AVCaptionConversionWarningType;
declare namespace cocoascript {
  /**
   * Information about the capabilities of the port and the hardware channels it supports.
   * https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription
   */
  interface AVAudioSessionPortDescription extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616497-portname
    portName(): string | cocoascript.NSString;
    setPortName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616445-porttype
    portType(): AVAudioSessionPort;
    setPortType(value: AVAudioSessionPort): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616574-channels
    channels(): AVAudioSessionChannelDescription;
    setChannels(value: AVAudioSessionChannelDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616617-uid
    UID(): string | cocoascript.NSString;
    setUID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1778338-hashardwarevoicecallprocessing
    hasHardwareVoiceCallProcessing(): boolean;
    setHasHardwareVoiceCallProcessing(value: boolean): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616570-datasources
    dataSources(): AVAudioSessionDataSourceDescription;
    setDataSources(value: AVAudioSessionDataSourceDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616538-selecteddatasource
    selectedDataSource(): AVAudioSessionDataSourceDescription;
    setSelectedDataSource(value: AVAudioSessionDataSourceDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616628-preferreddatasource
    preferredDataSource(): AVAudioSessionDataSourceDescription;
    setPreferredDataSource(value: AVAudioSessionDataSourceDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionportdescription/1616554-setpreferreddatasource
    setPreferredDataSource_error(dataSource: AVAudioSessionDataSourceDescription, outError: NSError):boolean;
    //
    alloc():AVAudioSessionPortDescription;
    //
    init():AVAudioSessionPortDescription;
  }
}

declare const AVAudioSessionPortDescription: cocoascript.AVAudioSessionPortDescription;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionport
  type AVAudioSessionPort = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * The delegate of an audio recorder object.
   * https://developer.apple.com/documentation/avfoundation/avaudiorecorderdelegate
   */
  interface AVAudioRecorderDelegate extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorderdelegate/1388688-audiorecorderdidfinishrecording
    audioRecorderDidFinishRecording_successfully(recorder: AVAudioRecorder, flag: boolean):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorderdelegate/1387774-audiorecorderencodeerrordidoccur
    audioRecorderEncodeErrorDidOccur_error(recorder: AVAudioRecorder, error: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorderdelegate/1624897-audiorecorderbegininterruption
    audioRecorderBeginInterruption(recorder: AVAudioRecorder):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorderdelegate/1624901-audiorecorderendinterruption
    audioRecorderEndInterruption_withOptions(recorder: AVAudioRecorder, flags: NSUInteger):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorderdelegate/1624902-audiorecorderendinterruption
    audioRecorderEndInterruption(recorder: AVAudioRecorder):void;
    // https://developer.apple.com/documentation/avfoundation/avaudiorecorderdelegate/1624904-audiorecorderendinterruption
    audioRecorderEndInterruption_withFlags(recorder: AVAudioRecorder, flags: NSUInteger):void;
  }
}
// https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryplayback
declare const AVAudioSessionCategoryPlayback: cocoascript.AVAudioSessionCategory;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessioncategory
  type AVAudioSessionCategory = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryoptions
  type AVAudioSessionCategoryOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionmode
  type AVAudioSessionMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionroutesharingpolicy
  type AVAudioSessionRouteSharingPolicy = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionactivationoptions
  type AVAudioSessionActivationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionpromptstyle
  type AVAudioSessionPromptStyle = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/avfoundation/avaudiosessioninterruptionnotification
declare const AVAudioSessionInterruptionNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionroutechangenotification
declare const AVAudioSessionRouteChangeNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionsilencesecondaryaudiohintnotification
declare const AVAudioSessionSilenceSecondaryAudioHintNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmediaserviceswerelostnotification
declare const AVAudioSessionMediaServicesWereLostNotification: cocoascript.NSNotificationName;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmediaserviceswereresetnotification
declare const AVAudioSessionMediaServicesWereResetNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * An object that describes the input and output ports associated with a session’s audio route.
   * https://developer.apple.com/documentation/avfoundation/avaudiosessionroutedescription
   */
  interface AVAudioSessionRouteDescription extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionroutedescription/1616474-inputs
    inputs(): AVAudioSessionPortDescription;
    setInputs(value: AVAudioSessionPortDescription): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessionroutedescription/1616552-outputs
    outputs(): AVAudioSessionPortDescription;
    setOutputs(value: AVAudioSessionPortDescription): void;
    //
    alloc():AVAudioSessionRouteDescription;
    //
    init():AVAudioSessionRouteDescription;
  }
}

declare const AVAudioSessionRouteDescription: cocoascript.AVAudioSessionRouteDescription;
declare namespace cocoascript {
  /**
   * An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
   * https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription
   */
  interface AVAudioSessionDataSourceDescription extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616584-datasourceid
    dataSourceID(): NSNumber;
    setDataSourceID(value: NSNumber): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616595-datasourcename
    dataSourceName(): string | cocoascript.NSString;
    setDataSourceName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616495-location
    location(): AVAudioSessionLocation;
    setLocation(value: AVAudioSessionLocation): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616456-orientation
    orientation(): AVAudioSessionOrientation;
    setOrientation(value: AVAudioSessionOrientation): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616619-selectedpolarpattern
    selectedPolarPattern(): AVAudioSessionPolarPattern;
    setSelectedPolarPattern(value: AVAudioSessionPolarPattern): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616450-supportedpolarpatterns
    supportedPolarPatterns(): AVAudioSessionPolarPattern;
    setSupportedPolarPatterns(value: AVAudioSessionPolarPattern): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616446-preferredpolarpattern
    preferredPolarPattern(): AVAudioSessionPolarPattern;
    setPreferredPolarPattern(value: AVAudioSessionPolarPattern): void;
    // https://developer.apple.com/documentation/avfoundation/avaudiosessiondatasourcedescription/1616516-setpreferredpolarpattern
    setPreferredPolarPattern_error(pattern: AVAudioSessionPolarPattern, outError: NSError):boolean;
    //
    alloc():AVAudioSessionDataSourceDescription;
    //
    init():AVAudioSessionDataSourceDescription;
  }
}

declare const AVAudioSessionDataSourceDescription: cocoascript.AVAudioSessionDataSourceDescription;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiostereoorientation
  type AVAudioStereoOrientation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessioniotype
  type AVAudioSessionIOType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An object for configuring macOS apps to participate in AirPods Automatic Switching.
   * https://developer.apple.com/documentation/avfoundation/avaudioroutingarbiter
   */
  interface AVAudioRoutingArbiter extends NSObject {
    // https://developer.apple.com/documentation/avfoundation/avaudioroutingarbiter/3566849-sharedroutingarbiter
    sharedRoutingArbiter(): AVAudioRoutingArbiter;
    setSharedRoutingArbiter(value: AVAudioRoutingArbiter): void;
    // https://developer.apple.com/documentation/avfoundation/avaudioroutingarbiter/3566847-beginarbitrationwithcategory
    beginArbitrationWithCategory_completionHandler(category: AVAudioRoutingArbitrationCategory, handler: NSError):void;
    // https://developer.apple.com/documentation/avfoundation/avaudioroutingarbiter/3566848-leavearbitration
    leaveArbitration():void;
    //
    alloc():AVAudioRoutingArbiter;
    //
    init():AVAudioRoutingArbiter;
  }
}

declare const AVAudioRoutingArbiter: cocoascript.AVAudioRoutingArbiter;
// https://developer.apple.com/documentation/avfoundation/avaudiounitcomponentmanagerregistrationschangednotification
declare const AVAudioUnitComponentManagerRegistrationsChangedNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiounitdistortionpreset
  type AVAudioUnitDistortionPreset = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiopacketcount
  type AVAudioPacketCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiochannelcount
  type AVAudioChannelCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiouniteqfiltertype
  type AVAudioUnitEQFilterType = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/avfoundation/avcaptionconversionadjustmenttypetimerange
declare const AVCaptionConversionAdjustmentTypeTimeRange: cocoascript.AVCaptionConversionAdjustmentType;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportbuiltinmic
declare const AVAudioSessionPortBuiltInMic: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportheadsetmic
declare const AVAudioSessionPortHeadsetMic: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportlinein
declare const AVAudioSessionPortLineIn: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportairplay
declare const AVAudioSessionPortAirPlay: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportbluetootha2dp
declare const AVAudioSessionPortBluetoothA2DP: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportbluetoothle
declare const AVAudioSessionPortBluetoothLE: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportbuiltinreceiver
declare const AVAudioSessionPortBuiltInReceiver: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportbuiltinspeaker
declare const AVAudioSessionPortBuiltInSpeaker: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionporthdmi
declare const AVAudioSessionPortHDMI: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportheadphones
declare const AVAudioSessionPortHeadphones: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportlineout
declare const AVAudioSessionPortLineOut: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportavb
declare const AVAudioSessionPortAVB: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportbluetoothhfp
declare const AVAudioSessionPortBluetoothHFP: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportdisplayport
declare const AVAudioSessionPortDisplayPort: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportcaraudio
declare const AVAudioSessionPortCarAudio: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportfirewire
declare const AVAudioSessionPortFireWire: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportpci
declare const AVAudioSessionPortPCI: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportthunderbolt
declare const AVAudioSessionPortThunderbolt: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportusbaudio
declare const AVAudioSessionPortUSBAudio: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionportvirtual
declare const AVAudioSessionPortVirtual: cocoascript.AVAudioSessionPort;
// https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryambient
declare const AVAudioSessionCategoryAmbient: cocoascript.AVAudioSessionCategory;
// https://developer.apple.com/documentation/avfoundation/avaudiosessioncategorymultiroute
declare const AVAudioSessionCategoryMultiRoute: cocoascript.AVAudioSessionCategory;
// https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryplayandrecord
declare const AVAudioSessionCategoryPlayAndRecord: cocoascript.AVAudioSessionCategory;
// https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryrecord
declare const AVAudioSessionCategoryRecord: cocoascript.AVAudioSessionCategory;
// https://developer.apple.com/documentation/avfoundation/avaudiosessioncategorysoloambient
declare const AVAudioSessionCategorySoloAmbient: cocoascript.AVAudioSessionCategory;
// https://developer.apple.com/documentation/avfoundation/avaudiosessioncategoryaudioprocessing
declare const AVAudioSessionCategoryAudioProcessing: cocoascript.AVAudioSessionCategory;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionsetactiveoptions
  type AVAudioSessionSetActiveOptions = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodedefault
declare const AVAudioSessionModeDefault: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodevideorecording
declare const AVAudioSessionModeVideoRecording: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodegamechat
declare const AVAudioSessionModeGameChat: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodemeasurement
declare const AVAudioSessionModeMeasurement: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodemovieplayback
declare const AVAudioSessionModeMoviePlayback: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodespokenaudio
declare const AVAudioSessionModeSpokenAudio: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodevideochat
declare const AVAudioSessionModeVideoChat: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodevoicechat
declare const AVAudioSessionModeVoiceChat: cocoascript.AVAudioSessionMode;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionmodevoiceprompt
declare const AVAudioSessionModeVoicePrompt: cocoascript.AVAudioSessionMode;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionrecordpermission
  type AVAudioSessionRecordPermission = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessioninterruptiontype
  type AVAudioSessionInterruptionType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessioninterruptionoptions
  type AVAudioSessionInterruptionOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionroutechangereason
  type AVAudioSessionRouteChangeReason = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionsilencesecondaryaudiohinttype
  type AVAudioSessionSilenceSecondaryAudioHintType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionlocation
  type AVAudioSessionLocation = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionorientation
  type AVAudioSessionOrientation = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionpolarpattern
  type AVAudioSessionPolarPattern = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudiosessionportoverride
  type AVAudioSessionPortOverride = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/avfoundation/avaudiosessionpolarpatternstereo
declare const AVAudioSessionPolarPatternStereo: cocoascript.AVAudioSessionPolarPattern;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avaudioroutingarbitrationcategory
  type AVAudioRoutingArbitrationCategory = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/avfoundation/avmidiplayercompletionhandler
  type AVMIDIPlayerCompletionHandler = void;
}
// https://developer.apple.com/documentation/avfoundation/avaudiosessionlocationlower
declare const AVAudioSessionLocationLower: cocoascript.AVAudioSessionLocation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionlocationupper
declare const AVAudioSessionLocationUpper: cocoascript.AVAudioSessionLocation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionorientationtop
declare const AVAudioSessionOrientationTop: cocoascript.AVAudioSessionOrientation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionorientationbottom
declare const AVAudioSessionOrientationBottom: cocoascript.AVAudioSessionOrientation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionorientationfront
declare const AVAudioSessionOrientationFront: cocoascript.AVAudioSessionOrientation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionorientationback
declare const AVAudioSessionOrientationBack: cocoascript.AVAudioSessionOrientation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionorientationleft
declare const AVAudioSessionOrientationLeft: cocoascript.AVAudioSessionOrientation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionorientationright
declare const AVAudioSessionOrientationRight: cocoascript.AVAudioSessionOrientation;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionpolarpatterncardioid
declare const AVAudioSessionPolarPatternCardioid: cocoascript.AVAudioSessionPolarPattern;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionpolarpatternsubcardioid
declare const AVAudioSessionPolarPatternSubcardioid: cocoascript.AVAudioSessionPolarPattern;
// https://developer.apple.com/documentation/avfoundation/avaudiosessionpolarpatternomnidirectional
declare const AVAudioSessionPolarPatternOmnidirectional: cocoascript.AVAudioSessionPolarPattern;
