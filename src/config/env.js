const env = {
    emailjs: {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        // SECURITY NOTE: This Public Key is exposed to the browser. 
        // Ensure you configure 'Allowed Domains' (Whitelist) in your EmailJS Dashboard 
        // to prevent unauthorized usage from other domains.
    },
};

export const validateEnv = () => {
    const required = [
        'REACT_APP_EMAILJS_SERVICE_ID',
        'REACT_APP_EMAILJS_TEMPLATE_ID',
        'REACT_APP_EMAILJS_PUBLIC_KEY'
    ];

    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0) {
        console.warn(`Missing environment variables: ${missing.join(', ')}`);
        return false;
    }
    return true;
};

export default env;
