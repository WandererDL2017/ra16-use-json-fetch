import React from "react";
import useJsonFetch from "./useJsonFetch";

function Hook({ url }) {
  const [data, loading, error] = useJsonFetch(url);
  return (
    <li className="item">
      {data && <p>{data.status}</p>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
    </li>
  );
}

export default Hook;