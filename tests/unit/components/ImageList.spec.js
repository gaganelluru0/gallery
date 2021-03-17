import { shallowMount,createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import ImageList from './../../../src/components/ImageList.vue'
import {routes} from './../../../src/router/index'
import VueRouter from 'vue-router'


//Vue.config.ignoredElements = ["b-button","b-img","b-container","b-form-input"];
describe("Test for ImageList.vue component",()=>{
  
    let actions,getters,mutations
    let store,wrapper
    const router=new VueRouter({routes})
beforeEach(()=>{
    const localVue=createLocalVue()
 localVue.use(Vuex)
 localVue.use(VueRouter)
 localVue.use(BootstrapVue)
    mutations={
        changeUrlToNext:jest.fn(),
        changeUrlToPrevious:jest.fn(),
        changePageLimit:jest.fn()
    }
    getters={
       getPageNumber:()=>2,
       getPageUrl:()=>{ return 'https://picsum.photos/v2/list?page=1&limit=30'},
       getImages:()=>{
           return [{
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
        }]
       },
       getError:()=>{return null}
    }
    actions={
        getImagesData:jest.fn(),

    }
   
    store=new Vuex.Store({
        actions,
        mutations,
        getters
    })

    wrapper=shallowMount(ImageList,{store,localVue,router})
})

afterEach(()=>{
    wrapper.destroy();
})

it('Test for Next button in ImageList.vue component',()=>{
   wrapper.find('#next').trigger('click')
   expect(mutations.changeUrlToNext).toHaveBeenCalled()
    
})

it('Test for Previous button in ImageList.vue component',()=>{
   wrapper.find('#prev').trigger('click')
   expect(mutations.changeUrlToPrevious).toHaveBeenCalled()
    
})

it('Test for Limit input in ImageList.vue component',()=>{
   
    wrapper.setData({limit:30})
    console.log(wrapper.html())
    const input=wrapper.find('#limit').trigger('input')
    expect(mutations.changePageLimit).not.toHaveBeenCalled()
})
it('Test to render correct markup',()=>{
    expect(wrapper.html()).toContain("Limit")
})

it("Test to check whether it is a vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it("Should have a div tag with class=page-buttons", () => {
    expect(wrapper.html()).toContain("page-buttons")
    
  })

 
})