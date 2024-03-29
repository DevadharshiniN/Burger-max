import React from "react";

function Order(props) {
  const ingredients = [];
  for (let i in props.ingredients) {
    ingredients.push({
      name: i,
      amount: props.ingredients[i],
    });
  }
  const ingredientsOutput = ingredients.map((ig) => {
    return (
      <span key={ig.name} style={{ alignContent: "spaceBetween" }}>
        {ig.name} - {ig.amount}
      </span>
    );
  });
  return (
    <div style={{ marginBottom: "20px", marginLeft: "30px" }}>
      <p>
        <b>INGREDIENTS: </b> {ingredientsOutput}
      </p>
      <p>
        <b>PRICE: </b> {parseInt(props.price).toFixed(2)}
      </p>
    </div>
  );
}

export default Order;
