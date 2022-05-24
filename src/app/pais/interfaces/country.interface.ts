export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag?:        string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    DOP?: Aed;
    GHS?: Aed;
    EUR?: Aed;
    KHR?: Aed;
    USD?: Aed;
    BHD?: Aed;
    ILS?: Aed;
    QAR?: Aed;
    RON?: Aed;
    MGA?: Aed;
    NPR?: Aed;
    GBP?: Aed;
    JEP?: Aed;
    UAH?: Aed;
    DKK?: Aed;
    MRU?: Aed;
    LYD?: Aed;
    TMT?: Aed;
    AOA?: Aed;
    SHP?: Aed;
    AMD?: Aed;
    THB?: Aed;
    AZN?: Aed;
    GNF?: Aed;
    KYD?: Aed;
    XCD?: Aed;
    SLL?: Aed;
    CNY?: Aed;
    GEL?: Aed;
    JPY?: Aed;
    FKP?: Aed;
    ERN?: Aed;
    AUD?: Aed;
    KID?: Aed;
    ARS?: Aed;
    PHP?: Aed;
    BND?: Aed;
    SGD?: Aed;
    XOF?: Aed;
    XAF?: Aed;
    KGS?: Aed;
    NAD?: Aed;
    ZAR?: Aed;
    KES?: Aed;
    GIP?: Aed;
    KZT?: Aed;
    KRW?: Aed;
    PKR?: Aed;
    SOS?: Aed;
    ZMW?: Aed;
    MWK?: Aed;
    SSP?: Aed;
    MAD?: Aed;
    TVD?: Aed;
    NGN?: Aed;
    ETB?: Aed;
    CAD?: Aed;
    CVE?: Aed;
    DZD?: Aed;
    PEN?: Aed;
    PLN?: Aed;
    VUV?: Aed;
    BGN?: Aed;
    IMP?: Aed;
    TZS?: Aed;
    NOK?: Aed;
    GGP?: Aed;
    UZS?: Aed;
    FJD?: Aed;
    BYN?: Aed;
    GTQ?: Aed;
    UYU?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    TWD?: Aed;
    LSL?: Aed;
    VES?: Aed;
    LKR?: Aed;
    LRD?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    KMF?: Aed;
    KWD?: Aed;
    BMD?: Aed;
    EGP?: Aed;
    JOD?: Aed;
    PGK?: Aed;
    SZL?: Aed;
    VND?: Aed;
    MNT?: Aed;
    YER?: Aed;
    MOP?: Aed;
    BSD?: Aed;
    SAR?: Aed;
    LAK?: Aed;
    MMK?: Aed;
    HRK?: Aed;
    MKD?: Aed;
    RSD?: Aed;
    SBD?: Aed;
    LBP?: Aed;
    IRR?: Aed;
    BAM?: BAM;
    HNL?: Aed;
    TJS?: Aed;
    CRC?: Aed;
    MDL?: Aed;
    CHF?: Aed;
    CZK?: Aed;
    BRL?: Aed;
    BWP?: Aed;
    BIF?: Aed;
    GYD?: Aed;
    SYP?: Aed;
    XPF?: Aed;
    HUF?: Aed;
    WST?: Aed;
    TND?: Aed;
    JMD?: Aed;
    KPW?: Aed;
    COP?: Aed;
    OMR?: Aed;
    MZN?: Aed;
    BOB?: Aed;
    UGX?: Aed;
    HTG?: Aed;
    STN?: Aed;
    INR?: Aed;
    PYG?: Aed;
    ANG?: Aed;
    SDG?: BAM;
    ISK?: Aed;
    DJF?: Aed;
    AED?: Aed;
    IQD?: Aed;
    ZWL?: Aed;
    MXN?: Aed;
    MUR?: Aed;
    RUB?: Aed;
    TOP?: Aed;
    SRD?: Aed;
    PAB?: Aed;
    RWF?: Aed;
    TTD?: Aed;
    MYR?: Aed;
    SEK?: Aed;
    ALL?: Aed;
    IDR?: Aed;
    BDT?: Aed;
    BBD?: Aed;
    MVR?: Aed;
    CDF?: Aed;
    AWG?: Aed;
    GMD?: Aed;
    HKD?: Aed;
    BTN?: Aed;
    NIO?: Aed;
    CLP?: Aed;
    AFN?: Aed;
    FOK?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
