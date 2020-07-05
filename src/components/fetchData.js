export default async (key) => {
   new Promise(resolve => setTimeout(resolve, 2000));
   const response = fetch('https://randomuser.me/api/')
      .then(response => response.json())
   console.log(key, response)
   return response
}