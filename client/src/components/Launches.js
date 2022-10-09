import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LanchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      {loading && <h4>Loading...</h4>}
      {error && <h4>Error: {error.message}</h4>}
      {data && data.launches && data.launches.length > 0 && (
        <>
          <MissionKey />
          {data.launches.map((launch) => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))}
        </>
      )}
    </>
  );
}

export default Launches;
