const About2 = () => {
    let infos = [
        {
            type: 'Classification',
            text: 'Independent UI/UX Research & Development',
        },{   
            type: 'Main Framework',
            text: 'React / JavaScript / HTML / CSS',
        },{
            type: 'Core Library',
            text: 'GSAP (ScrollTrigger, Timeline)',
        },{
            type: 'Deployment',
            text: 'GitHub Pages / Vercel',
        }
    ]

    return (
        <ul className="AboutWrap">
            <li className="AboutTit">
                <p>GSAP WORK BY</p>
                <span>KEUMJU</span>
            </li>
            <li className="AboutInfo">
                <h3 className="pinkTit">PROJECT SPEC</h3>
                {infos.map((info, index)=>(
                    <p key={index}>
                        <img src='assets/check.png' alt="icon"/>
                        <b>{info.type} : </b>{info.text}
                    </p>
                ))}
            </li>
        </ul>
    )
}

export default About2;