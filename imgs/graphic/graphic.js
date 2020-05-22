const count = 15;

let imgs = [];

for (let i = 0; i < count; i++) {
  let fileInfo = {
    img: `imgs/graphic/${i}.jpg`,
  };

  imgs.push(fileInfo);
}

export default imgs;
