import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { dynamicId: string } }) => {
  if (parseInt(params.dynamicId) > 500) {
    notFound();
  }
  return <div>The dynamic route id is : {params.dynamicId}</div>;
};

export default page;
