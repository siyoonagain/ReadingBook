import type { ChangeEvent, MouseEvent } from "react";

export interface INewProps {
  onClickMemo: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  contents: string;
  sentence: string;
  image: string;
  imageURL: string;
  isUploadImage: boolean;
  isEdit: boolean;
  data: any;

  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeSentence: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickUpload: () => void;
  onClickUpdate: () => void;
}

export interface IImageProps {
  isUpload?: any;
  isEdit?: any;
}
export interface IImageBtnProps {
  isUploadImage: any;
}

export interface IEditProps {
  isEdit: boolean;
  data: any;
}
