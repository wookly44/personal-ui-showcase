import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { toyData } from "../../data";
import Button from '../../components/Button';
import ToyTitle from './ToyTitle'

const Toy = ()=>{
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    
    const resizeListener = () => {
        setInnerWidth(window.innerWidth);
    };

    const toyWrapRef = useRef(null);

    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
    
        useEffect(() => {

            window.addEventListener("resize", resizeListener);
            
            if(innerWidth > 750 ){ 
            gsap.registerPlugin(ScrollTrigger);
    
            const horizontal = horizontalRef.current;
            const sections = sectionRef.current;
    
                let scrollTween = gsap.to(sections, {
                    xPercent: -98 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizontal,
                        start: "top 56px",
                        end: () => "+=" + horizontal.offsetWidth,
                        pin: true,
                        scrub: 1,
                        markers: false,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                    }
                })

                return () => {
                    window.removeEventListener("resize", resizeListener);
                    scrollTween.kill();
                };
            }else{
                null
            }
        }, []);

        
    return(
    <div id="TOY" className="Toy" ref={horizontalRef}>
        <div>
            <div ref={(el) => (sectionRef.current[0] = el)}>
                <ToyTitle/>
            </div>
            <div className="ToyWrap" ref={toyWrapRef}>
                {toyData.map((data, id)=>
                    <ul className="ToyInfo" ref={(el) => (sectionRef.current[id+1] = el)} key={id}>
                        <li className="ToyTitle">
                            <p>{data.siteName}</p>
                            <span className="point">{data.teamName}</span>
                            <span>
                                {data.date}
                                <br />{data.date2}
                            </span>
                            <span>{data.text}</span>
                            <div className='btnWrap'>
                                <Button name={data.btn1} link={data.btn1Link} img={data.btn1Img} />
                                <Button name={data.btn2} link={data.btn2Link} img={data.btn2Img} />
                            </div>
                        </li>
                        <li className="ToyImg" style={{backgroundImage : `url(${data.bgImg})`}}></li>
                    </ul>
                )}
            </div>
        </div>
    </div>
    )
}

export default Toy;