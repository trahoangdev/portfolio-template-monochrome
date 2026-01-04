import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/actions';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Home.css';

function Home() {
    const scrollTab = useRef();
    const cardRef = useRef(null);
    useScrollAnimation(scrollTab);
    const dispatch = useDispatch();

    // Reset active tab to home when mounting this component
    React.useEffect(() => {
        dispatch(changeTabActive('home'));
        window.scrollTo(0, 0); // Ensure we start at the top
    }, [dispatch]);

    const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
    const [glare, setGlare] = React.useState({ x: 50, y: 50, opacity: 0 });
    const [imageLoaded, setImageLoaded] = React.useState(false);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
        setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setGlare(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <section ref={scrollTab} className='home' id='home'>
            <div className="content">
                <div className="name">
                    MY NAME IS <span>TRA HOANG TRONG</span>
                </div>
                <div className="des">
                    Passionate about creating beautiful, functional web applications that solve real-world problems. I blend creativity with technical expertise to build exceptional digital experiences.
                </div>

                <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                    Download My CV
                </a>
            </div>
            <div className="avatar">
                <div
                    className="card"
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    }}
                >
                    {/* Glare Effect */}
                    <div
                        className="glare"
                        style={{
                            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.3) 0%, transparent 80%)`,
                            opacity: glare.opacity
                        }}
                    ></div>

                    {!imageLoaded && <div className="skeleton-loading" style={{ height: '450px', width: '100%', borderRadius: '20px' }}></div>}
                    <img
                        src="/avatar.webp"
                        alt="Avatar"
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                    <div className="info">
                        <div>Developer</div>
                        <div>VietNamese</div>
                        <div>07/19/2004</div>
                        <div>Male</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home
