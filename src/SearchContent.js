import { useParams } from "react-router-dom";


export default function SearchContent(){
    const {index} = useParams();
    return (
        <div>
            Search Content for {index} will be updated Shortly.
        </div>
    );
}