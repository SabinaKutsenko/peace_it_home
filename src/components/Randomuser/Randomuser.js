import React, { Component } from 'react';

import classes from "./Randomuser.less";

class Randomuser extends Component {
	state = {
		user: {},
		activeTitle: '',
		activeValue: '',
	}

	async componentDidMount() {
		try {
			let result = await fetch('https://randomuser.me/api/');

			result = await result.json();

			const mainInfo = result.results[0];
			const birthday = mainInfo.dob.date;

			this.setState({
				user: {
					gender: mainInfo.gender,
					picture: mainInfo.picture.large,
					nameFirst: mainInfo.name.first,
					nameLast: mainInfo.name.last,
					email: mainInfo.email,
					birthday: `${birthday.substr(8, 2)}/${birthday.substr(5, 2)}/${birthday.substr(0, 4)}`,
					location: mainInfo.location.street,
					phone: mainInfo.phone,
					pass: mainInfo.login.password
				}
			});
		} catch (e) {
			console.log(e);
		}
	}
	changeInfo = (e) => () => {
		this.setState({
			activeLable: e.lable,
			activeTitle: e.title,
			activeValue: e.value
		});
	}

	render() {
		const { user, activeTitle, activeValue, activeLable } = this.state;
		const { picture, nameFirst, nameLast, email, birthday, location, phone, pass } = user;

		return (
			<div className={`${classes.randomuserPage}`}>
				<h1>RANDOM USER GENERATOR</h1>
				<div className={`${classes.block} container`}>

					<div className={classes.details}>
						<div className={classes.detailsUserPhoto}>
							<img src={picture} />
						</div>
						<div className={classes.detailsUserTitle}>
							{ (activeTitle !== '') ? activeTitle : "Hi, My name is"}
						</div>
						<div className={classes.detailsUserValue}>
							{ (activeValue !== '') ? activeValue : (`${nameFirst} ${nameLast}`) }
						</div>
					</div>

					<ul className={classes.valuesList}>
						<li
							className={(activeLable == "name")  ? classes.active : ''}
							onMouseOver={this.changeInfo({ lable: "name", title: "Hi, My name is", value: `${nameFirst} ${nameLast}` })}
							data-label="name"
						/>
						<li
							className={(activeLable == "email")  ? classes.active : ''}
							onMouseOver={this.changeInfo({ lable: "email", title: "My email address is", value: email })}
							data-label="email" data-caps="false"
						/>
						<li
							className={(activeLable == "birthday")  ? classes.active : ''}
							onMouseOver={this.changeInfo({ lable: "birthday", title: "My birthday is", value: birthday })}
							data-label="birthday"
						/>
						<li
							className={(activeLable == "location") ? classes.active : ''}
							onMouseOver={this.changeInfo({ lable: "location", title: "My address is", value: location })}
							data-label="location"
						/>
						<li
							className={(activeLable == "phone")  ? classes.active : ''}
							onMouseOver={this.changeInfo({ lable: "phone", title: "My phone number is", value: phone })}
							data-label="phone"
						/>
						<li
							className={(activeLable == "pass")  ? classes.active : ''}
							onMouseOver={this.changeInfo({ lable: "pass", title: "My password is", value: pass })}
							data-label="pass" data-caps="false"
						/>
					</ul>

				</div>
			</div>
		);
	}
}

export default Randomuser;
