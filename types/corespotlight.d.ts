declare namespace cocoascript {
  /**
   * An interface that implements an index-maintenance app extension.
   * doc://com.apple.documentation/documentation/corespotlight/csindexextensionrequesthandler
   */
  interface CSIndexExtensionRequestHandler extends NSObject {
    //
    alloc():CSIndexExtensionRequestHandler;
    //
    init():CSIndexExtensionRequestHandler;
  }
}

declare const CSIndexExtensionRequestHandler: cocoascript.CSIndexExtensionRequestHandler;
declare namespace cocoascript {
  /**
   * A protocol defining methods a delegate object or app extension uses to handle communication from the on-device index.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate
   */
  interface CSSearchableIndexDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/2867899-dataforsearchableindex
    dataForSearchableIndex_itemIdentifier_typeIdentifier_error(searchableIndex: CSSearchableIndex, itemIdentifier: string | NSString, typeIdentifier: string | NSString, outError: NSError):NSData;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/2867898-fileurlforsearchableindex
    fileURLForSearchableIndex_itemIdentifier_typeIdentifier_inPlace_error(searchableIndex: CSSearchableIndex, itemIdentifier: string | NSString, typeIdentifier: string | NSString, inPlace: BOOL, outError: NSError):NSURL;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620348-searchableindex
    searchableIndex_reindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: CSSearchableIndex, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620338-searchableindex
    searchableIndex_reindexSearchableItemsWithIdentifiers_acknowledgementHandler(searchableIndex: CSSearchableIndex, identifiers: string | NSString, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620353-searchableindexdidthrottle
    searchableIndexDidThrottle(searchableIndex: CSSearchableIndex):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620343-searchableindexdidfinishthrottle
    searchableIndexDidFinishThrottle(searchableIndex: CSSearchableIndex):void;
  }
}
declare namespace cocoascript {
  /**
   * The set of properties to display for a searchable item.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset
   */
  interface CSSearchableItemAttributeSet extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/3573909-initwithcontenttype
    initWithContentType(contentType: UTType):CSSearchableItemAttributeSet;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616406-initwithitemcontenttype
    initWithItemContentType(itemContentType: string | NSString):CSSearchableItemAttributeSet;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616395-setvalue
    setValue_forCustomKey(value: NSSecureCoding, key: CSCustomAttributeKey):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616407-valueforcustomkey
    valueForCustomKey(key: CSCustomAttributeKey):NSSecureCoding;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621571-audiences
    audiences(): string | NSString;
    setAudiences(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621584-contentdescription
    contentDescription(): string | NSString;
    setContentDescription(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621677-creator
    creator(): string | NSString;
    setCreator(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621659-encodingapplications
    encodingApplications(): string | NSString;
    setEncodingApplications(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621565-filesize
    fileSize(): NSNumber;
    setFileSize(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621566-fontnames
    fontNames(): string | NSString;
    setFontNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621577-identifier
    identifier(): string | NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621642-kind
    kind(): string | NSString;
    setKind(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621627-pagecount
    pageCount(): NSNumber;
    setPageCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621673-pageheight
    pageHeight(): NSNumber;
    setPageHeight(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621670-pagewidth
    pageWidth(): NSNumber;
    setPageWidth(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621658-securitymethod
    securityMethod(): string | NSString;
    setSecurityMethod(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621598-subject
    subject(): string | NSString;
    setSubject(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621574-theme
    theme(): string | NSString;
    setTheme(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616636-allday
    allDay(): NSNumber;
    setAllDay(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616637-completiondate
    completionDate(): NSDate;
    setCompletionDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616641-duedate
    dueDate(): NSDate;
    setDueDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616638-enddate
    endDate(): NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616639-importantdates
    importantDates(): NSDate;
    setImportantDates(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616640-startdate
    startDate(): NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621662-alternatenames
    alternateNames(): string | NSString;
    setAlternateNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621561-contenttype
    contentType(): string | NSString;
    setContentType(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621660-contenttypetree
    contentTypeTree(): string | NSString;
    setContentTypeTree(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621651-contenturl
    contentURL(): NSURL;
    setContentURL(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621676-displayname
    displayName(): string | NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621652-keywords
    keywords(): string | NSString;
    setKeywords(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621657-metadatamodificationdate
    metadataModificationDate(): NSDate;
    setMetadataModificationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621559-path
    path(): string | NSString;
    setPath(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621569-relateduniqueidentifier
    relatedUniqueIdentifier(): string | NSString;
    setRelatedUniqueIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621582-thumbnaildata
    thumbnailData(): NSData;
    setThumbnailData(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621560-thumbnailurl
    thumbnailURL(): NSURL;
    setThumbnailURL(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621615-title
    title(): string | NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649285-domainidentifier
    domainIdentifier(): string | NSString;
    setDomainIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649297-weakrelateduniqueidentifier
    weakRelatedUniqueIdentifier(): string | NSString;
    setWeakRelatedUniqueIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620579-altitude
    altitude(): NSNumber;
    setAltitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620594-city
    city(): string | NSString;
    setCity(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620578-country
    country(): string | NSString;
    setCountry(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620581-gpsareainformation
    GPSAreaInformation(): string | NSString;
    setGPSAreaInformation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620593-gpsdop
    GPSDOP(): NSNumber;
    setGPSDOP(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620587-gpsdatestamp
    GPSDateStamp(): NSDate;
    setGPSDateStamp(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620577-gpsdestbearing
    GPSDestBearing(): NSNumber;
    setGPSDestBearing(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620582-gpsdestdistance
    GPSDestDistance(): NSNumber;
    setGPSDestDistance(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620572-gpsdestlatitude
    GPSDestLatitude(): NSNumber;
    setGPSDestLatitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620580-gpsdestlongitude
    GPSDestLongitude(): NSNumber;
    setGPSDestLongitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620592-gpsdifferental
    GPSDifferental(): NSNumber;
    setGPSDifferental(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620583-gpsmapdatum
    GPSMapDatum(): string | NSString;
    setGPSMapDatum(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620573-gpsmeasuremode
    GPSMeasureMode(): string | NSString;
    setGPSMeasureMode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620575-gpsprocessingmethod
    GPSProcessingMethod(): string | NSString;
    setGPSProcessingMethod(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620589-gpsstatus
    GPSStatus(): string | NSString;
    setGPSStatus(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620588-gpstrack
    GPSTrack(): NSNumber;
    setGPSTrack(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620585-headline
    headline(): string | NSString;
    setHeadline(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620576-imagedirection
    imageDirection(): NSNumber;
    setImageDirection(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620590-instructions
    instructions(): string | NSString;
    setInstructions(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620586-latitude
    latitude(): NSNumber;
    setLatitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620571-longitude
    longitude(): NSNumber;
    setLongitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620584-namedlocation
    namedLocation(): string | NSString;
    setNamedLocation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620591-speed
    speed(): NSNumber;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620570-stateorprovince
    stateOrProvince(): string | NSString;
    setStateOrProvince(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620574-timestamp
    timestamp(): NSDate;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649301-fullyformattedaddress
    fullyFormattedAddress(): string | NSString;
    setFullyFormattedAddress(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649284-postalcode
    postalCode(): string | NSString;
    setPostalCode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649290-subthoroughfare
    subThoroughfare(): string | NSString;
    setSubThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649310-thoroughfare
    thoroughfare(): string | NSString;
    setThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616083-comment
    comment(): string | NSString;
    setComment(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616001-contentcreationdate
    contentCreationDate(): NSDate;
    setContentCreationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616085-contentmodificationdate
    contentModificationDate(): NSDate;
    setContentModificationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616024-contentsources
    contentSources(): string | NSString;
    setContentSources(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616012-copyright
    copyright(): string | NSString;
    setCopyright(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616035-downloadeddate
    downloadedDate(): NSDate;
    setDownloadedDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616088-editors
    editors(): string | NSString;
    setEditors(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616018-lastuseddate
    lastUsedDate(): NSDate;
    setLastUsedDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616045-participants
    participants(): string | NSString;
    setParticipants(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616066-projects
    projects(): string | NSString;
    setProjects(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616029-addeddate
    addedDate(): NSDate;
    setAddedDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616047-codecs
    codecs(): string | NSString;
    setCodecs(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616014-contactkeywords
    contactKeywords(): string | NSString;
    setContactKeywords(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616062-deliverytype
    deliveryType(): NSNumber;
    setDeliveryType(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616056-duration
    duration(): NSNumber;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616064-mediatypes
    mediaTypes(): string | NSString;
    setMediaTypes(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616026-organizations
    organizations(): string | NSString;
    setOrganizations(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616054-streamable
    streamable(): NSNumber;
    setStreamable(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616058-totalbitrate
    totalBitRate(): NSNumber;
    setTotalBitRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616103-audiobitrate
    audioBitRate(): NSNumber;
    setAudioBitRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616093-version
    version(): string | NSString;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616090-videobitrate
    videoBitRate(): NSNumber;
    setVideoBitRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616060-contributors
    contributors(): string | NSString;
    setContributors(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616068-languages
    languages(): string | NSString;
    setLanguages(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616003-publishers
    publishers(): string | NSString;
    setPublishers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616076-rights
    rights(): string | NSString;
    setRights(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616105-role
    role(): string | NSString;
    setRole(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616027-contentrating
    contentRating(): NSNumber;
    setContentRating(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616006-coverage
    coverage(): string | NSString;
    setCoverage(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616009-director
    director(): string | NSString;
    setDirector(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616031-genre
    genre(): string | NSString;
    setGenre(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616101-information
    information(): string | NSString;
    setInformation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616049-local
    local(): NSNumber;
    setLocal(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616097-originalformat
    originalFormat(): string | NSString;
    setOriginalFormat(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616022-originalsource
    originalSource(): string | NSString;
    setOriginalSource(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616043-performers
    performers(): string | NSString;
    setPerformers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616041-playcount
    playCount(): NSNumber;
    setPlayCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616092-producer
    producer(): string | NSString;
    setProducer(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616011-rating
    rating(): NSNumber;
    setRating(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616037-ratingdescription
    ratingDescription(): string | NSString;
    setRatingDescription(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616087-url
    URL(): NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616016-album
    album(): string | NSString;
    setAlbum(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616077-artist
    artist(): string | NSString;
    setArtist(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616072-audiochannelcount
    audioChannelCount(): NSNumber;
    setAudioChannelCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616039-audioencodingapplication
    audioEncodingApplication(): string | NSString;
    setAudioEncodingApplication(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616008-audiosamplerate
    audioSampleRate(): NSNumber;
    setAudioSampleRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616095-audiotracknumber
    audioTrackNumber(): NSNumber;
    setAudioTrackNumber(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616074-composer
    composer(): string | NSString;
    setComposer(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616020-keysignature
    keySignature(): string | NSString;
    setKeySignature(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616052-lyricist
    lyricist(): string | NSString;
    setLyricist(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616070-musicalgenre
    musicalGenre(): string | NSString;
    setMusicalGenre(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616051-recordingdate
    recordingDate(): NSDate;
    setRecordingDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616005-tempo
    tempo(): NSNumber;
    setTempo(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616079-timesignature
    timeSignature(): string | NSString;
    setTimeSignature(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616081-generalmidisequence
    generalMIDISequence(): NSNumber;
    setGeneralMIDISequence(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616099-musicalinstrumentcategory
    musicalInstrumentCategory(): string | NSString;
    setMusicalInstrumentCategory(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616033-musicalinstrumentname
    musicalInstrumentName(): string | NSString;
    setMusicalInstrumentName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621548-isospeed
    ISOSpeed(): NSNumber;
    setISOSpeed(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621542-acquisitionmake
    acquisitionMake(): string | NSString;
    setAcquisitionMake(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621523-acquisitionmodel
    acquisitionModel(): string | NSString;
    setAcquisitionModel(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621528-aperture
    aperture(): NSNumber;
    setAperture(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621530-bitspersample
    bitsPerSample(): NSNumber;
    setBitsPerSample(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621522-cameraowner
    cameraOwner(): string | NSString;
    setCameraOwner(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621541-colorspace
    colorSpace(): string | NSString;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621525-flashon
    flashOn(): NSNumber;
    setFlashOn(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621533-focallength
    focalLength(): NSNumber;
    setFocalLength(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621546-focallength35mm
    focalLength35mm(): NSNumber;
    setFocalLength35mm(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621519-layernames
    layerNames(): string | NSString;
    setLayerNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621537-lensmodel
    lensModel(): string | NSString;
    setLensModel(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621524-orientation
    orientation(): NSNumber;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621517-pixelcount
    pixelCount(): NSNumber;
    setPixelCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621535-pixelheight
    pixelHeight(): NSNumber;
    setPixelHeight(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621527-pixelwidth
    pixelWidth(): NSNumber;
    setPixelWidth(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621539-whitebalance
    whiteBalance(): NSNumber;
    setWhiteBalance(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621543-exifgpsversion
    EXIFGPSVersion(): string | NSString;
    setEXIFGPSVersion(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621550-exifversion
    EXIFVersion(): string | NSString;
    setEXIFVersion(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621540-exposuremode
    exposureMode(): NSNumber;
    setExposureMode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621547-exposureprogram
    exposureProgram(): string | NSString;
    setExposureProgram(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621532-exposuretime
    exposureTime(): NSNumber;
    setExposureTime(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621521-exposuretimestring
    exposureTimeString(): string | NSString;
    setExposureTimeString(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621549-fnumber
    fNumber(): NSNumber;
    setFNumber(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621518-hasalphachannel
    hasAlphaChannel(): NSNumber;
    setHasAlphaChannel(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621545-maxaperture
    maxAperture(): NSNumber;
    setMaxAperture(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621538-meteringmode
    meteringMode(): string | NSString;
    setMeteringMode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621531-profilename
    profileName(): string | NSString;
    setProfileName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621520-redeyeon
    redEyeOn(): NSNumber;
    setRedEyeOn(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621526-resolutionheightdpi
    resolutionHeightDPI(): NSNumber;
    setResolutionHeightDPI(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621544-resolutionwidthdpi
    resolutionWidthDPI(): NSNumber;
    setResolutionWidthDPI(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621669-htmlcontentdata
    HTMLContentData(): NSData;
    setHTMLContentData(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621567-accounthandles
    accountHandles(): string | NSString;
    setAccountHandles(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621573-accountidentifier
    accountIdentifier(): string | NSString;
    setAccountIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621664-additionalrecipients
    additionalRecipients(): CSPerson;
    setAdditionalRecipients(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621671-authoraddresses
    authorAddresses(): string | NSString;
    setAuthorAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621625-authoremailaddresses
    authorEmailAddresses(): string | NSString;
    setAuthorEmailAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621620-authornames
    authorNames(): string | NSString;
    setAuthorNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621608-authors
    authors(): CSPerson;
    setAuthors(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621572-emailaddresses
    emailAddresses(): string | NSString;
    setEmailAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621568-emailheaders
    emailHeaders(): NSArray;
    setEmailHeaders(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621645-hiddenadditionalrecipients
    hiddenAdditionalRecipients(): CSPerson;
    setHiddenAdditionalRecipients(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621575-instantmessageaddresses
    instantMessageAddresses(): string | NSString;
    setInstantMessageAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621646-likelyjunk
    likelyJunk(): NSNumber;
    setLikelyJunk(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621654-mailboxidentifiers
    mailboxIdentifiers(): string | NSString;
    setMailboxIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621650-phonenumbers
    phoneNumbers(): string | NSString;
    setPhoneNumbers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621675-primaryrecipients
    primaryRecipients(): CSPerson;
    setPrimaryRecipients(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621648-recipientaddresses
    recipientAddresses(): string | NSString;
    setRecipientAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621580-recipientemailaddresses
    recipientEmailAddresses(): string | NSString;
    setRecipientEmailAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621667-recipientnames
    recipientNames(): string | NSString;
    setRecipientNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621674-textcontent
    textContent(): string | NSString;
    setTextContent(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621622-containerdisplayname
    containerDisplayName(): string | NSString;
    setContainerDisplayName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621594-containeridentifier
    containerIdentifier(): string | NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621586-containerorder
    containerOrder(): NSNumber;
    setContainerOrder(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621661-containertitle
    containerTitle(): string | NSString;
    setContainerTitle(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621564-supportsnavigation
    supportsNavigation(): NSNumber;
    setSupportsNavigation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621653-supportsphonecall
    supportsPhoneCall(): NSNumber;
    setSupportsPhoneCall(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2867859-providerdatatypeidentifiers
    providerDataTypeIdentifiers(): string | NSString;
    setProviderDataTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2867861-providerfiletypeidentifiers
    providerFileTypeIdentifiers(): string | NSString;
    setProviderFileTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2908990-providerinplacefiletypeidentifie
    providerInPlaceFileTypeIdentifiers(): string | NSString;
    setProviderInPlaceFileTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887563-rankinghint
    rankingHint(): NSNumber;
    setRankingHint(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887561-usercreated
    userCreated(): NSNumber;
    setUserCreated(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887562-usercurated
    userCurated(): NSNumber;
    setUserCurated(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887564-userowned
    userOwned(): NSNumber;
    setUserOwned(): void;
    //
    alloc():CSSearchableItemAttributeSet;
    //
    init():CSSearchableItemAttributeSet;
  }
}

declare const CSSearchableItemAttributeSet: cocoascript.CSSearchableItemAttributeSet;
declare namespace cocoascript {
  /**
   * A key associated with a custom attribute for a searchable item.
   * doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey
   */
  interface CSCustomAttributeKey extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616402-initwithkeyname
    initWithKeyName(keyName: string | NSString):CSCustomAttributeKey;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616410-initwithkeyname
    initWithKeyName_searchable_searchableByDefault_unique_multiValued(keyName: string | NSString, searchable: BOOL, searchableByDefault: BOOL, unique: BOOL, multiValued: BOOL):CSCustomAttributeKey;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616405-keyname
    keyName(): string | NSString;
    setKeyName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616400-multivalued
    multiValued(): BOOL;
    setMultiValued(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616397-searchable
    searchable(): BOOL;
    setSearchable(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616396-searchablebydefault
    searchableByDefault(): BOOL;
    setSearchableByDefault(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616409-unique
    unique(): BOOL;
    setUnique(): void;
    //
    alloc():CSCustomAttributeKey;
    //
    init():CSCustomAttributeKey;
  }
}

declare const CSCustomAttributeKey: cocoascript.CSCustomAttributeKey;
declare namespace cocoascript {
  /**
   * An object representing a person in the context of search results.
   * doc://com.apple.documentation/documentation/corespotlight/csperson
   */
  interface CSPerson extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618464-initwithdisplayname
    initWithDisplayName_handles_handleIdentifier(displayName: string | NSString, handles: string | NSString, handleIdentifier: string | NSString):CSPerson;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618468-contactidentifier
    contactIdentifier(): string | NSString;
    setContactIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618469-displayname
    displayName(): string | NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618466-handleidentifier
    handleIdentifier(): string | NSString;
    setHandleIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618465-handles
    handles(): string | NSString;
    setHandles(): void;
    //
    alloc():CSPerson;
    //
    init():CSPerson;
  }
}

declare const CSPerson: cocoascript.CSPerson;
declare namespace cocoascript {
  /**
   * An item that can be indexed and made available to users when they search on their devices.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchableitem
   */
  interface CSSearchableItem extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621647-initwithuniqueidentifier
    initWithUniqueIdentifier_domainIdentifier_attributeSet(uniqueIdentifier: string | NSString, domainIdentifier: string | NSString, attributeSet: CSSearchableItemAttributeSet):CSSearchableItem;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621649-attributeset
    attributeSet(): CSSearchableItemAttributeSet;
    setAttributeSet(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621665-domainidentifier
    domainIdentifier(): string | NSString;
    setDomainIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621680-expirationdate
    expirationDate(): NSDate;
    setExpirationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621672-uniqueidentifier
    uniqueIdentifier(): string | NSString;
    setUniqueIdentifier(): void;
    //
    alloc():CSSearchableItem;
    //
    init():CSSearchableItem;
  }
}

declare const CSSearchableItem: cocoascript.CSSearchableItem;
// doc://com.apple.documentation/documentation/corespotlight/cssearchableitemactiontype
declare const CSSearchableItemActionType: string | NSString;
// doc://com.apple.documentation/documentation/corespotlight/cssearchableitemactivityidentifier
declare const CSSearchableItemActivityIdentifier: string | NSString;
// doc://com.apple.documentation/documentation/corespotlight/csquerycontinuationactiontype
declare const CSQueryContinuationActionType: string | NSString;
// doc://com.apple.documentation/documentation/corespotlight/cssearchquerystring
declare const CSSearchQueryString: string | NSString;
declare namespace cocoascript {
  /**
   * The on-device index.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchableindex
   */
  interface CSSearchableIndex extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620350-isindexingavailable
    isIndexingAvailable():BOOL;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620341-defaultsearchableindex
    defaultSearchableIndex():CSSearchableIndex;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620347-initwithname
    initWithName(name: string | NSString):CSSearchableIndex;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620332-initwithname
    initWithName_protectionClass(name: string | NSString, protectionClass: NSFileProtectionType):CSSearchableIndex;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620354-indexdelegate
    indexDelegate(): CSSearchableIndexDelegate;
    setIndexDelegate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620342-deleteallsearchableitemswithcomp
    deleteAllSearchableItemsWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620351-deletesearchableitemswithdomaini
    deleteSearchableItemsWithDomainIdentifiers_completionHandler(domainIdentifiers: string | NSString, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620337-deletesearchableitemswithidentif
    deleteSearchableItemsWithIdentifiers_completionHandler(identifiers: string | NSString, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620333-indexsearchableitems
    indexSearchableItems_completionHandler(items: CSSearchableItem, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620331-beginindexbatch
    beginIndexBatch():void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620344-endindexbatchwithclientstate
    endIndexBatchWithClientState_completionHandler(clientState: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620346-fetchlastclientstatewithcompleti
    fetchLastClientStateWithCompletionHandler(completionHandler: NSError):void;
    //
    alloc():CSSearchableIndex;
    //
    init():CSSearchableIndex;
  }
}

declare const CSSearchableIndex: cocoascript.CSSearchableIndex;
declare namespace cocoascript {
  /**
   * The criteria to apply when searching previously indexed app content.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchquery
   */
  interface CSSearchQuery extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649308-initwithquerystring
    initWithQueryString_attributes(queryString: string | NSString, attributes: string | NSString):CSSearchQuery;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649311-protectionclasses
    protectionClasses(): NSFileProtectionType;
    setProtectionClasses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649296-start
    start():void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649309-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649294-cancelled
    cancelled(): BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649312-completionhandler
    completionHandler(): NSError;
    setCompletionHandler(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649300-founditemcount
    foundItemCount(): NSUInteger;
    setFoundItemCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649306-founditemshandler
    foundItemsHandler(): CSSearchableItem;
    setFoundItemsHandler(): void;
    //
    alloc():CSSearchQuery;
    //
    init():CSSearchQuery;
  }
}

declare const CSSearchQuery: cocoascript.CSSearchQuery;
// doc://com.apple.documentation/documentation/corespotlight/cssearchquerystring
declare const CSSearchQueryString: string | NSString;
// doc://com.apple.documentation/documentation/corespotlight/csquerycontinuationactiontype
declare const CSQueryContinuationActionType: string | NSString;
declare namespace cocoascript {
  /**
   * An object displaying localized text in search results related to your app.
   * doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring
   */
  interface CSLocalizedString extends NSString {
    // doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring/1616403-initwithlocalizedstrings
    initWithLocalizedStrings(localizedStrings: NSDictionary):CSLocalizedString;
    // doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring/1616401-localizedstring
    localizedString():string | NSString;
    //
    alloc():CSLocalizedString;
    //
    init():CSLocalizedString;
  }
}

declare const CSLocalizedString: cocoascript.CSLocalizedString;
// doc://com.apple.documentation/documentation/corespotlight/corespotlightversionstring
declare const CoreSpotlightVersionString: string;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corespotlight/csindexerrorcode
  type CSIndexErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corespotlight/cssearchqueryerrorcode
  type CSSearchQueryErrorCode = cocoascript.NSInteger;
}
