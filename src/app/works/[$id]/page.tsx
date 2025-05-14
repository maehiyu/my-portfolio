import { works } from "@/data/works";

export default function Work({params}: {params: {id: string}}) {
    const work = works.find((work) => work.id === params.id);
    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    );
}   