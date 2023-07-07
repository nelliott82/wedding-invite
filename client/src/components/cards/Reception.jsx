import React, { useEffect } from 'react';

const Reception = ({ cardDiv }) => {
  const buttons = "rounded-full bg-green-400 inline-block text-base px-2.5 py-1";
  const locationURL = "https://www.google.com/maps/place/La+Misi%C3%B3n+Hotel+Boutique/@-25.2953879,-57.5820629,15z/data=!4m20!1m10!3m9!1s0x945da89a2255a9b7:0x2f3b74e1bdf4e746!2sLa+Misi%C3%B3n+Hotel+Boutique!5m2!4m1!1i2!8m2!3d-25.2953879!4d-57.5820629!16s%2Fg%2F1tmkm1t1!3m8!1s0x945da89a2255a9b7:0x2f3b74e1bdf4e746!5m2!4m1!1i2!8m2!3d-25.2953879!4d-57.5820629!16s%2Fg%2F1tmkm1t1?entry=ttu"

  let map;

  async function initMap() {

    const position = { lat: -25.2953879, lng: -57.5820629 };

    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map2"), {
      zoom: 16,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    const infoWindow = new InfoWindow();

    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Hotel La Misión",
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
    <div className={`themeFont ${cardDiv}`}>
      <h1>Reception</h1>
      <div>
        <div className="h-full w-full flex flex-row max-md:flex-col flex-nowrap max-md:flex-wrap justify-evenly content-evenly">
          <img src="./assets/reception.png" className="w-[35vw] max-md:w-[33vw]"/>
          <div id="map2"></div>
        </div>
        <br/>
        <p>Where: Hotel La Misión</p>
        <a href={locationURL} target="_blank">
          <button className={buttons}>Location</button>
        </a>
        <br/>
        <br/>
        <p>When: 8:30 PM to 12:00 AM</p>
        <a href="https://calndr.link/e/mbcGiCD8mz?s=google" target="_blank">
          <button className={buttons}>Add to Calendar</button>
        </a>
      </div>
    </div>
  )
}

export default Reception;