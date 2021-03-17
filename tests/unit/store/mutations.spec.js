import mutations from '../../../src/store/mutations'

describe("In mutations",()=>{

    
    it("checks getImages mutations and sets images data in state",()=>{
        const images=[ {
            
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
        const state={
            images:[],
            paginationLink:null,
        };
        const response={
          headers:{
              link:"paginationUrl"
          },
          data:images,
        }
        mutations.getImagesData(state, response);
        expect(state.images).toBe(images)
        expect(state.paginationLink).toBe("paginationUrl")
    })

    it("checks getImageData mutations and sets image data in state",()=>{
        const image= {
            
            id: "0",
            author: "Alejandro Escamilla",
            width: 5616,
            height: 3744,
            url: "https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/0/5616/3744"
        };
        
        const state={
            image:null,
           
        };
        
        mutations.getImageData(state, image);
        expect(state.image).toBe(image)
       
    })

    it("checks  deleteImage mutations ",()=>{
        const image= {
            
            id: "0",
            author: "Alejandro Escamilla",
            width: 5616,
            height: 3744,
            url: "https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/0/5616/3744"
        };
        
        const state={
            image:image,
           
        };
        
        mutations.deleteImage(state);
        expect(state.image).toBe(null)
       
    })

    it("checks  changePageLimit mutations ",()=>{
        const state={
            pageUrl:'https://picsum.photos/v2/list?page=1&limit=30',
           };
        mutations.changePageLimit(state,5);
        expect(state.pageUrl).toBe('https://picsum.photos/v2/list?page=1&limit=5')
       
    })
    it("checks getErrorData mutations and sets error data in state",()=>{
        const error= {
        message:"Page Not Found"
        };
        const state={
            error:null,
           };
        mutations.getErrorData(state, error);
        expect(state.error).toBe(error)
       
    })
    it("checks changeUrlToNext mutations ",()=>{
        const state={
            paginationLink:'<https://picsum.photos/v2/list?page=1&limit=30>; rel="prev", <https://picsum.photos/v2/list?page=3&limit=30>; rel="next"',
            pageUrl:'https://picsum.photos/v2/list?page=2&limit=30',
            pageNumber:'2',
           };
        mutations.changeUrlToNext(state);
        expect(state.pageUrl).toBe('https://picsum.photos/v2/list?page=3&limit=30')
        expect(state.pageNumber).toBe("3")
       
    })

    it("checks changeUrlToPrevious mutations ",()=>{
       const state={
            paginationLink:'<https://picsum.photos/v2/list?page=1&limit=30>; rel="prev", <https://picsum.photos/v2/list?page=3&limit=30>; rel="next"',
            pageUrl:'https://picsum.photos/v2/list?page=2&limit=30',
            pageNumber:'2',
           };
        mutations.changeUrlToPrevious(state);
        expect(state.pageUrl).toBe('https://picsum.photos/v2/list?page=1&limit=30')
        expect(state.pageNumber).toBe("1")
       
    })

})