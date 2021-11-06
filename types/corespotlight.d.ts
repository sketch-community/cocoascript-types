declare namespace cocoascript {
  /**
   * An interface that implements an index-maintenance app extension.
   * https://developer.apple.com/documentation/corespotlight/csindexextensionrequesthandler
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
   * An object that provides searchable attributes for file types that the app supports.
   * https://developer.apple.com/documentation/corespotlight/csimportextension
   */
  interface CSImportExtension extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/csimportextension/3752010-updateattributes
    updateAttributes_forFileAtURL_error(attributes: CSSearchableItemAttributeSet, contentURL: NSURL, error: NSError):boolean;
    //
    alloc():CSImportExtension;
    //
    init():CSImportExtension;
  }
}

declare const CSImportExtension: cocoascript.CSImportExtension;
declare namespace cocoascript {
  /**
   * A protocol defining methods a delegate object or app extension uses to handle communication from the on-device index.
   * https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate
   */
  interface CSSearchableIndexDelegate extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/2867899-dataforsearchableindex
    dataForSearchableIndex_itemIdentifier_typeIdentifier_error(searchableIndex: CSSearchableIndex, itemIdentifier: string | cocoascript.NSString, typeIdentifier: string | cocoascript.NSString, outError: NSError):NSData;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/2867898-fileurlforsearchableindex
    fileURLForSearchableIndex_itemIdentifier_typeIdentifier_inPlace_error(searchableIndex: CSSearchableIndex, itemIdentifier: string | cocoascript.NSString, typeIdentifier: string | cocoascript.NSString, inPlace: boolean, outError: NSError):NSURL;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/1620348-searchableindex
    searchableIndex_reindexAllSearchableItemsWithAcknowledgementHandler(searchableIndex: CSSearchableIndex, acknowledgementHandler: void):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/1620338-searchableindex
    searchableIndex_reindexSearchableItemsWithIdentifiers_acknowledgementHandler(searchableIndex: CSSearchableIndex, identifiers: string | cocoascript.NSString, acknowledgementHandler: void):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/1620353-searchableindexdidthrottle
    searchableIndexDidThrottle(searchableIndex: CSSearchableIndex):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/1620343-searchableindexdidfinishthrottle
    searchableIndexDidFinishThrottle(searchableIndex: CSSearchableIndex):void;
  }
}
declare namespace cocoascript {
  /**
   * The set of properties to display for a searchable item.
   * https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset
   */
  interface CSSearchableItemAttributeSet extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/3573909-initwithcontenttype
    initWithContentType(contentType: UTType):CSSearchableItemAttributeSet;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616406-initwithitemcontenttype
    initWithItemContentType(itemContentType: string | cocoascript.NSString):CSSearchableItemAttributeSet;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616395-setvalue
    setValue_forCustomKey(value: NSSecureCoding, key: CSCustomAttributeKey):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616407-valueforcustomkey
    valueForCustomKey(key: CSCustomAttributeKey):NSSecureCoding;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621571-audiences
    audiences(): string | cocoascript.NSString;
    setAudiences(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621584-contentdescription
    contentDescription(): string | cocoascript.NSString;
    setContentDescription(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621677-creator
    creator(): string | cocoascript.NSString;
    setCreator(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621659-encodingapplications
    encodingApplications(): string | cocoascript.NSString;
    setEncodingApplications(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621565-filesize
    fileSize(): NSNumber;
    setFileSize(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621566-fontnames
    fontNames(): string | cocoascript.NSString;
    setFontNames(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621577-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621642-kind
    kind(): string | cocoascript.NSString;
    setKind(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621627-pagecount
    pageCount(): NSNumber;
    setPageCount(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621673-pageheight
    pageHeight(): NSNumber;
    setPageHeight(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621670-pagewidth
    pageWidth(): NSNumber;
    setPageWidth(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621658-securitymethod
    securityMethod(): string | cocoascript.NSString;
    setSecurityMethod(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621598-subject
    subject(): string | cocoascript.NSString;
    setSubject(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621574-theme
    theme(): string | cocoascript.NSString;
    setTheme(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621662-alternatenames
    alternateNames(): string | cocoascript.NSString;
    setAlternateNames(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621561-contenttype
    contentType(): string | cocoascript.NSString;
    setContentType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621660-contenttypetree
    contentTypeTree(): string | cocoascript.NSString;
    setContentTypeTree(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621651-contenturl
    contentURL(): NSURL;
    setContentURL(value: NSURL): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/3752013-darkthumbnailurl
    darkThumbnailURL(): NSURL;
    setDarkThumbnailURL(value: NSURL): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621676-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621652-keywords
    keywords(): string | cocoascript.NSString;
    setKeywords(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621657-metadatamodificationdate
    metadataModificationDate(): NSDate;
    setMetadataModificationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621559-path
    path(): string | cocoascript.NSString;
    setPath(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/2887563-rankinghint
    rankingHint(): NSNumber;
    setRankingHint(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621569-relateduniqueidentifier
    relatedUniqueIdentifier(): string | cocoascript.NSString;
    setRelatedUniqueIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621582-thumbnaildata
    thumbnailData(): NSData;
    setThumbnailData(value: NSData): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621560-thumbnailurl
    thumbnailURL(): NSURL;
    setThumbnailURL(value: NSURL): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621615-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1649285-domainidentifier
    domainIdentifier(): string | cocoascript.NSString;
    setDomainIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1649297-weakrelateduniqueidentifier
    weakRelatedUniqueIdentifier(): string | cocoascript.NSString;
    setWeakRelatedUniqueIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/2887561-usercreated
    userCreated(): NSNumber;
    setUserCreated(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/2887562-usercurated
    userCurated(): NSNumber;
    setUserCurated(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/2887564-userowned
    userOwned(): NSNumber;
    setUserOwned(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616636-allday
    allDay(): NSNumber;
    setAllDay(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616637-completiondate
    completionDate(): NSDate;
    setCompletionDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616641-duedate
    dueDate(): NSDate;
    setDueDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616638-enddate
    endDate(): NSDate;
    setEndDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616639-importantdates
    importantDates(): NSDate;
    setImportantDates(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616640-startdate
    startDate(): NSDate;
    setStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620579-altitude
    altitude(): NSNumber;
    setAltitude(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620594-city
    city(): string | cocoascript.NSString;
    setCity(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620578-country
    country(): string | cocoascript.NSString;
    setCountry(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620581-gpsareainformation
    GPSAreaInformation(): string | cocoascript.NSString;
    setGPSAreaInformation(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620593-gpsdop
    GPSDOP(): NSNumber;
    setGPSDOP(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620587-gpsdatestamp
    GPSDateStamp(): NSDate;
    setGPSDateStamp(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620577-gpsdestbearing
    GPSDestBearing(): NSNumber;
    setGPSDestBearing(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620582-gpsdestdistance
    GPSDestDistance(): NSNumber;
    setGPSDestDistance(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620572-gpsdestlatitude
    GPSDestLatitude(): NSNumber;
    setGPSDestLatitude(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620580-gpsdestlongitude
    GPSDestLongitude(): NSNumber;
    setGPSDestLongitude(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620592-gpsdifferental
    GPSDifferental(): NSNumber;
    setGPSDifferental(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620583-gpsmapdatum
    GPSMapDatum(): string | cocoascript.NSString;
    setGPSMapDatum(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620573-gpsmeasuremode
    GPSMeasureMode(): string | cocoascript.NSString;
    setGPSMeasureMode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620575-gpsprocessingmethod
    GPSProcessingMethod(): string | cocoascript.NSString;
    setGPSProcessingMethod(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620589-gpsstatus
    GPSStatus(): string | cocoascript.NSString;
    setGPSStatus(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620588-gpstrack
    GPSTrack(): NSNumber;
    setGPSTrack(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620585-headline
    headline(): string | cocoascript.NSString;
    setHeadline(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620576-imagedirection
    imageDirection(): NSNumber;
    setImageDirection(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620590-instructions
    instructions(): string | cocoascript.NSString;
    setInstructions(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620586-latitude
    latitude(): NSNumber;
    setLatitude(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620571-longitude
    longitude(): NSNumber;
    setLongitude(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620584-namedlocation
    namedLocation(): string | cocoascript.NSString;
    setNamedLocation(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620591-speed
    speed(): NSNumber;
    setSpeed(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620570-stateorprovince
    stateOrProvince(): string | cocoascript.NSString;
    setStateOrProvince(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1620574-timestamp
    timestamp(): NSDate;
    setTimestamp(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1649301-fullyformattedaddress
    fullyFormattedAddress(): string | cocoascript.NSString;
    setFullyFormattedAddress(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1649284-postalcode
    postalCode(): string | cocoascript.NSString;
    setPostalCode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1649290-subthoroughfare
    subThoroughfare(): string | cocoascript.NSString;
    setSubThoroughfare(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1649310-thoroughfare
    thoroughfare(): string | cocoascript.NSString;
    setThoroughfare(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616083-comment
    comment(): string | cocoascript.NSString;
    setComment(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616001-contentcreationdate
    contentCreationDate(): NSDate;
    setContentCreationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616085-contentmodificationdate
    contentModificationDate(): NSDate;
    setContentModificationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616024-contentsources
    contentSources(): string | cocoascript.NSString;
    setContentSources(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616012-copyright
    copyright(): string | cocoascript.NSString;
    setCopyright(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616035-downloadeddate
    downloadedDate(): NSDate;
    setDownloadedDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616088-editors
    editors(): string | cocoascript.NSString;
    setEditors(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616018-lastuseddate
    lastUsedDate(): NSDate;
    setLastUsedDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616045-participants
    participants(): string | cocoascript.NSString;
    setParticipants(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616066-projects
    projects(): string | cocoascript.NSString;
    setProjects(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616029-addeddate
    addedDate(): NSDate;
    setAddedDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616047-codecs
    codecs(): string | cocoascript.NSString;
    setCodecs(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616014-contactkeywords
    contactKeywords(): string | cocoascript.NSString;
    setContactKeywords(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616062-deliverytype
    deliveryType(): NSNumber;
    setDeliveryType(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616056-duration
    duration(): NSNumber;
    setDuration(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616064-mediatypes
    mediaTypes(): string | cocoascript.NSString;
    setMediaTypes(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616026-organizations
    organizations(): string | cocoascript.NSString;
    setOrganizations(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616054-streamable
    streamable(): NSNumber;
    setStreamable(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616058-totalbitrate
    totalBitRate(): NSNumber;
    setTotalBitRate(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616103-audiobitrate
    audioBitRate(): NSNumber;
    setAudioBitRate(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616093-version
    version(): string | cocoascript.NSString;
    setVersion(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616090-videobitrate
    videoBitRate(): NSNumber;
    setVideoBitRate(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616060-contributors
    contributors(): string | cocoascript.NSString;
    setContributors(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616068-languages
    languages(): string | cocoascript.NSString;
    setLanguages(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616003-publishers
    publishers(): string | cocoascript.NSString;
    setPublishers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616076-rights
    rights(): string | cocoascript.NSString;
    setRights(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616105-role
    role(): string | cocoascript.NSString;
    setRole(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616027-contentrating
    contentRating(): NSNumber;
    setContentRating(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616006-coverage
    coverage(): string | cocoascript.NSString;
    setCoverage(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616009-director
    director(): string | cocoascript.NSString;
    setDirector(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616031-genre
    genre(): string | cocoascript.NSString;
    setGenre(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616101-information
    information(): string | cocoascript.NSString;
    setInformation(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616049-local
    local(): NSNumber;
    setLocal(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616097-originalformat
    originalFormat(): string | cocoascript.NSString;
    setOriginalFormat(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616022-originalsource
    originalSource(): string | cocoascript.NSString;
    setOriginalSource(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616043-performers
    performers(): string | cocoascript.NSString;
    setPerformers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616041-playcount
    playCount(): NSNumber;
    setPlayCount(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616092-producer
    producer(): string | cocoascript.NSString;
    setProducer(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616011-rating
    rating(): NSNumber;
    setRating(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616037-ratingdescription
    ratingDescription(): string | cocoascript.NSString;
    setRatingDescription(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616087-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616016-album
    album(): string | cocoascript.NSString;
    setAlbum(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616077-artist
    artist(): string | cocoascript.NSString;
    setArtist(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616072-audiochannelcount
    audioChannelCount(): NSNumber;
    setAudioChannelCount(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616039-audioencodingapplication
    audioEncodingApplication(): string | cocoascript.NSString;
    setAudioEncodingApplication(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616008-audiosamplerate
    audioSampleRate(): NSNumber;
    setAudioSampleRate(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616095-audiotracknumber
    audioTrackNumber(): NSNumber;
    setAudioTrackNumber(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616074-composer
    composer(): string | cocoascript.NSString;
    setComposer(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616020-keysignature
    keySignature(): string | cocoascript.NSString;
    setKeySignature(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616052-lyricist
    lyricist(): string | cocoascript.NSString;
    setLyricist(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616070-musicalgenre
    musicalGenre(): string | cocoascript.NSString;
    setMusicalGenre(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616051-recordingdate
    recordingDate(): NSDate;
    setRecordingDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616005-tempo
    tempo(): NSNumber;
    setTempo(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616079-timesignature
    timeSignature(): string | cocoascript.NSString;
    setTimeSignature(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616081-generalmidisequence
    generalMIDISequence(): NSNumber;
    setGeneralMIDISequence(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616099-musicalinstrumentcategory
    musicalInstrumentCategory(): string | cocoascript.NSString;
    setMusicalInstrumentCategory(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1616033-musicalinstrumentname
    musicalInstrumentName(): string | cocoascript.NSString;
    setMusicalInstrumentName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621548-isospeed
    ISOSpeed(): NSNumber;
    setISOSpeed(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621542-acquisitionmake
    acquisitionMake(): string | cocoascript.NSString;
    setAcquisitionMake(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621523-acquisitionmodel
    acquisitionModel(): string | cocoascript.NSString;
    setAcquisitionModel(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621528-aperture
    aperture(): NSNumber;
    setAperture(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621530-bitspersample
    bitsPerSample(): NSNumber;
    setBitsPerSample(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621522-cameraowner
    cameraOwner(): string | cocoascript.NSString;
    setCameraOwner(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621541-colorspace
    colorSpace(): string | cocoascript.NSString;
    setColorSpace(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621525-flashon
    flashOn(): NSNumber;
    setFlashOn(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621533-focallength
    focalLength(): NSNumber;
    setFocalLength(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621546-focallength35mm
    focalLength35mm(): NSNumber;
    setFocalLength35mm(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621519-layernames
    layerNames(): string | cocoascript.NSString;
    setLayerNames(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621537-lensmodel
    lensModel(): string | cocoascript.NSString;
    setLensModel(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621524-orientation
    orientation(): NSNumber;
    setOrientation(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621517-pixelcount
    pixelCount(): NSNumber;
    setPixelCount(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621535-pixelheight
    pixelHeight(): NSNumber;
    setPixelHeight(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621527-pixelwidth
    pixelWidth(): NSNumber;
    setPixelWidth(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621539-whitebalance
    whiteBalance(): NSNumber;
    setWhiteBalance(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621543-exifgpsversion
    EXIFGPSVersion(): string | cocoascript.NSString;
    setEXIFGPSVersion(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621550-exifversion
    EXIFVersion(): string | cocoascript.NSString;
    setEXIFVersion(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621540-exposuremode
    exposureMode(): NSNumber;
    setExposureMode(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621547-exposureprogram
    exposureProgram(): string | cocoascript.NSString;
    setExposureProgram(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621532-exposuretime
    exposureTime(): NSNumber;
    setExposureTime(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621521-exposuretimestring
    exposureTimeString(): string | cocoascript.NSString;
    setExposureTimeString(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621549-fnumber
    fNumber(): NSNumber;
    setFNumber(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621518-hasalphachannel
    hasAlphaChannel(): NSNumber;
    setHasAlphaChannel(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621545-maxaperture
    maxAperture(): NSNumber;
    setMaxAperture(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621538-meteringmode
    meteringMode(): string | cocoascript.NSString;
    setMeteringMode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621531-profilename
    profileName(): string | cocoascript.NSString;
    setProfileName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621520-redeyeon
    redEyeOn(): NSNumber;
    setRedEyeOn(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621526-resolutionheightdpi
    resolutionHeightDPI(): NSNumber;
    setResolutionHeightDPI(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621544-resolutionwidthdpi
    resolutionWidthDPI(): NSNumber;
    setResolutionWidthDPI(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621669-htmlcontentdata
    HTMLContentData(): NSData;
    setHTMLContentData(value: NSData): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621567-accounthandles
    accountHandles(): string | cocoascript.NSString;
    setAccountHandles(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621573-accountidentifier
    accountIdentifier(): string | cocoascript.NSString;
    setAccountIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621664-additionalrecipients
    additionalRecipients(): CSPerson;
    setAdditionalRecipients(value: CSPerson): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621671-authoraddresses
    authorAddresses(): string | cocoascript.NSString;
    setAuthorAddresses(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621625-authoremailaddresses
    authorEmailAddresses(): string | cocoascript.NSString;
    setAuthorEmailAddresses(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621620-authornames
    authorNames(): string | cocoascript.NSString;
    setAuthorNames(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621608-authors
    authors(): CSPerson;
    setAuthors(value: CSPerson): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621572-emailaddresses
    emailAddresses(): string | cocoascript.NSString;
    setEmailAddresses(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621568-emailheaders
    emailHeaders(): NSArray;
    setEmailHeaders(value: NSArray): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621645-hiddenadditionalrecipients
    hiddenAdditionalRecipients(): CSPerson;
    setHiddenAdditionalRecipients(value: CSPerson): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621575-instantmessageaddresses
    instantMessageAddresses(): string | cocoascript.NSString;
    setInstantMessageAddresses(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621646-likelyjunk
    likelyJunk(): NSNumber;
    setLikelyJunk(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621654-mailboxidentifiers
    mailboxIdentifiers(): string | cocoascript.NSString;
    setMailboxIdentifiers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621650-phonenumbers
    phoneNumbers(): string | cocoascript.NSString;
    setPhoneNumbers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621675-primaryrecipients
    primaryRecipients(): CSPerson;
    setPrimaryRecipients(value: CSPerson): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621648-recipientaddresses
    recipientAddresses(): string | cocoascript.NSString;
    setRecipientAddresses(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621580-recipientemailaddresses
    recipientEmailAddresses(): string | cocoascript.NSString;
    setRecipientEmailAddresses(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621667-recipientnames
    recipientNames(): string | cocoascript.NSString;
    setRecipientNames(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621674-textcontent
    textContent(): string | cocoascript.NSString;
    setTextContent(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621622-containerdisplayname
    containerDisplayName(): string | cocoascript.NSString;
    setContainerDisplayName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621594-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621586-containerorder
    containerOrder(): NSNumber;
    setContainerOrder(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621661-containertitle
    containerTitle(): string | cocoascript.NSString;
    setContainerTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/3752012-actionidentifiers
    actionIdentifiers(): string | cocoascript.NSString;
    setActionIdentifiers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621564-supportsnavigation
    supportsNavigation(): NSNumber;
    setSupportsNavigation(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/1621653-supportsphonecall
    supportsPhoneCall(): NSNumber;
    setSupportsPhoneCall(value: NSNumber): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/3752014-shareditemcontenttype
    sharedItemContentType(): UTType;
    setSharedItemContentType(value: UTType): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/2867859-providerdatatypeidentifiers
    providerDataTypeIdentifiers(): string | cocoascript.NSString;
    setProviderDataTypeIdentifiers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/2867861-providerfiletypeidentifiers
    providerFileTypeIdentifiers(): string | cocoascript.NSString;
    setProviderFileTypeIdentifiers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/2908990-providerinplacefiletypeidentifie
    providerInPlaceFileTypeIdentifiers(): string | cocoascript.NSString;
    setProviderInPlaceFileTypeIdentifiers(value: string | cocoascript.NSString): void;
    //
    alloc():CSSearchableItemAttributeSet;
    //
    init():CSSearchableItemAttributeSet;
  }
}

declare const CSSearchableItemAttributeSet: cocoascript.CSSearchableItemAttributeSet;
// https://developer.apple.com/documentation/corespotlight/csactionidentifier
declare const CSActionIdentifier: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A key associated with a custom attribute for a searchable item.
   * https://developer.apple.com/documentation/corespotlight/cscustomattributekey
   */
  interface CSCustomAttributeKey extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/cscustomattributekey/1616402-initwithkeyname
    initWithKeyName(keyName: string | cocoascript.NSString):CSCustomAttributeKey;
    // https://developer.apple.com/documentation/corespotlight/cscustomattributekey/1616410-initwithkeyname
    initWithKeyName_searchable_searchableByDefault_unique_multiValued(keyName: string | cocoascript.NSString, searchable: boolean, searchableByDefault: boolean, unique: boolean, multiValued: boolean):CSCustomAttributeKey;
    // https://developer.apple.com/documentation/corespotlight/cscustomattributekey/1616405-keyname
    keyName(): string | cocoascript.NSString;
    setKeyName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cscustomattributekey/1616400-multivalued
    multiValued(): boolean;
    setMultiValued(value: boolean): void;
    // https://developer.apple.com/documentation/corespotlight/cscustomattributekey/1616397-searchable
    searchable(): boolean;
    setSearchable(value: boolean): void;
    // https://developer.apple.com/documentation/corespotlight/cscustomattributekey/1616396-searchablebydefault
    searchableByDefault(): boolean;
    setSearchableByDefault(value: boolean): void;
    // https://developer.apple.com/documentation/corespotlight/cscustomattributekey/1616409-unique
    unique(): boolean;
    setUnique(value: boolean): void;
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
   * https://developer.apple.com/documentation/corespotlight/csperson
   */
  interface CSPerson extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/csperson/1618464-initwithdisplayname
    initWithDisplayName_handles_handleIdentifier(displayName: string | cocoascript.NSString, handles: string | cocoascript.NSString, handleIdentifier: string | cocoascript.NSString):CSPerson;
    // https://developer.apple.com/documentation/corespotlight/csperson/1618468-contactidentifier
    contactIdentifier(): string | cocoascript.NSString;
    setContactIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/csperson/1618469-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/csperson/1618466-handleidentifier
    handleIdentifier(): string | cocoascript.NSString;
    setHandleIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/csperson/1618465-handles
    handles(): string | cocoascript.NSString;
    setHandles(value: string | cocoascript.NSString): void;
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
   * https://developer.apple.com/documentation/corespotlight/cssearchableitem
   */
  interface CSSearchableItem extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/cssearchableitem/1621647-initwithuniqueidentifier
    initWithUniqueIdentifier_domainIdentifier_attributeSet(uniqueIdentifier: string | cocoascript.NSString, domainIdentifier: string | cocoascript.NSString, attributeSet: CSSearchableItemAttributeSet):CSSearchableItem;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitem/1621649-attributeset
    attributeSet(): CSSearchableItemAttributeSet;
    setAttributeSet(value: CSSearchableItemAttributeSet): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitem/1621665-domainidentifier
    domainIdentifier(): string | cocoascript.NSString;
    setDomainIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitem/1621680-expirationdate
    expirationDate(): NSDate;
    setExpirationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableitem/1621672-uniqueidentifier
    uniqueIdentifier(): string | cocoascript.NSString;
    setUniqueIdentifier(value: string | cocoascript.NSString): void;
    //
    alloc():CSSearchableItem;
    //
    init():CSSearchableItem;
  }
}

declare const CSSearchableItem: cocoascript.CSSearchableItem;
// https://developer.apple.com/documentation/corespotlight/cssearchableitemactiontype
declare const CSSearchableItemActionType: cocoascript.NSString;
// https://developer.apple.com/documentation/corespotlight/cssearchableitemactivityidentifier
declare const CSSearchableItemActivityIdentifier: cocoascript.NSString;
// https://developer.apple.com/documentation/corespotlight/csquerycontinuationactiontype
declare const CSQueryContinuationActionType: cocoascript.NSString;
// https://developer.apple.com/documentation/corespotlight/cssearchquerystring
declare const CSSearchQueryString: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * The on-device index.
   * https://developer.apple.com/documentation/corespotlight/cssearchableindex
   */
  interface CSSearchableIndex extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620350-isindexingavailable
    isIndexingAvailable():boolean;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620341-defaultsearchableindex
    defaultSearchableIndex():CSSearchableIndex;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620347-initwithname
    initWithName(name: string | cocoascript.NSString):CSSearchableIndex;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620332-initwithname
    initWithName_protectionClass(name: string | cocoascript.NSString, protectionClass: NSFileProtectionType):CSSearchableIndex;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620354-indexdelegate
    indexDelegate(): CSSearchableIndexDelegate;
    setIndexDelegate(value: CSSearchableIndexDelegate): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620342-deleteallsearchableitemswithcomp
    deleteAllSearchableItemsWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620351-deletesearchableitemswithdomaini
    deleteSearchableItemsWithDomainIdentifiers_completionHandler(domainIdentifiers: string | cocoascript.NSString, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620337-deletesearchableitemswithidentif
    deleteSearchableItemsWithIdentifiers_completionHandler(identifiers: string | cocoascript.NSString, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620333-indexsearchableitems
    indexSearchableItems_completionHandler(items: CSSearchableItem, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620331-beginindexbatch
    beginIndexBatch():void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620344-endindexbatchwithclientstate
    endIndexBatchWithClientState_completionHandler(clientState: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corespotlight/cssearchableindex/1620346-fetchlastclientstatewithcompleti
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
   * https://developer.apple.com/documentation/corespotlight/cssearchquery
   */
  interface CSSearchQuery extends NSObject {
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649308-initwithquerystring
    initWithQueryString_attributes(queryString: string | cocoascript.NSString, attributes: string | cocoascript.NSString):CSSearchQuery;
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649311-protectionclasses
    protectionClasses(): NSFileProtectionType;
    setProtectionClasses(value: NSFileProtectionType): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649296-start
    start():void;
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649309-cancel
    cancel():void;
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649294-cancelled
    cancelled(): boolean;
    setCancelled(value: boolean): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649312-completionhandler
    completionHandler(): NSError;
    setCompletionHandler(value: NSError): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649300-founditemcount
    foundItemCount(): NSUInteger;
    setFoundItemCount(value: NSUInteger): void;
    // https://developer.apple.com/documentation/corespotlight/cssearchquery/1649306-founditemshandler
    foundItemsHandler(): CSSearchableItem;
    setFoundItemsHandler(value: CSSearchableItem): void;
    //
    alloc():CSSearchQuery;
    //
    init():CSSearchQuery;
  }
}

declare const CSSearchQuery: cocoascript.CSSearchQuery;
// https://developer.apple.com/documentation/corespotlight/cssearchquerystring
declare const CSSearchQueryString: cocoascript.NSString;
// https://developer.apple.com/documentation/corespotlight/csquerycontinuationactiontype
declare const CSQueryContinuationActionType: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object displaying localized text in search results related to your app.
   * https://developer.apple.com/documentation/corespotlight/cslocalizedstring
   */
  interface CSLocalizedString extends NSString {
    // https://developer.apple.com/documentation/corespotlight/cslocalizedstring/1616403-initwithlocalizedstrings
    initWithLocalizedStrings(localizedStrings: NSDictionary):CSLocalizedString;
    // https://developer.apple.com/documentation/corespotlight/cslocalizedstring/1616401-localizedstring
    localizedString():NSString;
    //
    alloc():CSLocalizedString;
    //
    init():CSLocalizedString;
  }
}

declare const CSLocalizedString: cocoascript.CSLocalizedString;
// https://developer.apple.com/documentation/corespotlight/corespotlightversionstring
declare const CoreSpotlightVersionString: string;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corespotlight/csindexerrorcode
  type CSIndexErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corespotlight/cssearchqueryerrorcode
  type CSSearchQueryErrorCode = cocoascript.NSInteger;
}
