import React from "react";

export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    // const calcTotalFee = (num) => {
    // const calcTotalFee = (num: any) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題: 設定ファイルを触る</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
