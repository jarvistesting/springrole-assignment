import React from 'react';

const FooterChild = ({data}) => {
    return (
        data.map((item, index) => {
            return (
                <a href={item.link} target="_blank" className="footer-text" key={`footer_connect_${index}`}>{item.text}</a>
            )
        })
    )
}

export default FooterChild;