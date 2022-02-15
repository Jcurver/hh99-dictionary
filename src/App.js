import React from "react";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadDictFB, addDictFB } from "./redux/modules/dict";

// components
import Home from "./Home";
import Detail from "./Detail";

import NotFound from "./NotFound";

import Spinner from "./Spinner";
function App() {
  const [dictList, setDictList] = React.useState([
    {
      word: "첫번째 단어",
      explain: "이건설명입니다.",
      example: "이건 예시입니다.",
    },
  ]);

  const dispatch = useDispatch();

  const word = React.useRef(null);
  const explain = React.useRef(null);
  const example = React.useRef(null);

  React.useEffect(() => {
    dispatch(loadDictFB());
  }, []);

  const addDictList = () => {
    dispatch(
      addDictFB({
        word: word.current.value,
        explain: explain.current.value,
        example: example.current.value,
      })
    );
  };

  return (
    <div className="App">
      <Link to="/" exact style={{ textDecoration: "none" }}>
        <Header>JaeHyun's Dictionary</Header>
      </Link>
      <Body>
        <Switch>
          <Route path="/" exact>
            <Home list={dictList} />
          </Route>
          <Route path="/addword" exact>
            <AddContainer>
              <Title>단어 추가하기</Title>
              <InputDiv>
                <WordEx>단어</WordEx>
                <InputBox
                  placeholder="단어를 입력하세요"
                  type="text"
                  ref={word}
                ></InputBox>
                <WordEx>설명</WordEx>
                <InputBox
                  placeholder="설명을 입력하세요"
                  type="text"
                  ref={explain}
                ></InputBox>

                <WordEx>예시</WordEx>
                <InputBox
                  placeholder="예시를 입력하세요"
                  type="text"
                  ref={example}
                ></InputBox>
                <AddButton onClick={addDictList}>추가</AddButton>
              </InputDiv>
            </AddContainer>
          </Route>
          <Route path="/detail/:index">
            <Detail props={word} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Body>
    </div>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const Header = styled.div`
  &:hover {
    transition: 0.15s ease-in;
    transform: translateY(-5px);
  }
  text-shadow: 5px 5px 5px gray;
  text-decoration: none;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 30px;
`;

const AddContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 5px gray;
  background-color: #ddd;
  border-radius: 20px;
  width: 450px;
  height: 480px;
  margin: 20px;
`;

const Title = styled.div`
  &:hover {
    transition: 0.15s ease-in;
    transform: translateY(-3px);
  }

  font-size: 24px;
  color: gray;
  padding: 20px;
`;

const WordEx = styled.div`
  &:hover {
    transition: 0.15s ease-in;
    transform: translateY(-3px);
  }
  margin-left: 11px;
  margin-bottom: 5px;
  font-size: 18px;
  color: gray;
`;
const InputBox = styled.input`
  &:hover {
    transition: 0.15s ease-in;
    transform: translateY(-3px);
    background-color: #dde8d8;
  }
  border: none;
  &:focus {
    outline: none;
  }
  padding-left: 20px;
  margin-bottom: 20px;
  height: 50px;
  border-radius: 20px;
`;

const InputDiv = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  padding: 20px;
  height: 340px;
`;
const AddButton = styled.button`
  &:hover {
    transition: 0.15s ease-in;
    transform: translateY(-3px);
    background-color: #dde8d8;
  }
  border-radius: 20px;
  border: none;
  margin-top: 20px;
  background-color: pink;
  width: 348px;
  height: 30px;
`;
export default App;
