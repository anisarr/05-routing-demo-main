type Props = {
    params: {
        urutanBlogs: string
    }
}

export default function BlogUrutan({params}: Props){
    return(
        <h1>This is {params.urutanBlogs} Blog</h1>
    );
}