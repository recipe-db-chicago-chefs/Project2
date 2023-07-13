const User = require("./User");
const Recipe = require("./recipe");
const recipeJoin = require("./recipeJoin");
const Ingredient = require("./ingredient");

// many to many relationships between:
// users have many recipes saved,

User.hasMany(Recipe, {
  foreignKey: "owner_id",
});

Recipe.belongsTo(User, {
  foreignKey: "owner_id",
});

recipeJoin.belongsTo(Ingredient, {
  foreignKey: "ingredient_id",
});
recipeJoin.belongsTo(Recipe, {
  foreignKey: "recipe_id",
});


module.exports = { User, Recipe, recipeJoin, Ingredient };
