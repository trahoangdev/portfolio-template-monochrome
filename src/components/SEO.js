import React from 'react';
import { Helmet } from 'react-helmet-async';
import { config } from '../data/config';
import PropTypes from 'prop-types';

const SEO = ({ title, description, type = 'website' }) => {
    const siteTitle = config.seo?.title || config.name;
    const siteDescription = config.seo?.description || config.description;
    const siteKeywords = config.seo?.keywords || '';
    const siteUrl = window.location.origin;
    const siteImage = siteUrl + (config.seo?.ogImage || '/avatar.webp');

    const currentTitle = title ? `${title} | ${config.name}` : siteTitle;
    const currentDescription = description || siteDescription;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{currentTitle}</title>
            <meta name='description' content={currentDescription} />
            <meta name='keywords' content={siteKeywords} />

            {/* Open Graph / Facebook */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={currentTitle} />
            <meta property='og:description' content={currentDescription} />
            <meta property='og:image' content={siteImage} />

            {/* Twitter */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={currentTitle} />
            <meta name='twitter:description' content={currentDescription} />
            <meta name='twitter:image' content={siteImage} />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
};

export default SEO;
