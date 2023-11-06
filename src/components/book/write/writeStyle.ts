import styled from "@emotion/styled";

export const WriteSpace = styled.div`
  width: 100vw;
  height: calc(100vh - 141px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WriteTitle = styled.h1`
  font-size: 50px;
  color: #7a6d6c;
  text-align: center;
  // font-family: "Yeon Sung", cursive;
  // font-family: "Noto Serif KR", serif;
  font-family: "Gowun Dodum", sans-serif;

  font-weight: bold;
  line-height: 210%;
  margin-bottom: 47px;
`;

export const WriteBtn = styled.button`
  background: #7a6d6c;
  width: 390px;
  height: 90px;
  color: #f7f4f3;
  border: none;
  border-radius: 40px;
  font-size: 20px;
  margin-bottom: 47px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-family: "Noto Serif KR", serif;

  :hover {
    background: transparent;
    border: 1px solid #7a6d6c;
    color: #7a6d6c;
  }
`;
