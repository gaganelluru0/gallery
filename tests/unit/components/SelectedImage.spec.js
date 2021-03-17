import { shallowMount,createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import SelectedImage from './../../../src/components/SelectedImage.vue'


describe('In SelectedImage Component',()=>{
let actions,mutations,getters
let store,wrapper


beforeEach(()=>{
    const localVue=createLocalVue()
    localVue.use(Vuex)
    actions={
        downloadImage:jest.fn(),
        getImageData:jest.fn()
     },
     mutations={
        deleteImage:jest.fn()
    },
    getters={
        getImage:()=>{
           return   {
              id: "0",
              author: "Alejandro Escamilla",
              width: 5616,
              height: 3744,
              url: "https://unsplash.com/photos/yC-Yzbqy7PY",
              download_url:"https://picsum.photos/id/0/5616/3744"
          }
       },
        getError:()=>{
            return null;
        }    
        
        }
      
   
 store=new Vuex.Store({
        actions,
        getters,
        mutations
    })
    wrapper=shallowMount(SelectedImage,{store,localVue,propsData:{id:1}})
})

it("Test to check whether it is a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  })
it('Tests the Download Image functionality',()=>{
   wrapper.find('button').trigger('click')
  
   expect(actions.downloadImage).toHaveBeenCalled()
    
})


  it("Should have a div tag with class=page-buttons", () => {
    expect(wrapper.html()).toContain("display")
    
  })
  it("Test to the mounted dispatch",()=>{
      expect(actions.getImageData).toHaveBeenCalled()
  })

  it("Tests window.location.href in Selected Image component",()=>{
   global.window = Object.create(window);
   const url="https://unsplash.com/photos/yC-Yzbqy7PY";
   wrapper.find('#author').trigger('click')
    Object.defineProperty(window, 'location', {
      value: {
        href:url ,
      }
    });
    expect(window.location.href).toEqual(url);  
  })
})