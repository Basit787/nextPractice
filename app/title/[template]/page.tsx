import { Metadata } from "next";
import React from "react";

export const generateMetadata = ({
  params,
}: {
  params: { template: string };
}): Metadata => {
  return {
    title: `${params.template}`,
  };
};

const page = ({ params }: { params: { template: string } }) => {
  return <div>You add {params.template} in title</div>;
};

export default page;
