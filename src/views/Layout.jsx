const React = require('react');

module.exports = function Layout({newUser, children}){
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href='/css/application.css'></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
            <title>Document</title>
        </head>
        <body>
            {newUser ?
            <div class="shadow p-3 mb-5 bg-body rounded">
        <header className='z'>
            <li><a href='/'><img src="https://www.moysklad.ru/local/templates/moysklad-new/images/header-logo.svg" alt="Домой" /></a></li>
        <li><a><button type="button" className="btn btn-link" id='reportDWM'>Показатели</button></a></li>
        <li><a><button type="button" className="btn btn-link" id='reportTO'>Обороты по товарам</button></a></li>
        <li><a><button type="button" className="btn btn-link" id='reportProfit'>Отчёт прибыльности</button></a></li>
        <li><a href='/logout'><button type="button" className="btn btn-link">Выйти</button></a></li>
        </header>
            </div>
        :
        " "
        }
            { children }
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        <script defer src="/js/application.js" />
        </body>
        </html>
    )
}