import React from "react";

const page = ({
  params,
}: {
  params: {
    dynamicId: string;
    subId: string;
  };
}) => {
  return (
    <div>
      This is the nested dynamic route where
      <h1>This is the first route :{params.dynamicId}</h1>
      <h1>This is the second route :{params.subId}</h1>
    </div>
  );
};

export default page;
