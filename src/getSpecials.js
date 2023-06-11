export default function getSpecials(obj) {
  const { special } = obj;

  for (let i = 0; i < special.length; i += 1) {
    if (!special[i].description) {
      special[i].description = 'Описание недоступно';
    }
  }
  return special;
}
