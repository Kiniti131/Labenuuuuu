const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let ranking = "";

for (i of maioresPaises) {
    ranking += `${maioresPaises.indexOf(i)+1} - ${i}\n`
}
console.log(ranking)