/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
    }

     /**
     * Fetch data from backend by using search word list.
     * In this function, make a post request and the parameter is word list which is splitted by space from searchtext
     * @memberof App
     * @param keywords string - the string from search input in Menu component
     * and this is splitted into keyword list
     */
   

    handleSearch = (keywords) =>{
        if(keywords === ''){
            this.setState({ products: []})
            return
        }
        keywords = keywords.split(' ')
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ searchTextList:keywords })
        };
        fetch('http://localhost:3035/search', options)
        .then(response => response.json())
        .then(data => {
            this.setState({ products: data.data})})
    }
   
    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        const {products} = this.state
        return (
            <div className="App">
                <Menu onSearch = {this.handleSearch}/>
                <Home products = {products}/>
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
