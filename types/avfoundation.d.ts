declare namespace cocoascript {
  /**
   * An object used to create sample buffer opaque objects.
   * doc://com.apple.documentation/documentation/avfoundation/avsamplebuffergenerator
   */
  interface AVSampleBufferGenerator extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebuffergenerator/1387477-initwithasset
    initWithAsset_timebase(asset: AVAsset, timebase: CMTimebaseRef):AVSampleBufferGenerator;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebuffergenerator/1387475-createsamplebufferforrequest
    createSampleBufferForRequest(request: AVSampleBufferRequest):CMSampleBufferRef;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebuffergenerator/1387295-notifyofdatareadyforsamplebuffer
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
   * doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest
   */
  interface AVSampleBufferRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1387449-initwithstartcursor
    initWithStartCursor(startCursor: AVSampleCursor):AVSampleBufferRequest;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1386442-direction
    direction(): AVSampleBufferRequestDirection;
    setDirection(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1387466-limitcursor
    limitCursor(): AVSampleCursor;
    setLimitCursor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1385645-maxsamplecount
    maxSampleCount(): NSInteger;
    setMaxSampleCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1387463-mode
    mode(): AVSampleBufferRequestMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1385790-overridetime
    overrideTime(): CMTime;
    setOverrideTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1386251-preferredminsamplecount
    preferredMinSampleCount(): NSInteger;
    setPreferredMinSampleCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequest/1387398-startcursor
    startCursor(): AVSampleCursor;
    setStartCursor(): void;
    //
    alloc():AVSampleBufferRequest;
    //
    init():AVSampleBufferRequest;
  }
}

declare const AVSampleBufferRequest: cocoascript.AVSampleBufferRequest;
declare namespace cocoascript {
  /**
   * An object that manages capture activity and coordinates the flow of data from input devices to capture outputs.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturesession
   */
  interface AVCaptureSession extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1390865-inputs
    inputs(): AVCaptureInput;
    setInputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1387180-canaddinput
    canAddInput(input: AVCaptureInput):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1387239-addinput
    addInput(input: AVCaptureInput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1388073-removeinput
    removeInput(input: AVCaptureInput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1387621-outputs
    outputs(): AVCaptureOutput;
    setOutputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1388944-canaddoutput
    canAddOutput(output: AVCaptureOutput):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1387325-addoutput
    addOutput(output: AVCaptureOutput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1385688-removeoutput
    removeOutput(output: AVCaptureOutput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1388185-startrunning
    startRunning():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1385661-stoprunning
    stopRunning():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1388133-running
    running(): BOOL;
    setRunning(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1620475-interrupted
    interrupted(): BOOL;
    setInterrupted(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1389174-beginconfiguration
    beginConfiguration():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1388173-commitconfiguration
    commitConfiguration():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1389696-sessionpreset
    sessionPreset(): AVCaptureSessionPreset;
    setSessionPreset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1389824-cansetsessionpreset
    canSetSessionPreset(preset: AVCaptureSessionPreset):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/3153020-connections
    connections(): AVCaptureConnection;
    setConnections(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1389687-addconnection
    addConnection(connection: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1389596-canaddconnection
    canAddConnection(connection: AVCaptureConnection):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1390383-addinputwithnoconnections
    addInputWithNoConnections(input: AVCaptureInput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1388709-addoutputwithnoconnections
    addOutputWithNoConnections(output: AVCaptureOutput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1390041-removeconnection
    removeConnection(connection: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1620490-usesapplicationaudiosession
    usesApplicationAudioSession(): BOOL;
    setUsesApplicationAudioSession(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1620477-automaticallyconfiguresapplicati
    automaticallyConfiguresApplicationAudioSession(): BOOL;
    setAutomaticallyConfiguresApplicationAudioSession(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1388984-masterclock
    masterClock(): CMClockRef;
    setMasterClock(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesession/1648764-automaticallyconfigurescapturede
    automaticallyConfiguresCaptureDeviceForWideColor(): BOOL;
    setAutomaticallyConfiguresCaptureDeviceForWideColor(): void;
    //
    alloc():AVCaptureSession;
    //
    init():AVCaptureSession;
  }
}

declare const AVCaptureSession: cocoascript.AVCaptureSession;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionruntimeerrornotification
declare const AVCaptureSessionRuntimeErrorNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessiondidstartrunningnotification
declare const AVCaptureSessionDidStartRunningNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessiondidstoprunningnotification
declare const AVCaptureSessionDidStopRunningNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionwasinterruptednotification
declare const AVCaptureSessionWasInterruptedNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessioninterruptionendednotification
declare const AVCaptureSessionInterruptionEndedNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionerrorkey
declare const AVCaptureSessionErrorKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessioninterruptionreasonkey
declare const AVCaptureSessionInterruptionReasonKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessioninterruptionsystempressurestatekey
declare const AVCaptureSessionInterruptionSystemPressureStateKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A capture session that supports simultaneous capture from multiple inputs of the same media type.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturemulticamsession
   */
  interface AVCaptureMultiCamSession extends AVCaptureSession {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemulticamsession/3183002-multicamsupported
    multiCamSupported(): BOOL;
    setMultiCamSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemulticamsession/3153017-hardwarecost
    hardwareCost(): number;
    setHardwareCost(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemulticamsession/3153019-systempressurecost
    systemPressureCost(): number;
    setSystemPressureCost(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedevice
   */
  interface AVCaptureDevice extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388904-devicewithuniqueid
    deviceWithUniqueID(deviceUniqueID: string | cocoascript.NSString):AVCaptureDevice;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386589-defaultdevicewithmediatype
    defaultDeviceWithMediaType(mediaType: AVMediaType):AVCaptureDevice;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2361508-defaultdevicewithdevicetype
    defaultDeviceWithDeviceType_mediaType_position(deviceType: AVCaptureDeviceType, mediaType: AVMediaType, position: AVCaptureDevicePosition):AVCaptureDevice;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386237-devices
    devices():AVCaptureDevice;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1390520-deviceswithmediatype
    devicesWithMediaType(mediaType: AVMediaType):AVCaptureDevice;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624584-requestaccessformediatype
    requestAccessForMediaType_completionHandler(mediaType: AVMediaType, handler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624613-authorizationstatusformediatype
    authorizationStatusForMediaType(mediaType: AVMediaType):AVAuthorizationStatus;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1387810-lockforconfiguration
    lockForConfiguration(outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1387917-unlockforconfiguration
    unlockForConfiguration():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389512-inusebyanotherapplication
    inUseByAnotherApplication(): BOOL;
    setInUseByAnotherApplication(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1387761-suspended
    suspended(): BOOL;
    setSuspended(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388720-linkeddevices
    linkedDevices(): AVCaptureDevice;
    setLinkedDevices(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1387804-transporttype
    transportType(): number;
    setTransportType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388404-inputsources
    inputSources(): AVCaptureDeviceInputSource;
    setInputSources(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1390141-activeinputsource
    activeInputSource(): AVCaptureDeviceInputSource;
    setActiveInputSource(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1390477-uniqueid
    uniqueID(): string | cocoascript.NSString;
    setUniqueID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389500-modelid
    modelID(): string | cocoascript.NSString;
    setModelID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1390193-manufacturer
    manufacturer(): string | cocoascript.NSString;
    setManufacturer(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388222-localizedname
    localizedName(): string | cocoascript.NSString;
    setLocalizedName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389343-connected
    connected(): BOOL;
    setConnected(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/3153002-virtualdevice
    virtualDevice(): BOOL;
    setVirtualDevice(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2361119-devicetype
    deviceType(): AVCaptureDeviceType;
    setDeviceType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/3153001-constituentdevices
    constituentDevices(): AVCaptureDevice;
    setConstituentDevices(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624589-lensaperture
    lensAperture(): number;
    setLensAperture(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386909-position
    position(): AVCaptureDevicePosition;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389487-hasmediatype
    hasMediaType(mediaType: AVMediaType):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386263-supportsavcapturesessionpreset
    supportsAVCaptureSessionPreset(preset: AVCaptureSessionPreset):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388738-formats
    formats(): AVCaptureDeviceFormat;
    setFormats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389221-activeformat
    activeFormat(): AVCaptureDeviceFormat;
    setActiveFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624606-exposureduration
    exposureDuration(): CMTime;
    setExposureDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624646-setexposuremodecustomwithduratio
    setExposureModeCustomWithDuration_ISO_completionHandler(duration: CMTime, ISO: number, handler: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624630-exposuretargetoffset
    exposureTargetOffset(): number;
    setExposureTargetOffset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624651-exposuretargetbias
    exposureTargetBias(): number;
    setExposureTargetBias(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624604-minexposuretargetbias
    minExposureTargetBias(): number;
    setMinExposureTargetBias(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624576-maxexposuretargetbias
    maxExposureTargetBias(): number;
    setMaxExposureTargetBias(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2968216-activemaxexposureduration
    activeMaxExposureDuration(): CMTime;
    setActiveMaxExposureDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624637-setexposuretargetbias
    setExposureTargetBias_completionHandler(bias: number, handler: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386253-adjustingexposure
    adjustingExposure(): BOOL;
    setAdjustingExposure(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388858-exposuremode
    exposureMode(): AVCaptureExposureMode;
    setExposureMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389048-isexposuremodesupported
    isExposureModeSupported(exposureMode: AVCaptureExposureMode):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388777-exposurepointofinterest
    exposurePointOfInterest(): CGPoint;
    setExposurePointOfInterest(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1387263-exposurepointofinterestsupported
    exposurePointOfInterestSupported(): BOOL;
    setExposurePointOfInterestSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2865755-activedepthdataformat
    activeDepthDataFormat(): AVCaptureDeviceFormat;
    setActiveDepthDataFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2968215-activedepthdataminframeduration
    activeDepthDataMinFrameDuration(): CMTime;
    setActiveDepthDataMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624611-videozoomfactor
    videoZoomFactor(): CGFloat;
    setVideoZoomFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2865754-minavailablevideozoomfactor
    minAvailableVideoZoomFactor(): CGFloat;
    setMinAvailableVideoZoomFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2865758-maxavailablevideozoomfactor
    maxAvailableVideoZoomFactor(): CGFloat;
    setMaxAvailableVideoZoomFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624614-ramptovideozoomfactor
    rampToVideoZoomFactor_withRate(factor: CGFloat, rate: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624588-rampingvideozoom
    rampingVideoZoom(): BOOL;
    setRampingVideoZoom(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624631-cancelvideozoomramp
    cancelVideoZoomRamp():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/3153003-virtualdeviceswitchovervideozoom
    virtualDeviceSwitchOverVideoZoomFactors(): NSNumber;
    setVirtualDeviceSwitchOverVideoZoomFactors(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2908991-dualcameraswitchovervideozoomfac
    dualCameraSwitchOverVideoZoomFactor(): CGFloat;
    setDualCameraSwitchOverVideoZoomFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389191-focusmode
    focusMode(): AVCaptureFocusMode;
    setFocusMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1390215-isfocusmodesupported
    isFocusModeSupported(focusMode: AVCaptureFocusMode):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1385853-focuspointofinterest
    focusPointOfInterest(): CGPoint;
    setFocusPointOfInterest(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1390436-focuspointofinterestsupported
    focusPointOfInterestSupported(): BOOL;
    setFocusPointOfInterestSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1390577-adjustingfocus
    adjustingFocus(): BOOL;
    setAdjustingFocus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624653-smoothautofocusenabled
    smoothAutoFocusEnabled(): BOOL;
    setSmoothAutoFocusEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624625-smoothautofocussupported
    smoothAutoFocusSupported(): BOOL;
    setSmoothAutoFocusSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624622-autofocusrangerestriction
    autoFocusRangeRestriction(): AVCaptureAutoFocusRangeRestriction;
    setAutoFocusRangeRestriction(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624570-autofocusrangerestrictionsupport
    autoFocusRangeRestrictionSupported(): BOOL;
    setAutoFocusRangeRestrictionSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388988-hasflash
    hasFlash(): BOOL;
    setHasFlash(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624627-flashavailable
    flashAvailable(): BOOL;
    setFlashAvailable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388116-flashmode
    flashMode(): AVCaptureFlashMode;
    setFlashMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386434-isflashmodesupported
    isFlashModeSupported(flashMode: AVCaptureFlashMode):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624598-flashactive
    flashActive(): BOOL;
    setFlashActive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1387674-hastorch
    hasTorch(): BOOL;
    setHasTorch(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624626-torchavailable
    torchAvailable(): BOOL;
    setTorchAvailable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624578-torchactive
    torchActive(): BOOL;
    setTorchActive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624605-torchlevel
    torchLevel(): number;
    setTorchLevel(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386035-torchmode
    torchMode(): AVCaptureTorchMode;
    setTorchMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388822-istorchmodesupported
    isTorchModeSupported(torchMode: AVCaptureTorchMode):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624609-settorchmodeonwithlevel
    setTorchModeOnWithLevel_error(torchLevel: number, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624595-lowlightboostsupported
    lowLightBoostSupported(): BOOL;
    setLowLightBoostSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624602-lowlightboostenabled
    lowLightBoostEnabled(): BOOL;
    setLowLightBoostEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624610-automaticallyenableslowlightboos
    automaticallyEnablesLowLightBoostWhenAvailable(): BOOL;
    setAutomaticallyEnablesLowLightBoostWhenAvailable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1389290-activevideominframeduration
    activeVideoMinFrameDuration(): CMTime;
    setActiveVideoMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1387816-activevideomaxframeduration
    activeVideoMaxFrameDuration(): CMTime;
    setActiveVideoMaxFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388479-transportcontrolssupported
    transportControlsSupported(): BOOL;
    setTransportControlsSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386373-transportcontrolsplaybackmode
    transportControlsPlaybackMode(): AVCaptureDeviceTransportControlsPlaybackMode;
    setTransportControlsPlaybackMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386639-transportcontrolsspeed
    transportControlsSpeed(): AVCaptureDeviceTransportControlsSpeed;
    setTransportControlsSpeed(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388481-settransportcontrolsplaybackmode
    setTransportControlsPlaybackMode_speed(mode: AVCaptureDeviceTransportControlsPlaybackMode, speed: AVCaptureDeviceTransportControlsSpeed):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624644-subjectareachangemonitoringenabl
    subjectAreaChangeMonitoringEnabled(): BOOL;
    setSubjectAreaChangeMonitoringEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624643-lensposition
    lensPosition(): number;
    setLensPosition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624617-setfocusmodelockedwithlenspositi
    setFocusModeLockedWithLensPosition_completionHandler(lensPosition: number, handler: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2361529-lockingfocuswithcustomlenspositi
    lockingFocusWithCustomLensPositionSupported(): BOOL;
    setLockingFocusWithCustomLensPositionSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1388587-iswhitebalancemodesupported
    isWhiteBalanceModeSupported(whiteBalanceMode: AVCaptureWhiteBalanceMode):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386369-whitebalancemode
    whiteBalanceMode(): AVCaptureWhiteBalanceMode;
    setWhiteBalanceMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1386544-adjustingwhitebalance
    adjustingWhiteBalance(): BOOL;
    setAdjustingWhiteBalance(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624650-chromaticityvaluesfordevicewhite
    chromaticityValuesForDeviceWhiteBalanceGains(whiteBalanceGains: AVCaptureWhiteBalanceGains):AVCaptureWhiteBalanceChromaticityValues;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624633-devicewhitebalancegains
    deviceWhiteBalanceGains(): AVCaptureWhiteBalanceGains;
    setDeviceWhiteBalanceGains(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624586-maxwhitebalancegain
    maxWhiteBalanceGain(): number;
    setMaxWhiteBalanceGain(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624575-devicewhitebalancegainsforchroma
    deviceWhiteBalanceGainsForChromaticityValues(chromaticityValues: AVCaptureWhiteBalanceChromaticityValues):AVCaptureWhiteBalanceGains;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624628-devicewhitebalancegainsfortemper
    deviceWhiteBalanceGainsForTemperatureAndTintValues(tempAndTintValues: AVCaptureWhiteBalanceTemperatureAndTintValues):AVCaptureWhiteBalanceGains;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624574-grayworlddevicewhitebalancegains
    grayWorldDeviceWhiteBalanceGains(): AVCaptureWhiteBalanceGains;
    setGrayWorldDeviceWhiteBalanceGains(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624568-setwhitebalancemodelockedwithdev
    setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains_completionHandler(whiteBalanceGains: AVCaptureWhiteBalanceGains, handler: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624640-temperatureandtintvaluesfordevic
    temperatureAndTintValuesForDeviceWhiteBalanceGains(whiteBalanceGains: AVCaptureWhiteBalanceGains):AVCaptureWhiteBalanceTemperatureAndTintValues;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2360576-lockingwhitebalancewithcustomdev
    lockingWhiteBalanceWithCustomDeviceGainsSupported(): BOOL;
    setLockingWhiteBalanceWithCustomDeviceGainsSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624649-iso
    ISO(): number;
    setISO(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624593-automaticallyadjustsvideohdrenab
    automaticallyAdjustsVideoHDREnabled(): BOOL;
    setAutomaticallyAdjustsVideoHDREnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1624645-videohdrenabled
    videoHDREnabled(): BOOL;
    setVideoHDREnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/1648668-activecolorspace
    activeColorSpace(): AVCaptureColorSpace;
    setActiveColorSpace(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/3194614-geometricdistortioncorrectionsup
    geometricDistortionCorrectionSupported(): BOOL;
    setGeometricDistortionCorrectionSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/3194613-geometricdistortioncorrectionena
    geometricDistortionCorrectionEnabled(): BOOL;
    setGeometricDistortionCorrectionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/3229937-extrinsicmatrixfromdevice
    extrinsicMatrixFromDevice_toDevice(fromDevice: AVCaptureDevice, toDevice: AVCaptureDevice):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/2933375-systempressurestate
    systemPressureState(): AVCaptureSystemPressureState;
    setSystemPressureState(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/3375756-globaltonemappingenabled
    globalToneMappingEnabled(): BOOL;
    setGlobalToneMappingEnabled(): void;
    //
    alloc():AVCaptureDevice;
    //
    init():AVCaptureDevice;
  }
}

declare const AVCaptureDevice: cocoascript.AVCaptureDevice;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicewasconnectednotification
declare const AVCaptureDeviceWasConnectedNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicewasdisconnectednotification
declare const AVCaptureDeviceWasDisconnectedNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicesubjectareadidchangenotification
declare const AVCaptureDeviceSubjectAreaDidChangeNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessioninterruptionsystempressurestatekey
declare const AVCaptureSessionInterruptionSystemPressureStateKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A capture input that provides media from a capture device to a capture session.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinput
   */
  interface AVCaptureDeviceInput extends AVCaptureInput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinput/1387609-initwithdevice
    initWithDevice_error(device: AVCaptureDevice, outError: NSError):AVCaptureDeviceInput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinput/1450880-deviceinputwithdevice
    deviceInputWithDevice_error(device: AVCaptureDevice, outError: NSError):AVCaptureDeviceInput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinput/1387915-device
    device(): AVCaptureDevice;
    setDevice(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinput/3173170-portswithmediatype
    portsWithMediaType_sourceDeviceType_sourceDevicePosition(mediaType: AVMediaType, sourceDeviceType: AVCaptureDeviceType, sourceDevicePosition: AVCaptureDevicePosition):AVCaptureInputPort;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinput/2968218-unifiedautoexposuredefaultsenabl
    unifiedAutoExposureDefaultsEnabled(): BOOL;
    setUnifiedAutoExposureDefaultsEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinput/3153008-videominframedurationoverride
    videoMinFrameDurationOverride(): CMTime;
    setVideoMinFrameDurationOverride(): void;
    //
    alloc():AVCaptureDeviceInput;
    //
    init():AVCaptureDeviceInput;
  }
}

declare const AVCaptureDeviceInput: cocoascript.AVCaptureDeviceInput;
declare namespace cocoascript {
  /**
   * A container for image data collected by a photo capture output.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturephoto
   */
  interface AVCapturePhoto extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873898-resolvedsettings
    resolvedSettings(): AVCaptureResolvedPhotoSettings;
    setResolvedSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873906-photocount
    photoCount(): NSInteger;
    setPhotoCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873981-timestamp
    timestamp(): CMTime;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873894-rawphoto
    rawPhoto(): BOOL;
    setRawPhoto(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873914-pixelbuffer
    pixelBuffer(): CVPixelBufferRef;
    setPixelBuffer(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2875952-embeddedthumbnailphotoformat
    embeddedThumbnailPhotoFormat(): id;
    setEmbeddedThumbnailPhotoFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873984-previewpixelbuffer
    previewPixelBuffer(): CVPixelBufferRef;
    setPreviewPixelBuffer(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873909-depthdata
    depthData(): AVDepthData;
    setDepthData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2890249-cameracalibrationdata
    cameraCalibrationData(): AVCameraCalibrationData;
    setCameraCalibrationData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2890250-sourcedevicetype
    sourceDeviceType(): AVCaptureDeviceType;
    setSourceDeviceType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873982-metadata
    metadata(): id;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2977523-portraiteffectsmatte
    portraitEffectsMatte(): AVPortraitEffectsMatte;
    setPortraitEffectsMatte(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2977522-filedatarepresentationwithcustom
    fileDataRepresentationWithCustomizer(customizer: AVCapturePhotoFileDataRepresentationCustomizer):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873919-filedatarepresentation
    fileDataRepresentation():NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873963-cgimagerepresentation
    CGImageRepresentation():CGImageRef;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873945-previewcgimagerepresentation
    previewCGImageRepresentation():CGImageRef;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2875953-filedatarepresentationwithreplac
    fileDataRepresentationWithReplacementMetadata_replacementEmbeddedThumbnailPhotoFormat_replacementEmbeddedThumbnailPixelBuffer_replacementDepthData(replacementMetadata: AVCapturePhoto, replacementEmbeddedThumbnailPhotoFormat: AVCapturePhoto, replacementEmbeddedThumbnailPixelBuffer: CVPixelBufferRef, replacementDepthData: AVDepthData):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873968-bracketsettings
    bracketSettings(): AVCaptureBracketedStillImageSettings;
    setBracketSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2873946-sequencecount
    sequenceCount(): NSInteger;
    setSequenceCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2880219-lensstabilizationstatus
    lensStabilizationStatus(): AVCaptureLensStabilizationStatus;
    setLensStabilizationStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/3153009-semanticsegmentationmattefortype
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
   * A capture output for still image, Live Photo, and other photography workflows.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput
   */
  interface AVCapturePhotoOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2879540-init
    init():AVCapturePhotoOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2879618-new
    new():AVCapturePhotoOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648765-capturephotowithsettings
    capturePhotoWithSettings_delegate(settings: AVCapturePhotoSettings, delegate: AVCapturePhotoCaptureDelegate):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1778630-availablephotopixelformattypes
    availablePhotoPixelFormatTypes(): NSNumber;
    setAvailablePhotoPixelFormatTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1778628-availablerawphotopixelformattype
    availableRawPhotoPixelFormatTypes(): NSNumber;
    setAvailableRawPhotoPixelFormatTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2873950-supportedphotopixelformattypesfo
    supportedPhotoPixelFormatTypesForFileType(fileType: AVFileType):NSNumber;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2873921-supportedrawphotopixelformattype
    supportedRawPhotoPixelFormatTypesForFileType(fileType: AVFileType):NSNumber;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3697090-isappleprorawpixelformat
    isAppleProRAWPixelFormat(pixelFormat: any):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3697091-isbayerrawpixelformat
    isBayerRAWPixelFormat(pixelFormat: any):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648654-availablephotocodectypes
    availablePhotoCodecTypes(): AVVideoCodecType;
    setAvailablePhotoCodecTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2873916-supportedphotocodectypesforfilet
    supportedPhotoCodecTypesForFileType(fileType: AVFileType):AVVideoCodecType;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2873918-availablephotofiletypes
    availablePhotoFileTypes(): AVFileType;
    setAvailablePhotoFileTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2873910-availablerawphotofiletypes
    availableRawPhotoFileTypes(): AVFileType;
    setAvailableRawPhotoFileTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3697089-appleprorawsupported
    appleProRAWSupported(): BOOL;
    setAppleProRAWSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3697088-appleprorawenabled
    appleProRAWEnabled(): BOOL;
    setAppleProRAWEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3566331-contentawaredistortioncorrection
    contentAwareDistortionCorrectionSupported(): BOOL;
    setContentAwareDistortionCorrectionSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3566330-contentawaredistortioncorrection
    contentAwareDistortionCorrectionEnabled(): BOOL;
    setContentAwareDistortionCorrectionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648607-lensstabilizationduringbracketed
    lensStabilizationDuringBracketedCaptureSupported(): BOOL;
    setLensStabilizationDuringBracketedCaptureSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648702-maxbracketedcapturephotocount
    maxBracketedCapturePhotoCount(): NSUInteger;
    setMaxBracketedCapturePhotoCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648766-supportedflashmodes
    supportedFlashModes(): NSNumber;
    setSupportedFlashModes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2968219-autoredeyereductionsupported
    autoRedEyeReductionSupported(): BOOL;
    setAutoRedEyeReductionSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648698-stillimagestabilizationsupported
    stillImageStabilizationSupported(): BOOL;
    setStillImageStabilizationSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2726864-dualcamerafusionsupported
    dualCameraFusionSupported(): BOOL;
    setDualCameraFusionSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648703-isflashscene
    isFlashScene(): BOOL;
    setIsFlashScene(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1778622-isstillimagestabilizationscene
    isStillImageStabilizationScene(): BOOL;
    setIsStillImageStabilizationScene(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1778634-photosettingsforscenemonitoring
    photoSettingsForSceneMonitoring(): AVCapturePhotoSettings;
    setPhotoSettingsForSceneMonitoring(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648721-highresolutioncaptureenabled
    highResolutionCaptureEnabled(): BOOL;
    setHighResolutionCaptureEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648622-livephotocapturesupported
    livePhotoCaptureSupported(): BOOL;
    setLivePhotoCaptureSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648772-livephotocaptureenabled
    livePhotoCaptureEnabled(): BOOL;
    setLivePhotoCaptureEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648615-livephotocapturesuspended
    livePhotoCaptureSuspended(): BOOL;
    setLivePhotoCaptureSuspended(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1648778-livephotoautotrimmingenabled
    livePhotoAutoTrimmingEnabled(): BOOL;
    setLivePhotoAutoTrimmingEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2866560-availablelivephotovideocodectype
    availableLivePhotoVideoCodecTypes(): AVVideoCodecType;
    setAvailableLivePhotoVideoCodecTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2866563-depthdatadeliverysupported
    depthDataDeliverySupported(): BOOL;
    setDepthDataDeliverySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2866565-depthdatadeliveryenabled
    depthDataDeliveryEnabled(): BOOL;
    setDepthDataDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2977529-portraiteffectsmattedeliveryenab
    portraitEffectsMatteDeliveryEnabled(): BOOL;
    setPortraitEffectsMatteDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2977530-portraiteffectsmattedeliverysupp
    portraitEffectsMatteDeliverySupported(): BOOL;
    setPortraitEffectsMatteDeliverySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephoto/2977523-portraiteffectsmatte
    portraitEffectsMatte(): AVPortraitEffectsMatte;
    setPortraitEffectsMatte(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2890245-dualcameradualphotodeliverysuppo
    dualCameraDualPhotoDeliverySupported(): BOOL;
    setDualCameraDualPhotoDeliverySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2890248-cameracalibrationdatadeliverysup
    cameraCalibrationDataDeliverySupported(): BOOL;
    setCameraCalibrationDataDeliverySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2890246-dualcameradualphotodeliveryenabl
    dualCameraDualPhotoDeliveryEnabled(): BOOL;
    setDualCameraDualPhotoDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3192189-virtualdeviceconstituentphotodel
    virtualDeviceConstituentPhotoDeliveryEnabled(): BOOL;
    setVirtualDeviceConstituentPhotoDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3192190-virtualdeviceconstituentphotodel
    virtualDeviceConstituentPhotoDeliverySupported(): BOOL;
    setVirtualDeviceConstituentPhotoDeliverySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3192191-virtualdevicefusionsupported
    virtualDeviceFusionSupported(): BOOL;
    setVirtualDeviceFusionSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2305506-preparedphotosettingsarray
    preparedPhotoSettingsArray(): AVCapturePhotoSettings;
    setPreparedPhotoSettingsArray(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/2305505-setpreparedphotosettingsarray
    setPreparedPhotoSettingsArray_completionHandler(preparedPhotoSettingsArray: AVCapturePhotoSettings, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1778657-jpegphotodatarepresentationforjp
    JPEGPhotoDataRepresentationForJPEGSampleBuffer_previewPhotoSampleBuffer(JPEGSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/1778643-dngphotodatarepresentationforraw
    DNGPhotoDataRepresentationForRawSampleBuffer_previewPhotoSampleBuffer(rawSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3153011-availablesemanticsegmentationmat
    availableSemanticSegmentationMatteTypes(): AVSemanticSegmentationMatteType;
    setAvailableSemanticSegmentationMatteTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3153012-enabledsemanticsegmentationmatte
    enabledSemanticSegmentationMatteTypes(): AVSemanticSegmentationMatteType;
    setEnabledSemanticSegmentationMatteTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotooutput/3182995-maxphotoqualityprioritization
    maxPhotoQualityPrioritization(): AVCapturePhotoQualityPrioritization;
    setMaxPhotoQualityPrioritization(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate
   */
  interface AVCapturePhotoCaptureDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778621-captureoutput
    captureOutput_willBeginCaptureForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778625-captureoutput
    captureOutput_willCapturePhotoForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778632-captureoutput
    captureOutput_didCapturePhotoForResolvedSettings(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778618-captureoutput
    captureOutput_didFinishCaptureForResolvedSettings_error(output: AVCapturePhotoOutput, resolvedSettings: AVCaptureResolvedPhotoSettings, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/2873949-captureoutput
    captureOutput_didFinishProcessingPhoto_error(output: AVCapturePhotoOutput, photo: AVCapturePhoto, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778658-captureoutput
    captureOutput_didFinishRecordingLivePhotoMovieForEventualFileAtURL_resolvedSettings(output: AVCapturePhotoOutput, outputFileURL: NSURL, resolvedSettings: AVCaptureResolvedPhotoSettings):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778637-captureoutput
    captureOutput_didFinishProcessingLivePhotoToMovieFileAtURL_duration_photoDisplayTime_resolvedSettings_error(output: AVCapturePhotoOutput, outputFileURL: NSURL, duration: CMTime, photoDisplayTime: CMTime, resolvedSettings: AVCaptureResolvedPhotoSettings, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778647-captureoutput
    captureOutput_didFinishProcessingPhotoSampleBuffer_previewPhotoSampleBuffer_resolvedSettings_bracketSettings_error(output: AVCapturePhotoOutput, photoSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotocapturedelegate/1778639-captureoutput
    captureOutput_didFinishProcessingRawPhotoSampleBuffer_previewPhotoSampleBuffer_resolvedSettings_bracketSettings_error(output: AVCapturePhotoOutput, rawSampleBuffer: CMSampleBufferRef, previewPhotoSampleBuffer: CMSampleBufferRef, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A capture output that records scene depth information on compatible camera devices.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput
   */
  interface AVCaptureDepthDataOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput/2879538-init
    init():AVCaptureDepthDataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput/2879590-new
    new():AVCaptureDepthDataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput/2865670-alwaysdiscardslatedepthdata
    alwaysDiscardsLateDepthData(): BOOL;
    setAlwaysDiscardsLateDepthData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput/2881290-filteringenabled
    filteringEnabled(): BOOL;
    setFilteringEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput/2873864-setdelegate
    setDelegate_callbackQueue(delegate: AVCaptureDepthDataOutputDelegate, callbackQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput/2873865-delegate
    delegate(): AVCaptureDepthDataOutputDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutput/2873863-delegatecallbackqueue
    delegateCallbackQueue(): dispatch_queue_t;
    setDelegateCallbackQueue(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avdepthdata
   */
  interface AVDepthData extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881221-depthdatafromdictionaryrepresent
    depthDataFromDictionaryRepresentation_error(imageSourceAuxDataInfoDictionary: NSDictionary, outError: NSError):AVDepthData;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2873883-dictionaryrepresentationforauxil
    dictionaryRepresentationForAuxiliaryDataType(outAuxDataType: string | cocoascript.NSString):NSDictionary;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881227-depthdatamap
    depthDataMap(): CVPixelBufferRef;
    setDepthDataMap(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881228-depthdatatype
    depthDataType(): any;
    setDepthDataType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881224-depthdatafiltered
    depthDataFiltered(): BOOL;
    setDepthDataFiltered(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881229-depthdataaccuracy
    depthDataAccuracy(): AVDepthDataAccuracy;
    setDepthDataAccuracy(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2919804-depthdataquality
    depthDataQuality(): AVDepthDataQuality;
    setDepthDataQuality(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881225-depthdatabyapplyingexiforientati
    depthDataByApplyingExifOrientation(exifOrientation: CGImagePropertyOrientation):AVDepthData;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881222-depthdatabyconvertingtodepthdata
    depthDataByConvertingToDepthDataType(depthDataType: any):AVDepthData;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881233-availabledepthdatatypes
    availableDepthDataTypes(): NSNumber;
    setAvailableDepthDataTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881231-depthdatabyreplacingdepthdatamap
    depthDataByReplacingDepthDataMapWithPixelBuffer_error(pixelBuffer: CVPixelBufferRef, outError: NSError):AVDepthData;
    // doc://com.apple.documentation/documentation/avfoundation/avdepthdata/2881230-cameracalibrationdata
    cameraCalibrationData(): AVCameraCalibrationData;
    setCameraCalibrationData(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avportraiteffectsmatte
   */
  interface AVPortraitEffectsMatte extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avportraiteffectsmatte/2976125-portraiteffectsmattefromdictiona
    portraitEffectsMatteFromDictionaryRepresentation_error(imageSourceAuxDataInfoDictionary: NSDictionary, outError: NSError):AVPortraitEffectsMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avportraiteffectsmatte/2976123-portraiteffectsmattebyapplyingex
    portraitEffectsMatteByApplyingExifOrientation(exifOrientation: CGImagePropertyOrientation):AVPortraitEffectsMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avportraiteffectsmatte/2976124-portraiteffectsmattebyreplacingp
    portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBuffer_error(pixelBuffer: CVPixelBufferRef, outError: NSError):AVPortraitEffectsMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avportraiteffectsmatte/2976121-mattingimage
    mattingImage(): CVPixelBufferRef;
    setMattingImage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avportraiteffectsmatte/2976122-pixelformattype
    pixelFormatType(): any;
    setPixelFormatType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avportraiteffectsmatte/2976120-dictionaryrepresentationforauxil
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
   * doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte
   */
  interface AVSemanticSegmentationMatte extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte/3152124-semanticsegmentationmattefromima
    semanticSegmentationMatteFromImageSourceAuxiliaryDataType_dictionaryRepresentation_error(imageSourceAuxiliaryDataType: CFStringRef, imageSourceAuxiliaryDataInfoDictionary: NSDictionary, outError: NSError):AVSemanticSegmentationMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte/3152123-semanticsegmentationmattebyrepla
    semanticSegmentationMatteByReplacingSemanticSegmentationMatteWithPixelBuffer_error(pixelBuffer: CVPixelBufferRef, outError: NSError):AVSemanticSegmentationMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte/3152122-semanticsegmentationmattebyapply
    semanticSegmentationMatteByApplyingExifOrientation(exifOrientation: CGImagePropertyOrientation):AVSemanticSegmentationMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte/3152118-dictionaryrepresentationforauxil
    dictionaryRepresentationForAuxiliaryDataType(outAuxDataType: string | cocoascript.NSString):NSDictionary;
    // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte/3152119-mattetype
    matteType(): AVSemanticSegmentationMatteType;
    setMatteType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte/3152120-mattingimage
    mattingImage(): CVPixelBufferRef;
    setMattingImage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmatte/3152121-pixelformattype
    pixelFormatType(): any;
    setPixelFormatType(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput
   */
  interface AVCaptureMovieFileOutput extends AVCaptureFileOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/2879213-init
    init():AVCaptureMovieFileOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/1387146-moviefragmentinterval
    movieFragmentInterval(): CMTime;
    setMovieFragmentInterval(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/1387808-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/2968217-supportedoutputsettingskeysforco
    supportedOutputSettingsKeysForConnection(connection: AVCaptureConnection):NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/1386479-outputsettingsforconnection
    outputSettingsForConnection(connection: AVCaptureConnection):AVCaptureMovieFileOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/1388448-setoutputsettings
    setOutputSettings_forConnection(outputSettings: AVCaptureMovieFileOutput, connection: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/1648381-availablevideocodectypes
    availableVideoCodecTypes(): AVVideoCodecType;
    setAvailableVideoCodecTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/1616292-recordsvideoorientationandmirror
    recordsVideoOrientationAndMirroringChangesAsMetadataTrackForConnection(connection: AVCaptureConnection):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/1616284-setrecordsvideoorientationandmir
    setRecordsVideoOrientationAndMirroringChanges_asMetadataTrackForConnection(doRecordChanges: BOOL, connection: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemoviefileoutput/2879321-new
    new():AVCaptureMovieFileOutput;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput
   */
  interface AVCaptureVideoDataOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1389945-videosettings
    videoSettings(): id;
    setVideoSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1616296-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1385780-alwaysdiscardslatevideoframes
    alwaysDiscardsLateVideoFrames(): BOOL;
    setAlwaysDiscardsLateVideoFrames(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/3153021-automaticallyconfiguresoutputbuf
    automaticallyConfiguresOutputBufferDimensions(): BOOL;
    setAutomaticallyConfiguresOutputBufferDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/3153022-deliverspreviewsizedoutputbuffer
    deliversPreviewSizedOutputBuffers(): BOOL;
    setDeliversPreviewSizedOutputBuffers(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/2867900-recommendedvideosettingsforvideo
    recommendedVideoSettingsForVideoCodecType_assetWriterOutputFileType(videoCodecType: AVVideoCodecType, outputFileType: AVFileType):NSDictionary;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1616290-recommendedvideosettingsforasset
    recommendedVideoSettingsForAssetWriterWithOutputFileType(outputFileType: AVFileType):AVCaptureVideoDataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1387050-availablevideocvpixelformattypes
    availableVideoCVPixelFormatTypes(): NSNumber;
    setAvailableVideoCVPixelFormatTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1389227-availablevideocodectypes
    availableVideoCodecTypes(): AVVideoCodecType;
    setAvailableVideoCodecTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/2867901-availablevideocodectypesforasset
    availableVideoCodecTypesForAssetWriterWithOutputFileType(outputFileType: AVFileType):AVVideoCodecType;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1389008-setsamplebufferdelegate
    setSampleBufferDelegate_queue(sampleBufferDelegate: AVCaptureVideoDataOutputSampleBufferDelegate, sampleBufferCallbackQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1385886-samplebufferdelegate
    sampleBufferDelegate(): AVCaptureVideoDataOutputSampleBufferDelegate;
    setSampleBufferDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/1385831-samplebuffercallbackqueue
    sampleBufferCallbackQueue(): dispatch_queue_t;
    setSampleBufferCallbackQueue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/2879216-init
    init():AVCaptureVideoDataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutput/2879482-new
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
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiofileoutput
   */
  interface AVCaptureAudioFileOutput extends AVCaptureFileOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiofileoutput/1390895-availableoutputfiletypes
    availableOutputFileTypes():AVFileType;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiofileoutput/1387420-startrecordingtooutputfileurl
    startRecordingToOutputFileURL_outputFileType_recordingDelegate(outputFileURL: NSURL, fileType: AVFileType, delegate: AVCaptureFileOutputRecordingDelegate):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiofileoutput/1389958-audiosettings
    audioSettings(): id;
    setAudioSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiofileoutput/1389881-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiofileoutput/2879214-init
    init():AVCaptureAudioFileOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiofileoutput/2879322-new
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
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput
   */
  interface AVCaptureAudioDataOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput/2879217-init
    init():AVCaptureAudioDataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput/2879486-new
    new():AVCaptureAudioDataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput/1388527-audiosettings
    audioSettings(): id;
    setAudioSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput/1616308-recommendedaudiosettingsforasset
    recommendedAudioSettingsForAssetWriterWithOutputFileType(outputFileType: AVFileType):NSDictionary;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput/1390651-setsamplebufferdelegate
    setSampleBufferDelegate_queue(sampleBufferDelegate: AVCaptureAudioDataOutputSampleBufferDelegate, sampleBufferCallbackQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput/1386344-samplebufferdelegate
    sampleBufferDelegate(): AVCaptureAudioDataOutputSampleBufferDelegate;
    setSampleBufferDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutput/1389355-samplebuffercallbackqueue
    sampleBufferCallbackQueue(): dispatch_queue_t;
    setSampleBufferCallbackQueue(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatabodyobject
   */
  interface AVMetadataBodyObject extends AVMetadataObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatabodyobject/3174758-bodyid
    bodyID(): NSInteger;
    setBodyID(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatacatbodyobject
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatadogbodyobject
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatahumanbodyobject
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatasalientobject
   */
  interface AVMetadataSalientObject extends AVMetadataObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatasalientobject/3152378-objectid
    objectID(): NSInteger;
    setObjectID(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturemetadatainput
   */
  interface AVCaptureMetadataInput extends AVCaptureInput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadatainput/1622268-initwithformatdescription
    initWithFormatDescription_clock(desc: CMMetadataFormatDescriptionRef, clock: CMClockRef):AVCaptureMetadataInput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadatainput/1622269-metadatainputwithformatdescripti
    metadataInputWithFormatDescription_clock(desc: CMMetadataFormatDescriptionRef, clock: CMClockRef):AVCaptureMetadataInput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadatainput/1622266-appendtimedmetadatagroup
    appendTimedMetadataGroup_error(metadata: AVTimedMetadataGroup, outError: NSError):BOOL;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput
   */
  interface AVCaptureMetadataOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/1616289-availablemetadataobjecttypes
    availableMetadataObjectTypes(): AVMetadataObjectType;
    setAvailableMetadataObjectTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/1616299-metadataobjecttypes
    metadataObjectTypes(): AVMetadataObjectType;
    setMetadataObjectTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/1616291-rectofinterest
    rectOfInterest(): CGRect;
    setRectOfInterest(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/1616309-setmetadataobjectsdelegate
    setMetadataObjectsDelegate_queue(objectsDelegate: AVCaptureMetadataOutputObjectsDelegate, objectsCallbackQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/1616300-metadataobjectsdelegate
    metadataObjectsDelegate(): AVCaptureMetadataOutputObjectsDelegate;
    setMetadataObjectsDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/1616307-metadataobjectscallbackqueue
    metadataObjectsCallbackQueue(): dispatch_queue_t;
    setMetadataObjectsCallbackQueue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/2879539-init
    init():AVCaptureMetadataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutput/2879589-new
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatafaceobject
   */
  interface AVMetadataFaceObject extends AVMetadataObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatafaceobject/1386945-faceid
    faceID(): NSInteger;
    setFaceID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatafaceobject/1386866-hasrollangle
    hasRollAngle(): BOOL;
    setHasRollAngle(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatafaceobject/1389110-rollangle
    rollAngle(): CGFloat;
    setRollAngle(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatafaceobject/1385888-hasyawangle
    hasYawAngle(): BOOL;
    setHasYawAngle(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatafaceobject/1386517-yawangle
    yawAngle(): CGFloat;
    setYawAngle(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatamachinereadablecodeobject
   */
  interface AVMetadataMachineReadableCodeObject extends AVMetadataObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatamachinereadablecodeobject/1618815-corners
    corners(): NSDictionary;
    setCorners(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatamachinereadablecodeobject/2875944-descriptor
    descriptor(): CIBarcodeDescriptor;
    setDescriptor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatamachinereadablecodeobject/1618800-stringvalue
    stringValue(): string | cocoascript.NSString;
    setStringValue(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadataobject
   */
  interface AVMetadataObject extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataobject/1387841-type
    type(): AVMetadataObjectType;
    setType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataobject/1388593-time
    time(): CMTime;
    setTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataobject/1386827-duration
    duration(): CMTime;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataobject/1386043-bounds
    bounds(): CGRect;
    setBounds(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizer
   */
  interface AVCaptureDataOutputSynchronizer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizer/2873913-initwithdataoutputs
    initWithDataOutputs(dataOutputs: AVCaptureOutput):AVCaptureDataOutputSynchronizer;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizer/2873912-dataoutputs
    dataOutputs(): AVCaptureOutput;
    setDataOutputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizer/2873948-setdelegate
    setDelegate_queue(delegate: AVCaptureDataOutputSynchronizerDelegate, delegateCallbackQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizer/2873969-delegate
    delegate(): AVCaptureDataOutputSynchronizerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizer/2873947-delegatecallbackqueue
    delegateCallbackQueue(): dispatch_queue_t;
    setDelegateCallbackQueue(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddatacollection
   */
  interface AVCaptureSynchronizedDataCollection extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddatacollection/2873978-count
    count(): NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddatacollection/2873985-synchronizeddataforcaptureoutput
    synchronizedDataForCaptureOutput(captureOutput: AVCaptureOutput):AVCaptureSynchronizedData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddatacollection/2873892-objectforkeyedsubscript
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddepthdata
   */
  interface AVCaptureSynchronizedDepthData extends AVCaptureSynchronizedData {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddepthdata/2873977-depthdata
    depthData(): AVDepthData;
    setDepthData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddepthdata/2873971-depthdatawasdropped
    depthDataWasDropped(): BOOL;
    setDepthDataWasDropped(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddepthdata/2873979-droppedreason
    droppedReason(): AVCaptureOutputDataDroppedReason;
    setDroppedReason(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata
   */
  interface AVCaptureSynchronizedMetadataObjectData extends AVCaptureSynchronizedData {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata/2873923-metadataobjects
    metadataObjects(): AVMetadataObject;
    setMetadataObjects(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizedsamplebufferdata
   */
  interface AVCaptureSynchronizedSampleBufferData extends AVCaptureSynchronizedData {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/2873893-samplebuffer
    sampleBuffer(): CMSampleBufferRef;
    setSampleBuffer(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/2873965-samplebufferwasdropped
    sampleBufferWasDropped(): BOOL;
    setSampleBufferWasDropped(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizedsamplebufferdata/2873896-droppedreason
    droppedReason(): AVCaptureOutputDataDroppedReason;
    setDroppedReason(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddata
   */
  interface AVCaptureSynchronizedData extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesynchronizeddata/2873975-timestamp
    timestamp(): CMTime;
    setTimestamp(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer
   */
  interface AVCaptureVideoPreviewLayer extends CALayer {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1567198-layerwithsession
    layerWithSession(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1387766-initwithsession
    initWithSession(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1387426-initwithsessionwithnoconnection
    initWithSessionWithNoConnection(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1567197-layerwithsessionwithnoconnection
    layerWithSessionWithNoConnection(session: AVCaptureSession):AVCaptureVideoPreviewLayer;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1386708-videogravity
    videoGravity(): AVLayerVideoGravity;
    setVideoGravity(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623494-orientation
    orientation(): AVCaptureVideoOrientation;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623499-orientationsupported
    orientationSupported(): BOOL;
    setOrientationSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623493-mirrored
    mirrored(): BOOL;
    setMirrored(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623500-mirroringsupported
    mirroringSupported(): BOOL;
    setMirroringSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623496-automaticallyadjustsmirroring
    automaticallyAdjustsMirroring(): BOOL;
    setAutomaticallyAdjustsMirroring(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/3192195-previewing
    previewing(): BOOL;
    setPreviewing(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1386157-session
    session(): AVCaptureSession;
    setSession(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1390893-connection
    connection(): AVCaptureConnection;
    setConnection(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1390387-setsessionwithnoconnection
    setSessionWithNoConnection(session: AVCaptureSession):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623497-capturedevicepointofinterestforp
    captureDevicePointOfInterestForPoint(pointInLayer: CGPoint):CGPoint;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623502-pointforcapturedevicepointofinte
    pointForCaptureDevicePointOfInterest(captureDevicePointOfInterest: CGPoint):CGPoint;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623498-rectformetadataoutputrectofinter
    rectForMetadataOutputRectOfInterest(rectInMetadataOutputCoordinates: CGRect):CGRect;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623495-metadataoutputrectofinterestforr
    metadataOutputRectOfInterestForRect(rectInLayerCoordinates: CGRect):CGRect;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideopreviewlayer/1623501-transformedmetadataobjectformeta
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
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiopreviewoutput
   */
  interface AVCaptureAudioPreviewOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiopreviewoutput/1390610-outputdeviceuniqueid
    outputDeviceUniqueID(): string | cocoascript.NSString;
    setOutputDeviceUniqueID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiopreviewoutput/1390510-volume
    volume(): number;
    setVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiopreviewoutput/2879215-init
    init():AVCaptureAudioPreviewOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiopreviewoutput/2879470-new
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput
   */
  interface AVCaptureScreenInput extends AVCaptureInput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/1386383-initwithdisplayid
    initWithDisplayID(displayID: CGDirectDisplayID):AVCaptureScreenInput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/2879212-init
    init():AVCaptureScreenInput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/2879218-new
    new():AVCaptureScreenInput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/1387216-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/1390518-croprect
    cropRect(): CGRect;
    setCropRect(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/1390311-scalefactor
    scaleFactor(): CGFloat;
    setScaleFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/1385601-capturescursor
    capturesCursor(): BOOL;
    setCapturesCursor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/1385722-capturesmouseclicks
    capturesMouseClicks(): BOOL;
    setCapturesMouseClicks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturescreeninput/1390547-removesduplicateframes
    removesDuplicateFrames(): BOOL;
    setRemovesDuplicateFrames(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput
   */
  interface AVCaptureStillImageOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1387374-capturestillimageasynchronouslyf
    captureStillImageAsynchronouslyFromConnection_completionHandler(connection: AVCaptureConnection, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1387269-capturingstillimage
    capturingStillImage(): BOOL;
    setCapturingStillImage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616297-stillimagestabilizationactive
    stillImageStabilizationActive(): BOOL;
    setStillImageStabilizationActive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616301-automaticallyenablesstillimagest
    automaticallyEnablesStillImageStabilizationWhenAvailable(): BOOL;
    setAutomaticallyEnablesStillImageStabilizationWhenAvailable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616286-stillimagestabilizationsupported
    stillImageStabilizationSupported(): BOOL;
    setStillImageStabilizationSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616305-highresolutionstillimageoutputen
    highResolutionStillImageOutputEnabled(): BOOL;
    setHighResolutionStillImageOutputEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1388622-availableimagedatacvpixelformatt
    availableImageDataCVPixelFormatTypes(): NSNumber;
    setAvailableImageDataCVPixelFormatTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1388312-availableimagedatacodectypes
    availableImageDataCodecTypes(): AVVideoCodecType;
    setAvailableImageDataCodecTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1389306-outputsettings
    outputSettings(): id;
    setOutputSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1388131-jpegstillimagensdatarepresentati
    jpegStillImageNSDataRepresentation(jpegSampleBuffer: CMSampleBufferRef):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616285-capturestillimagebracketasynchro
    captureStillImageBracketAsynchronouslyFromConnection_withSettingsArray_completionHandler(connection: AVCaptureConnection, settings: AVCaptureBracketedStillImageSettings, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616294-maxbracketedcapturestillimagecou
    maxBracketedCaptureStillImageCount(): NSUInteger;
    setMaxBracketedCaptureStillImageCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616298-preparetocapturestillimagebracke
    prepareToCaptureStillImageBracketFromConnection_withSettingsArray_completionHandler(connection: AVCaptureConnection, settings: AVCaptureBracketedStillImageSettings, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616288-lensstabilizationduringbracketed
    lensStabilizationDuringBracketedCaptureSupported(): BOOL;
    setLensStabilizationDuringBracketedCaptureSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/1616287-lensstabilizationduringbracketed
    lensStabilizationDuringBracketedCaptureEnabled(): BOOL;
    setLensStabilizationDuringBracketedCaptureEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/2879209-init
    init():AVCaptureStillImageOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturestillimageoutput/2879496-new
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
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureinput
   */
  interface AVCaptureInput extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinput/1386635-ports
    ports(): AVCaptureInputPort;
    setPorts(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureoutput
   */
  interface AVCaptureOutput extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureoutput/1386239-connections
    connections(): AVCaptureConnection;
    setConnections(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureoutput/1389574-connectionwithmediatype
    connectionWithMediaType(mediaType: AVMediaType):AVCaptureConnection;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureoutput/1616310-transformedmetadataobjectformeta
    transformedMetadataObjectForMetadataObject_connection(metadataObject: AVMetadataObject, connection: AVCaptureConnection):AVMetadataObject;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureoutput/1616304-metadataoutputrectofinterestforr
    metadataOutputRectOfInterestForRect(rectInOutputCoordinates: CGRect):CGRect;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureoutput/1616311-rectformetadataoutputrectofinter
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
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection
   */
  interface AVCaptureConnection extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1444473-connectionwithinputports
    connectionWithInputPorts_output(ports: AVCaptureInputPort, output: AVCaptureOutput):AVCaptureConnection;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1388896-initwithinputports
    initWithInputPorts_output(ports: AVCaptureInputPort, output: AVCaptureOutput):AVCaptureConnection;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1444495-connectionwithinputport
    connectionWithInputPort_videoPreviewLayer(port: AVCaptureInputPort, layer: AVCaptureVideoPreviewLayer):AVCaptureConnection;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1385882-initwithinputport
    initWithInputPort_videoPreviewLayer(port: AVCaptureInputPort, layer: AVCaptureVideoPreviewLayer):AVCaptureConnection;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1390131-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1387696-active
    active(): BOOL;
    setActive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1388322-inputports
    inputPorts(): AVCaptureInputPort;
    setInputPorts(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1385571-output
    output(): AVCaptureOutput;
    setOutput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1390614-videopreviewlayer
    videoPreviewLayer(): AVCaptureVideoPreviewLayer;
    setVideoPreviewLayer(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1387519-audiochannels
    audioChannels(): AVCaptureAudioChannel;
    setAudioChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1389415-videoorientation
    videoOrientation(): AVCaptureVideoOrientation;
    setVideoOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1389294-supportsvideoorientation
    supportsVideoOrientation(): BOOL;
    setSupportsVideoOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1390559-videofieldmode
    videoFieldMode(): AVVideoFieldMode;
    setVideoFieldMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1390836-supportsvideofieldmode
    supportsVideoFieldMode(): BOOL;
    setSupportsVideoFieldMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1388931-videominframeduration
    videoMinFrameDuration(): CMTime;
    setVideoMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1386978-supportsvideominframeduration
    supportsVideoMinFrameDuration(): BOOL;
    setSupportsVideoMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1390246-videomaxframeduration
    videoMaxFrameDuration(): CMTime;
    setVideoMaxFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1389158-supportsvideomaxframeduration
    supportsVideoMaxFrameDuration(): BOOL;
    setSupportsVideoMaxFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1620479-videoscaleandcropfactor
    videoScaleAndCropFactor(): CGFloat;
    setVideoScaleAndCropFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1620478-videomaxscaleandcropfactor
    videoMaxScaleAndCropFactor(): CGFloat;
    setVideoMaxScaleAndCropFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1387082-automaticallyadjustsvideomirrori
    automaticallyAdjustsVideoMirroring(): BOOL;
    setAutomaticallyAdjustsVideoMirroring(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1387424-supportsvideomirroring
    supportsVideoMirroring(): BOOL;
    setSupportsVideoMirroring(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1389172-videomirrored
    videoMirrored(): BOOL;
    setVideoMirrored(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1620481-supportsvideostabilization
    supportsVideoStabilization(): BOOL;
    setSupportsVideoStabilization(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1620483-activevideostabilizationmode
    activeVideoStabilizationMode(): AVCaptureVideoStabilizationMode;
    setActiveVideoStabilizationMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1620484-preferredvideostabilizationmode
    preferredVideoStabilizationMode(): AVCaptureVideoStabilizationMode;
    setPreferredVideoStabilizationMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1620485-videostabilizationenabled
    videoStabilizationEnabled(): BOOL;
    setVideoStabilizationEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/1620482-enablesvideostabilizationwhenava
    enablesVideoStabilizationWhenAvailable(): BOOL;
    setEnablesVideoStabilizationWhenAvailable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/2875902-cameraintrinsicmatrixdeliverysup
    cameraIntrinsicMatrixDeliverySupported(): BOOL;
    setCameraIntrinsicMatrixDeliverySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureconnection/2875903-cameraintrinsicmatrixdeliveryena
    cameraIntrinsicMatrixDeliveryEnabled(): BOOL;
    setCameraIntrinsicMatrixDeliveryEnabled(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiochannel
   */
  interface AVCaptureAudioChannel extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiochannel/1387368-averagepowerlevel
    averagePowerLevel(): number;
    setAveragePowerLevel(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiochannel/1390872-peakholdlevel
    peakHoldLevel(): number;
    setPeakHoldLevel(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiochannel/1388396-volume
    volume(): number;
    setVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiochannel/1388574-enabled
    enabled(): BOOL;
    setEnabled(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput
   */
  interface AVCaptureFileOutput extends AVCaptureOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1388718-delegate
    delegate(): AVCaptureFileOutputDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1387390-maxrecordedduration
    maxRecordedDuration(): CMTime;
    setMaxRecordedDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1387684-maxrecordedfilesize
    maxRecordedFileSize(): number;
    setMaxRecordedFileSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1387523-minfreediskspacelimit
    minFreeDiskSpaceLimit(): number;
    setMinFreeDiskSpaceLimit(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1388576-outputfileurl
    outputFileURL(): NSURL;
    setOutputFileURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1389028-recordedduration
    recordedDuration(): CMTime;
    setRecordedDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1386933-recordedfilesize
    recordedFileSize(): number;
    setRecordedFileSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1387539-recording
    recording(): BOOL;
    setRecording(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1385716-recordingpaused
    recordingPaused(): BOOL;
    setRecordingPaused(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1387224-startrecordingtooutputfileurl
    startRecordingToOutputFileURL_recordingDelegate(outputFileURL: NSURL, delegate: AVCaptureFileOutputRecordingDelegate):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1389485-stoprecording
    stopRecording():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1386806-pauserecording
    pauseRecording():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutput/1389849-resumerecording
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputdelegate
   */
  interface AVCaptureFileOutputDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputdelegate/1388760-captureoutputshouldprovidesample
    captureOutputShouldProvideSampleAccurateRecordingStart(output: AVCaptureOutput):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputdelegate/1390096-captureoutput
    captureOutput_didOutputSampleBuffer_fromConnection(output: AVCaptureFileOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for responding to events that occur while recording captured media to a file.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputrecordingdelegate
   */
  interface AVCaptureFileOutputRecordingDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1387301-captureoutput
    captureOutput_didStartRecordingToOutputFileAtURL_fromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1390625-captureoutput
    captureOutput_willFinishRecordingToOutputFileAtURL_fromConnections_error(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1390612-captureoutput
    captureOutput_didFinishRecordingToOutputFileAtURL_fromConnections_error(output: AVCaptureFileOutput, outputFileURL: NSURL, connections: AVCaptureConnection, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1388838-captureoutput
    captureOutput_didPauseRecordingToOutputFileAtURL_fromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturefileoutputrecordingdelegate/1387653-captureoutput
    captureOutput_didResumeRecordingToOutputFileAtURL_fromConnections(output: AVCaptureFileOutput, fileURL: NSURL, connections: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving captured data from multiple capture outputs synchronized to the same timestamp.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizerdelegate
   */
  interface AVCaptureDataOutputSynchronizerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedataoutputsynchronizerdelegate/2873976-dataoutputsynchronizer
    dataOutputSynchronizer_didOutputSynchronizedDataCollection(synchronizer: AVCaptureDataOutputSynchronizer, synchronizedDataCollection: AVCaptureSynchronizedDataCollection):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving depth data produced by a depth capture output.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutputdelegate
   */
  interface AVCaptureDepthDataOutputDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutputdelegate/2873866-depthdataoutput
    depthDataOutput_didOutputDepthData_timestamp_connection(output: AVCaptureDepthDataOutput, depthData: AVDepthData, timestamp: CMTime, connection: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedepthdataoutputdelegate/2873867-depthdataoutput
    depthDataOutput_didDropDepthData_timestamp_connection_reason(output: AVCaptureDepthDataOutput, depthData: AVDepthData, timestamp: CMTime, connection: AVCaptureConnection, reason: AVCaptureOutputDataDroppedReason):void;
  }
}
declare namespace cocoascript {
  /**
   * A delegate protocol that defines the methods to implement to be an asset writer delegate.
   * doc://com.apple.documentation/documentation/avfoundation/avassetwriterdelegate
   */
  interface AVAssetWriterDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterdelegate/3546592-assetwriter
    assetWriter_didOutputSegmentData_segmentType(writer: AVAssetWriter, segmentData: NSData, segmentType: AVAssetSegmentType):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterdelegate/3546593-assetwriter
    assetWriter_didOutputSegmentData_segmentType_segmentReport(writer: AVAssetWriter, segmentData: NSData, segmentType: AVAssetSegmentType, segmentReport: AVAssetSegmentReport):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that allows a delegate to respond to audio interruptions and audio decoding errors, and to the completion of a sound’s playback.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioplayerdelegate
   */
  interface AVAudioPlayerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayerdelegate/1389160-audioplayerdidfinishplaying
    audioPlayerDidFinishPlaying_successfully(player: AVAudioPlayer, flag: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayerdelegate/1387676-audioplayerdecodeerrordidoccur
    audioPlayerDecodeErrorDidOccur_error(player: AVAudioPlayer, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayerdelegate/1624037-audioplayerbegininterruption
    audioPlayerBeginInterruption(player: AVAudioPlayer):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayerdelegate/1624040-audioplayerendinterruption
    audioPlayerEndInterruption_withOptions(player: AVAudioPlayer, flags: NSUInteger):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayerdelegate/1624039-audioplayerendinterruption
    audioPlayerEndInterruption(player: AVAudioPlayer):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayerdelegate/1624041-audioplayerendinterruption
    audioPlayerEndInterruption_withFlags(player: AVAudioPlayer, flags: NSUInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to respond to changes in the media data sequence.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutputpushdelegate
   */
  interface AVPlayerItemOutputPushDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutputpushdelegate/1390224-outputsequencewasflushed
    outputSequenceWasFlushed(output: AVPlayerItemOutput):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to respond to pixel buffer changes.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutputpulldelegate
   */
  interface AVPlayerItemOutputPullDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutputpulldelegate/1387498-outputmediadatawillchange
    outputMediaDataWillChange(sender: AVPlayerItemOutput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutputpulldelegate/1387279-outputsequencewasflushed
    outputSequenceWasFlushed(output: AVPlayerItemOutput):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol you implement to receive metadata callbacks from a player item metadata collector.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate
   */
  interface AVPlayerItemMetadataCollectorPushDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate/1617190-metadatacollector
    metadataCollector_didCollectDateRangeMetadataGroups_indexesOfNewGroups_indexesOfModifiedGroups(metadataCollector: AVPlayerItemMetadataCollector, metadataGroups: AVDateRangeMetadataGroup, indexesOfNewGroups: NSIndexSet, indexesOfModifiedGroups: NSIndexSet):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving metadata produced by a metadata capture output.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate
   */
  interface AVCaptureMetadataOutputObjectsDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/1389481-captureoutput
    captureOutput_didOutputMetadataObjects_fromConnection(output: AVCaptureOutput, metadataObjects: AVMetadataObject, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines responses to changes in state for the audio session.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondelegate
   */
  interface AVAudioSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondelegate/1616469-begininterruption
    beginInterruption():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondelegate/1616515-endinterruption
    endInterruption():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondelegate/1616472-endinterruptionwithflags
    endInterruptionWithFlags(flags: NSUInteger):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondelegate/1616532-inputisavailablechanged
    inputIsAvailableChanged(isInputAvailable: BOOL):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to represent operations to be performed by a compositor.
   * doc://com.apple.documentation/documentation/avfoundation/1386654-avvideocompositioninstruction
   */
  interface AVVideoCompositionInstruction extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/1386654-avvideocompositioninstruction/1389919-passthroughtrackid
    passthroughTrackID(): CMPersistentTrackID;
    setPassthroughTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/1386654-avvideocompositioninstruction/1388661-requiredsourcetrackids
    requiredSourceTrackIDs(): NSValue;
    setRequiredSourceTrackIDs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/1386654-avvideocompositioninstruction/1389376-containstweening
    containsTweening(): BOOL;
    setContainsTweening(): void;
    // doc://com.apple.documentation/documentation/avfoundation/1386654-avvideocompositioninstruction/1386216-enablepostprocessing
    enablePostProcessing(): BOOL;
    setEnablePostProcessing(): void;
    // doc://com.apple.documentation/documentation/avfoundation/1386654-avvideocompositioninstruction/1389873-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines stereo mixing properties used by mixers.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiostereomixing
   */
  interface AVAudioStereoMixing extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiostereomixing/1388580-pan
    pan(): number;
    setPan(): void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving sample buffers from and monitoring the status of a video data output.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate
   */
  interface AVCaptureVideoDataOutputSampleBufferDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1385775-captureoutput
    captureOutput_didOutputSampleBuffer_fromConnection(output: AVCaptureOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1388468-captureoutput
    captureOutput_didDropSampleBuffer_fromConnection(output: AVCaptureOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * A set of delegate callbacks to be implemented by callers of
   * doc://com.apple.documentation/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer
   */
  interface AVCapturePhotoFileDataRepresentationCustomizer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977527-replacementmetadataforphoto
    replacementMetadataForPhoto(photo: AVCapturePhoto):AVCapturePhotoFileDataRepresentationCustomizer;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977526-replacementembeddedthumbnailpixe
    replacementEmbeddedThumbnailPixelBufferWithPhotoFormat_forPhoto(replacementEmbeddedThumbnailPhotoFormatOut: AVCapturePhotoFileDataRepresentationCustomizer, photo: AVCapturePhoto):CVPixelBufferRef;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977525-replacementdepthdataforphoto
    replacementDepthDataForPhoto(photo: AVCapturePhoto):AVDepthData;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/2977528-replacementportraiteffectsmattef
    replacementPortraitEffectsMatteForPhoto(photo: AVCapturePhoto):AVPortraitEffectsMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/3153010-replacementsemanticsegmentationm
    replacementSemanticSegmentationMatteOfType_forPhoto(semanticSegmentationMatteType: AVSemanticSegmentationMatteType, photo: AVCapturePhoto):AVSemanticSegmentationMatte;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/3697087-replacementappleprorawcompressio
    replacementAppleProRAWCompressionSettingsForPhoto_defaultSettings_maximumBitDepth(photo: AVCapturePhoto, defaultSettings: AVCapturePhotoFileDataRepresentationCustomizer, maximumBitDepth: NSInteger):AVCapturePhotoFileDataRepresentationCustomizer;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to handle resource loading requests coming from a URL asset.
   * doc://com.apple.documentation/documentation/avfoundation/avassetresourceloaderdelegate
   */
  interface AVAssetResourceLoaderDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloaderdelegate/1388121-resourceloader
    resourceLoader_shouldWaitForLoadingOfRequestedResource(resourceLoader: AVAssetResourceLoader, loadingRequest: AVAssetResourceLoadingRequest):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloaderdelegate/1387058-resourceloader
    resourceLoader_shouldWaitForRenewalOfRequestedResource(resourceLoader: AVAssetResourceLoader, renewalRequest: AVAssetResourceRenewalRequest):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloaderdelegate/1387722-resourceloader
    resourceLoader_didCancelLoadingRequest(resourceLoader: AVAssetResourceLoader, loadingRequest: AVAssetResourceLoadingRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloaderdelegate/1388736-resourceloader
    resourceLoader_shouldWaitForResponseToAuthenticationChallenge(resourceLoader: AVAssetResourceLoader, authenticationChallenge: NSURLAuthenticationChallenge):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloaderdelegate/1387929-resourceloader
    resourceLoader_didCancelAuthenticationChallenge(resourceLoader: AVAssetResourceLoader, authenticationChallenge: NSURLAuthenticationChallenge):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol defining 3D mixing properties.
   * doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing
   */
  interface AVAudio3DMixing extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/1387690-obstruction
    obstruction(): number;
    setObstruction(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/1389498-occlusion
    occlusion(): number;
    setOcclusion(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/1390834-position
    position(): AVAudio3DPoint;
    setPosition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/1388224-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/1386560-renderingalgorithm
    renderingAlgorithm(): AVAudio3DMixingRenderingAlgorithm;
    setRenderingAlgorithm(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/1388665-reverbblend
    reverbBlend(): number;
    setReverbBlend(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/3230587-pointsourceinheadmode
    pointSourceInHeadMode(): AVAudio3DMixingPointSourceInHeadMode;
    setPointSourceInHeadMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixing/3230588-sourcemode
    sourceMode(): AVAudio3DMixingSourceMode;
    setSourceMode(): void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
   * doc://com.apple.documentation/documentation/avfoundation/avvideocompositionvalidationhandling
   */
  interface AVVideoCompositionValidationHandling extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionvalidationhandling/1389404-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingInvalidValueForKey(videoComposition: AVVideoComposition, key: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionvalidationhandling/1388620-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingEmptyTimeRange(videoComposition: AVVideoComposition, timeRange: CMTimeRange):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionvalidationhandling/1390721-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction(videoComposition: AVVideoComposition, videoCompositionInstruction: AVVideoCompositionInstruction):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionvalidationhandling/1388452-videocomposition
    videoComposition_shouldContinueValidatingAfterFindingInvalidTrackIDInInstruction_layerInstruction_asset(videoComposition: AVVideoComposition, videoCompositionInstruction: AVVideoCompositionInstruction, layerInstruction: AVVideoCompositionLayerInstruction, asset: AVAsset):BOOL;
  }
}
declare namespace cocoascript {
  /**
   * The protocol you implement to handle content key requests.
   * doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate
   */
  interface AVContentKeySessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2799204-contentkeysession
    contentKeySession_didProvideContentKeyRequest(session: AVContentKeySession, keyRequest: AVContentKeyRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2799168-contentkeysession
    contentKeySession_didProvideRenewingContentKeyRequest(session: AVContentKeySession, keyRequest: AVContentKeyRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2799200-contentkeysession
    contentKeySession_didProvidePersistableContentKeyRequest(session: AVContentKeySession, keyRequest: AVPersistableContentKeyRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2881821-contentkeysession
    contentKeySession_didUpdatePersistableContentKey_forContentKeyIdentifier(session: AVContentKeySession, persistableContentKey: NSData, keyIdentifier: AVContentKeySessionDelegate):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2799210-contentkeysession
    contentKeySession_shouldRetryContentKeyRequest_reason(session: AVContentKeySession, keyRequest: AVContentKeyRequest, retryReason: AVContentKeyRequestRetryReason):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2799160-contentkeysessioncontentprotecti
    contentKeySessionContentProtectionSessionIdentifierDidChange(session: AVContentKeySession):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2799201-contentkeysession
    contentKeySession_contentKeyRequest_didFailWithError(session: AVContentKeySession, keyRequest: AVContentKeyRequest, err: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2966512-contentkeysession
    contentKeySession_contentKeyRequestDidSucceed(session: AVContentKeySession, keyRequest: AVContentKeyRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessiondelegate/2966513-contentkeysessiondidgenerateexpi
    contentKeySessionDidGenerateExpiredSessionReport(session: AVContentKeySession):void;
  }
}
declare namespace cocoascript {
  /**
   * The delegate of an audio recorder object.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiorecorderdelegate
   */
  interface AVAudioRecorderDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorderdelegate/1388688-audiorecorderdidfinishrecording
    audioRecorderDidFinishRecording_successfully(recorder: AVAudioRecorder, flag: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorderdelegate/1387774-audiorecorderencodeerrordidoccur
    audioRecorderEncodeErrorDidOccur_error(recorder: AVAudioRecorder, error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorderdelegate/1624897-audiorecorderbegininterruption
    audioRecorderBeginInterruption(recorder: AVAudioRecorder):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorderdelegate/1624901-audiorecorderendinterruption
    audioRecorderEndInterruption_withOptions(recorder: AVAudioRecorder, flags: NSUInteger):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorderdelegate/1624902-audiorecorderendinterruption
    audioRecorderEndInterruption(recorder: AVAudioRecorder):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorderdelegate/1624904-audiorecorderendinterruption
    audioRecorderEndInterruption_withFlags(recorder: AVAudioRecorder, flags: NSUInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * A delegate protocol that contains optional methods you can implement to respond to events that occur during speech synthesis.
   * doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerdelegate
   */
  interface AVSpeechSynthesizerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerdelegate/1619701-speechsynthesizer
    speechSynthesizer_didStartSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance):void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerdelegate/1619681-speechsynthesizer
    speechSynthesizer_willSpeakRangeOfSpeechString_utterance(synthesizer: AVSpeechSynthesizer, characterRange: NSRange, utterance: AVSpeechUtterance):void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerdelegate/1619675-speechsynthesizer
    speechSynthesizer_didPauseSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance):void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerdelegate/1619677-speechsynthesizer
    speechSynthesizer_didContinueSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance):void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerdelegate/1619700-speechsynthesizer
    speechSynthesizer_didFinishSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance):void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerdelegate/1619678-speechsynthesizer
    speechSynthesizer_didCancelSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for receiving audio sample data from an audio capture.
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate
   */
  interface AVCaptureAudioDataOutputSampleBufferDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate/1386039-captureoutput
    captureOutput_didOutputSampleBuffer_fromConnection(output: AVCaptureOutput, sampleBuffer: CMSampleBufferRef, connection: AVCaptureConnection):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to enqueue sample buffers for presentation.
   * doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrendering
   */
  interface AVQueuedSampleBufferRendering extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrendering/2867638-readyformoremediadata
    readyForMoreMediaData(): BOOL;
    setReadyForMoreMediaData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrendering/2867641-enqueuesamplebuffer
    enqueueSampleBuffer(sampleBuffer: CMSampleBufferRef):void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrendering/2867643-requestmediadatawhenreadyonqueue
    requestMediaDataWhenReadyOnQueue_usingBlock(queue: dispatch_queue_t, block: void):void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrendering/2867642-stoprequestingmediadata
    stopRequestingMediaData():void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrendering/2867639-flush
    flush():void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrendering/2867640-timebase
    timebase(): CMTimebaseRef;
    setTimebase(): void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that defines the methods custom video compositors must implement.
   * doc://com.apple.documentation/documentation/avfoundation/avvideocompositing
   */
  interface AVVideoCompositing extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/1388894-startvideocompositionrequest
    startVideoCompositionRequest(asyncVideoCompositionRequest: AVAsynchronousVideoCompositionRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/1390659-cancelallpendingvideocomposition
    cancelAllPendingVideoCompositionRequests():void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/1390363-rendercontextchanged
    renderContextChanged(newRenderContext: AVVideoCompositionRenderContext):void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/1643657-supportswidecolorsourceframes
    supportsWideColorSourceFrames(): BOOL;
    setSupportsWideColorSourceFrames(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/3227885-anticipaterenderingusinghint
    anticipateRenderingUsingHint(renderHint: AVVideoCompositionRenderHint):void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/3227886-prerollforrenderingusinghint
    prerollForRenderingUsingHint(renderHint: AVVideoCompositionRenderHint):void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/1386414-requiredpixelbufferattributesfor
    requiredPixelBufferAttributesForRenderContext(): id;
    setRequiredPixelBufferAttributesForRenderContext(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/1388610-sourcepixelbufferattributes
    sourcePixelBufferAttributes(): id;
    setSourcePixelBufferAttributes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositing/3626026-supportshdrsourceframes
    supportsHDRSourceFrames(): BOOL;
    setSupportsHDRSourceFrames(): void;
  }
}
declare namespace cocoascript {
  /**
   * A metadata item associated with an audiovisual asset or one of its tracks.
   * doc://com.apple.documentation/documentation/avfoundation/avmetadataitem
   */
  interface AVMetadataItem extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387745-metadataitemwithpropertiesofmeta
    metadataItemWithPropertiesOfMetadataItem_valueLoadingHandler(metadataItem: AVMetadataItem, handler: AVMetadataItemValueRequest):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387843-key
    key(): NSCopying;
    setKey(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1385757-keyspace
    keySpace(): AVMetadataKeySpace;
    setKeySpace(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1389864-commonkey
    commonKey(): AVMetadataKey;
    setCommonKey(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387102-loadvaluesasynchronouslyforkeys
    loadValuesAsynchronouslyForKeys_completionHandler(keys: string | cocoascript.NSString, handler: void):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1388523-statusofvalueforkey
    statusOfValueForKey_error(key: string | cocoascript.NSString, outError: NSError):AVKeyValueStatus;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1390537-value
    value(): NSCopying;
    setValue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1388612-time
    time(): CMTime;
    setTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1386610-duration
    duration(): CMTime;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387114-locale
    locale(): NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387641-datavalue
    dataValue(): NSData;
    setDataValue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1389570-extraattributes
    extraAttributes(): id;
    setExtraAttributes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1386856-datatype
    dataType(): string | cocoascript.NSString;
    setDataType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387068-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1388535-startdate
    startDate(): NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387869-identifierforkey
    identifierForKey_keySpace(key: AVMetadataItem, keySpace: AVMetadataKeySpace):AVMetadataIdentifier;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1386968-identifier
    identifier(): AVMetadataIdentifier;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1385613-keyforidentifier
    keyForIdentifier(identifier: AVMetadataIdentifier):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1390663-keyspaceforidentifier
    keySpaceForIdentifier(identifier: AVMetadataIdentifier):AVMetadataKeySpace;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1390846-stringvalue
    stringValue(): string | cocoascript.NSString;
    setStringValue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1390681-numbervalue
    numberValue(): NSNumber;
    setNumberValue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1385563-datevalue
    dateValue(): NSDate;
    setDateValue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1386083-metadataitemsfromarray
    metadataItemsFromArray_withKey_keySpace(metadataItems: AVMetadataItem, key: AVMetadataItem, keySpace: AVMetadataKeySpace):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1389374-metadataitemsfromarray
    metadataItemsFromArray_withLocale(metadataItems: AVMetadataItem, locale: NSLocale):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1387901-metadataitemsfromarray
    metadataItemsFromArray_filteredAndSortedAccordingToPreferredLanguages(metadataItems: AVMetadataItem, preferredLanguages: string | cocoascript.NSString):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1390238-metadataitemsfromarray
    metadataItemsFromArray_filteredByMetadataItemFilter(metadataItems: AVMetadataItem, metadataItemFilter: AVMetadataItemFilter):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitem/1385843-metadataitemsfromarray
    metadataItemsFromArray_filteredByIdentifier(metadataItems: AVMetadataItem, identifier: AVMetadataIdentifier):AVMetadataItem;
    //
    alloc():AVMetadataItem;
    //
    init():AVMetadataItem;
  }
}

declare const AVMetadataItem: cocoascript.AVMetadataItem;
declare namespace cocoascript {
  /**
   * An object that represents the audiovisual containers that conform to a QuickTime or ISO-based media file format.
   * doc://com.apple.documentation/documentation/avfoundation/avmovie
   */
  interface AVMovie extends AVAsset {
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1387923-initwithurl
    initWithURL_options(URL: NSURL, options: AVMovie):AVMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1458223-moviewithurl
    movieWithURL_options(URL: NSURL, options: AVMovie):AVMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1388090-initwithdata
    initWithData_options(data: NSData, options: AVMovie):AVMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1458261-moviewithdata
    movieWithData_options(data: NSData, options: AVMovie):AVMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1386990-url
    URL(): NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1387333-cancontainmoviefragments
    canContainMovieFragments(): BOOL;
    setCanContainMovieFragments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1388597-containsmoviefragments
    containsMovieFragments(): BOOL;
    setContainsMovieFragments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1388017-data
    data(): NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1388424-defaultmediadatastorage
    defaultMediaDataStorage(): AVMediaDataStorage;
    setDefaultMediaDataStorage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1386485-tracks
    tracks(): AVMovieTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1388690-movietypes
    movieTypes():AVFileType;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1386722-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1386839-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1388667-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1386686-movieheaderwithfiletype
    movieHeaderWithFileType_error(fileType: AVFileType, outError: NSError):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1386682-writemovieheadertourl
    writeMovieHeaderToURL_fileType_options_error(URL: NSURL, fileType: AVFileType, options: AVMovieWritingOptions, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmovie/1385982-iscompatiblewithfiletype
    isCompatibleWithFileType(fileType: AVFileType):BOOL;
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
   * doc://com.apple.documentation/documentation/avfoundation/avtimedmetadatagroup
   */
  interface AVTimedMetadataGroup extends AVMetadataGroup {
    // doc://com.apple.documentation/documentation/avfoundation/avtimedmetadatagroup/1389632-initwithitems
    initWithItems_timeRange(items: AVMetadataItem, timeRange: CMTimeRange):AVTimedMetadataGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avtimedmetadatagroup/1387128-initwithsamplebuffer
    initWithSampleBuffer(sampleBuffer: CMSampleBufferRef):AVTimedMetadataGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avtimedmetadatagroup/1385928-items
    items(): AVMetadataItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avtimedmetadatagroup/1387992-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avtimedmetadatagroup/1389461-copyformatdescription
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
   * doc://com.apple.documentation/documentation/avfoundation/avdaterangemetadatagroup
   */
  interface AVDateRangeMetadataGroup extends AVMetadataGroup {
    // doc://com.apple.documentation/documentation/avfoundation/avdaterangemetadatagroup/1389614-initwithitems
    initWithItems_startDate_endDate(items: AVMetadataItem, startDate: NSDate, endDate: NSDate):AVDateRangeMetadataGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avdaterangemetadatagroup/1390120-items
    items(): AVMetadataItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdaterangemetadatagroup/1386420-startdate
    startDate(): NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avdaterangemetadatagroup/1386255-enddate
    endDate(): NSDate;
    setEndDate(): void;
    //
    alloc():AVDateRangeMetadataGroup;
    //
    init():AVDateRangeMetadataGroup;
  }
}

declare const AVDateRangeMetadataGroup: cocoascript.AVDateRangeMetadataGroup;
declare namespace cocoascript {
  /**
   * A group of related tracks in an asset.
   * doc://com.apple.documentation/documentation/avfoundation/avassettrackgroup
   */
  interface AVAssetTrackGroup extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassettrackgroup/1389024-trackids
    trackIDs(): NSNumber;
    setTrackIDs(): void;
    //
    alloc():AVAssetTrackGroup;
    //
    init():AVAssetTrackGroup;
  }
}

declare const AVAssetTrackGroup: cocoascript.AVAssetTrackGroup;
declare namespace cocoascript {
  /**
   * An object that supprts using Core Image filters to process an individual video frame in a video composition.
   * doc://com.apple.documentation/documentation/avfoundation/avasynchronousciimagefilteringrequest
   */
  interface AVAsynchronousCIImageFilteringRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousciimagefilteringrequest/1387577-sourceimage
    sourceImage(): CIImage;
    setSourceImage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousciimagefilteringrequest/1388240-compositiontime
    compositionTime(): CMTime;
    setCompositionTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousciimagefilteringrequest/1387933-rendersize
    renderSize(): CGSize;
    setRenderSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousciimagefilteringrequest/1389124-finishwithimage
    finishWithImage_context(filteredImage: CIImage, context: CIContext):void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousciimagefilteringrequest/1386608-finishwitherror
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
   * An object that contains the information necessary for a video compositor to render an output pixel buffer.
   * doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest
   */
  interface AVAsynchronousVideoCompositionRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1390379-sourceframebytrackid
    sourceFrameByTrackID(trackID: CMPersistentTrackID):CVPixelBufferRef;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1386261-finishcancelledrequest
    finishCancelledRequest():void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1387450-finishwithcomposedvideoframe
    finishWithComposedVideoFrame(composedVideoFrame: CVPixelBufferRef):void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1390797-finishwitherror
    finishWithError(error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1386888-compositiontime
    compositionTime(): CMTime;
    setCompositionTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1389112-rendercontext
    renderContext(): AVVideoCompositionRenderContext;
    setRenderContext(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1388898-sourcetrackids
    sourceTrackIDs(): NSNumber;
    setSourceTrackIDs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronousvideocompositionrequest/1386672-videocompositioninstruction
    videoCompositionInstruction(): AVVideoCompositionInstruction;
    setVideoCompositionInstruction(): void;
    //
    alloc():AVAsynchronousVideoCompositionRequest;
    //
    init():AVAsynchronousVideoCompositionRequest;
  }
}

declare const AVAsynchronousVideoCompositionRequest: cocoascript.AVAsynchronousVideoCompositionRequest;
declare namespace cocoascript {
  /**
   * An abstract class that models timed audiovisual media.
   * doc://com.apple.documentation/documentation/avfoundation/avasset
   */
  interface AVAsset extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389943-assetwithurl
    assetWithURL(URL: NSURL):AVAsset;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389400-duration
    duration(): CMTime;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390850-providesprecisedurationandtiming
    providesPreciseDurationAndTiming(): BOOL;
    setProvidesPreciseDurationAndTiming(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389912-preferredrate
    preferredRate(): number;
    setPreferredRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390457-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1385906-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/3197641-minimumtimeoffsetfromlive
    minimumTimeOffsetFromLive(): CMTime;
    setMinimumTimeOffsetFromLive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1508715-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1385974-playable
    playable(): BOOL;
    setPlayable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389245-exportable
    exportable(): BOOL;
    setExportable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390475-readable
    readable(): BOOL;
    setReadable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1386129-composable
    composable(): BOOL;
    setComposable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389223-hasprotectedcontent
    hasProtectedContent(): BOOL;
    setHasProtectedContent(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390333-compatiblewithairplayvideo
    compatibleWithAirPlayVideo(): BOOL;
    setCompatibleWithAirPlayVideo(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1616742-compatiblewithsavedphotosalbum
    compatibleWithSavedPhotosAlbum(): BOOL;
    setCompatibleWithSavedPhotosAlbum(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1387953-tracks
    tracks(): AVAssetTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390145-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVAssetTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1387140-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVAssetTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389554-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVAssetTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1385898-unusedtrackid
    unusedTrackID():CMPersistentTrackID;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390697-trackgroups
    trackGroups(): AVAssetTrackGroup;
    setTrackGroups(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1386884-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390498-commonmetadata
    commonMetadata(): AVMetadataItem;
    setCommonMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1385823-availablemetadataformats
    availableMetadataFormats(): AVMetadataFormat;
    setAvailableMetadataFormats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1387759-metadataforformat
    metadataForFormat(format: AVMetadataFormat):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1386342-creationdate
    creationDate(): AVMetadataItem;
    setCreationDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1388104-lyrics
    lyrics(): string | cocoascript.NSString;
    setLyrics(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1388228-availablechapterlocales
    availableChapterLocales(): NSLocale;
    setAvailableChapterLocales(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1388966-chaptermetadatagroupswithtitlelo
    chapterMetadataGroupsWithTitleLocale_containingItemsWithCommonKeys(locale: NSLocale, commonKeys: AVMetadataKey):AVTimedMetadataGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390909-chaptermetadatagroupsbestmatchin
    chapterMetadataGroupsBestMatchingPreferredLanguages(preferredLanguages: string | cocoascript.NSString):AVTimedMetadataGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/2890796-allmediaselections
    allMediaSelections(): AVMediaSelection;
    setAllMediaSelections(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1386122-preferredmediaselection
    preferredMediaSelection(): AVMediaSelection;
    setPreferredMediaSelection(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389433-availablemediacharacteristicswit
    availableMediaCharacteristicsWithMediaSelectionOptions(): AVMediaCharacteristic;
    setAvailableMediaCharacteristicsWithMediaSelectionOptions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1387496-mediaselectiongroupformediachara
    mediaSelectionGroupForMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMediaSelectionGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1390489-referencerestrictions
    referenceRestrictions(): AVAssetReferenceRestrictions;
    setReferenceRestrictions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1389520-cancontainfragments
    canContainFragments(): BOOL;
    setCanContainFragments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1385589-containsfragments
    containsFragments(): BOOL;
    setContainsFragments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/2715834-overalldurationhint
    overallDurationHint(): CMTime;
    setOverallDurationHint(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/1388722-cancelloading
    cancelLoading():void;
    // doc://com.apple.documentation/documentation/avfoundation/avasset/2935636-preferreddisplaycriteria
    preferredDisplayCriteria(): AVDisplayCriteria;
    setPreferredDisplayCriteria(): void;
    //
    alloc():AVAsset;
    //
    init():AVAsset;
  }
}

declare const AVAsset: cocoascript.AVAsset;
declare namespace cocoascript {
  /**
   * An object that represents an immutable video composition.
   * doc://com.apple.documentation/documentation/avfoundation/avvideocomposition
   */
  interface AVVideoComposition extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1385892-videocompositionwithpropertiesof
    videoCompositionWithPropertiesOfAsset(asset: AVAsset):AVVideoComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1389556-videocompositionwithasset
    videoCompositionWithAsset_applyingCIFiltersWithHandler(asset: AVAsset, applier: AVAsynchronousCIImageFilteringRequest):AVVideoComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1388013-frameduration
    frameDuration(): CMTime;
    setFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1388705-rendersize
    renderSize(): CGSize;
    setRenderSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1615786-renderscale
    renderScale(): number;
    setRenderScale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1389211-instructions
    instructions(): AVVideoCompositionInstruction;
    setInstructions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1387030-animationtool
    animationTool(): AVVideoCompositionCoreAnimationTool;
    setAnimationTool(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1389622-customvideocompositorclass
    customVideoCompositorClass(): AVVideoCompositing;
    setCustomVideoCompositorClass(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/2873798-sourcetrackidforframetiming
    sourceTrackIDForFrameTiming(): CMPersistentTrackID;
    setSourceTrackIDForFrameTiming(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1643235-colorprimaries
    colorPrimaries(): string | cocoascript.NSString;
    setColorPrimaries(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1643230-colortransferfunction
    colorTransferFunction(): string | cocoascript.NSString;
    setColorTransferFunction(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1643236-colorycbcrmatrix
    colorYCbCrMatrix(): string | cocoascript.NSString;
    setColorYCbCrMatrix(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocomposition/1389917-isvalidforasset
    isValidForAsset_timeRange_validationDelegate(asset: AVAsset, timeRange: CMTimeRange, validationDelegate: AVVideoCompositionValidationHandling):BOOL;
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
   * doc://com.apple.documentation/documentation/avfoundation/avvideocompositionlayerinstruction
   */
  interface AVVideoCompositionLayerInstruction extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionlayerinstruction/1390240-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionlayerinstruction/1388471-getopacityrampfortime
    getOpacityRampForTime_startOpacity_endOpacity_timeRange(time: CMTime, startOpacity: number, endOpacity: number, timeRange: CMTimeRange):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionlayerinstruction/1387257-gettransformrampfortime
    getTransformRampForTime_startTransform_endTransform_timeRange(time: CMTime, startTransform: CGAffineTransform, endTransform: CGAffineTransform, timeRange: CMTimeRange):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionlayerinstruction/1387998-getcroprectanglerampfortime
    getCropRectangleRampForTime_startCropRectangle_endCropRectangle_timeRange(time: CMTime, startCropRectangle: CGRect, endCropRectangle: CGRect, timeRange: CMTimeRange):BOOL;
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
   * doc://com.apple.documentation/documentation/avfoundation/avvideocompositioninstruction
   */
  interface AVVideoCompositionInstruction extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioninstruction/1389384-backgroundcolor
    backgroundColor(): CGColorRef;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioninstruction/1389689-layerinstructions
    layerInstructions(): AVVideoCompositionLayerInstruction;
    setLayerInstructions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioninstruction/1387857-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioninstruction/1388697-enablepostprocessing
    enablePostProcessing(): BOOL;
    setEnablePostProcessing(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioninstruction/1387657-passthroughtrackid
    passthroughTrackID(): CMPersistentTrackID;
    setPassthroughTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioninstruction/1390913-requiredsourcetrackids
    requiredSourceTrackIDs(): NSValue;
    setRequiredSourceTrackIDs(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiomix
   */
  interface AVAudioMix extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomix/1388791-inputparameters
    inputParameters(): AVAudioMixInputParameters;
    setInputParameters(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiomixinputparameters
   */
  interface AVAudioMixInputParameters extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixinputparameters/1387471-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixinputparameters/1389578-getvolumerampfortime
    getVolumeRampForTime_startVolume_endVolume_timeRange(time: CMTime, startVolume: number, endVolume: number, timeRange: CMTimeRange):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixinputparameters/1388578-audiotapprocessor
    audioTapProcessor(): MTAudioProcessingTapRef;
    setAudioTapProcessor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixinputparameters/1387042-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(): void;
    //
    alloc():AVAudioMixInputParameters;
    //
    init():AVAudioMixInputParameters;
  }
}

declare const AVAudioMixInputParameters: cocoascript.AVAudioMixInputParameters;
declare namespace cocoascript {
  /**
   * An object that provides the track-level interface to inspect an asset’s media tracks.
   * doc://com.apple.documentation/documentation/avfoundation/avassettrack
   */
  interface AVAssetTrack extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1385611-asset
    asset(): AVAsset;
    setAsset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1385799-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1385741-mediatype
    mediaType(): AVMediaType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1385847-hasmediacharacteristic
    hasMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1386694-formatdescriptions
    formatDescriptions(): NSArray;
    setFormatDescriptions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1387546-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388276-playable
    playable(): BOOL;
    setPlayable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1387643-selfcontained
    selfContained(): BOOL;
    setSelfContained(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/2887366-decodable
    decodable(): BOOL;
    setDecodable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1389758-estimateddatarate
    estimatedDataRate(): number;
    setEstimatedDataRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388900-totalsampledatalength
    totalSampleDataLength(): number;
    setTotalSampleDataLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388335-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1389233-naturaltimescale
    naturalTimeScale(): CMTimeScale;
    setNaturalTimeScale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388627-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1389105-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1387724-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1389837-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388832-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/3131265-hasaudiosampledependencies
    hasAudioSampleDependencies(): BOOL;
    setHasAudioSampleDependencies(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1386182-nominalframerate
    nominalFrameRate(): number;
    setNominalFrameRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388608-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1390844-requiresframereordering
    requiresFrameReordering(): BOOL;
    setRequiresFrameReordering(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1390665-segments
    segments(): AVAssetTrackSegment;
    setSegments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1387186-segmentfortracktime
    segmentForTrackTime(trackTime: CMTime):AVAssetTrackSegment;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388248-samplepresentationtimefortrackti
    samplePresentationTimeForTrackTime(trackTime: CMTime):CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1389054-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1390832-commonmetadata
    commonMetadata(): AVMetadataItem;
    setCommonMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1385751-availablemetadataformats
    availableMetadataFormats(): AVMetadataFormat;
    setAvailableMetadataFormats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1387921-metadataforformat
    metadataForFormat(format: AVMetadataFormat):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1388065-availabletrackassociationtypes
    availableTrackAssociationTypes(): AVTrackAssociationType;
    setAvailableTrackAssociationTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1389251-associatedtracksoftype
    associatedTracksOfType(trackAssociationType: AVTrackAssociationType):AVAssetTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1386692-canprovidesamplecursors
    canProvideSampleCursors(): BOOL;
    setCanProvideSampleCursors(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1390248-makesamplecursorwithpresentation
    makeSampleCursorWithPresentationTimeStamp(presentationTimeStamp: CMTime):AVSampleCursor;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1387226-makesamplecursoratfirstsampleind
    makeSampleCursorAtFirstSampleInDecodeOrder():AVSampleCursor;
    // doc://com.apple.documentation/documentation/avfoundation/avassettrack/1386014-makesamplecursoratlastsampleinde
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
   * doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup
   */
  interface AVMediaSelectionGroup extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1388351-options
    options(): AVMediaSelectionOption;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1389968-mediaselectionoptionwithproperty
    mediaSelectionOptionWithPropertyList(plist: AVMediaSelectionGroup):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1388440-defaultoption
    defaultOption(): AVMediaSelectionOption;
    setDefaultOption(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1388483-allowsemptyselection
    allowsEmptySelection(): BOOL;
    setAllowsEmptySelection(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1387351-playablemediaselectionoptionsfro
    playableMediaSelectionOptionsFromArray(mediaSelectionOptions: AVMediaSelectionOption):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1387494-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_withLocale(mediaSelectionOptions: AVMediaSelectionOption, locale: NSLocale):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1388258-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_withMediaCharacteristics(mediaSelectionOptions: AVMediaSelectionOption, mediaCharacteristics: AVMediaCharacteristic):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1387631-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_withoutMediaCharacteristics(mediaSelectionOptions: AVMediaSelectionOption, mediaCharacteristics: AVMediaCharacteristic):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1387034-mediaselectionoptionsfromarray
    mediaSelectionOptionsFromArray_filteredAndSortedAccordingToPreferredLanguages(mediaSelectionOptions: AVMediaSelectionOption, preferredLanguages: string | cocoascript.NSString):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectiongroup/1623531-makenowplayinginfolanguageoption
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
   * doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption
   */
  interface AVMediaSelectionOption extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1386322-mediatype
    mediaType(): AVMediaType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1385587-mediasubtypes
    mediaSubTypes(): NSNumber;
    setMediaSubTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1388531-hasmediacharacteristic
    hasMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1387859-commonmetadata
    commonMetadata(): AVMetadataItem;
    setCommonMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1389504-availablemetadataformats
    availableMetadataFormats(): string | cocoascript.NSString;
    setAvailableMetadataFormats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1386666-metadataforformat
    metadataForFormat(format: string | cocoascript.NSString):AVMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1390917-playable
    playable(): BOOL;
    setPlayable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1388485-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1388021-displaynamewithlocale
    displayNameWithLocale(locale: NSLocale):NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1388436-locale
    locale(): NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1387619-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1388232-associatedmediaselectionoptionin
    associatedMediaSelectionOptionInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1623532-makenowplayinginfolanguageoption
    makeNowPlayingInfoLanguageOption():MPNowPlayingInfoLanguageOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselectionoption/1386310-propertylist
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
   * A buffer of audio data and its format.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiobuffer
   */
  interface AVAudioBuffer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiobuffer/1387540-format
    format(): AVAudioFormat;
    setFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiobuffer/1385579-audiobufferlist
    audioBufferList(): AudioBufferList;
    setAudioBufferList(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiobuffer/1389207-mutableaudiobufferlist
    mutableAudioBufferList(): AudioBufferList;
    setMutableAudioBufferList(): void;
    //
    alloc():AVAudioBuffer;
    //
    init():AVAudioBuffer;
  }
}

declare const AVAudioBuffer: cocoascript.AVAudioBuffer;
declare namespace cocoascript {
  /**
   * An object that represents text styling rules applied to text in a media item.
   * doc://com.apple.documentation/documentation/avfoundation/avtextstylerule
   */
  interface AVTextStyleRule extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1387802-textstylerulesfrompropertylist
    textStyleRulesFromPropertyList(plist: AVTextStyleRule):AVTextStyleRule;
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1584360-textstylerulewithtextmarkupattri
    textStyleRuleWithTextMarkupAttributes(textMarkupAttributes: AVTextStyleRule):AVTextStyleRule;
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1584361-textstylerulewithtextmarkupattri
    textStyleRuleWithTextMarkupAttributes_textSelector(textMarkupAttributes: AVTextStyleRule, textSelector: string | cocoascript.NSString):AVTextStyleRule;
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1385849-initwithtextmarkupattributes
    initWithTextMarkupAttributes(textMarkupAttributes: AVTextStyleRule):AVTextStyleRule;
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1389854-initwithtextmarkupattributes
    initWithTextMarkupAttributes_textSelector(textMarkupAttributes: AVTextStyleRule, textSelector: string | cocoascript.NSString):AVTextStyleRule;
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1387945-textmarkupattributes
    textMarkupAttributes(): id;
    setTextMarkupAttributes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1389451-textselector
    textSelector(): string | cocoascript.NSString;
    setTextSelector(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avtextstylerule/1387970-propertylistfortextstylerules
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
   * doc://com.apple.documentation/documentation/avfoundation/avmediaselection
   */
  interface AVMediaSelection extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselection/1389197-selectedmediaoptioninmediaselect
    selectedMediaOptionInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselection/1386716-mediaselectioncriteriacanbeappli
    mediaSelectionCriteriaCanBeAppliedAutomaticallyToMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmediaselection/1390874-asset
    asset(): AVAsset;
    setAsset(): void;
    //
    alloc():AVMediaSelection;
    //
    init():AVMediaSelection;
  }
}

declare const AVMediaSelection: cocoascript.AVMediaSelection;
declare namespace cocoascript {
  /**
   * An object used to model the timing and presentation state of an asset played by the player.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritem
   */
  interface AVPlayerItem extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387558-initwithurl
    initWithURL(URL: NSURL):AVPlayerItem;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1588089-playeritemwithurl
    playerItemWithURL(URL: NSURL):AVPlayerItem;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1390707-initwithasset
    initWithAsset(asset: AVAsset):AVPlayerItem;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1588087-playeritemwithasset
    playerItemWithAsset(asset: AVAsset):AVPlayerItem;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387529-initwithasset
    initWithAsset_automaticallyLoadedAssetKeys(asset: AVAsset, automaticallyLoadedAssetKeys: string | cocoascript.NSString):AVPlayerItem;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1588088-playeritemwithasset
    playerItemWithAsset_automaticallyLoadedAssetKeys(asset: AVAsset, automaticallyLoadedAssetKeys: string | cocoascript.NSString):AVPlayerItem;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388177-asset
    asset(): AVAsset;
    setAsset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386361-tracks
    tracks(): AVPlayerItemTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389602-timedmetadata
    timedMetadata(): AVMetadataItem;
    setTimedMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388633-automaticallyloadedassetkeys
    automaticallyLoadedAssetKeys(): string | cocoascript.NSString;
    setAutomaticallyLoadedAssetKeys(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389493-status
    status(): AVPlayerItemStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389185-error
    error(): NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1385591-canplayreverse
    canPlayReverse(): BOOL;
    setCanPlayReverse(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389096-canplayfastforward
    canPlayFastForward(): BOOL;
    setCanPlayFastForward(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1390493-canplayfastreverse
    canPlayFastReverse(): BOOL;
    setCanPlayFastReverse(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388078-canplayslowforward
    canPlaySlowForward(): BOOL;
    setCanPlaySlowForward(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1390598-canplayslowreverse
    canPlaySlowReverse(): BOOL;
    setCanPlaySlowReverse(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3579514-startsonfirsteligiblevariant
    startsOnFirstEligibleVariant(): BOOL;
    setStartsOnFirstEligibleVariant(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1385622-forwardplaybackendtime
    forwardPlaybackEndTime(): CMTime;
    setForwardPlaybackEndTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388438-reverseplaybackendtime
    reversePlaybackEndTime(): CMTime;
    setReversePlaybackEndTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389656-canstepforward
    canStepForward(): BOOL;
    setCanStepForward(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386796-canstepbackward
    canStepBackward(): BOOL;
    setCanStepBackward(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387968-stepbycount
    stepByCount(stepCount: NSInteger):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387418-seektotime
    seekToTime_completionHandler(time: CMTime, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387753-seektotime
    seekToTime_toleranceBefore_toleranceAfter_completionHandler(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389877-seektodate
    seekToDate_completionHandler(date: NSDate, completionHandler: BOOL):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388316-cancelpendingseeks
    cancelPendingSeeks():void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1390153-seektotime
    seekToTime(time: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1385620-seektotime
    seekToTime_toleranceBefore_toleranceAfter(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389067-seektodate
    seekToDate(date: NSDate):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387230-currenttime
    currentTime():CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386188-currentdate
    currentDate():NSDate;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389386-duration
    duration(): CMTime;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387605-timebase
    timebase(): CMTimebaseRef;
    setTimebase(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389953-loadedtimeranges
    loadedTimeRanges(): NSValue;
    setLoadedTimeRanges(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386155-seekabletimeranges
    seekableTimeRanges(): NSValue;
    setSeekableTimeRanges(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1390348-playbacklikelytokeepup
    playbackLikelyToKeepUp(): BOOL;
    setPlaybackLikelyToKeepUp(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388852-playbackbufferfull
    playbackBufferFull(): BOOL;
    setPlaybackBufferFull(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386960-playbackbufferempty
    playbackBufferEmpty(): BOOL;
    setPlaybackBufferEmpty(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386519-currentmediaselection
    currentMediaSelection(): AVMediaSelection;
    setCurrentMediaSelection(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389610-selectmediaoption
    selectMediaOption_inMediaSelectionGroup(mediaSelectionOption: AVMediaSelectionOption, mediaSelectionGroup: AVMediaSelectionGroup):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388268-selectmediaoptionautomaticallyin
    selectMediaOptionAutomaticallyInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386314-selectedmediaoptioninmediaselect
    selectedMediaOptionInMediaSelectionGroup(mediaSelectionGroup: AVMediaSelectionGroup):AVMediaSelectionOption;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389681-textstylerules
    textStyleRules(): AVTextStyleRule;
    setTextStyleRules(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388499-accesslog
    accessLog():AVPlayerItemAccessLog;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387573-errorlog
    errorLog():AVPlayerItemErrorLog;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3229855-automaticallypreservestimeoffset
    automaticallyPreservesTimeOffsetFromLive(): BOOL;
    setAutomaticallyPreservesTimeOffsetFromLive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3227882-configuredtimeoffsetfromlive
    configuredTimeOffsetFromLive(): CMTime;
    setConfiguredTimeOffsetFromLive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3227883-recommendedtimeoffsetfromlive
    recommendedTimeOffsetFromLive(): CMTime;
    setRecommendedTimeOffsetFromLive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388962-presentationsize
    presentationSize(): CGSize;
    setPresentationSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/2867324-preferredmaximumresolution
    preferredMaximumResolution(): CGSize;
    setPreferredMaximumResolution(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/2868499-videoaperturemode
    videoApertureMode(): AVVideoApertureMode;
    setVideoApertureMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3656127-appliesperframehdrdisplaymetadat
    appliesPerFrameHDRDisplayMetadata(): BOOL;
    setAppliesPerFrameHDRDisplayMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388818-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1390669-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1385726-seekingwaitsforvideocompositionr
    seekingWaitsForVideoCompositionRendering(): BOOL;
    setSeekingWaitsForVideoCompositionRendering(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388037-audiomix
    audioMix(): AVAudioMix;
    setAudioMix(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1385855-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389090-outputs
    outputs(): AVPlayerItemOutput;
    setOutputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389782-addoutput
    addOutput(output: AVPlayerItemOutput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388756-removeoutput
    removeOutput(output: AVPlayerItemOutput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1624161-mediadatacollectors
    mediaDataCollectors(): AVPlayerItemMediaDataCollector;
    setMediaDataCollectors(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1624164-addmediadatacollector
    addMediaDataCollector(collector: AVPlayerItemMediaDataCollector):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1624163-removemediadatacollector
    removeMediaDataCollector(collector: AVPlayerItemMediaDataCollector):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388541-preferredpeakbitrate
    preferredPeakBitRate(): number;
    setPreferredPeakBitRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1643630-preferredforwardbufferduration
    preferredForwardBufferDuration(): NSTimeInterval;
    setPreferredForwardBufferDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388752-canusenetworkresourcesforlivestr
    canUseNetworkResourcesForLiveStreamingWhilePaused(): BOOL;
    setCanUseNetworkResourcesForLiveStreamingWhilePaused(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1627623-externalmetadata
    externalMetadata(): AVMetadataItem;
    setExternalMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1627626-navigationmarkergroups
    navigationMarkerGroups(): AVNavigationMarkersGroup;
    setNavigationMarkerGroups(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1627628-interstitialtimeranges
    interstitialTimeRanges(): AVInterstitialTimeRange;
    setInterstitialTimeRanges(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1650942-nextcontentproposal
    nextContentProposal(): AVContentProposal;
    setNextContentProposal(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3152863-requestplaybackrestrictionsautho
    requestPlaybackRestrictionsAuthorization(completion: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3152862-cancelplaybackrestrictionsauthor
    cancelPlaybackRestrictionsAuthorizationRequest():void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1388458-contentauthorizedforplayback
    contentAuthorizedForPlayback(): BOOL;
    setContentAuthorizedForPlayback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1386106-authorizationrequiredforplayback
    authorizationRequiredForPlayback(): BOOL;
    setAuthorizationRequiredForPlayback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389929-applicationauthorizedforplayback
    applicationAuthorizedForPlayback(): BOOL;
    setApplicationAuthorizedForPlayback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1390600-requestcontentauthorizationasync
    requestContentAuthorizationAsynchronouslyWithTimeoutInterval_completionHandler(timeoutInterval: NSTimeInterval, handler: void):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1389746-contentauthorizationrequeststatu
    contentAuthorizationRequestStatus(): AVContentAuthorizationStatus;
    setContentAuthorizationRequestStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1387726-cancelcontentauthorizationreques
    cancelContentAuthorizationRequest():void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1627766-externalsubtitleoptionlanguages
    externalSubtitleOptionLanguages(): string | cocoascript.NSString;
    setExternalSubtitleOptionLanguages(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/1627765-selectedexternalsubtitleoptionla
    selectedExternalSubtitleOptionLanguage(): string | cocoascript.NSString;
    setSelectedExternalSubtitleOptionLanguage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3601108-allowedaudiospatializationformat
    allowedAudioSpatializationFormats(): AVAudioSpatializationFormats;
    setAllowedAudioSpatializationFormats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3237174-audiospatializationallowed
    audioSpatializationAllowed(): BOOL;
    setAudioSpatializationAllowed(): void;
    //
    alloc():AVPlayerItem;
    //
    init():AVPlayerItem;
  }
}

declare const AVPlayerItem: cocoascript.AVPlayerItem;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemdidplaytoendtimenotification
declare const AVPlayerItemDidPlayToEndTimeNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemfailedtoplaytoendtimenotification
declare const AVPlayerItemFailedToPlayToEndTimeNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemtimejumpednotification
declare const AVPlayerItemTimeJumpedNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemplaybackstallednotification
declare const AVPlayerItemPlaybackStalledNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemnewaccesslogentrynotification
declare const AVPlayerItemNewAccessLogEntryNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemnewerrorlogentrynotification
declare const AVPlayerItemNewErrorLogEntryNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A single entry in a player item's access log.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent
   */
  interface AVPlayerItemAccessLogEvent extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388643-uri
    URI(): string | cocoascript.NSString;
    setURI(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1390315-serveraddress
    serverAddress(): string | cocoascript.NSString;
    setServerAddress(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388076-numberofserveraddresschanges
    numberOfServerAddressChanges(): NSInteger;
    setNumberOfServerAddressChanges(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388549-mediarequestswwan
    mediaRequestsWWAN(): NSInteger;
    setMediaRequestsWWAN(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1387370-transferduration
    transferDuration(): NSTimeInterval;
    setTransferDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1387305-numberofbytestransferred
    numberOfBytesTransferred(): number;
    setNumberOfBytesTransferred(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388357-numberofmediarequests
    numberOfMediaRequests(): NSInteger;
    setNumberOfMediaRequests(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1390502-playbackstartdate
    playbackStartDate(): NSDate;
    setPlaybackStartDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388462-playbacksessionid
    playbackSessionID(): string | cocoascript.NSString;
    setPlaybackSessionID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1385922-playbackstartoffset
    playbackStartOffset(): NSTimeInterval;
    setPlaybackStartOffset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1387218-playbacktype
    playbackType(): string | cocoascript.NSString;
    setPlaybackType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1389138-startuptime
    startupTime(): NSTimeInterval;
    setStartupTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388200-durationwatched
    durationWatched(): NSTimeInterval;
    setDurationWatched(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388647-numberofdroppedvideoframes
    numberOfDroppedVideoFrames(): NSInteger;
    setNumberOfDroppedVideoFrames(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1387712-numberofstalls
    numberOfStalls(): NSInteger;
    setNumberOfStalls(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1588090-numberofsegmentsdownloaded
    numberOfSegmentsDownloaded(): NSInteger;
    setNumberOfSegmentsDownloaded(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388147-segmentsdownloadedduration
    segmentsDownloadedDuration(): NSTimeInterval;
    setSegmentsDownloadedDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1389213-downloadoverdue
    downloadOverdue(): NSInteger;
    setDownloadOverdue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1386094-observedbitratestandarddeviation
    observedBitrateStandardDeviation(): number;
    setObservedBitrateStandardDeviation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1386714-observedmaxbitrate
    observedMaxBitrate(): number;
    setObservedMaxBitrate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1390173-observedminbitrate
    observedMinBitrate(): number;
    setObservedMinBitrate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1390645-switchbitrate
    switchBitrate(): number;
    setSwitchBitrate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1388123-indicatedbitrate
    indicatedBitrate(): number;
    setIndicatedBitrate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1390804-observedbitrate
    observedBitrate(): number;
    setObservedBitrate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1643590-averageaudiobitrate
    averageAudioBitrate(): number;
    setAverageAudioBitrate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1643592-averagevideobitrate
    averageVideoBitrate(): number;
    setAverageVideoBitrate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslogevent/1872546-indicatedaveragebitrate
    indicatedAverageBitrate(): number;
    setIndicatedAverageBitrate(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslog
   */
  interface AVPlayerItemAccessLog extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslog/1387406-events
    events(): AVPlayerItemAccessLogEvent;
    setEvents(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslog/1386892-extendedlogdata
    extendedLogData():NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemaccesslog/1390863-extendedlogdatastringencoding
    extendedLogDataStringEncoding(): NSStringEncoding;
    setExtendedLogDataStringEncoding(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent
   */
  interface AVPlayerItemErrorLogEvent extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent/1388416-date
    date(): NSDate;
    setDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent/1389302-uri
    URI(): string | cocoascript.NSString;
    setURI(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent/1385797-serveraddress
    serverAddress(): string | cocoascript.NSString;
    setServerAddress(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent/1385934-playbacksessionid
    playbackSessionID(): string | cocoascript.NSString;
    setPlaybackSessionID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent/1387875-errorstatuscode
    errorStatusCode(): NSInteger;
    setErrorStatusCode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent/1388603-errordomain
    errorDomain(): string | cocoascript.NSString;
    setErrorDomain(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlogevent/1388011-errorcomment
    errorComment(): string | cocoascript.NSString;
    setErrorComment(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlog
   */
  interface AVPlayerItemErrorLog extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlog/1387637-events
    events(): AVPlayerItemErrorLogEvent;
    setEvents(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlog/1389100-extendedlogdata
    extendedLogData():NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemerrorlog/1387271-extendedlogdatastringencoding
    extendedLogDataStringEncoding(): NSStringEncoding;
    setExtendedLogDataStringEncoding(): void;
    //
    alloc():AVPlayerItemErrorLog;
    //
    init():AVPlayerItemErrorLog;
  }
}

declare const AVPlayerItemErrorLog: cocoascript.AVPlayerItemErrorLog;
declare namespace cocoascript {
  /**
   * An object that encapsulates the text for speech synthesis and parameters that affect the speech.
   * doc://com.apple.documentation/documentation/avfoundation/avspeechutterance
   */
  interface AVSpeechUtterance extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619684-initwithstring
    initWithString(string: string | cocoascript.NSString):AVSpeechUtterance;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619668-speechutterancewithstring
    speechUtteranceWithString(string: string | cocoascript.NSString):AVSpeechUtterance;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1648776-initwithattributedstring
    initWithAttributedString(string: NSAttributedString):AVSpeechUtterance;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1649801-speechutterancewithattributedstr
    speechUtteranceWithAttributedString(string: NSAttributedString):AVSpeechUtterance;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619710-voice
    voice(): AVSpeechSynthesisVoice;
    setVoice(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619683-pitchmultiplier
    pitchMultiplier(): number;
    setPitchMultiplier(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619687-volume
    volume(): number;
    setVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/3546568-prefersassistivetechnologysettin
    prefersAssistiveTechnologySettings(): BOOL;
    setPrefersAssistiveTechnologySettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619708-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619679-preutterancedelay
    preUtteranceDelay(): NSTimeInterval;
    setPreUtteranceDelay(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619694-postutterancedelay
    postUtteranceDelay(): NSTimeInterval;
    setPostUtteranceDelay(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1619702-speechstring
    speechString(): string | cocoascript.NSString;
    setSpeechString(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechutterance/1648723-attributedspeechstring
    attributedSpeechString(): NSAttributedString;
    setAttributedSpeechString(): void;
    //
    alloc():AVSpeechUtterance;
    //
    init():AVSpeechUtterance;
  }
}

declare const AVSpeechUtterance: cocoascript.AVSpeechUtterance;
// doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisipanotationattribute
declare const AVSpeechSynthesisIPANotationAttribute: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A specification of the features and settings to use for a single photo capture request.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings
   */
  interface AVCapturePhotoSettings extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1649254-photosettings
    photoSettings():AVCapturePhotoSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648673-photosettingswithformat
    photoSettingsWithFormat(format: AVCapturePhotoSettings):AVCapturePhotoSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648662-photosettingswithrawpixelformatt
    photoSettingsWithRawPixelFormatType(rawPixelFormatType: any):AVCapturePhotoSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648700-photosettingswithrawpixelformatt
    photoSettingsWithRawPixelFormatType_processedFormat(rawPixelFormatType: any, processedFormat: AVCapturePhotoSettings):AVCapturePhotoSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2873920-photosettingswithrawpixelformatt
    photoSettingsWithRawPixelFormatType_rawFileType_processedFormat_processedFileType(rawPixelFormatType: any, rawFileType: AVFileType, processedFormat: AVCapturePhotoSettings, processedFileType: AVFileType):AVCapturePhotoSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648783-format
    format(): id;
    setFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2873970-processedfiletype
    processedFileType(): AVFileType;
    setProcessedFileType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2873895-rawfiletype
    rawFileType(): AVFileType;
    setRawFileType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648768-rawphotopixelformattype
    rawPhotoPixelFormatType(): any;
    setRawPhotoPixelFormatType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1778655-photosettingsfromphotosettings
    photoSettingsFromPhotoSettings(photoSettings: AVCapturePhotoSettings):AVCapturePhotoSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648767-uniqueid
    uniqueID(): number;
    setUniqueID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648696-previewphotoformat
    previewPhotoFormat(): id;
    setPreviewPhotoFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1778629-availablepreviewphotopixelformat
    availablePreviewPhotoPixelFormatTypes(): NSNumber;
    setAvailablePreviewPhotoPixelFormatTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2873905-embeddedthumbnailphotoformat
    embeddedThumbnailPhotoFormat(): id;
    setEmbeddedThumbnailPhotoFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3019549-availablerawembeddedthumbnailpho
    availableRawEmbeddedThumbnailPhotoCodecTypes(): AVVideoCodecType;
    setAvailableRawEmbeddedThumbnailPhotoCodecTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3019550-rawembeddedthumbnailphotoformat
    rawEmbeddedThumbnailPhotoFormat(): id;
    setRawEmbeddedThumbnailPhotoFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2873907-availableembeddedthumbnailphotoc
    availableEmbeddedThumbnailPhotoCodecTypes(): AVVideoCodecType;
    setAvailableEmbeddedThumbnailPhotoCodecTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648760-flashmode
    flashMode(): AVCaptureFlashMode;
    setFlashMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3183000-photoqualityprioritization
    photoQualityPrioritization(): AVCapturePhotoQualityPrioritization;
    setPhotoQualityPrioritization(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2968220-autoredeyereductionenabled
    autoRedEyeReductionEnabled(): BOOL;
    setAutoRedEyeReductionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648666-highresolutionphotoenabled
    highResolutionPhotoEnabled(): BOOL;
    setHighResolutionPhotoEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2890247-cameracalibrationdatadeliveryena
    cameraCalibrationDataDeliveryEnabled(): BOOL;
    setCameraCalibrationDataDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3566332-autocontentawaredistortioncorrec
    autoContentAwareDistortionCorrectionEnabled(): BOOL;
    setAutoContentAwareDistortionCorrectionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3192192-autovirtualdevicefusionenabled
    autoVirtualDeviceFusionEnabled(): BOOL;
    setAutoVirtualDeviceFusionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3192193-virtualdeviceconstituentphotodel
    virtualDeviceConstituentPhotoDeliveryEnabledDevices(): AVCaptureDevice;
    setVirtualDeviceConstituentPhotoDeliveryEnabledDevices(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648710-autostillimagestabilizationenabl
    autoStillImageStabilizationEnabled(): BOOL;
    setAutoStillImageStabilizationEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2726862-autodualcamerafusionenabled
    autoDualCameraFusionEnabled(): BOOL;
    setAutoDualCameraFusionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2873917-dualcameradualphotodeliveryenabl
    dualCameraDualPhotoDeliveryEnabled(): BOOL;
    setDualCameraDualPhotoDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648681-livephotomoviefileurl
    livePhotoMovieFileURL(): NSURL;
    setLivePhotoMovieFileURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/1648731-livephotomoviemetadata
    livePhotoMovieMetadata(): AVMetadataItem;
    setLivePhotoMovieMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2866564-livephotovideocodectype
    livePhotoVideoCodecType(): AVVideoCodecType;
    setLivePhotoVideoCodecType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2866562-depthdatadeliveryenabled
    depthDataDeliveryEnabled(): BOOL;
    setDepthDataDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2873915-embedsdepthdatainphoto
    embedsDepthDataInPhoto(): BOOL;
    setEmbedsDepthDataInPhoto(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2881293-depthdatafiltered
    depthDataFiltered(): BOOL;
    setDepthDataFiltered(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2977532-portraiteffectsmattedeliveryenab
    portraitEffectsMatteDeliveryEnabled(): BOOL;
    setPortraitEffectsMatteDeliveryEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2977531-embedsportraiteffectsmatteinphot
    embedsPortraitEffectsMatteInPhoto(): BOOL;
    setEmbedsPortraitEffectsMatteInPhoto(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3153013-embedssemanticsegmentationmattes
    embedsSemanticSegmentationMattesInPhoto(): BOOL;
    setEmbedsSemanticSegmentationMattesInPhoto(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/3153014-enabledsemanticsegmentationmatte
    enabledSemanticSegmentationMatteTypes(): AVSemanticSegmentationMatteType;
    setEnabledSemanticSegmentationMatteTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotosettings/2875951-metadata
    metadata(): id;
    setMetadata(): void;
    //
    alloc():AVCapturePhotoSettings;
    //
    init():AVCapturePhotoSettings;
  }
}

declare const AVCapturePhotoSettings: cocoascript.AVCapturePhotoSettings;
declare namespace cocoascript {
  /**
   * A set of properties that defines a policy to automatically purge downloaded assets.
   * doc://com.apple.documentation/documentation/avfoundation/avassetdownloadstoragemanagementpolicy
   */
  interface AVAssetDownloadStorageManagementPolicy extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadstoragemanagementpolicy/2865559-expirationdate
    expirationDate(): NSDate;
    setExpirationDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadstoragemanagementpolicy/2865565-priority
    priority(): AVAssetDownloadedAssetEvictionPriority;
    setPriority(): void;
    //
    alloc():AVAssetDownloadStorageManagementPolicy;
    //
    init():AVAssetDownloadStorageManagementPolicy;
  }
}

declare const AVAssetDownloadStorageManagementPolicy: cocoascript.AVAssetDownloadStorageManagementPolicy;
declare namespace cocoascript {
  /**
   * An object that provides information about the media sample at the cursor’s current position.
   * doc://com.apple.documentation/documentation/avfoundation/avsamplecursor
   */
  interface AVSampleCursor extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1389152-stepbydecodetime
    stepByDecodeTime_wasPinned(deltaDecodeTime: CMTime, outWasPinned: BOOL):CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1387680-stepbypresentationtime
    stepByPresentationTime_wasPinned(deltaPresentationTime: CMTime, outWasPinned: BOOL):CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1389606-stepindecodeorderbycount
    stepInDecodeOrderByCount(stepCount: number):number;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1388834-stepinpresentationorderbycount
    stepInPresentationOrderByCount(stepCount: number):number;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1388412-decodetimestamp
    decodeTimeStamp(): CMTime;
    setDecodeTimeStamp(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1389740-presentationtimestamp
    presentationTimeStamp(): CMTime;
    setPresentationTimeStamp(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1387481-currentchunkinfo
    currentChunkInfo(): AVSampleCursorChunkInfo;
    setCurrentChunkInfo(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1390385-currentchunkstoragerange
    currentChunkStorageRange(): AVSampleCursorStorageRange;
    setCurrentChunkStorageRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1388328-currentchunkstorageurl
    currentChunkStorageURL(): NSURL;
    setCurrentChunkStorageURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1390766-currentsampledependencyinfo
    currentSampleDependencyInfo(): AVSampleCursorDependencyInfo;
    setCurrentSampleDependencyInfo(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1389833-currentsampleduration
    currentSampleDuration(): CMTime;
    setCurrentSampleDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1387806-currentsampleindexinchunk
    currentSampleIndexInChunk(): number;
    setCurrentSampleIndexInChunk(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1386359-currentsamplestoragerange
    currentSampleStorageRange(): AVSampleCursorStorageRange;
    setCurrentSampleStorageRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1390776-currentsamplesyncinfo
    currentSampleSyncInfo(): AVSampleCursorSyncInfo;
    setCurrentSampleSyncInfo(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1390703-copycurrentsampleformatdescripti
    copyCurrentSampleFormatDescription():CMFormatDescriptionRef;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/3131266-currentsampleaudiodependencyinfo
    currentSampleAudioDependencyInfo(): AVSampleCursorAudioDependencyInfo;
    setCurrentSampleAudioDependencyInfo(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1386558-sampleswithearlierdecodetimestam
    samplesWithEarlierDecodeTimeStampsMayHaveLaterPresentationTimeStampsThanCursor(cursor: AVSampleCursor):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1390029-sampleswithlaterdecodetimestamps
    samplesWithLaterDecodeTimeStampsMayHaveEarlierPresentationTimeStampsThanCursor(cursor: AVSampleCursor):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1386446-samplesrequiredfordecoderrefresh
    samplesRequiredForDecoderRefresh(): NSInteger;
    setSamplesRequiredForDecoderRefresh(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplecursor/1390608-comparepositionindecodeorderwith
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
   * An object that contains properties defining the display criteria for a media asset.
   * doc://com.apple.documentation/documentation/avfoundation/avdisplaycriteria
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
   * The roles of a set of audio channels.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout
   */
  interface AVAudioChannelLayout extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1397770-layoutwithlayout
    layoutWithLayout(layout: AudioChannelLayout):AVAudioChannelLayout;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1387623-initwithlayout
    initWithLayout(layout: AudioChannelLayout):AVAudioChannelLayout;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1397765-layoutwithlayouttag
    layoutWithLayoutTag(layoutTag: AudioChannelLayoutTag):AVAudioChannelLayout;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1388320-initwithlayouttag
    initWithLayoutTag(layoutTag: AudioChannelLayoutTag):AVAudioChannelLayout;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1390526-channelcount
    channelCount(): AVAudioChannelCount;
    setChannelCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1385786-layout
    layout(): AudioChannelLayout;
    setLayout(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1388519-layouttag
    layoutTag(): AudioChannelLayoutTag;
    setLayoutTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiochannellayout/1389677-isequal
    isEqual(object: AVAudioChannelLayout):BOOL;
    //
    alloc():AVAudioChannelLayout;
    //
    init():AVAudioChannelLayout;
  }
}

declare const AVAudioChannelLayout: cocoascript.AVAudioChannelLayout;
declare namespace cocoascript {
  /**
   * A class that represents a buffer of audio data with a format.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioformat
   */
  interface AVAudioFormat extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1388426-initstandardformatwithsamplerate
    initStandardFormatWithSampleRate_channelLayout(sampleRate: number, layout: AVAudioChannelLayout):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1390416-initstandardformatwithsamplerate
    initStandardFormatWithSampleRate_channels(sampleRate: number, channels: AVAudioChannelCount):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1390591-initwithcommonformat
    initWithCommonFormat_sampleRate_channels_interleaved(format: AVAudioCommonFormat, sampleRate: number, channels: AVAudioChannelCount, interleaved: BOOL):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1389361-initwithcommonformat
    initWithCommonFormat_sampleRate_interleaved_channelLayout(format: AVAudioCommonFormat, sampleRate: number, interleaved: BOOL, layout: AVAudioChannelLayout):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1387931-initwithsettings
    initWithSettings(settings: AVAudioFormat):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1390106-initwithstreamdescription
    initWithStreamDescription(asbd: AudioStreamBasicDescription):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1389347-initwithstreamdescription
    initWithStreamDescription_channelLayout(asbd: AudioStreamBasicDescription, layout: AVAudioChannelLayout):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1387465-initwithcmaudioformatdescription
    initWithCMAudioFormatDescription(formatDescription: CMAudioFormatDescriptionRef):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1386843-streamdescription
    streamDescription(): AudioStreamBasicDescription;
    setStreamDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1385683-isequal
    isEqual(object: AVAudioFormat):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1386831-channelcount
    channelCount(): AVAudioChannelCount;
    setChannelCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1390671-channellayout
    channelLayout(): AVAudioChannelLayout;
    setChannelLayout(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1387814-samplerate
    sampleRate(): number;
    setSampleRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1387467-formatdescription
    formatDescription(): CMAudioFormatDescriptionRef;
    setFormatDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1387347-standard
    standard(): BOOL;
    setStandard(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1389340-interleaved
    interleaved(): BOOL;
    setInterleaved(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1389455-commonformat
    commonFormat(): AVAudioCommonFormat;
    setCommonFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1386904-settings
    settings(): id;
    setSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioformat/1639892-magiccookie
    magicCookie(): NSData;
    setMagicCookie(): void;
    //
    alloc():AVAudioFormat;
    //
    init():AVAudioFormat;
  }
}

declare const AVAudioFormat: cocoascript.AVAudioFormat;
declare namespace cocoascript {
  /**
   * A distinct voice for use in speech synthesis.
   * doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice
   */
  interface AVSpeechSynthesisVoice extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619711-voicewithidentifier
    voiceWithIdentifier(identifier: string | cocoascript.NSString):AVSpeechSynthesisVoice;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619699-voicewithlanguage
    voiceWithLanguage(languageCode: string | cocoascript.NSString):AVSpeechSynthesisVoice;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619697-speechvoices
    speechVoices():AVSpeechSynthesisVoice;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619670-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619669-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619688-quality
    quality(): AVSpeechSynthesisVoiceQuality;
    setQuality(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/3081643-gender
    gender(): AVSpeechSynthesisVoiceGender;
    setGender(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/3141658-audiofilesettings
    audioFileSettings(): id;
    setAudioFileSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619707-currentlanguagecode
    currentLanguageCode():NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoice/1619698-language
    language(): string | cocoascript.NSString;
    setLanguage(): void;
    //
    alloc():AVSpeechSynthesisVoice;
    //
    init():AVSpeechSynthesisVoice;
  }
}

declare const AVSpeechSynthesisVoice: cocoascript.AVSpeechSynthesisVoice;
// doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoiceidentifieralex
declare const AVSpeechSynthesisVoiceIdentifierAlex: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that specifies an original format description together with its replacement format description.
   * doc://com.apple.documentation/documentation/avfoundation/avcompositiontrackformatdescriptionreplacement
   */
  interface AVCompositionTrackFormatDescriptionReplacement extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontrackformatdescriptionreplacement/3180002-originalformatdescription
    originalFormatDescription(): CMFormatDescriptionRef;
    setOriginalFormatDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontrackformatdescriptionreplacement/3180003-replacementformatdescription
    replacementFormatDescription(): CMFormatDescriptionRef;
    setReplacementFormatDescription(): void;
    //
    alloc():AVCompositionTrackFormatDescriptionReplacement;
    //
    init():AVCompositionTrackFormatDescriptionReplacement;
  }
}

declare const AVCompositionTrackFormatDescriptionReplacement: cocoascript.AVCompositionTrackFormatDescriptionReplacement;
declare namespace cocoascript {
  /**
   * An asset subclass used to initialize an asset from a local or remote URL.
   * doc://com.apple.documentation/documentation/avfoundation/avurlasset
   */
  interface AVURLAsset extends AVAsset {
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1385698-initwithurl
    initWithURL_options(URL: NSURL, options: AVURLAsset):AVURLAsset;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1508727-urlassetwithurl
    URLAssetWithURL_options(URL: NSURL, options: AVURLAsset):AVURLAsset;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1388127-url
    URL(): NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1389650-compatibletrackforcompositiontra
    compatibleTrackForCompositionTrack(compositionTrack: AVCompositionTrack):AVAssetTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1386800-audiovisualtypes
    audiovisualTypes():AVFileType;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1390006-audiovisualmimetypes
    audiovisualMIMETypes():NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1387142-isplayableextendedmimetype
    isPlayableExtendedMIMEType(extendedMIMEType: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1389118-resourceloader
    resourceLoader(): AVAssetResourceLoader;
    setResourceLoader(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/2806807-mayrequirecontentkeysformediadat
    mayRequireContentKeysForMediaDataProcessing(): BOOL;
    setMayRequireContentKeysForMediaDataProcessing(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avurlasset/1823714-assetcache
    assetCache(): AVAssetCache;
    setAssetCache(): void;
    //
    alloc():AVURLAsset;
    //
    init():AVURLAsset;
  }
}

declare const AVURLAsset: cocoascript.AVURLAsset;
declare namespace cocoascript {
  /**
   * A protocol you use to load an asset’s or asset track’s media and metadata without blocking the calling thread.
   * doc://com.apple.documentation/documentation/avfoundation/avasynchronouskeyvalueloading
   */
  interface AVAsynchronousKeyValueLoading {
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronouskeyvalueloading/1386816-statusofvalueforkey
    statusOfValueForKey_error(key: string | cocoascript.NSString, outError: NSError):AVKeyValueStatus;
    // doc://com.apple.documentation/documentation/avfoundation/avasynchronouskeyvalueloading/1387321-loadvaluesasynchronouslyforkeys
    loadValuesAsynchronouslyForKeys_completionHandler(keys: string | cocoascript.NSString, handler: void):void;
  }
}
declare namespace cocoascript {
  /**
   * An asset whose duration the system can extend without modifying its existing media data.
   * doc://com.apple.documentation/documentation/avfoundation/avfragmentedasset
   */
  interface AVFragmentedAsset extends AVURLAsset {
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedasset/1508700-fragmentedassetwithurl
    fragmentedAssetWithURL_options(URL: NSURL, options: AVFragmentedAsset):AVFragmentedAsset;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedasset/1387937-tracks
    tracks(): AVFragmentedAssetTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedasset/1385712-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVFragmentedAssetTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedasset/1387253-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVFragmentedAssetTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedasset/1387259-trackswithmediacharacteristic
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
   * doc://com.apple.documentation/documentation/avfoundation/avfragmentedassettrack
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
   * An object that periodically checks whether the system added new fragments to a fragmented asset.
   * doc://com.apple.documentation/documentation/avfoundation/avfragmentedassetminder
   */
  interface AVFragmentedAssetMinder extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedassetminder/2966508-initwithasset
    initWithAsset_mindingInterval(asset: AVFragmentMinding, mindingInterval: NSTimeInterval):AVFragmentedAssetMinder;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedassetminder/1387182-fragmentedassetminderwithasset
    fragmentedAssetMinderWithAsset_mindingInterval(asset: AVFragmentMinding, mindingInterval: NSTimeInterval):AVFragmentedAssetMinder;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedassetminder/1390760-mindinginterval
    mindingInterval(): NSTimeInterval;
    setMindingInterval(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedassetminder/1390319-assets
    assets(): AVFragmentMinding;
    setAssets(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedassetminder/1387483-addfragmentedasset
    addFragmentedAsset(asset: AVFragmentMinding):void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedassetminder/1389856-removefragmentedasset
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
   * doc://com.apple.documentation/documentation/avfoundation/avfragmentminding
   */
  interface AVFragmentMinding {
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentminding/1390175-associatedwithfragmentminder
    associatedWithFragmentMinder(): BOOL;
    setAssociatedWithFragmentMinder(): void;
  }
}
declare namespace cocoascript {
  /**
   * A mutable metadata item associated with an audiovisual asset or with one of its tracks.
   * doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem
   */
  interface AVMutableMetadataItem extends AVMetadataItem {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1426379-metadataitem
    metadataItem():AVMutableMetadataItem;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1386776-key
    key(): NSCopying;
    setKey(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1385655-keyspace
    keySpace(): AVMetadataKeySpace;
    setKeySpace(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1388296-value
    value(): NSCopying;
    setValue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1389292-locale
    locale(): NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1389990-time
    time(): CMTime;
    setTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1389980-duration
    duration(): CMTime;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1390397-extraattributes
    extraAttributes(): id;
    setExtraAttributes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1389471-datatype
    dataType(): string | cocoascript.NSString;
    setDataType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1386664-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1386688-identifier
    identifier(): AVMetadataIdentifier;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemetadataitem/1389966-startdate
    startDate(): NSDate;
    setStartDate(): void;
    //
    alloc():AVMutableMetadataItem;
    //
    init():AVMutableMetadataItem;
  }
}

declare const AVMutableMetadataItem: cocoascript.AVMutableMetadataItem;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmetadataformat
  type AVMetadataFormat = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that filters selected information from a metadata item.
   * doc://com.apple.documentation/documentation/avfoundation/avmetadataitemfilter
   */
  interface AVMetadataItemFilter extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitemfilter/1387905-metadataitemfilterforsharing
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
   * An object used to respond to a request to load the value of a metadata item.
   * doc://com.apple.documentation/documentation/avfoundation/avmetadataitemvaluerequest
   */
  interface AVMetadataItemValueRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitemvaluerequest/1386820-respondwithvalue
    respondWithValue(value: NSCopying):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitemvaluerequest/1390783-respondwitherror
    respondWithError(error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadataitemvaluerequest/1388069-metadataitem
    metadataItem(): AVMetadataItem;
    setMetadataItem(): void;
    //
    alloc():AVMetadataItemValueRequest;
    //
    init():AVMetadataItemValueRequest;
  }
}

declare const AVMetadataItemValueRequest: cocoascript.AVMetadataItemValueRequest;
declare namespace cocoascript {
  /**
   * An object that transcodes the contents of an asset source object to create an output of the form described by a specified export preset.
   * doc://com.apple.documentation/documentation/avfoundation/avassetexportsession
   */
  interface AVAssetExportSession extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1389367-initwithasset
    initWithAsset_presetName(asset: AVAsset, presetName: string | cocoascript.NSString):AVAssetExportSession;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1564246-exportsessionwithasset
    exportSessionWithAsset_presetName(asset: AVAsset, presetName: string | cocoascript.NSString):AVAssetExportSession;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1389970-outputurl
    outputURL(): NSURL;
    setOutputURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1388762-supportedfiletypes
    supportedFileTypes(): AVFileType;
    setSupportedFileTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1387110-outputfiletype
    outputFileType(): AVFileType;
    setOutputFileType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1622333-filelengthlimit
    fileLengthLimit(): number;
    setFileLengthLimit(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1388728-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1390453-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1390226-metadataitemfilter
    metadataItemFilter(): AVMetadataItemFilter;
    setMetadataItemFilter(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1388155-audiomix
    audioMix(): AVAudioMix;
    setAudioMix(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1385835-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1390593-shouldoptimizefornetworkuse
    shouldOptimizeForNetworkUse(): BOOL;
    setShouldOptimizeForNetworkUse(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1389477-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1388288-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1388797-canperformmultiplepassesoversour
    canPerformMultiplePassesOverSourceMediaData(): BOOL;
    setCanPerformMultiplePassesOverSourceMediaData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1388699-directoryfortemporaryfiles
    directoryForTemporaryFiles(): NSURL;
    setDirectoryForTemporaryFiles(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1390467-presetname
    presetName(): string | cocoascript.NSString;
    setPresetName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1387150-allexportpresets
    allExportPresets():NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1390567-exportpresetscompatiblewithasset
    exportPresetsCompatibleWithAsset(asset: AVAsset):NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1385821-determinecompatibilityofexportpr
    determineCompatibilityOfExportPreset_withAsset_outputFileType_completionHandler(presetName: string | cocoascript.NSString, asset: AVAsset, outputFileType: AVFileType, handler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1387907-determinecompatiblefiletypeswith
    determineCompatibleFileTypesWithCompletionHandler(handler: AVFileType):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1388005-exportasynchronouslywithcompleti
    exportAsynchronouslyWithCompletionHandler(handler: void):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1387794-cancelexport
    cancelExport():void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1385936-error
    error(): NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1389181-estimatedoutputfilelength
    estimatedOutputFileLength(): number;
    setEstimatedOutputFileLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1622332-maxduration
    maxDuration(): CMTime;
    setMaxDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/3042920-estimatemaximumdurationwithcompl
    estimateMaximumDurationWithCompletionHandler(handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/3042921-estimateoutputfilelengthwithcomp
    estimateOutputFileLengthWithCompletionHandler(handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1387530-progress
    progress(): number;
    setProgress(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1390528-status
    status(): AVAssetExportSessionStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetexportsession/1385690-asset
    asset(): AVAsset;
    setAsset(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator
   */
  interface AVAssetImageGenerator extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1387855-initwithasset
    initWithAsset(asset: AVAsset):AVAssetImageGenerator;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1426634-assetimagegeneratorwithasset
    assetImageGeneratorWithAsset(asset: AVAsset):AVAssetImageGenerator;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1390689-asset
    asset(): AVAsset;
    setAsset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1387560-maximumsize
    maximumSize(): CGSize;
    setMaximumSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1390616-appliespreferredtracktransform
    appliesPreferredTrackTransform(): BOOL;
    setAppliesPreferredTrackTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1390571-requestedtimetolerancebefore
    requestedTimeToleranceBefore(): CMTime;
    setRequestedTimeToleranceBefore(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1387751-requestedtimetoleranceafter
    requestedTimeToleranceAfter(): CMTime;
    setRequestedTimeToleranceAfter(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1389314-aperturemode
    apertureMode(): AVAssetImageGeneratorApertureMode;
    setApertureMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1390189-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1386469-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1387303-copycgimageattime
    copyCGImageAtTime_actualTime_error(requestedTime: CMTime, actualTime: CMTime, outError: NSError):CGImageRef;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1388100-generatecgimagesasynchronouslyfo
    generateCGImagesAsynchronouslyForTimes_completionHandler(requestedTimes: NSValue, handler: AVAssetImageGeneratorCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetimagegenerator/1385859-cancelallcgimagegeneration
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
   * doc://com.apple.documentation/documentation/avfoundation/avassetresourceloader
   */
  interface AVAssetResourceLoader extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloader/1388314-setdelegate
    setDelegate_queue(delegate: AVAssetResourceLoaderDelegate, delegateQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloader/1387913-delegate
    delegate(): AVAssetResourceLoaderDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloader/1387678-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloader/1386939-preloadseligiblecontentkeys
    preloadsEligibleContentKeys(): BOOL;
    setPreloadsEligibleContentKeys(): void;
    //
    alloc():AVAssetResourceLoader;
    //
    init():AVAssetResourceLoader;
  }
}

declare const AVAssetResourceLoader: cocoascript.AVAssetResourceLoader;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a resource request issued by a resource loader object.
   * doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest
   */
  interface AVAssetResourceLoadingRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1386220-request
    request(): NSURLRequest;
    setRequest(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/2966509-requestor
    requestor(): AVAssetResourceLoadingRequestor;
    setRequestor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1386116-streamingcontentkeyrequestdatafo
    streamingContentKeyRequestDataForApp_contentIdentifier_options_error(appIdentifier: NSData, contentIdentifier: NSData, options: AVAssetResourceLoadingRequest, outError: NSError):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1623676-persistentcontentkeyfromkeyvendo
    persistentContentKeyFromKeyVendorResponse_options_error(keyVendorResponse: NSData, options: AVAssetResourceLoadingRequest, outError: NSError):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1390340-contentinformationrequest
    contentInformationRequest(): AVAssetResourceLoadingContentInformationRequest;
    setContentInformationRequest(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1388779-datarequest
    dataRequest(): AVAssetResourceLoadingDataRequest;
    setDataRequest(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1390854-redirect
    redirect(): NSURLRequest;
    setRedirect(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1389034-response
    response(): NSURLResponse;
    setResponse(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1623677-finishloadingwithresponse
    finishLoadingWithResponse_data_redirect(response: NSURLResponse, data: NSData, redirect: NSURLRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1388359-finishloading
    finishLoading():void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1389518-cancelled
    cancelled(): BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1390491-finishloadingwitherror
    finishLoadingWithError(error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequest/1389270-finished
    finished(): BOOL;
    setFinished(): void;
    //
    alloc():AVAssetResourceLoadingRequest;
    //
    init():AVAssetResourceLoadingRequest;
  }
}

declare const AVAssetResourceLoadingRequest: cocoascript.AVAssetResourceLoadingRequest;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a resource request issued by a resource loader to renew a previously issued request.
   * doc://com.apple.documentation/documentation/avfoundation/avassetresourcerenewalrequest
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
   * An object that contains information about the originator of a loading request.
   * doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequestor
   */
  interface AVAssetResourceLoadingRequestor extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingrequestor/2966511-providesexpiredsessionreports
    providesExpiredSessionReports(): BOOL;
    setProvidesExpiredSessionReports(): void;
    //
    alloc():AVAssetResourceLoadingRequestor;
    //
    init():AVAssetResourceLoadingRequestor;
  }
}

declare const AVAssetResourceLoadingRequestor: cocoascript.AVAssetResourceLoadingRequestor;
declare namespace cocoascript {
  /**
   * An object used to request data from a resource referenced by an asset resource loading request.
   * doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingdatarequest
   */
  interface AVAssetResourceLoadingDataRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingdatarequest/1390581-respondwithdata
    respondWithData(data: NSData):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingdatarequest/1387720-requestedlength
    requestedLength(): NSInteger;
    setRequestedLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingdatarequest/1388428-requestedoffset
    requestedOffset(): number;
    setRequestedOffset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingdatarequest/1385945-currentoffset
    currentOffset(): number;
    setCurrentOffset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingdatarequest/1386864-requestsalldatatoendofresource
    requestsAllDataToEndOfResource(): BOOL;
    setRequestsAllDataToEndOfResource(): void;
    //
    alloc():AVAssetResourceLoadingDataRequest;
    //
    init():AVAssetResourceLoadingDataRequest;
  }
}

declare const AVAssetResourceLoadingDataRequest: cocoascript.AVAssetResourceLoadingDataRequest;
declare namespace cocoascript {
  /**
   * A query used to get essential information about a resource referenced by an asset resource loading request.
   * doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingcontentinformationrequest
   */
  interface AVAssetResourceLoadingContentInformationRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/2936886-allowedcontenttypes
    allowedContentTypes(): string | cocoascript.NSString;
    setAllowedContentTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1388529-contenttype
    contentType(): string | cocoascript.NSString;
    setContentType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1389390-contentlength
    contentLength(): number;
    setContentLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1386054-byterangeaccesssupported
    byteRangeAccessSupported(): BOOL;
    setByteRangeAccessSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetresourceloadingcontentinformationrequest/1390683-renewaldate
    renewalDate(): NSDate;
    setRenewalDate(): void;
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
  // doc://com.apple.documentation/documentation/avfoundation/avmediatype
  type AVMediaType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristic
  type AVMediaCharacteristic = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avfiletype
  type AVFileType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avfiletypeprofile
  type AVFileTypeProfile = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that specifies a set of parameters for configuring objects that use output settings dictionaries.
   * doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant
   */
  interface AVOutputSettingsAssistant extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1387909-outputsettingsassistantwithprese
    outputSettingsAssistantWithPreset(presetIdentifier: AVOutputSettingsPreset):AVOutputSettingsAssistant;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1388118-availableoutputsettingspresets
    availableOutputSettingsPresets():AVOutputSettingsPreset;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1390842-outputfiletype
    outputFileType(): AVFileType;
    setOutputFileType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1386233-audiosettings
    audioSettings(): id;
    setAudioSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1390673-sourceaudioformat
    sourceAudioFormat(): CMAudioFormatDescriptionRef;
    setSourceAudioFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1387414-sourcevideoaverageframeduration
    sourceVideoAverageFrameDuration(): CMTime;
    setSourceVideoAverageFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1387885-sourcevideoformat
    sourceVideoFormat(): CMVideoFormatDescriptionRef;
    setSourceVideoFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1386880-videosettings
    videoSettings(): id;
    setVideoSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingsassistant/1386812-sourcevideominframeduration
    sourceVideoMinFrameDuration(): CMTime;
    setSourceVideoMinFrameDuration(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avplayer
   */
  interface AVPlayer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1385706-initwithurl
    initWithURL(URL: NSURL):AVPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1538409-playerwithurl
    playerWithURL(URL: NSURL):AVPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387104-initwithplayeritem
    initWithPlayerItem(item: AVPlayerItem):AVPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1538390-playerwithplayeritem
    playerWithPlayerItem(item: AVPlayerItem):AVPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1388096-status
    status(): AVPlayerStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387764-error
    error(): NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387569-currentitem
    currentItem(): AVPlayerItem;
    setCurrentItem(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1390806-replacecurrentitemwithplayeritem
    replaceCurrentItemWithPlayerItem(item: AVPlayerItem):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1386726-play
    play():void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387895-pause
    pause():void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1388846-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1385953-seektotime
    seekToTime(time: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387018-seektotime
    seekToTime_completionHandler(time: CMTime, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387741-seektotime
    seekToTime_toleranceBefore_toleranceAfter(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1388493-seektotime
    seekToTime_toleranceBefore_toleranceAfter_completionHandler(time: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1386114-seektodate
    seekToDate(date: NSDate):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1386108-seektodate
    seekToDate_completionHandler(date: NSDate, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1390404-currenttime
    currentTime():CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1385829-addperiodictimeobserverforinterv
    addPeriodicTimeObserverForInterval_queue_usingBlock(interval: CMTime, queue: dispatch_queue_t, block: CMTime):AVPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1388027-addboundarytimeobserverfortimes
    addBoundaryTimeObserverForTimes_queue_usingBlock(times: NSValue, queue: dispatch_queue_t, block: void):AVPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387552-removetimeobserver
    removeTimeObserver(observer: AVPlayer):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387376-actionatitemend
    actionAtItemEnd(): AVPlayerActionAtItemEnd;
    setActionAtItemEnd(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387178-appliesmediaselectioncriteriaaut
    appliesMediaSelectionCriteriaAutomatically(): BOOL;
    setAppliesMediaSelectionCriteriaAutomatically(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387825-mediaselectioncriteriaformediach
    mediaSelectionCriteriaForMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVPlayerMediaSelectionCriteria;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1390563-setmediaselectioncriteria
    setMediaSelectionCriteria_forMediaCharacteristic(criteria: AVPlayerMediaSelectionCriteria, mediaCharacteristic: AVMediaCharacteristic):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1386458-closedcaptiondisplayenabled
    closedCaptionDisplayEnabled(): BOOL;
    setClosedCaptionDisplayEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1390127-volume
    volume(): number;
    setVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387544-muted
    muted(): BOOL;
    setMuted(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387441-allowsexternalplayback
    allowsExternalPlayback(): BOOL;
    setAllowsExternalPlayback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1388982-externalplaybackactive
    externalPlaybackActive(): BOOL;
    setExternalPlaybackActive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1624255-usesexternalplaybackwhileexterna
    usesExternalPlaybackWhileExternalScreenIsActive(): BOOL;
    setUsesExternalPlaybackWhileExternalScreenIsActive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1624251-externalplaybackvideogravity
    externalPlaybackVideoGravity(): AVLayerVideoGravity;
    setExternalPlaybackVideoGravity(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/2990522-preventsdisplaysleepduringvideop
    preventsDisplaySleepDuringVideoPlayback(): BOOL;
    setPreventsDisplaySleepDuringVideoPlayback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1643482-automaticallywaitstominimizestal
    automaticallyWaitsToMinimizeStalling(): BOOL;
    setAutomaticallyWaitsToMinimizeStalling(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1643486-reasonforwaitingtoplay
    reasonForWaitingToPlay(): AVPlayerWaitingReason;
    setReasonForWaitingToPlay(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1643485-timecontrolstatus
    timeControlStatus(): AVPlayerTimeControlStatus;
    setTimeControlStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1643480-playimmediatelyatrate
    playImmediatelyAtRate(rate: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1624254-outputobscuredduetoinsufficiente
    outputObscuredDueToInsufficientExternalProtection(): BOOL;
    setOutputObscuredDueToInsufficientExternalProtection(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/3365978-eligibleforhdrplayback
    eligibleForHDRPlayback(): BOOL;
    setEligibleForHDRPlayback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/2936889-availablehdrmodes
    availableHDRModes(): AVPlayerHDRMode;
    setAvailableHDRModes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3601108-allowedaudiospatializationformat
    allowedAudioSpatializationFormats(): AVAudioSpatializationFormats;
    setAllowedAudioSpatializationFormats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritem/3237174-audiospatializationallowed
    audioSpatializationAllowed(): BOOL;
    setAudioSpatializationAllowed(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1386591-setrate
    setRate_time_atHostTime(rate: number, itemTime: CMTime, hostClockTime: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1389712-prerollatrate
    prerollAtRate_completionHandler(rate: number, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1388260-cancelpendingprerolls
    cancelPendingPrerolls():void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1387066-masterclock
    masterClock(): CMClockRef;
    setMasterClock(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1390717-audiooutputdeviceuniqueid
    audioOutputDeviceUniqueID(): string | cocoascript.NSString;
    setAudioOutputDeviceUniqueID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/2942616-preferredvideodecodergpuregistry
    preferredVideoDecoderGPURegistryID(): number;
    setPreferredVideoDecoderGPURegistryID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1624258-allowsairplayvideo
    allowsAirPlayVideo(): BOOL;
    setAllowsAirPlayVideo(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1624259-airplayvideoactive
    airPlayVideoActive(): BOOL;
    setAirPlayVideoActive(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayer/1624256-usesairplayvideowhileairplayscre
    usesAirPlayVideoWhileAirPlayScreenIsActive(): BOOL;
    setUsesAirPlayVideoWhileAirPlayScreenIsActive(): void;
    //
    alloc():AVPlayer;
    //
    init():AVPlayer;
  }
}

declare const AVPlayer: cocoascript.AVPlayer;
declare namespace cocoascript {
  /**
   * An object used to modify the presentation state of an asset track being presented by a player.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemtrack
   */
  interface AVPlayerItemTrack extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemtrack/1390701-assettrack
    assetTrack(): AVAssetTrack;
    setAssetTrack(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemtrack/1387062-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemtrack/1388956-currentvideoframerate
    currentVideoFrameRate(): number;
    setCurrentVideoFrameRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemtrack/1388045-videofieldmode
    videoFieldMode(): string | cocoascript.NSString;
    setVideoFieldMode(): void;
    //
    alloc():AVPlayerItemTrack;
    //
    init():AVPlayerItemTrack;
  }
}

declare const AVPlayerItemTrack: cocoascript.AVPlayerItemTrack;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemtrackvideofieldmodedeinterlacefields
declare const AVPlayerItemTrackVideoFieldModeDeinterlaceFields: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that manages a player’s visual output.
   * doc://com.apple.documentation/documentation/avfoundation/avplayerlayer
   */
  interface AVPlayerLayer extends CALayer {
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlayer/1389308-playerlayerwithplayer
    playerLayerWithPlayer(player: AVPlayer):AVPlayerLayer;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlayer/1390434-player
    player(): AVPlayer;
    setPlayer(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlayer/1389748-readyfordisplay
    readyForDisplay(): BOOL;
    setReadyForDisplay(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlayer/1385745-videorect
    videoRect(): CGRect;
    setVideoRect(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlayer/1388915-videogravity
    videoGravity(): AVLayerVideoGravity;
    setVideoGravity(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlayer/1390055-pixelbufferattributes
    pixelBufferAttributes(): id;
    setPixelBufferAttributes(): void;
    //
    alloc():AVPlayerLayer;
    //
    init():AVPlayerLayer;
  }
}

declare const AVPlayerLayer: cocoascript.AVPlayerLayer;
declare namespace cocoascript {
  /**
   * A player used to play a number of items in sequence.
   * doc://com.apple.documentation/documentation/avfoundation/avqueueplayer
   */
  interface AVQueuePlayer extends AVPlayer {
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1389345-initwithitems
    initWithItems(items: AVPlayerItem):AVQueuePlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1538384-queueplayerwithitems
    queuePlayerWithItems(items: AVPlayerItem):AVQueuePlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1390539-items
    items():AVPlayerItem;
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1389318-advancetonextitem
    advanceToNextItem():void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1387289-caninsertitem
    canInsertItem_afterItem(item: AVPlayerItem, afterItem: AVPlayerItem):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1388543-insertitem
    insertItem_afterItem(item: AVPlayerItem, afterItem: AVPlayerItem):void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1387400-removeitem
    removeItem(item: AVPlayerItem):void;
    // doc://com.apple.documentation/documentation/avfoundation/avqueueplayer/1385788-removeallitems
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
   * An object that simplifies the playing of looping media content using a queue player.
   * doc://com.apple.documentation/documentation/avfoundation/avplayerlooper
   */
  interface AVPlayerLooper extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/1643626-initwithplayer
    initWithPlayer_templateItem_timeRange(player: AVQueuePlayer, itemToLoop: AVPlayerItem, loopRange: CMTimeRange):AVPlayerLooper;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/1645034-playerlooperwithplayer
    playerLooperWithPlayer_templateItem_timeRange(player: AVQueuePlayer, itemToLoop: AVPlayerItem, loopRange: CMTimeRange):AVPlayerLooper;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/1643625-playerlooperwithplayer
    playerLooperWithPlayer_templateItem(player: AVQueuePlayer, itemToLoop: AVPlayerItem):AVPlayerLooper;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/1643631-loopingplayeritems
    loopingPlayerItems(): AVPlayerItem;
    setLoopingPlayerItems(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/1643629-disablelooping
    disableLooping():void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/1643648-loopcount
    loopCount(): NSInteger;
    setLoopCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/2177060-status
    status(): AVPlayerLooperStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayerlooper/2177064-error
    error(): NSError;
    setError(): void;
    //
    alloc():AVPlayerLooper;
    //
    init():AVPlayerLooper;
  }
}

declare const AVPlayerLooper: cocoascript.AVPlayerLooper;
declare namespace cocoascript {
  /**
   * An object used to synchronize with a specific player item.
   * doc://com.apple.documentation/documentation/avfoundation/avsynchronizedlayer
   */
  interface AVSynchronizedLayer extends CALayer {
    // doc://com.apple.documentation/documentation/avfoundation/avsynchronizedlayer/1388781-synchronizedlayerwithplayeritem
    synchronizedLayerWithPlayerItem(playerItem: AVPlayerItem):AVSynchronizedLayer;
    // doc://com.apple.documentation/documentation/avfoundation/avsynchronizedlayer/1385679-playeritem
    playerItem(): AVPlayerItem;
    setPlayerItem(): void;
    //
    alloc():AVSynchronizedLayer;
    //
    init():AVSynchronizedLayer;
  }
}

declare const AVSynchronizedLayer: cocoascript.AVSynchronizedLayer;
declare namespace cocoascript {
  /**
   * A mutable object that represents a complete rendition of media selection options on an asset.
   * doc://com.apple.documentation/documentation/avfoundation/avmutablemediaselection
   */
  interface AVMutableMediaSelection extends AVMediaSelection {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemediaselection/1386768-selectmediaoption
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
   * doc://com.apple.documentation/documentation/avfoundation/avplayermediaselectioncriteria
   */
  interface AVPlayerMediaSelectionCriteria extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayermediaselectioncriteria/1387627-initwithpreferredlanguages
    initWithPreferredLanguages_preferredMediaCharacteristics(preferredLanguages: string | cocoascript.NSString, preferredMediaCharacteristics: AVMediaCharacteristic):AVPlayerMediaSelectionCriteria;
    // doc://com.apple.documentation/documentation/avfoundation/avplayermediaselectioncriteria/3042657-initwithprincipalmediacharacteri
    initWithPrincipalMediaCharacteristics_preferredLanguages_preferredMediaCharacteristics(principalMediaCharacteristics: AVMediaCharacteristic, preferredLanguages: string | cocoascript.NSString, preferredMediaCharacteristics: AVMediaCharacteristic):AVPlayerMediaSelectionCriteria;
    // doc://com.apple.documentation/documentation/avfoundation/avplayermediaselectioncriteria/1388559-preferredlanguages
    preferredLanguages(): string | cocoascript.NSString;
    setPreferredLanguages(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayermediaselectioncriteria/1385734-preferredmediacharacteristics
    preferredMediaCharacteristics(): AVMediaCharacteristic;
    setPreferredMediaCharacteristics(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayermediaselectioncriteria/3042658-principalmediacharacteristics
    principalMediaCharacteristics(): AVMediaCharacteristic;
    setPrincipalMediaCharacteristics(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmetadatagroup
   */
  interface AVMetadataGroup extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatagroup/1389935-items
    items(): AVMetadataItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatagroup/1620088-uniqueid
    uniqueID(): string | cocoascript.NSString;
    setUniqueID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmetadatagroup/1620087-classifyinglabel
    classifyingLabel(): string | cocoascript.NSString;
    setClassifyingLabel(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmutabletimedmetadatagroup
   */
  interface AVMutableTimedMetadataGroup extends AVTimedMetadataGroup {
    // doc://com.apple.documentation/documentation/avfoundation/avmutabletimedmetadatagroup/1386481-items
    items(): AVMetadataItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutabletimedmetadatagroup/1387595-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmutabledaterangemetadatagroup
   */
  interface AVMutableDateRangeMetadataGroup extends AVDateRangeMetadataGroup {
    // doc://com.apple.documentation/documentation/avfoundation/avmutabledaterangemetadatagroup/1388262-items
    items(): AVMetadataItem;
    setItems(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutabledaterangemetadatagroup/1390555-startdate
    startDate(): NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutabledaterangemetadatagroup/1387651-enddate
    endDate(): NSDate;
    setEndDate(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemmediadatacollector
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
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadatacollector
   */
  interface AVPlayerItemMetadataCollector extends AVPlayerItemMediaDataCollector {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadatacollector/1617191-initwithidentifiers
    initWithIdentifiers_classifyingLabels(identifiers: string | cocoascript.NSString, classifyingLabels: string | cocoascript.NSString):AVPlayerItemMetadataCollector;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadatacollector/1617195-setdelegate
    setDelegate_queue(delegate: AVPlayerItemMetadataCollectorPushDelegate, delegateQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadatacollector/1617196-delegate
    delegate(): AVPlayerItemMetadataCollectorPushDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadatacollector/1617192-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(): void;
    //
    alloc():AVPlayerItemMetadataCollector;
    //
    init():AVPlayerItemMetadataCollector;
  }
}

declare const AVPlayerItemMetadataCollector: cocoascript.AVPlayerItemMetadataCollector;
declare namespace cocoascript {
  /**
   * An object used to create and track decryption keys for media data.
   * doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession
   */
  interface AVContentKeySession extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2887362-contentkeysessionwithkeysystem
    contentKeySessionWithKeySystem(keySystem: AVContentKeySystem):AVContentKeySession;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799206-contentkeysessionwithkeysystem
    contentKeySessionWithKeySystem_storageDirectoryAtURL(keySystem: AVContentKeySystem, storageURL: NSURL):AVContentKeySession;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799167-keysystem
    keySystem(): AVContentKeySystem;
    setKeySystem(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799164-setdelegate
    setDelegate_queue(delegate: AVContentKeySessionDelegate, delegateQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799191-delegate
    delegate(): AVContentKeySessionDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799178-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799174-addcontentkeyrecipient
    addContentKeyRecipient(recipient: AVContentKeyRecipient):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799192-contentkeyrecipients
    contentKeyRecipients(): AVContentKeyRecipient;
    setContentKeyRecipients(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799180-processcontentkeyrequestwithiden
    processContentKeyRequestWithIdentifier_initializationData_options(identifier: AVContentKeySession, initializationData: NSData, options: AVContentKeySession):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799208-renewexpiringresponsedataforcont
    renewExpiringResponseDataForContentKeyRequest(contentKeyRequest: AVContentKeyRequest):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2887476-makesecuretokenforexpirationdate
    makeSecureTokenForExpirationDateOfPersistableContentKey_completionHandler(persistableContentKeyData: NSData, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799189-contentprotectionsessionidentifi
    contentProtectionSessionIdentifier(): NSData;
    setContentProtectionSessionIdentifier(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799171-expire
    expire():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799181-removecontentkeyrecipient
    removeContentKeyRecipient(recipient: AVContentKeyRecipient):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799161-pendingexpiredsessionreportswith
    pendingExpiredSessionReportsWithAppIdentifier_storageDirectoryAtURL(appIdentifier: NSData, storageURL: NSURL):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799170-removependingexpiredsessionrepor
    removePendingExpiredSessionReports_withAppIdentifier_storageDirectoryAtURL(expiredSessionReports: NSData, appIdentifier: NSData, storageURL: NSURL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/2799203-storageurl
    storageURL(): NSURL;
    setStorageURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/3089137-invalidateallpersistablecontentk
    invalidateAllPersistableContentKeysForApp_options_completionHandler(appIdentifier: NSData, options: AVContentKeySession, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysession/3089138-invalidatepersistablecontentkey
    invalidatePersistableContentKey_options_completionHandler(persistableContentKeyData: NSData, options: AVContentKeySession, handler: NSError):void;
    //
    alloc():AVContentKeySession;
    //
    init():AVContentKeySession;
  }
}

declare const AVContentKeySession: cocoascript.AVContentKeySession;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a content decryption key request issued from a content key session object.
   * doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest
   */
  interface AVContentKeyRequest extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799198-makestreamingcontentkeyrequestda
    makeStreamingContentKeyRequestDataForApp_contentIdentifier_options_completionHandler(appIdentifier: NSData, contentIdentifier: NSData, options: AVContentKeyRequest, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2936887-respondbyrequestingpersistableco
    respondByRequestingPersistableContentKeyRequestAndReturnError(outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799165-processcontentkeyresponse
    processContentKeyResponse(keyResponse: AVContentKeyResponse):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799159-processcontentkeyresponseerror
    processContentKeyResponseError(error: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799207-respondbyrequestingpersistableco
    respondByRequestingPersistableContentKeyRequest():void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799205-identifier
    identifier(): id;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799185-canprovidepersistablecontentkey
    canProvidePersistableContentKey(): BOOL;
    setCanProvidePersistableContentKey(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799182-error
    error(): NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799186-initializationdata
    initializationData(): NSData;
    setInitializationData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799193-renewsexpiringresponsedata
    renewsExpiringResponseData(): BOOL;
    setRenewsExpiringResponseData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/2799190-status
    status(): AVContentKeyRequestStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequest/3112525-options
    options(): id;
    setOptions(): void;
    //
    alloc():AVContentKeyRequest;
    //
    init():AVContentKeyRequest;
  }
}

declare const AVContentKeyRequest: cocoascript.AVContentKeyRequest;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequestprotocolversionskey
declare const AVContentKeyRequestProtocolVersionsKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that encapsulates information about a persistable content decryption key request issued from a content key session.
   * doc://com.apple.documentation/documentation/avfoundation/avpersistablecontentkeyrequest
   */
  interface AVPersistableContentKeyRequest extends AVContentKeyRequest {
    // doc://com.apple.documentation/documentation/avfoundation/avpersistablecontentkeyrequest/2799188-persistablecontentkeyfromkeyvend
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
   * doc://com.apple.documentation/documentation/avfoundation/avcontentkeyresponse
   */
  interface AVContentKeyResponse extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyresponse/2867986-contentkeyresponsewithclearkeyda
    contentKeyResponseWithClearKeyData_initializationVector(keyData: NSData, initializationVector: NSData):AVContentKeyResponse;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyresponse/2799183-contentkeyresponsewithfairplayst
    contentKeyResponseWithFairPlayStreamingKeyResponseData(keyResponseData: NSData):AVContentKeyResponse;
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyresponse/3088798-contentkeyresponsewithauthorizat
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
   * A URL session used to support the creation and execution of asset download tasks.
   * doc://com.apple.documentation/documentation/avfoundation/avassetdownloadurlsession
   */
  interface AVAssetDownloadURLSession extends NSURLSession {
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadurlsession/1621015-sessionwithconfiguration
    sessionWithConfiguration_assetDownloadDelegate_delegateQueue(configuration: NSURLSessionConfiguration, delegate: AVAssetDownloadDelegate, delegateQueue: NSOperationQueue):AVAssetDownloadURLSession;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadurlsession/1650938-assetdownloadtaskwithurlasset
    assetDownloadTaskWithURLAsset_assetTitle_assetArtworkData_options(URLAsset: AVURLAsset, title: string | cocoascript.NSString, artworkData: NSData, options: AVAssetDownloadURLSession):AVAssetDownloadTask;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadurlsession/2897242-aggregateassetdownloadtaskwithur
    aggregateAssetDownloadTaskWithURLAsset_mediaSelections_assetTitle_assetArtworkData_options(URLAsset: AVURLAsset, mediaSelections: AVMediaSelection, title: string | cocoascript.NSString, artworkData: NSData, options: AVAssetDownloadURLSession):AVAggregateAssetDownloadTask;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadurlsession/1621018-assetdownloadtaskwithurlasset
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
   * doc://com.apple.documentation/documentation/avfoundation/avassetdownloadtask
   */
  interface AVAssetDownloadTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadtask/1621024-urlasset
    URLAsset(): AVURLAsset;
    setURLAsset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadtask/1621026-loadedtimeranges
    loadedTimeRanges(): NSValue;
    setLoadedTimeRanges(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadtask/1621014-options
    options(): id;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadtask/1621022-destinationurl
    destinationURL(): NSURL;
    setDestinationURL(): void;
    //
    alloc():AVAssetDownloadTask;
    //
    init():AVAssetDownloadTask;
  }
}

declare const AVAssetDownloadTask: cocoascript.AVAssetDownloadTask;
declare namespace cocoascript {
  /**
   * A single task that downloads multiple media selections for a single asset.
   * doc://com.apple.documentation/documentation/avfoundation/avaggregateassetdownloadtask
   */
  interface AVAggregateAssetDownloadTask extends NSURLSessionTask {
    // doc://com.apple.documentation/documentation/avfoundation/avaggregateassetdownloadtask/2897238-urlasset
    URLAsset(): AVURLAsset;
    setURLAsset(): void;
    //
    alloc():AVAggregateAssetDownloadTask;
    //
    init():AVAggregateAssetDownloadTask;
  }
}

declare const AVAggregateAssetDownloadTask: cocoascript.AVAggregateAssetDownloadTask;
declare namespace cocoascript {
  /**
   * An object used to inspect the state of an asset’s locally cached media data.
   * doc://com.apple.documentation/documentation/avfoundation/avassetcache
   */
  interface AVAssetCache extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetcache/1823708-playableoffline
    playableOffline(): BOOL;
    setPlayableOffline(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetcache/1823715-mediaselectionoptionsinmediasele
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
   * A manager of policies used to automatically purge downloaded assets.
   * doc://com.apple.documentation/documentation/avfoundation/avassetdownloadstoragemanager
   */
  interface AVAssetDownloadStorageManager extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadstoragemanager/2865563-shareddownloadstoragemanager
    sharedDownloadStorageManager():AVAssetDownloadStorageManager;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadstoragemanager/2865557-setstoragemanagementpolicy
    setStorageManagementPolicy_forURL(storageManagementPolicy: AVAssetDownloadStorageManagementPolicy, downloadStorageURL: NSURL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadstoragemanager/2865562-storagemanagementpolicyforurl
    storageManagementPolicyForURL(downloadStorageURL: NSURL):AVAssetDownloadStorageManagementPolicy;
    //
    alloc():AVAssetDownloadStorageManager;
    //
    init():AVAssetDownloadStorageManager;
  }
}

declare const AVAssetDownloadStorageManager: cocoascript.AVAssetDownloadStorageManager;
declare namespace cocoascript {
  /**
   * A mutable set of properties that defines a policy to automatically purge downloaded assets.
   * doc://com.apple.documentation/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy
   */
  interface AVMutableAssetDownloadStorageManagementPolicy extends AVAssetDownloadStorageManagementPolicy {
    // doc://com.apple.documentation/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy/2865564-expirationdate
    expirationDate(): NSDate;
    setExpirationDate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy/2865558-priority
    priority(): AVAssetDownloadedAssetEvictionPriority;
    setPriority(): void;
    //
    alloc():AVMutableAssetDownloadStorageManagementPolicy;
    //
    init():AVMutableAssetDownloadStorageManagementPolicy;
  }
}

declare const AVMutableAssetDownloadStorageManagementPolicy: cocoascript.AVMutableAssetDownloadStorageManagementPolicy;
declare namespace cocoascript {
  /**
   * An object used to synchronize multiple queued sample buffers to a single timeline.
   * doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer
   */
  interface AVSampleBufferRenderSynchronizer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867827-renderers
    renderers(): AVQueuedSampleBufferRendering;
    setRenderers(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867828-addrenderer
    addRenderer(renderer: AVQueuedSampleBufferRendering):void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867826-removerenderer
    removeRenderer_atTime_completionHandler(renderer: AVQueuedSampleBufferRendering, time: CMTime, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/3022467-currenttime
    currentTime():CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867822-timebase
    timebase(): CMTimebaseRef;
    setTimebase(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867823-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867821-setrate
    setRate_time(rate: number, time: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867825-addperiodictimeobserverforinterv
    addPeriodicTimeObserverForInterval_queue_usingBlock(interval: CMTime, queue: dispatch_queue_t, block: CMTime):AVSampleBufferRenderSynchronizer;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867824-addboundarytimeobserverfortimes
    addBoundaryTimeObserverForTimes_queue_usingBlock(times: NSValue, queue: dispatch_queue_t, block: void):AVSampleBufferRenderSynchronizer;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizer/2867829-removetimeobserver
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
   * doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer
   */
  interface AVSampleBufferDisplayLayer extends CALayer {
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1387778-requestmediadatawhenreadyonqueue
    requestMediaDataWhenReadyOnQueue_usingBlock(queue: dispatch_queue_t, block: void):void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1387317-readyformoremediadata
    readyForMoreMediaData(): BOOL;
    setReadyForMoreMediaData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/3563946-requiresflushtoresumedecoding
    requiresFlushToResumeDecoding(): BOOL;
    setRequiresFlushToResumeDecoding(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1388557-stoprequestingmediadata
    stopRequestingMediaData():void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1385692-flush
    flush():void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1389257-flushandremoveimage
    flushAndRemoveImage():void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1390569-controltimebase
    controlTimebase(): CMTimebaseRef;
    setControlTimebase(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1387599-enqueuesamplebuffer
    enqueueSampleBuffer(sampleBuffer: CMSampleBufferRef):void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1387625-videogravity
    videoGravity(): AVLayerVideoGravity;
    setVideoGravity(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1387837-status
    status(): AVQueuedSampleBufferRenderingStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/3081651-preventscapture
    preventsCapture(): BOOL;
    setPreventsCapture(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/3088800-preventsdisplaysleepduringvideop
    preventsDisplaySleepDuringVideoPlayback(): BOOL;
    setPreventsDisplaySleepDuringVideoPlayback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayer/1390739-error
    error(): NSError;
    setError(): void;
    //
    alloc():AVSampleBufferDisplayLayer;
    //
    init():AVSampleBufferDisplayLayer;
  }
}

declare const AVSampleBufferDisplayLayer: cocoascript.AVSampleBufferDisplayLayer;
// doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayerfailedtodecodenotificationerrorkey
declare const AVSampleBufferDisplayLayerFailedToDecodeNotificationErrorKey: cocoascript.NSString;
// doc://com.apple.documentation/documentation/avfoundation/avsamplebufferdisplaylayerfailedtodecodenotification
declare const AVSampleBufferDisplayLayerFailedToDecodeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object used to decompress audio and play compressed or uncompressed audio.
   * doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer
   */
  interface AVSampleBufferAudioRenderer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer/2866183-status
    status(): AVQueuedSampleBufferRenderingStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer/2866181-flushfromsourcetime
    flushFromSourceTime_completionHandler(time: CMTime, completionHandler: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer/2866180-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer/2866179-volume
    volume(): number;
    setVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer/2866177-muted
    muted(): BOOL;
    setMuted(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer/2866182-audiooutputdeviceuniqueid
    audioOutputDeviceUniqueID(): string | cocoascript.NSString;
    setAudioOutputDeviceUniqueID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferaudiorenderer/2866178-error
    error(): NSError;
    setError(): void;
    //
    alloc():AVSampleBufferAudioRenderer;
    //
    init():AVSampleBufferAudioRenderer;
  }
}

declare const AVSampleBufferAudioRenderer: cocoascript.AVSampleBufferAudioRenderer;
declare namespace cocoascript {
  /**
   * An object that detects the presences of media playback routes.
   * doc://com.apple.documentation/documentation/avfoundation/avroutedetector
   */
  interface AVRouteDetector extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avroutedetector/2915762-routedetectionenabled
    routeDetectionEnabled(): BOOL;
    setRouteDetectionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avroutedetector/2915760-multipleroutesdetected
    multipleRoutesDetected(): BOOL;
    setMultipleRoutesDetected(): void;
    //
    alloc():AVRouteDetector;
    //
    init():AVRouteDetector;
  }
}

declare const AVRouteDetector: cocoascript.AVRouteDetector;
declare namespace cocoascript {
  /**
   * An object that combines media data from multiple file-based sources to present or process media data from multiple sources.
   * doc://com.apple.documentation/documentation/avfoundation/avcomposition
   */
  interface AVComposition extends AVAsset {
    // doc://com.apple.documentation/documentation/avfoundation/avcomposition/1387080-urlassetinitializationoptions
    URLAssetInitializationOptions(): id;
    setURLAssetInitializationOptions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcomposition/1390165-tracks
    tracks(): AVCompositionTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcomposition/1388473-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avcomposition/1387525-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avcomposition/1386534-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avcomposition/1387247-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(): void;
    //
    alloc():AVComposition;
    //
    init():AVComposition;
  }
}

declare const AVComposition: cocoascript.AVComposition;
declare namespace cocoascript {
  /**
   * A track in a composition object, consisting of a media type, a track identifier, and track segments.
   * doc://com.apple.documentation/documentation/avfoundation/avcompositiontrack
   */
  interface AVCompositionTrack extends AVAssetTrack {
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontrack/1387267-segments
    segments(): AVCompositionTrackSegment;
    setSegments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontrack/2865555-segmentfortracktime
    segmentForTrackTime(trackTime: CMTime):AVCompositionTrackSegment;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontrack/3194194-formatdescriptionreplacements
    formatDescriptionReplacements(): AVCompositionTrackFormatDescriptionReplacement;
    setFormatDescriptionReplacements(): void;
    //
    alloc():AVCompositionTrack;
    //
    init():AVCompositionTrack;
  }
}

declare const AVCompositionTrack: cocoascript.AVCompositionTrack;
declare namespace cocoascript {
  /**
   * A segment of a track, consisting of a URL, a track identifier, and a time mapping from the source track to the composition track.
   * doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment
   */
  interface AVCompositionTrackSegment extends AVAssetTrackSegment {
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment/1400556-compositiontracksegmentwithtimer
    compositionTrackSegmentWithTimeRange(timeRange: CMTimeRange):AVCompositionTrackSegment;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment/1386841-initwithtimerange
    initWithTimeRange(timeRange: CMTimeRange):AVCompositionTrackSegment;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment/1400552-compositiontracksegmentwithurl
    compositionTrackSegmentWithURL_trackID_sourceTimeRange_targetTimeRange(URL: NSURL, trackID: CMPersistentTrackID, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange):AVCompositionTrackSegment;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment/1390282-initwithurl
    initWithURL_trackID_sourceTimeRange_targetTimeRange(URL: NSURL, trackID: CMPersistentTrackID, sourceTimeRange: CMTimeRange, targetTimeRange: CMTimeRange):AVCompositionTrackSegment;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment/1386814-sourceurl
    sourceURL(): NSURL;
    setSourceURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment/1388326-sourcetrackid
    sourceTrackID(): CMPersistentTrackID;
    setSourceTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcompositiontracksegment/1389592-empty
    empty(): BOOL;
    setEmpty(): void;
    //
    alloc():AVCompositionTrackSegment;
    //
    init():AVCompositionTrackSegment;
  }
}

declare const AVCompositionTrackSegment: cocoascript.AVCompositionTrackSegment;
declare namespace cocoascript {
  /**
   * A mutable object used to create a new composition from existing assets.
   * doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition
   */
  interface AVMutableComposition extends AVComposition {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1390705-compositionwithurlassetinitializ
    compositionWithURLAssetInitializationOptions(URLAssetInitializationOptions: AVMutableComposition):AVMutableComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1495098-composition
    composition():AVMutableComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1386710-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1385943-inserttimerange
    insertTimeRange_ofAsset_atTime_error(timeRange: CMTimeRange, asset: AVAsset, startTime: CMTime, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1387768-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1390549-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1389937-tracks
    tracks(): AVMutableCompositionTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1387601-addmutabletrackwithmediatype
    addMutableTrackWithMediaType_preferredTrackID(mediaType: AVMediaType, preferredTrackID: CMPersistentTrackID):AVMutableCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1386818-removetrack
    removeTrack(track: AVCompositionTrack):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1386662-mutabletrackcompatiblewithtrack
    mutableTrackCompatibleWithTrack(track: AVAssetTrack):AVMutableCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1390074-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVMutableCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1388464-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMutableCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1385724-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVMutableCompositionTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecomposition/1390424-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(): void;
    //
    alloc():AVMutableComposition;
    //
    init():AVMutableComposition;
  }
}

declare const AVMutableComposition: cocoascript.AVMutableComposition;
declare namespace cocoascript {
  /**
   * A mutable track in a composition object that you use to insert, remove, and scale track segments without affecting their low-level representation.
   * doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack
   */
  interface AVMutableCompositionTrack extends AVCompositionTrack {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/3334926-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1387192-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1388866-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1389030-naturaltimescale
    naturalTimeScale(): CMTimeScale;
    setNaturalTimeScale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1388304-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1388649-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/3180005-replaceformatdescription
    replaceFormatDescription_withFormatDescription(originalFormatDescription: CMFormatDescriptionRef, replacementFormatDescription: CMFormatDescriptionRef):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/3013764-addtrackassociationtotrack
    addTrackAssociationToTrack_type(compositionTrack: AVCompositionTrack, trackAssociationType: AVTrackAssociationType):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/3013765-removetrackassociationtotrack
    removeTrackAssociationToTrack_type(compositionTrack: AVCompositionTrack, trackAssociationType: AVTrackAssociationType):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1389483-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1390691-inserttimerange
    insertTimeRange_ofTrack_atTime_error(timeRange: CMTimeRange, track: AVAssetTrack, startTime: CMTime, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1388629-inserttimeranges
    insertTimeRanges_ofTracks_atTime_error(timeRanges: NSValue, tracks: AVAssetTrack, startTime: CMTime, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1386048-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1388212-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1390321-segments
    segments(): AVCompositionTrackSegment;
    setSegments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablecompositiontrack/1388746-validatetracksegments
    validateTrackSegments_error(trackSegments: AVCompositionTrackSegment, outError: NSError):BOOL;
    //
    alloc():AVMutableCompositionTrack;
    //
    init():AVMutableCompositionTrack;
  }
}

declare const AVMutableCompositionTrack: cocoascript.AVMutableCompositionTrack;
declare namespace cocoascript {
  /**
   * A track that conforms to a QuickTime or ISO-based media file format.
   * doc://com.apple.documentation/documentation/avfoundation/avmovietrack
   */
  interface AVMovieTrack extends AVAssetTrack {
    // doc://com.apple.documentation/documentation/avfoundation/avmovietrack/1387020-alternategroupid
    alternateGroupID(): NSInteger;
    setAlternateGroupID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovietrack/1386868-mediadatastorage
    mediaDataStorage(): AVMediaDataStorage;
    setMediaDataStorage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovietrack/1388187-mediadecodetimerange
    mediaDecodeTimeRange(): CMTimeRange;
    setMediaDecodeTimeRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmovietrack/1389982-mediapresentationtimerange
    mediaPresentationTimeRange(): CMTimeRange;
    setMediaPresentationTimeRange(): void;
    //
    alloc():AVMovieTrack;
    //
    init():AVMovieTrack;
  }
}

declare const AVMovieTrack: cocoascript.AVMovieTrack;
declare namespace cocoascript {
  /**
   * A mutable object that represents the audiovisual containers that conform to a QuickTime- or ISO-based media file format.
   * doc://com.apple.documentation/documentation/avfoundation/avmutablemovie
   */
  interface AVMutableMovie extends AVMovie {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1386052-initwithurl
    initWithURL_options_error(URL: NSURL, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1458226-moviewithurl
    movieWithURL_options_error(URL: NSURL, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1388442-initwithdata
    initWithData_options_error(data: NSData, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1458234-moviewithdata
    movieWithData_options_error(data: NSData, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1386408-initwithsettingsfrommovie
    initWithSettingsFromMovie_options_error(movie: AVMovie, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1458238-moviewithsettingsfrommovie
    movieWithSettingsFromMovie_options_error(movie: AVMovie, options: AVMutableMovie, outError: NSError):AVMutableMovie;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1390063-addmutabletrackwithmediatype
    addMutableTrackWithMediaType_copySettingsFromTrack_options(mediaType: AVMediaType, track: AVAssetTrack, options: AVMutableMovie):AVMutableMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1389215-addmutabletrackscopyingsettingsf
    addMutableTracksCopyingSettingsFromTracks_options(existingTracks: AVAssetTrack, options: AVMutableMovie):AVMutableMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1386735-removetrack
    removeTrack(track: AVMovieTrack):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1387739-tracks
    tracks(): AVMutableMovieTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1389467-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVMutableMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1388547-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVMutableMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1390443-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVMutableMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1388669-mutabletrackcompatiblewithtrack
    mutableTrackCompatibleWithTrack(track: AVAssetTrack):AVMutableMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1387515-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1389598-inserttimerange
    insertTimeRange_ofAsset_atTime_copySampleData_error(timeRange: CMTimeRange, asset: AVAsset, startTime: CMTime, copySampleData: BOOL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1385605-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1385653-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1389320-defaultmediadatastorage
    defaultMediaDataStorage(): AVMediaDataStorage;
    setDefaultMediaDataStorage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1388742-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1386969-interleavingperiod
    interleavingPeriod(): CMTime;
    setInterleavingPeriod(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1389960-modified
    modified(): BOOL;
    setModified(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1387335-preferredrate
    preferredRate(): number;
    setPreferredRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1388771-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1388614-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovie/1390622-timescale
    timescale(): CMTimeScale;
    setTimescale(): void;
    //
    alloc():AVMutableMovie;
    //
    init():AVMutableMovie;
  }
}

declare const AVMutableMovie: cocoascript.AVMutableMovie;
declare namespace cocoascript {
  /**
   * A mutable track that conforms to a QuickTime- or ISO-based media file format.
   * doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack
   */
  interface AVMutableMovieTrack extends AVMovieTrack {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390163-addtrackassociationtotrack
    addTrackAssociationToTrack_type(movieTrack: AVMovieTrack, trackAssociationType: AVTrackAssociationType):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1389620-removetrackassociationtotrack
    removeTrackAssociationToTrack_type(movieTrack: AVMovieTrack, trackAssociationType: AVTrackAssociationType):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1387206-alternategroupid
    alternateGroupID(): NSInteger;
    setAlternateGroupID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1386340-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1389542-hasprotectedcontent
    hasProtectedContent(): BOOL;
    setHasProtectedContent(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1386532-mediadatastorage
    mediaDataStorage(): AVMediaDataStorage;
    setMediaDataStorage(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390201-modified
    modified(): BOOL;
    setModified(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1385583-samplereferencebaseurl
    sampleReferenceBaseURL(): NSURL;
    setSampleReferenceBaseURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1388055-timescale
    timescale(): CMTimeScale;
    setTimescale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390023-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1385900-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1386593-preferredtransform
    preferredTransform(): CGAffineTransform;
    setPreferredTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1387655-layer
    layer(): NSInteger;
    setLayer(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1386454-cleanaperturedimensions
    cleanApertureDimensions(): CGSize;
    setCleanApertureDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390108-productionaperturedimensions
    productionApertureDimensions(): CGSize;
    setProductionApertureDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1389417-encodedpixelsdimensions
    encodedPixelsDimensions(): CGSize;
    setEncodedPixelsDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390391-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1389736-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1389056-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1387665-inserttimerange
    insertTimeRange_ofTrack_atTime_copySampleData_error(timeRange: CMTimeRange, track: AVAssetTrack, startTime: CMTime, copySampleData: BOOL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1389441-insertemptytimerange
    insertEmptyTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1385962-removetimerange
    removeTimeRange(timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1388618-scaletimerange
    scaleTimeRange_toDuration(timeRange: CMTimeRange, duration: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390504-preferredmediachunkalignment
    preferredMediaChunkAlignment(): NSInteger;
    setPreferredMediaChunkAlignment(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390292-preferredmediachunkduration
    preferredMediaChunkDuration(): CMTime;
    setPreferredMediaChunkDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1390149-preferredmediachunksize
    preferredMediaChunkSize(): NSInteger;
    setPreferredMediaChunkSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1638041-appendsamplebuffer
    appendSampleBuffer_decodeTime_presentationTime_error(sampleBuffer: CMSampleBufferRef, outDecodeTime: CMTime, outPresentationTime: CMTime, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/1638038-insertmediatimerange
    insertMediaTimeRange_intoTimeRange(mediaTimeRange: CMTimeRange, trackTimeRange: CMTimeRange):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablemovietrack/2876160-replaceformatdescription
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
   * An object used to handle fragmented movie files.
   * doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovie
   */
  interface AVFragmentedMovie extends AVMovie {
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovie/1388242-tracks
    tracks(): AVFragmentedMovieTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovie/1388343-trackwithtrackid
    trackWithTrackID(trackID: CMPersistentTrackID):AVFragmentedMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovie/1388651-trackswithmediacharacteristic
    tracksWithMediaCharacteristic(mediaCharacteristic: AVMediaCharacteristic):AVFragmentedMovieTrack;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovie/1390553-trackswithmediatype
    tracksWithMediaType(mediaType: AVMediaType):AVFragmentedMovieTrack;
    //
    alloc():AVFragmentedMovie;
    //
    init():AVFragmentedMovie;
  }
}

declare const AVFragmentedMovie: cocoascript.AVFragmentedMovie;
declare namespace cocoascript {
  /**
   * An object used to handle the tracks of fragmented movie files.
   * doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovietrack
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
   * An object used to check whether additional movie fragments have been appended to a fragmented movie file.
   * doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovieminder
   */
  interface AVFragmentedMovieMinder extends AVFragmentedAssetMinder {
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovieminder/1390294-initwithmovie
    initWithMovie_mindingInterval(movie: AVFragmentedMovie, mindingInterval: NSTimeInterval):AVFragmentedMovieMinder;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovieminder/1458262-fragmentedmovieminderwithmovie
    fragmentedMovieMinderWithMovie_mindingInterval(movie: AVFragmentedMovie, mindingInterval: NSTimeInterval):AVFragmentedMovieMinder;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovieminder/1386171-addfragmentedmovie
    addFragmentedMovie(movie: AVFragmentedMovie):void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovieminder/1389794-removefragmentedmovie
    removeFragmentedMovie(movie: AVFragmentedMovie):void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovieminder/1387704-mindinginterval
    mindingInterval(): NSTimeInterval;
    setMindingInterval(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avfragmentedmovieminder/1388707-movies
    movies(): AVFragmentedMovie;
    setMovies(): void;
    //
    alloc():AVFragmentedMovieMinder;
    //
    init():AVFragmentedMovieMinder;
  }
}

declare const AVFragmentedMovieMinder: cocoascript.AVFragmentedMovieMinder;
declare namespace cocoascript {
  /**
   * An object used to create a sample data file.
   * doc://com.apple.documentation/documentation/avfoundation/avmediadatastorage
   */
  interface AVMediaDataStorage extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmediadatastorage/1386008-initwithurl
    initWithURL_options(URL: NSURL, options: AVMediaDataStorage):AVMediaDataStorage;
    // doc://com.apple.documentation/documentation/avfoundation/avmediadatastorage/1385809-url
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
   * doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition
   */
  interface AVMutableVideoComposition extends AVVideoComposition {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1519720-videocomposition
    videoComposition():AVMutableVideoComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1388430-videocompositionwithpropertiesof
    videoCompositionWithPropertiesOfAsset(asset: AVAsset):AVMutableVideoComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1387006-videocompositionwithasset
    videoCompositionWithAsset_applyingCIFiltersWithHandler(asset: AVAsset, applier: AVAsynchronousCIImageFilteringRequest):AVMutableVideoComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/3200159-videocompositionwithpropertiesof
    videoCompositionWithPropertiesOfAsset_prototypeInstruction(asset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction):AVMutableVideoComposition;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1390059-frameduration
    frameDuration(): CMTime;
    setFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1386365-rendersize
    renderSize(): CGSize;
    setRenderSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1615787-renderscale
    renderScale(): number;
    setRenderScale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1385815-instructions
    instructions(): AVVideoCompositionInstruction;
    setInstructions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1390395-animationtool
    animationTool(): AVVideoCompositionCoreAnimationTool;
    setAnimationTool(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1390649-customvideocompositorclass
    customVideoCompositorClass(): AVVideoCompositing;
    setCustomVideoCompositorClass(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/2873799-sourcetrackidforframetiming
    sourceTrackIDForFrameTiming(): CMPersistentTrackID;
    setSourceTrackIDForFrameTiming(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1643234-colorprimaries
    colorPrimaries(): string | cocoascript.NSString;
    setColorPrimaries(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1643237-colortransferfunction
    colorTransferFunction(): string | cocoascript.NSString;
    setColorTransferFunction(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocomposition/1643231-colorycbcrmatrix
    colorYCbCrMatrix(): string | cocoascript.NSString;
    setColorYCbCrMatrix(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositioninstruction
   */
  interface AVMutableVideoCompositionInstruction extends AVVideoCompositionInstruction {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositioninstruction/1519701-videocompositioninstruction
    videoCompositionInstruction():AVMutableVideoCompositionInstruction;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositioninstruction/1390236-backgroundcolor
    backgroundColor(): CGColorRef;
    setBackgroundColor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositioninstruction/1388912-layerinstructions
    layerInstructions(): AVVideoCompositionLayerInstruction;
    setLayerInstructions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositioninstruction/1390418-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositioninstruction/1385876-enablepostprocessing
    enablePostProcessing(): BOOL;
    setEnablePostProcessing(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction
   */
  interface AVMutableVideoCompositionLayerInstruction extends AVVideoCompositionLayerInstruction {
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1519717-videocompositionlayerinstruction
    videoCompositionLayerInstruction():AVMutableVideoCompositionLayerInstruction;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1389691-videocompositionlayerinstruction
    videoCompositionLayerInstructionWithAssetTrack(track: AVAssetTrack):AVMutableVideoCompositionLayerInstruction;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1387222-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1390758-setopacity
    setOpacity_atTime(opacity: number, time: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1387532-setopacityrampfromstartopacity
    setOpacityRampFromStartOpacity_toEndOpacity_timeRange(startOpacity: number, endOpacity: number, timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1390899-settransform
    setTransform_atTime(transform: CGAffineTransform, time: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1388192-settransformrampfromstarttransfo
    setTransformRampFromStartTransform_toEndTransform_timeRange(startTransform: CGAffineTransform, endTransform: CGAffineTransform, timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1387402-setcroprectangle
    setCropRectangle_atTime(cropRectangle: CGRect, time: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutablevideocompositionlayerinstruction/1385677-setcroprectanglerampfromstartcro
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
   * doc://com.apple.documentation/documentation/avfoundation/avvideocompositioncoreanimationtool
   */
  interface AVVideoCompositionCoreAnimationTool extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioncoreanimationtool/1388345-videocompositioncoreanimationtoo
    videoCompositionCoreAnimationToolWithAdditionalLayer_asTrackID(layer: CALayer, trackID: CMPersistentTrackID):AVVideoCompositionCoreAnimationTool;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioncoreanimationtool/1389594-videocompositioncoreanimationtoo
    videoCompositionCoreAnimationToolWithPostProcessingAsVideoLayer_inLayer(videoLayer: CALayer, animationLayer: CALayer):AVVideoCompositionCoreAnimationTool;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositioncoreanimationtool/1389778-videocompositioncoreanimationtoo
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
   * doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomix
   */
  interface AVMutableAudioMix extends AVAudioMix {
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomix/1560973-audiomix
    audioMix():AVMutableAudioMix;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomix/1388159-inputparameters
    inputParameters(): AVAudioMixInputParameters;
    setInputParameters(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters
   */
  interface AVMutableAudioMixInputParameters extends AVAudioMixInputParameters {
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters/1560974-audiomixinputparameters
    audioMixInputParameters():AVMutableAudioMixInputParameters;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters/1386858-audiomixinputparameterswithtrack
    audioMixInputParametersWithTrack(track: AVAssetTrack):AVMutableAudioMixInputParameters;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters/1389209-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters/1389875-setvolume
    setVolume_atTime(volume: number, time: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters/1386056-setvolumerampfromstartvolume
    setVolumeRampFromStartVolume_toEndVolume_timeRange(startVolume: number, endVolume: number, timeRange: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters/1389296-audiotapprocessor
    audioTapProcessor(): MTAudioProcessingTapRef;
    setAudioTapProcessor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmutableaudiomixinputparameters/1388300-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(): void;
    //
    alloc():AVMutableAudioMixInputParameters;
    //
    init():AVMutableAudioMixInputParameters;
  }
}

declare const AVMutableAudioMixInputParameters: cocoascript.AVMutableAudioMixInputParameters;
declare namespace cocoascript {
  /**
   * An object that communicates to the system how you intend to use audio in your app.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosession
   */
  interface AVAudioSession extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616504-sharedinstance
    sharedInstance():AVAudioSession;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1648777-init
    init():AVAudioSession;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616615-category
    category(): AVAudioSessionCategory;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616583-setcategory
    setCategory_error(category: AVAudioSessionCategory, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616591-availablecategories
    availableCategories(): AVAudioSessionCategory;
    setAvailableCategories(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616503-categoryoptions
    categoryOptions(): AVAudioSessionCategoryOptions;
    setCategoryOptions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616442-setcategory
    setCategory_withOptions_error(category: AVAudioSessionCategory, options: AVAudioSessionCategoryOptions, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616508-mode
    mode(): AVAudioSessionMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616614-setmode
    setMode_error(mode: AVAudioSessionMode, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1771734-setcategory
    setCategory_mode_options_error(category: AVAudioSessionCategory, mode: AVAudioSessionMode, options: AVAudioSessionCategoryOptions, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616517-availablemodes
    availableModes(): AVAudioSessionMode;
    setAvailableModes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/2887118-routesharingpolicy
    routeSharingPolicy(): AVAudioSessionRouteSharingPolicy;
    setRouteSharingPolicy(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/2887480-setcategory
    setCategory_mode_routeSharingPolicy_options_error(category: AVAudioSessionCategory, mode: AVAudioSessionMode, policy: AVAudioSessionRouteSharingPolicy, options: AVAudioSessionCategoryOptions, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616597-setactive
    setActive_error(active: BOOL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616627-setactive
    setActive_withOptions_error(active: BOOL, options: AVAudioSessionSetActiveOptions, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/2962797-activatewithoptions
    activateWithOptions_completionHandler(options: AVAudioSessionActivationOptions, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616496-setactive
    setActive_withFlags_error(active: BOOL, flags: NSInteger, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616463-recordpermission
    recordPermission(): AVAudioSessionRecordPermission;
    setRecordPermission(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616601-requestrecordpermission
    requestRecordPermission(response: BOOL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616610-otheraudioplaying
    otherAudioPlaying(): BOOL;
    setOtherAudioPlaying(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616600-secondaryaudioshouldbesilencedhi
    secondaryAudioShouldBeSilencedHint(): BOOL;
    setSecondaryAudioShouldBeSilencedHint(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/3240575-allowhapticsandsystemsoundsdurin
    allowHapticsAndSystemSoundsDuringRecording(): BOOL;
    setAllowHapticsAndSystemSoundsDuringRecording(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/3240576-setallowhapticsandsystemsoundsdu
    setAllowHapticsAndSystemSoundsDuringRecording_error(inValue: BOOL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/3139133-promptstyle
    promptStyle(): AVAudioSessionPromptStyle;
    setPromptStyle(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616453-currentroute
    currentRoute(): AVAudioSessionRouteDescription;
    setCurrentRoute(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616524-inputavailable
    inputAvailable(): BOOL;
    setInputAvailable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616557-availableinputs
    availableInputs(): AVAudioSessionPortDescription;
    setAvailableInputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616536-preferredinput
    preferredInput(): AVAudioSessionPortDescription;
    setPreferredInput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616491-setpreferredinput
    setPreferredInput_error(inPort: AVAudioSessionPortDescription, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616485-inputdatasource
    inputDataSource(): AVAudioSessionDataSourceDescription;
    setInputDataSource(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616513-inputdatasources
    inputDataSources(): AVAudioSessionDataSourceDescription;
    setInputDataSources(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616507-setinputdatasource
    setInputDataSource_error(dataSource: AVAudioSessionDataSourceDescription, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616479-outputdatasources
    outputDataSources(): AVAudioSessionDataSourceDescription;
    setOutputDataSources(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616572-outputdatasource
    outputDataSource(): AVAudioSessionDataSourceDescription;
    setOutputDataSource(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616582-setoutputdatasource
    setOutputDataSource_error(dataSource: AVAudioSessionDataSourceDescription, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616443-overrideoutputaudioport
    overrideOutputAudioPort_error(portOverride: AVAudioSessionPortOverride, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616514-inputisavailable
    inputIsAvailable(): BOOL;
    setInputIsAvailable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/3194617-preparerouteselectionforplayback
    prepareRouteSelectionForPlaybackWithCompletionHandler(completionHandler: AVAudioSessionRouteSelection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/3551723-inputorientation
    inputOrientation(): AVAudioStereoOrientation;
    setInputOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/3551724-preferredinputorientation
    preferredInputOrientation(): AVAudioStereoOrientation;
    setPreferredInputOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/3551725-setpreferredinputorientation
    setPreferredInputOrientation_error(orientation: AVAudioStereoOrientation, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616475-inputnumberofchannels
    inputNumberOfChannels(): NSInteger;
    setInputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616454-maximuminputnumberofchannels
    maximumInputNumberOfChannels(): NSInteger;
    setMaximumInputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616440-preferredinputnumberofchannels
    preferredInputNumberOfChannels(): NSInteger;
    setPreferredInputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616483-setpreferredinputnumberofchannel
    setPreferredInputNumberOfChannels_error(count: NSInteger, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616471-outputnumberofchannels
    outputNumberOfChannels(): NSInteger;
    setOutputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616490-maximumoutputnumberofchannels
    maximumOutputNumberOfChannels(): NSInteger;
    setMaximumOutputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616448-preferredoutputnumberofchannels
    preferredOutputNumberOfChannels(): NSInteger;
    setPreferredOutputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616481-setpreferredoutputnumberofchanne
    setPreferredOutputNumberOfChannels_error(count: NSInteger, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616489-currenthardwareinputnumberofchan
    currentHardwareInputNumberOfChannels(): NSInteger;
    setCurrentHardwareInputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616581-currenthardwareoutputnumberofcha
    currentHardwareOutputNumberOfChannels(): NSInteger;
    setCurrentHardwareOutputNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616593-inputgain
    inputGain(): number;
    setInputGain(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616502-inputgainsettable
    inputGainSettable(): BOOL;
    setInputGainSettable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616546-setinputgain
    setInputGain_error(gain: number, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616533-outputvolume
    outputVolume(): number;
    setOutputVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616499-samplerate
    sampleRate(): number;
    setSampleRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616543-preferredsamplerate
    preferredSampleRate(): number;
    setPreferredSampleRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616523-setpreferredsamplerate
    setPreferredSampleRate_error(sampleRate: number, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616537-inputlatency
    inputLatency(): NSTimeInterval;
    setInputLatency(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616500-outputlatency
    outputLatency(): NSTimeInterval;
    setOutputLatency(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616498-iobufferduration
    IOBufferDuration(): NSTimeInterval;
    setIOBufferDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616464-preferrediobufferduration
    preferredIOBufferDuration(): NSTimeInterval;
    setPreferredIOBufferDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616589-setpreferrediobufferduration
    setPreferredIOBufferDuration_error(duration: NSTimeInterval, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616494-currenthardwaresamplerate
    currentHardwareSampleRate(): number;
    setCurrentHardwareSampleRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616571-preferredhardwaresamplerate
    preferredHardwareSampleRate(): number;
    setPreferredHardwareSampleRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616526-setpreferredhardwaresamplerate
    setPreferredHardwareSampleRate_error(sampleRate: number, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/2186370-setaggregatediopreference
    setAggregatedIOPreference_error(inIOType: AVAudioSessionIOType, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosession/1616556-delegate
    delegate(): AVAudioSessionDelegate;
    setDelegate(): void;
    //
    alloc():AVAudioSession;
    //
    init():AVAudioSession;
  }
}

declare const AVAudioSession: cocoascript.AVAudioSession;
declare namespace cocoascript {
  /**
   * An object for configuring macOS apps to participate in AirPods Automatic Switching.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioroutingarbiter
   */
  interface AVAudioRoutingArbiter extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioroutingarbiter/3566849-sharedroutingarbiter
    sharedRoutingArbiter(): AVAudioRoutingArbiter;
    setSharedRoutingArbiter(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioroutingarbiter/3566847-beginarbitrationwithcategory
    beginArbitrationWithCategory_completionHandler(category: AVAudioRoutingArbitrationCategory, handler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioroutingarbiter/3566848-leavearbitration
    leaveArbitration():void;
    //
    alloc():AVAudioRoutingArbiter;
    //
    init():AVAudioRoutingArbiter;
  }
}

declare const AVAudioRoutingArbiter: cocoascript.AVAudioRoutingArbiter;
declare namespace cocoascript {
  /**
   * An audio player that provides playback of audio data from a file or memory.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioplayer
   */
  interface AVAudioPlayer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387281-initwithcontentsofurl
    initWithContentsOfURL_error(url: NSURL, outError: NSError):AVAudioPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1388349-initwithcontentsofurl
    initWithContentsOfURL_fileTypeHint_error(url: NSURL, utiString: string | cocoascript.NSString, outError: NSError):AVAudioPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1388809-initwithdata
    initWithData_error(data: NSData, outError: NSError):AVAudioPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1388525-initwithdata
    initWithData_fileTypeHint_error(data: NSData, utiString: string | cocoascript.NSString, outError: NSError):AVAudioPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387297-currenttime
    currentTime(): NSTimeInterval;
    setCurrentTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1388395-duration
    duration(): NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1386886-preparetoplay
    prepareToPlay():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387388-play
    play():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1389324-playattime
    playAtTime(time: NSTimeInterval):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1389363-pause
    pause():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1386018-stop
    stop():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1390139-playing
    playing(): BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1386071-numberofloops
    numberOfLoops(): NSInteger;
    setNumberOfLoops(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1643591-setvolume
    setVolume_fadeDuration(volume: number, duration: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1389330-volume
    volume(): number;
    setVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1390884-pan
    pan(): number;
    setPan(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1386118-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387084-enablerate
    enableRate(): BOOL;
    setEnableRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387935-meteringenabled
    meteringEnabled(): BOOL;
    setMeteringEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1388565-updatemeters
    updateMeters():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1390838-averagepowerforchannel
    averagePowerForChannel(channelNumber: NSUInteger):number;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1388509-peakpowerforchannel
    peakPowerForChannel(channelNumber: NSUInteger):number;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387134-delegate
    delegate(): AVAudioPlayerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1388992-numberofchannels
    numberOfChannels(): NSUInteger;
    setNumberOfChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1624038-channelassignments
    channelAssignments(): AVAudioSessionChannelDescription;
    setChannelAssignments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/2870198-currentdevice
    currentDevice(): string | cocoascript.NSString;
    setCurrentDevice(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387462-devicecurrenttime
    deviceCurrentTime(): NSTimeInterval;
    setDeviceCurrentTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1389359-settings
    settings(): id;
    setSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1778427-format
    format(): AVAudioFormat;
    setFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1387448-url
    url(): NSURL;
    setUrl(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayer/1389437-data
    data(): NSData;
    setData(): void;
    //
    alloc():AVAudioPlayer;
    //
    init():AVAudioPlayer;
  }
}

declare const AVAudioPlayer: cocoascript.AVAudioPlayer;
declare namespace cocoascript {
  /**
   * An object that provides audio recording capabilities in your app.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder
   */
  interface AVAudioRecorder extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1388386-initwithurl
    initWithURL_settings_error(url: NSURL, settings: AVAudioRecorder, outError: NSError):AVAudioRecorder;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1778755-initwithurl
    initWithURL_format_error(url: NSURL, format: AVAudioFormat, outError: NSError):AVAudioRecorder;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1390135-currenttime
    currentTime(): NSTimeInterval;
    setCurrentTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1389435-preparetorecord
    prepareToRecord():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1388252-record
    record():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1624900-recordattime
    recordAtTime(time: NSTimeInterval):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1389378-recordforduration
    recordForDuration(duration: NSTimeInterval):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1624899-recordattime
    recordAtTime_forDuration(time: NSTimeInterval, duration: NSTimeInterval):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1389069-pause
    pause():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1389073-stop
    stop():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1388793-deleterecording
    deleteRecording():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1390313-recording
    recording(): BOOL;
    setRecording(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1386355-meteringenabled
    meteringEnabled(): BOOL;
    setMeteringEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1386326-updatemeters
    updateMeters():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1389463-peakpowerforchannel
    peakPowerForChannel(channelNumber: NSUInteger):number;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1387176-averagepowerforchannel
    averagePowerForChannel(channelNumber: NSUInteger):number;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1385839-delegate
    delegate(): AVAudioRecorderDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1624898-devicecurrenttime
    deviceCurrentTime(): NSTimeInterval;
    setDeviceCurrentTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1624903-channelassignments
    channelAssignments(): AVAudioSessionChannelDescription;
    setChannelAssignments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1389050-url
    url(): NSURL;
    setUrl(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1778754-format
    format(): AVAudioFormat;
    setFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiorecorder/1390903-settings
    settings(): id;
    setSettings(): void;
    //
    alloc():AVAudioRecorder;
    //
    init():AVAudioRecorder;
  }
}

declare const AVAudioRecorder: cocoascript.AVAudioRecorder;
declare namespace cocoascript {
  /**
   * A player for music file formats like MIDI and iMelody.
   * doc://com.apple.documentation/documentation/avfoundation/avmidiplayer
   */
  interface AVMIDIPlayer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1390856-initwithcontentsofurl
    initWithContentsOfURL_soundBankURL_error(inURL: NSURL, bankURL: NSURL, outError: NSError):AVMIDIPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1389225-initwithdata
    initWithData_soundBankURL_error(data: NSData, bankURL: NSURL, outError: NSError):AVMIDIPlayer;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1385769-preparetoplay
    prepareToPlay():void;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1388390-play
    play(completionHandler: AVMIDIPlayerCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1385747-playing
    playing(): BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1388856-stop
    stop():void;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1387366-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1386440-duration
    duration(): NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmidiplayer/1389636-currentposition
    currentPosition(): NSTimeInterval;
    setCurrentPosition(): void;
    //
    alloc():AVMIDIPlayer;
    //
    init():AVMIDIPlayer;
  }
}

declare const AVMIDIPlayer: cocoascript.AVMIDIPlayer;
declare namespace cocoascript {
  /**
   * An object that produces synthesized speech from text utterances and enables monitoring or controlling of ongoing speech.
   * doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer
   */
  interface AVSpeechSynthesizer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1619686-speakutterance
    speakUtterance(utterance: AVSpeechUtterance):void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1619704-continuespeaking
    continueSpeaking():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1619689-pausespeakingatboundary
    pauseSpeakingAtBoundary(boundary: AVSpeechBoundary):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1619676-stopspeakingatboundary
    stopSpeakingAtBoundary(boundary: AVSpeechBoundary):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1619680-speaking
    speaking(): BOOL;
    setSpeaking(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1619692-paused
    paused(): BOOL;
    setPaused(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1619709-delegate
    delegate(): AVSpeechSynthesizerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/3362518-usesapplicationaudiosession
    usesApplicationAudioSession(): BOOL;
    setUsesApplicationAudioSession(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/3132070-mixtotelephonyuplink
    mixToTelephonyUplink(): BOOL;
    setMixToTelephonyUplink(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/1648692-outputchannels
    outputChannels(): AVAudioSessionChannelDescription;
    setOutputChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizer/3141659-writeutterance
    writeUtterance_toBufferCallback(utterance: AVSpeechUtterance, bufferCallback: AVSpeechSynthesizerBufferCallback):void;
    //
    alloc():AVSpeechSynthesizer;
    //
    init():AVSpeechSynthesizer;
  }
}

declare const AVSpeechSynthesizer: cocoascript.AVSpeechSynthesizer;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequestdirection
  type AVSampleBufferRequestDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrequestmode
  type AVSampleBufferRequestMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avauthorizationstatus
  type AVAuthorizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * Information about OS and hardware status affecting capture system performance and availability.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurestate
   */
  interface AVCaptureSystemPressureState extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurestate/2933365-level
    level(): AVCaptureSystemPressureLevel;
    setLevel(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurestate/2933367-factors
    factors(): AVCaptureSystemPressureFactors;
    setFactors(): void;
    //
    alloc():AVCaptureSystemPressureState;
    //
    init():AVCaptureSystemPressureState;
  }
}

declare const AVCaptureSystemPressureState: cocoascript.AVCaptureSystemPressureState;
// doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmattetypehair
declare const AVSemanticSegmentationMatteTypeHair: cocoascript.AVSemanticSegmentationMatteType;
// doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmattetypeskin
declare const AVSemanticSegmentationMatteTypeSkin: cocoascript.AVSemanticSegmentationMatteType;
// doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmattetypeteeth
declare const AVSemanticSegmentationMatteTypeTeeth: cocoascript.AVSemanticSegmentationMatteType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturesessioninterruptionreason
  type AVCaptureSessionInterruptionReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset
  type AVCaptureSessionPreset = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpresetinputpriority
declare const AVCaptureSessionPresetInputPriority: cocoascript.AVCaptureSessionPreset;
declare namespace cocoascript {
  /**
   * A query for finding and monitoring available capture devices.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedevicediscoverysession
   */
  interface AVCaptureDeviceDiscoverySession extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevicediscoverysession/2361539-discoverysessionwithdevicetypes
    discoverySessionWithDeviceTypes_mediaType_position(deviceTypes: AVCaptureDeviceType, mediaType: AVMediaType, position: AVCaptureDevicePosition):AVCaptureDeviceDiscoverySession;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevicediscoverysession/2361002-devices
    devices(): AVCaptureDevice;
    setDevices(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedevicediscoverysession/3153004-supportedmulticamdevicesets
    supportedMultiCamDeviceSets(): AVCaptureDevice;
    setSupportedMultiCamDeviceSets(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinputsource
   */
  interface AVCaptureDeviceInputSource extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinputsource/1387788-inputsourceid
    inputSourceID(): string | cocoascript.NSString;
    setInputSourceID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceinputsource/1390422-localizedname
    localizedName(): string | cocoascript.NSString;
    setLocalizedName(): void;
    //
    alloc():AVCaptureDeviceInputSource;
    //
    init():AVCaptureDeviceInputSource;
  }
}

declare const AVCaptureDeviceInputSource: cocoascript.AVCaptureDeviceInputSource;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceposition
  type AVCaptureDevicePosition = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetype
  type AVCaptureDeviceType = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A set of media format and capture settings (such as video resolution and frame rate) that you use to configure a capture device.
   * doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat
   */
  interface AVCaptureDeviceFormat extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1388503-mediatype
    mediaType(): AVMediaType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1389445-formatdescription
    formatDescription(): CMFormatDescriptionRef;
    setFormatDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1648611-supportedcolorspaces
    supportedColorSpaces(): NSNumber;
    setSupportedColorSpaces(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624571-videohdrsupported
    videoHDRSupported(): BOOL;
    setVideoHDRSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/2865757-unsupportedcaptureoutputclasses
    unsupportedCaptureOutputClasses(): Class;
    setUnsupportedCaptureOutputClasses(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624620-highresolutionstillimagedimensio
    highResolutionStillImageDimensions(): CMVideoDimensions;
    setHighResolutionStillImageDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624592-minexposureduration
    minExposureDuration(): CMTime;
    setMinExposureDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624582-maxexposureduration
    maxExposureDuration(): CMTime;
    setMaxExposureDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624603-miniso
    minISO(): number;
    setMinISO(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624601-maxiso
    maxISO(): number;
    setMaxISO(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624600-autofocussystem
    autoFocusSystem(): AVCaptureAutoFocusSystem;
    setAutoFocusSystem(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624569-videofieldofview
    videoFieldOfView(): number;
    setVideoFieldOfView(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624635-videomaxzoomfactor
    videoMaxZoomFactor(): CGFloat;
    setVideoMaxZoomFactor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624638-videozoomfactorupscalethreshold
    videoZoomFactorUpscaleThreshold(): CGFloat;
    setVideoZoomFactorUpscaleThreshold(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624597-videobinned
    videoBinned(): BOOL;
    setVideoBinned(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/3153006-multicamsupported
    multiCamSupported(): BOOL;
    setMultiCamSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/3153005-highestphotoqualitysupported
    highestPhotoQualitySupported(): BOOL;
    setHighestPhotoQualitySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1387592-videosupportedframerateranges
    videoSupportedFrameRateRanges(): AVFrameRateRange;
    setVideoSupportedFrameRateRanges(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624587-isvideostabilizationmodesupporte
    isVideoStabilizationModeSupported(videoStabilizationMode: AVCaptureVideoStabilizationMode):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/3194616-geometricdistortioncorrectedvide
    geometricDistortionCorrectedVideoFieldOfView(): number;
    setGeometricDistortionCorrectedVideoFieldOfView(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/1624634-videostabilizationsupported
    videoStabilizationSupported(): BOOL;
    setVideoStabilizationSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/3375757-globaltonemappingsupported
    globalToneMappingSupported(): BOOL;
    setGlobalToneMappingSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/2865753-supporteddepthdataformats
    supportedDepthDataFormats(): AVCaptureDeviceFormat;
    setSupportedDepthDataFormats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/2977521-portraiteffectsmattestillimagede
    portraitEffectsMatteStillImageDeliverySupported(): BOOL;
    setPortraitEffectsMatteStillImageDeliverySupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/2865752-videominzoomfactorfordepthdatade
    videoMinZoomFactorForDepthDataDelivery(): CGFloat;
    setVideoMinZoomFactorForDepthDataDelivery(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturedeviceformat/2865756-videomaxzoomfactorfordepthdatade
    videoMaxZoomFactorForDepthDataDelivery(): CGFloat;
    setVideoMaxZoomFactorForDepthDataDelivery(): void;
    //
    alloc():AVCaptureDeviceFormat;
    //
    init():AVCaptureDeviceFormat;
  }
}

declare const AVCaptureDeviceFormat: cocoascript.AVCaptureDeviceFormat;
// doc://com.apple.documentation/documentation/avfoundation/avcaptureexposuretargetbiascurrent
declare const AVCaptureExposureTargetBiasCurrent: number;
// doc://com.apple.documentation/documentation/avfoundation/avcaptureexposuredurationcurrent
declare const AVCaptureExposureDurationCurrent: cocoascript.CMTime;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcaptureexposuremode
  type AVCaptureExposureMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturefocusmode
  type AVCaptureFocusMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcaptureautofocusrangerestriction
  type AVCaptureAutoFocusRangeRestriction = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcaptureflashmode
  type AVCaptureFlashMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avcapturemaxavailabletorchlevel
declare const AVCaptureMaxAvailableTorchLevel: number;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturetorchmode
  type AVCaptureTorchMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetransportcontrolsplaybackmode
  type AVCaptureDeviceTransportControlsPlaybackMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetransportcontrolsspeed
  type AVCaptureDeviceTransportControlsSpeed = number;
}
// doc://com.apple.documentation/documentation/avfoundation/avcapturelenspositioncurrent
declare const AVCaptureLensPositionCurrent: number;
// doc://com.apple.documentation/documentation/avfoundation/avcapturewhitebalancegainscurrent
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
  // doc://com.apple.documentation/documentation/avfoundation/avcapturewhitebalancemode
  type AVCaptureWhiteBalanceMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avcaptureisocurrent
declare const AVCaptureISOCurrent: number;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturecolorspace
  type AVCaptureColorSpace = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpresetphoto
declare const AVCaptureSessionPresetPhoto: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypehevc
declare const AVVideoCodecTypeHEVC: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  /**
   * Information about the camera characteristics used to capture images and depth data.
   * doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata
   */
  interface AVCameraCalibrationData extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata/2881135-intrinsicmatrix
    intrinsicMatrix(): matrix_float3x3;
    setIntrinsicMatrix(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata/2881134-intrinsicmatrixreferencedimensio
    intrinsicMatrixReferenceDimensions(): CGSize;
    setIntrinsicMatrixReferenceDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata/2881130-extrinsicmatrix
    extrinsicMatrix(): matrix_float4x3;
    setExtrinsicMatrix(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata/2881128-pixelsize
    pixelSize(): number;
    setPixelSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata/2881129-lensdistortionlookuptable
    lensDistortionLookupTable(): NSData;
    setLensDistortionLookupTable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata/2881132-inverselensdistortionlookuptable
    inverseLensDistortionLookupTable(): NSData;
    setInverseLensDistortionLookupTable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcameracalibrationdata/2881131-lensdistortioncenter
    lensDistortionCenter(): CGPoint;
    setLensDistortionCenter(): void;
    //
    alloc():AVCameraCalibrationData;
    //
    init():AVCameraCalibrationData;
  }
}

declare const AVCameraCalibrationData: cocoascript.AVCameraCalibrationData;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturelensstabilizationstatus
  type AVCaptureLensStabilizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A description of the features and settings in use for an in-progress or complete photo capture request.
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings
   */
  interface AVCaptureResolvedPhotoSettings extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/1648656-uniqueid
    uniqueID(): number;
    setUniqueID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/2873973-expectedphotocount
    expectedPhotoCount(): NSUInteger;
    setExpectedPhotoCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/1648693-flashenabled
    flashEnabled(): BOOL;
    setFlashEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/2968221-redeyereductionenabled
    redEyeReductionEnabled(): BOOL;
    setRedEyeReductionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/3192194-virtualdevicefusionenabled
    virtualDeviceFusionEnabled(): BOOL;
    setVirtualDeviceFusionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/3566333-contentawaredistortioncorrection
    contentAwareDistortionCorrectionEnabled(): BOOL;
    setContentAwareDistortionCorrectionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/1648771-stillimagestabilizationenabled
    stillImageStabilizationEnabled(): BOOL;
    setStillImageStabilizationEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/2726863-dualcamerafusionenabled
    dualCameraFusionEnabled(): BOOL;
    setDualCameraFusionEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/1648782-photodimensions
    photoDimensions(): CMVideoDimensions;
    setPhotoDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/1648762-rawphotodimensions
    rawPhotoDimensions(): CMVideoDimensions;
    setRawPhotoDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/1648753-previewdimensions
    previewDimensions(): CMVideoDimensions;
    setPreviewDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/2873967-embeddedthumbnaildimensions
    embeddedThumbnailDimensions(): CMVideoDimensions;
    setEmbeddedThumbnailDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/3019551-rawembeddedthumbnaildimensions
    rawEmbeddedThumbnailDimensions(): CMVideoDimensions;
    setRawEmbeddedThumbnailDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/1648781-livephotomoviedimensions
    livePhotoMovieDimensions(): CMVideoDimensions;
    setLivePhotoMovieDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/2977533-portraiteffectsmattedimensions
    portraitEffectsMatteDimensions(): CMVideoDimensions;
    setPortraitEffectsMatteDimensions(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/3153015-dimensionsforsemanticsegmentatio
    dimensionsForSemanticSegmentationMatteOfType(semanticSegmentationMatteType: AVSemanticSegmentationMatteType):CMVideoDimensions;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureresolvedphotosettings/3183001-photoprocessingtimerange
    photoProcessingTimeRange(): CMTimeRange;
    setPhotoProcessingTimeRange(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturephotobracketsettings
   */
  interface AVCapturePhotoBracketSettings extends AVCapturePhotoSettings {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotobracketsettings/2873908-photobracketsettingswithrawpixel
    photoBracketSettingsWithRawPixelFormatType_rawFileType_processedFormat_processedFileType_bracketedSettings(rawPixelFormatType: any, rawFileType: AVFileType, processedFormat: AVCapturePhotoBracketSettings, processedFileType: AVFileType, bracketedSettings: AVCaptureBracketedStillImageSettings):AVCapturePhotoBracketSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotobracketsettings/2127694-photobracketsettingswithrawpixel
    photoBracketSettingsWithRawPixelFormatType_processedFormat_bracketedSettings(rawPixelFormatType: any, processedFormat: AVCapturePhotoBracketSettings, bracketedSettings: AVCaptureBracketedStillImageSettings):AVCapturePhotoBracketSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotobracketsettings/1648613-bracketedsettings
    bracketedSettings(): AVCaptureBracketedStillImageSettings;
    setBracketedSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturephotobracketsettings/1648660-lensstabilizationenabled
    lensStabilizationEnabled(): BOOL;
    setLensStabilizationEnabled(): void;
    //
    alloc():AVCapturePhotoBracketSettings;
    //
    init():AVCapturePhotoBracketSettings;
  }
}

declare const AVCapturePhotoBracketSettings: cocoascript.AVCapturePhotoBracketSettings;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturephotoqualityprioritization
  type AVCapturePhotoQualityPrioritization = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltindualcamera
declare const AVCaptureDeviceTypeBuiltInDualCamera: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltintruedepthcamera
declare const AVCaptureDeviceTypeBuiltInTrueDepthCamera: cocoascript.AVCaptureDeviceType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avdepthdataaccuracy
  type AVDepthDataAccuracy = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avdepthdataquality
  type AVDepthDataQuality = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmattetype
  type AVSemanticSegmentationMatteType = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypeh264
declare const AVVideoCodecTypeH264: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avvideocodectype
  type AVVideoCodecType = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypejpeg
declare const AVVideoCodecTypeJPEG: cocoascript.AVVideoCodecType;
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypeappleprores422
declare const AVVideoCodecTypeAppleProRes422: cocoascript.AVVideoCodecType;
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypeappleprores4444
declare const AVVideoCodecTypeAppleProRes4444: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  /**
   * A specific stream of data provided by a capture input.
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport
   */
  interface AVCaptureInputPort extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport/1386833-enabled
    enabled(): BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport/1387702-input
    input(): AVCaptureInput;
    setInput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport/1387120-mediatype
    mediaType(): AVMediaType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport/1385890-formatdescription
    formatDescription(): CMFormatDescriptionRef;
    setFormatDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport/1385908-clock
    clock(): CMClockRef;
    setClock(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport/3114575-sourcedevicetype
    sourceDeviceType(): AVCaptureDeviceType;
    setSourceDeviceType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureinputport/3114574-sourcedeviceposition
    sourceDevicePosition(): AVCaptureDevicePosition;
    setSourceDevicePosition(): void;
    //
    alloc():AVCaptureInputPort;
    //
    init():AVCaptureInputPort;
  }
}

declare const AVCaptureInputPort: cocoascript.AVCaptureInputPort;
// doc://com.apple.documentation/documentation/avfoundation/avcaptureinputportformatdescriptiondidchangenotification
declare const AVCaptureInputPortFormatDescriptionDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttype
  type AVMetadataObjectType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcaptureoutputdatadroppedreason
  type AVCaptureOutputDataDroppedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturevideoorientation
  type AVCaptureVideoOrientation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avvideofieldmode
  type AVVideoFieldMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioninterruptionnotification
declare const AVAudioSessionInterruptionNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmediaserviceswerelostnotification
declare const AVAudioSessionMediaServicesWereLostNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmediaserviceswereresetnotification
declare const AVAudioSessionMediaServicesWereResetNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionroutechangenotification
declare const AVAudioSessionRouteChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionsilencesecondaryaudiohintnotification
declare const AVAudioSessionSilenceSecondaryAudioHintNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/avfoundation/avroutedetectormultipleroutesdetecteddidchangenotification
declare const AVRouteDetectorMultipleRoutesDetectedDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  /**
   * An object that provides information about segment data.
   * doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreport
   */
  interface AVAssetSegmentReport extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreport/3546570-segmenttype
    segmentType(): AVAssetSegmentType;
    setSegmentType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreport/3546571-trackreports
    trackReports(): AVAssetSegmentTrackReport;
    setTrackReports(): void;
    //
    alloc():AVAssetSegmentReport;
    //
    init():AVAssetSegmentReport;
  }
}

declare const AVAssetSegmentReport: cocoascript.AVAssetSegmentReport;
declare namespace cocoascript {
  /**
   * An object used to write media data to a new file of a specified audiovisual container type.
   * doc://com.apple.documentation/documentation/avfoundation/avassetwriter
   */
  interface AVAssetWriter extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1426663-assetwriterwithurl
    assetWriterWithURL_fileType_error(outputURL: NSURL, outputFileType: AVFileType, outError: NSError):AVAssetWriter;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1389201-initwithurl
    initWithURL_fileType_error(outputURL: NSURL, outputFileType: AVFileType, outError: NSError):AVAssetWriter;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3563935-initwithcontenttype
    initWithContentType(outputContentType: UTType):AVAssetWriter;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1388730-availablemediatypes
    availableMediaTypes(): AVMediaType;
    setAvailableMediaTypes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1386724-startwriting
    startWriting():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1426644-finishwriting
    finishWriting():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1390432-finishwritingwithcompletionhandl
    finishWritingWithCompletionHandler(handler: void):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1387234-cancelwriting
    cancelWriting():void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1387731-outputurl
    outputURL(): NSURL;
    setOutputURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1387349-outputfiletype
    outputFileType(): AVFileType;
    setOutputFileType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1390725-error
    error(): NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1389335-status
    status(): AVAssetWriterStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1387445-directoryfortemporaryfiles
    directoryForTemporaryFiles(): NSURL;
    setDirectoryForTemporaryFiles(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1388264-inputs
    inputs(): AVAssetWriterInput;
    setInputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1390389-addinput
    addInput(input: AVAssetWriterInput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1387863-canaddinput
    canAddInput(input: AVAssetWriterInput):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1389908-startsessionatsourcetime
    startSessionAtSourceTime(startTime: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1389921-endsessionatsourcetime
    endSessionAtSourceTime(endTime: CMTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1388842-canapplyoutputsettings
    canApplyOutputSettings_forMediaType(outputSettings: AVAssetWriter, mediaType: AVMediaType):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1387974-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1387469-moviefragmentinterval
    movieFragmentInterval(): CMTime;
    setMovieFragmentInterval(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1388408-overalldurationhint
    overallDurationHint(): CMTime;
    setOverallDurationHint(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1386762-movietimescale
    movieTimeScale(): CMTimeScale;
    setMovieTimeScale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1389811-shouldoptimizefornetworkuse
    shouldOptimizeForNetworkUse(): BOOL;
    setShouldOptimizeForNetworkUse(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1385643-addinputgroup
    addInputGroup(inputGroup: AVAssetWriterInputGroup):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1386698-canaddinputgroup
    canAddInputGroup(inputGroup: AVAssetWriterInputGroup):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/1388432-inputgroups
    inputGroups(): AVAssetWriterInputGroup;
    setInputGroups(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3546585-delegate
    delegate(): AVAssetWriterDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3577532-initialmoviefragmentsequencenumb
    initialMovieFragmentSequenceNumber(): NSInteger;
    setInitialMovieFragmentSequenceNumber(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3546588-initialsegmentstarttime
    initialSegmentStartTime(): CMTime;
    setInitialSegmentStartTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3546589-outputfiletypeprofile
    outputFileTypeProfile(): AVFileTypeProfile;
    setOutputFileTypeProfile(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3546590-preferredoutputsegmentinterval
    preferredOutputSegmentInterval(): CMTime;
    setPreferredOutputSegmentInterval(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3626025-producescombinablefragments
    producesCombinableFragments(): BOOL;
    setProducesCombinableFragments(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriter/3546586-flushsegment
    flushSegment():void;
    //
    alloc():AVAssetWriter;
    //
    init():AVAssetWriter;
  }
}

declare const AVAssetWriter: cocoascript.AVAssetWriter;
declare namespace cocoascript {
  /**
   * A writer used to append media samples to a single track of an asset writer's output file.
   * doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput
   */
  interface AVAssetWriterInput extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1449070-assetwriterinputwithmediatype
    assetWriterInputWithMediaType_outputSettings(mediaType: AVMediaType, outputSettings: AVAssetWriterInput):AVAssetWriterInput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1449091-assetwriterinputwithmediatype
    assetWriterInputWithMediaType_outputSettings_sourceFormatHint(mediaType: AVMediaType, outputSettings: AVAssetWriterInput, sourceFormatHint: CMFormatDescriptionRef):AVAssetWriterInput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1385912-initwithmediatype
    initWithMediaType_outputSettings(mediaType: AVMediaType, outputSettings: AVAssetWriterInput):AVAssetWriterInput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1389994-initwithmediatype
    initWithMediaType_outputSettings_sourceFormatHint(mediaType: AVMediaType, outputSettings: AVAssetWriterInput, sourceFormatHint: CMFormatDescriptionRef):AVAssetWriterInput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1389566-appendsamplebuffer
    appendSampleBuffer(sampleBuffer: CMSampleBufferRef):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1389084-readyformoremediadata
    readyForMoreMediaData(): BOOL;
    setReadyForMoreMediaData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1390122-markasfinished
    markAsFinished():void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1387508-requestmediadatawhenreadyonqueue
    requestMediaDataWhenReadyOnQueue_usingBlock(queue: dispatch_queue_t, block: void):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1386328-metadata
    metadata(): AVMetadataItem;
    setMetadata(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1390183-transform
    transform(): CGAffineTransform;
    setTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1386902-mediatimescale
    mediaTimeScale(): CMTimeScale;
    setMediaTimeScale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1387827-expectsmediadatainrealtime
    expectsMediaDataInRealTime(): BOOL;
    setExpectsMediaDataInRealTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1386764-marksoutputtrackasenabled
    marksOutputTrackAsEnabled(): BOOL;
    setMarksOutputTrackAsEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1387437-naturalsize
    naturalSize(): CGSize;
    setNaturalSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1389949-preferredvolume
    preferredVolume(): number;
    setPreferredVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1388347-addtrackassociationwithtrackofin
    addTrackAssociationWithTrackOfInput_type(input: AVAssetWriterInput, trackAssociationType: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1388292-canaddtrackassociationwithtracko
    canAddTrackAssociationWithTrackOfInput_type(input: AVAssetWriterInput, trackAssociationType: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1385565-mediatype
    mediaType(): AVMediaType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1388406-outputsettings
    outputSettings(): id;
    setOutputSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1387647-sourceformathint
    sourceFormatHint(): CMFormatDescriptionRef;
    setSourceFormatHint(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1386316-samplereferencebaseurl
    sampleReferenceBaseURL(): NSURL;
    setSampleReferenceBaseURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1390768-extendedlanguagetag
    extendedLanguageTag(): string | cocoascript.NSString;
    setExtendedLanguageTag(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1388507-languagecode
    languageCode(): string | cocoascript.NSString;
    setLanguageCode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1388284-canperformmultiplepasses
    canPerformMultiplePasses(): BOOL;
    setCanPerformMultiplePasses(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1390627-currentpassdescription
    currentPassDescription(): AVAssetWriterInputPassDescription;
    setCurrentPassDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1389652-markcurrentpassasfinished
    markCurrentPassAsFinished():void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1386570-performsmultipassencodingifsuppo
    performsMultiPassEncodingIfSupported(): BOOL;
    setPerformsMultiPassEncodingIfSupported(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1388163-preferredmediachunkalignment
    preferredMediaChunkAlignment(): NSInteger;
    setPreferredMediaChunkAlignment(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1390463-preferredmediachunkduration
    preferredMediaChunkDuration(): CMTime;
    setPreferredMediaChunkDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/1388489-respondtoeachpassdescriptiononqu
    respondToEachPassDescriptionOnQueue_usingBlock(queue: dispatch_queue_t, block: dispatch_block_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinput/2867633-mediadatalocation
    mediaDataLocation(): AVAssetWriterInputMediaDataLocation;
    setMediaDataLocation(): void;
    //
    alloc():AVAssetWriterInput;
    //
    init():AVAssetWriterInput;
  }
}

declare const AVAssetWriterInput: cocoascript.AVAssetWriterInput;
declare namespace cocoascript {
  /**
   * A buffer used to append video samples packaged as pixel buffers to a single asset writer input.
   * doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpixelbufferadaptor
   */
  interface AVAssetWriterInputPixelBufferAdaptor extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1449096-assetwriterinputpixelbufferadapt
    assetWriterInputPixelBufferAdaptorWithAssetWriterInput_sourcePixelBufferAttributes(input: AVAssetWriterInput, sourcePixelBufferAttributes: AVAssetWriterInputPixelBufferAdaptor):AVAssetWriterInputPixelBufferAdaptor;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1390639-initwithassetwriterinput
    initWithAssetWriterInput_sourcePixelBufferAttributes(input: AVAssetWriterInput, sourcePixelBufferAttributes: AVAssetWriterInputPixelBufferAdaptor):AVAssetWriterInputPixelBufferAdaptor;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1388102-appendpixelbuffer
    appendPixelBuffer_withPresentationTime(pixelBuffer: CVPixelBufferRef, presentationTime: CMTime):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1387565-assetwriterinput
    assetWriterInput(): AVAssetWriterInput;
    setAssetWriterInput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1389662-pixelbufferpool
    pixelBufferPool(): CVPixelBufferPoolRef;
    setPixelBufferPool(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/1387829-sourcepixelbufferattributes
    sourcePixelBufferAttributes(): id;
    setSourcePixelBufferAttributes(): void;
    //
    alloc():AVAssetWriterInputPixelBufferAdaptor;
    //
    init():AVAssetWriterInputPixelBufferAdaptor;
  }
}

declare const AVAssetWriterInputPixelBufferAdaptor: cocoascript.AVAssetWriterInputPixelBufferAdaptor;
declare namespace cocoascript {
  /**
   * An object that defines an interface for writing metadata packaged as timed metadata groups into a single asset writer input.
   * doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmetadataadaptor
   */
  interface AVAssetWriterInputMetadataAdaptor extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmetadataadaptor/1389706-initwithassetwriterinput
    initWithAssetWriterInput(input: AVAssetWriterInput):AVAssetWriterInputMetadataAdaptor;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmetadataadaptor/1449094-assetwriterinputmetadataadaptorw
    assetWriterInputMetadataAdaptorWithAssetWriterInput(input: AVAssetWriterInput):AVAssetWriterInputMetadataAdaptor;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmetadataadaptor/1389014-appendtimedmetadatagroup
    appendTimedMetadataGroup(timedMetadataGroup: AVTimedMetadataGroup):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmetadataadaptor/1386633-assetwriterinput
    assetWriterInput(): AVAssetWriterInput;
    setAssetWriterInput(): void;
    //
    alloc():AVAssetWriterInputMetadataAdaptor;
    //
    init():AVAssetWriterInputMetadataAdaptor;
  }
}

declare const AVAssetWriterInputMetadataAdaptor: cocoascript.AVAssetWriterInputMetadataAdaptor;
declare namespace cocoascript {
  /**
   * A group of tracks in a mutually exclusive relationship.
   * doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputgroup
   */
  interface AVAssetWriterInputGroup extends AVMediaSelectionGroup {
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputgroup/1426655-assetwriterinputgroupwithinputs
    assetWriterInputGroupWithInputs_defaultInput(inputs: AVAssetWriterInput, defaultInput: AVAssetWriterInput):AVAssetWriterInputGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputgroup/1389502-initwithinputs
    initWithInputs_defaultInput(inputs: AVAssetWriterInput, defaultInput: AVAssetWriterInput):AVAssetWriterInputGroup;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputgroup/1389698-defaultinput
    defaultInput(): AVAssetWriterInput;
    setDefaultInput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputgroup/1388226-inputs
    inputs(): AVAssetWriterInput;
    setInputs(): void;
    //
    alloc():AVAssetWriterInputGroup;
    //
    init():AVAssetWriterInputGroup;
  }
}

declare const AVAssetWriterInputGroup: cocoascript.AVAssetWriterInputGroup;
declare namespace cocoascript {
  /**
   * Methods you can implement to provide alternative attributed-string output.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutputpushdelegate
   */
  interface AVPlayerItemLegibleOutputPushDelegate extends AVPlayerItemOutputPushDelegate {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutputpushdelegate/1386790-legibleoutput
    legibleOutput_didOutputAttributedStrings_nativeSampleBuffers_forItemTime(output: AVPlayerItemLegibleOutput, strings: NSAttributedString, nativeSamples: NSArray, itemTime: CMTime):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods you can implement to provide additional metadata.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate
   */
  interface AVPlayerItemMetadataOutputPushDelegate extends AVPlayerItemOutputPushDelegate {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate/1388071-metadataoutput
    metadataOutput_didOutputTimedMetadataGroups_fromPlayerItemTrack(output: AVPlayerItemMetadataOutput, groups: AVTimedMetadataGroup, track: AVPlayerItemTrack):void;
  }
}
declare namespace cocoascript {
  /**
   * The abstract class that defines the common interface for moving samples from an asset to a player.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutput
   */
  interface AVPlayerItemOutput extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutput/1386538-itemtimeforhosttime
    itemTimeForHostTime(hostTimeInSeconds: CFTimeInterval):CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutput/1386962-itemtimeformachabsolutetime
    itemTimeForMachAbsoluteTime(machAbsoluteTime: number):CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutput/1388333-itemtimeforcvtimestamp
    itemTimeForCVTimeStamp(timestamp: CVTimeStamp):CMTime;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemoutput/1386133-suppressesplayerrendering
    suppressesPlayerRendering(): BOOL;
    setSuppressesPlayerRendering(): void;
    //
    alloc():AVPlayerItemOutput;
    //
    init():AVPlayerItemOutput;
  }
}

declare const AVPlayerItemOutput: cocoascript.AVPlayerItemOutput;
declare namespace cocoascript {
  /**
   * An object that coordinates the output of content associated with a Core Video pixel buffer.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput
   */
  interface AVPlayerItemVideoOutput extends AVPlayerItemOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1389231-initwithpixelbufferattributes
    initWithPixelBufferAttributes(pixelBufferAttributes: AVPlayerItemVideoOutput):AVPlayerItemVideoOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1643270-initwithoutputsettings
    initWithOutputSettings(outputSettings: AVPlayerItemVideoOutput):AVPlayerItemVideoOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1386824-setdelegate
    setDelegate_queue(delegate: AVPlayerItemOutputPullDelegate, delegateQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1385827-delegate
    delegate(): AVPlayerItemOutputPullDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1388108-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1386046-requestnotificationofmediadatach
    requestNotificationOfMediaDataChangeWithAdvanceInterval(interval: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1386444-hasnewpixelbufferforitemtime
    hasNewPixelBufferForItemTime(itemTime: CMTime):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemvideooutput/1386148-copypixelbufferforitemtime
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
   * An object that can vend media with a legible characteristic as an attributed string.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutput
   */
  interface AVPlayerItemLegibleOutput extends AVPlayerItemOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutput/1390500-initwithmediasubtypesfornativere
    initWithMediaSubtypesForNativeRepresentation(subtypes: NSNumber):AVPlayerItemLegibleOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutput/1385803-textstylingresolution
    textStylingResolution(): AVPlayerItemLegibleOutputTextStylingResolution;
    setTextStylingResolution(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutput/1387877-delegate
    delegate(): AVPlayerItemLegibleOutputPushDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutput/1386204-setdelegate
    setDelegate_queue(delegate: AVPlayerItemLegibleOutputPushDelegate, delegateQueue: dispatch_queue_t):void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutput/1388098-advanceintervalfordelegateinvoca
    advanceIntervalForDelegateInvocation(): NSTimeInterval;
    setAdvanceIntervalForDelegateInvocation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutput/1386275-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(): void;
    //
    alloc():AVPlayerItemLegibleOutput;
    //
    init():AVPlayerItemLegibleOutput;
  }
}

declare const AVPlayerItemLegibleOutput: cocoascript.AVPlayerItemLegibleOutput;
declare namespace cocoascript {
  /**
   * An object used to vend collections of metadata items carried in metadata tracks.
   * doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutput
   */
  interface AVPlayerItemMetadataOutput extends AVPlayerItemOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutput/1390205-initwithidentifiers
    initWithIdentifiers(identifiers: string | cocoascript.NSString):AVPlayerItemMetadataOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutput/1387372-advanceintervalfordelegateinvoca
    advanceIntervalForDelegateInvocation(): NSTimeInterval;
    setAdvanceIntervalForDelegateInvocation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutput/1387200-delegate
    delegate(): AVPlayerItemMetadataOutputPushDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutput/1387265-delegatequeue
    delegateQueue(): dispatch_queue_t;
    setDelegateQueue(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avplayeritemmetadataoutput/1385728-setdelegate
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
   * Properties that are applicable to the input bus of a mixer node.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiomixing
   */
  interface AVAudioMixing extends AVAudio3DMixing {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixing/1390356-destinationformixer
    destinationForMixer_bus(mixer: AVAudioNode, bus: AVAudioNodeBus):AVAudioMixingDestination;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixing/1387422-volume
    volume(): number;
    setVolume(): void;
  }
}
declare namespace cocoascript {
  /**
   * A mixer node that simulates a 3D audio environment.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode
   */
  interface AVAudioEnvironmentNode extends AVAudioNode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1643654-init
    init():AVAudioEnvironmentNode;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1387396-distanceattenuationparameters
    distanceAttenuationParameters(): AVAudioEnvironmentDistanceAttenuationParameters;
    setDistanceAttenuationParameters(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1386966-listenerangularorientation
    listenerAngularOrientation(): AVAudio3DAngularOrientation;
    setListenerAngularOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1389883-listenervectororientation
    listenerVectorOrientation(): AVAudio3DVectorOrientation;
    setListenerVectorOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1387947-listenerposition
    listenerPosition(): AVAudio3DPoint;
    setListenerPosition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1389020-reverbparameters
    reverbParameters(): AVAudioEnvironmentReverbParameters;
    setReverbParameters(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1386300-outputvolume
    outputVolume(): number;
    setOutputVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1390049-applicablerenderingalgorithms
    applicableRenderingAlgorithms(): NSNumber;
    setApplicableRenderingAlgorithms(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/1385841-nextavailableinputbus
    nextAvailableInputBus(): AVAudioNodeBus;
    setNextAvailableInputBus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentnode/3114278-outputtype
    outputType(): AVAudioEnvironmentOutputType;
    setOutputType(): void;
    //
    alloc():AVAudioEnvironmentNode;
    //
    init():AVAudioEnvironmentNode;
  }
}

declare const AVAudioEnvironmentNode: cocoascript.AVAudioEnvironmentNode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixingrenderingalgorithm
  type AVAudio3DMixingRenderingAlgorithm = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that encapsulates the parameters that you use to control the reverb of the environment node class.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentreverbparameters
   */
  interface AVAudioEnvironmentReverbParameters extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentreverbparameters/1386259-enable
    enable(): BOOL;
    setEnable(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentreverbparameters/1387313-filterparameters
    filterParameters(): AVAudioUnitEQFilterParameters;
    setFilterParameters(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentreverbparameters/1387891-level
    level(): number;
    setLevel(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentreverbparameters/1390731-loadfactoryreverbpreset
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters
   */
  interface AVAudioEnvironmentDistanceAttenuationParameters extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1387431-distanceattenuationmodel
    distanceAttenuationModel(): AVAudioEnvironmentDistanceAttenuationModel;
    setDistanceAttenuationModel(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1387580-maximumdistance
    maximumDistance(): number;
    setMaximumDistance(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1386982-referencedistance
    referenceDistance(): number;
    setReferenceDistance(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentdistanceattenuationparameters/1386448-rollofffactor
    rolloffFactor(): number;
    setRolloffFactor(): void;
    //
    alloc():AVAudioEnvironmentDistanceAttenuationParameters;
    //
    init():AVAudioEnvironmentDistanceAttenuationParameters;
  }
}

declare const AVAudioEnvironmentDistanceAttenuationParameters: cocoascript.AVAudioEnvironmentDistanceAttenuationParameters;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentoutputtype
  type AVAudioEnvironmentOutputType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixingsourcemode
  type AVAudio3DMixingSourceMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudio3dmixingpointsourceinheadmode
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
  // doc://com.apple.documentation/documentation/avfoundation/avaudiospatializationformats
  type AVAudioSpatializationFormats = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequestretryreason
  type AVContentKeyRequestRetryReason = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A protocol for requiring decryption keys for media data.
   * doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrecipient
   */
  interface AVContentKeyRecipient {
    // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrecipient/2799194-mayrequirecontentkeysformediadat
    mayRequireContentKeysForMediaDataProcessing(): BOOL;
    setMayRequireContentKeysForMediaDataProcessing(): void;
  }
}
declare namespace cocoascript {
  /**
   * An object that reads video frames composited from the frames in one or more tracks of a reader's assets.
   * doc://com.apple.documentation/documentation/avfoundation/avassetreadervideocompositionoutput
   */
  interface AVAssetReaderVideoCompositionOutput extends AVAssetReaderOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadervideocompositionoutput/1490331-assetreadervideocompositionoutpu
    assetReaderVideoCompositionOutputWithVideoTracks_videoSettings(videoTracks: AVAssetTrack, videoSettings: AVAssetReaderVideoCompositionOutput):AVAssetReaderVideoCompositionOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadervideocompositionoutput/1386676-initwithvideotracks
    initWithVideoTracks_videoSettings(videoTracks: AVAssetTrack, videoSettings: AVAssetReaderVideoCompositionOutput):AVAssetReaderVideoCompositionOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadervideocompositionoutput/1388927-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadervideocompositionoutput/1388310-customvideocompositor
    customVideoCompositor(): AVVideoCompositing;
    setCustomVideoCompositor(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadervideocompositionoutput/1389247-videosettings
    videoSettings(): id;
    setVideoSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadervideocompositionoutput/1389000-videotracks
    videoTracks(): AVAssetTrack;
    setVideoTracks(): void;
    //
    alloc():AVAssetReaderVideoCompositionOutput;
    //
    init():AVAssetReaderVideoCompositionOutput;
  }
}

declare const AVAssetReaderVideoCompositionOutput: cocoascript.AVAssetReaderVideoCompositionOutput;
declare namespace cocoascript {
  /**
   * An object that defines the context within which custom compositors render new output pixel buffers.
   * doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext
   */
  interface AVVideoCompositionRenderContext extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1386802-newpixelbuffer
    newPixelBuffer():CVPixelBufferRef;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1390647-videocomposition
    videoComposition(): AVVideoComposition;
    setVideoComposition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1388758-highqualityrendering
    highQualityRendering(): BOOL;
    setHighQualityRendering(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1387408-renderscale
    renderScale(): number;
    setRenderScale(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1389831-rendertransform
    renderTransform(): CGAffineTransform;
    setRenderTransform(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1389718-size
    size(): CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1387026-edgewidths
    edgeWidths(): AVEdgeWidths;
    setEdgeWidths(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrendercontext/1389800-pixelaspectratio
    pixelAspectRatio(): AVPixelAspectRatio;
    setPixelAspectRatio(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrenderhint
   */
  interface AVVideoCompositionRenderHint extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrenderhint/3227889-startcompositiontime
    startCompositionTime(): CMTime;
    setStartCompositionTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avvideocompositionrenderhint/3227888-endcompositiontime
    endCompositionTime(): CMTime;
    setEndCompositionTime(): void;
    //
    alloc():AVVideoCompositionRenderHint;
    //
    init():AVVideoCompositionRenderHint;
  }
}

declare const AVVideoCompositionRenderHint: cocoascript.AVVideoCompositionRenderHint;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspace
  type AVMetadataKeySpace = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmetadatakey
  type AVMetadataKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmetadataextraattributekey
  type AVMetadataExtraAttributeKey = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier
  type AVMetadataIdentifier = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmoviewritingoptions
  type AVMovieWritingOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetreferencerestrictions
  type AVAssetReferenceRestrictions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiotimepitchalgorithm
  type AVAudioTimePitchAlgorithm = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A segment of an asset track, consisting of a time mapping from the source to the asset track timeline.
   * doc://com.apple.documentation/documentation/avfoundation/avassettracksegment
   */
  interface AVAssetTrackSegment extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassettracksegment/1385714-empty
    empty(): BOOL;
    setEmpty(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassettracksegment/1390557-timemapping
    timeMapping(): CMTimeMapping;
    setTimeMapping(): void;
    //
    alloc():AVAssetTrackSegment;
    //
    init():AVAssetTrackSegment;
  }
}

declare const AVAssetTrackSegment: cocoascript.AVAssetTrackSegment;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avtrackassociationtype
  type AVTrackAssociationType = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * A subclass of
   * doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer
   */
  interface AVAudioCompressedBuffer extends AVAudioBuffer {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/1387124-initwithformat
    initWithFormat_packetCapacity(format: AVAudioFormat, packetCapacity: AVAudioPacketCount):AVAudioCompressedBuffer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/1386718-initwithformat
    initWithFormat_packetCapacity_maximumPacketSize(format: AVAudioFormat, packetCapacity: AVAudioPacketCount, maximumPacketSize: NSInteger):AVAudioCompressedBuffer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/2919694-bytecapacity
    byteCapacity(): number;
    setByteCapacity(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/2919695-bytelength
    byteLength(): number;
    setByteLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/1390620-data
    data(): void;
    setData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/1389326-maximumpacketsize
    maximumPacketSize(): NSInteger;
    setMaximumPacketSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/1386081-packetcapacity
    packetCapacity(): AVAudioPacketCount;
    setPacketCapacity(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/1386000-packetcount
    packetCount(): AVAudioPacketCount;
    setPacketCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiocompressedbuffer/1389750-packetdescriptions
    packetDescriptions(): AudioStreamPacketDescription;
    setPacketDescriptions(): void;
    //
    alloc():AVAudioCompressedBuffer;
    //
    init():AVAudioCompressedBuffer;
  }
}

declare const AVAudioCompressedBuffer: cocoascript.AVAudioCompressedBuffer;
declare namespace cocoascript {
  /**
   * A subclass of
   * doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer
   */
  interface AVAudioPCMBuffer extends AVAudioBuffer {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer/1389630-initwithpcmformat
    initWithPCMFormat_frameCapacity(format: AVAudioFormat, frameCapacity: AVAudioFrameCount):AVAudioPCMBuffer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer/1386069-framelength
    frameLength(): AVAudioFrameCount;
    setFrameLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer/1386212-floatchanneldata
    floatChannelData(): const;
    setFloatChannelData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer/1386941-framecapacity
    frameCapacity(): AVAudioFrameCount;
    setFrameCapacity(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer/1388925-int16channeldata
    int16ChannelData(): const;
    setInt16ChannelData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer/1389756-int32channeldata
    int32ChannelData(): const;
    setInt32ChannelData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiopcmbuffer/1389726-stride
    stride(): NSUInteger;
    setStride(): void;
    //
    alloc():AVAudioPCMBuffer;
    //
    init():AVAudioPCMBuffer;
  }
}

declare const AVAudioPCMBuffer: cocoascript.AVAudioPCMBuffer;
declare namespace cocoascript {
  /**
   * An audio file that can be opened for reading or writing.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiofile
   */
  interface AVAudioFile extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1387283-initforreading
    initForReading_commonFormat_interleaved_error(fileURL: NSURL, format: AVAudioCommonFormat, interleaved: BOOL, outError: NSError):AVAudioFile;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1388218-initforreading
    initForReading_error(fileURL: NSURL, outError: NSError):AVAudioFile;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1387154-initforwriting
    initForWriting_settings_commonFormat_interleaved_error(fileURL: NSURL, settings: AVAudioFile, format: AVAudioCommonFormat, interleaved: BOOL, outError: NSError):AVAudioFile;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1390840-initforwriting
    initForWriting_settings_error(fileURL: NSURL, settings: AVAudioFile, outError: NSError):AVAudioFile;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1388043-readintobuffer
    readIntoBuffer_error(buffer: AVAudioPCMBuffer, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1389774-readintobuffer
    readIntoBuffer_frameCount_error(buffer: AVAudioPCMBuffer, frames: AVAudioFrameCount, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1385637-writefrombuffer
    writeFromBuffer_error(buffer: AVAudioPCMBuffer, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1387096-fileformat
    fileFormat(): AVAudioFormat;
    setFileFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1388308-processingformat
    processingFormat(): AVAudioFormat;
    setProcessingFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1390785-frameposition
    framePosition(): AVAudioFramePosition;
    setFramePosition(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1390473-length
    length(): AVAudioFramePosition;
    setLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiofile/1387360-url
    url(): NSURL;
    setUrl(): void;
    //
    alloc():AVAudioFile;
    //
    init():AVAudioFile;
  }
}

declare const AVAudioFile: cocoascript.AVAudioFile;
// doc://com.apple.documentation/documentation/avfoundation/avaudiofiletypekey
declare const AVAudioFileTypeKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A class used by the audio engine to represent time.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiotime
   */
  interface AVAudioTime extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1389146-initwithaudiotimestamp
    initWithAudioTimeStamp_sampleRate(ts: AudioTimeStamp, sampleRate: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1386954-initwithhosttime
    initWithHostTime(hostTime: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1386568-initwithhosttime
    initWithHostTime_sampleTime_atRate(hostTime: number, sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1387972-initwithsampletime
    initWithSampleTime_atRate(sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1522153-timewithaudiotimestamp
    timeWithAudioTimeStamp_sampleRate(ts: AudioTimeStamp, sampleRate: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1522150-timewithhosttime
    timeWithHostTime_sampleTime_atRate(hostTime: number, sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1522149-timewithsampletime
    timeWithSampleTime_atRate(sampleTime: AVAudioFramePosition, sampleRate: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1522148-timewithhosttime
    timeWithHostTime(hostTime: number):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1387772-extrapolatetimefromanchor
    extrapolateTimeFromAnchor(anchorTime: AVAudioTime):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1385955-hosttime
    hostTime(): number;
    setHostTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1387611-hosttimevalid
    hostTimeValid(): BOOL;
    setHostTimeValid(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1388521-hosttimeforseconds
    hostTimeForSeconds(seconds: NSTimeInterval):number;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1386096-secondsforhosttime
    secondsForHostTime(hostTime: number):NSTimeInterval;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1387315-samplerate
    sampleRate(): number;
    setSampleRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1389853-sampletime
    sampleTime(): AVAudioFramePosition;
    setSampleTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1385868-sampletimevalid
    sampleTimeValid(): BOOL;
    setSampleTimeValid(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiotime/1388908-audiotimestamp
    audioTimeStamp(): AudioTimeStamp;
    setAudioTimeStamp(): void;
    //
    alloc():AVAudioTime;
    //
    init():AVAudioTime;
  }
}

declare const AVAudioTime: cocoascript.AVAudioTime;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayeritemstatus
  type AVPlayerItemStatus = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemmediaselectiondidchangenotification
declare const AVPlayerItemMediaSelectionDidChangeNotification: cocoascript.NSNotificationName;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemrecommendedtimeoffsetfromlivedidchangenotification
declare const AVPlayerItemRecommendedTimeOffsetFromLiveDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avvideoaperturemode
  type AVVideoApertureMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcontentauthorizationstatus
  type AVContentAuthorizationStatus = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avspeechutteranceminimumspeechrate
declare const AVSpeechUtteranceMinimumSpeechRate: number;
// doc://com.apple.documentation/documentation/avfoundation/avspeechutterancemaximumspeechrate
declare const AVSpeechUtteranceMaximumSpeechRate: number;
// doc://com.apple.documentation/documentation/avfoundation/avspeechutterancedefaultspeechrate
declare const AVSpeechUtteranceDefaultSpeechRate: number;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetdownloadedassetevictionpriority
  type AVAssetDownloadedAssetEvictionPriority = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiochannelcount
  type AVAudioChannelCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiocommonformat
  type AVAudioCommonFormat = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoicequality
  type AVSpeechSynthesisVoiceQuality = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesisvoicegender
  type AVSpeechSynthesisVoiceGender = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A reader object used to obtain the media data of an asset, either file-based or consisting of an assemblage of media data from multiple sources.
   * doc://com.apple.documentation/documentation/avfoundation/avassetreader
   */
  interface AVAssetReader extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1385593-initwithasset
    initWithAsset_error(asset: AVAsset, outError: NSError):AVAssetReader;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1420148-assetreaderwithasset
    assetReaderWithAsset_error(asset: AVAsset, outError: NSError):AVAssetReader;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1387132-outputs
    outputs(): AVAssetReaderOutput;
    setOutputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1390110-addoutput
    addOutput(output: AVAssetReaderOutput):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1387485-canaddoutput
    canAddOutput(output: AVAssetReaderOutput):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1390211-status
    status(): AVAssetReaderStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1390286-startreading
    startReading():BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1390258-cancelreading
    cancelReading():void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1388114-error
    error(): NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1386400-timerange
    timeRange(): CMTimeRange;
    setTimeRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreader/1389128-asset
    asset(): AVAsset;
    setAsset(): void;
    //
    alloc():AVAssetReader;
    //
    init():AVAssetReader;
  }
}

declare const AVAssetReader: cocoascript.AVAssetReader;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avkeyvaluestatus
  type AVKeyValueStatus = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avmetadataformathlsmetadata
declare const AVMetadataFormatHLSMetadata: cocoascript.AVMetadataFormat;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataformatitunesmetadata
declare const AVMetadataFormatiTunesMetadata: cocoascript.AVMetadataFormat;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataformatid3metadata
declare const AVMetadataFormatID3Metadata: cocoascript.AVMetadataFormat;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataformatisouserdata
declare const AVMetadataFormatISOUserData: cocoascript.AVMetadataFormat;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataformatquicktimemetadata
declare const AVMetadataFormatQuickTimeMetadata: cocoascript.AVMetadataFormat;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataformatquicktimeuserdata
declare const AVMetadataFormatQuickTimeUserData: cocoascript.AVMetadataFormat;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataformatunknown
declare const AVMetadataFormatUnknown: cocoascript.AVMetadataFormat;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypequicktimemovie
declare const AVFileTypeQuickTimeMovie: cocoascript.AVFileType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetexportsessionstatus
  type AVAssetExportSessionStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetimagegeneratoraperturemode
  type AVAssetImageGeneratorApertureMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetimagegeneratorcompletionhandler
  type AVAssetImageGeneratorCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetimagegeneratorresult
  type AVAssetImageGeneratorResult = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An abstract class that defines an interface for reading a single collection of samples of a common media type from an asset reader object.
   * doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutput
   */
  interface AVAssetReaderOutput extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutput/1385732-copynextsamplebuffer
    copyNextSampleBuffer():CMSampleBufferRef;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutput/1389189-alwayscopiessampledata
    alwaysCopiesSampleData(): BOOL;
    setAlwaysCopiesSampleData(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutput/1390880-mediatype
    mediaType(): AVMediaType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutput/1386974-markconfigurationasfinal
    markConfigurationAsFinal():void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutput/1388890-resetforreadingtimeranges
    resetForReadingTimeRanges(timeRanges: NSValue):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutput/1387927-supportsrandomaccess
    supportsRandomAccess(): BOOL;
    setSupportsRandomAccess(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avassetreadertrackoutput
   */
  interface AVAssetReaderTrackOutput extends AVAssetReaderOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadertrackoutput/1490322-assetreadertrackoutputwithtrack
    assetReaderTrackOutputWithTrack_outputSettings(track: AVAssetTrack, outputSettings: AVAssetReaderTrackOutput):AVAssetReaderTrackOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadertrackoutput/1385807-initwithtrack
    initWithTrack_outputSettings(track: AVAssetTrack, outputSettings: AVAssetReaderTrackOutput):AVAssetReaderTrackOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadertrackoutput/1387163-outputsettings
    outputSettings(): id;
    setOutputSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadertrackoutput/1386921-track
    track(): AVAssetTrack;
    setTrack(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadertrackoutput/1387851-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avassetreaderaudiomixoutput
   */
  interface AVAssetReaderAudioMixOutput extends AVAssetReaderOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderaudiomixoutput/1388883-initwithaudiotracks
    initWithAudioTracks_audioSettings(audioTracks: AVAssetTrack, audioSettings: AVAssetReaderAudioMixOutput):AVAssetReaderAudioMixOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderaudiomixoutput/1490328-assetreaderaudiomixoutputwithaud
    assetReaderAudioMixOutputWithAudioTracks_audioSettings(audioTracks: AVAssetTrack, audioSettings: AVAssetReaderAudioMixOutput):AVAssetReaderAudioMixOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderaudiomixoutput/1387074-audiomix
    audioMix(): AVAudioMix;
    setAudioMix(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderaudiomixoutput/1388860-audiosettings
    audioSettings(): id;
    setAudioSettings(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderaudiomixoutput/1385635-audiotracks
    audioTracks(): AVAssetTrack;
    setAudioTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderaudiomixoutput/1388713-audiotimepitchalgorithm
    audioTimePitchAlgorithm(): AVAudioTimePitchAlgorithm;
    setAudioTimePitchAlgorithm(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avassetreadersamplereferenceoutput
   */
  interface AVAssetReaderSampleReferenceOutput extends AVAssetReaderOutput {
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadersamplereferenceoutput/1490320-assetreadersamplereferenceoutput
    assetReaderSampleReferenceOutputWithTrack(track: AVAssetTrack):AVAssetReaderSampleReferenceOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadersamplereferenceoutput/1387339-initwithtrack
    initWithTrack(track: AVAssetTrack):AVAssetReaderSampleReferenceOutput;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreadersamplereferenceoutput/1390057-track
    track(): AVAssetTrack;
    setTrack(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutputmetadataadaptor
   */
  interface AVAssetReaderOutputMetadataAdaptor extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1490330-assetreaderoutputmetadataadaptor
    assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput(trackOutput: AVAssetReaderTrackOutput):AVAssetReaderOutputMetadataAdaptor;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1388009-initwithassetreadertrackoutput
    initWithAssetReaderTrackOutput(trackOutput: AVAssetReaderTrackOutput):AVAssetReaderOutputMetadataAdaptor;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1388330-assetreadertrackoutput
    assetReaderTrackOutput(): AVAssetReaderTrackOutput;
    setAssetReaderTrackOutput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetreaderoutputmetadataadaptor/1390008-nexttimedmetadatagroup
    nextTimedMetadataGroup():AVTimedMetadataGroup;
    //
    alloc():AVAssetReaderOutputMetadataAdaptor;
    //
    init():AVAssetReaderOutputMetadataAdaptor;
  }
}

declare const AVAssetReaderOutputMetadataAdaptor: cocoascript.AVAssetReaderOutputMetadataAdaptor;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypeaudio
declare const AVMediaTypeAudio: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypeclosedcaption
declare const AVMediaTypeClosedCaption: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypedepthdata
declare const AVMediaTypeDepthData: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypemetadata
declare const AVMediaTypeMetadata: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypemetadataobject
declare const AVMediaTypeMetadataObject: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypemuxed
declare const AVMediaTypeMuxed: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypesubtitle
declare const AVMediaTypeSubtitle: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypetext
declare const AVMediaTypeText: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypetimecode
declare const AVMediaTypeTimecode: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediatypevideo
declare const AVMediaTypeVideo: cocoascript.AVMediaType;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicaudible
declare const AVMediaCharacteristicAudible: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristiccontainsonlyforcedsubtitles
declare const AVMediaCharacteristicContainsOnlyForcedSubtitles: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristictranscribesspokendialogforaccessibility
declare const AVMediaCharacteristicTranscribesSpokenDialogForAccessibility: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristiceasytoread
declare const AVMediaCharacteristicEasyToRead: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristiccontainsalphachannel
declare const AVMediaCharacteristicContainsAlphaChannel: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristiccontainshdrvideo
declare const AVMediaCharacteristicContainsHDRVideo: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicisoriginalcontent
declare const AVMediaCharacteristicIsOriginalContent: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicdescribesmusicandsoundforaccessibility
declare const AVMediaCharacteristicDescribesMusicAndSoundForAccessibility: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicdescribesvideoforaccessibility
declare const AVMediaCharacteristicDescribesVideoForAccessibility: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicdubbedtranslation
declare const AVMediaCharacteristicDubbedTranslation: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicframebased
declare const AVMediaCharacteristicFrameBased: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicisauxiliarycontent
declare const AVMediaCharacteristicIsAuxiliaryContent: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicismainprogramcontent
declare const AVMediaCharacteristicIsMainProgramContent: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristiclanguagetranslation
declare const AVMediaCharacteristicLanguageTranslation: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristiclegible
declare const AVMediaCharacteristicLegible: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicuseswidegamutcolorspace
declare const AVMediaCharacteristicUsesWideGamutColorSpace: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicvisual
declare const AVMediaCharacteristicVisual: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avmediacharacteristicvoiceovertranslation
declare const AVMediaCharacteristicVoiceOverTranslation: cocoascript.AVMediaCharacteristic;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeac3
declare const AVFileTypeAC3: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeaifc
declare const AVFileTypeAIFC: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeaiff
declare const AVFileTypeAIFF: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeamr
declare const AVFileTypeAMR: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypesunau
declare const AVFileTypeSunAU: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeavci
declare const AVFileTypeAVCI: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypecoreaudioformat
declare const AVFileTypeCoreAudioFormat: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypedng
declare const AVFileTypeDNG: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeenhancedac3
declare const AVFileTypeEnhancedAC3: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeheic
declare const AVFileTypeHEIC: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeheif
declare const AVFileTypeHEIF: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypejpeg
declare const AVFileTypeJPEG: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeapplem4a
declare const AVFileTypeAppleM4A: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeapplem4v
declare const AVFileTypeAppleM4V: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletype3gpp
declare const AVFileType3GPP: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletype3gpp2
declare const AVFileType3GPP2: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypempeglayer3
declare const AVFileTypeMPEGLayer3: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypempeg4
declare const AVFileTypeMPEG4: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypetiff
declare const AVFileTypeTIFF: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypewave
declare const AVFileTypeWAVE: cocoascript.AVFileType;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeprofilempeg4applehls
declare const AVFileTypeProfileMPEG4AppleHLS: cocoascript.AVFileTypeProfile;
// doc://com.apple.documentation/documentation/avfoundation/avfiletypeprofilempeg4cmafcompliant
declare const AVFileTypeProfileMPEG4CMAFCompliant: cocoascript.AVFileTypeProfile;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspreset1280x720
declare const AVOutputSettingsPreset1280x720: cocoascript.AVOutputSettingsPreset;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspreset
  type AVOutputSettingsPreset = cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategoryplayback
declare const AVAudioSessionCategoryPlayback: cocoascript.AVAudioSessionCategory;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodemovieplayback
declare const AVAudioSessionModeMoviePlayback: cocoascript.AVAudioSessionMode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayerstatus
  type AVPlayerStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayeractionatitemend
  type AVPlayerActionAtItemEnd = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avlayervideogravity
  type AVLayerVideoGravity = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayerwaitingreason
  type AVPlayerWaitingReason = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayertimecontrolstatus
  type AVPlayerTimeControlStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayerhdrmode
  type AVPlayerHDRMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avplayereligibleforhdrplaybackdidchangenotification
declare const AVPlayerEligibleForHDRPlaybackDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayerlooperstatus
  type AVPlayerLooperStatus = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avcoreanimationbegintimeatzero
declare const AVCoreAnimationBeginTimeAtZero: cocoascript.CFTimeInterval;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysystem
  type AVContentKeySystem = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoption
  type AVContentKeySessionServerPlaybackContextOption = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequeststatus
  type AVContentKeyRequestStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * Methods you can implement to handle download-related events.
   * doc://com.apple.documentation/documentation/avfoundation/avassetdownloaddelegate
   */
  interface AVAssetDownloadDelegate extends NSURLSessionTaskDelegate {
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloaddelegate/1845200-urlsession
    URLSession_assetDownloadTask_didFinishDownloadingToURL(session: NSURLSession, assetDownloadTask: AVAssetDownloadTask, location: NSURL):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloaddelegate/1621019-urlsession
    URLSession_assetDownloadTask_didLoadTimeRange_totalTimeRangesLoaded_timeRangeExpectedToLoad(session: NSURLSession, assetDownloadTask: AVAssetDownloadTask, timeRange: CMTimeRange, loadedTimeRanges: NSValue, timeRangeExpectedToLoad: CMTimeRange):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloaddelegate/1621023-urlsession
    URLSession_assetDownloadTask_didResolveMediaSelection(session: NSURLSession, assetDownloadTask: AVAssetDownloadTask, resolvedMediaSelection: AVMediaSelection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloaddelegate/2897211-urlsession
    URLSession_aggregateAssetDownloadTask_didCompleteForMediaSelection(session: NSURLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, mediaSelection: AVMediaSelection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloaddelegate/2919988-urlsession
    URLSession_aggregateAssetDownloadTask_didLoadTimeRange_totalTimeRangesLoaded_timeRangeExpectedToLoad_forMediaSelection(session: NSURLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, timeRange: CMTimeRange, loadedTimeRanges: NSValue, timeRangeExpectedToLoad: CMTimeRange, mediaSelection: AVMediaSelection):void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetdownloaddelegate/2897241-urlsession
    URLSession_aggregateAssetDownloadTask_willDownloadToURL(session: NSURLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, location: NSURL):void;
  }
}
// doc://com.apple.documentation/documentation/avfoundation/avsamplebufferrendersynchronizerratedidchangenotification
declare const AVSampleBufferRenderSynchronizerRateDidChangeNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avqueuedsamplebufferrenderingstatus
  type AVQueuedSampleBufferRenderingStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/averror
  type AVError = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avfoundationerrordomain
declare const AVFoundationErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategory
  type AVAudioSessionCategory = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategoryoptions
  type AVAudioSessionCategoryOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmode
  type AVAudioSessionMode = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionroutesharingpolicy
  type AVAudioSessionRouteSharingPolicy = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionactivationoptions
  type AVAudioSessionActivationOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionpromptstyle
  type AVAudioSessionPromptStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An object that describes the input and output ports associated with a session’s audio route.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosessionroutedescription
   */
  interface AVAudioSessionRouteDescription extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionroutedescription/1616474-inputs
    inputs(): AVAudioSessionPortDescription;
    setInputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionroutedescription/1616552-outputs
    outputs(): AVAudioSessionPortDescription;
    setOutputs(): void;
    //
    alloc():AVAudioSessionRouteDescription;
    //
    init():AVAudioSessionRouteDescription;
  }
}

declare const AVAudioSessionRouteDescription: cocoascript.AVAudioSessionRouteDescription;
declare namespace cocoascript {
  /**
   * Information about the capabilities of the port and the hardware channels it supports.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription
   */
  interface AVAudioSessionPortDescription extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616497-portname
    portName(): string | cocoascript.NSString;
    setPortName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616445-porttype
    portType(): AVAudioSessionPort;
    setPortType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616574-channels
    channels(): AVAudioSessionChannelDescription;
    setChannels(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616617-uid
    UID(): string | cocoascript.NSString;
    setUID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1778338-hashardwarevoicecallprocessing
    hasHardwareVoiceCallProcessing(): BOOL;
    setHasHardwareVoiceCallProcessing(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616570-datasources
    dataSources(): AVAudioSessionDataSourceDescription;
    setDataSources(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616538-selecteddatasource
    selectedDataSource(): AVAudioSessionDataSourceDescription;
    setSelectedDataSource(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616628-preferreddatasource
    preferredDataSource(): AVAudioSessionDataSourceDescription;
    setPreferredDataSource(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdescription/1616554-setpreferreddatasource
    setPreferredDataSource_error(dataSource: AVAudioSessionDataSourceDescription, outError: NSError):BOOL;
    //
    alloc():AVAudioSessionPortDescription;
    //
    init():AVAudioSessionPortDescription;
  }
}

declare const AVAudioSessionPortDescription: cocoascript.AVAudioSessionPortDescription;
declare namespace cocoascript {
  /**
   * An object that defines a data source for an audio input or output, giving information such as the source’s name, location, and orientation.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription
   */
  interface AVAudioSessionDataSourceDescription extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616584-datasourceid
    dataSourceID(): NSNumber;
    setDataSourceID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616595-datasourcename
    dataSourceName(): string | cocoascript.NSString;
    setDataSourceName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616495-location
    location(): AVAudioSessionLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616456-orientation
    orientation(): AVAudioSessionOrientation;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616619-selectedpolarpattern
    selectedPolarPattern(): AVAudioSessionPolarPattern;
    setSelectedPolarPattern(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616450-supportedpolarpatterns
    supportedPolarPatterns(): AVAudioSessionPolarPattern;
    setSupportedPolarPatterns(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616446-preferredpolarpattern
    preferredPolarPattern(): AVAudioSessionPolarPattern;
    setPreferredPolarPattern(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessiondatasourcedescription/1616516-setpreferredpolarpattern
    setPreferredPolarPattern_error(pattern: AVAudioSessionPolarPattern, outError: NSError):BOOL;
    //
    alloc():AVAudioSessionDataSourceDescription;
    //
    init():AVAudioSessionDataSourceDescription;
  }
}

declare const AVAudioSessionDataSourceDescription: cocoascript.AVAudioSessionDataSourceDescription;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiostereoorientation
  type AVAudioStereoOrientation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessioniotype
  type AVAudioSessionIOType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioroutingarbitrationcategory
  type AVAudioRoutingArbitrationCategory = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that describes a hardware channel on the current device.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosessionchanneldescription
   */
  interface AVAudioSessionChannelDescription extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionchanneldescription/1616521-channelname
    channelName(): string | cocoascript.NSString;
    setChannelName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionchanneldescription/1616444-channelnumber
    channelNumber(): NSUInteger;
    setChannelNumber(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionchanneldescription/1616562-owningportuid
    owningPortUID(): string | cocoascript.NSString;
    setOwningPortUID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionchanneldescription/1616565-channellabel
    channelLabel(): AudioChannelLabel;
    setChannelLabel(): void;
    //
    alloc():AVAudioSessionChannelDescription;
    //
    init():AVAudioSessionChannelDescription;
  }
}

declare const AVAudioSessionChannelDescription: cocoascript.AVAudioSessionChannelDescription;
declare namespace cocoascript {
  /**
   * A group of connected audio node objects used to generate and process audio signals and perform audio input and output.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioengine
   */
  interface AVAudioEngine extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1390381-init
    init():AVAudioEngine;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1390685-attachnode
    attachNode(node: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1388198-detachnode
    detachNode(node: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/3088797-attachednodes
    attachedNodes(): AVAudioNode;
    setAttachedNodes(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1386063-inputnode
    inputNode(): AVAudioInputNode;
    setInputNode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1389103-outputnode
    outputNode(): AVAudioOutputNode;
    setOutputNode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1385813-mainmixernode
    mainMixerNode(): AVAudioMixerNode;
    setMainMixerNode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1388974-connect
    connect_to_format(node1: AVAudioNode, node2: AVAudioNode, format: AVAudioFormat):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1389776-connect
    connect_to_fromBus_toBus_format(node1: AVAudioNode, node2: AVAudioNode, bus1: AVAudioNodeBus, bus2: AVAudioNodeBus, format: AVAudioFormat):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1388181-disconnectnodeinput
    disconnectNodeInput(node: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1387251-disconnectnodeinput
    disconnectNodeInput_bus(node: AVAudioNode, bus: AVAudioNodeBus):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1386992-disconnectnodeoutput
    disconnectNodeOutput(node: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1390352-disconnectnodeoutput
    disconnectNodeOutput_bus(node: AVAudioNode, bus: AVAudioNodeBus):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/3012853-connectmidi
    connectMIDI_to_format_block(sourceNode: AVAudioNode, destinationNode: AVAudioNode, format: AVAudioFormat, tapBlock: AUMIDIOutputEventBlock):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/3012854-connectmidi
    connectMIDI_toNodes_format_block(sourceNode: AVAudioNode, destinationNodes: AVAudioNode, format: AVAudioFormat, tapBlock: AUMIDIOutputEventBlock):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/3012855-disconnectmidi
    disconnectMIDI_from(sourceNode: AVAudioNode, destinationNode: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/3012856-disconnectmidi
    disconnectMIDI_fromNodes(sourceNode: AVAudioNode, destinationNodes: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/3012857-disconnectmidiinput
    disconnectMIDIInput(node: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/3012858-disconnectmidioutput
    disconnectMIDIOutput(node: AVAudioNode):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1390410-musicsequence
    musicSequence(): MusicSequence;
    setMusicSequence(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1386931-prepare
    prepare():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1387024-startandreturnerror
    startAndReturnError(outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1388591-running
    running(): BOOL;
    setRunning(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1387076-pause
    pause():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1390414-stop
    stop():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1389668-reset
    reset():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881237-enablemanualrenderingmode
    enableManualRenderingMode_format_maximumFrameCount_error(mode: AVAudioEngineManualRenderingMode, pcmFormat: AVAudioFormat, maximumFrameCount: AVAudioFrameCount, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881239-disablemanualrenderingmode
    disableManualRenderingMode():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881253-renderoffline
    renderOffline_toBuffer_error(numberOfFrames: AVAudioFrameCount, buffer: AVAudioPCMBuffer, outError: NSError):AVAudioEngineManualRenderingStatus;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881244-manualrenderingblock
    manualRenderingBlock(): AVAudioEngineManualRenderingBlock;
    setManualRenderingBlock(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881246-manualrenderingformat
    manualRenderingFormat(): AVAudioFormat;
    setManualRenderingFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881254-manualrenderingmaximumframecount
    manualRenderingMaximumFrameCount(): AVAudioFrameCount;
    setManualRenderingMaximumFrameCount(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881247-manualrenderingmode
    manualRenderingMode(): AVAudioEngineManualRenderingMode;
    setManualRenderingMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881255-manualrenderingsampletime
    manualRenderingSampleTime(): AVAudioFramePosition;
    setManualRenderingSampleTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2879211-autoshutdownenabled
    autoShutdownEnabled(): BOOL;
    setAutoShutdownEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/2881241-isinmanualrenderingmode
    isInManualRenderingMode(): BOOL;
    setIsInManualRenderingMode(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1389510-connect
    connect_toConnectionPoints_fromBus_format(sourceNode: AVAudioNode, destNodes: AVAudioConnectionPoint, sourceBus: AVAudioNodeBus, format: AVAudioFormat):void;
    //
    alloc():AVAudioEngine;
    //
    init():AVAudioEngine;
  }
}

declare const AVAudioEngine: cocoascript.AVAudioEngine;
// doc://com.apple.documentation/documentation/avfoundation/avaudioengineconfigurationchangenotification
declare const AVAudioEngineConfigurationChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An abstract class for an audio generation, processing, or I/O block.
   * doc://com.apple.documentation/documentation/avfoundation/avaudionode
   */
  interface AVAudioNode extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1390147-inputformatforbus
    inputFormatForBus(bus: AVAudioNodeBus):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1387710-nameforinputbus
    nameForInputBus(bus: AVAudioNodeBus):NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1390585-numberofinputs
    numberOfInputs(): NSUInteger;
    setNumberOfInputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1389195-outputformatforbus
    outputFormatForBus(bus: AVAudioNodeBus):AVAudioFormat;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1390811-nameforoutputbus
    nameForOutputBus(bus: AVAudioNodeBus):NSString;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1385916-numberofoutputs
    numberOfOutputs(): NSUInteger;
    setNumberOfOutputs(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1387122-installtaponbus
    installTapOnBus_bufferSize_format_block(bus: AVAudioNodeBus, bufferSize: AVAudioFrameCount, format: AVAudioFormat, tapBlock: AVAudioNodeTapBlock):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1388717-removetaponbus
    removeTapOnBus(bus: AVAudioNodeBus):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1386896-engine
    engine(): AVAudioEngine;
    setEngine(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1385978-lastrendertime
    lastRenderTime(): AVAudioTime;
    setLastRenderTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/2866396-auaudiounit
    AUAudioUnit(): AUAudioUnit;
    setAUAudioUnit(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/2875482-latency
    latency(): NSTimeInterval;
    setLatency(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/2875483-outputpresentationlatency
    outputPresentationLatency(): NSTimeInterval;
    setOutputPresentationLatency(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudionode/1385976-reset
    reset():void;
    //
    alloc():AVAudioNode;
    //
    init():AVAudioNode;
  }
}

declare const AVAudioNode: cocoascript.AVAudioNode;
declare namespace cocoascript {
  /**
   * The base class for nodes that connect to the system's audio input or output.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioionode
   */
  interface AVAudioIONode extends AVAudioNode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioionode/1390587-audiounit
    audioUnit(): AudioUnit;
    setAudioUnit(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioionode/1385631-presentationlatency
    presentationLatency(): NSTimeInterval;
    setPresentationLatency(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioionode/3152101-voiceprocessingenabled
    voiceProcessingEnabled(): BOOL;
    setVoiceProcessingEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioionode/3152100-setvoiceprocessingenabled
    setVoiceProcessingEnabled_error(enabled: BOOL, outError: NSError):BOOL;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudioinputnode
   */
  interface AVAudioInputNode extends AVAudioIONode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioinputnode/2881264-setmanualrenderinginputpcmformat
    setManualRenderingInputPCMFormat_inputBlock(format: AVAudioFormat, block: AVAudioIONodeInputBlock):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioinputnode/3152102-voiceprocessingagcenabled
    voiceProcessingAGCEnabled(): BOOL;
    setVoiceProcessingAGCEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioinputnode/3152103-voiceprocessingbypassed
    voiceProcessingBypassed(): BOOL;
    setVoiceProcessingBypassed(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioinputnode/3152104-voiceprocessinginputmuted
    voiceProcessingInputMuted(): BOOL;
    setVoiceProcessingInputMuted(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiooutputnode
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiomixernode
   */
  interface AVAudioMixerNode extends AVAudioNode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixernode/1643644-init
    init():AVAudioMixerNode;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixernode/1390244-outputvolume
    outputVolume(): number;
    setOutputVolume(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixernode/1388695-nextavailableinputbus
    nextAvailableInputBus(): AVAudioNodeBus;
    setNextAvailableInputBus(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode
   */
  interface AVAudioPlayerNode extends AVAudioNode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1643624-init
    init():AVAudioPlayerNode;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1390047-schedulefile
    scheduleFile_atTime_completionHandler(file: AVAudioFile, when: AVAudioTime, completionHandler: AVAudioNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/2867814-schedulefile
    scheduleFile_atTime_completionCallbackType_completionHandler(file: AVAudioFile, when: AVAudioTime, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1385884-schedulesegment
    scheduleSegment_startingFrame_frameCount_atTime_completionHandler(file: AVAudioFile, startFrame: AVAudioFramePosition, numberFrames: AVAudioFrameCount, when: AVAudioTime, completionHandler: AVAudioNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/2867815-schedulesegment
    scheduleSegment_startingFrame_frameCount_atTime_completionCallbackType_completionHandler(file: AVAudioFile, startFrame: AVAudioFramePosition, numberFrames: AVAudioFrameCount, when: AVAudioTime, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1388422-schedulebuffer
    scheduleBuffer_atTime_options_completionHandler(buffer: AVAudioPCMBuffer, when: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, completionHandler: AVAudioNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1389996-schedulebuffer
    scheduleBuffer_completionHandler(buffer: AVAudioPCMBuffer, completionHandler: AVAudioNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/2867816-schedulebuffer
    scheduleBuffer_atTime_options_completionCallbackType_completionHandler(buffer: AVAudioPCMBuffer, when: AVAudioTime, options: AVAudioPlayerNodeBufferOptions, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/2867817-schedulebuffer
    scheduleBuffer_completionCallbackType_completionHandler(buffer: AVAudioPCMBuffer, callbackType: AVAudioPlayerNodeCompletionCallbackType, completionHandler: AVAudioPlayerNodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1386450-nodetimeforplayertime
    nodeTimeForPlayerTime(playerTime: AVAudioTime):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1390449-playertimefornodetime
    playerTimeForNodeTime(nodeTime: AVAudioTime):AVAudioTime;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1388511-preparewithframecount
    prepareWithFrameCount(frameCount: AVAudioFrameCount):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1388659-play
    play():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1389304-playattime
    playAtTime(when: AVAudioTime):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1390631-playing
    playing(): BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1388025-pause
    pause():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernode/1388230-stop
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer
   */
  interface AVAudioSequencer extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1385851-init
    init():AVAudioSequencer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1388339-initwithaudioengine
    initWithAudioEngine(engine: AVAudioEngine):AVAudioSequencer;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1390589-writetourl
    writeToURL_SMPTEResolution_replaceExisting_error(fileURL: NSURL, resolution: NSInteger, replace: BOOL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1385633-preparetoplay
    prepareToPlay():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1387594-startandreturnerror
    startAndReturnError(outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1386674-stop
    stop():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1389720-loadfromdata
    loadFromData_options_error(data: NSData, options: AVMusicSequenceLoadOptions, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1386241-loadfromurl
    loadFromURL_options_error(fileURL: NSURL, options: AVMusicSequenceLoadOptions, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1386184-hosttimeforbeats
    hostTimeForBeats_error(inBeats: AVMusicTimeStamp, outError: NSError):UInt64;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1387615-secondsforbeats
    secondsForBeats(beats: AVMusicTimeStamp):NSTimeInterval;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1389012-beatsforhosttime
    beatsForHostTime_error(inHostTime: UInt64, outError: NSError):AVMusicTimeStamp;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1387853-beatsforseconds
    beatsForSeconds(seconds: NSTimeInterval):AVMusicTimeStamp;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1388701-datawithsmpteresolution
    dataWithSMPTEResolution_error(SMPTEResolution: NSInteger, outError: NSError):NSData;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1388910-currentpositioninbeats
    currentPositionInBeats(): NSTimeInterval;
    setCurrentPositionInBeats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1390524-currentpositioninseconds
    currentPositionInSeconds(): NSTimeInterval;
    setCurrentPositionInSeconds(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1388402-playing
    playing(): BOOL;
    setPlaying(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1387903-rate
    rate(): number;
    setRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1390252-tempotrack
    tempoTrack(): AVMusicTrack;
    setTempoTrack(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1387567-tracks
    tracks(): AVMusicTrack;
    setTracks(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosequencer/1389262-userinfo
    userInfo(): id;
    setUserInfo(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitsampler
   */
  interface AVAudioUnitSampler extends AVAudioUnitMIDIInstrument {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitsampler/1388631-loadaudiofilesaturls
    loadAudioFilesAtURLs_error(audioFiles: NSURL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitsampler/1389514-loadinstrumentaturl
    loadInstrumentAtURL_error(instrumentURL: NSURL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitsampler/1385687-loadsoundbankinstrumentaturl
    loadSoundBankInstrumentAtURL_program_bankMSB_bankLSB_error(bankURL: NSURL, program: number, bankMSB: number, bankLSB: number, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitsampler/1386733-globaltuning
    globalTuning(): number;
    setGlobalTuning(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitsampler/1386788-mastergain
    masterGain(): number;
    setMasterGain(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitsampler/1385805-stereopan
    stereoPan(): number;
    setStereoPan(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument
   */
  interface AVAudioUnitMIDIInstrument extends AVAudioUnit {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1386929-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(description: AudioComponentDescription):AVAudioUnitMIDIInstrument;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1388145-sendcontroller
    sendController_withValue_onChannel(controller: number, value: number, channel: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1387561-sendmidievent
    sendMIDIEvent_data1(midiStatus: number, data1: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1387014-sendmidievent
    sendMIDIEvent_data1_data2(midiStatus: number, data1: number, data2: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1387812-sendmidisysexevent
    sendMIDISysExEvent(midiData: NSData):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1390430-sendpitchbend
    sendPitchBend_onChannel(pitchbend: number, channel: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1386668-sendpressure
    sendPressure_onChannel(pressure: number, channel: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1388563-sendpressureforkey
    sendPressureForKey_withValue_onChannel(key: number, value: number, channel: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1390451-sendprogramchange
    sendProgramChange_bankMSB_bankLSB_onChannel(program: number, bankMSB: number, bankLSB: number, channel: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1386110-sendprogramchange
    sendProgramChange_onChannel(program: number, channel: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1386198-startnote
    startNote_withVelocity_onChannel(note: number, velocity: number, channel: number):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitmidiinstrument/1390098-stopnote
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosourcenode
   */
  interface AVAudioSourceNode extends AVAudioNode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosourcenode/3113882-initwithrenderblock
    initWithRenderBlock(block: AVAudioSourceNodeRenderBlock):AVAudioSourceNode;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosourcenode/3325484-initwithformat
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiosinknode
   */
  interface AVAudioSinkNode extends AVAudioNode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiosinknode/3152110-initwithreceiverblock
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudioconverter
   */
  interface AVAudioConverter extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1387008-initfromformat
    initFromFormat_toFormat(fromFormat: AVAudioFormat, toFormat: AVAudioFormat):AVAudioConverter;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1387865-converttobuffer
    convertToBuffer_error_withInputFromBlock(outputBuffer: AVAudioBuffer, outError: NSError, inputBlock: AVAudioConverterInputBlock):AVAudioConverterOutputStatus;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1388341-converttobuffer
    convertToBuffer_fromBuffer_error(outputBuffer: AVAudioPCMBuffer, inputBuffer: AVAudioPCMBuffer, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1390876-reset
    reset():void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1390653-channelmap
    channelMap(): NSNumber;
    setChannelMap(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1386312-dither
    dither(): BOOL;
    setDither(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1388244-downmix
    downmix(): BOOL;
    setDownmix(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1388914-inputformat
    inputFormat(): AVAudioFormat;
    setInputFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1387563-outputformat
    outputFormat(): AVAudioFormat;
    setOutputFormat(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1390770-magiccookie
    magicCookie(): NSData;
    setMagicCookie(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1390069-maximumoutputpacketsize
    maximumOutputPacketSize(): NSInteger;
    setMaximumOutputPacketSize(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1388940-applicableencodebitrates
    applicableEncodeBitRates(): NSNumber;
    setApplicableEncodeBitRates(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1388589-availableencodebitrates
    availableEncodeBitRates(): NSNumber;
    setAvailableEncodeBitRates(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1387337-availableencodechannellayouttags
    availableEncodeChannelLayoutTags(): NSNumber;
    setAvailableEncodeChannelLayoutTags(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1390373-bitrate
    bitRate(): NSInteger;
    setBitRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1386092-bitratestrategy
    bitRateStrategy(): string | cocoascript.NSString;
    setBitRateStrategy(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1390887-samplerateconverterquality
    sampleRateConverterQuality(): NSInteger;
    setSampleRateConverterQuality(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1387976-samplerateconverteralgorithm
    sampleRateConverterAlgorithm(): string | cocoascript.NSString;
    setSampleRateConverterAlgorithm(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1389427-applicableencodesamplerates
    applicableEncodeSampleRates(): NSNumber;
    setApplicableEncodeSampleRates(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1386202-availableencodesamplerates
    availableEncodeSampleRates(): NSNumber;
    setAvailableEncodeSampleRates(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1389770-primeinfo
    primeInfo(): AVAudioConverterPrimeInfo;
    setPrimeInfo(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconverter/1387299-primemethod
    primeMethod(): AVAudioConverterPrimeMethod;
    setPrimeMethod(): void;
    //
    alloc():AVAudioConverter;
    //
    init():AVAudioConverter;
  }
}

declare const AVAudioConverter: cocoascript.AVAudioConverter;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avspeechboundary
  type AVSpeechBoundary = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avspeechsynthesizerbuffercallback
  type AVSpeechSynthesizerBufferCallback = cocoascript.AVAudioBuffer;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurelevel
  type AVCaptureSystemPressureLevel = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurefactors
  type AVCaptureSystemPressureFactors = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avsemanticsegmentationmattetypeglasses
declare const AVSemanticSegmentationMatteTypeGlasses: cocoascript.AVSemanticSegmentationMatteType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpresethigh
declare const AVCaptureSessionPresetHigh: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpresetlow
declare const AVCaptureSessionPresetLow: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpresetmedium
declare const AVCaptureSessionPresetMedium: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset960x540
declare const AVCaptureSessionPreset960x540: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset1280x720
declare const AVCaptureSessionPreset1280x720: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset1920x1080
declare const AVCaptureSessionPreset1920x1080: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset3840x2160
declare const AVCaptureSessionPreset3840x2160: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpresetiframe960x540
declare const AVCaptureSessionPresetiFrame960x540: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpresetiframe1280x720
declare const AVCaptureSessionPresetiFrame1280x720: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset320x240
declare const AVCaptureSessionPreset320x240: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset640x480
declare const AVCaptureSessionPreset640x480: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesessionpreset352x288
declare const AVCaptureSessionPreset352x288: cocoascript.AVCaptureSessionPreset;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltinwideanglecamera
declare const AVCaptureDeviceTypeBuiltInWideAngleCamera: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltindualwidecamera
declare const AVCaptureDeviceTypeBuiltInDualWideCamera: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltintriplecamera
declare const AVCaptureDeviceTypeBuiltInTripleCamera: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltinultrawidecamera
declare const AVCaptureDeviceTypeBuiltInUltraWideCamera: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltintelephotocamera
declare const AVCaptureDeviceTypeBuiltInTelephotoCamera: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltinmicrophone
declare const AVCaptureDeviceTypeBuiltInMicrophone: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypeexternalunknown
declare const AVCaptureDeviceTypeExternalUnknown: cocoascript.AVCaptureDeviceType;
// doc://com.apple.documentation/documentation/avfoundation/avcapturedevicetypebuiltinduocamera
declare const AVCaptureDeviceTypeBuiltInDuoCamera: cocoascript.AVCaptureDeviceType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcaptureautofocussystem
  type AVCaptureAutoFocusSystem = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An
   * doc://com.apple.documentation/documentation/avfoundation/avframeraterange
   */
  interface AVFrameRateRange extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avframeraterange/1386786-maxframeduration
    maxFrameDuration(): CMTime;
    setMaxFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avframeraterange/1386988-maxframerate
    maxFrameRate(): Float64;
    setMaxFrameRate(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avframeraterange/1388420-minframeduration
    minFrameDuration(): CMTime;
    setMinFrameDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avframeraterange/1389132-minframerate
    minFrameRate(): Float64;
    setMinFrameRate(): void;
    //
    alloc():AVFrameRateRange;
    //
    init():AVFrameRateRange;
  }
}

declare const AVFrameRateRange: cocoascript.AVFrameRateRange;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avcapturevideostabilizationmode
  type AVCaptureVideoStabilizationMode = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypehevcwithalpha
declare const AVVideoCodecTypeHEVCWithAlpha: cocoascript.AVVideoCodecType;
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypeappleprores422lt
declare const AVVideoCodecTypeAppleProRes422LT: cocoascript.AVVideoCodecType;
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypeappleprores422hq
declare const AVVideoCodecTypeAppleProRes422HQ: cocoascript.AVVideoCodecType;
// doc://com.apple.documentation/documentation/avfoundation/avvideocodectypeappleprores422proxy
declare const AVVideoCodecTypeAppleProRes422Proxy: cocoascript.AVVideoCodecType;
declare namespace cocoascript {
  /**
   * A configuration for defining bracketed photo captures in terms of bias relative to automatic exposure.
   * doc://com.apple.documentation/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings
   */
  interface AVCaptureAutoExposureBracketedStillImageSettings extends AVCaptureBracketedStillImageSettings {
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings/1616283-autoexposuresettingswithexposure
    autoExposureSettingsWithExposureTargetBias(exposureTargetBias: number):AVCaptureAutoExposureBracketedStillImageSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcaptureautoexposurebracketedstillimagesettings/1616293-exposuretargetbias
    exposureTargetBias(): number;
    setExposureTargetBias(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings
   */
  interface AVCaptureManualExposureBracketedStillImageSettings extends AVCaptureBracketedStillImageSettings {
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/1616313-manualexposuresettingswithexposu
    manualExposureSettingsWithExposureDuration_ISO(duration: CMTime, ISO: number):AVCaptureManualExposureBracketedStillImageSettings;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/1616282-iso
    ISO(): number;
    setISO(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avcapturemanualexposurebracketedstillimagesettings/1616312-exposureduration
    exposureDuration(): CMTime;
    setExposureDuration(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avcapturebracketedstillimagesettings
   */
  interface AVCaptureBracketedStillImageSettings extends NSObject {
    //
    alloc():AVCaptureBracketedStillImageSettings;
    //
    init():AVCaptureBracketedStillImageSettings;
  }
}

declare const AVCaptureBracketedStillImageSettings: cocoascript.AVCaptureBracketedStillImageSettings;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeface
declare const AVMetadataObjectTypeFace: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeupcecode
declare const AVMetadataObjectTypeUPCECode: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypecode39code
declare const AVMetadataObjectTypeCode39Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypecode39mod43code
declare const AVMetadataObjectTypeCode39Mod43Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeean13code
declare const AVMetadataObjectTypeEAN13Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeean8code
declare const AVMetadataObjectTypeEAN8Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypecode93code
declare const AVMetadataObjectTypeCode93Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypecode128code
declare const AVMetadataObjectTypeCode128Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypepdf417code
declare const AVMetadataObjectTypePDF417Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeqrcode
declare const AVMetadataObjectTypeQRCode: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeazteccode
declare const AVMetadataObjectTypeAztecCode: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeinterleaved2of5code
declare const AVMetadataObjectTypeInterleaved2of5Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypeitf14code
declare const AVMetadataObjectTypeITF14Code: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypedatamatrixcode
declare const AVMetadataObjectTypeDataMatrixCode: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypecatbody
declare const AVMetadataObjectTypeCatBody: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypedogbody
declare const AVMetadataObjectTypeDogBody: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypehumanbody
declare const AVMetadataObjectTypeHumanBody: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataobjecttypesalientobject
declare const AVMetadataObjectTypeSalientObject: cocoascript.AVMetadataObjectType;
// doc://com.apple.documentation/documentation/avfoundation/avlayervideogravityresizeaspect
declare const AVLayerVideoGravityResizeAspect: cocoascript.AVLayerVideoGravity;
// doc://com.apple.documentation/documentation/avfoundation/avlayervideogravityresizeaspectfill
declare const AVLayerVideoGravityResizeAspectFill: cocoascript.AVLayerVideoGravity;
// doc://com.apple.documentation/documentation/avfoundation/avlayervideogravityresize
declare const AVLayerVideoGravityResize: cocoascript.AVLayerVideoGravity;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategoryplayandrecord
declare const AVAudioSessionCategoryPlayAndRecord: cocoascript.AVAudioSessionCategory;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategorysoloambient
declare const AVAudioSessionCategorySoloAmbient: cocoascript.AVAudioSessionCategory;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategorymultiroute
declare const AVAudioSessionCategoryMultiRoute: cocoascript.AVAudioSessionCategory;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessioninterruptiontype
  type AVAudioSessionInterruptionType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessioninterruptionoptions
  type AVAudioSessionInterruptionOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionroutechangereason
  type AVAudioSessionRouteChangeReason = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionsilencesecondaryaudiohinttype
  type AVAudioSessionSilenceSecondaryAudioHintType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A class that provides details about an audio unit such as: type, subtype, manufacturer, and location.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent
   */
  interface AVAudioUnitComponent extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1385910-audiocomponent
    audioComponent(): AudioComponent;
    setAudioComponent(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1387404-audiocomponentdescription
    audioComponentDescription(): AudioComponentDescription;
    setAudioComponentDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1387088-availablearchitectures
    availableArchitectures(): NSNumber;
    setAvailableArchitectures(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1388088-componenturl
    componentURL(): NSURL;
    setComponentURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1390327-configurationdictionary
    configurationDictionary(): id;
    setConfigurationDictionary(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1388384-hascustomview
    hasCustomView(): BOOL;
    setHasCustomView(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1389600-hasmidiinput
    hasMIDIInput(): BOOL;
    setHasMIDIInput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1387070-hasmidioutput
    hasMIDIOutput(): BOOL;
    setHasMIDIOutput(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1387472-manufacturername
    manufacturerName(): string | cocoascript.NSString;
    setManufacturerName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1385941-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1388306-passesauval
    passesAUVal(): BOOL;
    setPassesAUVal(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1390100-sandboxsafe
    sandboxSafe(): BOOL;
    setSandboxSafe(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1389351-supportsnumberinputchannels
    supportsNumberInputChannels_outputChannels(numInputChannels: NSInteger, numOutputChannels: NSInteger):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1389988-typename
    typeName(): string | cocoascript.NSString;
    setTypeName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1387762-version
    version(): NSUInteger;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1388446-versionstring
    versionString(): string | cocoascript.NSString;
    setVersionString(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1390618-iconurl
    iconURL(): NSURL;
    setIconURL(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1385647-icon
    icon(): NSImage;
    setIcon(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1390541-localizedtypename
    localizedTypeName(): string | cocoascript.NSString;
    setLocalizedTypeName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1387996-alltagnames
    allTagNames(): string | cocoascript.NSString;
    setAllTagNames(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponent/1385609-usertagnames
    userTagNames(): string | cocoascript.NSString;
    setUserTagNames(): void;
    //
    alloc():AVAudioUnitComponent;
    //
    init():AVAudioUnitComponent;
  }
}

declare const AVAudioUnitComponent: cocoascript.AVAudioUnitComponent;
// doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponenttagsdidchangenotification
declare const AVAudioUnitComponentTagsDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetsegmenttype
  type AVAssetSegmentType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that provides information on a track in segment data.
   * doc://com.apple.documentation/documentation/avfoundation/avassetsegmenttrackreport
   */
  interface AVAssetSegmentTrackReport extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmenttrackreport/3546581-trackid
    trackID(): CMPersistentTrackID;
    setTrackID(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmenttrackreport/3546580-mediatype
    mediaType(): AVMediaType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmenttrackreport/3546578-duration
    duration(): CMTime;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmenttrackreport/3600083-earliestpresentationtimestamp
    earliestPresentationTimeStamp(): CMTime;
    setEarliestPresentationTimeStamp(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmenttrackreport/3546579-firstvideosampleinformation
    firstVideoSampleInformation(): AVAssetSegmentReportSampleInformation;
    setFirstVideoSampleInformation(): void;
    //
    alloc():AVAssetSegmentTrackReport;
    //
    init():AVAssetSegmentTrackReport;
  }
}

declare const AVAssetSegmentTrackReport: cocoascript.AVAssetSegmentTrackReport;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetwriterstatus
  type AVAssetWriterStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that defines an interface for querying about the requirements of the current pass.
   * doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpassdescription
   */
  interface AVAssetWriterInputPassDescription extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputpassdescription/1388732-sourcetimeranges
    sourceTimeRanges(): NSValue;
    setSourceTimeRanges(): void;
    //
    alloc():AVAssetWriterInputPassDescription;
    //
    init():AVAssetWriterInputPassDescription;
  }
}

declare const AVAssetWriterInputPassDescription: cocoascript.AVAssetWriterInputPassDescription;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmediadatalocation
  type AVAssetWriterInputMediaDataLocation = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutputtextstylingresolution
  type AVPlayerItemLegibleOutputTextStylingResolution = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object representing a connection to a mixer node from a node that conforms to the
   * doc://com.apple.documentation/documentation/avfoundation/avaudiomixingdestination
   */
  interface AVAudioMixingDestination extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiomixingdestination/1389898-connectionpoint
    connectionPoint(): AVAudioConnectionPoint;
    setConnectionPoint(): void;
    //
    alloc():AVAudioMixingDestination;
    //
    init():AVAudioMixingDestination;
  }
}

declare const AVAudioMixingDestination: cocoascript.AVAudioMixingDestination;
declare namespace cocoascript {
  /**
   * An audio unit subclass that generates audio output.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitgenerator
   */
  interface AVAudioUnitGenerator extends AVAudioUnit {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitgenerator/1387964-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription):AVAudioUnitGenerator;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitgenerator/1390858-bypass
    bypass(): BOOL;
    setBypass(): void;
    //
    alloc():AVAudioUnitGenerator;
    //
    init():AVAudioUnitGenerator;
  }
}

declare const AVAudioUnitGenerator: cocoascript.AVAudioUnitGenerator;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioenvironmentdistanceattenuationmodel
  type AVAudioEnvironmentDistanceAttenuationModel = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequestretryreasonreceivedobsoletecontentkey
declare const AVContentKeyRequestRetryReasonReceivedObsoleteContentKey: cocoascript.AVContentKeyRequestRetryReason;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequestretryreasonreceivedresponsewithexpiredlease
declare const AVContentKeyRequestRetryReasonReceivedResponseWithExpiredLease: cocoascript.AVContentKeyRequestRetryReason;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeyrequestretryreasontimedout
declare const AVContentKeyRequestRetryReasonTimedOut: cocoascript.AVContentKeyRequestRetryReason;
declare namespace cocoascript {
  interface AVEdgeWidths {
  }
}
declare namespace cocoascript {
  interface AVPixelAspectRatio {
  }
}
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspaceaudiofile
declare const AVMetadataKeySpaceAudioFile: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspacecommon
declare const AVMetadataKeySpaceCommon: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspacehlsdaterange
declare const AVMetadataKeySpaceHLSDateRange: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspaceitunes
declare const AVMetadataKeySpaceiTunes: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspaceicy
declare const AVMetadataKeySpaceIcy: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspaceid3
declare const AVMetadataKeySpaceID3: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspaceisouserdata
declare const AVMetadataKeySpaceISOUserData: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspacequicktimemetadata
declare const AVMetadataKeySpaceQuickTimeMetadata: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatakeyspacequicktimeuserdata
declare const AVMetadataKeySpaceQuickTimeUserData: cocoascript.AVMetadataKeySpace;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyaccessibilitydescription
declare const AVMetadataCommonKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyalbumname
declare const AVMetadataCommonKeyAlbumName: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyartist
declare const AVMetadataCommonKeyArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyartwork
declare const AVMetadataCommonKeyArtwork: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyauthor
declare const AVMetadataCommonKeyAuthor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeycontributor
declare const AVMetadataCommonKeyContributor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeycopyrights
declare const AVMetadataCommonKeyCopyrights: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeycreationdate
declare const AVMetadataCommonKeyCreationDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeycreator
declare const AVMetadataCommonKeyCreator: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeydescription
declare const AVMetadataCommonKeyDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyformat
declare const AVMetadataCommonKeyFormat: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyidentifier
declare const AVMetadataCommonKeyIdentifier: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeylanguage
declare const AVMetadataCommonKeyLanguage: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeylastmodifieddate
declare const AVMetadataCommonKeyLastModifiedDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeylocation
declare const AVMetadataCommonKeyLocation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeymake
declare const AVMetadataCommonKeyMake: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeymodel
declare const AVMetadataCommonKeyModel: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeypublisher
declare const AVMetadataCommonKeyPublisher: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeyrelation
declare const AVMetadataCommonKeyRelation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeysoftware
declare const AVMetadataCommonKeySoftware: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeysource
declare const AVMetadataCommonKeySource: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeysubject
declare const AVMetadataCommonKeySubject: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeytitle
declare const AVMetadataCommonKeyTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonkeytype
declare const AVMetadataCommonKeyType: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyaccountkind
declare const AVMetadataiTunesMetadataKeyAccountKind: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyacknowledgement
declare const AVMetadataiTunesMetadataKeyAcknowledgement: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyalbum
declare const AVMetadataiTunesMetadataKeyAlbum: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyalbumartist
declare const AVMetadataiTunesMetadataKeyAlbumArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyappleid
declare const AVMetadataiTunesMetadataKeyAppleID: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyarranger
declare const AVMetadataiTunesMetadataKeyArranger: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyartdirector
declare const AVMetadataiTunesMetadataKeyArtDirector: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyartist
declare const AVMetadataiTunesMetadataKeyArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyartistid
declare const AVMetadataiTunesMetadataKeyArtistID: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyauthor
declare const AVMetadataiTunesMetadataKeyAuthor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeybeatspermin
declare const AVMetadataiTunesMetadataKeyBeatsPerMin: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeycomposer
declare const AVMetadataiTunesMetadataKeyComposer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyconductor
declare const AVMetadataiTunesMetadataKeyConductor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeycontentrating
declare const AVMetadataiTunesMetadataKeyContentRating: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeycopyright
declare const AVMetadataiTunesMetadataKeyCopyright: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeycoverart
declare const AVMetadataiTunesMetadataKeyCoverArt: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeycredits
declare const AVMetadataiTunesMetadataKeyCredits: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeydescription
declare const AVMetadataiTunesMetadataKeyDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeydirector
declare const AVMetadataiTunesMetadataKeyDirector: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeydisccompilation
declare const AVMetadataiTunesMetadataKeyDiscCompilation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeydiscnumber
declare const AVMetadataiTunesMetadataKeyDiscNumber: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyeq
declare const AVMetadataiTunesMetadataKeyEQ: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyencodedby
declare const AVMetadataiTunesMetadataKeyEncodedBy: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyencodingtool
declare const AVMetadataiTunesMetadataKeyEncodingTool: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyexecproducer
declare const AVMetadataiTunesMetadataKeyExecProducer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeygenreid
declare const AVMetadataiTunesMetadataKeyGenreID: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeygrouping
declare const AVMetadataiTunesMetadataKeyGrouping: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeylinernotes
declare const AVMetadataiTunesMetadataKeyLinerNotes: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeylyrics
declare const AVMetadataiTunesMetadataKeyLyrics: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyonlineextras
declare const AVMetadataiTunesMetadataKeyOnlineExtras: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyoriginalartist
declare const AVMetadataiTunesMetadataKeyOriginalArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyperformer
declare const AVMetadataiTunesMetadataKeyPerformer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyphonogramrights
declare const AVMetadataiTunesMetadataKeyPhonogramRights: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyplaylistid
declare const AVMetadataiTunesMetadataKeyPlaylistID: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeypredefinedgenre
declare const AVMetadataiTunesMetadataKeyPredefinedGenre: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyproducer
declare const AVMetadataiTunesMetadataKeyProducer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeypublisher
declare const AVMetadataiTunesMetadataKeyPublisher: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyrecordcompany
declare const AVMetadataiTunesMetadataKeyRecordCompany: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyreleasedate
declare const AVMetadataiTunesMetadataKeyReleaseDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeysoloist
declare const AVMetadataiTunesMetadataKeySoloist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeysongid
declare const AVMetadataiTunesMetadataKeySongID: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeysongname
declare const AVMetadataiTunesMetadataKeySongName: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeysoundengineer
declare const AVMetadataiTunesMetadataKeySoundEngineer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeythanks
declare const AVMetadataiTunesMetadataKeyThanks: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeytracknumber
declare const AVMetadataiTunesMetadataKeyTrackNumber: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeytracksubtitle
declare const AVMetadataiTunesMetadataKeyTrackSubTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyusercomment
declare const AVMetadataiTunesMetadataKeyUserComment: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataitunesmetadatakeyusergenre
declare const AVMetadataiTunesMetadataKeyUserGenre: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataicymetadatakeystreamtitle
declare const AVMetadataIcyMetadataKeyStreamTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataicymetadatakeystreamurl
declare const AVMetadataIcyMetadataKeyStreamURL: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyalbumsortorder
declare const AVMetadataID3MetadataKeyAlbumSortOrder: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyalbumtitle
declare const AVMetadataID3MetadataKeyAlbumTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyattachedpicture
declare const AVMetadataID3MetadataKeyAttachedPicture: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyaudioencryption
declare const AVMetadataID3MetadataKeyAudioEncryption: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyaudioseekpointindex
declare const AVMetadataID3MetadataKeyAudioSeekPointIndex: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyband
declare const AVMetadataID3MetadataKeyBand: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeybeatsperminute
declare const AVMetadataID3MetadataKeyBeatsPerMinute: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycomments
declare const AVMetadataID3MetadataKeyComments: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycommercial
declare const AVMetadataID3MetadataKeyCommercial: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycommerical
declare const AVMetadataID3MetadataKeyCommerical: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycommercialinformation
declare const AVMetadataID3MetadataKeyCommercialInformation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycomposer
declare const AVMetadataID3MetadataKeyComposer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyconductor
declare const AVMetadataID3MetadataKeyConductor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycontentgroupdescription
declare const AVMetadataID3MetadataKeyContentGroupDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycontenttype
declare const AVMetadataID3MetadataKeyContentType: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycopyright
declare const AVMetadataID3MetadataKeyCopyright: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeycopyrightinformation
declare const AVMetadataID3MetadataKeyCopyrightInformation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeydate
declare const AVMetadataID3MetadataKeyDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyencodedby
declare const AVMetadataID3MetadataKeyEncodedBy: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyencodedwith
declare const AVMetadataID3MetadataKeyEncodedWith: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyencodingtime
declare const AVMetadataID3MetadataKeyEncodingTime: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyencryption
declare const AVMetadataID3MetadataKeyEncryption: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyequalization
declare const AVMetadataID3MetadataKeyEqualization: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyequalization2
declare const AVMetadataID3MetadataKeyEqualization2: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyeventtimingcodes
declare const AVMetadataID3MetadataKeyEventTimingCodes: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyfileowner
declare const AVMetadataID3MetadataKeyFileOwner: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyfiletype
declare const AVMetadataID3MetadataKeyFileType: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeygeneralencapsulatedobject
declare const AVMetadataID3MetadataKeyGeneralEncapsulatedObject: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeygroupidentifier
declare const AVMetadataID3MetadataKeyGroupIdentifier: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyinitialkey
declare const AVMetadataID3MetadataKeyInitialKey: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyinternationalstandardrecordingcode
declare const AVMetadataID3MetadataKeyInternationalStandardRecordingCode: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyinternetradiostationname
declare const AVMetadataID3MetadataKeyInternetRadioStationName: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyinternetradiostationowner
declare const AVMetadataID3MetadataKeyInternetRadioStationOwner: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyinvolvedpeoplelist_v23
declare const AVMetadataID3MetadataKeyInvolvedPeopleList_v23: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyinvolvedpeoplelist_v24
declare const AVMetadataID3MetadataKeyInvolvedPeopleList_v24: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeylanguage
declare const AVMetadataID3MetadataKeyLanguage: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyleadperformer
declare const AVMetadataID3MetadataKeyLeadPerformer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeylength
declare const AVMetadataID3MetadataKeyLength: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeylink
declare const AVMetadataID3MetadataKeyLink: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeylyricist
declare const AVMetadataID3MetadataKeyLyricist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeympeglocationlookuptable
declare const AVMetadataID3MetadataKeyMPEGLocationLookupTable: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeymediatype
declare const AVMetadataID3MetadataKeyMediaType: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeymodifiedby
declare const AVMetadataID3MetadataKeyModifiedBy: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeymood
declare const AVMetadataID3MetadataKeyMood: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeymusiccdidentifier
declare const AVMetadataID3MetadataKeyMusicCDIdentifier: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeymusiciancreditslist
declare const AVMetadataID3MetadataKeyMusicianCreditsList: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyofficialartistwebpage
declare const AVMetadataID3MetadataKeyOfficialArtistWebpage: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyofficialaudiofilewebpage
declare const AVMetadataID3MetadataKeyOfficialAudioFileWebpage: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyofficialaudiosourcewebpage
declare const AVMetadataID3MetadataKeyOfficialAudioSourceWebpage: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyofficialinternetradiostationhomepage
declare const AVMetadataID3MetadataKeyOfficialInternetRadioStationHomepage: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyofficialpublisherwebpage
declare const AVMetadataID3MetadataKeyOfficialPublisherWebpage: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyoriginalalbumtitle
declare const AVMetadataID3MetadataKeyOriginalAlbumTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyoriginalartist
declare const AVMetadataID3MetadataKeyOriginalArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyoriginalfilename
declare const AVMetadataID3MetadataKeyOriginalFilename: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyoriginallyricist
declare const AVMetadataID3MetadataKeyOriginalLyricist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyoriginalreleasetime
declare const AVMetadataID3MetadataKeyOriginalReleaseTime: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyoriginalreleaseyear
declare const AVMetadataID3MetadataKeyOriginalReleaseYear: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyownership
declare const AVMetadataID3MetadataKeyOwnership: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeypartofaset
declare const AVMetadataID3MetadataKeyPartOfASet: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeypayment
declare const AVMetadataID3MetadataKeyPayment: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyperformersortorder
declare const AVMetadataID3MetadataKeyPerformerSortOrder: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyplaycounter
declare const AVMetadataID3MetadataKeyPlayCounter: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyplaylistdelay
declare const AVMetadataID3MetadataKeyPlaylistDelay: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeypopularimeter
declare const AVMetadataID3MetadataKeyPopularimeter: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeypositionsynchronization
declare const AVMetadataID3MetadataKeyPositionSynchronization: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyprivate
declare const AVMetadataID3MetadataKeyPrivate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyproducednotice
declare const AVMetadataID3MetadataKeyProducedNotice: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeypublisher
declare const AVMetadataID3MetadataKeyPublisher: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyrecommendedbuffersize
declare const AVMetadataID3MetadataKeyRecommendedBufferSize: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyrecordingdates
declare const AVMetadataID3MetadataKeyRecordingDates: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyrecordingtime
declare const AVMetadataID3MetadataKeyRecordingTime: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyrelativevolumeadjustment
declare const AVMetadataID3MetadataKeyRelativeVolumeAdjustment: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyrelativevolumeadjustment2
declare const AVMetadataID3MetadataKeyRelativeVolumeAdjustment2: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyreleasetime
declare const AVMetadataID3MetadataKeyReleaseTime: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyreverb
declare const AVMetadataID3MetadataKeyReverb: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyseek
declare const AVMetadataID3MetadataKeySeek: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeysetsubtitle
declare const AVMetadataID3MetadataKeySetSubtitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeysignature
declare const AVMetadataID3MetadataKeySignature: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeysize
declare const AVMetadataID3MetadataKeySize: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeysubtitle
declare const AVMetadataID3MetadataKeySubTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeysynchronizedlyric
declare const AVMetadataID3MetadataKeySynchronizedLyric: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeysynchronizedtempocodes
declare const AVMetadataID3MetadataKeySynchronizedTempoCodes: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeytaggingtime
declare const AVMetadataID3MetadataKeyTaggingTime: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeytermsofuse
declare const AVMetadataID3MetadataKeyTermsOfUse: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeytime
declare const AVMetadataID3MetadataKeyTime: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeytitledescription
declare const AVMetadataID3MetadataKeyTitleDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeytitlesortorder
declare const AVMetadataID3MetadataKeyTitleSortOrder: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeytracknumber
declare const AVMetadataID3MetadataKeyTrackNumber: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyuniquefileidentifier
declare const AVMetadataID3MetadataKeyUniqueFileIdentifier: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyunsynchronizedlyric
declare const AVMetadataID3MetadataKeyUnsynchronizedLyric: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyusertext
declare const AVMetadataID3MetadataKeyUserText: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyuserurl
declare const AVMetadataID3MetadataKeyUserURL: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataid3metadatakeyyear
declare const AVMetadataID3MetadataKeyYear: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataisouserdatakeyaccessibilitydescription
declare const AVMetadataISOUserDataKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataisouserdatakeycopyright
declare const AVMetadataISOUserDataKeyCopyright: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataisouserdatakeydate
declare const AVMetadataISOUserDataKeyDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataisouserdatakeytaggedcharacteristic
declare const AVMetadataISOUserDataKeyTaggedCharacteristic: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyaccessibilitydescription
declare const AVMetadataQuickTimeMetadataKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyalbum
declare const AVMetadataQuickTimeMetadataKeyAlbum: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyarranger
declare const AVMetadataQuickTimeMetadataKeyArranger: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyartist
declare const AVMetadataQuickTimeMetadataKeyArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyartwork
declare const AVMetadataQuickTimeMetadataKeyArtwork: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyauthor
declare const AVMetadataQuickTimeMetadataKeyAuthor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycameraframereadouttime
declare const AVMetadataQuickTimeMetadataKeyCameraFrameReadoutTime: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycameraidentifier
declare const AVMetadataQuickTimeMetadataKeyCameraIdentifier: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycollectionuser
declare const AVMetadataQuickTimeMetadataKeyCollectionUser: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycomment
declare const AVMetadataQuickTimeMetadataKeyComment: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycomposer
declare const AVMetadataQuickTimeMetadataKeyComposer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycontentidentifier
declare const AVMetadataQuickTimeMetadataKeyContentIdentifier: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycopyright
declare const AVMetadataQuickTimeMetadataKeyCopyright: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycreationdate
declare const AVMetadataQuickTimeMetadataKeyCreationDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeycredits
declare const AVMetadataQuickTimeMetadataKeyCredits: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeydescription
declare const AVMetadataQuickTimeMetadataKeyDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeydirectionfacing
declare const AVMetadataQuickTimeMetadataKeyDirectionFacing: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeydirectionmotion
declare const AVMetadataQuickTimeMetadataKeyDirectionMotion: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeydirector
declare const AVMetadataQuickTimeMetadataKeyDirector: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeydisplayname
declare const AVMetadataQuickTimeMetadataKeyDisplayName: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyencodedby
declare const AVMetadataQuickTimeMetadataKeyEncodedBy: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeygenre
declare const AVMetadataQuickTimeMetadataKeyGenre: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyinformation
declare const AVMetadataQuickTimeMetadataKeyInformation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeykeywords
declare const AVMetadataQuickTimeMetadataKeyKeywords: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeylocationbody
declare const AVMetadataQuickTimeMetadataKeyLocationBody: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeylocationdate
declare const AVMetadataQuickTimeMetadataKeyLocationDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeylocationiso6709
declare const AVMetadataQuickTimeMetadataKeyLocationISO6709: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeylocationname
declare const AVMetadataQuickTimeMetadataKeyLocationName: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeylocationnote
declare const AVMetadataQuickTimeMetadataKeyLocationNote: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeylocationrole
declare const AVMetadataQuickTimeMetadataKeyLocationRole: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeymake
declare const AVMetadataQuickTimeMetadataKeyMake: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeymodel
declare const AVMetadataQuickTimeMetadataKeyModel: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyoriginalartist
declare const AVMetadataQuickTimeMetadataKeyOriginalArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyperformer
declare const AVMetadataQuickTimeMetadataKeyPerformer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyphonogramrights
declare const AVMetadataQuickTimeMetadataKeyPhonogramRights: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyproducer
declare const AVMetadataQuickTimeMetadataKeyProducer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeypublisher
declare const AVMetadataQuickTimeMetadataKeyPublisher: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyratinguser
declare const AVMetadataQuickTimeMetadataKeyRatingUser: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeysoftware
declare const AVMetadataQuickTimeMetadataKeySoftware: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeytitle
declare const AVMetadataQuickTimeMetadataKeyTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyyear
declare const AVMetadataQuickTimeMetadataKeyYear: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimemetadatakeyixml
declare const AVMetadataQuickTimeMetadataKeyiXML: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyaccessibilitydescription
declare const AVMetadataQuickTimeUserDataKeyAccessibilityDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyalbum
declare const AVMetadataQuickTimeUserDataKeyAlbum: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyarranger
declare const AVMetadataQuickTimeUserDataKeyArranger: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyartist
declare const AVMetadataQuickTimeUserDataKeyArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyauthor
declare const AVMetadataQuickTimeUserDataKeyAuthor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeychapter
declare const AVMetadataQuickTimeUserDataKeyChapter: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeycomment
declare const AVMetadataQuickTimeUserDataKeyComment: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeycomposer
declare const AVMetadataQuickTimeUserDataKeyComposer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeycopyright
declare const AVMetadataQuickTimeUserDataKeyCopyright: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeycreationdate
declare const AVMetadataQuickTimeUserDataKeyCreationDate: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeycredits
declare const AVMetadataQuickTimeUserDataKeyCredits: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeydescription
declare const AVMetadataQuickTimeUserDataKeyDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeydirector
declare const AVMetadataQuickTimeUserDataKeyDirector: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeydisclaimer
declare const AVMetadataQuickTimeUserDataKeyDisclaimer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyencodedby
declare const AVMetadataQuickTimeUserDataKeyEncodedBy: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyfullname
declare const AVMetadataQuickTimeUserDataKeyFullName: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeygenre
declare const AVMetadataQuickTimeUserDataKeyGenre: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyhostcomputer
declare const AVMetadataQuickTimeUserDataKeyHostComputer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyinformation
declare const AVMetadataQuickTimeUserDataKeyInformation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeykeywords
declare const AVMetadataQuickTimeUserDataKeyKeywords: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeylocationiso6709
declare const AVMetadataQuickTimeUserDataKeyLocationISO6709: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeymake
declare const AVMetadataQuickTimeUserDataKeyMake: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeymodel
declare const AVMetadataQuickTimeUserDataKeyModel: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyoriginalartist
declare const AVMetadataQuickTimeUserDataKeyOriginalArtist: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyoriginalformat
declare const AVMetadataQuickTimeUserDataKeyOriginalFormat: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyoriginalsource
declare const AVMetadataQuickTimeUserDataKeyOriginalSource: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyperformers
declare const AVMetadataQuickTimeUserDataKeyPerformers: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyphonogramrights
declare const AVMetadataQuickTimeUserDataKeyPhonogramRights: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyproducer
declare const AVMetadataQuickTimeUserDataKeyProducer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyproduct
declare const AVMetadataQuickTimeUserDataKeyProduct: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeypublisher
declare const AVMetadataQuickTimeUserDataKeyPublisher: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeysoftware
declare const AVMetadataQuickTimeUserDataKeySoftware: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyspecialplaybackrequirements
declare const AVMetadataQuickTimeUserDataKeySpecialPlaybackRequirements: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeytaggedcharacteristic
declare const AVMetadataQuickTimeUserDataKeyTaggedCharacteristic: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeytrack
declare const AVMetadataQuickTimeUserDataKeyTrack: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeytrackname
declare const AVMetadataQuickTimeUserDataKeyTrackName: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeyurllink
declare const AVMetadataQuickTimeUserDataKeyURLLink: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeywarning
declare const AVMetadataQuickTimeUserDataKeyWarning: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataquicktimeuserdatakeywriter
declare const AVMetadataQuickTimeUserDataKeyWriter: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeyalbumandtrack
declare const AVMetadata3GPUserDataKeyAlbumAndTrack: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeyauthor
declare const AVMetadata3GPUserDataKeyAuthor: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeycollection
declare const AVMetadata3GPUserDataKeyCollection: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeycopyright
declare const AVMetadata3GPUserDataKeyCopyright: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeydescription
declare const AVMetadata3GPUserDataKeyDescription: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeygenre
declare const AVMetadata3GPUserDataKeyGenre: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeykeywordlist
declare const AVMetadata3GPUserDataKeyKeywordList: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeylocation
declare const AVMetadata3GPUserDataKeyLocation: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeymediaclassification
declare const AVMetadata3GPUserDataKeyMediaClassification: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeymediarating
declare const AVMetadata3GPUserDataKeyMediaRating: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeyperformer
declare const AVMetadata3GPUserDataKeyPerformer: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeyrecordingyear
declare const AVMetadata3GPUserDataKeyRecordingYear: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeythumbnail
declare const AVMetadata3GPUserDataKeyThumbnail: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeytitle
declare const AVMetadata3GPUserDataKeyTitle: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadata3gpuserdatakeyuserrating
declare const AVMetadata3GPUserDataKeyUserRating: cocoascript.AVMetadataKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataextraattributebaseurikey
declare const AVMetadataExtraAttributeBaseURIKey: cocoascript.AVMetadataExtraAttributeKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataextraattributeinfokey
declare const AVMetadataExtraAttributeInfoKey: cocoascript.AVMetadataExtraAttributeKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataextraattributevalueurikey
declare const AVMetadataExtraAttributeValueURIKey: cocoascript.AVMetadataExtraAttributeKey;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifieraccessibilitydescription
declare const AVMetadataCommonIdentifierAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifieralbumname
declare const AVMetadataCommonIdentifierAlbumName: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierartist
declare const AVMetadataCommonIdentifierArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierartwork
declare const AVMetadataCommonIdentifierArtwork: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierassetidentifier
declare const AVMetadataCommonIdentifierAssetIdentifier: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierauthor
declare const AVMetadataCommonIdentifierAuthor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiercontributor
declare const AVMetadataCommonIdentifierContributor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiercopyrights
declare const AVMetadataCommonIdentifierCopyrights: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiercreationdate
declare const AVMetadataCommonIdentifierCreationDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiercreator
declare const AVMetadataCommonIdentifierCreator: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierdescription
declare const AVMetadataCommonIdentifierDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierformat
declare const AVMetadataCommonIdentifierFormat: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierlanguage
declare const AVMetadataCommonIdentifierLanguage: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierlastmodifieddate
declare const AVMetadataCommonIdentifierLastModifiedDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierlocation
declare const AVMetadataCommonIdentifierLocation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiermake
declare const AVMetadataCommonIdentifierMake: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiermodel
declare const AVMetadataCommonIdentifierModel: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierpublisher
declare const AVMetadataCommonIdentifierPublisher: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifierrelation
declare const AVMetadataCommonIdentifierRelation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiersoftware
declare const AVMetadataCommonIdentifierSoftware: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiersource
declare const AVMetadataCommonIdentifierSource: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiersubject
declare const AVMetadataCommonIdentifierSubject: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiertitle
declare const AVMetadataCommonIdentifierTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadatacommonidentifiertype
declare const AVMetadataCommonIdentifierType: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataaccountkind
declare const AVMetadataIdentifieriTunesMetadataAccountKind: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataacknowledgement
declare const AVMetadataIdentifieriTunesMetadataAcknowledgement: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataalbum
declare const AVMetadataIdentifieriTunesMetadataAlbum: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataalbumartist
declare const AVMetadataIdentifieriTunesMetadataAlbumArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataappleid
declare const AVMetadataIdentifieriTunesMetadataAppleID: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataarranger
declare const AVMetadataIdentifieriTunesMetadataArranger: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataartdirector
declare const AVMetadataIdentifieriTunesMetadataArtDirector: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataartist
declare const AVMetadataIdentifieriTunesMetadataArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataartistid
declare const AVMetadataIdentifieriTunesMetadataArtistID: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataauthor
declare const AVMetadataIdentifieriTunesMetadataAuthor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatabeatspermin
declare const AVMetadataIdentifieriTunesMetadataBeatsPerMin: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatacomposer
declare const AVMetadataIdentifieriTunesMetadataComposer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataconductor
declare const AVMetadataIdentifieriTunesMetadataConductor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatacontentrating
declare const AVMetadataIdentifieriTunesMetadataContentRating: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatacopyright
declare const AVMetadataIdentifieriTunesMetadataCopyright: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatacoverart
declare const AVMetadataIdentifieriTunesMetadataCoverArt: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatacredits
declare const AVMetadataIdentifieriTunesMetadataCredits: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatadescription
declare const AVMetadataIdentifieriTunesMetadataDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatadirector
declare const AVMetadataIdentifieriTunesMetadataDirector: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatadisccompilation
declare const AVMetadataIdentifieriTunesMetadataDiscCompilation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatadiscnumber
declare const AVMetadataIdentifieriTunesMetadataDiscNumber: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataeq
declare const AVMetadataIdentifieriTunesMetadataEQ: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataencodedby
declare const AVMetadataIdentifieriTunesMetadataEncodedBy: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataencodingtool
declare const AVMetadataIdentifieriTunesMetadataEncodingTool: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataexecproducer
declare const AVMetadataIdentifieriTunesMetadataExecProducer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatagenreid
declare const AVMetadataIdentifieriTunesMetadataGenreID: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatagrouping
declare const AVMetadataIdentifieriTunesMetadataGrouping: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatalinernotes
declare const AVMetadataIdentifieriTunesMetadataLinerNotes: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatalyrics
declare const AVMetadataIdentifieriTunesMetadataLyrics: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataonlineextras
declare const AVMetadataIdentifieriTunesMetadataOnlineExtras: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataoriginalartist
declare const AVMetadataIdentifieriTunesMetadataOriginalArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataperformer
declare const AVMetadataIdentifieriTunesMetadataPerformer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataphonogramrights
declare const AVMetadataIdentifieriTunesMetadataPhonogramRights: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataplaylistid
declare const AVMetadataIdentifieriTunesMetadataPlaylistID: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatapredefinedgenre
declare const AVMetadataIdentifieriTunesMetadataPredefinedGenre: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadataproducer
declare const AVMetadataIdentifieriTunesMetadataProducer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatapublisher
declare const AVMetadataIdentifieriTunesMetadataPublisher: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatarecordcompany
declare const AVMetadataIdentifieriTunesMetadataRecordCompany: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatareleasedate
declare const AVMetadataIdentifieriTunesMetadataReleaseDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatasoloist
declare const AVMetadataIdentifieriTunesMetadataSoloist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatasongid
declare const AVMetadataIdentifieriTunesMetadataSongID: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatasongname
declare const AVMetadataIdentifieriTunesMetadataSongName: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatasoundengineer
declare const AVMetadataIdentifieriTunesMetadataSoundEngineer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatathanks
declare const AVMetadataIdentifieriTunesMetadataThanks: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatatracknumber
declare const AVMetadataIdentifieriTunesMetadataTrackNumber: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatatracksubtitle
declare const AVMetadataIdentifieriTunesMetadataTrackSubTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatausercomment
declare const AVMetadataIdentifieriTunesMetadataUserComment: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifieritunesmetadatausergenre
declare const AVMetadataIdentifieriTunesMetadataUserGenre: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifiericymetadatastreamtitle
declare const AVMetadataIdentifierIcyMetadataStreamTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifiericymetadatastreamurl
declare const AVMetadataIdentifierIcyMetadataStreamURL: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataalbumsortorder
declare const AVMetadataIdentifierID3MetadataAlbumSortOrder: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataalbumtitle
declare const AVMetadataIdentifierID3MetadataAlbumTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataattachedpicture
declare const AVMetadataIdentifierID3MetadataAttachedPicture: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataaudioencryption
declare const AVMetadataIdentifierID3MetadataAudioEncryption: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataaudioseekpointindex
declare const AVMetadataIdentifierID3MetadataAudioSeekPointIndex: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataband
declare const AVMetadataIdentifierID3MetadataBand: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatabeatsperminute
declare const AVMetadataIdentifierID3MetadataBeatsPerMinute: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacomments
declare const AVMetadataIdentifierID3MetadataComments: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacommercial
declare const AVMetadataIdentifierID3MetadataCommercial: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacommerical
declare const AVMetadataIdentifierID3MetadataCommerical: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacommercialinformation
declare const AVMetadataIdentifierID3MetadataCommercialInformation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacomposer
declare const AVMetadataIdentifierID3MetadataComposer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataconductor
declare const AVMetadataIdentifierID3MetadataConductor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacontentgroupdescription
declare const AVMetadataIdentifierID3MetadataContentGroupDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacontenttype
declare const AVMetadataIdentifierID3MetadataContentType: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacopyright
declare const AVMetadataIdentifierID3MetadataCopyright: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatacopyrightinformation
declare const AVMetadataIdentifierID3MetadataCopyrightInformation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatadate
declare const AVMetadataIdentifierID3MetadataDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataencodedby
declare const AVMetadataIdentifierID3MetadataEncodedBy: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataencodedwith
declare const AVMetadataIdentifierID3MetadataEncodedWith: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataencodingtime
declare const AVMetadataIdentifierID3MetadataEncodingTime: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataencryption
declare const AVMetadataIdentifierID3MetadataEncryption: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataequalization
declare const AVMetadataIdentifierID3MetadataEqualization: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataequalization2
declare const AVMetadataIdentifierID3MetadataEqualization2: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataeventtimingcodes
declare const AVMetadataIdentifierID3MetadataEventTimingCodes: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatafileowner
declare const AVMetadataIdentifierID3MetadataFileOwner: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatafiletype
declare const AVMetadataIdentifierID3MetadataFileType: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatageneralencapsulatedobject
declare const AVMetadataIdentifierID3MetadataGeneralEncapsulatedObject: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatagroupidentifier
declare const AVMetadataIdentifierID3MetadataGroupIdentifier: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatainitialkey
declare const AVMetadataIdentifierID3MetadataInitialKey: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatainternationalstandardrecordingcode
declare const AVMetadataIdentifierID3MetadataInternationalStandardRecordingCode: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatainternetradiostationname
declare const AVMetadataIdentifierID3MetadataInternetRadioStationName: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatainternetradiostationowner
declare const AVMetadataIdentifierID3MetadataInternetRadioStationOwner: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatainvolvedpeoplelist_v23
declare const AVMetadataIdentifierID3MetadataInvolvedPeopleList_v23: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatainvolvedpeoplelist_v24
declare const AVMetadataIdentifierID3MetadataInvolvedPeopleList_v24: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatalanguage
declare const AVMetadataIdentifierID3MetadataLanguage: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataleadperformer
declare const AVMetadataIdentifierID3MetadataLeadPerformer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatalength
declare const AVMetadataIdentifierID3MetadataLength: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatalink
declare const AVMetadataIdentifierID3MetadataLink: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatalyricist
declare const AVMetadataIdentifierID3MetadataLyricist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatampeglocationlookuptable
declare const AVMetadataIdentifierID3MetadataMPEGLocationLookupTable: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatamediatype
declare const AVMetadataIdentifierID3MetadataMediaType: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatamodifiedby
declare const AVMetadataIdentifierID3MetadataModifiedBy: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatamood
declare const AVMetadataIdentifierID3MetadataMood: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatamusiccdidentifier
declare const AVMetadataIdentifierID3MetadataMusicCDIdentifier: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatamusiciancreditslist
declare const AVMetadataIdentifierID3MetadataMusicianCreditsList: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataofficialartistwebpage
declare const AVMetadataIdentifierID3MetadataOfficialArtistWebpage: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataofficialaudiofilewebpage
declare const AVMetadataIdentifierID3MetadataOfficialAudioFileWebpage: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataofficialaudiosourcewebpage
declare const AVMetadataIdentifierID3MetadataOfficialAudioSourceWebpage: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataofficialinternetradiostationhomepage
declare const AVMetadataIdentifierID3MetadataOfficialInternetRadioStationHomepage: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataofficialpublisherwebpage
declare const AVMetadataIdentifierID3MetadataOfficialPublisherWebpage: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataoriginalalbumtitle
declare const AVMetadataIdentifierID3MetadataOriginalAlbumTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataoriginalartist
declare const AVMetadataIdentifierID3MetadataOriginalArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataoriginalfilename
declare const AVMetadataIdentifierID3MetadataOriginalFilename: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataoriginallyricist
declare const AVMetadataIdentifierID3MetadataOriginalLyricist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataoriginalreleasetime
declare const AVMetadataIdentifierID3MetadataOriginalReleaseTime: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataoriginalreleaseyear
declare const AVMetadataIdentifierID3MetadataOriginalReleaseYear: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataownership
declare const AVMetadataIdentifierID3MetadataOwnership: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatapartofaset
declare const AVMetadataIdentifierID3MetadataPartOfASet: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatapayment
declare const AVMetadataIdentifierID3MetadataPayment: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataperformersortorder
declare const AVMetadataIdentifierID3MetadataPerformerSortOrder: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataplaycounter
declare const AVMetadataIdentifierID3MetadataPlayCounter: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataplaylistdelay
declare const AVMetadataIdentifierID3MetadataPlaylistDelay: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatapopularimeter
declare const AVMetadataIdentifierID3MetadataPopularimeter: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatapositionsynchronization
declare const AVMetadataIdentifierID3MetadataPositionSynchronization: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataprivate
declare const AVMetadataIdentifierID3MetadataPrivate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataproducednotice
declare const AVMetadataIdentifierID3MetadataProducedNotice: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatapublisher
declare const AVMetadataIdentifierID3MetadataPublisher: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatarecommendedbuffersize
declare const AVMetadataIdentifierID3MetadataRecommendedBufferSize: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatarecordingdates
declare const AVMetadataIdentifierID3MetadataRecordingDates: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatarecordingtime
declare const AVMetadataIdentifierID3MetadataRecordingTime: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatarelativevolumeadjustment
declare const AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatarelativevolumeadjustment2
declare const AVMetadataIdentifierID3MetadataRelativeVolumeAdjustment2: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatareleasetime
declare const AVMetadataIdentifierID3MetadataReleaseTime: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatareverb
declare const AVMetadataIdentifierID3MetadataReverb: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataseek
declare const AVMetadataIdentifierID3MetadataSeek: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatasetsubtitle
declare const AVMetadataIdentifierID3MetadataSetSubtitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatasignature
declare const AVMetadataIdentifierID3MetadataSignature: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatasize
declare const AVMetadataIdentifierID3MetadataSize: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatasubtitle
declare const AVMetadataIdentifierID3MetadataSubTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatasynchronizedlyric
declare const AVMetadataIdentifierID3MetadataSynchronizedLyric: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatasynchronizedtempocodes
declare const AVMetadataIdentifierID3MetadataSynchronizedTempoCodes: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatataggingtime
declare const AVMetadataIdentifierID3MetadataTaggingTime: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatatermsofuse
declare const AVMetadataIdentifierID3MetadataTermsOfUse: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatatime
declare const AVMetadataIdentifierID3MetadataTime: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatatitledescription
declare const AVMetadataIdentifierID3MetadataTitleDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatatitlesortorder
declare const AVMetadataIdentifierID3MetadataTitleSortOrder: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatatracknumber
declare const AVMetadataIdentifierID3MetadataTrackNumber: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatauniquefileidentifier
declare const AVMetadataIdentifierID3MetadataUniqueFileIdentifier: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadataunsynchronizedlyric
declare const AVMetadataIdentifierID3MetadataUnsynchronizedLyric: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatausertext
declare const AVMetadataIdentifierID3MetadataUserText: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatauserurl
declare const AVMetadataIdentifierID3MetadataUserURL: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierid3metadatayear
declare const AVMetadataIdentifierID3MetadataYear: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierisouserdataaccessibilitydescription
declare const AVMetadataIdentifierISOUserDataAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierisouserdatacopyright
declare const AVMetadataIdentifierISOUserDataCopyright: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierisouserdatadate
declare const AVMetadataIdentifierISOUserDataDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierisouserdatataggedcharacteristic
declare const AVMetadataIdentifierISOUserDataTaggedCharacteristic: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataaccessibilitydescription
declare const AVMetadataIdentifierQuickTimeMetadataAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataalbum
declare const AVMetadataIdentifierQuickTimeMetadataAlbum: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataarranger
declare const AVMetadataIdentifierQuickTimeMetadataArranger: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataartist
declare const AVMetadataIdentifierQuickTimeMetadataArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataartwork
declare const AVMetadataIdentifierQuickTimeMetadataArtwork: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataauthor
declare const AVMetadataIdentifierQuickTimeMetadataAuthor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataautolivephoto
declare const AVMetadataIdentifierQuickTimeMetadataAutoLivePhoto: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacameraframereadouttime
declare const AVMetadataIdentifierQuickTimeMetadataCameraFrameReadoutTime: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacameraidentifier
declare const AVMetadataIdentifierQuickTimeMetadataCameraIdentifier: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacollectionuser
declare const AVMetadataIdentifierQuickTimeMetadataCollectionUser: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacomment
declare const AVMetadataIdentifierQuickTimeMetadataComment: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacomposer
declare const AVMetadataIdentifierQuickTimeMetadataComposer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacontentidentifier
declare const AVMetadataIdentifierQuickTimeMetadataContentIdentifier: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacopyright
declare const AVMetadataIdentifierQuickTimeMetadataCopyright: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacreationdate
declare const AVMetadataIdentifierQuickTimeMetadataCreationDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatacredits
declare const AVMetadataIdentifierQuickTimeMetadataCredits: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadescription
declare const AVMetadataIdentifierQuickTimeMetadataDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedcatbody
declare const AVMetadataIdentifierQuickTimeMetadataDetectedCatBody: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetecteddogbody
declare const AVMetadataIdentifierQuickTimeMetadataDetectedDogBody: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedface
declare const AVMetadataIdentifierQuickTimeMetadataDetectedFace: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedhumanbody
declare const AVMetadataIdentifierQuickTimeMetadataDetectedHumanBody: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadetectedsalientobject
declare const AVMetadataIdentifierQuickTimeMetadataDetectedSalientObject: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadirectionfacing
declare const AVMetadataIdentifierQuickTimeMetadataDirectionFacing: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadirectionmotion
declare const AVMetadataIdentifierQuickTimeMetadataDirectionMotion: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadirector
declare const AVMetadataIdentifierQuickTimeMetadataDirector: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatadisplayname
declare const AVMetadataIdentifierQuickTimeMetadataDisplayName: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataencodedby
declare const AVMetadataIdentifierQuickTimeMetadataEncodedBy: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatagenre
declare const AVMetadataIdentifierQuickTimeMetadataGenre: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatainformation
declare const AVMetadataIdentifierQuickTimeMetadataInformation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatakeywords
declare const AVMetadataIdentifierQuickTimeMetadataKeywords: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalivephotovitalityscore
declare const AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScore: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalivephotovitalityscoringversion
declare const AVMetadataIdentifierQuickTimeMetadataLivePhotoVitalityScoringVersion: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationbody
declare const AVMetadataIdentifierQuickTimeMetadataLocationBody: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationdate
declare const AVMetadataIdentifierQuickTimeMetadataLocationDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationhorizontalaccuracyinmeters
declare const AVMetadataIdentifierQuickTimeMetadataLocationHorizontalAccuracyInMeters: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationiso6709
declare const AVMetadataIdentifierQuickTimeMetadataLocationISO6709: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationname
declare const AVMetadataIdentifierQuickTimeMetadataLocationName: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationnote
declare const AVMetadataIdentifierQuickTimeMetadataLocationNote: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatalocationrole
declare const AVMetadataIdentifierQuickTimeMetadataLocationRole: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatamake
declare const AVMetadataIdentifierQuickTimeMetadataMake: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatamodel
declare const AVMetadataIdentifierQuickTimeMetadataModel: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataoriginalartist
declare const AVMetadataIdentifierQuickTimeMetadataOriginalArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataperformer
declare const AVMetadataIdentifierQuickTimeMetadataPerformer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataphonogramrights
declare const AVMetadataIdentifierQuickTimeMetadataPhonogramRights: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatapreferredaffinetransform
declare const AVMetadataIdentifierQuickTimeMetadataPreferredAffineTransform: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataproducer
declare const AVMetadataIdentifierQuickTimeMetadataProducer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatapublisher
declare const AVMetadataIdentifierQuickTimeMetadataPublisher: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataratinguser
declare const AVMetadataIdentifierQuickTimeMetadataRatingUser: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatasoftware
declare const AVMetadataIdentifierQuickTimeMetadataSoftware: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataspatialovercapturequalityscore
declare const AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScore: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataspatialovercapturequalityscoringversion
declare const AVMetadataIdentifierQuickTimeMetadataSpatialOverCaptureQualityScoringVersion: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatatitle
declare const AVMetadataIdentifierQuickTimeMetadataTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatavideoorientation
declare const AVMetadataIdentifierQuickTimeMetadataVideoOrientation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadatayear
declare const AVMetadataIdentifierQuickTimeMetadataYear: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimemetadataixml
declare const AVMetadataIdentifierQuickTimeMetadataiXML: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataaccessibilitydescription
declare const AVMetadataIdentifierQuickTimeUserDataAccessibilityDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataalbum
declare const AVMetadataIdentifierQuickTimeUserDataAlbum: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataarranger
declare const AVMetadataIdentifierQuickTimeUserDataArranger: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataartist
declare const AVMetadataIdentifierQuickTimeUserDataArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataauthor
declare const AVMetadataIdentifierQuickTimeUserDataAuthor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatachapter
declare const AVMetadataIdentifierQuickTimeUserDataChapter: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacomment
declare const AVMetadataIdentifierQuickTimeUserDataComment: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacomposer
declare const AVMetadataIdentifierQuickTimeUserDataComposer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacopyright
declare const AVMetadataIdentifierQuickTimeUserDataCopyright: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacreationdate
declare const AVMetadataIdentifierQuickTimeUserDataCreationDate: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatacredits
declare const AVMetadataIdentifierQuickTimeUserDataCredits: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatadescription
declare const AVMetadataIdentifierQuickTimeUserDataDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatadirector
declare const AVMetadataIdentifierQuickTimeUserDataDirector: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatadisclaimer
declare const AVMetadataIdentifierQuickTimeUserDataDisclaimer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataencodedby
declare const AVMetadataIdentifierQuickTimeUserDataEncodedBy: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatafullname
declare const AVMetadataIdentifierQuickTimeUserDataFullName: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatagenre
declare const AVMetadataIdentifierQuickTimeUserDataGenre: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatahostcomputer
declare const AVMetadataIdentifierQuickTimeUserDataHostComputer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatainformation
declare const AVMetadataIdentifierQuickTimeUserDataInformation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatakeywords
declare const AVMetadataIdentifierQuickTimeUserDataKeywords: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatalocationiso6709
declare const AVMetadataIdentifierQuickTimeUserDataLocationISO6709: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatamake
declare const AVMetadataIdentifierQuickTimeUserDataMake: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatamodel
declare const AVMetadataIdentifierQuickTimeUserDataModel: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataoriginalartist
declare const AVMetadataIdentifierQuickTimeUserDataOriginalArtist: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataoriginalformat
declare const AVMetadataIdentifierQuickTimeUserDataOriginalFormat: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataoriginalsource
declare const AVMetadataIdentifierQuickTimeUserDataOriginalSource: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataperformers
declare const AVMetadataIdentifierQuickTimeUserDataPerformers: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataphonogramrights
declare const AVMetadataIdentifierQuickTimeUserDataPhonogramRights: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataproducer
declare const AVMetadataIdentifierQuickTimeUserDataProducer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataproduct
declare const AVMetadataIdentifierQuickTimeUserDataProduct: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatapublisher
declare const AVMetadataIdentifierQuickTimeUserDataPublisher: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatasoftware
declare const AVMetadataIdentifierQuickTimeUserDataSoftware: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataspecialplaybackrequirements
declare const AVMetadataIdentifierQuickTimeUserDataSpecialPlaybackRequirements: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatataggedcharacteristic
declare const AVMetadataIdentifierQuickTimeUserDataTaggedCharacteristic: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatatrack
declare const AVMetadataIdentifierQuickTimeUserDataTrack: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatatrackname
declare const AVMetadataIdentifierQuickTimeUserDataTrackName: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdataurllink
declare const AVMetadataIdentifierQuickTimeUserDataURLLink: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatawarning
declare const AVMetadataIdentifierQuickTimeUserDataWarning: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifierquicktimeuserdatawriter
declare const AVMetadataIdentifierQuickTimeUserDataWriter: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdataalbumandtrack
declare const AVMetadataIdentifier3GPUserDataAlbumAndTrack: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdataauthor
declare const AVMetadataIdentifier3GPUserDataAuthor: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatacollection
declare const AVMetadataIdentifier3GPUserDataCollection: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatacopyright
declare const AVMetadataIdentifier3GPUserDataCopyright: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatadescription
declare const AVMetadataIdentifier3GPUserDataDescription: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatagenre
declare const AVMetadataIdentifier3GPUserDataGenre: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatakeywordlist
declare const AVMetadataIdentifier3GPUserDataKeywordList: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatalocation
declare const AVMetadataIdentifier3GPUserDataLocation: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatamediaclassification
declare const AVMetadataIdentifier3GPUserDataMediaClassification: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatamediarating
declare const AVMetadataIdentifier3GPUserDataMediaRating: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdataperformer
declare const AVMetadataIdentifier3GPUserDataPerformer: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatarecordingyear
declare const AVMetadataIdentifier3GPUserDataRecordingYear: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatathumbnail
declare const AVMetadataIdentifier3GPUserDataThumbnail: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatatitle
declare const AVMetadataIdentifier3GPUserDataTitle: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avmetadataidentifier3gpuserdatauserrating
declare const AVMetadataIdentifier3GPUserDataUserRating: cocoascript.AVMetadataIdentifier;
// doc://com.apple.documentation/documentation/avfoundation/avaudiotimepitchalgorithmlowqualityzerolatency
declare const AVAudioTimePitchAlgorithmLowQualityZeroLatency: cocoascript.AVAudioTimePitchAlgorithm;
// doc://com.apple.documentation/documentation/avfoundation/avaudiotimepitchalgorithmspectral
declare const AVAudioTimePitchAlgorithmSpectral: cocoascript.AVAudioTimePitchAlgorithm;
// doc://com.apple.documentation/documentation/avfoundation/avaudiotimepitchalgorithmtimedomain
declare const AVAudioTimePitchAlgorithmTimeDomain: cocoascript.AVAudioTimePitchAlgorithm;
// doc://com.apple.documentation/documentation/avfoundation/avaudiotimepitchalgorithmvarispeed
declare const AVAudioTimePitchAlgorithmVarispeed: cocoascript.AVAudioTimePitchAlgorithm;
// doc://com.apple.documentation/documentation/avfoundation/avtrackassociationtypeaudiofallback
declare const AVTrackAssociationTypeAudioFallback: cocoascript.AVTrackAssociationType;
// doc://com.apple.documentation/documentation/avfoundation/avtrackassociationtypechapterlist
declare const AVTrackAssociationTypeChapterList: cocoascript.AVTrackAssociationType;
// doc://com.apple.documentation/documentation/avfoundation/avtrackassociationtypeforcedsubtitlesonly
declare const AVTrackAssociationTypeForcedSubtitlesOnly: cocoascript.AVTrackAssociationType;
// doc://com.apple.documentation/documentation/avfoundation/avtrackassociationtypemetadatareferent
declare const AVTrackAssociationTypeMetadataReferent: cocoascript.AVTrackAssociationType;
// doc://com.apple.documentation/documentation/avfoundation/avtrackassociationtypeselectionfollower
declare const AVTrackAssociationTypeSelectionFollower: cocoascript.AVTrackAssociationType;
// doc://com.apple.documentation/documentation/avfoundation/avtrackassociationtypetimecode
declare const AVTrackAssociationTypeTimecode: cocoascript.AVTrackAssociationType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiopacketcount
  type AVAudioPacketCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioframeposition
  type AVAudioFramePosition = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioframecount
  type AVAudioFrameCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioquality
  type AVAudioQuality = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avvideoaperturemodecleanaperture
declare const AVVideoApertureModeCleanAperture: cocoascript.AVVideoApertureMode;
// doc://com.apple.documentation/documentation/avfoundation/avvideoaperturemodeencodedpixels
declare const AVVideoApertureModeEncodedPixels: cocoascript.AVVideoApertureMode;
// doc://com.apple.documentation/documentation/avfoundation/avvideoaperturemodeproductionaperture
declare const AVVideoApertureModeProductionAperture: cocoascript.AVVideoApertureMode;
// doc://com.apple.documentation/documentation/avfoundation/avassetdownloadedassetevictionprioritydefault
declare const AVAssetDownloadedAssetEvictionPriorityDefault: cocoascript.AVAssetDownloadedAssetEvictionPriority;
// doc://com.apple.documentation/documentation/avfoundation/avassetdownloadedassetevictionpriorityimportant
declare const AVAssetDownloadedAssetEvictionPriorityImportant: cocoascript.AVAssetDownloadedAssetEvictionPriority;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avassetreaderstatus
  type AVAssetReaderStatus = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avassetimagegeneratoraperturemodecleanaperture
declare const AVAssetImageGeneratorApertureModeCleanAperture: cocoascript.AVAssetImageGeneratorApertureMode;
// doc://com.apple.documentation/documentation/avfoundation/avassetimagegeneratoraperturemodeencodedpixels
declare const AVAssetImageGeneratorApertureModeEncodedPixels: cocoascript.AVAssetImageGeneratorApertureMode;
// doc://com.apple.documentation/documentation/avfoundation/avassetimagegeneratoraperturemodeproductionaperture
declare const AVAssetImageGeneratorApertureModeProductionAperture: cocoascript.AVAssetImageGeneratorApertureMode;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspresethevc3840x2160
declare const AVOutputSettingsPresetHEVC3840x2160: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspresethevc1920x1080
declare const AVOutputSettingsPresetHEVC1920x1080: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspresethevc3840x2160withalpha
declare const AVOutputSettingsPresetHEVC3840x2160WithAlpha: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspresethevc1920x1080withalpha
declare const AVOutputSettingsPresetHEVC1920x1080WithAlpha: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspreset3840x2160
declare const AVOutputSettingsPreset3840x2160: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspreset1920x1080
declare const AVOutputSettingsPreset1920x1080: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspreset960x540
declare const AVOutputSettingsPreset960x540: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avoutputsettingspreset640x480
declare const AVOutputSettingsPreset640x480: cocoascript.AVOutputSettingsPreset;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategoryambient
declare const AVAudioSessionCategoryAmbient: cocoascript.AVAudioSessionCategory;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategoryrecord
declare const AVAudioSessionCategoryRecord: cocoascript.AVAudioSessionCategory;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessioncategoryaudioprocessing
declare const AVAudioSessionCategoryAudioProcessing: cocoascript.AVAudioSessionCategory;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodedefault
declare const AVAudioSessionModeDefault: cocoascript.AVAudioSessionMode;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodegamechat
declare const AVAudioSessionModeGameChat: cocoascript.AVAudioSessionMode;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodemeasurement
declare const AVAudioSessionModeMeasurement: cocoascript.AVAudioSessionMode;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodespokenaudio
declare const AVAudioSessionModeSpokenAudio: cocoascript.AVAudioSessionMode;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodevideochat
declare const AVAudioSessionModeVideoChat: cocoascript.AVAudioSessionMode;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodevideorecording
declare const AVAudioSessionModeVideoRecording: cocoascript.AVAudioSessionMode;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodevoicechat
declare const AVAudioSessionModeVoiceChat: cocoascript.AVAudioSessionMode;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionmodevoiceprompt
declare const AVAudioSessionModeVoicePrompt: cocoascript.AVAudioSessionMode;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionsetactiveoptions
  type AVAudioSessionSetActiveOptions = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avplayerwaitingtominimizestallsreason
declare const AVPlayerWaitingToMinimizeStallsReason: cocoascript.AVPlayerWaitingReason;
// doc://com.apple.documentation/documentation/avfoundation/avplayerwaitingwithnoitemtoplayreason
declare const AVPlayerWaitingWithNoItemToPlayReason: cocoascript.AVPlayerWaitingReason;
// doc://com.apple.documentation/documentation/avfoundation/avplayerwaitingwhileevaluatingbufferingratereason
declare const AVPlayerWaitingWhileEvaluatingBufferingRateReason: cocoascript.AVPlayerWaitingReason;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeysystemfairplaystreaming
declare const AVContentKeySystemFairPlayStreaming: cocoascript.AVContentKeySystem;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeysystemclearkey
declare const AVContentKeySystemClearKey: cocoascript.AVContentKeySystem;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeysystemauthorizationtoken
declare const AVContentKeySystemAuthorizationToken: cocoascript.AVContentKeySystem;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoptionprotocolversions
declare const AVContentKeySessionServerPlaybackContextOptionProtocolVersions: cocoascript.AVContentKeySessionServerPlaybackContextOption;
// doc://com.apple.documentation/documentation/avfoundation/avcontentkeysessionserverplaybackcontextoptionserverchallenge
declare const AVContentKeySessionServerPlaybackContextOptionServerChallenge: cocoascript.AVContentKeySessionServerPlaybackContextOption;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionrecordpermission
  type AVAudioSessionRecordPermission = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionport
  type AVAudioSessionPort = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionlocation
  type AVAudioSessionLocation = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionorientation
  type AVAudioSessionOrientation = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionpolarpattern
  type AVAudioSessionPolarPattern = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportoverride
  type AVAudioSessionPortOverride = cocoascript.NSUInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionpolarpatternstereo
declare const AVAudioSessionPolarPatternStereo: cocoascript.AVAudioSessionPolarPattern;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmidiplayercompletionhandler
  type AVMIDIPlayerCompletionHandler = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioenginemanualrenderingblock
  type AVAudioEngineManualRenderingBlock = any;
}
declare namespace cocoascript {
  /**
   * A representation of either a source or destination connection point in the audio engine.
   * doc://com.apple.documentation/documentation/avfoundation/avaudioconnectionpoint
   */
  interface AVAudioConnectionPoint extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconnectionpoint/1388569-initwithnode
    initWithNode_bus(node: AVAudioNode, bus: AVAudioNodeBus):AVAudioConnectionPoint;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1387521-inputconnectionpointfornode
    inputConnectionPointForNode_inputBus(node: AVAudioNode, bus: AVAudioNodeBus):AVAudioConnectionPoint;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioengine/1389298-outputconnectionpointsfornode
    outputConnectionPointsForNode_outputBus(node: AVAudioNode, bus: AVAudioNodeBus):AVAudioConnectionPoint;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconnectionpoint/1389288-bus
    bus(): AVAudioNodeBus;
    setBus(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudioconnectionpoint/1386935-node
    node(): AVAudioNode;
    setNode(): void;
    //
    alloc():AVAudioConnectionPoint;
    //
    init():AVAudioConnectionPoint;
  }
}

declare const AVAudioConnectionPoint: cocoascript.AVAudioConnectionPoint;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioenginemanualrenderingerror
  type AVAudioEngineManualRenderingError = any;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioenginemanualrenderingmode
  type AVAudioEngineManualRenderingMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioenginemanualrenderingstatus
  type AVAudioEngineManualRenderingStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudionodetapblock
  type AVAudioNodeTapBlock = cocoascript.AVAudioTime;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudionodecompletionhandler
  type AVAudioNodeCompletionHandler = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudionodebus
  type AVAudioNodeBus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioionodeinputblock
  type AVAudioIONodeInputBlock = cocoascript.AVAudioFrameCount;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernodecompletioncallbacktype
  type AVAudioPlayerNodeCompletionCallbackType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernodecompletionhandler
  type AVAudioPlayerNodeCompletionHandler = cocoascript.AVAudioPlayerNodeCompletionCallbackType;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioplayernodebufferoptions
  type AVAudioPlayerNodeBufferOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A collection of music events sent to a given destination, and which can be offset, muted, and manipulated independently from other track events.
   * doc://com.apple.documentation/documentation/avfoundation/avmusictrack
   */
  interface AVMusicTrack extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1390533-destinationaudiounit
    destinationAudioUnit(): AVAudioUnit;
    setDestinationAudioUnit(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1388828-destinationmidiendpoint
    destinationMIDIEndpoint(): MIDIEndpointRef;
    setDestinationMIDIEndpoint(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1389910-lengthinbeats
    lengthInBeats(): AVMusicTimeStamp;
    setLengthInBeats(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1385749-lengthinseconds
    lengthInSeconds(): NSTimeInterval;
    setLengthInSeconds(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1386292-looprange
    loopRange(): AVBeatRange;
    setLoopRange(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1385811-loopingenabled
    loopingEnabled(): BOOL;
    setLoopingEnabled(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1387694-muted
    muted(): BOOL;
    setMuted(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1389268-numberofloops
    numberOfLoops(): NSInteger;
    setNumberOfLoops(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1386336-offsettime
    offsetTime(): AVMusicTimeStamp;
    setOffsetTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1387883-soloed
    soloed(): BOOL;
    setSoloed(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avmusictrack/1387198-timeresolution
    timeResolution(): NSUInteger;
    setTimeResolution(): void;
    //
    alloc():AVMusicTrack;
    //
    init():AVMusicTrack;
  }
}

declare const AVMusicTrack: cocoascript.AVMusicTrack;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmusictrackloopcount
  type AVMusicTrackLoopCount = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmusicsequenceloadoptions
  type AVMusicSequenceLoadOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avmusictimestamp
  type AVMusicTimeStamp = cocoascript.Float64;
}
declare namespace cocoascript {
  interface AVBeatRange {
  }
}
declare namespace cocoascript {
  /**
   * A subclass of the audio node class that, depending on the type of the audio unit, processes audio either in real time or non-real time.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounit
   */
  interface AVAudioUnit extends AVAudioNode {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1386098-audiounit
    audioUnit(): AudioUnit;
    setAudioUnit(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1387527-loadaudiounitpresetaturl
    loadAudioUnitPresetAtURL_error(url: NSURL, outError: NSError):BOOL;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1390583-instantiatewithcomponentdescript
    instantiateWithComponentDescription_options_completionHandler(audioComponentDescription: AudioComponentDescription, options: AudioComponentInstantiationOptions, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1389217-audiocomponentdescription
    audioComponentDescription(): AudioComponentDescription;
    setAudioComponentDescription(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1388972-manufacturername
    manufacturerName(): string | cocoascript.NSString;
    setManufacturerName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1390637-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1386720-version
    version(): NSUInteger;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounit/1388167-auaudiounit
    AUAudioUnit(): AUAudioUnit;
    setAUAudioUnit(): void;
    //
    alloc():AVAudioUnit;
    //
    init():AVAudioUnit;
  }
}

declare const AVAudioUnit: cocoascript.AVAudioUnit;
declare namespace cocoascript {
  /**
   * An object that provides a way to search and query audio components that are registered with the system.
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanager
   */
  interface AVAudioUnitComponentManager extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanager/1390177-sharedaudiounitcomponentmanager
    sharedAudioUnitComponentManager():AVAudioUnitComponentManager;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanager/1386367-componentsmatchingdescription
    componentsMatchingDescription(desc: AudioComponentDescription):AVAudioUnitComponent;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanager/1386487-componentsmatchingpredicate
    componentsMatchingPredicate(predicate: NSPredicate):AVAudioUnitComponent;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanager/1390260-componentspassingtest
    componentsPassingTest(testHandler: BOOL):AVAudioUnitComponent;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanager/1388545-standardlocalizedtagnames
    standardLocalizedTagNames(): string | cocoascript.NSString;
    setStandardLocalizedTagNames(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanager/1390133-tagnames
    tagNames(): string | cocoascript.NSString;
    setTagNames(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiouniteffect
   */
  interface AVAudioUnitEffect extends AVAudioUnit {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteffect/1388397-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription):AVAudioUnitEffect;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteffect/1386894-bypass
    bypass(): BOOL;
    setBypass(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiouniteq
   */
  interface AVAudioUnitEQ extends AVAudioUnitEffect {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteq/1390915-initwithnumberofbands
    initWithNumberOfBands(numberOfBands: NSUInteger):AVAudioUnitEQ;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteq/1388840-bands
    bands(): AVAudioUnitEQFilterParameters;
    setBands(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteq/1389193-globalgain
    globalGain(): number;
    setGlobalGain(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitdistortion
   */
  interface AVAudioUnitDistortion extends AVAudioUnitEffect {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdistortion/1389550-loadfactorypreset
    loadFactoryPreset(preset: AVAudioUnitDistortionPreset):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdistortion/1388179-pregain
    preGain(): number;
    setPreGain(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdistortion/1385730-wetdrymix
    wetDryMix(): number;
    setWetDryMix(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitdelay
   */
  interface AVAudioUnitDelay extends AVAudioUnitEffect {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdelay/1386919-delaytime
    delayTime(): NSTimeInterval;
    setDelayTime(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdelay/1388517-feedback
    feedback(): number;
    setFeedback(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdelay/1386489-lowpasscutoff
    lowPassCutoff(): number;
    setLowPassCutoff(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdelay/1390516-wetdrymix
    wetDryMix(): number;
    setWetDryMix(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitreverb
   */
  interface AVAudioUnitReverb extends AVAudioUnitEffect {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitreverb/1389169-loadfactorypreset
    loadFactoryPreset(preset: AVAudioUnitReverbPreset):void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitreverb/1388998-wetdrymix
    wetDryMix(): number;
    setWetDryMix(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounittimeeffect
   */
  interface AVAudioUnitTimeEffect extends AVAudioUnit {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounittimeeffect/1390254-initwithaudiocomponentdescriptio
    initWithAudioComponentDescription(audioComponentDescription: AudioComponentDescription):AVAudioUnitTimeEffect;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounittimeeffect/1388684-bypass
    bypass(): BOOL;
    setBypass(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounittimepitch
   */
  interface AVAudioUnitTimePitch extends AVAudioUnitTimeEffect {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounittimepitch/1388238-overlap
    overlap(): number;
    setOverlap(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounittimepitch/1387188-pitch
    pitch(): number;
    setPitch(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounittimepitch/1389380-rate
    rate(): number;
    setRate(): void;
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
   * doc://com.apple.documentation/documentation/avfoundation/avaudiounitvarispeed
   */
  interface AVAudioUnitVarispeed extends AVAudioUnitTimeEffect {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiounitvarispeed/1387118-rate
    rate(): number;
    setRate(): void;
    //
    alloc():AVAudioUnitVarispeed;
    //
    init():AVAudioUnitVarispeed;
  }
}

declare const AVAudioUnitVarispeed: cocoascript.AVAudioUnitVarispeed;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosourcenoderenderblock
  type AVAudioSourceNodeRenderBlock = cocoascript.AudioBufferList;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiosinknodereceiverblock
  type AVAudioSinkNodeReceiverBlock = cocoascript.AudioBufferList;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioconverterinputblock
  type AVAudioConverterInputBlock = cocoascript.AVAudioConverterInputStatus;
}
declare namespace cocoascript {
  interface AVAudioConverterPrimeInfo {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioconverterinputstatus
  type AVAudioConverterInputStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioconverteroutputstatus
  type AVAudioConverterOutputStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudioconverterprimemethod
  type AVAudioConverterPrimeMethod = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurelevelnominal
declare const AVCaptureSystemPressureLevelNominal: cocoascript.AVCaptureSystemPressureLevel;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurelevelfair
declare const AVCaptureSystemPressureLevelFair: cocoascript.AVCaptureSystemPressureLevel;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurelevelserious
declare const AVCaptureSystemPressureLevelSerious: cocoascript.AVCaptureSystemPressureLevel;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurelevelcritical
declare const AVCaptureSystemPressureLevelCritical: cocoascript.AVCaptureSystemPressureLevel;
// doc://com.apple.documentation/documentation/avfoundation/avcapturesystempressurelevelshutdown
declare const AVCaptureSystemPressureLevelShutdown: cocoascript.AVCaptureSystemPressureLevel;
declare namespace cocoascript {
  /**
   * An object that provides information on a sample in a track.
   * doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreportsampleinformation
   */
  interface AVAssetSegmentReportSampleInformation extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreportsampleinformation/3546575-presentationtimestamp
    presentationTimeStamp(): CMTime;
    setPresentationTimeStamp(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreportsampleinformation/3546574-offset
    offset(): NSInteger;
    setOffset(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreportsampleinformation/3546573-length
    length(): NSInteger;
    setLength(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avassetsegmentreportsampleinformation/3563932-issyncsample
    isSyncSample(): BOOL;
    setIsSyncSample(): void;
    //
    alloc():AVAssetSegmentReportSampleInformation;
    //
    init():AVAssetSegmentReportSampleInformation;
  }
}

declare const AVAssetSegmentReportSampleInformation: cocoascript.AVAssetSegmentReportSampleInformation;
// doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmediadatalocationbeforemainmediadatanotinterleaved
declare const AVAssetWriterInputMediaDataLocationBeforeMainMediaDataNotInterleaved: cocoascript.AVAssetWriterInputMediaDataLocation;
// doc://com.apple.documentation/documentation/avfoundation/avassetwriterinputmediadatalocationinterleavedwithmainmediadata
declare const AVAssetWriterInputMediaDataLocationInterleavedWithMainMediaData: cocoascript.AVAssetWriterInputMediaDataLocation;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutputtextstylingresolutiondefault
declare const AVPlayerItemLegibleOutputTextStylingResolutionDefault: cocoascript.AVPlayerItemLegibleOutputTextStylingResolution;
// doc://com.apple.documentation/documentation/avfoundation/avplayeritemlegibleoutputtextstylingresolutionsourceandrulesonly
declare const AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly: cocoascript.AVPlayerItemLegibleOutputTextStylingResolution;
declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/avfoundation/avaudiouniteqfilterparameters
   */
  interface AVAudioUnitEQFilterParameters extends NSObject {
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteqfilterparameters/1389528-bandwidth
    bandwidth(): number;
    setBandwidth(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteqfilterparameters/1386257-bypass
    bypass(): BOOL;
    setBypass(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteqfilterparameters/1389780-filtertype
    filterType(): AVAudioUnitEQFilterType;
    setFilterType(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteqfilterparameters/1390693-frequency
    frequency(): number;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteqfilterparameters/1389286-gain
    gain(): number;
    setGain(): void;
    //
    alloc():AVAudioUnitEQFilterParameters;
    //
    init():AVAudioUnitEQFilterParameters;
  }
}

declare const AVAudioUnitEQFilterParameters: cocoascript.AVAudioUnitEQFilterParameters;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiounitreverbpreset
  type AVAudioUnitReverbPreset = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportbuiltinmic
declare const AVAudioSessionPortBuiltInMic: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportheadsetmic
declare const AVAudioSessionPortHeadsetMic: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportlinein
declare const AVAudioSessionPortLineIn: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportairplay
declare const AVAudioSessionPortAirPlay: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportbluetootha2dp
declare const AVAudioSessionPortBluetoothA2DP: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportbluetoothle
declare const AVAudioSessionPortBluetoothLE: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportbuiltinreceiver
declare const AVAudioSessionPortBuiltInReceiver: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportbuiltinspeaker
declare const AVAudioSessionPortBuiltInSpeaker: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionporthdmi
declare const AVAudioSessionPortHDMI: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportheadphones
declare const AVAudioSessionPortHeadphones: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportlineout
declare const AVAudioSessionPortLineOut: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportavb
declare const AVAudioSessionPortAVB: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportbluetoothhfp
declare const AVAudioSessionPortBluetoothHFP: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportdisplayport
declare const AVAudioSessionPortDisplayPort: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportcaraudio
declare const AVAudioSessionPortCarAudio: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportfirewire
declare const AVAudioSessionPortFireWire: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportpci
declare const AVAudioSessionPortPCI: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportthunderbolt
declare const AVAudioSessionPortThunderbolt: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportusbaudio
declare const AVAudioSessionPortUSBAudio: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionportvirtual
declare const AVAudioSessionPortVirtual: cocoascript.AVAudioSessionPort;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionlocationlower
declare const AVAudioSessionLocationLower: cocoascript.AVAudioSessionLocation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionlocationupper
declare const AVAudioSessionLocationUpper: cocoascript.AVAudioSessionLocation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionorientationtop
declare const AVAudioSessionOrientationTop: cocoascript.AVAudioSessionOrientation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionorientationbottom
declare const AVAudioSessionOrientationBottom: cocoascript.AVAudioSessionOrientation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionorientationfront
declare const AVAudioSessionOrientationFront: cocoascript.AVAudioSessionOrientation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionorientationback
declare const AVAudioSessionOrientationBack: cocoascript.AVAudioSessionOrientation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionorientationleft
declare const AVAudioSessionOrientationLeft: cocoascript.AVAudioSessionOrientation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionorientationright
declare const AVAudioSessionOrientationRight: cocoascript.AVAudioSessionOrientation;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionpolarpatterncardioid
declare const AVAudioSessionPolarPatternCardioid: cocoascript.AVAudioSessionPolarPattern;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionpolarpatternsubcardioid
declare const AVAudioSessionPolarPatternSubcardioid: cocoascript.AVAudioSessionPolarPattern;
// doc://com.apple.documentation/documentation/avfoundation/avaudiosessionpolarpatternomnidirectional
declare const AVAudioSessionPolarPatternOmnidirectional: cocoascript.AVAudioSessionPolarPattern;
// doc://com.apple.documentation/documentation/avfoundation/avaudiounitcomponentmanagerregistrationschangednotification
declare const AVAudioUnitComponentManagerRegistrationsChangedNotification: cocoascript.NSNotificationName;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiounitdistortionpreset
  type AVAudioUnitDistortionPreset = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/avfoundation/avaudiouniteqfiltertype
  type AVAudioUnitEQFilterType = cocoascript.NSInteger;
}
