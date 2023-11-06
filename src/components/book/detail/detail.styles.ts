import styled from "@emotion/styled";

export const DetailWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebebea;
  padding: 23px;
  margin: 23px auto;
  text-align: center;
`;

export const DetailT = styled.h1`
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  color: #7a6d6c;
  margin-bottom: 23px;
  background: #f7f4f3;
  line-height: 180%;
`;

export const DetailSub = styled.p`
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-bottom: 23px;
  background: #f7f4f3;
  line-height: 180%;
`;

interface IImageProps {
  isImage: boolean;
}

export const DImage = styled.img<IImageProps>`
  width: 100%;
  height: 400px;
  object-fit: contain;
  margin-bottom: 23px;
  display: ${(props: any) => (props.isImage ? "block" : "none")};
`;

export const DetailP = styled.p`
  width: 100%;
  font-size: 17px;
  margin-bottom: 23px;
  background: #f7f4f3;
  line-height: 180%;
`;

export const DBtnSpace = styled.div`
  display: flex;
  justify-content: center;
`;

export const DBtn = styled.button`
  text-align: center;
  padding: 14px 15px;
  margin: 0 10px;
  border-radius: 14px;
  cursor: pointer;
  background: #ebebea;
  border: none;
  color: #7a6d6c;
  font-weight: bold;
  opacity: 1;
  transition: all 0.3s ease 0;

  :hover {
    opacity: 0.7;
  }
`;
