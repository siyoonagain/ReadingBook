import styled from "@emotion/styled";
import { IImageBtnProps, IImageProps } from "./new.types";

export const NewTableWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 17px;
`;

export const NewTable = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #ebebea;
  padding: 23px;
  margin-top: 23px;
}
`;

export const NewTableList = styled.li`
  margin: 25px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NewTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  color: #7a6d6c;
`;

export const NewInput = styled.input`
  width: 80%;
  padding: 15px 10px;
  border: 1px solid #f7f4f3;
  background: #f7f4f3;
`;

export const NewContent = styled.textarea`
  width: 80%;
  height: 400px;
  border: 1px solid #f7f4f3;
  background: #f7f4f3;
  padding: 5px;
`;

export const NewImage = styled.img<IImageProps>`
  width: 20%;
  height: 100%;
  object-fit: contain;
  margin: 23px 0;
  // display: ${(props) => (props.isUpload ? "block" : "none")};
  // display: ${(props) =>
    props.isEdit ? "block" : "none" && props.isUpload ? "block" : "none"};
`;

export const NewImageSpace = styled.div`
  width: 80%;
  height: 100%;
  margin-bottom: 23px;
  text-align: center;
  background: #f7f4f3;
`;

export const NewUploadBtn = styled.button<IImageBtnProps>`
  padding: 14px 15px;
  margin: 23px 0;
  border-radius: 14px;
  font-size: 15px;
  cursor: pointer;
  background: #7a6d6c;
  border: none;
  color: #ebebea;
  opacity: ${(props) => (props.isUploadImage ? "1" : "0.7")};
  cursor: ${(props) => (props.isUploadImage ? "pointer" : "none")};
  transition: all 0.3s ease 0;
  :hover {
    opacity: 0.7;
  }
`;

export const NewTableBtn = styled.button`
  width: 40%;
  padding: 14px 15px;
  margin: 23px 0;
  border-radius: 14px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  background: #ebebea;
  border: none;
  color: #7a6d6c;
  opacity: 1;
  transition: all 0.3s ease 0;

  :hover {
    opacity: 0.7;
  }
`;
