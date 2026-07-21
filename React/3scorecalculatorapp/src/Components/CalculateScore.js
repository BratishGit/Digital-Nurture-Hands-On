import "../Stylesheets/mystyle.css";

function CalculateScore(props){
    const average=props.total/props.goal;
    return(
        <div className="box">
            <h1>Student Details</h1>
            <p><b>Name:</b>{props.name}</p>
            <p><b>School:</b>{props.school}</p>
            <p><b>Total Marks:</b>{props.total}</p>
            <p><b>Subjects: </b>{props.goal}</p>
            <h2>Average Score={average}</h2>
        </div>
    );
}
export default CalculateScore;