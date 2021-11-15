import React, { Component } from "react";
import style from "./recipe.module.css";
class Recipe extends Component {
  render() {
    const { title, calories, image, ingredients } = this.props;
    return (
      <div className={style.recipe}>
        <h1 className={style.heading}>{title}</h1>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>{calories}</p>
        <img src={image} alt='' className={style.image} />
      </div>
    );
  }
}

export default Recipe;
