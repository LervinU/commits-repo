import './TopBar.css';

const TopBar = ({name}) => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">{name}</span>
                </div>
            </nav>
        </div>
    );
}

export default TopBar;