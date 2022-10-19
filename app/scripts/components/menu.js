/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import { debounce } from "lodash"

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor() {
        super();
        this.state = {
            searchVisible: false,
            menuVisible: false,
            text: '',
        };
        this.searchRef = React.createRef()
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            searchVisible: !this.state.searchVisible
        });
    }

    componentDidUpdate() {
        if(this.state.searchVisible) {
            this.searchRef.current.focus()
        }
    }

    debounceSearch = debounce(text => this.props.onSearch(text), 700)


    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        this.debounceSearch(e.target.value)
        this.setState({
            ...this.state, 
            text: e.target.value
        })
    }
    handleMenu(e) {

    }
    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className={!this.state.menuVisible ? "menu":"menu mobile"}>
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav className='menu-nav'>
                            <a href="#" className="menu-nav__item">HOLIDAY</a>
                            <a href="#" className="menu-nav__item">WHAT'S NEW</a>
                            <a href="#" className="menu-nav__item">PRODUCTS</a>
                            <a href="#" className="menu-nav__item">BESTSELLERS</a>
                            <a href="#" className="menu-nav__item">GOODBYES</a>
                            <a href="#" className="menu-nav__item">STORES</a>
                            <a href="#" className="menu-nav__item">INSPIRATION</a>
                        </nav>
                        <div className='menu-tool'>
                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                            <div className="hamburger" onClick={(e)=>this.setState({menuVisible: !this.state.menuVisible})}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(this.state.searchVisible ? "showing " : "") + "search-container"}>
                    <input type="text" value={this.state.text} ref={this.searchRef}  onChange={(e)=>this.onSearch(e)} />
                    <a href="#" onClick={(e) => {
                        this.showSearchContainer(e)
                        this.setState({
                            searchVisible: !this.state.searchVisible,
                            text: ''
                        })
                    }}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
        );
    }


}

// Export out the React Component
module.exports = Menu;