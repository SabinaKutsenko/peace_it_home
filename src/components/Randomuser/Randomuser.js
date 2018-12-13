import React, { Component } from 'react';

import classes from "./RandomUser.less";

class RandomUser extends Component {
	state = {
		user: {},
		activeTitle: "Hi, My name is",
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
					picture: mainInfo.picture.large,
					nameFirst: mainInfo.name.first,
					nameLast: mainInfo.name.last,
					email: mainInfo.email,
					birthday: `${birthday.substr(8, 2)}/${birthday.substr(5, 2)}/${birthday.substr(0, 4)}`,
					location: mainInfo.location.street,
					phone: mainInfo.phone,
					pass: mainInfo.login.password
				},
				activeValue: (`${mainInfo.name.first} ${mainInfo.name.last}`)
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

	renderList = (item) => {
		const { activeLable } = this.state;

		return (<li
			key={item[0]}
			className={(activeLable === item[1]) ? classes.active : ''}
			onMouseOver={this.changeInfo({ lable: item[1], title: item[2], value: item[3] })}
			data-label={item[1]}
		        />);
	}

	render() {
		const { user, activeTitle, activeValue } = this.state;
		const { picture, nameFirst, nameLast, email, birthday, location, phone, pass } = user;
		const list = [
			[1, "name", "Hi, My name is", `${nameFirst} ${nameLast}`],
			[2, "email", "My email address is", email],
			[3, "birthday", "My birthday is", birthday],
			[4, "location", "My address is", location],
			[5, "phone", "My phone number is", phone],
			[6, "pass", "My password is", pass],
		];

		if (!this.state.activeValue) {
			console.log(" Please wait");
			return null;
		}

		return (
			<div className={`${classes.randomUserPage}`}>
				<h1>RANDOM USER GENERATOR</h1>
				<div className={`${classes.block} container`}>

					<div className={classes.details}>
						<div className={classes.detailsUserPhoto}>
							<img src={picture} />
						</div>
						<div className={classes.detailsUserTitle}>
							{activeTitle}
						</div>
						<div className={classes.detailsUserValue}>
							{activeValue}
						</div>
					</div>

					<ul className={classes.valuesList}>
						{
							list.map((item) => {
								return this.renderList(item);
							})
						}
					</ul>

				</div>
			</div>
		);
	}
}

export default RandomUser;
