import './CommitCard.css';
import moment from 'moment'
import { useState, useEffect } from 'react';


const CommitCard = (props) => {
    const { sha, author } = props.commitObj;
    const [hash, setHash] = useState();

    useEffect(() => {
        setHash(sha.substring(0,7));
    }, [sha])

    const onClickHash = () => {
        navigator.clipboard.writeText(hash);
        setHash("Copied!");
        setTimeout(() => {
            setHash(sha.substring(0,7));
        }, 1000)
        
    }

    return (
            <div className="card mt-1" style={{height: '4.5rem'}}>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <p style={{fontWeight: 'bold', fontSize: '13px'}}>{props.commitObj.message.length > 35 ? `${props.commitObj.message.substring(0, 30)}...`: props.commitObj.message }</p>
                            <div className="row row-cols-auto subtitle">
                                <div className="col my-auto">
                                    <img style={{width: '25px', height: '25px', borderRadius: '10px'}} src={props.commitObj.avatar_url} alt="avatar"/>
                                </div>
                                <div className="col my-auto sub" style={{fontWeight: 'bold', fontSize: '12px'}}>{author.login}</div>
                                <div className="col my-auto sub" style={{fontSize: '12px'}}>committed {moment(props.commitObj.author.date).fromNow()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col my-auto">
                        <div className="card-body text-end">
                            <div className="dCopyHash">
                                 <button className="btnHash" onClick={onClickHash}>{hash}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
    );
}

export default CommitCard;