const prisma = require("../prisma");
const seed = async () => {
  const createCustomers = async () => {
    const customers = [
      { name: "Chico" },
      { name: "Maurice" },
      { name: "Horatio" },
      { name: "Raul" },
    ];
    await prisma.customer.createMany({ data: customers });
  };

  const createRestaurants = async () => {
    const restaurants = [
      { name: "Luigi's" },
      { name: "Mario's" },
      { name: "Bowser's" },
    ];
    await prisma.restaurant.createMany({ data: restaurants });
  };

  const createReservations = async () => {
    const reservations = [
      {
        customerId: 1,
        restaurantId: 1,
        date: new Date("2025-08-01"),
        partyCount: 3,
      },
      {
        customerId: 2,
        restaurantId: 2,
        date: new Date("2025-08-02"),
        partyCount: 4,
      },
      {
        customerId: 3,
        restaurantId: 3,
        date: new Date("2025-08-03"),
        partyCount: 5,
      },
    ];
    await prisma.reservation.createMany({ data: reservations });
  };

  await createCustomers();
  await createRestaurants();
  await createReservations();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
