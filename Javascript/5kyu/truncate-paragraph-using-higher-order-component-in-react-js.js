// Kata link: https://www.codewars.com/kata/truncate-paragraph-using-higher-order-component-in-react-js


const React = require('react');

const withTruncateParagraph = (Component) => {

    const C = ({ textLength = 10, children, ...addProps }) => {
        const string = textLength === -1 ? children : `${children.substr(0, textLength)}...`;
        return <Component {...addProps}>{string}</Component>;
    }

    C.displayName = `WithTruncateParagraph(${Component.displayName || Component.name || 'Component'})`;
    return C;

};
