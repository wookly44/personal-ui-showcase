const About3 = () => {
    let infos = [
        {
            type: 'Performance',
            text: '90+ (애니메이션 최적화를 통한 TBT 단축)',
        },{   
            type: 'Accessibility',
            text: '95+ (스크린 리더 및 키보드 네비게이션 준수)',
        },{
            type: 'Best Practices',
            text: '100 (최신 웹 표준 및 보안 가이드라인 반영)',
        },{
            type: 'SEO',
            text: '100 (검색 엔진 최적화 및 메타태그 구성 완료)',
        }
    ]
    let buttons = [
        {
            text: 'View Source Code',
            Img: 'assets/git_bg.png',
            link: 'https://github.com/wookly44/Portfolio'
        },{   
            text: 'Go to Main Portfolio',
            Img: 'assets/web.png',
            link: ''
        }
    ]

    return (
        <ul className="AboutWrap About3">
            <li className="AboutTit">
                <p>ABOUT</p>
                <span>Site Log</span>
            </li>
            <li className="AboutInfo">
                <p className="pinkTit">PERFORMANCE & QUALITY METRICS</p>
                {infos.map((info, index)=>(
                    <p key={index}>
                        <img src='assets/check.png' alt="icon"/>
                        <b>{info.type} : </b>{info.text}
                    </p>
                ))}
            </li>
            <li className="AboutInfo">
                {buttons.map((info, index)=>(
                    <a href={info.link} target='_blank' className="linkBtn" key={index}>
                        <img src={info.Img} alt="icon"/>
                        <p>{info.text}</p>
                        <img className='snsArrow' src="assets/arrow.png" alt="arrow"/>
                    </a>
                ))}
            </li>
        </ul>
    )
}

export default About3;