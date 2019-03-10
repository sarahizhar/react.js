import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//var style= {
//	backgroundColor: 'Orange',
//	color: 'white',
  //  fontFamily: 'Arial',

//}
//const title=React.createElement('h1',{id:'title',className:'header', style:style},'Hello World')
//class Message extends React.Component{
//	render(){

//return(	<div >
//<h1 style={{color:this.props.color}}>{this.props.msg}</h1>
//<p1>i will check back in {this.props.minutes}minutes</p1>
//</div>
//)
//}
//}
//let skidata={total:50, powder:20, backcountry:10}

//const getpercent=decimal=> {return decimal*100 + '%'}
//const getcalc=(total,powder)=> {return getpercent(total/powder)}
//const Skidaycounter=({total,powder,backcountry})=> {return(
//	<section>
//	<div>
//	<p>Total days: {total} days</p>
//	</div>
//	<div>
//	<p>Powder days: {powder}days</p>
//	</div>
	//<div>
	//<p>BackCountry:{getcalc(total,powder)}</p>
//	</div>
//</section>
let Booklist=[
	{"title":"sun rise", "name":"jonson", "page":50},
	{"title":"moon", "name":"jack", "page":20},
	{"title":"planets", "name":"amma", "page":350}
	]
	//)}
	const Book =({title,name,pages})=>{
		return(
			<section>
			<h1>Title: {title}</h1>
			<p>Author: {name}</p>
			<p>pages: {pages}</p> 
            </section>
		)}
class Library extends React.Component
{ constructor(props)
	{super(props)
		this.state={open:true}
this.toggleOpenClosed=this.toggleOpenClosed.bind(this)
	}

		toggleOpenClosed(){
			this.setState(prevState=>({open:!prevState.open}))
		}
	render(){ const {Books}=this.props
	return(
		<div>
		<h1>This library is {this.state.open?'open':'close'}</h1>
           <button onClick={this.toggleOpenClosed}>change</button>

            {Books.map((bingo,i)=> <Book key={i} title={bingo.title} name={bingo.name} pages={bingo.pages}/>)}
		</div>)
}
}
ReactDOM.render(<Library Books={Booklist}/>,document.getElementById('root'));


//serviceWorker.unregister();
