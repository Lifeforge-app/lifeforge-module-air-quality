export type EndpointGetStations_OutputOK = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  aqi: number | null;
  time: string;
}[];

export interface Contract {
  getStations: EndpointGetStations;
  getStationDetail: EndpointGetStationDetail;
  image: EndpointImage;
  selection: {
    get: EndpointSelectionGet;
    set: EndpointSelectionSet;
  };
}
export interface EndpointGetStations {
  method: "get";
  input: {
    query?: EndpointGetStations_InputQuery;
  };
  output: {
    OK: EndpointGetStations_OutputOK;
  };
  media: null;
}
export interface EndpointGetStations_InputQuery {
  south: string;
  west: string;
  north: string;
  east: string;
}
export interface EndpointGetStationDetail {
  method: "get";
  input: {
    query?: EndpointGetStationDetail_InputQuery;
  };
  output: {
    OK: EndpointGetStationDetail_OutputOK;
  };
  media: null;
}
export interface EndpointGetStationDetail_InputQuery {
  idx: string;
}
export interface EndpointGetStationDetail_OutputOK {
  idx: string;
  start: number;
  step: number;
  current: {
    key: string;
    value: number;
  }[];
  series: {
    key: string;
    values: (number | null)[];
  }[];
}
export interface EndpointImage {
  method: "get";
  input: {
    query?: EndpointImage_InputQuery;
  };
  output: any;
  media: null;
}
export interface EndpointImage_InputQuery {
  idx: string;
  t?: string;
}
export interface EndpointSelectionGet {
  method: "get";
  input: {};
  output: {
    OK: EndpointSelectionGet_OutputOK;
  };
  media: null;
}
export interface EndpointSelectionGet_OutputOK {
  station: {
    id: string;
    station_id: string;
    name: string;
    lat: number;
    lng: number;
    created: string;
    updated: string;
  } | null;
}
export interface EndpointSelectionSet {
  method: "post";
  input: {
    body?: EndpointSelectionSet_InputBody;
  };
  output: {
    OK: EndpointSelectionSet_OutputOK;
  };
  media: null;
}
export interface EndpointSelectionSet_InputBody {
  stationId: string;
  name: string;
  lat: number;
  lng: number;
}
export interface EndpointSelectionSet_OutputOK {
  id: string;
  station_id: string;
  name: string;
  lat: number;
  lng: number;
  created: string;
  updated: string;
}
