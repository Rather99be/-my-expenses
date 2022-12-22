let money=prompt("Ваш бюджет на месяц?");
time=prompt("Введите дату в формате YYYY-MM-DD")




let appData = {
    budget: money, 
    timeDate:time,
    expenses: {
        // oneQuestions: twoQuestions,
    },
    OptionalExpenses:[],
    timeDate:time,
    savings:false
}
for (let i = 0; i < 2; i++) {
    let a=prompt("  “Введите обязательную статью расходов в этом месяце”, ");
        let b= + prompt("   “Во сколько обойдется?”  ");

    if(typeof(a)==='string' && typeof(a) !=null && a !='' && b !='' && a.length<50){
        
        console.log("Сделанп все правильно!");
        appData.expenses[a]=b;
     } else{
        i=i-1;
     }
}

appData.moneyPerday=appData.budget / 30;

alert(" Ежедневный бюджет"+ appData.moneyPerday);
if(appData.moneyPerday < 100){
    console.log("Минимальный уровень достатка");
}else if(moneyPerday > 100 && appData.moneyPerday < 2000){
    console.log("Средний уровень достатка");
}else if(appData.moneyPerday > 2000){
    console.log("Высокий уровень достатка");
}else{
    console.log("Призошла ошибка")
}


    










