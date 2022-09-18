const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async() =>{
    const IIX = await promiseTheaterIXX()

    const VGC = await promiseTheaterVGC()
    
    const marahIIX = IIX.filter(function(item){
      return item.hasil == 'marah'
    })

    const marahVGC = VGC.filter(function(item){
      return item.hasil == 'marah'
    })

    const tmarahIIX = IIX.filter(function(item){
      return item.hasil == 'tidak marah'
    })

    const tmarahVGC = VGC.filter(function(item){
      return item.hasil == 'tidak marah'
    })

    console.log(marahIIX.length + marahVGC.length)

    console.log(tmarahVGC.length + tmarahIIX.length)
}

module.exports = {
  promiseOutput,
};
