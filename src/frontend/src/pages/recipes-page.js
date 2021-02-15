import React from "react";
import cupcakeImagePath from "./cupcake.png";
import "./recipes-thank-page.css";

export const RecipesPage = () => {
  return (
    <div className="recipes-container">
      <h1 className="recipes-h1">Blog and Recipes</h1>
      <section className="cupcake-with-line">
        <div className="line-1"></div>
        <img src={cupcakeImagePath} alt="cupcake" className="cupcake-img" />
        <div className="line-2"></div>
      </section>
      <h2 className="recipes-h2">History of the Famous Kyiv Cake</h2>
      <section className="description-blog">
        <p>
          A Kiev cake has become one of the symbols of Kiev city, particularly
          by its brand name and package, depicting the horse chestnut leaf (the
          informal coat of arms of Kiev).
        </p>
        <p>
          This cake is the main confectionary pride of the Ukrainian capital.
          This is exceptionally delicious Kyiv cake, cooked by unique recipe. In
          Soviet times, a box with a Kyiv cake inside was one of the most
          desirable souvenirs from Kyiv. Destinations tells about the
          interesting history of this culinary masterpiece.
        </p>
        <p>
          There are two well-known legends about creation of Kyiv cake.
          According to one of them, in 1956, the workers of Karl Marx
          confectionary factory prepared a portion of egg albumen for a biscuit,
          but by some reason forgot to put it into the fridge. The next morning,
          head of pastry workshop K. Petrenko found the forgotten albumen, which
          had already become not so fresh. He decided to make a new type of cake
          with help of consolidated products in order to avoid conflict with
          factory administration. This “sweet mistake” gave birth to Kyiv cake,
          which gained world-wide popularity afterwards.
        </p>
        <p>
          But the second legend insists that Kyiv cake was created on purpose.
          This legend tells that the authors of Kyiv cake were 17-year old girl
          Nadezhda Chernogor, who failed to enter medical university and decided
          to choose confectionary career, and her supervisor Konstantin
          Petrenko. Nowadays, no one can be sure which of these two legends
          tells the true story. However, Kyiv cake has received the first award
          just after its birth – in 1957. But this famous dessert was officially
          patented only 17 years after, in 1973.
        </p>
        <p>
          Kyiv cake has become the sweet symbol of the city as well as of the
          whole Ukraine. This dryish cake with sweet fatty cream became a
          favorite specialty for the people in many countries. Storage life of
          the real Kyiv cake is only 48 hours. It is also notable for having an
          official birthday date. Kyiv cake celebrated its 60-year anniversary
          on 6th December 2016. Kyiv cake recipe has changed many times. First,
          walnuts were substituted with cashew, and then with hazelnuts. The
          only thing left unchanged, is the composition of light glairy pie
          shells. This magic recipe has been kept a secret for more than 50
          years.
        </p>
      </section>
    </div>
  );
};
