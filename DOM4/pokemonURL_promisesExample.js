function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("this is an error");
      }
    };
    req.send();
  });

  return promise;
}

const ALL_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon-bad";

let promise = getPromise(ALL_POKEMON_URL);

const consumer = () => {
  // promise.then(
  //   (result) => {
  //     console.log({ result });
  //   },
  //   (error) => {
  //     console.log("we have encountered an error!");
  //   }

  // );
  promise.catch((error) => console.log(error));
};

consumer();
