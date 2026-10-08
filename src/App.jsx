import Student from'./Components/Student';
import "./App.css";

export default function App() {
  return (
    <>
    <Student name="Spongebob" age={30} isStudent={false}/>
    <Student name="Patrick" age={42} isStudent={true}/>
    <Student name="Squidward" age={50} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student/>
    <Student name="Larry"/>
    </>
  );
}