

const reportProfit = document.getElementById('reportProfit');
const reportTO = document.getElementById('reportTO');
const reportDWM = document.getElementById('reportDWM');
const kingDiv = document.querySelector('.kingDiv');
const valetDiv = document.querySelector('.valetDiv');
const home = document.querySelector('.home');


reportTO.addEventListener('click', async (event) => {
    event.preventDefault()
    kingDiv.innerHTML = '';
    valetDiv.innerHTML= '';
    home.innerHTML= '';
    const response = await fetch('/reportTernOwer' , {
        method: "GET",
        headers: {
            "Content-type" : "application/json",
        },
    })
    const result = await response.json();

    const table = document.createElement('table')
    table.className = 'table table-striped'
    table.innerHTML = `
    <thead>
    <tr>
    <th scope="col">Код товара</th>
    <th scope="col">Наименование</th>
    <th scope="col">Остаток на начало периода отчёта (шт)</th>
    <th scope="col">Поступило (шт)</th>
    <th scope="col">Продано (шт)</th>
    <th scope="col">Остаток на конец периода отчёта (шт)</th>
    <th scope="col">Себестоимость проданного товара (руб)</th>
    </tr>
    </thead>
    `
    
    const tbodyRTO = document.createElement("tbody")
    tbodyRTO.className = "rto"
        for(let i = 0; i < result.rows.length; i++){
            const tr = document.createElement('tr');
                tr.innerHTML = `
                <th scope="row">${result.rows[i].assortment.code}</th>
                <td>${result.rows[i].assortment.name}</td>
                <td>${result.rows[i].onPeriodStart.quantity}</td>
                <td>${result.rows[i].income.quantity}</td>
                <td>${result.rows[i].outcome.quantity}</td>
                <td>${result.rows[i].onPeriodEnd.quantity}</td>
                <td>${result.rows[i].outcome.sum / 100}</td>
                `
                tbodyRTO.appendChild(tr);
                table.appendChild(tbodyRTO);
                kingDiv.appendChild(table)
        }
})


reportProfit.addEventListener('click', async (event) => {
    event.preventDefault();
    kingDiv.innerHTML = '';
    valetDiv.innerHTML= '';
    home.innerHTML= '';
    const response = await fetch('/reportProfit', {
        method: "GET",
        headers: {
            "Content-type" : "application/json",
        },
    })
    const result = await response.json();

    const table = document.createElement('table')
    table.className = 'table table-striped'
    table.innerHTML = `
    <thead>
    <tr>
    <th scope="col">Код товара</th>
    <th scope="col">Наименование</th>
    <th scope="col">Закупочная цена (руб)</th>
    <th scope="col">Розничная цена (руб)</th>
    <th scope="col">Сумма продаж (руб)</th>
    <th scope="col">Продано всего (шт)</th>
    <th scope="col">Прибыль (руб)</th>
    <th scope="col">Наценка (%)</th>
    </tr>
    </thead>
    `
    const tbodyProfit = document.createElement('tbody');
    for(let i = 0; i < result.rows.length; i++){
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${result.rows[i].assortment.code}</th>
        <td>${result.rows[i].assortment.name}</td>
        <td>${result.rows[i].sellCost / 100}</td>
        <td>${result.rows[i].sellPrice / 100}</td>
        <td>${result.rows[i].sellSum / 100}</td>
        <td>${result.rows[i].sellQuantity}</td>
        <td>${result.rows[i].profit / 100}</td>
        <td>${Math.round(result.rows[i].margin * 100)}</td>
        `
        tbodyProfit.appendChild(tr);
        table.appendChild(tbodyProfit)
        kingDiv.appendChild(table)
    }
})



reportDWM.addEventListener('click', async (event) => {
    event.preventDefault();
    kingDiv.innerHTML = "";
    valetDiv.innerHTML= '';
    home.innerHTML= '';
    const ul = document.createElement('ul');
    const arr = ['За день','За неделю','За месяц']
    const arr2 = ['day', 'week', 'month'];
    ul.style.margin = "0";
    ul.style.padding = "4px";
    for(let i = 0; i < 3; i++){
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.className = "btn btn-outline-primary"
        button.id = arr2[i]
        button.type = "button";
        button.innerHTML = arr[i]
        li.style.display = "inline";
        li.style.marginRight = "5px";
        li.appendChild(button)
        ul.appendChild(li)
    }
    kingDiv.appendChild(ul);

    const day = document.querySelector('#day');
    day.addEventListener("click", async (event) => {
        valetDiv.innerHTML= '';
        event.preventDefault();
        const response = await fetch('/day', {
            method: "GET",
            headers: {
                "Content-type" : "application/json",
            },
        })
        const result = response.json()
        result.then((el) => {
           const time = Date();
            const h3 = document.createElement('p');
            h3.innerHTML = `<p class="fs-4">Дата: ${time}</p>`;
            valetDiv.appendChild(h3);
            const p = document.createElement('p');
            p.innerHTML = `<p class="text-primary">Общая сумма продаж: ${el.sales.amount / 100} руб.</p>`
            valetDiv.appendChild(p)
            const p1 = document.createElement('p');
            p1.innerHTML = `<p class="text-success">Количество продаж: ${el.sales.count}</p>`
            valetDiv.appendChild(p1)
        })
    })

    const week = document.querySelector('#week');
        week.addEventListener('click', async (event) => {
            valetDiv.innerHTML= '';
            event.preventDefault();
            const response = await fetch(`/week`, {
                method: "GET",
                headers: {
                    "Content-type" : "application/json",
                },
            })
            const result = response.json()
            result.then((el) => {
                console.log(el)
                const p = document.createElement('p');
                p.innerHTML = `<p class="text-primary">Общая сумма продаж: ${el.sales.amount / 100} руб.</p>`
                valetDiv.appendChild(p)
                const p1 = document.createElement('p');
                p1.innerHTML = `<p class="text-success">Количество продаж: ${el.sales.count}</p>`
                valetDiv.appendChild(p1)
            })
        })

        const month = document.querySelector('#month');
        month.addEventListener('click', async (event) => {
            valetDiv.innerHTML= '';
            event.preventDefault();
            const response = await fetch(`/month`, {
                method: "GET",
                headers: {
                    "Content-type" : "application/json",
                },
            })
            const result = response.json()
            result.then((el) => {
                console.log(el)
                const p = document.createElement('p');
                p.innerHTML = `<p class="text-primary">Общая сумма продаж: ${el.sales.amount / 100} руб.</p>`
                valetDiv.appendChild(p)
                const p1 = document.createElement('p');
                p1.innerHTML = `<p class="text-success">Количество продаж: ${el.sales.count}</p>`
                valetDiv.appendChild(p1)
            })
        })
})
 