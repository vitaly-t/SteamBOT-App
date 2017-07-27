import {QueryFile} from 'pg-promise';
import path from 'path';


const query = (file) => {

    const fullPath = path.join(__dirname, file); // generating full path;
    const options = {
        minify: true,
        params: {
            schema: 'public'
        }
    };

    const qf = new QueryFile(fullPath, options);

    if (qf.error) {
        console.error(qf.error);
    }

    return qf;
};

export default query;