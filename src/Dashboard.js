import React from 'react'
import App from './App'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'

function Erying(){
	return <h2>二营</h2>
}

function Qking(){
	return <h2>骑兵连</h2>
}

@connect(
	state=>state.auth,
	{ logout }
)
class Dashboard extends React.Component{
	constructor(props){
		super(props)

	}
	render(){
		const match = this.props.match
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const app = (
			<div>
				<h1>独立团</h1>
				{this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
				<ul>
					<li>
						<Link to={`${match.url}`}>一营</Link>
					</li>
					<li>
						<Link to={`${match.url}/erying`}>二营</Link>
					</li>
					<li>
						<Link to={`${match.url}/qking`}>骑兵连</Link>
					</li>
				</ul>
				<Route path={`${match.url}`} exact component={App}></Route>
				<Route path={`${match.url}/erying`} component={Erying}></Route>
				<Route path={`${match.url}/qking`} component={Qking}></Route>
			</div>
		)
		return this.props.isAuth ? app : redirectToLogin
	}
}

export default Dashboard