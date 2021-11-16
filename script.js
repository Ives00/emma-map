let map; 

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.90203869987111, lng: -80.18685079459867 },
    zoom: 17, 
    styles: 
    [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#686868"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#120909"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#c43838"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#cecece"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#df830f"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-22"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "11"
            },
            {
                "lightness": "-51"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "3"
            },
            {
                "lightness": "-56"
            },
            {
                "weight": "2.20"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-52"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "6.13"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "lightness": "-10"
            },
            {
                "gamma": "0.94"
            },
            {
                "weight": "1.24"
            },
            {
                "saturation": "-100"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "-16"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "-41"
            },
            {
                "lightness": "-41"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "5.46"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "0.72"
            },
            {
                "lightness": "-16"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-37"
            },
            {
                "color": "#201409"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ef1b1b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b7e4f4"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
  });  
const westhall = new google.maps.Marker({
    position: { lat: 39.90055455879919, lng: -80.18640635436637 },
    map,
    title: "West Hall",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon28.png",
  }); 
  const infowindow = new google.maps.InfoWindow({
    content: "This is West Hall, one of four girls upperclassmen halls.",
  });
 
  westhall.addListener("click", () => {
    infowindow.open({
      anchor: westhall,
      map,
      shouldFocus: false,
    });
  });

const WesthallCoords = [
    { lat: 39.90055455879919, lng: -80.18640635436637},
    { lat: 39.90055198669842, lng: -80.1862192702881 },
    { lat: 39.900233045452175,lng: -80.18622731691512 },
    { lat: 39.90023253102962, lng: -80.1864157420979 },
    { lat: 39.90055455879919, lng: -80.18640635436637},
  ];
    // Construct the polygon.
  const Westhallpolygon = new google.maps.Polygon({
    paths: WesthallCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

 Westhallpolygon.setMap(map);

const bulhhall = new google.maps.Marker({
    position: { lat: 39.89950878796206,  lng: -80.18562837849694}, 
    map,
    title: "Buhl Hall",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon14.png",
  });
  const Infowindow = new google.maps.InfoWindow({
    content: "This is Buhl which hosues our Communications, English and other acidmeic departments.",
  });
 
  bulhhall.addListener("click", () => {
    infowindow.open({
      anchor: bulhhall,
      map,
      shouldFocus: false,
    });
  });

const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

// Construct the polygon.
  const Buhlhallpolygon = new google.maps.Polygon({
    paths: BuhlhallCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

 Buhlhallpolygon.setMap(map);

const GPacCoords = new google.maps.Marker({
    position: { lat: 39.90003, lng: -80.18801}, 
    map,
    title: "GPAC",
    icon: "https://maps.google.com/mapfiles/kml/shapes/arts.png", 
});
const iNfowindow = new google.maps.InfoWindow({
    content: "This is the GPAC, this is out peforming arts building",
  });
 
  gpac.addListener("click", () => {
    infowindow.open({
      anchor: gpac,
      map,
      shouldFocus: false,
    });

const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801}, ];

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    GpacPolygon.setMap(map);

const ThayerCoords   = new google.maps.Marker({
    position: { lat: 39.89980, lng: -80.18429}, 
    map,
    title: "Thayer Hall ",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon28.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This Thayer, one of two underclassmen boys dorms",
  });
 
  Thayer.addListener("click", () => {
    infowindow.open({
      anchor: Thayer,
      map,
      shouldFocus: false,
    });
const thayerCoords = [
    { lat: 39.89979405526052, lng: -80.1842868141645},
    { lat: 39.89979199755706, lng: -80.18416343255097},
    { lat: 39.899475110486584, lng: -80.18416075034197},
    { lat: 39.89946687963406, lng: -80.18415002150603},
    { lat: 39.89940103277827, lng: -80.18415002150603},
    { lat: 39.89939485963229, lng: -80.18409637732624},
    { lat: 39.899226126760325, lng: -80.18409369511726},
    { lat: 39.899226126760325, lng: -80.18429754300045},
    { lat: 39.89979405526052, lng: -80.1842868141645}, ];


    const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        ThayerPolygon.setMap(map);

const Pollock   = new google.maps.Marker({
    position:  { lat: 39.89932966350404, lng: -80.18516459443458 }, 
    map,
    title: "Pollock Hall ",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon28.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This Pollock, one of four girl unpperclassmen girls dorms",
  });
 
  Pollock.addListener("click", () => {
    infowindow.open({
      anchor: Pollock,
      map,
      shouldFocus: false,
    });
const PollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458},
  ];

const PollockPolygon = new google.maps.Polygon({
        paths: PollockCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        PollockPolygon.setMap(map);

const Stewart  = new google.maps.Marker({
    position: { lat: 39.89820313942542, lng: -80.18674222997413 }, 
    map,
    title: "Stewart Hall ",
    icon: "https://maps.google.com/mapfiles/kml/pal4/icon10.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This Stewart, out scinence building",
  });
 
  Stewart.addListener("click", () => {
    infowindow.open({
      anchor: Stewart,
      map,
      shouldFocus: false,
    });
  const StewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  // Construct the polygon.
  const Stewartpolygon = new google.maps.Polygon({
    paths: StewartCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  Stewartpolygon.setMap(map);

const South  = new google.maps.Marker({
    position:{ lat: 39.90036605487646, lng: -80.18613153937626 }, 
    map,
    title: "South Hall ",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon28.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This South,one of four girl upperclassmen dorms",
  });
 
  South.addListener("click", () => {
    infowindow.open({
      anchor: south,
      map,
      shouldFocus: false,
    });
const SouthCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const Southpolygon = new google.maps.Polygon({
    paths: SouthCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: .35,
  });

  Southpolygon.setMap(map);

const East  = new google.maps.Marker({
    position: { lat: 39.90053762015809, lng: -80.18560529398341 }, 
    map,
    title: "East Hall ",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon28.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This East,one of four girl upperclassmen dorms",
  });
 
  East.addListener("click", () => {
    infowindow.open({
      anchor: East,
      map,
      shouldFocus: false,
    });
const EastCoords = [
    { lat: 39.90053762015809, lng: -80.18560529398341 },
    { lat: 39.90053762015809, lng: -80.18542619172558 },
    { lat: 39.90022538413387, lng: -80.18542096905911 },
    { lat: 39.90022435528863, lng: -80.18560604147535 },
    { lat: 39.90053762015809, lng: -80.18560529398341 },
  ];

  //Construct the polygon.
  const Eastpolygon = new google.maps.Polygon({
    paths: EastCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  Eastpolygon.setMap(map);

const Willy  = new google.maps.Marker({
    position: { lat: 39.897538998708136, lng: -80.18620531789718 }, 
    map,
    title: "Willison Hall ",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon28.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This Willy , boys upperclassmen dorms",
  });
 
  Willy.addListener("click", () => {
    infowindow.open({
      anchor: Willy,
      map,
      shouldFocus: false,
    });

const WillisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  ];

// Construct the polygon.
  const Willisonpolygon = new google.maps.Polygon({
    paths: WillisonCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  Willisonpolygon.setMap(map);

const Eberly  = new google.maps.Marker({
    position: { lat: 39.90005305490059, lng: -80.18549297214429 }, 
    map,
    title: "Eberly  ",
    icon: "https://maps.google.com/mapfiles/kml/pal4/icon0.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This Eberly our libbery on campus",
  });
 
  Eberly.addListener("click", () => {
    infowindow.open({
      anchor: Eberly,
      map,
      shouldFocus: false,
    });
const EberlyCoords = [
{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

// Construct the polygon.
const EberlyPolygon = new google.maps.Polygon({
    paths: EberlyCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  EberlyPolygon.setMap(map);

// Construct the polygon.
const feildhouse = new google.maps.Marker({
    position: { lat: 39.89822129557472, lng: -80.18785727074538 }, 
    map,
    title: "feildhouse ",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon57.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This is the feildhouse where basketball games, wrestling and other indoor sports are played. ",
  });
 
  feildhouse.addListener("click", () => {
    infowindow.open({
      anchor: feildhouse,
      map,
      shouldFocus: false,
    });
const FieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    ];

const FieldhousePolygon = new google.maps.Polygon({
    paths: FieldhouseCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  FieldhousePolygon.setMap(map);

const Hanna = new google.maps.Marker({
    position: { lat: 39.899575902129406, lng: -80.18715171790629 }, 
    map,
    title: "Hanna Hall ",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon14.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This is Hanna Hall were the busines department is housed. ",
  });
 
  Hanna.addListener("click", () => {
    infowindow.open({
      anchor: Hanna,
      map,
      shouldFocus: false,
    });

  const HannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 },
  ];

const HannaPolygon = new google.maps.Polygon({
    paths: HannaCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

    HannaPolygon.setMap(map);


const Cred = new google.maps.Marker({
    position: { lat: 39.8982096052761,   lng: -80.18639503044174 }, 
    map,
    title: "CRED",
    icon: "https://maps.google.com/mapfiles/kml/pal3/icon56.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This is CRED, this build is where labs are held for more advacne scinece classes.. ",
  });
 
  Cred.addListener("click", () => {
    infowindow.open({
      anchor: Cred,
      map,
      shouldFocus: false,
    });
const CREDCoords = [
    { lat: 39.8982096052761,   lng: -80.18639503044174 },
    { lat: 39.89819931652029,  lng:  -80.18609730524389 },
    { lat: 39.898026465191684, lng:  -80.18611608070681 },
    { lat: 39.89803881172963,  lng:   -80.18639771265073 },
    { lat: 39.8982096052761,   lng: -80.18639503044174 },
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  CREDPolygon.setMap(map);

const Cafe = new google.maps.Marker({
    position: {lat: 39.900203456792106, lng: -80.18817887398245}, 
    map,
    title: "Cafe",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon40.png"
  });
const infowindow = new google.maps.InfoWindow({
    content: "This is the cafe. Now one of three places on campus to eat at. ",
  });
 
  Cafe.addListener("click", () => {
    infowindow.open({
      anchor: cafe,
      map,
      shouldFocus: false,
    });
const CafCoords = [
  {lat: 39.900203456792106, lng: -80.18817887398245},
  {lat: 39.900590052054156, lng: -80.18815381174599},
  {lat: 39.900671765515945, lng: -80.18796763513225},
  {lat: 39.900573572016434, lng: -80.18770358656951},
  {lat: 39.90018903667797, lng: -80.18772506848647},
  ];

const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  CafPolygon.setMap(map);

const TheNest = new google.maps.Marker({
    position:{lat: 39.8982031743014, lng: -80.18528256249408}, 
    map,
    title: "The Next",
    icon: "https://maps.google.com/mapfiles/kml/pal3/icon26.png"
  });
});
  const INfowindow = new google.maps.InfoWindow({
    content: "This is the nest it is the new book store.",
  });
 
  theNest.addListener("click", () => {
    infowindow.open({
      anchor: theNest,
      map,
      shouldFocus: false,
    });
  }); 

const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211},
	{lat: 39.8982031743014, lng: -80.18528256249408},
  ];

const TheNestPolygon = new google.maps.Polygon({
    paths: TheNest,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  TheNestPolygon.setMap(map);

const CjHouse = new google.maps.Marker({
    position: {lat: 39.900381516505455, lng: -80.18875312061515 }, 
    map,
    title: "CJ house",
    icon: "https://maps.google.com/mapfiles/kml/shapes/police.png"
  });
});
  const inFowindow = new google.maps.InfoWindow({
    content: "This is the CJ house where CJ practies all of their training.",
  });
 
  CjHouse.addListener("click", () => {
    infowindow.open({
      anchor: CjHouse,
      map,
      shouldFocus: false,
    });
  });

  const CjHouseCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];

    const CjHousePolygon = new google.maps.Polygon({
        paths: CjHouseCoords,
        strokeColor: "#545454",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#2F4070",
        fillOpacity: 0.35,
    });
    CjHousePolygon.setMap(map);

const Chapel = new google.maps.Marker({
    position: { lat: 39.90094412190922, lng: -80.18730816171713 }, 
    map,
    title: "Robbers Chapel",
    icon: "https://maps.google.com/mapfiles/kml/pal2/icon11.png"
  });
});
  const INFowindow = new google.maps.InfoWindow({
    content: "This is the Chapel where church is help at 11 am on tuesdays .",
  });
 
  Chapel.addListener("click", () => {
    infowindow.open({
      anchor: Chapel,
      map,
      shouldFocus: false,
    });
  });
const ChapelCoords = [
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    { lat: 39.900937434485016, lng:-80.18702518866414  },
    { lat:39.90050687827982 , lng:-80.18703994081373  },
    { lat: 39.90051099364375, lng: -80.18732090220995 },
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    ];
const ChapelHousepolygon = new google.maps.Polygon({
        paths: ChapelCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    ChapelHousepolygon.setMap(map);

const Wiley = new google.maps.Marker({
    position: { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    map,
    title: "Wiley feild",
    icon: "https://maps.google.com/mapfiles/kml/pal5/icon14.pngg"
  });
});
  const infOwindow = new google.maps.InfoWindow({
    content: "This is Wiley where we play football,soccer and other field sports.",
  });
 
  Wiley.addListener("click", () => {
    infowindow.open({
      anchor: Wiley,
      map,
      shouldFocus: false,
    });
  });
const WILEYCoords = [
    { lat: 39.893254519482745, lng: -80.18153607900841 }, 
    { lat: 39.893179400851224, lng: -80.181416094374 }, 
    { lat: 39.89309323526072, lng: -80.18151016232737 },  
    { lat: 39.89316909044439, lng: -80.18162822720764 },
    { lat: 39.893253783025976, lng: -80.18153770943769 }, 
  ];
  // Construct the polygon.
  const Wilypolygon = new google.maps.Polygon({
    paths: WILEYCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

    Wilypolygon.setMap(map);

const Stover = new google.maps.Marker({
    position: {lat: 39.899772227541916, lng: -80.18636360069222}, 
    map,
    title: "Stover Center",
    icon: "https://maps.google.com/mapfiles/kml/pal3/icon21.png"
  });
});
  const INFOwindow = new google.maps.InfoWindow({
    content: "This is Stover our student center which is open 24/7.",
  });
 
  Stover.addListener("click", () => {
    infowindow.open({
      anchor: Stover,
      map,
      shouldFocus: false,
    });
  });
const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222},
];
 
 // Construct the polygon.
  const Stoverpolygon = new google.maps.Polygon({
    paths: StoverCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

    Stoverpolygon.setMap(map);

})
