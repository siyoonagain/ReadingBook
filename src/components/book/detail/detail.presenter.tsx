import LoadingPage from "@/pages/loading";
import * as D from "./detail.styles";
import { useState, useEffect } from "react";

export default function DetailUI(props: any): JSX.Element {
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
        <>
          <D.DetailWrap>
            <D.DetailT>{props?.title}</D.DetailT>
            <D.DetailSub>{props?.time}</D.DetailSub>
            <D.DImage src={`${props.image}`} isImage={props.image} />
            <D.DetailP>{props?.contents}</D.DetailP>
            <D.DetailP>{props?.sentence}</D.DetailP>
          </D.DetailWrap>
          <D.DBtnSpace>
            <D.DBtn onClick={props.onClickMoveToEdit}>수정하기</D.DBtn>
            <D.DBtn onClick={props.onClickMoveList}>목록</D.DBtn>
            <D.DBtn onClick={props.onClickRemove}>삭제하기</D.DBtn>
          </D.DBtnSpace>
        </>
      )}
    </>
  );
}
