const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  
  // let createdMenus = await Blog.bulkCreate(blogSeed);
  test("can create a Restaurant", async () => {
    // TODO - write test
    let createdRestaurant = await Restaurant.bulkCreate(seedRestaurant);
    const foundRestaurants = await Restaurant.findByPk(1)
    expect(foundRestaurants.name).toEqual("AppleBees");
  });

  test("can create a Menu", async () => {
    let createdMenus = await Menu.bulkCreate(seedMenu)
    const foundMenu = await Menu.findByPk(1)
    expect(foundMenu.title).toEqual("Breakfast");
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    const foundRestaurants = await Restaurant.findByPk(2)
    expect(foundRestaurants.name).toEqual("LittleSheep");
  });

  test("can find Menus", async () => {
    // TODO - write test
    const foundMenu = await Menu.findByPk(2)
    expect(foundMenu.title).toEqual("Lunch");
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    const foundRestaurants = await Restaurant.findAll()
    let deletedRestaurant = await Menu.destroy({
      truncate: true
    })
    expect(deletedRestaurant).toEqual("EXPECTED DATA");
  });
});
