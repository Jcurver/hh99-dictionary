import React, { useRef, useState } from "react";
import styled from "styled-components";
// 라우터 훅을 불러옵니다.
import { useParams, useHistory } from "react-router-dom";
// redux hook을 불러옵니다.
import { deleteDictFB, updateDictFB } from "./redux/modules/dict";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const Detail = (props) => {
  const params = useParams();
  const dict_index = params.index;
  const dict_list = useSelector((state) => state.dict.list);

  const dispatch = useDispatch();
  const history = useHistory();
  const [word, setWord] = useState("");
  const [explain, setExplain] = useState("");
  const [example, setExample] = useState("");
  const onChangeWord = (e) => {
    setWord(e.target.value);
  };

  const onChangeExample = (e) => {
    setExample(e.target.value);
  };

  const onChangeExplain = (e) => {
    setExplain(e.target.value);
  };

  return (
    <DetailBox>
      <ModiTitle>단어 수정하기</ModiTitle>
      <WordEx>단어</WordEx>
      <WordExInput
        onChange={onChangeWord}
        value={word}
        placeholder={dict_list[dict_index] ? dict_list[dict_index].word : ""}
      ></WordExInput>
      <WordEx>설명</WordEx>
      <WordExInput
        onChange={onChangeExplain}
        value={explain}
        placeholder={dict_list[dict_index] ? dict_list[dict_index].explain : ""}
      ></WordExInput>
      <WordEx>예시</WordEx>
      <WordExInput
        onChange={onChangeExample}
        value={example}
        placeholder={dict_list[dict_index] ? dict_list[dict_index].example : ""}
      ></WordExInput>

      <hr />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <Button
          style={{ marginRight: "20px" }}
          variant="outlined"
          color="primary"
          onClick={() => {
            // dispatch(updateBucket(bucket_index));
            dispatch(
              updateDictFB(dict_list[dict_index].id, word, explain, example)
            );
            history.goBack();
          }}
        >
          수정완료
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            dispatch(deleteDictFB(dict_list[dict_index].id));
            history.goBack();
          }}
        >
          삭제
        </Button>
      </div>
    </DetailBox>
  );
};

const ModiTitle = styled.p`
  &:hover {
    transition: 0.15s ease-in;
    transform: translateY(-3px);
  }

  font-size: 24px;
  color: gray;

`;
const WordEx = styled.p`
&:hover {
    transition: 0.15s ease-in;
    transform: translateY(-3px);
  }
  color:gray;
  font-size: 20px;
  font-weight: bold;
`;
const WordExInput = styled.input`
  &:hover {
    transition: 0.15s ease-in;
    transform: translateY(-3px);
    background-color: #dde8d8;
  }
  border: none;
  &:focus {
    outline: none;
  }
  width: 300px;
  padding-left: 20px;
  /* margin-bottom: 20px; */
  height: 50px;
  border-radius: 20px;
`;
const DetailBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 5px gray;
  background-color: #ddd;
  border-radius: 20px;
  width: 450px;
  height: 540px;
  margin: 20px;
`;
export default Detail;
