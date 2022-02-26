import "./About.css";

const About = () => {
    return (
        <section id="about-page">
            <div className="aboutBlog">
                <h1 id="about-blog-header">About Blog</h1>
                <div className="centerInfo">
                    <img src="/images/camera_logo.png" alt="Photography Blog's logo" />
                    <h2>Photography Blog</h2>
                    <p>Blog for sharing professional photos</p>
                </div>
            </div>
            <div className="aboutUs">
                <h1 id="about-us-header">About Us</h1>
                <div className="centerInfo">
                    <img src="/images/me.jpg" alt="Beatris M. Borislavova" />
                    <h2>Beatris M. Borislavova</h2>
                    <p>Creator and owner of the blog</p>
                </div>
            </div>
        </section>
    );
};

export default About;