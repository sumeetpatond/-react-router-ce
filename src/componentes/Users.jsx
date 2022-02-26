import { useParams } from 'react-router-dom';

function Users() {
    const params = useParams();
    const id = params.id;
    return <div>Users: {id}</div>;
}

export default Users;
