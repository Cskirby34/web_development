document.getElementById("moneymanager").addEventListener("submit", function(event) {
    event.preventDefault();

    const moneyearned = parseFloat(document.getElementById("moneyearned").value);
    const moneyused = parseFloat(document.getElementById("moneyused").value);

    if (isNaN(moneyused) || isNaN(moneyearned)) {
        document.getElementById("result").textContent = "Enter valid numbers";
        return;
    }

    const money = moneyearned - moneyused;

    document.getElementById("result").textContent = "Money saved is: $" + money.toFixed(2);
});