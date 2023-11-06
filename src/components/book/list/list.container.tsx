import ListPageUI from "./list.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "@/src/commons/libraries/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { createdAtNote } from "@/src/commons/utils/createdAt";

export default function ListContainerPage(): JSX.Element {
  const [data, setData] = useState<any>([]);
  const router = useRouter();

  // 순서 오름차순, 내림차순 중 어떤걸로 할지 생각하기

  useEffect(() => {
    onSnapshot(
      query(collection(db, "memo"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const result = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setData(result);
      },
      (error: any) => {
        console.log(error.message);
      }
    );
  }, []);
  console.log(data);

  const onClickDetail = async (e: any) => {
    await router.push(`../write/${e.currentTarget.id}`, undefined, {
      shallow: true,
    });
  };
  createdAtNote();
  return <ListPageUI data={data} onClickDetail={onClickDetail} />;
}
