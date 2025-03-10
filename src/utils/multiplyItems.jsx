export function multiplyItems({ children, amount }) {
  const items = [];
  for (let i = 0; i < amount; i++) {
    items.push(children);
  }
  return items;
}
