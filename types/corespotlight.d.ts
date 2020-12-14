declare namespace cocoascript {
  /**
   * An interface that implements an index-maintenance app extension.
   * doc://com.apple.documentation/documentation/corespotlight/csindexextensionrequesthandler
   */
  interface CSIndexExtensionRequestHandler extends NSObject {
    //
    alloc():cocoascript.CSIndexExtensionRequestHandler;
    //
    init():cocoascript.CSIndexExtensionRequestHandler;
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
    dataForSearchableIndex_itemIdentifier_typeIdentifier_error(searchableIndex: cocoascript.CSSearchableIndex, itemIdentifier: string | cocoascript.NSString, typeIdentifier: string | cocoascript.NSString, outError: cocoascript.NSError):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/2867898-fileurlforsearchableindex
    fileURLForSearchableIndex_itemIdentifier_typeIdentifier_inPlace_error(searchableIndex: cocoascript.CSSearchableIndex, itemIdentifier: string | cocoascript.NSString, typeIdentifier: string | cocoascript.NSString, inPlace: cocoascript.BOOL, outError: cocoascript.NSError):cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620348-searchableindex
    searchableIndex_reindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620338-searchableindex
    searchableIndex_reindexSearchableItemsWithIdentifiers_acknowledgementHandler(searchableIndex: cocoascript.CSSearchableIndex, identifiers: string | cocoascript.NSString, acknowledgementHandler: void):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620353-searchableindexdidthrottle
    searchableIndexDidThrottle(searchableIndex: cocoascript.CSSearchableIndex):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindexdelegate/1620343-searchableindexdidfinishthrottle
    searchableIndexDidFinishThrottle(searchableIndex: cocoascript.CSSearchableIndex):void;
  }
}
declare namespace cocoascript {
  /**
   * The set of properties to display for a searchable item.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset
   */
  interface CSSearchableItemAttributeSet extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/3573909-initwithcontenttype
    initWithContentType(contentType: cocoascript.UTType):cocoascript.CSSearchableItemAttributeSet;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616406-initwithitemcontenttype
    initWithItemContentType(itemContentType: string | cocoascript.NSString):cocoascript.CSSearchableItemAttributeSet;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616395-setvalue
    setValue_forCustomKey(value: cocoascript.NSSecureCoding, key: cocoascript.CSCustomAttributeKey):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616407-valueforcustomkey
    valueForCustomKey(key: cocoascript.CSCustomAttributeKey):cocoascript.NSSecureCoding;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621571-audiences
    audiences(): string | cocoascript.NSString;
    setAudiences(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621584-contentdescription
    contentDescription(): string | cocoascript.NSString;
    setContentDescription(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621677-creator
    creator(): string | cocoascript.NSString;
    setCreator(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621659-encodingapplications
    encodingApplications(): string | cocoascript.NSString;
    setEncodingApplications(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621565-filesize
    fileSize(): cocoascript.NSNumber;
    setFileSize(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621566-fontnames
    fontNames(): string | cocoascript.NSString;
    setFontNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621577-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621642-kind
    kind(): string | cocoascript.NSString;
    setKind(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621627-pagecount
    pageCount(): cocoascript.NSNumber;
    setPageCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621673-pageheight
    pageHeight(): cocoascript.NSNumber;
    setPageHeight(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621670-pagewidth
    pageWidth(): cocoascript.NSNumber;
    setPageWidth(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621658-securitymethod
    securityMethod(): string | cocoascript.NSString;
    setSecurityMethod(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621598-subject
    subject(): string | cocoascript.NSString;
    setSubject(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621574-theme
    theme(): string | cocoascript.NSString;
    setTheme(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616636-allday
    allDay(): cocoascript.NSNumber;
    setAllDay(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616637-completiondate
    completionDate(): cocoascript.NSDate;
    setCompletionDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616641-duedate
    dueDate(): cocoascript.NSDate;
    setDueDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616638-enddate
    endDate(): cocoascript.NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616639-importantdates
    importantDates(): cocoascript.NSDate;
    setImportantDates(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616640-startdate
    startDate(): cocoascript.NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621662-alternatenames
    alternateNames(): string | cocoascript.NSString;
    setAlternateNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621561-contenttype
    contentType(): string | cocoascript.NSString;
    setContentType(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621660-contenttypetree
    contentTypeTree(): string | cocoascript.NSString;
    setContentTypeTree(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621651-contenturl
    contentURL(): cocoascript.NSURL;
    setContentURL(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621676-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621652-keywords
    keywords(): string | cocoascript.NSString;
    setKeywords(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621657-metadatamodificationdate
    metadataModificationDate(): cocoascript.NSDate;
    setMetadataModificationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621559-path
    path(): string | cocoascript.NSString;
    setPath(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621569-relateduniqueidentifier
    relatedUniqueIdentifier(): string | cocoascript.NSString;
    setRelatedUniqueIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621582-thumbnaildata
    thumbnailData(): cocoascript.NSData;
    setThumbnailData(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621560-thumbnailurl
    thumbnailURL(): cocoascript.NSURL;
    setThumbnailURL(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621615-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649285-domainidentifier
    domainIdentifier(): string | cocoascript.NSString;
    setDomainIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649297-weakrelateduniqueidentifier
    weakRelatedUniqueIdentifier(): string | cocoascript.NSString;
    setWeakRelatedUniqueIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620579-altitude
    altitude(): cocoascript.NSNumber;
    setAltitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620594-city
    city(): string | cocoascript.NSString;
    setCity(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620578-country
    country(): string | cocoascript.NSString;
    setCountry(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620581-gpsareainformation
    GPSAreaInformation(): string | cocoascript.NSString;
    setGPSAreaInformation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620593-gpsdop
    GPSDOP(): cocoascript.NSNumber;
    setGPSDOP(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620587-gpsdatestamp
    GPSDateStamp(): cocoascript.NSDate;
    setGPSDateStamp(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620577-gpsdestbearing
    GPSDestBearing(): cocoascript.NSNumber;
    setGPSDestBearing(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620582-gpsdestdistance
    GPSDestDistance(): cocoascript.NSNumber;
    setGPSDestDistance(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620572-gpsdestlatitude
    GPSDestLatitude(): cocoascript.NSNumber;
    setGPSDestLatitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620580-gpsdestlongitude
    GPSDestLongitude(): cocoascript.NSNumber;
    setGPSDestLongitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620592-gpsdifferental
    GPSDifferental(): cocoascript.NSNumber;
    setGPSDifferental(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620583-gpsmapdatum
    GPSMapDatum(): string | cocoascript.NSString;
    setGPSMapDatum(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620573-gpsmeasuremode
    GPSMeasureMode(): string | cocoascript.NSString;
    setGPSMeasureMode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620575-gpsprocessingmethod
    GPSProcessingMethod(): string | cocoascript.NSString;
    setGPSProcessingMethod(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620589-gpsstatus
    GPSStatus(): string | cocoascript.NSString;
    setGPSStatus(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620588-gpstrack
    GPSTrack(): cocoascript.NSNumber;
    setGPSTrack(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620585-headline
    headline(): string | cocoascript.NSString;
    setHeadline(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620576-imagedirection
    imageDirection(): cocoascript.NSNumber;
    setImageDirection(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620590-instructions
    instructions(): string | cocoascript.NSString;
    setInstructions(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620586-latitude
    latitude(): cocoascript.NSNumber;
    setLatitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620571-longitude
    longitude(): cocoascript.NSNumber;
    setLongitude(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620584-namedlocation
    namedLocation(): string | cocoascript.NSString;
    setNamedLocation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620591-speed
    speed(): cocoascript.NSNumber;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620570-stateorprovince
    stateOrProvince(): string | cocoascript.NSString;
    setStateOrProvince(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1620574-timestamp
    timestamp(): cocoascript.NSDate;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649301-fullyformattedaddress
    fullyFormattedAddress(): string | cocoascript.NSString;
    setFullyFormattedAddress(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649284-postalcode
    postalCode(): string | cocoascript.NSString;
    setPostalCode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649290-subthoroughfare
    subThoroughfare(): string | cocoascript.NSString;
    setSubThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1649310-thoroughfare
    thoroughfare(): string | cocoascript.NSString;
    setThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616083-comment
    comment(): string | cocoascript.NSString;
    setComment(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616001-contentcreationdate
    contentCreationDate(): cocoascript.NSDate;
    setContentCreationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616085-contentmodificationdate
    contentModificationDate(): cocoascript.NSDate;
    setContentModificationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616024-contentsources
    contentSources(): string | cocoascript.NSString;
    setContentSources(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616012-copyright
    copyright(): string | cocoascript.NSString;
    setCopyright(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616035-downloadeddate
    downloadedDate(): cocoascript.NSDate;
    setDownloadedDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616088-editors
    editors(): string | cocoascript.NSString;
    setEditors(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616018-lastuseddate
    lastUsedDate(): cocoascript.NSDate;
    setLastUsedDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616045-participants
    participants(): string | cocoascript.NSString;
    setParticipants(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616066-projects
    projects(): string | cocoascript.NSString;
    setProjects(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616029-addeddate
    addedDate(): cocoascript.NSDate;
    setAddedDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616047-codecs
    codecs(): string | cocoascript.NSString;
    setCodecs(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616014-contactkeywords
    contactKeywords(): string | cocoascript.NSString;
    setContactKeywords(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616062-deliverytype
    deliveryType(): cocoascript.NSNumber;
    setDeliveryType(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616056-duration
    duration(): cocoascript.NSNumber;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616064-mediatypes
    mediaTypes(): string | cocoascript.NSString;
    setMediaTypes(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616026-organizations
    organizations(): string | cocoascript.NSString;
    setOrganizations(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616054-streamable
    streamable(): cocoascript.NSNumber;
    setStreamable(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616058-totalbitrate
    totalBitRate(): cocoascript.NSNumber;
    setTotalBitRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616103-audiobitrate
    audioBitRate(): cocoascript.NSNumber;
    setAudioBitRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616093-version
    version(): string | cocoascript.NSString;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616090-videobitrate
    videoBitRate(): cocoascript.NSNumber;
    setVideoBitRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616060-contributors
    contributors(): string | cocoascript.NSString;
    setContributors(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616068-languages
    languages(): string | cocoascript.NSString;
    setLanguages(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616003-publishers
    publishers(): string | cocoascript.NSString;
    setPublishers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616076-rights
    rights(): string | cocoascript.NSString;
    setRights(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616105-role
    role(): string | cocoascript.NSString;
    setRole(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616027-contentrating
    contentRating(): cocoascript.NSNumber;
    setContentRating(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616006-coverage
    coverage(): string | cocoascript.NSString;
    setCoverage(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616009-director
    director(): string | cocoascript.NSString;
    setDirector(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616031-genre
    genre(): string | cocoascript.NSString;
    setGenre(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616101-information
    information(): string | cocoascript.NSString;
    setInformation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616049-local
    local(): cocoascript.NSNumber;
    setLocal(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616097-originalformat
    originalFormat(): string | cocoascript.NSString;
    setOriginalFormat(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616022-originalsource
    originalSource(): string | cocoascript.NSString;
    setOriginalSource(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616043-performers
    performers(): string | cocoascript.NSString;
    setPerformers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616041-playcount
    playCount(): cocoascript.NSNumber;
    setPlayCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616092-producer
    producer(): string | cocoascript.NSString;
    setProducer(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616011-rating
    rating(): cocoascript.NSNumber;
    setRating(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616037-ratingdescription
    ratingDescription(): string | cocoascript.NSString;
    setRatingDescription(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616087-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616016-album
    album(): string | cocoascript.NSString;
    setAlbum(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616077-artist
    artist(): string | cocoascript.NSString;
    setArtist(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616072-audiochannelcount
    audioChannelCount(): cocoascript.NSNumber;
    setAudioChannelCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616039-audioencodingapplication
    audioEncodingApplication(): string | cocoascript.NSString;
    setAudioEncodingApplication(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616008-audiosamplerate
    audioSampleRate(): cocoascript.NSNumber;
    setAudioSampleRate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616095-audiotracknumber
    audioTrackNumber(): cocoascript.NSNumber;
    setAudioTrackNumber(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616074-composer
    composer(): string | cocoascript.NSString;
    setComposer(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616020-keysignature
    keySignature(): string | cocoascript.NSString;
    setKeySignature(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616052-lyricist
    lyricist(): string | cocoascript.NSString;
    setLyricist(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616070-musicalgenre
    musicalGenre(): string | cocoascript.NSString;
    setMusicalGenre(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616051-recordingdate
    recordingDate(): cocoascript.NSDate;
    setRecordingDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616005-tempo
    tempo(): cocoascript.NSNumber;
    setTempo(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616079-timesignature
    timeSignature(): string | cocoascript.NSString;
    setTimeSignature(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616081-generalmidisequence
    generalMIDISequence(): cocoascript.NSNumber;
    setGeneralMIDISequence(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616099-musicalinstrumentcategory
    musicalInstrumentCategory(): string | cocoascript.NSString;
    setMusicalInstrumentCategory(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1616033-musicalinstrumentname
    musicalInstrumentName(): string | cocoascript.NSString;
    setMusicalInstrumentName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621548-isospeed
    ISOSpeed(): cocoascript.NSNumber;
    setISOSpeed(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621542-acquisitionmake
    acquisitionMake(): string | cocoascript.NSString;
    setAcquisitionMake(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621523-acquisitionmodel
    acquisitionModel(): string | cocoascript.NSString;
    setAcquisitionModel(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621528-aperture
    aperture(): cocoascript.NSNumber;
    setAperture(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621530-bitspersample
    bitsPerSample(): cocoascript.NSNumber;
    setBitsPerSample(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621522-cameraowner
    cameraOwner(): string | cocoascript.NSString;
    setCameraOwner(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621541-colorspace
    colorSpace(): string | cocoascript.NSString;
    setColorSpace(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621525-flashon
    flashOn(): cocoascript.NSNumber;
    setFlashOn(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621533-focallength
    focalLength(): cocoascript.NSNumber;
    setFocalLength(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621546-focallength35mm
    focalLength35mm(): cocoascript.NSNumber;
    setFocalLength35mm(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621519-layernames
    layerNames(): string | cocoascript.NSString;
    setLayerNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621537-lensmodel
    lensModel(): string | cocoascript.NSString;
    setLensModel(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621524-orientation
    orientation(): cocoascript.NSNumber;
    setOrientation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621517-pixelcount
    pixelCount(): cocoascript.NSNumber;
    setPixelCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621535-pixelheight
    pixelHeight(): cocoascript.NSNumber;
    setPixelHeight(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621527-pixelwidth
    pixelWidth(): cocoascript.NSNumber;
    setPixelWidth(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621539-whitebalance
    whiteBalance(): cocoascript.NSNumber;
    setWhiteBalance(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621543-exifgpsversion
    EXIFGPSVersion(): string | cocoascript.NSString;
    setEXIFGPSVersion(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621550-exifversion
    EXIFVersion(): string | cocoascript.NSString;
    setEXIFVersion(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621540-exposuremode
    exposureMode(): cocoascript.NSNumber;
    setExposureMode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621547-exposureprogram
    exposureProgram(): string | cocoascript.NSString;
    setExposureProgram(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621532-exposuretime
    exposureTime(): cocoascript.NSNumber;
    setExposureTime(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621521-exposuretimestring
    exposureTimeString(): string | cocoascript.NSString;
    setExposureTimeString(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621549-fnumber
    fNumber(): cocoascript.NSNumber;
    setFNumber(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621518-hasalphachannel
    hasAlphaChannel(): cocoascript.NSNumber;
    setHasAlphaChannel(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621545-maxaperture
    maxAperture(): cocoascript.NSNumber;
    setMaxAperture(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621538-meteringmode
    meteringMode(): string | cocoascript.NSString;
    setMeteringMode(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621531-profilename
    profileName(): string | cocoascript.NSString;
    setProfileName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621520-redeyeon
    redEyeOn(): cocoascript.NSNumber;
    setRedEyeOn(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621526-resolutionheightdpi
    resolutionHeightDPI(): cocoascript.NSNumber;
    setResolutionHeightDPI(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621544-resolutionwidthdpi
    resolutionWidthDPI(): cocoascript.NSNumber;
    setResolutionWidthDPI(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621669-htmlcontentdata
    HTMLContentData(): cocoascript.NSData;
    setHTMLContentData(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621567-accounthandles
    accountHandles(): string | cocoascript.NSString;
    setAccountHandles(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621573-accountidentifier
    accountIdentifier(): string | cocoascript.NSString;
    setAccountIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621664-additionalrecipients
    additionalRecipients(): cocoascript.CSPerson;
    setAdditionalRecipients(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621671-authoraddresses
    authorAddresses(): string | cocoascript.NSString;
    setAuthorAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621625-authoremailaddresses
    authorEmailAddresses(): string | cocoascript.NSString;
    setAuthorEmailAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621620-authornames
    authorNames(): string | cocoascript.NSString;
    setAuthorNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621608-authors
    authors(): cocoascript.CSPerson;
    setAuthors(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621572-emailaddresses
    emailAddresses(): string | cocoascript.NSString;
    setEmailAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621568-emailheaders
    emailHeaders(): cocoascript.NSArray;
    setEmailHeaders(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621645-hiddenadditionalrecipients
    hiddenAdditionalRecipients(): cocoascript.CSPerson;
    setHiddenAdditionalRecipients(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621575-instantmessageaddresses
    instantMessageAddresses(): string | cocoascript.NSString;
    setInstantMessageAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621646-likelyjunk
    likelyJunk(): cocoascript.NSNumber;
    setLikelyJunk(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621654-mailboxidentifiers
    mailboxIdentifiers(): string | cocoascript.NSString;
    setMailboxIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621650-phonenumbers
    phoneNumbers(): string | cocoascript.NSString;
    setPhoneNumbers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621675-primaryrecipients
    primaryRecipients(): cocoascript.CSPerson;
    setPrimaryRecipients(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621648-recipientaddresses
    recipientAddresses(): string | cocoascript.NSString;
    setRecipientAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621580-recipientemailaddresses
    recipientEmailAddresses(): string | cocoascript.NSString;
    setRecipientEmailAddresses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621667-recipientnames
    recipientNames(): string | cocoascript.NSString;
    setRecipientNames(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621674-textcontent
    textContent(): string | cocoascript.NSString;
    setTextContent(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621622-containerdisplayname
    containerDisplayName(): string | cocoascript.NSString;
    setContainerDisplayName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621594-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621586-containerorder
    containerOrder(): cocoascript.NSNumber;
    setContainerOrder(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621661-containertitle
    containerTitle(): string | cocoascript.NSString;
    setContainerTitle(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621564-supportsnavigation
    supportsNavigation(): cocoascript.NSNumber;
    setSupportsNavigation(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/1621653-supportsphonecall
    supportsPhoneCall(): cocoascript.NSNumber;
    setSupportsPhoneCall(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2867859-providerdatatypeidentifiers
    providerDataTypeIdentifiers(): string | cocoascript.NSString;
    setProviderDataTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2867861-providerfiletypeidentifiers
    providerFileTypeIdentifiers(): string | cocoascript.NSString;
    setProviderFileTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2908990-providerinplacefiletypeidentifie
    providerInPlaceFileTypeIdentifiers(): string | cocoascript.NSString;
    setProviderInPlaceFileTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887563-rankinghint
    rankingHint(): cocoascript.NSNumber;
    setRankingHint(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887561-usercreated
    userCreated(): cocoascript.NSNumber;
    setUserCreated(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887562-usercurated
    userCurated(): cocoascript.NSNumber;
    setUserCurated(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitemattributeset/2887564-userowned
    userOwned(): cocoascript.NSNumber;
    setUserOwned(): void;
    //
    alloc():cocoascript.CSSearchableItemAttributeSet;
    //
    init():cocoascript.CSSearchableItemAttributeSet;
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
    initWithKeyName(keyName: string | cocoascript.NSString):cocoascript.CSCustomAttributeKey;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616410-initwithkeyname
    initWithKeyName_searchable_searchableByDefault_unique_multiValued(keyName: string | cocoascript.NSString, searchable: cocoascript.BOOL, searchableByDefault: cocoascript.BOOL, unique: cocoascript.BOOL, multiValued: cocoascript.BOOL):cocoascript.CSCustomAttributeKey;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616405-keyname
    keyName(): string | cocoascript.NSString;
    setKeyName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616400-multivalued
    multiValued(): cocoascript.BOOL;
    setMultiValued(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616397-searchable
    searchable(): cocoascript.BOOL;
    setSearchable(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616396-searchablebydefault
    searchableByDefault(): cocoascript.BOOL;
    setSearchableByDefault(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cscustomattributekey/1616409-unique
    unique(): cocoascript.BOOL;
    setUnique(): void;
    //
    alloc():cocoascript.CSCustomAttributeKey;
    //
    init():cocoascript.CSCustomAttributeKey;
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
    initWithDisplayName_handles_handleIdentifier(displayName: string | cocoascript.NSString, handles: string | cocoascript.NSString, handleIdentifier: string | cocoascript.NSString):cocoascript.CSPerson;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618468-contactidentifier
    contactIdentifier(): string | cocoascript.NSString;
    setContactIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618469-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618466-handleidentifier
    handleIdentifier(): string | cocoascript.NSString;
    setHandleIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/csperson/1618465-handles
    handles(): string | cocoascript.NSString;
    setHandles(): void;
    //
    alloc():cocoascript.CSPerson;
    //
    init():cocoascript.CSPerson;
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
    initWithUniqueIdentifier_domainIdentifier_attributeSet(uniqueIdentifier: string | cocoascript.NSString, domainIdentifier: string | cocoascript.NSString, attributeSet: cocoascript.CSSearchableItemAttributeSet):cocoascript.CSSearchableItem;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621649-attributeset
    attributeSet(): cocoascript.CSSearchableItemAttributeSet;
    setAttributeSet(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621665-domainidentifier
    domainIdentifier(): string | cocoascript.NSString;
    setDomainIdentifier(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621680-expirationdate
    expirationDate(): cocoascript.NSDate;
    setExpirationDate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableitem/1621672-uniqueidentifier
    uniqueIdentifier(): string | cocoascript.NSString;
    setUniqueIdentifier(): void;
    //
    alloc():cocoascript.CSSearchableItem;
    //
    init():cocoascript.CSSearchableItem;
  }
}

declare const CSSearchableItem: cocoascript.CSSearchableItem;
// doc://com.apple.documentation/documentation/corespotlight/cssearchableitemactiontype
declare const CSSearchableItemActionType: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/corespotlight/cssearchableitemactivityidentifier
declare const CSSearchableItemActivityIdentifier: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/corespotlight/csquerycontinuationactiontype
declare const CSQueryContinuationActionType: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/corespotlight/cssearchquerystring
declare const CSSearchQueryString: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The on-device index.
   * doc://com.apple.documentation/documentation/corespotlight/cssearchableindex
   */
  interface CSSearchableIndex extends NSObject {
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620350-isindexingavailable
    isIndexingAvailable():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620341-defaultsearchableindex
    defaultSearchableIndex():cocoascript.CSSearchableIndex;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620347-initwithname
    initWithName(name: string | cocoascript.NSString):cocoascript.CSSearchableIndex;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620332-initwithname
    initWithName_protectionClass(name: string | cocoascript.NSString, protectionClass: cocoascript.NSFileProtectionType):cocoascript.CSSearchableIndex;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620354-indexdelegate
    indexDelegate(): cocoascript.CSSearchableIndexDelegate;
    setIndexDelegate(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620342-deleteallsearchableitemswithcomp
    deleteAllSearchableItemsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620351-deletesearchableitemswithdomaini
    deleteSearchableItemsWithDomainIdentifiers_completionHandler(domainIdentifiers: string | cocoascript.NSString, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620337-deletesearchableitemswithidentif
    deleteSearchableItemsWithIdentifiers_completionHandler(identifiers: string | cocoascript.NSString, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620333-indexsearchableitems
    indexSearchableItems_completionHandler(items: cocoascript.CSSearchableItem, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620331-beginindexbatch
    beginIndexBatch():void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620344-endindexbatchwithclientstate
    endIndexBatchWithClientState_completionHandler(clientState: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchableindex/1620346-fetchlastclientstatewithcompleti
    fetchLastClientStateWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    //
    alloc():cocoascript.CSSearchableIndex;
    //
    init():cocoascript.CSSearchableIndex;
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
    initWithQueryString_attributes(queryString: string | cocoascript.NSString, attributes: string | cocoascript.NSString):cocoascript.CSSearchQuery;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649311-protectionclasses
    protectionClasses(): cocoascript.NSFileProtectionType;
    setProtectionClasses(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649296-start
    start():void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649309-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649294-cancelled
    cancelled(): cocoascript.BOOL;
    setCancelled(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649312-completionhandler
    completionHandler(): cocoascript.NSError;
    setCompletionHandler(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649300-founditemcount
    foundItemCount(): cocoascript.NSUInteger;
    setFoundItemCount(): void;
    // doc://com.apple.documentation/documentation/corespotlight/cssearchquery/1649306-founditemshandler
    foundItemsHandler(): cocoascript.CSSearchableItem;
    setFoundItemsHandler(): void;
    //
    alloc():cocoascript.CSSearchQuery;
    //
    init():cocoascript.CSSearchQuery;
  }
}

declare const CSSearchQuery: cocoascript.CSSearchQuery;
// doc://com.apple.documentation/documentation/corespotlight/cssearchquerystring
declare const CSSearchQueryString: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/corespotlight/csquerycontinuationactiontype
declare const CSQueryContinuationActionType: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object displaying localized text in search results related to your app.
   * doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring
   */
  interface CSLocalizedString extends NSString {
    // doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring/1616403-initwithlocalizedstrings
    initWithLocalizedStrings(localizedStrings: cocoascript.NSDictionary):cocoascript.CSLocalizedString;
    // doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring/1616401-localizedstring
    localizedString():string | cocoascript.NSString;
    //
    alloc():cocoascript.CSLocalizedString;
    //
    init():cocoascript.CSLocalizedString;
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
