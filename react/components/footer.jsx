const React = require('react');

const Footer = React.createClass({

  render: function() {
    let text = "Site Designed & Built by Travis O'Neill & Daniel 'Coop' Cuperman"
    return (
      <div className="footer-column">
          <p className="by-dc-to">{text}</p>
          <ul className="connect-row">
            <strong className="heading">GITHUB</strong>
            <li className="git">
              <a className="icon-github-circled" href="https://github.com/travisoneill/benchmark" target='_blank'>
              </a>
            </li>
          </ul>
      </div>
    );
  }

});

module.exports = Footer;
