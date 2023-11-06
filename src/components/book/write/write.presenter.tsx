import { IWrtieProps } from "./write.types";
import { WriteSpace, WriteTitle, WriteBtn } from "./writeStyle";
import { FormOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

export default function WritePageUI(props: IWrtieProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <WriteSpace>
      <WriteTitle>
        스쳐가는 당신의 생각을
        <br /> 영원히 기록하세요.
      </WriteTitle>
      <WriteBtn onClick={props.onClickWrite}>
        <FormOutlined />
        기록하기
      </WriteBtn>
    </WriteSpace>
  );
}
