import { useFetchPhotosQuery } from "../store";

function PhotosList({ album }){
    const results = useFetchPhotosQuery(album);
    console.log(results);

    return(
        <div>
            PhotosList
        </div>
    )
};

export default PhotosList;