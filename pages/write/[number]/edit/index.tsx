import { db } from "@/src/commons/libraries/firebase";
import NewPage from "@/src/components/book/new/new.container";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditPage(): JSX.Element {
  const router = useRouter();
  const [data, setData] = useState([]);

  const getEditdata = async (): Promise<void> => {
    const isDocumentId = query(
      collection(db, "memo"),
      where("id", "==", router?.query?.number ?? null)
    );

    const matchingData = await getDocs(isDocumentId);
    matchingData.forEach((doc) => {
      const datas: any = { ...doc.data(), id: doc.id };
      setData(datas);
    });
  };

  useEffect(() => {
    getEditdata();
  }, []);

  return <NewPage isEdit={true} data={data} />;
}
