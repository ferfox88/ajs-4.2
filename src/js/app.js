export default function sortingLife(data) {
  data.sort((a, b) => a.health - b.health);
  return data.reverse();
}
