test("status 200 fake store API", async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  expect(res.status).toBe(200);
});
