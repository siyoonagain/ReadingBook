import { useRouter } from "next/router";
import { HSpace, HTitle, HMenu, SmallSpace, SmallSpace1 } from "./headerStyle";

export default function BookHeader(props: any): JSX.Element {
  const router = useRouter();

  const onClickMain = async (): Promise<void> => {
    await router.push("/write");
  };

  const onClickWrite = async (): Promise<void> => {
    await router.push("/write/new");
  };

  const onClickList = async (): Promise<void> => {
    await router.push("/write/list");
  };
  return (
    <HSpace>
      <SmallSpace>
        <HTitle onClick={onClickMain}>ReadingMemo</HTitle>
      </SmallSpace>
      <SmallSpace1>
        <HMenu onClick={onClickWrite}>write</HMenu>
        <HMenu onClick={onClickList}>books</HMenu>
      </SmallSpace1>
    </HSpace>
  );
}
