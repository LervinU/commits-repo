import './PagesButton.css';

const PagesButton = (props) => {
    return (
        <div className="text-center"> 
            <div className="mt-5 btn-group btnGroup " role="group">
                <button type="button" className="btn" onClick={props.decrease} disabled={props.disableDecr}>Newer</button>
                <button type="button" className="btn" onClick={props.increase} disabled={props.disableIncr}>Older</button>
            </div>
        </div>
    );
};

export default PagesButton;