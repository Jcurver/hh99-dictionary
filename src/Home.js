import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Route, Switch, useParams } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// components
import { deleteDictFB } from "./redux/modules/dict";

function Home() {
  let history = useHistory();
  const dispatch = useDispatch();

  const params = useParams();
  const dict_index = params.index;
  const dict_lists = useSelector((state) => state.dict.list);


  return (
    <>
      <DictContainer>

        <DictDiv>
          {dict_lists.map((list, idx) => {
            return (
              <Card>
                <Dict
                  key={idx}
                  onClick={() => {
                    history.push("/detail/" + idx);
                  }}
                >
                  <WordEx>단어</WordEx>
                  <h5>{list.word}</h5>
                  <WordEx>설명</WordEx>
                  <h5>{list.explain}</h5>
                  <WordEx>예시</WordEx>
                  <h5>{list.example}</h5>
                </Dict>
                <DeleteButton
                  onClick={(e) => {
                    dispatch(deleteDictFB(list.id));
                  }}
                >
                  삭제하기
                </DeleteButton>
              </Card>
            );
          })}
        </DictDiv>
        <Link to="/addword" style={{ textDecoration: "none" }}>
          <AddWordButton>+</AddWordButton>
        </Link>
      </DictContainer>
    </>
  );
}

const DictContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 5px gray;
  background-color: #ddd;
  border-radius: 20px;
  width: 460px;
  height: 680px;
  margin: 20px;
`;
const Title = styled.div`
  font-size: 24px;
  color: white;
  padding: 20px;
`;
const Card = styled.div`
  display: flex;

  &:hover {

  transition: .15s ease;
  transform: translateY(-10px);
  
  }

`
const AddWordButton = styled.div`
  &:hover {

transition: .15s ease;
transform: translateY(-3px);

}
box-shadow: 5px 5px 5px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  top: 40px;
  background-color: #9bd4d1;
  color: white;
  font-size: 40px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;
const Dict = styled.div`
  &:hover {
    transition: 0.3s ease;
    background-color: #d9e6d3;


  }
  box-shadow: 5px 10px 10px black;

  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  width: 300px;
  flex-direction: column;
  padding: 20px;
  
  height: 220px;
  background-color: #eee;
  margin-bottom: 20px;
`;
const DictDiv = styled.div`
  padding: 10px;
  overflow: auto;
  margin-top: 20px;
`;
const WordEx = styled.div`
  font-size: 12px;
`;
const DeleteButton = styled.button`
  &:hover {
    transition: 0.3s ease;
    background-color: #d6b8b4;


  }
  border: none;
  background-color: #ebdad8;
  height: 260px;
  z-index: 999;
  box-shadow: 5px 5px 5px black;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;

`;

export default Home;
