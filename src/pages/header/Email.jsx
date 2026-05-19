import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Email = ({setOpen, setMail}) => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_1d6xp8i", "template_yeplz37", form.current, "F7np99J4CLPr6-fKf").then(
      (result) => {
        alert("성공적으로 이메일이 전송되었습니다.");
        setOpen(false)
        setMail(false)
      },
      (error) => {
        alert("이메일이 전송이 실패되었습니다. 다시 시도해주세요.");
      },
    );
  };
  
  const titRef = useRef();
  const emailRef = useRef();
  const txtRef = useRef();


  return (
    <form className='mailForm' ref={form} onSubmit={sendEmail}>
        <h1>Email Me :)</h1>
        <div>
            <label>문의 제목</label>
            <input type="text" name="ask_title" ref={titRef}  placeholder='제목을 작성해 주세요'/>
        </div>
        <div>
            <label>답변 받으실 이메일</label>
            <input type="email" name="user_email" ref={emailRef} placeholder='ex)example@google.com'/>
        </div>
        <div>
            <label>문의 내용</label>
            <textarea name="message" ref={txtRef} placeholder='내용을 작성해 주세요'/>
        </div>
        <div>
          <input className='mailBtn' type="submit" value="Send"/>
        </div>
    </form>
  );
};

export default Email;