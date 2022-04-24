export const getRandomItemsInArray = ({ count = 0, array = [] }) => {

  const items = [];

  for (let i = 0; i < count; i++) {

    const
      { min, max } = { min: 1, max: array.length },
      itemIndex = Math.floor(Math.random() * (max - min) + min);

    if (array[itemIndex]) {
      items.push(array[itemIndex]);
      array.splice(itemIndex, 1);
    }
  }

  return items;
};