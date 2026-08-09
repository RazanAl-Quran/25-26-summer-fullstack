// const Greeting = ({username,lastname}) => {
//     return (
//         <div>
//             <h1>hello {username} from Greeting component</h1>
//             <h1>{lastname}</h1>
//         </div>
//     );
// }

// export default Greeting;



const Greeting = (props) => {

    console.log(props);
    
    return (
        <div>
            <h1>hello {props.username} from Greeting component</h1>
            <h1>{props.lastname}</h1>
        </div>
    );
}

export default Greeting;
