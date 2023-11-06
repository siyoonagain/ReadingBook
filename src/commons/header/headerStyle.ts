import styled from "@emotion/styled";

export const HSpace = styled.div`
  width: 100%;
  height: 141px;
  margin: 0 auto;
  background: #7a6d6c;
  padding: 47px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  font-family: "Bevan", serif;
  font-weight: 100;
  cursor: pointer;
`;

export const HTitle = styled.h1`
  color: #f7f4f3;
  font-size: 32px;
  text-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
`;
export const SmallSpace = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const SmallSpace1 = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: right;
  width: 50%;
`;

export const HMenu = styled.h2`
  margin: 0 40px;
  font-size: 24px;
  color: #f7f4f3;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  // font-weight: 100;
  // font-family: "Bevan", serif;

  :hover {
    opacity: 0.6;
  }
`;
export const HMe = styled.h2`
  border-radius: 50%;
  background: #f7f4f3;
  color: #7a6d6c;
  font-size: 20px;
  padding: 10px 15px;
  cursor: pointer;
  outline: 2px solid #f7f4f3;
  border: 3px solid #7a6d6c;
  transition: all 0.3s ease 0s;
  margin: 0 30px;

  :hover {
    opacity: 0.6;
  }
`;
