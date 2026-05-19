import Button from '../components/Button';
import git from '../../public/assets/git2.png';
import mail from '../../public/assets/mail.png';

const Footer = () => {
    const buttons = [
        {
            text: 'GitHub',
            url: 'https://github.com/wookly44'
        },
        {   
            text: 'Email Me',
            url: '#;'
        }
    ];

    const emailAddress = "keumju0409@gmail.com";

    const handleCopyEmail = (e) => {
        e.preventDefault(); 

        window.navigator.clipboard.writeText(emailAddress)
            .then(() => {
                alert("이메일 주소가 복사되었습니다.");
            })
            .catch((err) => {
                console.error("복사 실패:", err);
            });
    };
    
    return (
        <footer>
            <ul>
                <li className='footTit'>CONNECT</li>
                <li className='footTxt'>
                    <span>효율적인 UI 개발과 웹 퍼블리싱 협업을 제안해 주세요.</span><br />
                    생산적인 방향의 기술 소통은 <span>언제든 환영합니다.</span>
                </li>
                <li className='btnWrap'>
                    <Button name={buttons[0].text} link={buttons[0].url} img={git} />
                    <Button 
                        name={buttons[1].text} 
                        link={buttons[1].url} 
                        img={mail} 
                        click={handleCopyEmail} 
                    />
                </li>
            </ul>
            <p className='footBgtxt'>INTERACTIVE</p>
        </footer>
    );
};

export default Footer;