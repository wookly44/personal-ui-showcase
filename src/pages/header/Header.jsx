import { useState } from 'react';
import { headerNav } from '../../data';

import Email from './Email'

const Header = ()=>{
    let [open, setOpen] = useState(false);
    let [mail, setMail] = useState(false);

    function subOpen(){
        setOpen(open => !open)
        setMail(false)
    }

    return(
        <>
        <nav className={open ? 'navColor' : ''}>
            <ul className="navL">
                <li className="navLogo"><a href='#MAIN'><img src='assets/logo.png'/></a></li>
            </ul>
            {open ? null : 
            <ul className="navInfo">
                {headerNav.map((data, key)=>
                    <li key={key}><a href={data.url}>{data.title}</a></li>
                )}
            </ul>
            }
            <ul className='navR'>
                <li className='navContact' onClick={subOpen}>
                    {open ? 
                    <>
                        <span className='closes'>close</span>
                        <div>
                            <p>X</p>
                        </div>
                    </>
                    :
                    <>
                        <p>CONNECT</p>
                        <div>
                            <p>+</p>
                        </div>
                    </>
                    }
                </li>
                <li className='navHam' onClick={subOpen}>
                    <span className={open ? 'subRotR' : ''}></span>
                    <span className={open ? 'subRotC' : ''}></span>
                    <span className={open ? 'subRotL' : ''}></span>
                </li>
            </ul>
        </nav>
        <div className='subNavHidden'>
        <div className={open ? 'subNavWrap subNavWrapOpen' : 'subNavWrap'}>
            {mail ?
            <div className='emailWrap'>
                <Email setOpen={setOpen} setMail={setMail}/>
            </div>
            :
            <div className={open ? 'subNav subNavOpen' : 'subNav'}>
                <>
                    <ul>
                        {headerNav.map((data, key)=>
                            <li key={key} onClick={()=>setOpen(false)} className='subList'><a href={data.url}>{data.title}</a></li>
                        )}
                    </ul>
                    <div>
                        <p>CONNECT</p>
                        <div className='subNavContactWrap' onClick={()=>setMail(true)}>
                            <div className='subNavContact'>
                                <div>
                                    <p>+</p>
                                </div>
                                <p>Let's Talk</p>
                            </div>
                        </div>
                    </div>
                    <ul className='subMyInfo'>
                        <li className='contactName'>
                            LAB.KEUMJU
                        </li>
                        <li className='contactInfo'>
                            <img src='assets/github.png'/>
                            <p>github.com/wookly44</p>
                        </li>
                        <li className='contactInfo'>
                            <img src='assets/mail.png'/>
                            <p>keumju0409@gmail.com</p>
                        </li>
                    </ul>
                </>
            </div>
            }
        </div>
        </div>
        </>
    )
}

export default Header;