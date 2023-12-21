import React, { useState, useEffect } from 'react';
import  database  from '../../../firebase';
import { ref, get } from 'firebase/database';
import ModalLesson from '../ModalLesson/ModalLesson';

const TeachersList = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [error, setError] = useState(null);
  const [openTeachers, setOpenTeachers] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachersRef = ref(database, 'teachers');
        const snapshot = await get(teachersRef);
        const data = snapshot.val();
        setTeachersData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    
    fetchData();
  }, []);

  const handleReadMore = (teacherId) => {
    setOpenTeachers((prevOpenTeachers) => ({
      ...prevOpenTeachers,
      [teacherId]: !prevOpenTeachers[teacherId],
    }));
  };

  const handleShowModal = () => {
    setShowModal(true)
  };

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!teachersData) {
    return <div>Loading...</div>;
  }
  console.log(teachersData)

  return (
    <div>
      <ul>
        {teachersData.map((teacher, index) => {
          const isTeacherOpen = openTeachers[index];
          return <li key={index}>
            <div>
              <img src={`${teacher.avatar_url}`} alt={`avatar ${teacher.name} ${teacher.surname}`} width='96px' />
              <div>
                <div>
                  <p>Languages</p>
                  <ul>
                    <li>Lessons online</li>
                    <li>Lessons done: {teacher.lessons_done}</li>
                    <li>Rating: {teacher.rating}</li>
                    <li>Price / 1 hour: {teacher.price_per_hour}$</li>
                  </ul>
                </div>
                <h2>{teacher.name} {teacher.surname}</h2>
                <ul>
                  <li><span>Speaks:</span> {teacher.languages.join(`, `)}</li>
                  <li><span>Lesson Info:</span> {teacher.lesson_info}</li>
                  <li><span>Conditions:</span> {teacher.conditions.join(' ')}</li>
                </ul>
                <button type='button' onClick={() => handleReadMore(index)}>
                  {isTeacherOpen ? 'Close' : 'Read more'}
                </button>
                
                {isTeacherOpen ? (
                  <>
                    <p>{teacher.experience}</p>
                    <ul>
                      {teacher.reviews.map((review, index) => {
                        return <li key={index}><h3>{review.reviewer_name}</h3> <div>{review.reviewer_rating}</div><p>{review.comment}</p></li>
                      })}
                    </ul>
                  </>
                ) : <></>}                        
                <ul>
                  {teacher.levels.map((level, index) => {
                      return <li key={index}>{level}</li>
                  })}
                </ul>
                {isTeacherOpen ? <button type='button' onClick={handleShowModal}>Book trial lesson</button> : <></>}
              </div>
            </div>
            {showModal && (
              <ModalLesson
                teacherName={`${teacher.name} ${teacher.surname}`}
                teacherAvatar={teacher.avatar}
                setShowModal={setShowModal}
              />
            )}
          </li>
        })}
      </ul>
    </div>
  );
};

export default TeachersList;
