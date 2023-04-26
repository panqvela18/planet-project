import Header from "./components/Header";
import PlanetPage from "./components/PlanetPage";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  redirect,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import PlanetInfo from "./components/PlanetInfo";
import { data } from "./data";
import { useEffect } from "react";
import NotFount from "./components/NotFount";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<Navigate to={"/mercury/overview"} />} />
      <Route
        path="planet-project"
        element={<Navigate to={"/mercury/overview"} />}
      />
      <Route path="neptune" element={<Navigate to={"/neptune/overview"} />} />
      <Route path="venus" element={<Navigate to={"/venus/overview"} />} />
      <Route path="earth" element={<Navigate to={"/earth/overview"} />} />
      <Route path="mars" element={<Navigate to={"/mars/overview"} />} />
      <Route path="jupiter" element={<Navigate to={"/jupiter/overview"} />} />
      <Route path="saturn" element={<Navigate to={"/saturn/overview"} />} />
      <Route path="uranus" element={<Navigate to={"/uranus/overview"} />} />
      <Route path="neptune" element={<Navigate to={"/neptune/overview"} />} />
      <Route
        path="mercury"
        element={<PlanetPage color="#418EBB" data={data[0]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[0].images.planet}
              details={data[0].overview}
              data={data[0]}
              color="#418EBB"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[0].images.internal}
              details={data[0].structure}
              data={data[0]}
              color="#418EBB"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[0].images.planet}
              extraImage={data[0].images.geology}
              details={data[0].geology}
              data={data[0]}
              color="#418EBB"
            />
          }
        />
      </Route>
      <Route
        path={"Venus"}
        element={<PlanetPage color="#EDA249" data={data[1]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[1].images.planet}
              details={data[1].overview}
              data={data[1]}
              color="#EDA249"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[1].images.internal}
              details={data[1].structure}
              data={data[1]}
              color="#EDA249"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[1].images.planet}
              extraImage={data[1].images.geology}
              details={data[1].geology}
              data={data[1]}
              color="#EDA249"
            />
          }
        />
      </Route>

      <Route
        path={"/Earth"}
        element={<PlanetPage color="#6D2ED5" data={data[2]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[2].images.planet}
              details={data[2].overview}
              data={data[2]}
              color="#6D2ED5"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[2].images.internal}
              details={data[2].structure}
              data={data[2]}
              color="#6D2ED5"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[2].images.planet}
              extraImage={data[2].images.geology}
              details={data[2].geology}
              data={data[2]}
              color="#6D2ED5"
            />
          }
        />
      </Route>
      <Route
        path={"/Mars"}
        element={<PlanetPage color="#D14C32" data={data[3]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[3].images.planet}
              details={data[3].overview}
              data={data[3]}
              color="#D14C32"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[3].images.internal}
              details={data[3].structure}
              data={data[3]}
              color="#D14C32"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[3].images.planet}
              extraImage={data[3].images.geology}
              details={data[3].geology}
              data={data[3]}
              color="#D14C32"
            />
          }
        />
      </Route>
      <Route
        path={"/Jupiter"}
        element={<PlanetPage color="#D83A34" data={data[4]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[4].images.planet}
              details={data[4].overview}
              data={data[4]}
              color="#D83A34"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[4].images.internal}
              details={data[4].structure}
              data={data[4]}
              color="#D83A34"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[4].images.planet}
              extraImage={data[4].images.geology}
              details={data[4].geology}
              data={data[4]}
              color="#D83A34"
            />
          }
        />
      </Route>
      <Route
        path={"/Saturn"}
        element={<PlanetPage color="#CD5120" data={data[5]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[5].images.planet}
              details={data[5].overview}
              data={data[5]}
              color="#CD5120"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[5].images.internal}
              details={data[5].structure}
              data={data[5]}
              color="#CD5120"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[5].images.planet}
              extraImage={data[5].images.geology}
              details={data[5].geology}
              data={data[5]}
              color="#CD5120"
            />
          }
        />
      </Route>
      <Route
        path={"/Uranus"}
        element={<PlanetPage color="#1EC1A2" data={data[6]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[6].images.planet}
              details={data[6].overview}
              data={data[6]}
              color="#1EC1A2"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[6].images.internal}
              details={data[6].structure}
              data={data[6]}
              color="#1EC1A2"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[6].images.planet}
              extraImage={data[6].images.geology}
              details={data[6].geology}
              data={data[6]}
              color="#1EC1A2"
            />
          }
        />
      </Route>
      <Route
        path={"/Neptune"}
        element={<PlanetPage color="#2D68F0" data={data[7]} />}
      >
        <Route
          path="overview"
          element={
            <PlanetInfo
              image={data[7].images.planet}
              details={data[7].overview}
              data={data[7]}
              color="#2D68F0"
            />
          }
        />
        <Route
          path="structure"
          element={
            <PlanetInfo
              image={data[7].images.internal}
              details={data[7].structure}
              data={data[7]}
              color="#2D68F0"
            />
          }
        />
        <Route
          path="surface"
          element={
            <PlanetInfo
              image={data[7].images.planet}
              extraImage={data[7].images.geology}
              details={data[7].geology}
              data={data[7]}
              color="#2D68F0"
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFount />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
