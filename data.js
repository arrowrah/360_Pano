var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama_peets_alameda",
      "name": "Panorama_Peets_Alameda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.1280518878102406,
        "pitch": 0.06292016994945016,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9442721052514393,
          "pitch": 0.3166965318251851,
          "rotation": 6.283185307179586,
          "target": "1-peets-photo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1976182147427394,
          "pitch": -0.001692940892290551,
          "title": "Seating",
          "text": "https://s3-media2.fl.yelpcdn.com/bphoto/mWdCQhx8ZaLuVpuEJmicMg/348s.jpg"
        }
      ]
    },
    {
      "id": "1-peets-photo",
      "name": "Peet's Photo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2255871112041294,
        "pitch": 0.19074938134968278,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Peets",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
