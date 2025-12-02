import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

function AlbumsListItem( {album} ) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleClick = () => {
        removeAlbum(album);
    };

    const header = (
    <>
        <Button className="mr-2" loading={results.isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
            {album.title}
        </>
    );

    return(            
        <ExpandablePanel header={header} key={album.id}>
            <PhotosList album={album} />
        </ExpandablePanel>);
};

export default AlbumsListItem;