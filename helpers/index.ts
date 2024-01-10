export const sendCartItems = async (products: string[]) => {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(products),
  });

  const data = await res.json();
  return data;
};
