
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CllabPage from "./pages/CllabPage"


import VestibularPage from "./pages/VestibularPage";
import PageNotFound from "./pages/PageNotFound";
import HearingaidPage from "./pages/HearingaidPage";

import VdlabPage from "./pages/VdlabPage";
import TinnitusPage from "./pages/TinnitusPage";
import PsychoacousticPage from "./pages/PsychoacousticPage";
import ResearchPage from "./pages/ResearchPage";
import ContactPage from "./pages/ContactPage";
import PeoplePage from "./pages/PeoplePage";
import AnnouncementPage from "./pages/AnnouncementPage";

import { RouteContextProvider } from "./store/RouteContextProvider";

import './App.css';
import LanguagePage from "./pages/LanguagePage";
import AcousticPage from "./pages/AcousticPage";
import DeglutitionPage from "./pages/DeglutitionPage";
import VoicePage from "./pages/VoicePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CllabPage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/Hearing-aid",
      element: <HearingaidPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/Tinnitus",
      element: <TinnitusPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/vdlab",
      element: <VdlabPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/vestibular",
      element: <VestibularPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/Psychoacoustic",
      element: <PsychoacousticPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/neurocognition",
      element: <LanguagePage/>,
      errorElement: <PageNotFound />,
    },
    {
      path: "/acoustic",
      element: <AcousticPage/>,
      errorElement: <PageNotFound />,
    },
    {
      path: "/deglutition",
      element: <DeglutitionPage/>,
      errorElement: <PageNotFound />,
    },
    {
      path: "/voice",
      element: <VoicePage/>,
      errorElement: <PageNotFound />,
    },
    
    {
      path: "/research",
      element: <ResearchPage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/contact",
      element: <ContactPage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/people",
      element: <PeoplePage />,
      errorElement: <PageNotFound />
    },
    {
      path: "/announcement",
      element: <AnnouncementPage />,
      errorElement: <PageNotFound />
    },
  ]);


  return (
    <RouteContextProvider>
      <RouterProvider router={router} />
    </RouteContextProvider>
  )
}

export default App
