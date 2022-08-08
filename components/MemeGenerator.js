import React, { Component } from 'react';
import * as s from '../styles/MemeGenerator.module.css';
import { handleAddMeme } from '../pages/memes/[id]';

const MEME_IMAGES = [
	'http://i.imgflip.com/1bij.jpg',
	'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/2019-03/106.webp',
	'https://pyxis.nymag.com/v1/imgs/f22/cee/18a5c624814d1fee69692841d2f92e89ad-21-homer-bushes-lede.rhorizontal.w700.jpg',
	'https://i.pinimg.com/736x/a5/88/a2/a588a2c809f552725c787ef1bc153f27.jpg',
	'https://i.pinimg.com/originals/62/1b/ad/621bad43bed9f1277ff9823784b26005.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIArOtM7jOARJFduOb77RHVfsDw1UINb1dw&usqp=CAU',
	'https://i.imgflip.com/4/1ihzfe.jpg',
	'https://relatably.com/m/img/empty-memes/1bgw.jpg',
	'https://www.memesmonkey.com/images/memesmonkey/65/65447a3b27639d268c43945eea5f3f41.jpeg',
	'https://i.imgflip.com/c4d8p.jpg',
];

class MemeGenerator extends Component {
	constructor() {
		super()
		this.state = {
			topText: "Top text goes here",
			bottomText: "Bottom text goes here",
			randomImg: undefined,
			allMemeImgs: MEME_IMAGES,
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMemeImg = this.state.allMemeImgs[randNum];
		this.setState({ randomImg: randMemeImg })
	}

	handleSubmit(event) {
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMemeImg = this.state.allMemeImgs[randNum].url
		this.setState({ randomImg: randMemeImg })

    const doc = {
      top_text: this.state.topText,
      bottom_text: this.state.bottomText,
      img_url: this.state.randomImg,
    };
		handleAddMeme(doc);
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<>
				<div className={s.meme}>
					<img src={this.state.randomImg} alt='' />
					<h2 className={s.top}>{this.state.topText}</h2>
					<h2 className={s.bottom}>{this.state.bottomText}</h2>
				</div>
				<form className={s.memeForm}>
					<div>
						<b>TOP TEXT:</b> &nbsp;
						<input
							className={s.input}
							type='text'
							name='topText'
							placeholder='Top Text'
							value={this.state.topText}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<b>BOTTOM TEXT:</b> &nbsp;
						<input
							className={s.input}
							type='text'
							name='bottomText'
							placeholder='Bottom Text'
							value={this.state.bottomText}
							onChange={this.handleChange}
						/>
					</div>
				<button className="font-semibold bg-cyan-500 hover:bg-cyan-400 text-gray-50 px-6 py-2 rounded-full cursor-pointer">Generate Meme</button>
			</form>
		</>
	)}
}

export default MemeGenerator