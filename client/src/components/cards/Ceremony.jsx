import React, { useEffect } from 'react';
import loadJs from 'load-js';

const Ceremony = ({ cardDiv, buttons }) => {
  const locationURL = "https://www.google.com/maps?ll=-25.279004,-57.58289&z=16&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=17998339525865837309"

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
    loadJs(`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=maps`)
      .then(() => {
        initMap();
      })
      .catch((error) => {
        console.error('Failed to load Google Maps API:', error);
      });
  }, []);

  return (
    <div className={`themeFont ${cardDiv}`}>
      <h1>Ceremony</h1>
      <div>
        <div className="h-full w-full flex flex-row max-md:flex-col flex-nowrap max-md:flex-wrap justify-evenly content-evenly">
          <div><img src="./assets/churchicon.svg" className="w-[35vw] max-md:w-[33vw]"/></div>
          <br/>
          <div id="map"></div>
        </div>
        <br/>
        <p>Where: Vicaría Castrense de Asunción</p>
        <a href={locationURL} target="_blank">
          <button className={buttons}>Location</button>
        </a>
        <br/>
        <br/>
        <p>When: 7:30 PM to 8:00 PM</p>
        <a href="https://calndr.link/e/mbcGiCD8mz?s=google" target="_blank">
          <button className={buttons}>Add to Calendar</button>
        </a>
      </div>
    </div>
  )
}

export default Ceremony;