// SERVER COMPONENT

// REDENRIZADO PELO CLIENTE (JAVASCRIPT)

// Não funciona usestate e useeffect pois ele esta rodando no servidor, funciona apenas usando 'use cliente'

import Link from 'next/link';
export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}

export default async function PostsPage() {

    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json();


    // Função que será chamada quando o botão for clicado
    async function handleFeatchPost() {

        'use server';

        const response = await fetch('https://dummyjson.com/posts')
        const data: ResponseProps = await response.json();

        console.log(data.posts);
    }


    // Função que será chamada quando o formulário for enviado
    async function handleSearchUsers(formData: FormData) {
        'use server';

        const userId = formData.get('userid');

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
        const data: ResponseProps = await response.json();

        console.log(data);
    }


    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
                Todos os posts
            </h1>

            <button onClick={handleFeatchPost}>
                Buscar posts
            </button>

            <form
                className="flex gap-2 my-4"
                action={handleSearchUsers}
            >
                <input
                    type="text"
                    placeholder="Id do usuario"
                    className="border border-gray-200 p-2"
                    name="userid"
                />
                <button
                    className="bg-blue-500 text-white p-2 "
                    type="submit"
                >
                    Buscar usuario
                </button>
            </form>


            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map((post) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className="text-blue-500" href={`/posts/${post.id}`}>
                        Acessar detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}