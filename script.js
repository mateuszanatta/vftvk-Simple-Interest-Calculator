function compute(event){
    event.preventDefault();

    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const years = document.getElementById('years').value;
    const year = new Date().getFullYear() + parseInt(years)

    if(principal > 0){
        let interest = principal * years * (rate / 100);

        const info = {principal, rate, interest, year};
        WriteResult(info);
    } else {
        alert('Enter a positive number');
        document.getElementById('principal').value = '';
        document.getElementById('principal').focus();
    }
}

function updateRate(){
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function WriteResult(info){
    const { 
        principal, 
        rate, 
        interest, 
        year 
    } = info;

    const results = `If you deposit ${principal} <br>
                    at an interest rate of ${rate}%. <br>
                    You will receive an amount of ${interest},
                    in the year ${year}`;
    document.getElementById("result").innerHTML = results;
}