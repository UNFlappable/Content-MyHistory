//* Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.

console.log("*** WELCOME TO GUESS GAME ****")

let roll= Math.round(Math.random()*100)
let trial=+prompt("lütfen kaç deneme yapmak istediğinizi seçiniz")
let guess=""
do {
    guess=+prompt("1 ile 100 arasindaki tahmini giriniz ")
    // console.log(roll);
    if(guess===roll) {
        alert("tebrikler cok iyisin");
        break;
    }else if (trial === 1) {alert("üzgünüm elendiniz")
    break;
}
    
    else if(guess>roll){
        trial-=1
        alert(`daha küçük at
         kalan deneme sayisi=${trial}`);
    }else if(guess<roll){
        trial-=1
        alert(`daha büyük at
         kalan deneme sayisi=${trial}`);
    }
    console.log(trial);

        
} while (trial>0);
// console.log(guess);
// console.log(roll);






