const React = require('react');
const Layout = require('./Layout');

module.exports = function Login(){
    return(
        <Layout>
    <form method='post' action='/login' className='classForm'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Login</label>
    <input type="email" name="login" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
 </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
    </form>
        </Layout>
    )
}