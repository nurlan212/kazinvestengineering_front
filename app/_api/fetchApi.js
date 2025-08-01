const api = process.env.NEXT_PUBLIC_API_BACKEND;

export const fetchApi = {
  chatPost: async(textValue)=>{
    const response = await fetch(`${api}/chat/`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({text: textValue})
    });

    return response;
  }
}