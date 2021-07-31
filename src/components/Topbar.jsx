import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Topbar.css'
import {categories} from '../Data'
import { v4 as uuidv4 } from 'uuid';


export default function Topbar() {

    const [textSearch, setTextSearch] = useState('');

    const searchInputChange = useCallback((e) => {
        setTextSearch(e.target.value)
    }, []);

    return (
        <div className="topbar">
            <div className="wrapper">
                <Link className="link" to="/">
                    <span className="wrapper__logo">
                        Closes
                    </span>
                </Link>
                <div className="wrapper__category">
                    <Category/>
                </div>
                {/* <TextField css = {{maxWidth:'400px', borderRadius: '32px', padding: '0px 12px 0px 12px', margin: '0px 16px 0px 16px'}}
                        className="topbarwrapper__search"
                        placeholder="I want to find ..."
                        elemBeforeInput = {
                            <i className="fas fa-search"></i>                        }
                        elemAfterInput = {textSearch&&
                            <button className="topbarwrapper__search--button" onClick = {() => {setTextSearch('')}}>
                                <i className="fas fa-eraser"></i>
                            </button>
                        }
                        value = {textSearch}
                        onChange = {searchInputChange}>
                    </TextField> */}
                <div className="topright">
                    <Link className="link" to="/heart">
                        <div className="topright__item">
                            <i className="fas fa-search"></i>
                            <span>3</span>
                        </div>
                    </Link>

                    <Link className="link" to="/cart">
                        <div className="topright__item">
                            <i className="fas fa-shopping-cart"></i>
                            <span>3</span>
                        </div>
                    </Link>
                    <Link className="link" to="/user">
                        <div className="topright__item">
                            <i className="fas fa-user"></i>
                            <span>3</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Category = () => {
    const [iColumnLeft, setIColumnLeft] = useState(0);
    const [iColumnCenter, setIColumnCenter] = useState(0);
    
    return (
        <ul>
            {categories.map(category => (
                <li className='wrapper__li' onMouseLeave={() => {setIColumnLeft(0); setIColumnCenter(0);}}>
                    <a  key = {uuidv4()} href="javascript:void(0);">
                        <span>
                            {category.name}
                        </span>
                    </a>
                    <div className="dropdown">
                        <h1>{category.name}</h1>
                        <div>
                            <div className="dropdown__columnleft">
                                <ul>
                                    {category.items.map((item, i) =>
                                        <li className = {i===iColumnLeft ? 'dropdown__li--active': ''} onMouseEnter = {() => setIColumnLeft(i)}>
                                            <a key={uuidv4()} href="javascript:void(0);">
                                                <span>
                                                    {item.name}
                                                </span>
                                            </a>
                                        </li>)}
                                </ul>
                            </div>
                            <div className='dropdown__columncenter'>
                                <ul>
                                    {category.items[iColumnLeft].products.map((item, i) =>
                                        <li className={i === iColumnCenter ? 'dropdown__li--active' : ''} onMouseEnter={() => setIColumnCenter(i)}>
                                            <a key={uuidv4()} href="javascript:void(0);">
                                                <span>
                                                    {item.name}
                                                </span>
                                            </a>
                                        </li>)}
                                </ul>
                            </div>
                            <div className="dropdown__columnright">

                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
