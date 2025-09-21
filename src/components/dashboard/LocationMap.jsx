import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import mapData from '../../data/world-map.json';
import { locationMarkers } from '../../data/demoData';
import { useTheme } from '../../hooks/useTheme';

const LocationMap = () => {
  const [tooltipContent, setTooltipContent] = useState('');
  // Calculate the maximum revenue from the data and round it up to the nearest 10,000
  const maxRevenue = Math.ceil(Math.max(...locationMarkers.map(loc => loc.revenue)) / 10000) * 10000;
  const { theme } = useTheme();
// Define the map's color based on the current theme
  const mapFillColor = theme === 'dark' ? '#374151' : 'var(--bg-main)';
  const mapStrokeColor = theme === 'dark' ? '#4B5563' : 'var(--border-color)';
  const markerFillColor = theme === 'dark' ? '#F9FAFB' : '#111827';
  const markerTextColor = theme === 'dark' ? 'var(--text-primary)' : 'var(--text-primary)';


  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-5">
      <h4 className="text-lg font-semibold mb-4">Revenue by Location</h4>
    
    {/* Container for the map, with a fixed height and tooltip connection */}
      <div data-tooltip-id="map-tooltip" className="w-full h-24">
        <ComposableMap projectionConfig={{ scale: 160 }}>
          <ZoomableGroup center={[0, 0]} zoom={1}>
            <Geographies geography={mapData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} onMouseEnter={() => { setTooltipContent(`${geo.properties.name}`); }} onMouseLeave={() => { setTooltipContent(''); }}
                    style={{
                      default: { fill: mapFillColor, stroke: mapStrokeColor, strokeWidth: 0.5, outline: 'none' },
                      hover: { fill: 'var(--accent-color)', outline: 'none' },
                      pressed: { fill: 'var(--accent-color)', outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
             {/* Loop through our data to render a <Marker> for each location */}
            {locationMarkers.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates}>
                <g transform="translate(-12, -12)"> 
                  <circle cx="12" cy="10" r="3" fill={markerFillColor} />
                  <text textAnchor="middle" y={-5} style={{ fontFamily: "system-ui", fill: markerTextColor, fontSize: "10px", fontWeight: "500" }}>{name}</text>
                </g>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
       {/* The tooltip component that displays the 'tooltipContent' */}
      <ReactTooltip id="map-tooltip" content={tooltipContent} />
      {/* Container for the list of locations and their progress bars */}
      <div className="space-y-4 mt-20 mb-5">
         {/* Loop through the data to create a list item for each location */}
        {locationMarkers.map((location) => (
          <div key={location.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-muted">{location.name}</span>
              <span className="text-sm font-medium text-foreground">
                ${(location.revenue / 1000).toFixed(0)}K
              </span>
            </div>
            {/* The background of the progress bar */}
            <div className="w-full bg-[var(--bg-main)] rounded-full h-1.5">
              <div className="bg-accent h-1.5 rounded-full" style={{ width: `${(location.revenue / maxRevenue) * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationMap;