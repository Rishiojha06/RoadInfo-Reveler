import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Swal from 'sweetalert2';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const MapPage = () => {
    useEffect(() => {
        mapboxgl.accessToken = "API_KEY";
    
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [16.372480, 48.211188],
          zoom: 15,
        });
    
        // Add the GeoJSON data as a source
        map.on("load", function () {
          map.addSource("vienna-roads", {
            type: "geojson",
            data: "./public/data/vienna-streets.geojson",
          });
    
          // Add a layer for the roads
          map.addLayer({
            id: "vienna-roads-line",
            type: "line",
            source: "vienna-roads",
            paint: {
              "line-color": "red",
              "line-width": 4,
            },
          });
    
          map.on("click", (e) => {
            console.log("click", e.point);
    
            const [selectedRoad] = map.queryRenderedFeatures(e.point, {
              layers: ["vienna-roads-line"],
            });
    
            if (selectedRoad) {
              let htmlContent = "<ul>";
    
              for (const property in selectedRoad.properties) {
                if (selectedRoad.properties.hasOwnProperty(property)) {
                  htmlContent += `<li><strong>${property}:</strong> ${selectedRoad.properties[property]}</li>`;
                }
              }
    
              htmlContent += "</ul>";
    
              Swal.fire({
                title: `Road Details are:`,
                html: htmlContent,
                confirmButtonText: 'OK',
                icon: 'success'
              });
            }
          });
    
          map.on("mouseenter", "vienna-roads-line", function () {
            map.getCanvas().style.cursor = "pointer";
          });
    
          map.on("mouseleave", "vienna-roads-line", function () {
            map.getCanvas().style.cursor = "";
          });
        });
    
        return () => map.remove();
      }, []);

  return (
    <div>
      <div id="map" style={{ height: '100vh' }}></div>
    </div>
  );
};

export default MapPage;
