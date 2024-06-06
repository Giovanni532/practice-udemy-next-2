import React from 'react'

export default function SnippetCreatePage() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Créer ton Snippet !</h3>
            <form action={""}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-gray-700 font-semibold">Titre</label>
                        <input
                            id='title'
                            className='border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            name='title'
                            placeholder="Entrer le titre"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="code" className="text-gray-700 font-semibold">Code</label>
                        <textarea
                            id='code'
                            className='border rounded-lg p-3 w-full h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                            name='code'
                            placeholder="Entrer votre code ici"
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    )
}
