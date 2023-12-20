import heroImg from '../../images/blockhero.png'

const Home = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Unlock your potential with the best <span>language</span> tutors</h1>
                    <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                    <a href="/teachers">Get started</a>
                </div>
                <img src={heroImg} alt="Main images" />
            </div>
            <ul>
                <li><span>32,000 +</span>Experienced <br/>tutors</li>
                <li><span>300,000 +</span>5-star tutor <br/>reviews</li>
                <li><span>120 +</span>Subjects <br/>taught</li>
                <li><span>200 +</span>Tutor <br/>nationalities</li>
            </ul>
        </>
    )   
}

export default Home