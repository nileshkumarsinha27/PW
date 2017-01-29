import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import Navigation from '../navigation';
import ImageWithText from '../imagewithtext'; 
export default class Layout extends Component{
	render(){
		return(<div>
					<Navigation />
					<ImageWithText />
				</div>
			);
	}
}