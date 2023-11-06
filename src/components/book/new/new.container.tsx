import { useRouter } from "next/router";
import NewPageUI from "./new.presenter";
import React, { ChangeEvent, useState, useCallback } from "react";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, firebaseApp, storage } from "@/src/commons/libraries/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createdAtNote } from "@/src/commons/utils/createdAt";
import { IEditProps } from "./new.types";

export default function NewPage(props: IEditProps): JSX.Element {
  // 상태관리
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [sentence, setSentence] = useState("");
  const [isUploadImage, setIsUploadImage] = useState(false);

  // 이미지 파일 정보
  const [imageURL, setImageURL] = useState<any>([]);
  // 이미지 파일 이름
  const [image, setImage] = useState<string>("");

  const router = useRouter();

  //onChange 기능들
  // 최적화 하기 ref 사용하기!!
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const onChangeSentence = (e: ChangeEvent<HTMLInputElement>) => {
    setSentence(e.target.value);
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImageURL(e.target.files[0]);
      setIsUploadImage(true);
    }
  };

  // 저장 버튼 기능
  const onClickMemo = async (): Promise<void> => {
    const memo = collection(getFirestore(firebaseApp), "memo");
    // 날짜

    try {
      if (!title) {
        alert("제목을 입력해주세요.");
      } else if (!contents) {
        alert("내용을 입력해주세요.");
      }
      if (title && contents) {
        await addDoc(memo, {
          id: "임시",
          title: title,
          contents: contents,
          sentence: sentence,
          image: image,
          createdAt: createdAtNote(),
        }).then((data) => {
          console.log(data.id);
        });
        alert("저장되었습니다.");
        // 초기화 하기
        setTitle("");
        setContents("");
        setSentence("");
      }

      const querySnapshot = await getDocs(
        query(collection(db, "memo"), where("title", "==", title))
      );
      querySnapshot.forEach(async (docs) => {
        // 자동 생성된 id 업데이트
        const updateId = doc(db, "memo", docs.id);
        updateDoc(updateId, { id: docs.id });
        router.push(`../write/${docs.id}`);
        setId("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const storageRef = ref(storage, `images/${imageURL?.name}`);

  console.log(imageURL);
  console.log(image);
  const onClickUpload = useCallback(() => {
    async (): Promise<void> => {
      console.log("d");
      if (imageURL?.file > 5 * 1024 * 1024) {
        alert("파일의 용량이 큽니다.(제한 5MB)");
        return;
      }
      await uploadBytes(storageRef, imageURL).then((snapshot) => {
        console.log(snapshot);
        console.log("성공");
        getDownloadURL(storageRef).then((url) => {
          console.log(url);
          setImage(url);
        });
      });
    };
  }, []);

  // 수정한 부분만 업데이트되게 하기
  const onClickUpdate = async (): Promise<void> => {
    const editArray: any = {};
    if (title) editArray.title = title;
    if (contents) editArray.contents = contents;
    if (sentence) editArray.sentence = sentence;
    if (image) editArray.image = image;
    const querySnapshot = await getDocs(
      query(collection(db, "memo"), where("id", "==", router.query.number))
    );
    querySnapshot.forEach((docs) => {
      const updateId = doc(db, "memo", docs.id);
      updateDoc(updateId, editArray);
      router.push(`/write/${docs.id}`);
    });
    alert("수정완료");
  };

  // console.log(props.data);

  return (
    <NewPageUI
      data={props.data}
      onClickMemo={onClickMemo}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeSentence={onChangeSentence}
      onChangeImage={onChangeImage}
      onClickUpload={onClickUpload}
      onClickUpdate={onClickUpdate}
      title={title}
      contents={contents}
      sentence={sentence}
      image={image}
      imageURL={imageURL}
      isUploadImage={isUploadImage}
      isEdit={props.isEdit}
    />
  );
}
