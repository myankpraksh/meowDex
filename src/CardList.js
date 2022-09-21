import React from "react";
import Card from "./Card";
export const CardList = (props) => {
  const cardArray = props.props.map((cat, i) => {
    return <Card key={props.props[i].id} props={props.props[i]} />;
  });

  return <div>{cardArray}</div>;
};
