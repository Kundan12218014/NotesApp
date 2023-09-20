import { Container, Grid } from "@mui/material";
import Note from "../components/Note";
import useFetch from "../Hooks/useFetch";


const Notes = () => {
    const {data:notes, isPending, error} = useFetch('http://localhost:8000/notes');

    return ( 
        <Container sx={{mt:2}}>
            <Grid container spacing={2}>
                {notes && notes.map(note => (
                    <Grid item md={4} sm={12} key={note.id}>
                        <Note note={note}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
     );
}
 
export default Notes;