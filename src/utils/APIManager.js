import superagent from 'superagent'
import Promise from 'bluebird'

export default{
    
    get: (endpoint, params)=>{
        return new Promise((resolve, reject)=>{
          superagent
          .get(endpoint)
          .query(params)
          .set('Accept', 'application/json')
          .end((err, response) => {
            if(err){
                reject(err)
                return
            }
            if(response.body.confirmation!='success'){
                reject(new Error(response.body.message))
                return
            }
            resolve(response.body)
          })
        })
    },
    
    post: (endpoint, params) => {
        return new Promise((resolve, reject)=>{
            superagent
            .post(endpoint)
            .send(params)
            .set('Accept', 'application/json')
            .end((err, response)=>{
                if(err){
                    reject(err)
                    return
                }
                if(response.body.confirmation!='success'){
                    reject(new Error(response.body.message))
                    return
                }
                resolve(response.body)
            })
        })    
    }
}