import { useRouter } from "next/router";
import WritePageUI from "./write.presenter";

export default function WritePage(): JSX.Element {
  const router = useRouter();

  const onClickWrite = () => {
    router.push("./write/new");
  };

  return <WritePageUI onClickWrite={onClickWrite} />;
}
