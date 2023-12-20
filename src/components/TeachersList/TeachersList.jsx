import React, { useState, useEffect } from 'react';
import  database  from '../../firebase';
import { ref, get } from 'firebase/database';

const TeachersList = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [error, setError] = useState(null);

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
                        <button type='button'>Read more</button>
                        <p>{teacher.experience}</p>
                        <ul>
                            {teacher.reviews.map((review, index) => {
                                return <li key={index}><h3>{review.reviewer_name}</h3> <div>{review.reviewer_rating}</div><p>{review.comment}</p></li>
                            })}
                        </ul>                        
                        <ul>
                            {teacher.levels.map((level, index) => {
                                return <li key={index}>{level}</li>
                            })}
                        </ul>
                        <button>Book trial lesson</button>
                    </div>
                </div>
          </li>
        })}
      </ul>
    </div>
  );
};

export default TeachersList;
