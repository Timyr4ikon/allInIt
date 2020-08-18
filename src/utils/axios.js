import axios from 'axios'
import shortid from 'shortid';

export function postUser (obj){
    const id = shortid.generate();
    return axios.patch('https://lololoshka-d6f84.firebaseio.com/users.json',{
        [id]: {
            ...obj,
            id
        }
    })
}

export function clearUsersList (){
    const id = shortid.generate();
   return axios.put('https://lololoshka-d6f84.firebaseio.com/users.json',{
    [id]: {
        name: 'BOSS',
        email: 'demo@gmail.com',
        password: 'U2FsdGVkX18dOpB6Fb6sBeiIjwyniq9lrmKZrRq2Fd0=',
        xp: 1110,
        allArticles: [0],
        favoritesArticles:[0],
        id
    }
    })
    
}

export function getUsersList (){
  return  axios.get('https://lololoshka-d6f84.firebaseio.com/users.json')
  .then(data => Object.values(data.data))   
}
export function deleteUser (id){
    return  axios.delete(`https://lololoshka-d6f84.firebaseio.com/users/${id}.json`)
  }

export function refreshUser (obj){
 return axios.put(`https://lololoshka-d6f84.firebaseio.com/users/${obj.id}.json`,obj)
}
