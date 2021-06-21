import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  // const location = useLocation();
  // console.log(location);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは{id}です</p>
      <p>クエリパラメータは {query.get("name")}です</p>
    </div>
  );
};
