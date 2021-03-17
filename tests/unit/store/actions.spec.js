import actions from '../../../src/store/actions'
import { GET_IMAGES,GET_ERROR, GET_IMAGE_BY_ID, DOWNLOAD_IMAGE} from '../../../src/store/constants'
import {downloadImage,getImageById,getImages} from '../../../src/services/gallery.service'


jest.mock('../../../src/services/gallery.service');
jest.mock('../../../src/store/constants');

describe("In actions ",()=>{
    let commit,context;

    beforeEach(()=>{
        commit=jest.fn();
        context=jest.fn();
    })

    it(" test the getImagesData actions method",async ()=>{
        const images= [{
            id: "0",
            author: "Alejandro Escamilla",
            width: 5616,
            height: 3744,
            url: "https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/0/5616/3744"
        },
        {
            id: "1",
            author: "Alejandro Escamilla",
            width: 5616,
            height: 3744,
            url: "https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/1/5616/3744"
        }];
        getImages.mockResolvedValue(images);
        await actions.getImagesData({commit},"pageUrl");
        expect(commit).toHaveBeenCalledWith("getImagesData",images);
    })

    it(" test the getImageById actions method",async ()=>{
        const image= {
            id: "2",
            author: "Alejandro Escamilla",
            width: 5616,
            height: 3744,
            url: "https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/0/5616/3744"
        };
        
        getImageById.mockResolvedValue(image);
        await actions.getImageData({commit},image.id);
        expect(commit).toHaveBeenCalledWith("getImageData",image);
    })
})