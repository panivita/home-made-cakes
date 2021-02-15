const express = require("express");
require("express-async-errors");
const router = express.Router();
const knex = require("../database");

//Adds a new meal
router.post("/", async (req, res) => {
  const {
    id,
    title,
    description,
    location,
    meal_time,
    max_reservations,
    price,
    created_date,
  } = req.body;

  const newMeal = {
    id,
    title,
    description,
    location,
    meal_time,
    max_reservations,
    price,
    created_date,
  };

  await knex("meal").insert(newMeal);
  res.send("New meal added");
});

//Returns meal by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const mealWithReviews = await knex("meal")
    .select(
      "meal.id",
      "meal.url",
      "meal.title",
      "meal.description",
      "meal.max_reservations",
      "meal.price",
      "review.description as review_description",
      "review.stars"
    )
    .leftJoin("review", "meal.id", "review.meal_id")
    .where({ "meal.id": id });
  res.json(mealWithReviews);
});

// Updates the meal by id
router.put("/:id", async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  await knex("meal").where({ id }).update({ title });
  res.send(`Meal with id ${id} was updated`);
});

//Deletes the meal by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await knex("meal").where({ id }).del();
  res.send(`Meal with id ${id} was deleted`);
});

//Returns all meals
//Get meals that has a price smaller than maxPrice
//Get meals that still has available reservations
//Get meals that partially match a title.
//Get meals that has been created after the date
//Only specific number of meals
// Works as a multi-step search, you can combine all parameters for the search,
//you can find food that matches all search criteria
router.get("/", async (req, res) => {
  const {
    maxPrice,
    availableReservations,
    title,
    createdAfter,
    limit,
  } = req.query;
  let meals = knex("meal");

  if (maxPrice) {
    const numMaxPrice = parseInt(maxPrice);
    meals = meals.where("price", "<", numMaxPrice);
  }

  if (availableReservations === "true") {
    meals = meals
      .join("reservation", { "meal.id": "reservation.meal_id" })
      .where("meal.meal_time", ">=", knex.fn.now())
      .andWhere("reservation.number_of_guests", ">", "meal.max_reservations");
  }

  if (title) {
    meals = meals.where("title", "like", `%${title}%`);
  }

  if (createdAfter) {
    const dateCreatedAfter = new Date(createdAfter);
    meals = meals.where("meal.created_date", ">", dateCreatedAfter);
  }

  if (limit) {
    const numMealLimit = parseInt(limit);
    meals = meals.limit(numMealLimit);
  }
  const resultSearch = await meals.select("*");

  if (resultSearch.length === 0 || availableReservations === "false") {
    res.status(404).send(`404 Error. Meal is not found`);
  }
  res.json(resultSearch);
});

router.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

module.exports = router;
