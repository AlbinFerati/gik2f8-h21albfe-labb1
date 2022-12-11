const url = "https://gik2f8-labs.herokuapp.com/books";

async function getAll(id) {
  const result = await fetch(url + "/" + id)
    .then((result) => result.json())
    .catch((e) => e);
  return result;
}
