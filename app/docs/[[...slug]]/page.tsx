import React from "react";

const CathAll = ({ params }: { params: { slug: string[] } }) => {
  const getData = (arrData: string[]) => {
    return arrData.map((data, index) => (
      <h1>
        param : {index + 1} | data: {data}
      </h1>
    ));
  };
  return (
    <div>
      {params.slug?.length > 3 ? (
        <>
          <h1>This is slug page with url length is greater than 3 where</h1>
          {getData(params?.slug)}
        </>
      ) : params.slug?.length === 3 ? (
        <>
          <h1>This is slug page with url length 3 where</h1>
          {getData(params?.slug)}
        </>
      ) : params.slug?.length === 2 ? (
        <>
          <h1>This is slug page with url length 2 where</h1>
          {getData(params?.slug)}
        </>
      ) : params.slug?.length === 1 ? (
        <>
          <h1>This is slug page with url length 1 where</h1>
          {getData(params?.slug)}
        </>
      ) : (
        <h1>
          This is Docs page, enter something in URL to proceed [...slug] /
          catch-all
        </h1>
      )}
    </div>
  );
};

export default CathAll;
