import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { Camera, DevicePosition, Geolocation, OfflineNotes } from "./templates";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<OfflineNotes />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/device-position" element={<DevicePosition />} />
      <Route path="/geolocation" element={<Geolocation />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

reportWebVitals();
