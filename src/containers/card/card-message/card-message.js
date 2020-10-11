import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getMessages, deleteMessage, setNewMessage} from "../../../store/actions/general-actions";
import styles from './card-message.module.scss';
import moment from 'moment';
import {isEmpty} from 'lodash';

const CardMessage = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.general);

    const [isTyping, setIsTyping] = useState(false);
    const [value, setValue] = useState('');


    useEffect(() => {
      dispatch(getMessages());
    },[state.message]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        let messageData = {
            user: state.user,
            time: moment().format("YYYY-DD-MM HH:mm:ss"),
            message: e.target.message.value
        }
        dispatch(setNewMessage(messageData));
        setIsTyping(false)
        setValue('')
    }

    const scrollToBottom = () => {
        const objDiv = document.getElementById('forScroll');
        objDiv.scrollTop = objDiv.scrollHeight;
    };

    const newMessageTyping = (e) => {
        if(isEmpty(e.target.value)) {
            setIsTyping(false)
        } else {
            setIsTyping(true)
        }
    }

    const handleDeleteMessage = (id) => {
        dispatch(deleteMessage(id));
    }

    const mockUpAlert = (text) => {
        alert(text)
    }

    return (
      <div className={styles.container}>
        <div className={styles.fechaContainer}>
            <h6>{moment().format("YYYY-DD-MM")}</h6>
        </div>
        <ul className={styles.messageContainer} id="forScroll">
            {state.messages.map((data, i)=> {  
                let rightNow = moment();
                let dateTime = moment(data.time, "YYYY-DD-MM HH:mm:ss");

                let renderEdit = (moment.duration(rightNow.diff(dateTime)).asMinutes()<=5) &&
                <div onClick={()=>handleDeleteMessage(i)}>
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
                return (
                    <li className={styles.message} key={i}>
                        <div className={styles.userImage}>
                            <img alt="profile" src={data.user.profileImg}/>
                        </div>
                        <div className={styles.textContainer}>
                            <h2>{data.user.name}</h2>
                            <h6>{data.message}</h6>
                        </div>
                        {renderEdit}
                    </li>
                )
            })}
            { (isTyping) &&
                <li className={styles.message}>
                    <div className={styles.userImage}>
                        <img alt="profile" src={state.user.profileImg}/>
                    </div>
                    <div className={styles.textContainer}>
                        <h2>{state.user.name}</h2>
                        <h6>Typing...</h6>
                    </div>
                </li>
            }
        </ul>
        <div className={styles.sendContainer}>
            <form onSubmit={handleSubmit}>
                <i onClick={()=>mockUpAlert('Share with other user')} className="fa fa-share" aria-hidden="true"></i>
                <input 
                    name="message" 
                    data-testid="message"
                    placeholder="Start typing your message here..."
                    onChange={(e)=> {
                        setValue(e.target.value)
                        newMessageTyping(e)
                        scrollToBottom()
                    }}
                    value={value}
                />
                <i onClick={()=>mockUpAlert('classic file input')} className="fa fa-paperclip" aria-hidden="true"></i>
                <button type="submit" disabled={isEmpty(value) && 'disabled'}>Send</button>
            </form>
        </div>
        
      </div>
    );
};

export default CardMessage;