import styled from "@emotion/styled";

// 제목 32px, 부제목 24px, 본문 16px

export const ListWrap = styled.div`
  width: 100%;
  margin: 34px auto;
  text-align: center;
  font-size: 17px;
`;

export const Lists = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(33.333% - 64px);
  line-height: 180%;
  cursor: pointer;
  background: #ebebea;
  color: #7a6d6c;
  // border: 1px solid #7a6d6c;
  height: 600px;
  margin: 32px;
`;

export const ListCount = styled.p`
  pointer-events: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 32px;
  text-align: left;
  color: #7a6d6c;
  width: 80%;
`;
export const ListTitle = styled.p`
  font-size: 16px;
  width: 100%;
  margin: 0 auto;
`;

export const ListImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain;
`;
