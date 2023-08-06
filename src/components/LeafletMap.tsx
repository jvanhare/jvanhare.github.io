import React from "react";
import dynamic from "next/dynamic";

function LeafletMap() {
  const DynamicMap = React.useMemo(
    () =>
      dynamic(() => import("./DynamicMap"), {
        ssr: false,
      }),
    []
  );
  return <DynamicMap />;
}

export default LeafletMap;
