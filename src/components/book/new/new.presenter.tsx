import { INewProps } from "./new.types";
import * as N from "./newStyle";
import LoadingPage from "@/pages/loading";
import { useEffect, useState } from "react";

export default function NewPageUI(props: INewProps) {
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
        <N.NewTableWrap>
          <N.NewTable>
            <N.NewTableList>
              <N.NewTitle style={{ fontSize: "32px" }}>
                메모{props.isEdit ? " 수정하기" : " 기록하기"}
              </N.NewTitle>
            </N.NewTableList>
            <N.NewTableList>
              <N.NewTitle>제목</N.NewTitle>
              <N.NewInput
                type="text"
                onChange={props?.onChangeTitle}
                defaultValue={props.data?.title}
              />
            </N.NewTableList>
            <N.NewTableList>
              <N.NewTitle>내용</N.NewTitle>
              <N.NewContent
                onChange={props?.onChangeContents}
                defaultValue={props.data?.contents}
              />
            </N.NewTableList>
            <N.NewTableList>
              <N.NewTitle>마음에 드는 구절</N.NewTitle>
              <N.NewInput
                type="text"
                onChange={props?.onChangeSentence}
                defaultValue={props.data?.sentence}
              />
            </N.NewTableList>
            <N.NewTableList>
              <N.NewTitle>책표지 사진 첨부</N.NewTitle>
              <N.NewImageSpace>
                <N.NewImage
                  src={props.isEdit ? `${props?.data.image}` : `${props.image}`}
                  isUpload={props?.image}
                />
              </N.NewImageSpace>
              <N.NewInput
                id="image"
                accept="image/*"
                type="file"
                multiple={true}
                onChange={props.onChangeImage}
                style={{ cursor: "pointer" }}
              />
              <N.NewUploadBtn
                id="uploadImage"
                onClick={props.onClickUpload}
                isUploadImage={props.isUploadImage}
              >
                이미지 등록하기
              </N.NewUploadBtn>
            </N.NewTableList>
          </N.NewTable>
          <N.NewTableBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickMemo}
          >
            {props.isEdit ? "수정하기" : "기록하기"}
          </N.NewTableBtn>
        </N.NewTableWrap>
      )}
    </>
  );
}
