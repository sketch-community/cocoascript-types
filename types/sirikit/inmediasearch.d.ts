declare namespace cocoascript {
  /**
   * An object that describes a media type to search for, such as a station name, song name, or album name.
   * doc://com.apple.documentation/documentation/sirikit/inmediasearch
   */
  interface INMediaSearch extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3362535-initwithmediatype
    initWithMediaType_sortOrder_mediaName_artistName_albumName_genreNames_moodNames_releaseDate_reference_mediaIdentifier(mediaType: cocoascript.INMediaItemType, sortOrder: cocoascript.INMediaSortOrder, mediaName: cocoascript.NSString, artistName: cocoascript.NSString, albumName: cocoascript.NSString, genreNames: cocoascript.NSString, moodNames: cocoascript.NSString, releaseDate: cocoascript.INDateComponentsRange, reference: cocoascript.INMediaReference, mediaIdentifier: cocoascript.NSString):cocoascript.INMediaSearch;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074247-genrenames
    genreNames(): cocoascript.NSString;
    setGenreNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074249-mediaidentifier
    mediaIdentifier(): cocoascript.NSString;
    setMediaIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074250-medianame
    mediaName(): cocoascript.NSString;
    setMediaName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074251-mediatype
    mediaType(): cocoascript.INMediaItemType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074252-moodnames
    moodNames(): cocoascript.NSString;
    setMoodNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074255-reference
    reference(): cocoascript.INMediaReference;
    setReference(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074256-releasedate
    releaseDate(): cocoascript.INDateComponentsRange;
    setReleaseDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074258-sortorder
    sortOrder(): cocoascript.INMediaSortOrder;
    setSortOrder(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074243-activitynames
    activityNames(): cocoascript.NSString;
    setActivityNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074244-albumname
    albumName(): cocoascript.NSString;
    setAlbumName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074245-artistname
    artistName(): cocoascript.NSString;
    setArtistName(): void;
    //
    alloc():cocoascript.INMediaSearch;
    //
    init():cocoascript.INMediaSearch;
  }
}

declare const INMediaSearch: cocoascript.INMediaSearch;
