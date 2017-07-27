import request from 'request-promise-native';

const csgoApi = (group) => {
     let options = {
         uri: `http://steamcommunity.com/groups/${group}/memberslistxml/?xml=1`,
         json: true
     };

     return request(options);

};

export default csgoApi;