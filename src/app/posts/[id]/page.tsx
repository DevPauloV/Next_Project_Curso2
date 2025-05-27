import { PostProps } from "../page";
import { PostInfo } from "./_components/post";
import { Suspense } from "react";

export default async function DetailPost({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;


    // Importa o componente PostInfo de forma assíncrona
    // Suspense é usado para lidar com o carregamento assíncrono do componente
    return (

        <div>
            <h1 className="text-2xl font-bold text-center">
                Detalhes do post: {id}
            </h1>

            <Suspense fallback={<h1>Carregando...</h1>}>
                <PostInfo id={id} />
            </Suspense>
        </div>
    )
}