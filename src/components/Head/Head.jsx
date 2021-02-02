import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title }) => (
  <NextHead>
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>{title}</title>
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
