const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({newUser, result}){
    console.log(result)
    return(
        <Layout newUser={newUser}>

    <div className='kingDiv'/>
    <div className='valetDiv' />
    <div className='home'>
        <h1 className='text-success' id='cash'>Отчёт Деньги:</h1>
    <h3 class="text-primary" id='asdf'>Деньги</h3>
    <h4 class="text-danger">{result.rows[0].balance / 100 + result.rows[1].balance/100} p.</h4>
        <h1 className='text-secondary'>________________________________</h1>
    <h3 class="text-primary" id='a'>Организация</h3>
    <h4 class="text-success" id='name'>ТД "Гамбит"</h4>
    <h3 class="text-primary" id='asdf'>Остаток</h3>
    <h4 class="text-danger">{result.rows[0].balance / 100 + result.rows[1].balance/100} p.</h4>
    </div>
        </Layout>
    )
}