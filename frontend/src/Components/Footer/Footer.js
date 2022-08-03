import './Footer.css'

const Footer = () => {

const footerStyle = {
    position: "absolute",
    left: "0",
    bottom: "5rem",
    width: "100%",
    textAlign: "center"
}

    return (
        <div className="footer" style={footerStyle}>
            <p>Made with &#128151; and &#127861; by <a href="https://github.com/LervinU" target="_blank" rel="noreferrer">LervinU</a></p>
        </div>
    );
}

export default Footer;