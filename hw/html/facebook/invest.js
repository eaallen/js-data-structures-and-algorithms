class Invester{
  constructor(arr){
    this.prices_days = {}
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      
      if(this.prices_days[element]){
        this.prices_days[element].push(index)
      }else{
        this.prices_days[element] = [index]
      }
      
    }

  }
}

let days = []

for (let index = 0; index < 365; index++) {
  const element = Math.floor(Math.random()*100000000);
  days.push(element)
}

invest = new Invester(days) // O(n)

console.log(invest)