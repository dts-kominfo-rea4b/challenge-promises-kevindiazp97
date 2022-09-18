const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(hasilPenonton) => {
  const IXX = await promiseTheaterIXX();
  const VGC = await promiseTheaterVGC();

  let jumlahPenonton = 0;
  IXX.forEach(hitung);
  VGC.forEach(hitung);

  function hitung(item) {
      if (item.hasil == hasilPenonton) { jumlahPenonton++ }
  }
  return jumlahPenonton;
};

module.exports = {
  promiseOutput,
};
