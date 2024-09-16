console.log('#14. JavaScript homework example file')
// #1
import { getData } from './getData.js';

getData(`/posts`)

// #2
import { postData } from './postData.js';

postData('/posts', {
  name: 'New Item',
  title: 'Update Title',
  body: 'This is a new item',
  userId: '1',
});


// #3
import { putData } from './putData.js';

const id = 1
const data = {
  title: 'Update Title',
  body: 'Update Body',
  userId: 1,
  text: 'Update Text',
}
putData(id, data);

// #4
import { patchData } from './patchData.js';

const id2 = 1;
const data2 = {
  title: 'JavaScript',
}
patchData(id2, data2);

// #5
import { deleteData } from './deleteData.js';

const id3 = 1;
deleteData(id);

