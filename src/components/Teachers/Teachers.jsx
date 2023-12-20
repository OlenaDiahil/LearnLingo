import ModalLesson from "../ModalLesson/ModalLesson"
import TeachersList from "../TeachersList/TeachersList"

const Teachers = () => {
  return (
    <>
        <ModalLesson/>  
        <TeachersList />
        <button type="button">Load more</button>  
    </>
  )
}

export default Teachers