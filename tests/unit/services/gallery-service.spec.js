import {downloadImage, getImageById,getImages} from '../../../src/services/gallery.service'
import axios from 'axios'


jest.mock('axios')
describe("In gallery service file",()=>{

    it('tests getImageById method', async ()=>{
        axios.get=jest.fn();
    const mockedResponse= {
            
    id: "0",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url:"https://picsum.photos/id/0/5616/3744"
};
  axios.get.mockResolvedValue(mockedResponse);
  
  await getImageById(0).then((result)=>{
     expect(result).toBe(mockedResponse)
  })
 
 })


 it('tests getImages method', async ()=>{
        axios.get=jest.fn();
    const mockedResponse=[ {
            
    id: "0",
    author: "Alejandro Escamilla",
    width: 5616,
    height: 3744,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url:"https://picsum.photos/id/0/5616/3744"
}];
  axios.get.mockResolvedValue(mockedResponse);
  
  await getImages('https://picsum.photos/v2/list?page=1&limit=30').then((result)=>{
     expect(result).toBe(mockedResponse)
  })
 
    })

    it('tests downloadImage method', async ()=>{
        axios.get=jest.fn();
    const mockedResponse={type:'blob'};
  axios.mockResolvedValue(mockedResponse);
  
  await downloadImage({
    url:'https://picsum.photos/id/0/5616/3744',
    method:'GET',
    responseType:'blob'
  }).then((result)=>{
     expect(result).toBe(mockedResponse)
  })
 
    })



})