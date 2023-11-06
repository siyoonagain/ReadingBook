import LoadingPage from "@/pages/loading";
import * as L from "./list.styles";
import { useState, useEffect } from "react";

export default function ListPageUI(props: any): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <L.ListWrap>
          <L.ListCount>총 {props?.data.length}개 작성했습니다.</L.ListCount>
          <L.Lists>
            {props?.data?.map((el: any) => (
              <L.ListItems key={el.id} id={el.id} onClick={props.onClickDetail}>
                <L.ListTitle>
                  <L.ListImg src={el.image} />
                </L.ListTitle>
                <L.ListTitle>{el.title}</L.ListTitle>
                <L.ListTitle>{el.createdAt}</L.ListTitle>
              </L.ListItems>
            ))}
          </L.Lists>
        </L.ListWrap>
      )}
    </>
  );
}
