import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import DetailUI from "./detail.presenter";
import { db } from "@/src/commons/libraries/firebase";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

export default function DetailContaierPage(): JSX.Element {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [contents, setContents] = useState("");
  const [sentence, setSentence] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetchMemo();
  }, []);

  // 해당 게시글 데이터 불러오기
  const fetchMemo = async () => {
    const isDocumentId = await query(
      collection(db, "memo"),
      where("id", "==", router.query?.number ?? "")
    );

    await onSnapshot(isDocumentId, (snapshot) => {
      snapshot.forEach((doc) => {
        setTitle(doc?.data()?.title);
        setTime(doc?.data()?.createdAt);
        setContents(doc?.data()?.contents);
        setSentence(doc?.data()?.sentence);
        setImage(doc?.data()?.image);
      });
    });
  };
  console.log(image);

  // 삭제하기 기능
  const onClickRemove = useCallback(() => {
    async () => {
      const documentId = router.query;
      const docRef = doc(db, "memo", String(documentId.number));
      try {
        if (confirm("정말 삭제하겠습니까?")) {
          await deleteDoc(docRef);
          alert("성공적으로 삭제되었습니다.");
          router.replace("/write/list");
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  // 수정페이지 이동 기능
  const onClickMoveToEdit = () => {
    router.push(`/write/${router.query.number}/edit`);
  };

  const onClickMoveList = () => {
    router.push(`/write/list`);
  };

  return (
    <DetailUI
      title={title}
      time={time}
      contents={contents}
      sentence={sentence}
      image={image}
      onClickRemove={onClickRemove}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveList={onClickMoveList}
    />
  );
}
