const ModalLesson = () => {
  return (
    <div>
        <h2>Book trial lesson</h2>
        <p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p> 
        <div><img src="#" alt="avatar" /> <p>Your teacher</p> <p>teacher name</p></div>
        <form name="form">
            <p>What is your main reason for learning English?</p>
            <label>Career and business
                <input type="radio" name="reason" value="Career and business"/>
            </label>
            <label>Lesson for kids
                <input type="radio" name="reason" value="Lesson for kids"/>
            </label>
            <label>Living abroad
                <input type="radio" name="reason" value="Living abroad"/>
            </label>              
            <label>Exams and coursework
                <input type="radio" name="reason" value="Exams and coursework"/>
            </label>
            <label>Culture, travel or hobby
                <input type="radio" name="reason" value="Culture, travel or hobby"/>
            </label>
            <label>
                <input type="text" name="name" placeholder="Full Name"/>  
            </label>  
            <label>
                <input type="email" name="email" placeholder="Email"/>  
            </label> 
            <label>
                <input type="tel" name="phone" placeholder="Phone number"/>  
            </label> 
            <button type="submit">Book</button>  
        </form>
    </div>
  )
}

export default ModalLesson