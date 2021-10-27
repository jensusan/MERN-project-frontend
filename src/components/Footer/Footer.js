import {Content} from "./Footer-style";

const Footer = () => {
    return (
        <Content>
            <div>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="fa fa-facebook"><i></i></a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener" className="fa fa-twitter"><i></i></a>
                <a href="https://www.pinterest.com" target="_blank" rel="noreferrer noopener" className="fa fa-pinterest"><i></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" className="fa fa-instagram"><i></i></a>
            </div>
            <p>Images and text content lovingly borrowed from Stevemadden.com</p>
        </Content>
    )
};

export default Footer;