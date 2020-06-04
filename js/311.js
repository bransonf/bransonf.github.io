// Draw a 311 Visualization for Boston, Using Deck.gl

const {DeckGL, HexagonLayer} = deck;

    const deckgl = new DeckGL({
      mapboxApiAccessToken: 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw',
      mapStyle: 'mapbox://styles/mapbox/dark-v9',
      initialViewState: {
        longitude: -71.0589,
        latitude: 42.3301,
        zoom: 10,
        minZoom: 5,
        maxZoom: 15,
        pitch: 20
      },
      controller: true
    });

    let data = null;


    function renderLayer () {
      const hexagonLayer = new HexagonLayer({
        id: 'heatmap',
        data,
        elevationRange: [0, 1000],
        elevationScale: 250,
        extruded: true,
        getPosition: d => d,
        radius: 500,
        coverage: 1,
        upperPercentile: 90,
      });

      deckgl.setProps({
        layers: [hexagonLayer]
      });
    }

    d3.csv('/data/boston_potholes.csv')
      .then(res => {
      data = res.map(d => [Number(d.lng), Number(d.lat)]);
      renderLayer();
    });