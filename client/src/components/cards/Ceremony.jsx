import React, { useEffect } from 'react';

const Ceremony = () => {
  const mainDiv = "relative bg-green-200 bg-opacity-50 hover:bg-opacity-75 w-10/12 inline-block text-center p-5 mb-12";
  const calendarButton = "rounded-full bg-green-400 inline-block text-base px-2.5 py-1";

  // Initialize and add the map
  let map;

  async function initMap() {

    const position = { lat: -25.280522, lng: -57.583099 };

    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 16,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    const infoWindow = new InfoWindow();

    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Vicaría Castrense de Asunción",
    });

    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  }

  useEffect(() => {
    initMap();
  }, [])

  return (
    <div className={`themeFont ${mainDiv}`}>
      <h1>Ceremony</h1>
      <div>
        <div className="flex flex-row flex-nowrap justify-evenly content-evenly">
          <img src="./assets/church.png" style={{'width': '35vw'}}/>
          <div id="map"></div>
        </div>
        <p>Where: Vicaría Castrense de Asunción</p>
        <br/>
        <p>When: 7:30 PM</p>
        <br/>
        <a href="https://calndr.link/e/mbcGiCD8mz?s=google" target="_blank">
          <button className={calendarButton}>Add to Calendar</button>
        </a>
      </div>
    </div>
  )
}

export default Ceremony;